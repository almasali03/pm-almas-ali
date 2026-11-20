import type { CSSProperties } from "react";
import {
  siClaude,
  siConfluence,
  siElevenlabs,
  siExpo,
  siFigma,
  siFirebase,
  siGoogleads,
  siGoogleanalytics,
  siJira,
  siLinear,
  siMake,
  siMeta,
  siMixpanel,
  siModelcontextprotocol,
  siN8n,
  siPostman,
  siReact,
  siZapier,
  siZoho,
  type SimpleIcon,
} from "simple-icons";
import { skills, toolkit, type Tool } from "@/content/site";
import { Reveal } from "./Reveal";

const ICONS: Record<string, SimpleIcon> = {
  siClaude,
  siConfluence,
  siElevenlabs,
  siExpo,
  siFigma,
  siFirebase,
  siGoogleads,
  siGoogleanalytics,
  siJira,
  siLinear,
  siMake,
  siMeta,
  siMixpanel,
  siModelcontextprotocol,
  siN8n,
  siPostman,
  siReact,
  siZapier,
  siZoho,
};

const monogram = (name: string) =>
  name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

function ToolPill({ tool, dup }: { tool: Tool; dup?: boolean }) {
  const icon = tool.icon ? ICONS[tool.icon] : undefined;
  return (
    <li
      data-dup={dup || undefined}
      aria-hidden={dup || undefined}
      className="group flex shrink-0 items-center gap-3 rounded-2xl border border-line bg-raised py-2.5 pr-5 pl-2.5"
      style={icon ? ({ "--brand": `#${icon.hex}` } as CSSProperties) : undefined}
    >
      <span className="grid size-9 place-items-center rounded-xl bg-bg">
        {icon ? (
          <svg
            viewBox="0 0 24 24"
            className="size-[18px] fill-ink-soft transition-colors duration-300 group-hover:fill-[var(--brand)]"
            aria-hidden
          >
            <path d={icon.path} />
          </svg>
        ) : (
          <span className="font-mono text-[11px] font-semibold text-ink-soft">{monogram(tool.name)}</span>
        )}
      </span>
      <span className="text-sm font-medium whitespace-nowrap text-ink">{tool.name}</span>
    </li>
  );
}

function Marquee({ tools, reverse, duration }: { tools: Tool[]; reverse?: boolean; duration: number }) {
  return (
    <div className="marquee overflow-hidden py-1">
      <ul
        className="marquee-track"
        data-reverse={reverse || undefined}
        style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
      >
        {tools.map((t) => (
          <ToolPill key={t.name} tool={t} />
        ))}
        {tools.map((t) => (
          <ToolPill key={`${t.name}-dup`} tool={t} dup />
        ))}
      </ul>
    </div>
  );
}

export function Toolkit() {
  return (
    <>
      <div className="space-y-6">
        {toolkit.map((group, i) => (
          <Reveal key={group.label} delay={i * 120}>
            <p className="eyebrow mb-3 px-1">{group.label}</p>
            <Marquee tools={group.tools} reverse={i % 2 === 1} duration={group.tools.length * 4} />
          </Reveal>
        ))}
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group, i) => (
          <Reveal key={group.label} delay={i * 100} className="rounded-3xl border border-line bg-raised p-7">
            <p className="eyebrow">{group.label}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line px-3 py-1.5 font-mono text-[11px] font-medium tracking-wide text-ink-soft uppercase transition-colors hover:border-accent hover:text-accent"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </>
  );
}
