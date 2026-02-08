import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import {
  productName,
  hero,
  trustBar,
  features,
  testimonials,
  finalCta,
  footer,
} from "@/lib/landing-content";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-editorial-display",
  display: "swap",
});

export function LandingV2() {
  return (
    <div
      className={`${playfair.variable} min-h-screen bg-stone-50 font-sans text-stone-800`}
      data-version="2"
      style={{ colorScheme: "light" }}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-stone-800 focus:px-3 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-amber-600"
      >
        Skip to main content
      </a>
      <header className="border-b border-stone-300/80">
        <div className="mx-auto max-w-4xl px-8 py-6">
          <nav className="flex items-center justify-between" aria-label="Main">
            <Link
              href="/2"
              className="font-[family:var(--font-editorial-display)] text-xl font-medium text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2"
            >
              {productName}
            </Link>
            <div className="flex gap-10">
              <Link
                href="#features"
                className="text-sm text-stone-600 hover:text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2"
              >
                Features
              </Link>
              <Link
                href="#demo"
                className="text-sm font-medium text-stone-900 hover:text-stone-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2"
              >
                {hero.primaryCta}
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main id="main">
        <section
          className="mx-auto max-w-4xl px-8 py-20 md:py-28"
          aria-labelledby="hero-heading"
        >
          <div className="border-l-4 border-amber-700 pl-8">
            <h1
              id="hero-heading"
              className="font-[family:var(--font-editorial-display)] max-w-2xl text-4xl font-medium leading-tight text-stone-900 md:text-5xl [text-wrap:balance]"
            >
              {hero.headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-600">
              {hero.subhead}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#demo"
                className="inline-flex h-12 items-center justify-center bg-stone-900 px-6 text-sm font-medium text-stone-50 transition-colors hover:bg-stone-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2"
              >
                {hero.primaryCta}
              </Link>
              <Link
                href="#features"
                className="inline-flex h-12 items-center justify-center border border-stone-400 bg-transparent px-6 text-sm font-medium text-stone-800 transition-colors hover:bg-stone-200/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2"
              >
                {hero.secondaryCta}
              </Link>
            </div>
          </div>
        </section>

        <section
          className="border-y border-stone-300/80 py-6"
          aria-label="Trusted by firms"
        >
          <div className="mx-auto max-w-4xl px-8">
            <p className="text-center font-[family:var(--font-editorial-display)] text-sm uppercase tracking-wider text-stone-500">
              {trustBar.label}
            </p>
          </div>
        </section>

        <section
          id="features"
          className="mx-auto max-w-4xl px-8 py-20"
          aria-labelledby="features-heading"
        >
          <h2
            id="features-heading"
            className="font-[family:var(--font-editorial-display)] text-3xl font-medium text-stone-900 [text-wrap:balance]"
          >
            Built for how legal works
          </h2>
          <ul className="mt-14 space-y-16 border-t border-stone-300/80 pt-14">
            {features.map((f, i) => (
              <li key={f.id} className="grid gap-4 md:grid-cols-12">
                <span className="font-mono text-sm tabular-nums text-amber-800 md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="md:col-span-11">
                  <h3 className="font-[family:var(--font-editorial-display)] text-xl font-medium text-stone-900">
                    {f.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-stone-600">
                    {f.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="border-t border-stone-300/80 bg-stone-100/80 py-20"
          aria-labelledby="testimonials-heading"
        >
          <div className="mx-auto max-w-4xl px-8">
            <h2 id="testimonials-heading" className="sr-only">
              What our customers say
            </h2>
            <div className="grid gap-16 md:grid-cols-2">
              {testimonials.map((t) => (
                <figure key={t.name} className="border-l-2 border-amber-700 pl-6">
                  <blockquote className="font-[family:var(--font-editorial-display)] text-xl leading-snug text-stone-800">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-4 text-sm text-stone-500">
                    — {t.name}, {t.role}, {t.firm}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section
          id="demo"
          className="mx-auto max-w-4xl px-8 py-20"
          aria-labelledby="final-cta-heading"
        >
          <h2
            id="final-cta-heading"
            className="font-[family:var(--font-editorial-display)] text-3xl font-medium text-stone-900 [text-wrap:balance]"
          >
            {finalCta.headline}
          </h2>
          <p className="mt-4 text-stone-600">
            Get a personalized walkthrough in under 15&nbsp;minutes.
          </p>
          <Link
            href="mailto:demo@lexforge.demo?subject=Demo%20request"
            className="mt-6 inline-flex h-12 items-center justify-center bg-stone-900 px-6 text-sm font-medium text-stone-50 transition-colors hover:bg-stone-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2"
          >
            {finalCta.buttonLabel}
          </Link>
        </section>
      </main>

      <footer className="border-t border-stone-300/80 py-12">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 px-8 md:flex-row md:items-center md:justify-between">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-8">
              {footer.productLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-stone-600 hover:text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              {footer.legalLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-stone-600 hover:text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={footer.contact.href}
                  className="text-sm text-stone-600 hover:text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2"
                >
                  {footer.contact.label}
                </a>
              </li>
            </ul>
          </nav>
          <p className="text-sm text-stone-500">{footer.copyright}</p>
        </div>
        <div className="mx-auto mt-6 max-w-4xl px-8">
          <Link
            href="/"
            className="text-xs text-stone-400 underline hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2"
          >
            View all versions
          </Link>
        </div>
      </footer>
    </div>
  );
}
