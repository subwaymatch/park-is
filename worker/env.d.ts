// Types for the parts of the Workers runtime the Worker entry uses.

interface Env {
  /** Static assets (dist/client), from wrangler.jsonc. */
  ASSETS: { fetch(input: Request | string): Promise<Response> };
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
}

/** A pass-through stream that sends a Content-Length and checks that exactly that many bytes go through. */
declare class FixedLengthStream extends TransformStream<Uint8Array, Uint8Array> {
  constructor(expectedLength: number);
}

/** The vinext app, re-exported by vinext/server/fetch-handler. */
declare module "virtual:vinext-worker-entry" {
  const app: { fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> };
  export default app;
}

/** File name to size in bytes for the videos in public/media, from vite.config.ts. */
declare module "virtual:media-sizes" {
  const sizes: Record<string, number>;
  export default sizes;
}
