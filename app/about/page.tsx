import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { SketchPortrait } from "@/components/sketch-portrait";
import { about, engagement, services, site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Eric Wong is a former investment analyst turned data scientist. About, and the kinds of work his projects already demonstrate.",
  alternates: { canonical: `${site.url}/about/` },
};

export default function AboutPage() {
  return (
    <Container className="pt-16 pb-24 md:pt-[110px] md:pb-[120px]">
      <div className="grid items-start gap-14 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-7">
          <p className="eyebrow">About</p>
          <h1 className="mt-4 text-[44px] font-light leading-[1.1] tracking-[-0.02em] text-heading sm:text-[60px]">
            {about.title}
          </h1>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-soft">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-8 border-l border-line pl-5 text-base leading-relaxed text-soft">
            {about.aside}
          </p>
        </div>
        <SketchPortrait className="mx-auto w-full max-w-[16rem] md:col-span-5 md:max-w-xs" />
      </div>

      <section aria-labelledby="services-heading" className="mt-24 md:mt-32">
        <p className="eyebrow">Services</p>
        <h2
          id="services-heading"
          className="mt-3 text-[38px] font-light leading-[1.15] tracking-[-0.01em] text-heading"
        >
          What I can help with
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-soft">
          These are the kinds of problems the projects already cover. They are
          not a menu of packages.
        </p>
        <ol className="mt-10 divide-y divide-line border-y border-line">
          {services.map((service, index) => (
            <li key={service.title} className="grid gap-3 py-10 md:grid-cols-12 md:gap-8">
              <p className="eyebrow md:col-span-2">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div className="md:col-span-10">
                <h3 className="text-[19px] font-medium text-heading">{service.title}</h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-soft">
                  {service.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section
        aria-labelledby="engagement-heading"
        className="mt-16 border border-dashed border-btn-line/60 bg-card p-8 sm:p-10"
      >
        <p className="eyebrow">Draft — replace this</p>
        <h2
          id="engagement-heading"
          className="mt-3 text-[28px] font-light tracking-[-0.01em] text-heading"
        >
          {engagement.title}
        </h2>
        <div className="mt-4 max-w-2xl space-y-4 text-base leading-relaxed text-soft">
          {engagement.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <p className="mt-5 text-sm text-quiet">
          Marked in <code className="text-heading">content/site.ts</code> as a
          placeholder. It is not a published offer.
        </p>
      </section>

      <p className="mt-16">
        <Link href="/contact" className="btn btn-fill">
          Contact
        </Link>
      </p>
    </Container>
  );
}
