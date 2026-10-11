/**
 * Prefix a public-folder path with NEXT_PUBLIC_BASE_PATH.
 * next/image leaves unoptimized src values untouched, so GitHub Pages
 * project sites need this or the pictures 404 under /Eric_Portfolio.
 */
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  if (base && (path === base || path.startsWith(`${base}/`))) return path;
  return `${base}${path}`;
}
