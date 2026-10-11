import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mx-auto mt-auto w-full max-w-[1120px] px-6 sm:px-10">
      <div className="flex flex-col gap-3 border-t border-line pt-9 pb-11 text-[13px] text-quiet sm:flex-row sm:justify-between">
        <p>© {site.name}</p>
        <ul className="flex flex-wrap gap-x-2">
          <li>
            <a className="hover:text-heading" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </li>
          <li aria-hidden="true">·</li>
          <li>
            <a
              className="hover:text-heading"
              href={site.linkedin}
              rel="me noopener noreferrer"
              target="_blank"
            >
              LinkedIn<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
          <li aria-hidden="true">·</li>
          <li>
            <a
              className="hover:text-heading"
              href={site.github}
              rel="me noopener noreferrer"
              target="_blank"
            >
              GitHub<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
