import type { Metadata } from "next";
import { ContactLinks } from "@/components/contact-links";
import { Container } from "@/components/container";
import { contact, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact Eric Wong by email at ${site.email}, or on LinkedIn and GitHub.`,
  alternates: { canonical: `${site.url}/contact/` },
};

export default function ContactPage() {
  return (
    <Container className="pt-16 pb-24 md:pt-[110px] md:pb-[120px]">
      <p className="eyebrow">Contact</p>
      <h1 className="mt-4 max-w-3xl text-[44px] font-light leading-[1.1] tracking-[-0.02em] text-heading sm:text-[60px]">
        {contact.title}
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-soft">
        {contact.lede}
      </p>
      <div className="mt-10">
        <ContactLinks />
      </div>
    </Container>
  );
}
