import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ProjectList } from "@/components/project-list";
import { projectsPage, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Work",
  description: projectsPage.lede,
  alternates: { canonical: `${site.url}/projects/` },
};

export default function ProjectsPage() {
  return (
    <Container className="py-14 md:py-20">
      <p className="eyebrow">Work</p>
      <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-paper sm:text-6xl">
        {projectsPage.title}
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
        {projectsPage.lede}
      </p>
      <div className="mt-10">
        <ProjectList />
      </div>
    </Container>
  );
}
