"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRightIcon, CloseIcon, MenuIcon } from "./icons";

const GITHUB = "https://github.com/subwaymatch";

function Logo() {
  return <img src="/images/park-logo.png" alt="Park" width={200} height={61} className="site-logo-img" />;
}

/** The site header. `inverted` switches to white ink, for heroes with a dark top band. */
export function SiteHeader({ inverted = false }: { inverted?: boolean }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const desktop = matchMedia("(min-width: 641px)");
    const onResize = () => desktop.matches && setOpen(false);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    desktop.addEventListener("change", onResize);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      desktop.removeEventListener("change", onResize);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className={inverted ? "site-header is-inverted" : "site-header"}>
        <Link href="/" title="Home" className="site-logo">
          <Logo />
        </Link>
        <nav className="site-nav" aria-label="Main">
          <Link href="/" className="site-nav-projects">
            Projects
          </Link>
          <Link href="/about" className="site-nav-about">
            About
          </Link>
          <a href={GITHUB} target="_blank" rel="noopener" className="site-nav-github">
            GitHub
            <ArrowUpRightIcon />
          </a>
        </nav>
        <button type="button" className="menu-button" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}>
          <MenuIcon />
        </button>
      </header>
      {open && (
        <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="mobile-menu-bar">
            <Link href="/" title="Home" className="site-logo" onClick={() => setOpen(false)}>
              <Logo />
            </Link>
            <button type="button" className="menu-button" aria-label="Close menu" onClick={() => setOpen(false)} autoFocus>
              <CloseIcon />
            </button>
          </div>
          <nav className="mobile-menu-nav" aria-label="Main">
            <Link href="/" onClick={() => setOpen(false)}>
              Projects
            </Link>
            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>
            <a href={GITHUB} target="_blank" rel="noopener" onClick={() => setOpen(false)}>
              GitHub
              <ArrowUpRightIcon />
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
