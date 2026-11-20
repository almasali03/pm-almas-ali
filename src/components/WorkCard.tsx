import Link from "next/link";
import type { CaseStudy } from "@/content/work";
import { CountUp } from "./CountUp";
import { FlowDiagram } from "./FlowDiagram";
import { TiltCard } from "./TiltCard";

export function WorkCard({ study, index }: { study: CaseStudy; index: number }) {
  const { headline } = study;
  return (
    <TiltCard className="h-full">
      <Link
        href={`/work/${study.slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-raised p-7 shadow-[0_1px_0_rgba(0,0,0,0.02)] transition-shadow duration-500 hover:shadow-[0_30px_60px_-30px_rgba(20,20,40,0.25)] sm:p-9"
      >
        <div className="flex items-center justify-between">
          <p className="eyebrow">
            {String(index + 1).padStart(2, "0")} · {study.company}
          </p>
          <span className="text-xs text-ink-faint">{study.period}</span>
        </div>
        <p className="mt-10 font-display text-6xl leading-none tracking-tight text-accent sm:text-7xl">
          <CountUp {...headline} />
        </p>
        <p className="mt-3 text-sm text-ink-soft">{headline.label}</p>
        <h3 className="mt-8 font-display text-3xl leading-tight tracking-tight text-ink">{study.title}</h3>
        <p className="mt-3 flex-1 leading-relaxed text-ink-soft">{study.summary}</p>
        <div className="mt-8">
          <FlowDiagram steps={study.flow} compact />
        </div>
        <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink">
          Read the case study
          <svg viewBox="0 0 24 24" className="size-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </Link>
    </TiltCard>
  );
}
