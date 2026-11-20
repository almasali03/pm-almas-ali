import { ogCard, ogSize } from "@/lib/og";
import { hero, profile } from "@/content/site";

export const alt = `${profile.name}, product leader`;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({ eyebrow: profile.role, title: hero.headline, footer: profile.name });
}
