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

export function LandingV1() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-neutral-900 focus:px-3 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500"
      >
        Skip to main content
      </a>
      <header className="border-b border-neutral-200">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-5">
          <Link
            href="/1"
            className="font-semibold text-neutral-900 hover:text-neutral-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-500 rounded touch-manipulation"
          >
            {nav.logoLabel}
          </Link>
          <nav aria-label="Main">
            <ul className="flex items-center gap-8" role="list">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-500 rounded touch-manipulation"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link
            href="#contact"
            className="rounded bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-500 touch-manipulation"
          >
            {nav.cta}
          </Link>
        </div>
      </header>

      <main id="main" className="scroll-mt-24" tabIndex={-1}>
        <section className="mx-auto max-w-2xl px-6 py-24 text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-balance text-neutral-900 sm:text-5xl">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-lg leading-relaxed text-neutral-600 text-pretty">
            {hero.subhead}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#contact"
              className="w-full rounded bg-neutral-900 px-6 py-3 text-center font-medium text-white hover:bg-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-500 sm:w-auto touch-manipulation"
            >
              {hero.primaryCta}
            </Link>
            <Link
              href="#features"
              className="w-full rounded border border-neutral-300 px-6 py-3 text-center font-medium text-neutral-900 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-500 sm:w-auto touch-manipulation"
            >
              {hero.secondaryCta}
            </Link>
          </div>
        </section>

        <section
          id="value"
          className="mx-auto max-w-2xl px-6 py-20 scroll-mt-24"
          aria-labelledby="value-title"
        >
          <h2 id="value-title" className="text-2xl font-semibold text-balance text-neutral-900">
            {valueProposition.title}
          </h2>
          <ul className="mt-10 space-y-8" role="list">
            {valueProposition.items.map((item) => (
              <li key={item.label}>
                <h3 className="text-lg font-medium text-neutral-900">{item.label}</h3>
                <p className="mt-1 text-neutral-600 text-pretty">{item.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section
          id="features"
          className="mx-auto max-w-2xl px-6 py-20 scroll-mt-24"
          aria-labelledby="features-title"
        >
          <h2 id="features-title" className="text-2xl font-semibold text-balance text-neutral-900">
            Features
          </h2>
          <ul className="mt-10 space-y-12" role="list">
            {features.map((f) => (
              <li key={f.id}>
                <h3 className="text-lg font-medium text-neutral-900">{f.title}</h3>
                <p className="mt-1 text-neutral-600 text-pretty">{f.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="mx-auto max-w-2xl px-6 py-20 scroll-mt-24"
          aria-labelledby="testimonials-title"
        >
          <h2 id="testimonials-title" className="text-2xl font-semibold text-balance text-neutral-900">
            {socialProof.title}
          </h2>
          <p className="mt-2 text-neutral-600">{socialProof.subtitle}</p>
          <ul className="mt-10 space-y-10" role="list">
            {socialProof.testimonials.map((t) => (
              <li key={t.author}>
                <blockquote className="text-lg text-neutral-700 text-pretty">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <footer className="mt-2 text-sm text-neutral-500">
                  — {t.author}, {t.role}
                </footer>
              </li>
            ))}
          </ul>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-2xl px-6 py-24 text-center scroll-mt-24"
          aria-labelledby="cta-title"
        >
          <span id="pricing" className="sr-only" aria-hidden="true" />
          <span id="integrations" className="sr-only" aria-hidden="true" />
          <h2 id="cta-title" className="text-2xl font-semibold text-balance text-neutral-900">
            {cta.headline}
          </h2>
          <p className="mt-4 text-neutral-600 text-pretty">{cta.subhead}</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="#contact"
              className="rounded bg-neutral-900 px-6 py-3 font-medium text-white hover:bg-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-500 touch-manipulation"
            >
              {cta.button}
            </Link>
            <Link
              href="#pricing"
              className="text-neutral-600 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-500 rounded touch-manipulation"
            >
              {cta.secondaryLink}
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200 py-12">
        <div className="mx-auto max-w-2xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <nav aria-label="Footer">
              <ul className="flex flex-wrap items-center justify-center gap-6 text-sm" role="list">
                {footer.product.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-neutral-600 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-500 rounded touch-manipulation"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                {footer.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-neutral-600 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-500 rounded touch-manipulation"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href={footer.contact.href}
                    className="text-neutral-600 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-500 rounded touch-manipulation"
                  >
                    {footer.contact.label}
                  </Link>
                </li>
              </ul>
            </nav>
            <VersionSwitcher current={1} className="text-neutral-500" />
          </div>
          <p className="mt-6 text-center text-sm text-neutral-500 sm:text-left">
            {footer.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
}
