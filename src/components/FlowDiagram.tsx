import { Fragment } from "react";
import { Reveal } from "./Reveal";

// A left-to-right chain of steps that reveals one node at a time.
export function FlowDiagram({ steps, compact = false }: { steps: string[]; compact?: boolean }) {
  return (
    <ol className={`flex flex-wrap items-center ${compact ? "gap-1.5" : "gap-2 sm:gap-3"}`} aria-label="Flow">
      {steps.map((step, i) => (
        <Fragment key={step}>
          <Reveal as="li" delay={i * 120} className="list-none">
            <span
              className={`inline-flex items-center rounded-full border border-line bg-raised font-medium text-ink ${
                compact ? "px-2.5 py-1 text-xs" : "px-4 py-2 text-sm"
              }`}
            >
              {step}
            </span>
          </Reveal>
          {i < steps.length - 1 && (
            <Reveal as="li" delay={i * 120 + 60} className="list-none text-ink-faint" aria-hidden>
              <svg viewBox="0 0 24 24" className={compact ? "size-3" : "size-4"} fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Reveal>
          )}
        </Fragment>
      ))}
    </ol>
  );
}
