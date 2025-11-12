import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Build a srcSet string for a local image path. Example: '/bts.jpg' -> '/bts-480.jpg 480w, /bts-768.jpg 768w'
export function buildSrcSet(imageUrl: string, sizes = [480, 768, 1200]) {
  if (!imageUrl || !imageUrl.startsWith("/")) return "";
  const ext = imageUrl.substring(imageUrl.lastIndexOf("."));
  const base = imageUrl.substring(0, imageUrl.lastIndexOf("."));
  return sizes.map((w) => `${base}-${w}${ext} ${w}w`).join(", ");
}
