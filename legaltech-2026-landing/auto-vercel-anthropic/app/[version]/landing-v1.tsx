import Link from "next/link";
import {
  productName,
  hero,
  trustBar,
  features,
  testimonials,
  finalCta,
  footer,
} from "@/lib/landing-content";

export function LandingV1() {
  return (
    <div
      className="min-h-screen bg-white text-zinc-900"
      data-version="1"
      style={{ colorScheme: "light" }}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-black focus:px-3 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-zinc-400"
      >
        Skip to main content
      </a>
      <header className="border-b border-zinc-200">
        <div className="mx-auto max-w-5xl px-6 py-4">
          <nav className="flex items-center justify-between" aria-label="Main">
            <Link
              href="/1"
              className="text-lg font-medium text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2"
            >
              {productName}
            </Link>
            <div className="flex gap-8">
              <Link
                href="#features"
                className="text-sm text-zinc-600 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2"
              >
                Features
              </Link>
              <Link
                href="#demo"
                className="text-sm font-medium text-zinc-900 hover:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2"
              >
                {hero.primaryCta}
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="mx-auto max-w-5xl px-6 py-24 md:py-32" aria-labelledby="hero-heading">
          <h1
            id="hero-heading"
            className="max-w-2xl text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl [text-wrap:balance]"
          >
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600">
            {hero.subhead}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#demo"
              className="inline-flex h-12 items-center justify-center rounded bg-zinc-900 px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2"
            >
              {hero.primaryCta}
            </Link>
            <Link
              href="#features"
              className="inline-flex h-12 items-center justify-center rounded border border-zinc-300 bg-white px-6 text-sm font-medium text-zinc-900 transition-colors hover:border-zinc-400 hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2"
            >
              {hero.secondaryCta}
            </Link>
          </div>
        </section>

        <section
          className="border-t border-zinc-200 py-8"
          aria-label="Trusted by firms"
        >
          <div className="mx-auto max-w-5xl px-6">
            <p className="text-center text-sm text-zinc-500">{trustBar.label}</p>
          </div>
        </section>

        <section
          id="features"
          className="mx-auto max-w-5xl px-6 py-24"
          aria-labelledby="features-heading"
        >
          <h2
            id="features-heading"
            className="text-2xl font-semibold text-zinc-900 [text-wrap:balance]"
          >
            Built for how legal works
          </h2>
          <ul className="mt-12 grid gap-16 md:grid-cols-2">
            {features.map((f) => (
              <li key={f.id}>
                <h3 className="text-lg font-medium text-zinc-900">{f.title}</h3>
                <p className="mt-2 text-zinc-600">{f.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="border-t border-zinc-200 py-24"
          aria-labelledby="testimonials-heading"
        >
          <div className="mx-auto max-w-5xl px-6">
            <h2
              id="testimonials-heading"
              className="sr-only"
            >
              What our customers say
            </h2>
            <ul className="grid gap-16 md:grid-cols-2">
              {testimonials.map((t) => (
                <li key={t.name}>
                  <blockquote className="text-lg leading-relaxed text-zinc-700">
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
            className="text-2xl font-semibold text-zinc-900 [text-wrap:balance]"
          >
            {finalCta.headline}
          </h2>
          <p className="mt-4 text-zinc-600">
            Get a personalized walkthrough in under 15&nbsp;minutes.
          </p>
          <Link
            href="mailto:demo@lexforge.demo?subject=Demo%20request"
            className="mt-6 inline-flex h-12 items-center justify-center rounded bg-zinc-900 px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2"
          >
            {finalCta.buttonLabel}
          </Link>
        </section>
      </main>

      <footer className="border-t border-zinc-200 py-12">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-6">
              {footer.productLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-zinc-600 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              {footer.legalLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-zinc-600 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={footer.contact.href}
                  className="text-sm text-zinc-600 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2"
                >
                  {footer.contact.label}
                </a>
              </li>
            </ul>
          </nav>
          <p className="text-sm text-zinc-500">{footer.copyright}</p>
        </div>
        <div className="mx-auto mt-6 max-w-5xl px-6">
          <p className="text-xs text-zinc-400">
            Landing style: Minimal.{" "}
            <Link
              href="/"
              className="underline hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2"
            >
              View all versions
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
