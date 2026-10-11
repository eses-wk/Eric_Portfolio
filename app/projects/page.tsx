import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ProjectCards } from "@/components/project-cards";
import { projectsPage, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Work",
  description: projectsPage.lede,
  alternates: { canonical: `${site.url}/projects/` },
};

export default function ProjectsPage() {
  return (
    <Container className="pt-16 pb-24 md:pt-[110px] md:pb-[120px]">
      <p className="eyebrow">Work</p>
      <h1 className="mt-4 max-w-3xl text-[44px] font-light leading-[1.1] tracking-[-0.02em] text-heading sm:text-[60px]">
        {projectsPage.title}
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-soft">
        {projectsPage.lede}
      </p>
      <div className="mt-10">
        <ProjectCards />
      </div>
    </Container>
  );
}
