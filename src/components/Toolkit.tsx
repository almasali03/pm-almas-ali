import Image from "next/image";
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

const HIGHLIGHT_STEP_S = 0.75;

// Near-black brand marks would disappear on the dark theme.
const isDark = (hex: string) => {
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 0.2;
};

function Logo({ tool }: { tool: Tool }) {
  const icon = tool.icon ? ICONS[tool.icon] : undefined;
  if (icon) {
    return (
      <svg
        viewBox="0 0 24 24"
        className={`size-5 fill-[var(--brand)] ${isDark(icon.hex) ? "dark:fill-ink" : ""}`}
        style={{ "--brand": `#${icon.hex}` } as CSSProperties}
        aria-hidden
      >
        <path d={icon.path} />
      </svg>
    );
  }
  if (!tool.img) return null;
  const img = (src: string, className = "") => (
    <Image src={src} alt="" width={20} height={20} unoptimized className={`size-5 object-contain ${className}`} />
  );
  if (tool.imgDark) {
    return (
      <>
        {img(tool.img, "dark:hidden")}
        {img(tool.imgDark, "hidden dark:block")}
      </>
    );
  }
  return img(tool.img, tool.invertDark ? "dark:invert" : "");
}

export function Toolkit() {
  const total = toolkit.reduce((n, g) => n + g.tools.length, 0);
  let index = 0;

  return (
    <>
      <div
        className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5 [&>*]:break-inside-avoid"
        style={{ "--cycle": `${total * HIGHLIGHT_STEP_S}s`, "--step": `${HIGHLIGHT_STEP_S}s` } as CSSProperties}
      >
        {toolkit.map((group, g) => (
          <Reveal key={group.label} delay={(g % 3) * 100} className="rounded-3xl border border-line bg-raised p-6">
            <p className="eyebrow">{group.label}</p>
            <p className="mt-2 text-sm text-ink-soft">{group.purpose}</p>
            <ul className="mt-5 space-y-2">
              {group.tools.map((tool) => (
                <li
                  key={tool.name}
                  className="tool flex items-center gap-3 rounded-xl border border-line bg-bg p-2.5"
                  style={{ "--i": index++ } as CSSProperties}
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-line bg-raised">
                    <Logo tool={tool} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-ink">{tool.name}</span>
                    <span className="block text-xs leading-snug text-ink-soft">{tool.use}</span>
                  </span>
                </li>
              ))}
            </ul>
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
