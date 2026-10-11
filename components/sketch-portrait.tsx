import Image from "next/image";
import { portrait } from "@/content/site";
import { asset } from "@/lib/asset";

export function SketchPortrait({
  priority = false,
  className = "",
}: {
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure className={className}>
      <div className="overflow-hidden rounded-t-full border border-line bg-surface">
        <Image
          src={asset(portrait.src)}
          alt={portrait.alt}
          width={portrait.width}
          height={portrait.height}
          priority={priority}
          unoptimized
          className="h-auto w-full"
        />
      </div>
      <figcaption className="mt-3 text-center">
        {portrait.placeholder ? (
          <span className="label block">Placeholder illustration</span>
        ) : null}
        <span className="mt-1 block text-sm text-label">{portrait.caption}</span>
      </figcaption>
    </figure>
  );
}
