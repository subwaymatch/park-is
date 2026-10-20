import { readdirSync, statSync } from "node:fs";
import { cloudflare } from "@cloudflare/vite-plugin";
import { staticAssetsAdapter } from "@vinext/cloudflare/cache/static-assets-adapter";
import vinext from "vinext";
import { defineConfig, type Plugin } from "vite";

/**
 * `virtual:media-sizes`: the size in bytes of each video in public/media, read
 * at build time. The media route needs them for Content-Range headers, and the
 * assets binding does not send a Content-Length.
 */
function mediaSizes(): Plugin {
  const id = "virtual:media-sizes";
  return {
    name: "media-sizes",
    resolveId: (s) => (s === id ? "\0" + id : undefined),
    load(s) {
      if (s !== "\0" + id) return;
      const dir = "public/media/";
      const files = readdirSync(dir).filter((f) => f.endsWith(".mp4"));
      return "export default " + JSON.stringify(Object.fromEntries(files.map((f) => [f, statSync(dir + f).size])));
    },
  };
}

export default defineConfig({
  plugins: [
    mediaSizes(),
    vinext({
      // Every page is static: prerender them at build time and serve the
      // HTML from Workers Static Assets.
      cache: { cdn: staticAssetsAdapter() },
      prerender: { routes: "*" },
    }),
    cloudflare({
      viteEnvironment: {
        name: "rsc",
        childEnvironments: ["ssr"],
      },
    }),
  ],
});
