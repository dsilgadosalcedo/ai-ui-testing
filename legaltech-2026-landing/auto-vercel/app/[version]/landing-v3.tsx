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

function CardIcon({ className }: { className?: string }) {
  return (
    <span className={className} aria-hidden="true">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function LandingV3() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-blue-600 focus:px-3 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
      >
        Skip to main content
      </a>
      <header className="bg-white shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/3"
            className="font-semibold text-neutral-900 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600 rounded touch-manipulation"
          >
            {nav.logoLabel}
          </Link>
          <nav aria-label="Main">
            <ul className="flex items-center gap-8" role="list">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600 rounded touch-manipulation"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link
            href="#contact"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600 touch-manipulation"
          >
            {nav.cta}
          </Link>
        </div>
      </header>

      <main id="main" className="scroll-mt-24" tabIndex={-1}>
        <section className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-balance text-neutral-900 sm:text-5xl">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-neutral-600 text-pretty">
            {hero.subhead}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#contact"
              className="w-full rounded-lg bg-blue-600 px-6 py-3 text-center font-medium text-white shadow-sm hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600 sm:w-auto touch-manipulation"
            >
              {hero.primaryCta}
            </Link>
            <Link
              href="#features"
              className="w-full rounded-lg border border-neutral-300 bg-white px-6 py-3 text-center font-medium text-neutral-700 shadow-sm hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600 sm:w-auto touch-manipulation"
            >
              {hero.secondaryCta}
            </Link>
          </div>
        </section>

        <section
          id="value"
          className="mx-auto max-w-6xl px-6 py-16 scroll-mt-24"
          aria-labelledby="value-title"
        >
          <h2 id="value-title" className="text-center text-2xl font-bold text-balance text-neutral-900">
            {valueProposition.title}
          </h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" role="list">
            {valueProposition.items.map((item) => (
              <li
                key={item.label}
                className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm min-w-0"
              >
                <CardIcon className="mb-4 inline-block text-blue-600" />
                <h3 className="text-lg font-semibold text-neutral-900">{item.label}</h3>
                <p className="mt-2 text-neutral-600 text-pretty">{item.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section
          id="features"
          className="mx-auto max-w-6xl px-6 py-16 scroll-mt-24"
          aria-labelledby="features-title"
        >
          <h2 id="features-title" className="text-center text-2xl font-bold text-balance text-neutral-900">
            Features
          </h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
            {features.map((f) => (
              <li
                key={f.id}
                className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm min-w-0"
              >
                <CardIcon className="mb-4 inline-block text-blue-600" />
                <h3 className="text-lg font-semibold text-neutral-900">{f.title}</h3>
                <p className="mt-2 text-neutral-600 text-pretty">{f.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="mx-auto max-w-6xl px-6 py-16 scroll-mt-24"
          aria-labelledby="testimonials-title"
        >
          <h2 id="testimonials-title" className="text-center text-2xl font-bold text-balance text-neutral-900">
            {socialProof.title}
          </h2>
          <p className="mt-2 text-center text-neutral-600">{socialProof.subtitle}</p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2" role="list">
            {socialProof.testimonials.map((t) => (
              <li
                key={t.author}
                className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm min-w-0"
              >
                <blockquote className="text-neutral-700 text-pretty">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <footer className="mt-4 text-sm text-neutral-500">
                  — {t.author}, {t.role}
                </footer>
              </li>
            ))}
          </ul>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-6xl px-6 py-20 scroll-mt-24"
          aria-labelledby="cta-title"
        >
          <span id="pricing" className="sr-only" aria-hidden="true" />
          <span id="integrations" className="sr-only" aria-hidden="true" />
          <div className="rounded-2xl border border-neutral-200 bg-white p-10 text-center shadow-sm sm:p-14">
            <h2 id="cta-title" className="text-2xl font-bold text-balance text-neutral-900 sm:text-3xl">
              {cta.headline}
            </h2>
            <p className="mt-4 text-neutral-600 text-pretty">{cta.subhead}</p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="#contact"
                className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white shadow-sm hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600 touch-manipulation"
              >
                {cta.button}
              </Link>
              <Link
                href="#pricing"
                className="text-neutral-600 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600 rounded touch-manipulation"
              >
                {cta.secondaryLink}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200 bg-white py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <nav aria-label="Footer">
              <ul className="flex flex-wrap items-center justify-center gap-6 text-sm" role="list">
                {footer.product.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-neutral-600 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600 rounded touch-manipulation"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                {footer.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-neutral-600 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600 rounded touch-manipulation"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href={footer.contact.href}
                    className="text-neutral-600 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600 rounded touch-manipulation"
                  >
                    {footer.contact.label}
                  </Link>
                </li>
              </ul>
            </nav>
            <VersionSwitcher current={3} className="text-neutral-500" />
          </div>
          <p className="mt-6 text-center text-sm text-neutral-500 sm:text-left">
            {footer.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
}
