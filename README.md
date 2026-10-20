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

Project copy, links, captions and the hero tone live in `lib/projects.ts`. Styles are in `app/globals.css`.

## Media

Each project has these files in `public/media/`:

| File | Used for | Size |
| --- | --- | --- |
| `<slug>-loop.mp4`, `<slug>-loop.jpg` | Home card and project hero: a short muted loop and its poster | 1920×1080 |
| `<slug>.mp4`, `<slug>-video.jpg` | Walkthrough with controls, and its poster | 1920×1080 |
| `<slug>-01.jpg`, `<slug>-05.jpg` | Full-width figures | 1920×1080 |
| `<slug>-02.jpg`, `<slug>-03.jpg` | Phone screens, side by side | 1600×2000 |
| `<slug>-04.jpg` | Figure with the caption beside it | 1920×1440 |

The videos are H.264 with no audio track, recorded from the live sites with Playwright. Loops play only while on
screen, and not at all when the visitor prefers reduced motion.

`heroTone` in `lib/projects.ts` is the tone of the top band of a project's loop, where the header sits: `"dark"`
switches the header to white.

Workers Static Assets answer a `Range` request with the whole file, and Safari won't play a video without partial
responses. So `worker/index.ts` sends `/media/*.mp4` through `worker/media.ts`, which reads the file from the assets
binding and returns the bytes asked for (206). The file sizes come from `virtual:media-sizes`, a small plugin in
`vite.config.ts`.

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

For Workers Builds (deploy on push), use `pnpm build` as the build command and `npx wrangler deploy` as the deploy
command. The build writes `.wrangler/deploy/config.json`, which points Wrangler at the generated
`dist/server/wrangler.json`.

`metadataBase` in `app/layout.tsx` is `https://park.is`, which makes Open Graph image URLs absolute. Change it if the
site is served from another domain.
