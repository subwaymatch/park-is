const LINK = /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g;

/** Text with inline links written as [text](https://…); links open in a new tab. */
export function RichText({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(LINK)) {
    parts.push(text.slice(last, m.index));
    parts.push(
      <a key={m.index} href={m[2]} target="_blank" rel="noopener" className="inline-link">
        {m[1]}
      </a>,
    );
    last = m.index + m[0].length;
  }
  parts.push(text.slice(last));
  return parts;
}
