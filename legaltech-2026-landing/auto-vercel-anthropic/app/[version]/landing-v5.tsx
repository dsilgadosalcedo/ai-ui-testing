import Link from "next/link";
import { Nunito_Sans } from "next/font/google";
import {
  productName,
  hero,
  trustBar,
  features,
  testimonials,
  finalCta,
  footer,
} from "@/lib/landing-content";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-soft",
  display: "swap",
});

export function LandingV5() {
  return (
    <div
      className={`${nunito.variable} min-h-screen bg-rose-50/90 font-[family:var(--font-soft)] text-stone-800`}
      data-version="5"
      style={{ colorScheme: "light" }}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-2xl focus:bg-rose-400 focus:px-3 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-rose-500"
      >
        Skip to main content
      </a>

      {/* Soft grain overlay */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />

      <header className="relative border-b border-rose-200/80 bg-white/60 backdrop-blur-sm">
        <div className="mx-auto max-w-5xl px-6 py-5">
          <nav className="flex items-center justify-between" aria-label="Main">
            <Link
              href="/5"
              className="text-lg font-semibold text-stone-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:ring-offset-rose-50"
            >
              {productName}
            </Link>
            <div className="flex gap-8">
              <Link
                href="#features"
                className="text-sm text-stone-600 hover:text-rose-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:ring-offset-rose-50"
              >
                Features
              </Link>
              <Link
                href="#demo"
                className="rounded-full bg-rose-400 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-rose-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:ring-offset-rose-50"
              >
                {hero.primaryCta}
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main id="main" className="relative">
        <section
          className="mx-auto max-w-5xl px-6 py-20 md:py-28"
          aria-labelledby="hero-heading"
        >
          <div className="rounded-3xl bg-white/70 p-8 shadow-rose-100/50 shadow-lg backdrop-blur-sm md:p-12">
            <h1
              id="hero-heading"
              className="max-w-2xl text-4xl font-bold leading-tight text-stone-900 md:text-5xl [text-wrap:balance]"
            >
              {hero.headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-600">
              {hero.subhead}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#demo"
                className="inline-flex h-12 items-center justify-center rounded-full bg-rose-500 px-6 text-sm font-semibold text-white transition-colors hover:bg-rose-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:ring-offset-rose-50"
              >
                {hero.primaryCta}
              </Link>
              <Link
                href="#features"
                className="inline-flex h-12 items-center justify-center rounded-full border-2 border-rose-200 bg-white px-6 text-sm font-semibold text-stone-800 transition-colors hover:border-rose-300 hover:bg-rose-50/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:ring-offset-rose-50"
              >
                {hero.secondaryCta}
              </Link>
            </div>
          </div>
        </section>

        <section
          className="py-8"
          aria-label="Trusted by firms"
        >
          <div className="mx-auto max-w-5xl px-6">
            <p className="text-center text-sm font-medium text-stone-500">
              {trustBar.label}
            </p>
          </div>
        </section>

        <section
          id="features"
          className="mx-auto max-w-5xl px-6 py-20"
          aria-labelledby="features-heading"
        >
          <h2
            id="features-heading"
            className="text-2xl font-bold text-stone-900 [text-wrap:balance]"
          >
            Built for how legal works
          </h2>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2">
            {features.map((f) => (
              <li
                key={f.id}
                className="rounded-2xl border border-rose-100 bg-white/80 p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-stone-900">
                  {f.title}
                </h3>
                <p className="mt-2 leading-relaxed text-stone-600">
                  {f.description}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="py-20"
          aria-labelledby="testimonials-heading"
        >
          <div className="mx-auto max-w-5xl px-6">
            <h2 id="testimonials-heading" className="sr-only">
              What our customers say
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {testimonials.map((t) => (
                <figure
                  key={t.name}
                  className="rounded-2xl bg-white/80 p-6 shadow-sm"
                >
                  <blockquote className="text-lg leading-relaxed text-stone-700">
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
          className="mx-auto max-w-5xl px-6 py-20"
          aria-labelledby="final-cta-heading"
        >
          <div className="rounded-3xl bg-rose-100/60 p-8 md:p-12">
            <h2
              id="final-cta-heading"
              className="text-2xl font-bold text-stone-900 [text-wrap:balance]"
            >
              {finalCta.headline}
            </h2>
            <p className="mt-4 text-stone-600">
              Get a personalized walkthrough in under 15&nbsp;minutes.
            </p>
            <Link
              href="mailto:demo@lexforge.demo?subject=Demo%20request"
              className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-rose-500 px-6 text-sm font-semibold text-white transition-colors hover:bg-rose-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:ring-offset-rose-100"
            >
              {finalCta.buttonLabel}
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-rose-200/80 bg-white/60 py-12 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-6">
              {footer.productLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-stone-600 hover:text-rose-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:ring-offset-rose-50"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              {footer.legalLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-stone-600 hover:text-rose-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:ring-offset-rose-50"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={footer.contact.href}
                  className="text-sm text-stone-600 hover:text-rose-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:ring-offset-rose-50"
                >
                  {footer.contact.label}
                </a>
              </li>
            </ul>
          </nav>
          <p className="text-sm text-stone-500">{footer.copyright}</p>
        </div>
        <div className="mx-auto mt-6 max-w-5xl px-6">
          <Link
            href="/"
            className="text-xs text-stone-400 underline hover:text-rose-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:ring-offset-rose-50"
          >
            View all versions
          </Link>
        </div>
      </footer>
    </div>
  );
}
