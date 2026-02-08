import Link from "next/link";
import { Crimson_Pro } from "next/font/google";
import {
  productName,
  hero,
  trustBar,
  features,
  testimonials,
  finalCta,
  footer,
} from "@/lib/landing-content";

const crimson = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-luxury-serif",
  display: "swap",
});

export function LandingV3() {
  return (
    <div
      className={`${crimson.variable} min-h-screen bg-zinc-950 text-zinc-200`}
      data-version="3"
      style={{ colorScheme: "dark" }}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-amber-500 focus:px-3 focus:py-2 focus:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-amber-400"
      >
        Skip to main content
      </a>
      <header className="border-b border-zinc-800">
        <div className="mx-auto max-w-5xl px-6 py-5">
          <nav className="flex items-center justify-between" aria-label="Main">
            <Link
              href="/3"
              className="font-[family:var(--font-luxury-serif)] text-xl font-medium text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
            >
              {productName}
            </Link>
            <div className="flex gap-8">
              <Link
                href="#features"
                className="text-sm text-zinc-400 hover:text-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                Features
              </Link>
              <Link
                href="#demo"
                className="text-sm font-medium text-amber-400 hover:text-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                {hero.primaryCta}
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main id="main">
        <section
          className="mx-auto max-w-5xl px-6 py-24 md:py-32"
          aria-labelledby="hero-heading"
        >
          <h1
            id="hero-heading"
            className="font-[family:var(--font-luxury-serif)] max-w-2xl text-4xl font-medium leading-tight text-white md:text-5xl [text-wrap:balance]"
          >
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
            {hero.subhead}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#demo"
              className="inline-flex h-12 items-center justify-center bg-amber-500 px-6 text-sm font-medium text-zinc-950 transition-colors hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
            >
              {hero.primaryCta}
            </Link>
            <Link
              href="#features"
              className="inline-flex h-12 items-center justify-center border border-zinc-600 bg-transparent px-6 text-sm font-medium text-zinc-200 transition-colors hover:border-amber-500/50 hover:text-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
            >
              {hero.secondaryCta}
            </Link>
          </div>
        </section>

        <section
          className="border-y border-zinc-800 py-8"
          aria-label="Trusted by firms"
        >
          <div className="mx-auto max-w-5xl px-6">
            <p className="text-center text-sm uppercase tracking-widest text-zinc-500">
              {trustBar.label}
            </p>
          </div>
        </section>

        <section
          id="features"
          className="mx-auto max-w-5xl px-6 py-24"
          aria-labelledby="features-heading"
        >
          <h2
            id="features-heading"
            className="font-[family:var(--font-luxury-serif)] text-3xl font-medium text-white [text-wrap:balance]"
          >
            Built for how legal works
          </h2>
          <ul className="mt-14 grid gap-12 md:grid-cols-2">
            {features.map((f) => (
              <li
                key={f.id}
                className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 transition-colors hover:border-amber-500/30"
              >
                <h3 className="font-[family:var(--font-luxury-serif)] text-lg font-medium text-amber-200">
                  {f.title}
                </h3>
                <p className="mt-2 text-zinc-400">{f.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="border-t border-zinc-800 py-24"
          aria-labelledby="testimonials-heading"
        >
          <div className="mx-auto max-w-5xl px-6">
            <h2 id="testimonials-heading" className="sr-only">
              What our customers say
            </h2>
            <ul className="grid gap-16 md:grid-cols-2">
              {testimonials.map((t) => (
                <li key={t.name} className="border-l-2 border-amber-500/60 pl-6">
                  <blockquote className="font-[family:var(--font-luxury-serif)] text-xl leading-snug text-zinc-200">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <footer className="mt-4 text-sm text-zinc-500">
                    — {t.name}, {t.role}, {t.firm}
                  </footer>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="demo"
          className="mx-auto max-w-5xl px-6 py-24"
          aria-labelledby="final-cta-heading"
        >
          <h2
            id="final-cta-heading"
            className="font-[family:var(--font-luxury-serif)] text-3xl font-medium text-white [text-wrap:balance]"
          >
            {finalCta.headline}
          </h2>
          <p className="mt-4 text-zinc-400">
            Get a personalized walkthrough in under 15&nbsp;minutes.
          </p>
          <Link
            href="mailto:demo@lexforge.demo?subject=Demo%20request"
            className="mt-6 inline-flex h-12 items-center justify-center bg-amber-500 px-6 text-sm font-medium text-zinc-950 transition-colors hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            {finalCta.buttonLabel}
          </Link>
        </section>
      </main>

      <footer className="border-t border-zinc-800 py-12">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-6">
              {footer.productLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-zinc-400 hover:text-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              {footer.legalLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-zinc-400 hover:text-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={footer.contact.href}
                  className="text-sm text-zinc-400 hover:text-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                >
                  {footer.contact.label}
                </a>
              </li>
            </ul>
          </nav>
          <p className="text-sm text-zinc-500">{footer.copyright}</p>
        </div>
        <div className="mx-auto mt-6 max-w-5xl px-6">
          <Link
            href="/"
            className="text-xs text-zinc-500 underline hover:text-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          >
            View all versions
          </Link>
        </div>
      </footer>
    </div>
  );
}
