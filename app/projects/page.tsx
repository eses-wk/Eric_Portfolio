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
    <Container className="py-20 md:py-28">
      <p className="label">Work</p>
      <h1 className="mt-4 max-w-3xl text-4xl font-medium leading-tight tracking-tight text-ink sm:text-5xl">
        {projectsPage.title}
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate">
        {projectsPage.lede}
      </p>
      <div className="mt-10">
        <ProjectList />
      </div>
    </Container>
  );
}
