import Image from "next/image";
import Link from "next/link";
import { projectPath, projects } from "@/content/projects";
import { asset } from "@/lib/asset";

export function ProjectCards({
  headingLevel = 2,
}: {
  headingLevel?: 2 | 3;
}) {
  const Title = headingLevel === 3 ? "h3" : "h2";

  return (
    <ul className="grid gap-7 md:grid-cols-3">
      {projects.map((project, index) => {
        const image = project.images[0];
        return (
          <li key={project.slug}>
            <article className="group relative flex h-full flex-col rounded-[3px] border border-card-line bg-card p-7 transition-colors hover:border-btn-line">
              <p className="mb-[18px] text-[13px] tracking-[0.15em] text-quiet">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div className="mb-6 flex h-[140px] items-center justify-center overflow-hidden border border-card-line bg-[linear-gradient(135deg,#e4e9ee,#edf0f4)] p-2">
                {image ? (
                  <Image
                    src={asset(image.src)}
                    alt=""
                    width={image.width}
                    height={image.height}
                    sizes="(min-width: 768px) 300px, 100vw"
                    className="h-full w-full object-contain opacity-90"
                  />
                ) : null}
              </div>
              <Title className="mb-2.5 text-[19px] font-medium leading-[1.35] text-heading">
                <Link
                  href={projectPath(project.slug)}
                  className="after:absolute after:inset-0"
                >
                  {project.title}
                </Link>
              </Title>
              <p className="text-[15px] text-soft">{project.teaser}</p>
              <p className="tag mt-[18px]">{project.tags.join(" · ")}</p>
              <p className="mt-auto pt-5">
                <span className="block border-t border-divider pt-4 text-sm text-more group-hover:text-heading">
                  View project <span aria-hidden="true">→</span>
                </span>
              </p>
            </article>
          </li>
        );
      })}
    </ul>
  );
}
