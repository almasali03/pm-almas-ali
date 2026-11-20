import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center px-5 pt-24 sm:px-8">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 font-display text-5xl tracking-tight text-ink sm:text-6xl">This page isn&apos;t here.</h1>
      <p className="mt-4 text-lg text-ink-soft">The link may be old, or the page has moved.</p>
      <Link href="/" className="mt-10 w-fit rounded-full bg-ink px-6 py-3 text-sm font-medium text-bg">
        Back to the homepage
      </Link>
    </section>
  );
}
