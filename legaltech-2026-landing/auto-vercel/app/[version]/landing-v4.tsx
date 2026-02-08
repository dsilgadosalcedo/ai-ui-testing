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

export function LandingV4() {
  return (
    <div className="min-h-screen bg-stone-100 text-stone-900">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-amber-600 focus:px-3 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-600"
      >
        Skip to main content
      </a>
      <header className="relative z-10 border-b border-stone-300/50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link
            href="/4"
            className="text-xl font-bold tracking-tight text-stone-900 hover:text-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-600 rounded touch-manipulation"
          >
            {nav.logoLabel}
          </Link>
          <nav aria-label="Main">
            <ul className="flex items-center gap-10" role="list">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-stone-700 hover:text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-600 rounded touch-manipulation"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link
            href="#contact"
            className="rounded-full bg-amber-600 px-5 py-2.5 text-sm font-semibold text-stone-950 hover:bg-amber-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-600 touch-manipulation"
          >
            {nav.cta}
          </Link>
        </div>
      </header>

      <main id="main" className="relative scroll-mt-24" tabIndex={-1}>
        {/* Hero: asymmetric overlap */}
        <section className="relative mx-auto max-w-7xl px-6 pt-16 pb-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7 lg:pt-20">
              <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-balance text-stone-900 sm:text-6xl lg:text-7xl">
                {hero.headline}
              </h1>
              <p className="mt-8 max-w-lg text-xl text-stone-600 text-pretty leading-relaxed">
                {hero.subhead}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="#contact"
                  className="rounded-full bg-amber-600 px-8 py-4 text-base font-semibold text-stone-950 hover:bg-amber-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-600 touch-manipulation"
                >
                  {hero.primaryCta}
                </Link>
                <Link
                  href="#features"
                  className="rounded-full border-2 border-stone-900 px-8 py-4 text-base font-semibold text-stone-900 hover:bg-stone-900 hover:text-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-600 touch-manipulation"
                >
                  {hero.secondaryCta}
                </Link>
              </div>
            </div>
            <div className="relative lg:col-span-5">
              <div className="absolute -right-4 top-0 h-72 w-full rounded-2xl bg-amber-500/20 lg:h-96" />
              <div className="relative rounded-2xl border-2 border-stone-300 bg-stone-200/80 p-8 lg:p-12">
                <p className="text-lg font-medium text-stone-700 text-pretty">
                  AI-powered contract review, compliance, and document intelligence—built for 2026.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Value: broken grid */}
        <section
          id="value"
          className="mx-auto max-w-7xl px-6 py-24 scroll-mt-24"
          aria-labelledby="value-title"
        >
          <h2 id="value-title" className="text-3xl font-bold text-balance text-stone-900">
            {valueProposition.title}
          </h2>
          <ul className="mt-14 grid gap-8 sm:grid-cols-2 xl:grid-cols-4" role="list">
            {valueProposition.items.map((item, i) => (
              <li
                key={item.label}
                className="relative rounded-2xl border-2 border-stone-300 bg-white p-8 shadow-lg min-w-0"
                style={{
                  marginTop: i % 2 === 1 ? "2rem" : 0,
                }}
              >
                <h3 className="text-xl font-bold text-amber-700">{item.label}</h3>
                <p className="mt-3 text-stone-600 text-pretty">{item.description}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Features: large type + cards */}
        <section
          id="features"
          className="mx-auto max-w-7xl px-6 py-24 scroll-mt-24"
          aria-labelledby="features-title"
        >
          <h2 id="features-title" className="text-4xl font-bold text-balance text-stone-900 lg:text-5xl">
            Features
          </h2>
          <ul className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3" role="list">
            {features.map((f) => (
              <li
                key={f.id}
                className="rounded-2xl border-2 border-stone-300 bg-white p-8 shadow-md min-w-0"
              >
                <h3 className="text-xl font-bold text-stone-900">{f.title}</h3>
                <p className="mt-3 text-stone-600 text-pretty">{f.description}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Testimonials: offset block */}
        <section
          className="mx-auto max-w-7xl px-6 py-24 scroll-mt-24"
          aria-labelledby="testimonials-title"
        >
          <h2 id="testimonials-title" className="text-4xl font-bold text-balance text-stone-900">
            {socialProof.title}
          </h2>
          <p className="mt-3 text-xl text-stone-600">{socialProof.subtitle}</p>
          <ul className="mt-14 flex flex-col gap-10 lg:flex-row" role="list">
            {socialProof.testimonials.map((t, i) => (
              <li
                key={t.author}
                className="flex-1 min-w-0"
                style={{ marginLeft: i === 1 ? "2rem" : 0 }}
              >
                <blockquote className="rounded-2xl border-2 border-stone-300 bg-amber-50/50 p-10 shadow-lg">
                  <p className="text-xl text-stone-700 text-pretty">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer className="mt-6 text-stone-600">
                    — {t.author}, {t.role}
                  </footer>
                </blockquote>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section
          id="contact"
          className="mx-auto max-w-7xl px-6 py-28 scroll-mt-24"
          aria-labelledby="cta-title"
        >
          <span id="pricing" className="sr-only" aria-hidden="true" />
          <span id="integrations" className="sr-only" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-3xl border-2 border-stone-300 bg-stone-900 px-10 py-20 text-center text-stone-100 sm:px-16 sm:py-24">
            <h2 id="cta-title" className="relative text-3xl font-bold text-balance sm:text-4xl">
              {cta.headline}
            </h2>
            <p className="relative mt-4 text-lg text-stone-300 text-pretty">{cta.subhead}</p>
            <div className="relative mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="#contact"
                className="rounded-full bg-amber-500 px-8 py-4 font-semibold text-stone-950 hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500 touch-manipulation"
              >
                {cta.button}
              </Link>
              <Link
                href="#pricing"
                className="text-stone-300 hover:text-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-500 rounded touch-manipulation"
              >
                {cta.secondaryLink}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-300 bg-stone-200/50 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <nav aria-label="Footer">
              <ul className="flex flex-wrap items-center justify-center gap-8 text-sm font-medium" role="list">
                {footer.product.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-stone-700 hover:text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-600 rounded touch-manipulation"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                {footer.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-stone-700 hover:text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-600 rounded touch-manipulation"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href={footer.contact.href}
                    className="text-stone-700 hover:text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-600 rounded touch-manipulation"
                  >
                    {footer.contact.label}
                  </Link>
                </li>
              </ul>
            </nav>
            <VersionSwitcher current={4} className="text-stone-600" />
          </div>
          <p className="mt-6 text-center text-sm text-stone-500 sm:text-left">
            {footer.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
}
