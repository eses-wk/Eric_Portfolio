import type { Metadata } from "next";
import { ContactLinks } from "@/components/contact-links";
import { Container } from "@/components/container";
import { contact, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact Eric Wong by email at ${site.email}, or via the LinkedIn and GitHub profiles published on the previous site.`,
  alternates: { canonical: `${site.url}/contact/` },
};

export default function ContactPage() {
  return (
    <Container className="py-14 md:py-20">
      <p className="eyebrow">Contact</p>
      <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-paper sm:text-6xl">
        {contact.title}
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
        {contact.lede}
      </p>
      <div className="mt-10">
        <ContactLinks />
      </div>
    </Container>
  );
}
