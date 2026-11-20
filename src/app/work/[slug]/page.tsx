import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { CountUp } from "@/components/CountUp";
import { FlowDiagram } from "@/components/FlowDiagram";
import { Reveal } from "@/components/Reveal";
import { ScrollLine } from "@/components/ScrollLine";
import { getCaseStudy, work } from "@/content/work";

export function generateStaticParams() {
  return work.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return { title: study.title, description: study.summary };
}

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const index = work.findIndex((w) => w.slug === slug);
  const next = work[(index + 1) % work.length];

  const steps = [
    { label: "The problem", body: study.problem },
    { label: "What I noticed", body: study.noticed },
    { label: "The bet", body: study.bet },
  ];

  return (
    <article>
      <header className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div aria-hidden className="hero-glow" />
        <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
          <Link href="/#work" className="fade-up text-sm text-ink-soft hover:text-ink">
            ← All work
          </Link>
          <p className="eyebrow fade-up mt-10" style={{ "--d": "80ms" } as CSSProperties}>
            {study.company} · {study.role} · {study.period}
          </p>
          <h1
            className="fade-up mt-5 font-display text-[clamp(2.6rem,6vw,4.75rem)] leading-[1.02] tracking-tight text-ink"
            style={{ "--d": "160ms" } as CSSProperties}
          >
            {study.title}
          </h1>
          <p className="fade-up mt-6 max-w-2xl text-xl leading-relaxed text-ink-soft" style={{ "--d": "280ms" } as CSSProperties}>
            {study.summary}
          </p>
          <div className="fade-up mt-10" style={{ "--d": "400ms" } as CSSProperties}>
            <FlowDiagram steps={study.flow} />
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-5 pb-8 sm:px-8">
        <ScrollLine>
          <ol className="space-y-16 sm:space-y-20">
            {steps.map((s) => (
              <Reveal as="li" key={s.label} className="relative pl-10 sm:pl-14">
                <span aria-hidden className="absolute top-1 left-0 size-[15px] rounded-full border-2 border-accent bg-bg" />
                <p className="eyebrow">{s.label}</p>
                <p className="mt-4 font-display text-2xl leading-snug tracking-tight text-ink sm:text-3xl">{s.body}</p>
              </Reveal>
            ))}
            <Reveal as="li" className="relative pl-10 sm:pl-14">
              <span aria-hidden className="absolute top-1 left-0 size-[15px] rounded-full border-2 border-accent bg-bg" />
              <p className="eyebrow">What shipped</p>
              <ul className="mt-6 space-y-4">
                {study.shipped.map((item) => (
                  <li key={item} className="flex gap-4 text-lg leading-relaxed text-ink-soft">
                    <span aria-hidden className="mt-3 h-px w-5 shrink-0 bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal as="li" className="relative pl-10 sm:pl-14">
              <span aria-hidden className="absolute top-1 left-0 size-[15px] rounded-full bg-accent" />
              <p className="eyebrow">Outcome</p>
              <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line">
                {study.outcomes.map((m) => (
                  <div key={m.label} className="bg-raised p-6 sm:p-8">
                    <dd className="font-display text-4xl tracking-tight text-accent sm:text-5xl">
                      <CountUp {...m} />
                    </dd>
                    <dt className="mt-2 text-sm text-ink-soft">{m.label}</dt>
                  </div>
                ))}
              </dl>
            </Reveal>
          </ol>
        </ScrollLine>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <p className="eyebrow">What I took from it</p>
          <blockquote className="mt-5 font-display text-3xl leading-snug tracking-tight text-ink sm:text-4xl">
            “{study.lesson}”
          </blockquote>
        </Reveal>
      </section>

      <section className="border-t border-line">
        <Link href={`/work/${next.slug}`} className="group mx-auto block max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="eyebrow">Next case study</p>
          <p className="mt-4 flex items-center justify-between gap-6 font-display text-3xl tracking-tight text-ink sm:text-5xl">
            {next.title}
            <svg viewBox="0 0 24 24" className="size-8 shrink-0 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </p>
        </Link>
      </section>
    </article>
  );
}
