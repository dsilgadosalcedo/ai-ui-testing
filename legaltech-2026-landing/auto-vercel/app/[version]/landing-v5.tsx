import Link from "next/link";
import {
  hero,
  valueProposition,
  features,
  socialProof,
  cta,
  footer,
  nav,
} from "@/lib/legal-tech-content";
import { VersionSwitcher } from "./version-switcher";

export function LandingV5() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-100 via-fuchsia-50 to-cyan-100 text-neutral-900">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-2xl focus:bg-violet-600 focus:px-3 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-600"
      >
        Skip to main content
      </a>
      <header className="sticky top-0 z-20">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <nav
            className="flex flex-1 items-center justify-between rounded-2xl border border-white/40 bg-white/30 px-5 py-3 backdrop-blur-xl"
            aria-label="Main and branding"
          >
            <Link
              href="/5"
              className="font-semibold text-neutral-900 hover:text-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-600 rounded-xl touch-manipulation"
            >
              {nav.logoLabel}
            </Link>
            <ul className="flex items-center gap-6" role="list">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-neutral-700 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-600 rounded-xl touch-manipulation"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="#contact"
              className="rounded-xl bg-violet-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-violet-600/30 hover:bg-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-600 touch-manipulation"
            >
              {nav.cta}
            </Link>
          </nav>
        </div>
      </header>

      <main id="main" className="scroll-mt-24" tabIndex={-1}>
        <section className="mx-auto max-w-5xl px-6 py-24">
          <div className="rounded-3xl border border-white/50 bg-white/40 p-12 shadow-xl shadow-violet-200/30 backdrop-blur-xl sm:p-16">
            <h1 className="text-4xl font-bold tracking-tight text-balance text-neutral-900 sm:text-5xl lg:text-6xl">
              {hero.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-neutral-700 text-pretty">
              {hero.subhead}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#contact"
                className="inline-flex justify-center rounded-2xl bg-violet-600 px-6 py-3 font-medium text-white shadow-lg shadow-violet-600/30 hover:bg-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-600 touch-manipulation"
              >
                {hero.primaryCta}
              </Link>
              <Link
                href="#features"
                className="inline-flex justify-center rounded-2xl border border-white/60 bg-white/50 px-6 py-3 font-medium text-neutral-900 backdrop-blur-sm hover:bg-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-600 touch-manipulation"
              >
                {hero.secondaryCta}
              </Link>
            </div>
          </div>
        </section>

        <section
          id="value"
          className="mx-auto max-w-5xl px-6 py-16 scroll-mt-24"
          aria-labelledby="value-title"
        >
          <h2 id="value-title" className="text-2xl font-bold text-balance text-neutral-900">
            {valueProposition.title}
          </h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2" role="list">
            {valueProposition.items.map((item) => (
              <li
                key={item.label}
                className="rounded-2xl border border-white/50 bg-white/40 p-6 shadow-lg backdrop-blur-xl min-w-0"
              >
                <h3 className="text-lg font-semibold text-violet-800">{item.label}</h3>
                <p className="mt-2 text-neutral-700 text-pretty">{item.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section
          id="features"
          className="mx-auto max-w-5xl px-6 py-16 scroll-mt-24"
          aria-labelledby="features-title"
        >
          <h2 id="features-title" className="text-2xl font-bold text-balance text-neutral-900">
            Features
          </h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
            {features.map((f) => (
              <li
                key={f.id}
                className="rounded-2xl border border-white/50 bg-white/40 p-6 shadow-lg backdrop-blur-xl min-w-0"
              >
                <h3 className="font-semibold text-neutral-900">{f.title}</h3>
                <p className="mt-2 text-sm text-neutral-700 text-pretty">{f.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="mx-auto max-w-5xl px-6 py-16 scroll-mt-24"
          aria-labelledby="testimonials-title"
        >
          <h2 id="testimonials-title" className="text-2xl font-bold text-balance text-neutral-900">
            {socialProof.title}
          </h2>
          <p className="mt-2 text-neutral-700">{socialProof.subtitle}</p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2" role="list">
            {socialProof.testimonials.map((t) => (
              <li
                key={t.author}
                className="rounded-2xl border border-white/50 bg-white/40 p-6 shadow-lg backdrop-blur-xl min-w-0"
              >
                <blockquote className="text-neutral-700 text-pretty">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <footer className="mt-4 text-sm text-neutral-600">
                  — {t.author}, {t.role}
                </footer>
              </li>
            ))}
          </ul>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-5xl px-6 py-24 scroll-mt-24"
          aria-labelledby="cta-title"
        >
          <span id="pricing" className="sr-only" aria-hidden="true" />
          <span id="integrations" className="sr-only" aria-hidden="true" />
          <div className="rounded-3xl border border-white/50 bg-white/50 p-12 shadow-xl backdrop-blur-xl sm:p-16">
            <h2 id="cta-title" className="text-center text-2xl font-bold text-balance text-neutral-900 sm:text-3xl">
              {cta.headline}
            </h2>
            <p className="mt-4 text-center text-neutral-700 text-pretty">{cta.subhead}</p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="#contact"
                className="rounded-2xl bg-violet-600 px-8 py-3 font-medium text-white shadow-lg shadow-violet-600/30 hover:bg-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-600 touch-manipulation"
              >
                {cta.button}
              </Link>
              <Link
                href="#pricing"
                className="text-neutral-700 hover:text-violet-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-600 rounded-xl touch-manipulation"
              >
                {cta.secondaryLink}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/40 py-12">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-white/40 bg-white/30 px-6 py-8 backdrop-blur-xl sm:flex-row">
            <nav aria-label="Footer">
              <ul className="flex flex-wrap items-center justify-center gap-6 text-sm" role="list">
                {footer.product.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-neutral-700 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-600 rounded-xl touch-manipulation"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                {footer.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-neutral-700 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-600 rounded-xl touch-manipulation"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href={footer.contact.href}
                    className="text-neutral-700 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-600 rounded-xl touch-manipulation"
                  >
                    {footer.contact.label}
                  </Link>
                </li>
              </ul>
            </nav>
            <VersionSwitcher current={5} className="text-neutral-600" />
          </div>
          <p className="mt-6 text-center text-sm text-neutral-600">
            {footer.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
}
