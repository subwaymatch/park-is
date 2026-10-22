const LINK = /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g;

/** Text with inline links written as [text](https://…), which open in a new tab, and line breaks written as \n. */
export function RichText({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  text.split("\n").forEach((line, l) => {
    if (l) parts.push(<br key={l} />);
    let last = 0;
    for (const m of line.matchAll(LINK)) {
      parts.push(line.slice(last, m.index));
      parts.push(
        <a key={`${l}-${m.index}`} href={m[2]} target="_blank" rel="noopener" className="inline-link">
          {m[1]}
        </a>,
      );
      last = m.index + m[0].length;
    }
    parts.push(line.slice(last));
  });
  return parts;
}
