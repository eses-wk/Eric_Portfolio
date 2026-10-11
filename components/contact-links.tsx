import { site } from "@/content/site";

const links = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "eric-wong-wai-ka",
    href: site.linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: site.githubHandle,
    href: site.github,
    external: true,
  },
] as const;

export function ContactLinks() {
  return (
    <ul className="divide-y divide-line border-y border-line">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className="group grid gap-1 py-6 sm:grid-cols-[8rem_1fr] sm:items-baseline sm:gap-8"
            {...(link.external
              ? { target: "_blank", rel: "me noopener noreferrer" }
              : {})}
          >
            <span className="eyebrow">{link.label}</span>
            <span className="text-xl text-heading underline decoration-line decoration-1 underline-offset-4 group-hover:decoration-btn-line sm:text-2xl">
              {link.value}
              {link.external ? (
                <span className="sr-only"> (opens in a new tab)</span>
              ) : null}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
