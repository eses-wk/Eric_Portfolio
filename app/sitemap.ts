import type { MetadataRoute } from "next";
import { projectPath, projects } from "@/content/projects";
import { site } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/about/",
    "/projects/",
    "/contact/",
    ...projects.map((project) => `${projectPath(project.slug)}/`),
  ];

  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date("2026-10-11"),
  }));
}
