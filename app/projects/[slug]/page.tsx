import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { ProjectFigure } from "@/components/project-figure";
import {
  allProjectParams,
  getProject,
  projectPath,
  projects,
  type ProjectSection,
} from "@/content/projects";
import { site } from "@/content/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return allProjectParams();
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Work" };

  const image = project.images[0];
  const canonical = `${site.url}${projectPath(project.slug)}/`;

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical },
    openGraph: {
      title: project.title,
      description: project.summary,
      url: canonical,
      images: image
        ? [
            {
              url: `${site.url}${image.src}`,
              width: image.width,
              height: image.height,
              alt: image.alt,
            },
          ]
        : undefined,
    },
  };
}

export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  const [lead, ...rest] = project.images;

  return (
    <Container className="py-14 md:py-20">
      <p className="eyebrow">
        <Link href="/projects" className="hover:text-paper">
          Work
        </Link>
        <span aria-hidden="true"> · </span>
        {project.kicker}
      </p>
      <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-tight text-paper sm:text-6xl">
        {project.title}
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
        {project.summary}
      </p>

      <dl className="mt-8 grid gap-6 border-y border-line py-6 sm:grid-cols-3">
        <div>
          <dt className="eyebrow">Area</dt>
          <dd className="mt-2 text-paper">{project.kicker}</dd>
        </div>
        <div>
          <dt className="eyebrow">Topics</dt>
          <dd className="mt-2 text-paper">{project.tags.join(", ")}</dd>
        </div>
        <div>
          <dt className="eyebrow">Repository</dt>
          <dd className="mt-2">
            {project.repo ? (
              <a
                href={project.repo.href}
                className="text-paper underline decoration-brass underline-offset-4"
                rel="noopener noreferrer"
                target="_blank"
              >
                {project.repo.label}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : (
              <span className="text-muted">
                Not published with this project.
              </span>
            )}
          </dd>
        </div>
      </dl>

      {lead ? (
        <div className="mt-10">
          <ProjectFigure image={lead} priority />
        </div>
      ) : null}

      <div className="mt-12 max-w-3xl space-y-12">
        {project.sections.map((section) => (
          <Section key={section.heading} section={section} />
        ))}
      </div>

      {rest.length > 0 ? (
        <div className="mt-12 grid gap-8">
          {rest.map((image) => (
            <ProjectFigure key={image.src} image={image} />
          ))}
        </div>
      ) : null}

      {next ? (
        <p className="mt-16 border-t border-line pt-8">
          <span className="eyebrow">Next</span>
          <Link
            href={projectPath(next.slug)}
            className="mt-3 block font-serif text-3xl text-paper underline decoration-line underline-offset-4 hover:decoration-brass"
          >
            {next.title}
          </Link>
        </p>
      ) : null}
    </Container>
  );
}

function sectionId(heading: string) {
  return heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function Section({ section }: { section: ProjectSection }) {
  const id = sectionId(section.heading);
  const ListTag = section.ordered ? "ol" : "ul";
  const listClass = section.ordered
    ? "mt-4 list-decimal space-y-3 pl-5 text-base leading-relaxed text-muted marker:text-brass"
    : "mt-4 list-disc space-y-3 pl-5 text-base leading-relaxed text-muted marker:text-brass";

  return (
    <section aria-labelledby={id}>
      <h2
        id={id}
        className="font-serif text-3xl text-paper"
      >
        {section.heading}
      </h2>
      <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
        {section.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      {section.bullets ? (
        <ListTag className={listClass}>
          {section.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ListTag>
      ) : null}
    </section>
  );
}
