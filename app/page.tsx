import Link from "next/link";
import { Container } from "@/components/container";
import { ProjectCards } from "@/components/project-cards";
import { SketchPortrait } from "@/components/sketch-portrait";
import { home, site } from "@/content/site";

export default function HomePage() {
  return (
    <Container>
      <section className="grid items-center gap-16 pt-16 pb-20 md:grid-cols-[1.25fr_1fr] md:gap-20 md:pt-[110px] md:pb-[120px]">
        <div>
          <p className="eyebrow">{home.eyebrow}</p>
          <h1 className="mt-5 mb-[26px] text-[52px] leading-[1.05] font-light tracking-[-0.02em] text-heading sm:text-[76px]">
            {site.name}
          </h1>
          <p className="max-w-[480px] text-[20px] text-soft">{home.intro}</p>
          <div className="mt-10 flex flex-wrap gap-3.5">
            <Link href={home.primaryCta.href} className="btn btn-fill">
              {home.primaryCta.label}
            </Link>
            <Link href={home.secondaryCta.href} className="btn">
              {home.secondaryCta.label}
            </Link>
          </div>
        </div>
        <SketchPortrait priority className="justify-self-center" />
      </section>

      <section aria-labelledby="work-heading">
        <h2 id="work-heading" className="section-label">
          {home.workLabel}
        </h2>
        <div className="mt-10 mb-20 md:mb-[120px]">
          <ProjectCards headingLevel={3} />
        </div>
      </section>

      <section
        aria-labelledby="about-heading"
        className="grid gap-6 pb-20 md:grid-cols-[1fr_1.6fr] md:gap-20 md:pb-[120px]"
      >
        <h2
          id="about-heading"
          className="text-[38px] leading-[1.15] font-light tracking-[-0.01em] text-heading"
        >
          {home.aboutHeading}
        </h2>
        <div>
          <p className="text-[19px] text-soft">{home.aboutBody}</p>
          <p className="mt-6 text-sm">
            <Link href="/about" className="link">
              More about Eric and how he can help
            </Link>
          </p>
        </div>
      </section>

      <section
        aria-labelledby="cta-heading"
        className="border-t border-line py-16 text-center md:py-[90px]"
      >
        <h2
          id="cta-heading"
          className="text-[34px] leading-tight font-light tracking-[-0.01em] text-heading sm:text-[46px]"
        >
          {home.ctaHeading}
        </h2>
        <p className="mt-[18px] mb-[34px] text-[18px] text-soft">{home.ctaBody}</p>
        <a href={`mailto:${site.email}`} className="btn btn-fill">
          {home.ctaButton}
        </a>
      </section>
    </Container>
  );
}
