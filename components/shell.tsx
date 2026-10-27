import { type Section, SiteHeader } from "./site-header";

/** The centered content column. `header` adds the site header at its top, with `section` marked in it. */
export function Shell({
  header = true,
  section,
  children,
}: {
  header?: boolean;
  section?: Section;
  children: React.ReactNode;
}) {
  return (
    <div className="wrap">
      <main className="container">
        {header && <SiteHeader section={section} />}
        {children}
      </main>
    </div>
  );
}
