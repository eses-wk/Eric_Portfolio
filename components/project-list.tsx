import Link from "next/link";
import { projectPath, projects } from "@/content/projects";
import { ProjectFigure } from "@/components/project-figure";

export function ProjectList({
  headingLevel = 2,
}: {
  headingLevel?: 2 | 3;
}) {
  const Title = headingLevel === 3 ? "h3" : "h2";

  return (
    <div className="divide-y divide-line border-y border-line">
      {projects.map((project, index) => {
        const href = projectPath(project.slug);
        const image = project.images[0];
        return (
          <article
            key={project.slug}
            className="group relative grid gap-8 py-12 md:grid-cols-12 md:gap-12 md:py-16"
          >
            <div className="md:col-span-6">
              <p className="label">
                {String(index + 1).padStart(2, "0")} · {project.kicker}
              </p>
              <Title className="mt-3 text-2xl font-medium leading-snug tracking-tight text-ink sm:text-3xl">
                <Link href={href} className="after:absolute after:inset-0">
                  {project.title}
                </Link>
              </Title>
              <p className="mt-4 max-w-md text-base leading-relaxed text-slate">
                {project.summary}
              </p>
              <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1" aria-label="Topics">
                {project.tags.map((tag) => (
                  <li key={tag} className="label">
                    {tag}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-ink underline decoration-line underline-offset-4 group-hover:decoration-accent">
                Read the case study
              </p>
            </div>
            {image ? (
              <div className="md:col-span-6">
                <ProjectFigure
                  image={image}
                  showCaption={false}
                  sizes="(min-width: 768px) 45vw, 100vw"
                />
              </div>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}
