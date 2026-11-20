import Image from "next/image";
import Link from "next/link";
import { Fragment, type CSSProperties } from "react";
import { CountUp } from "@/components/CountUp";
import { Reveal } from "@/components/Reveal";
import { ScrollLine } from "@/components/ScrollLine";
import { SectionHeading } from "@/components/SectionHeading";
import { WorkCard } from "@/components/WorkCard";
import { builds, credentials, experience, hero, principles, profile } from "@/content/site";
import { work } from "@/content/work";
import portrait from "../../public/almas.jpg";

const EMPHASIS = new Set(["problem,"]);

function Hero() {
  const words = hero.headline.split(" ");
  return (
    <section className="relative overflow-hidden pt-32 pb-4 sm:pt-40 sm:pb-8">
      <div aria-hidden className="hero-glow" />
      <div aria-hidden className="grid-bg absolute inset-0" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.35fr_1fr]">
        <div>
          <p className="eyebrow fade-up mb-6" style={{ "--d": "0ms" } as CSSProperties}>
            {profile.role}
          </p>
          <h1 className="font-display text-[clamp(2.9rem,7vw,5.6rem)] leading-[0.98] tracking-tight text-ink">
            {words.map((w, i) => (
              <Fragment key={i}>
                <span className="hero-word" style={{ "--i": i } as CSSProperties}>
                  {EMPHASIS.has(w) ? <em className="text-accent">{w}</em> : w}
                </span>{" "}
              </Fragment>
            ))}
          </h1>
          <p
            className="fade-up mt-8 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl"
            style={{ "--d": "700ms" } as CSSProperties}
          >
            {hero.intro}
          </p>
          <div className="fade-up mt-10 flex flex-wrap gap-3" style={{ "--d": "850ms" } as CSSProperties}>
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
            >
              See my work
            </Link>
            {profile.resumeUrl ? (
              <a
                href={profile.resumeUrl}
                className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink-faint"
              >
                Download resume
              </a>
            ) : (
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink-faint"
              >
                Get in touch
              </Link>
            )}
          </div>
        </div>

        <div className="settle-in relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-raised shadow-[0_40px_80px_-40px_rgba(20,20,40,0.35)]">
            <Image
              src={portrait}
              alt="Almas Ali"
              priority
              placeholder="blur"
              sizes="(min-width: 1024px) 420px, 90vw"
              className="aspect-[4/5] h-auto w-full object-cover object-top"
            />
          </div>
          <div className="absolute -bottom-5 left-5 rounded-2xl border border-line bg-raised/90 px-4 py-3 shadow-lg backdrop-blur">
            <p className="text-xs text-ink-faint">Currently</p>
            <p className="text-sm font-medium text-ink">Co-Founder & CPO, NiveshPe</p>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-20 max-w-6xl px-5 sm:px-8">
        <dl className="grid grid-cols-3 gap-4 border-t border-line pt-8">
          {hero.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-4xl tracking-tight text-ink sm:text-5xl">
                <CountUp value={s.value} suffix={s.suffix} />
              </dd>
              <dd className="mt-1 text-sm text-ink-soft">{s.label}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Principles() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="How I think" title="First principles, then the roadmap." />
        <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 120} className="flex flex-col bg-bg p-8 sm:p-10">
              <span className="font-display text-5xl text-accent/40">{i + 1}</span>
              <h3 className="mt-6 font-display text-2xl leading-snug tracking-tight text-ink">{p.title}</h3>
              <p className="mt-4 flex-1 leading-relaxed text-ink-soft">{p.body}</p>
              <p className="mt-8 border-t border-line pt-5 text-sm leading-relaxed text-ink">{p.proof}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Selected work"
          title="Problems worth solving, and how I solved them."
          intro="Each case study walks through the problem, what I noticed, the bet I made and what happened."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {work.map((study, i) => (
            <Reveal key={study.slug} delay={(i % 2) * 120}>
              <WorkCard study={study} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Builds() {
  return (
    <section id="builds" className="scroll-mt-20 border-y border-line bg-raised py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Forward-deployed builds"
          title="Close to the customer, working before it's spec'd."
          intro="I sit with the customer, find the real workflow and put a working version in their hands quickly. Then engineering hardens what's proven."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {builds.map((b, i) => (
            <Reveal key={b.title} delay={i * 120} className="flex flex-col rounded-3xl border border-line bg-bg p-8">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
                <span className="size-1.5 rounded-full bg-accent" />
                {b.status}
              </span>
              <h3 className="mt-6 font-display text-2xl leading-snug tracking-tight text-ink">{b.title}</h3>
              <p className="mt-4 text-sm font-medium text-ink">{b.problem}</p>
              <p className="mt-3 leading-relaxed text-ink-soft">{b.what}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 px-5 sm:px-8 lg:grid-cols-[1fr_1.6fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Experience"
            title="Ten years in fintech, from founder to AVP and back."
          />
          <Reveal>
            <p className="eyebrow mb-4">Credentials</p>
            <ul className="space-y-3">
              {credentials.map((c) => (
                <li key={c.title} className="text-sm">
                  {c.href ? (
                    <a href={c.href} target="_blank" rel="noreferrer" className="font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-accent">
                      {c.title}
                    </a>
                  ) : (
                    <span className="font-medium text-ink">{c.title}</span>
                  )}
                  <span className="text-ink-faint"> · {c.by}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <ScrollLine>
          <ol className="space-y-12">
            {experience.map((r) => (
              <Reveal as="li" key={r.title} className="relative pl-10">
                <span aria-hidden className="absolute top-1.5 left-0 size-[15px] rounded-full border-2 border-accent bg-bg" />
                <p className="text-sm text-ink-faint">{r.period}</p>
                <h3 className="mt-1 font-display text-2xl tracking-tight text-ink">{r.title}</h3>
                <p className="text-sm font-medium text-ink-soft">{r.company}</p>
                <p className="mt-3 max-w-xl leading-relaxed text-ink-soft">{r.summary}</p>
              </Reveal>
            ))}
          </ol>
        </ScrollLine>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 pb-28 sm:pb-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-ink px-8 py-16 text-bg sm:px-16 sm:py-24">
          <div aria-hidden className="hero-glow opacity-60" />
          <div className="relative">
            <p className="eyebrow !text-bg/60">Contact</p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl">
              Have a hard problem in a regulated, messy workflow?
            </h2>
            <p className="mt-6 max-w-xl text-lg text-bg/70">I&apos;d like to hear about it.</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full bg-bg px-6 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
              >
                {profile.email}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-bg/25 px-6 py-3 text-sm font-medium transition-colors hover:border-bg/60"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Principles />
      <Work />
      <Builds />
      <Experience />
      <Contact />
    </>
  );
}
