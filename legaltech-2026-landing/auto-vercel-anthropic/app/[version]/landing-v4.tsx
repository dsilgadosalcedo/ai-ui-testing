import Link from "next/link";
import { Syne } from "next/font/google";
import {
  productName,
  hero,
  trustBar,
  features,
  testimonials,
  finalCta,
  footer,
} from "@/lib/landing-content";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-geometric",
  display: "swap",
});

export function LandingV4() {
  return (
    <div
      className={`${syne.variable} min-h-screen overflow-x-hidden bg-slate-950 font-[family:var(--font-geometric)] text-slate-100`}
      data-version="4"
      style={{ colorScheme: "dark" }}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-cyan-400 focus:px-3 focus:py-2 focus:text-slate-950 focus:outline-none focus:ring-2 focus:ring-cyan-300"
      >
        Skip to main content
      </a>

      {/* Background shapes */}
      <div
        className="pointer-events-none fixed inset-0 overflow-hidden"
        aria-hidden
      >
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 h-80 w-80 rounded-full bg-violet-500/15 blur-3xl" />
        <div
          className="absolute right-0 top-1/3 h-full w-1/2 bg-gradient-to-l from-cyan-500/5 to-transparent"
          style={{ transform: "skewX(-12deg)" }}
        />
      </div>

      <header className="relative border-b border-slate-800/80">
        <div className="mx-auto max-w-6xl px-6 py-5">
          <nav className="flex items-center justify-between" aria-label="Main">
            <Link
              href="/4"
              className="text-lg font-semibold tracking-tight text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              {productName}
            </Link>
            <div className="flex gap-8">
              <Link
                href="#features"
                className="text-sm text-slate-400 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Features
              </Link>
              <Link
                href="#demo"
                className="text-sm font-semibold text-cyan-400 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                {hero.primaryCta}
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main id="main" className="relative">
        <section
          className="relative mx-auto max-w-6xl px-6 py-24 md:py-32"
          aria-labelledby="hero-heading"
        >
          <div
            className="relative rounded-2xl border border-slate-700/60 bg-slate-900/60 p-8 backdrop-blur-sm md:p-12"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(34, 211, 238, 0.08) 0%, transparent 50%)",
            }}
          >
            <h1
              id="hero-heading"
              className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl [text-wrap:balance]"
            >
              {hero.headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
              {hero.subhead}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#demo"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-cyan-500 px-6 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                {hero.primaryCta}
              </Link>
              <Link
                href="#features"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-slate-600 bg-transparent px-6 text-sm font-semibold text-slate-200 transition-colors hover:border-cyan-500/50 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                {hero.secondaryCta}
              </Link>
            </div>
          </div>
        </section>

        <section
          className="relative border-y border-slate-800/80 py-8"
          aria-label="Trusted by firms"
        >
          <div className="mx-auto max-w-6xl px-6">
            <p className="text-center text-sm uppercase tracking-[0.2em] text-slate-500">
              {trustBar.label}
            </p>
          </div>
        </section>

        <section
          id="features"
          className="relative mx-auto max-w-6xl px-6 py-24"
          aria-labelledby="features-heading"
        >
          <h2
            id="features-heading"
            className="text-3xl font-bold tracking-tight text-white [text-wrap:balance]"
          >
            Built for how legal works
          </h2>
          <ul className="mt-14 grid gap-6 md:grid-cols-2">
            {features.map((f) => (
              <li
                key={f.id}
                className="group relative overflow-hidden rounded-xl border border-slate-700/60 bg-slate-900/40 p-6 transition-colors hover:border-cyan-500/40"
              >
                <span
                  className="absolute -right-4 -top-4 text-6xl font-bold text-cyan-500/10"
                  aria-hidden
                >
                  {f.id.slice(0, 2).toUpperCase()}
                </span>
                <h3 className="relative text-lg font-semibold text-cyan-300">
                  {f.title}
                </h3>
                <p className="relative mt-2 text-slate-400">{f.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="relative border-t border-slate-800/80 py-24"
          aria-labelledby="testimonials-heading"
        >
          <div className="mx-auto max-w-6xl px-6">
            <h2 id="testimonials-heading" className="sr-only">
              What our customers say
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {testimonials.map((t) => (
                <blockquote
                  key={t.name}
                  className="relative rounded-xl border border-slate-700/60 bg-slate-900/40 p-6 pl-8"
                >
                  <span
                    className="absolute left-4 top-6 text-3xl text-cyan-500/50"
                    aria-hidden
                  >
                    &ldquo;
                  </span>
                  <p className="text-slate-200">&ldquo;{t.quote}&rdquo;</p>
                  <footer className="mt-4 text-sm text-slate-500">
                    — {t.name}, {t.role}, {t.firm}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section
          id="demo"
          className="relative mx-auto max-w-6xl px-6 py-24"
          aria-labelledby="final-cta-heading"
        >
          <div
            className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-slate-900/80 p-8 md:p-12"
            style={{
              backgroundImage:
                "linear-gradient(135deg, rgba(34, 211, 238, 0.12) 0%, transparent 60%)",
            }}
          >
            <h2
              id="final-cta-heading"
              className="text-2xl font-bold text-white [text-wrap:balance] md:text-3xl"
            >
              {finalCta.headline}
            </h2>
            <p className="mt-4 text-slate-400">
              Get a personalized walkthrough in under 15&nbsp;minutes.
            </p>
            <Link
              href="mailto:demo@lexforge.demo?subject=Demo%20request"
              className="mt-6 inline-flex h-12 items-center justify-center rounded-lg bg-cyan-500 px-6 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              {finalCta.buttonLabel}
            </Link>
          </div>
        </section>
      </main>

      <footer className="relative border-t border-slate-800/80 py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-6">
              {footer.productLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-400 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              {footer.legalLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-400 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={footer.contact.href}
                  className="text-sm text-slate-400 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  {footer.contact.label}
                </a>
              </li>
            </ul>
          </nav>
          <p className="text-sm text-slate-500">{footer.copyright}</p>
        </div>
        <div className="mx-auto mt-6 max-w-6xl px-6">
          <Link
            href="/"
            className="text-xs text-slate-500 underline hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            View all versions
          </Link>
        </div>
      </footer>
    </div>
  );
}
