import Link from "next/link";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <Container className="pt-16 pb-24 md:pt-[110px] md:pb-[120px]">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 max-w-3xl text-[44px] font-light leading-[1.1] tracking-[-0.02em] text-heading sm:text-[60px]">
        This page is not on the site.
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-soft">
        The address may be left over from an older page, or it may simply be a
        typo.
      </p>
      <div className="mt-8">
        <Link href="/" className="btn btn-fill">
          Back home
        </Link>
      </div>
    </Container>
  );
}
