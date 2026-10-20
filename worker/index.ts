import app from "vinext/server/fetch-handler";
import { serveMedia } from "./media";

// The Worker: /media/*.mp4 is served with byte ranges so videos can play and
// seek (Safari won't play a video without them), and everything else is the
// vinext app.
export default {
  fetch(request: Request, env: Env, ctx: ExecutionContext) {
    const { pathname } = new URL(request.url);
    if (pathname.startsWith("/media/") && pathname.endsWith(".mp4")) return serveMedia(request, env, ctx);
    return app.fetch(request, env, ctx);
  },
};
