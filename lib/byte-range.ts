export type ByteRange = { start: number; end: number };

/**
 * Parse a Range header against a file of `size` bytes. Returns null when the
 * whole file should be sent (no header, a malformed header, or several ranges,
 * which video players don't ask for), or "unsatisfiable" for a 416.
 */
export function parseRange(header: string | null, size: number): ByteRange | "unsatisfiable" | null {
  const m = header && /^bytes=(\d*)-(\d*)$/.exec(header.trim());
  if (!m || (m[1] === "" && m[2] === "")) return null;
  if (m[1] === "") {
    // Suffix range: the last N bytes.
    const n = Number(m[2]);
    if (n === 0 || size === 0) return "unsatisfiable";
    return { start: Math.max(0, size - n), end: size - 1 };
  }
  const start = Number(m[1]);
  const end = m[2] === "" ? size - 1 : Math.min(Number(m[2]), size - 1);
  if (start >= size || end < start) return "unsatisfiable";
  return { start, end };
}

/** Write bytes start..end (inclusive) of `body` to `out`, then stop reading. */
export async function copyRange(body: ReadableStream<Uint8Array>, { start, end }: ByteRange, out: WritableStream<Uint8Array>) {
  const reader = body.getReader();
  const writer = out.getWriter();
  let pos = 0;
  try {
    while (pos <= end) {
      const { done, value } = await reader.read();
      if (done) break;
      const from = Math.max(start - pos, 0);
      const to = Math.min(end + 1 - pos, value.byteLength);
      if (from < to) await writer.write(value.subarray(from, to));
      pos += value.byteLength;
    }
    await writer.close();
  } finally {
    reader.cancel().catch(() => {});
  }
}
