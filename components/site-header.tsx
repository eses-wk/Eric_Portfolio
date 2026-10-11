"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { nav, site } from "@/content/site";

function normalize(path: string) {
  if (path.length > 1 && path.endsWith("/")) {
    return path.slice(0, -1);
  }
  return path || "/";
}

function isCurrent(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = normalize(usePathname() ?? "/");
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenPath(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-mist/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-6 py-3 sm:px-10">
        <Link href="/" className="text-base font-medium tracking-tight text-ink">
          {site.name}
        </Link>
        <button
          type="button"
          className="inline-flex min-h-11 items-center px-3 text-sm text-ink md:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpenPath(open ? null : pathname)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav aria-label="Primary" className="hidden md:block">
          <NavList pathname={pathname} />
        </nav>
      </div>
      <nav
        id={menuId}
        aria-label="Primary"
        hidden={!open}
        className="border-t border-line px-5 py-3 md:hidden"
      >
        <NavList pathname={pathname} stacked />
      </nav>
    </header>
  );
}

function NavList({
  pathname,
  stacked = false,
}: {
  pathname: string;
  stacked?: boolean;
}) {
  return (
    <ul className={stacked ? "grid gap-1" : "flex items-center gap-8"}>
      {nav.map((item) => {
        const current = isCurrent(pathname, item.href);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={current ? "page" : undefined}
              className={`inline-flex min-h-11 items-center text-sm ${
                current
                  ? "text-ink underline decoration-accent decoration-1 underline-offset-8"
                  : "text-slate hover:text-ink"
              }`}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
