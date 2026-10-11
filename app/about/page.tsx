import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { about, engagement, portrait, services, site } from "@/content/site";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "About",
  description:
    "Eric Wong is a former investment analyst turned data scientist. About, and the kinds of work his projects already demonstrate.",
  alternates: { canonical: `${site.url}/about/` },
};

export default function AboutPage() {
  return (
    <Container className="py-14 md:py-20">
      <p className="eyebrow">About</p>
      <div className="mt-6 grid items-start gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <h1 className="font-serif text-4xl leading-tight text-paper sm:text-6xl">
            {about.title}
          </h1>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <figure className="md:col-span-5">
          <div className="bg-paper p-2">
            <Image
              src={asset(portrait.src)}
              alt={portrait.alt}
              width={portrait.width}
              height={portrait.height}
              sizes="(min-width: 768px) 36vw, 100vw"
              className="h-auto w-full"
            />
          </div>
          <figcaption className="mt-3 text-sm text-faint">
            {site.name}. {portrait.caption}
          </figcaption>
        </figure>
      </div>

      <section aria-labelledby="services-heading" className="mt-16 md:mt-24">
        <h2
          id="services-heading"
          className="font-serif text-3xl text-paper sm:text-5xl"
        >
          What I can help with
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          These are the kinds of problems the projects already cover. They are
          not a menu of packages.
        </p>
        <ol className="mt-8 divide-y divide-line border-y border-line">
          {services.map((service, index) => (
            <li key={service.title} className="grid gap-3 py-8 md:grid-cols-12">
              <p className="font-serif text-2xl text-brass md:col-span-2">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div className="md:col-span-10">
                <h3 className="font-serif text-2xl text-paper">{service.title}</h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
                  {service.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section
        aria-labelledby="engagement-heading"
        className="mt-12 border border-dashed border-brass bg-brass/10 p-6 sm:p-8"
      >
        <p className="eyebrow text-brass">Draft — replace this</p>
        <h2
          id="engagement-heading"
          className="mt-3 font-serif text-3xl text-paper"
        >
          {engagement.title}
        </h2>
        <div className="mt-4 max-w-2xl space-y-4 text-base leading-relaxed text-muted">
          {engagement.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <p className="mt-4 text-sm text-faint">
          Marked in <code className="text-paper">content/site.ts</code> as a
          placeholder. It is not a published offer.
        </p>
      </section>

      <aside className="mt-12 max-w-2xl border-l-2 border-brass pl-5">
        <p className="text-lg leading-relaxed text-paper">{about.aside}</p>
      </aside>

      <p className="mt-12">
        <Link href="/contact" className="btn btn-primary">
          Contact
        </Link>
      </p>
    </Container>
  );
}
