import { ogCard, ogSize } from "@/lib/og";
import { profile } from "@/content/site";
import { getCaseStudy, work } from "@/content/work";

export const alt = "Case study";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return work.map((w) => ({ slug: w.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  return ogCard({
    eyebrow: study ? `Case study · ${study.company}` : "Case study",
    title: study?.title ?? profile.name,
    footer: profile.name,
  });
}
