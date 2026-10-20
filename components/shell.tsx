import { SiteHeader } from "./site-header";

/** The centered content column. `header` adds the site header at its top. */
export function Shell({ header = true, children }: { header?: boolean; children: React.ReactNode }) {
  return (
    <div className="wrap">
      <main className="container">
        {header && <SiteHeader />}
        {children}
      </main>
    </div>
  );
}
