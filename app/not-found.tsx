import Link from "next/link";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <Container className="py-24 md:py-32">
      <p className="label">404</p>
      <h1 className="mt-4 max-w-3xl text-4xl font-medium tracking-tight text-ink sm:text-5xl">
        This page is not on the site.
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate">
        The address may be left over from an older page, or it may simply be a
        typo.
      </p>
      <div className="mt-8">
        <Link href="/" className="btn btn-primary">
          Back home
        </Link>
      </div>
    </Container>
  );
}
