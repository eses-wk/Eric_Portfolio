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
    <figure className={`w-full max-w-[340px] text-center ${className}`}>
      <div className="aspect-[340/380] overflow-hidden rounded-[50%_50%_4px_4px/38%_38%_4px_4px] border border-frame-line bg-frame px-[30px] pt-[26px]">
        <Image
          src={asset(portrait.src)}
          alt={portrait.alt}
          width={portrait.width}
          height={portrait.height}
          priority={priority}
          unoptimized
          className="block h-auto w-full"
        />
      </div>
      <figcaption className="mt-4 text-[12.5px] tracking-[0.04em] text-quiet">
        {portrait.caption}
      </figcaption>
    </figure>
  );
}
