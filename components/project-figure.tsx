import Image from "next/image";
import type { ProjectImage } from "@/content/projects";
import { asset } from "@/lib/asset";

export function ProjectFigure({
  image,
  priority = false,
  showCaption = true,
  sizes = "(min-width: 1024px) 960px, 100vw",
}: {
  image: ProjectImage;
  priority?: boolean;
  showCaption?: boolean;
  sizes?: string;
}) {
  return (
    <figure>
      <div className="border border-line bg-surface p-3 sm:p-4">
        <Image
          src={asset(image.src)}
          alt={image.alt}
          width={image.width}
          height={image.height}
          priority={priority}
          sizes={sizes}
          className="h-auto w-full opacity-95"
        />
      </div>
      {showCaption && image.caption ? (
        <figcaption className="mt-3 text-sm leading-relaxed text-label">
          {image.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
