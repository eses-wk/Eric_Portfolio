import Link from "next/link";
import { nav, site } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto grid w-full max-w-5xl gap-8 px-6 py-12 sm:px-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-base font-medium text-ink">{site.name}</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate">
            Applied data science. Former investment analyst.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="grid gap-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-slate hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="grid gap-2 text-sm">
          <li>
            <a className="text-slate hover:text-ink" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </li>
          <li>
            <a
              className="text-slate hover:text-ink"
              href={site.linkedin}
              rel="me noopener noreferrer"
              target="_blank"
            >
              LinkedIn
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
          <li>
            <a
              className="text-slate hover:text-ink"
              href={site.github}
              rel="me noopener noreferrer"
              target="_blank"
            >
              GitHub
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto w-full max-w-5xl px-6 py-5 text-sm text-label sm:px-10">
          © {year} {site.name}
        </p>
      </div>
    </footer>
  );
}
