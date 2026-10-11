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
    <Container className="py-20 md:py-28">
      <p className="label">Contact</p>
      <h1 className="mt-4 max-w-3xl text-4xl font-medium leading-tight tracking-tight text-ink sm:text-5xl">
        {contact.title}
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate">
        {contact.lede}
      </p>
      <div className="mt-10">
        <ContactLinks />
      </div>
    </Container>
  );
}
