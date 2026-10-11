import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { ProjectList } from "@/components/project-list";
import { home, portrait, services, site } from "@/content/site";
import { asset } from "@/lib/asset";

export default function HomePage() {
  return (
    <>
      <section className="border-b border-line">
        <Container className="grid items-start gap-10 py-14 md:grid-cols-12 md:gap-12 md:py-20">
          <div className="md:col-span-7">
            <p className="eyebrow">{home.eyebrow}</p>
            <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.08] text-paper sm:text-6xl lg:text-7xl">
              {home.titleStart}{" "}
              <em className="italic text-brass">{home.titleEmphasis}</em>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {home.lede}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={home.primaryCta.href} className="btn btn-primary">
                {home.primaryCta.label}
              </Link>
              <Link href={home.secondaryCta.href} className="btn btn-secondary">
                {home.secondaryCta.label}
              </Link>
            </div>
          </div>
          <figure className="md:col-span-5">
            <div className="bg-paper p-2">
              <Image
                src={asset(portrait.src)}
                alt={portrait.alt}
                width={portrait.width}
                height={portrait.height}
                priority
                sizes="(min-width: 768px) 36vw, 100vw"
                className="h-auto w-full"
              />
            </div>
            <figcaption className="mt-3 text-sm leading-relaxed text-faint">
              {site.name}. {portrait.caption}
            </figcaption>
          </figure>
        </Container>
      </section>

      <section aria-labelledby="audiences-heading" className="border-b border-line">
        <Container className="py-14 md:py-20">
          <p className="eyebrow">01</p>
          <h2
            id="audiences-heading"
            className="mt-3 max-w-2xl font-serif text-3xl text-paper sm:text-5xl"
          >
            {home.audiencesHeading}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            {home.audiencesIntro}
          </p>
          <ol className="mt-10 divide-y divide-line border-y border-line">
            {home.audiences.map((item, index) => (
              <li
                key={item.title}
                className="grid gap-3 py-8 md:grid-cols-12 md:gap-8"
              >
                <p className="font-serif text-3xl text-brass md:col-span-2">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-serif text-2xl text-paper md:col-span-4 md:text-3xl">
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed text-muted md:col-span-6">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section aria-labelledby="work-heading">
        <Container className="py-14 md:py-20">
          <p className="eyebrow">02</p>
          <h2
            id="work-heading"
            className="mt-3 max-w-2xl font-serif text-3xl text-paper sm:text-5xl"
          >
            {home.workHeading}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            {home.workIntro}
          </p>
          <div className="mt-10">
            <ProjectList headingLevel={3} />
          </div>
        </Container>
      </section>

      <section aria-labelledby="services-heading" className="border-t border-line">
        <Container className="py-14 md:py-20">
          <p className="eyebrow">03</p>
          <h2
            id="services-heading"
            className="mt-3 max-w-2xl font-serif text-3xl text-paper sm:text-5xl"
          >
            {home.servicesHeading}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            {home.servicesIntro}
          </p>
          <ul className="mt-10 grid gap-px bg-line md:grid-cols-3">
            {services.map((service) => (
              <li key={service.title} className="bg-ink p-6 sm:p-8">
                <h3 className="font-serif text-2xl text-paper">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {service.body}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-8">
            <Link href="/about" className="text-paper underline decoration-brass underline-offset-4">
              Read the fuller note on About
            </Link>
          </p>
        </Container>
      </section>

      <section aria-labelledby="cta-heading" className="border-t border-line bg-panel">
        <Container className="py-14 md:py-20">
          <h2
            id="cta-heading"
            className="max-w-2xl font-serif text-3xl text-paper sm:text-5xl"
          >
            {home.ctaHeading}
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
            {home.ctaBody}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={`mailto:${site.email}`} className="btn btn-primary">
              {site.email}
            </a>
            <Link href="/contact" className="btn btn-secondary">
              All contact links
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
