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
            className="relative grid gap-6 py-10 md:grid-cols-12 md:gap-10 md:py-14"
          >
            {image ? (
              <div className="md:col-span-5">
                <ProjectFigure image={image} sizes="(min-width: 768px) 40vw, 100vw" />
              </div>
            ) : null}
            <div className="md:col-span-7">
              <p className="eyebrow">
                {String(index + 1).padStart(2, "0")} · {project.kicker}
              </p>
              <Title className="mt-3 font-serif text-3xl leading-tight text-paper sm:text-4xl">
                <Link
                  href={href}
                  className="after:absolute after:inset-0 focus-visible:outline"
                >
                  {project.title}
                </Link>
              </Title>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
                {project.summary}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Topics">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="border border-line px-2.5 py-1 text-xs tracking-wide text-faint uppercase"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-brass">Read the case study</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
