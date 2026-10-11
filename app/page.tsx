import Link from "next/link";
import { Container } from "@/components/container";
import { ProjectList } from "@/components/project-list";
import { SketchPortrait } from "@/components/sketch-portrait";
import { home, site } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <section className="border-b border-line">
        <Container className="grid items-center gap-14 py-20 md:grid-cols-12 md:gap-16 md:py-28">
          <div className="md:col-span-7">
            <p className="label">Data science · Portfolio</p>
            <h1 className="mt-5 text-5xl font-medium tracking-tight text-ink sm:text-6xl">
              {site.name}
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate">
              {home.intro}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href={home.primaryCta.href} className="btn btn-primary">
                {home.primaryCta.label}
              </Link>
              <Link href={home.secondaryCta.href} className="btn btn-secondary">
                {home.secondaryCta.label}
              </Link>
            </div>
          </div>
          <SketchPortrait
            priority
            className="mx-auto w-full max-w-[17rem] md:col-span-5 md:max-w-xs"
          />
        </Container>
      </section>

      <section aria-labelledby="work-heading">
        <Container className="py-20 md:py-28">
          <p className="label">Case studies</p>
          <h2
            id="work-heading"
            className="mt-3 text-3xl font-medium tracking-tight text-ink sm:text-4xl"
          >
            {home.workHeading}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate">
            {home.workIntro}
          </p>
          <div className="mt-12">
            <ProjectList headingLevel={3} />
          </div>
        </Container>
      </section>

      <section aria-labelledby="about-heading" className="border-t border-line">
        <Container className="grid gap-6 py-20 md:grid-cols-12 md:gap-16 md:py-28">
          <div className="md:col-span-4">
            <p className="label">Background</p>
            <h2
              id="about-heading"
              className="mt-3 text-3xl font-medium tracking-tight text-ink sm:text-4xl"
            >
              {home.aboutHeading}
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="max-w-xl text-lg leading-relaxed text-slate">
              {home.aboutBody}
            </p>
            <p className="mt-6">
              <Link href="/about" className="link text-sm">
                More about Eric and how he can help
              </Link>
            </p>
          </div>
        </Container>
      </section>

      <section aria-labelledby="cta-heading" className="border-t border-line bg-surface">
        <Container className="py-20 text-center md:py-28">
          <p className="label">Contact</p>
          <h2
            id="cta-heading"
            className="mt-3 text-3xl font-medium tracking-tight text-ink sm:text-4xl"
          >
            {home.ctaHeading}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-slate">
            {home.ctaBody}
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
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
