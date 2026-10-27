# park.is

Ye Joo Park's portfolio: five projects, each with a looping hero clip, a walkthrough video and screenshots, plus an
About page. Built from the Claude Design file `Portfolio.dc.html`.

It's a [vinext](https://github.com/cloudflare/vinext) app (the Next.js App Router API on Vite) deployed to Cloudflare
Workers. Every page is prerendered at build time and served from Workers Static Assets.

## Pages

| Route | File |
| --- | --- |
| `/` project grid | `app/page.tsx` |
| `/<slug>` project page | `app/[slug]/page.tsx` |
| `/about` | `app/about/page.tsx` |

Each project's page is written in `lib/content/<slug>.ts`: a summary, a few facts, then a list of sections (text,
figures, an animated logo for some, and live embeds). The types are in `lib/projects.ts`. Styles are in
`app/globals.css`, and the logos in `components/project-logo.tsx`.

An `embed` block renders a live component by name from `components/embeds/<slug>.tsx`, optionally full-bleed: Tabbied
patterns drawn by the `tabbied` package, layeris before/after sliders and blend grids, and React 3D Mockups scenes
rendered by `react-3d-mockups`. Their styles are CSS modules beside them. The 3D scenes load three.js lazily, only on
that page and only as a scene nears the viewport.

## Media

Each project has a folder in `public/media/<slug>/`:

| File | Used for |
| --- | --- |
| `hero.mp4`, `hero.jpg` | Home card and project hero: a muted loop of the site in a browser card, and its poster (1920×1080) |
| `<name>.mp4`, `<name>.jpg` | A figure: a muted loop (or the walkthrough, which has controls) and its poster |
| `<name>.jpg` alone | A still figure |

A figure's `shape` in `lib/content/<slug>.ts` sets its frame: `wide` 16:9 (1920×1080), `tall` 4:3 (1920×1440),
`phone` 4:5 (a phone screen on the page's surface colour, 1200×1500 or 1600×2000). Phone shots already sit on the
surface colour, so their frames have no hairline edge.

The videos are H.264 with no audio track, recorded from the live sites with Playwright. Loops play only while on
screen, and not at all when the visitor prefers reduced motion. Their posters load as they near the viewport, since a
project page holds many of them.

`heroTone` in `lib/content/<slug>.ts` is the tone of the top band of a project's loop, where the header sits: `"dark"`
switches the header to white. On phones the header sits on the page above the loop instead, and the loop is cropped
below its grey top margin, so `heroTone` applies on wider screens only.

Workers Static Assets answer a `Range` request with the whole file, and Safari won't play a video without partial
responses. So `worker/index.ts` sends `/media/*.mp4` through `worker/media.ts`, which reads the file from the assets
binding and returns the bytes asked for (206). The file sizes come from `virtual:media-sizes`, a small plugin in
`vite.config.ts` that reads `public/media` and its folders. In `pnpm dev` that list is read once, so restart the dev
server after adding a video.

## Develop

Requires Node 22 or later and pnpm.

```sh
pnpm install
pnpm dev        # http://localhost:5173, in the Workers runtime
pnpm typecheck
pnpm build      # dist/client (static assets, prerendered pages) and dist/server (the Worker)
pnpm start      # serve the build locally with Wrangler
```

## Deploy

```sh
pnpm run deploy
```

This uses `vinext-cloudflare deploy`, so sign in with `wrangler login` or set `CLOUDFLARE_API_TOKEN` and
`CLOUDFLARE_ACCOUNT_ID`. The Worker is named `park-is` (`wrangler.jsonc`).

`wrangler.jsonc` turns on both workers.dev URLs: production at `park-is.<subdomain>.workers.dev` (`workers_dev`), and
a Preview URL for every uploaded version, `<version>-park-is.<subdomain>.workers.dev` (`preview_urls`). Wrangler
leaves Preview URLs off unless the setting is there.

For Workers Builds (deploy on push), use `pnpm build` as the build command and `npx wrangler deploy` as the deploy
command. The build writes `.wrangler/deploy/config.json`, which points Wrangler at the generated
`dist/server/wrangler.json`.

`metadataBase` in `app/layout.tsx` is `https://park.is`, which makes Open Graph image URLs absolute. Change it if the
site is served from another domain.
