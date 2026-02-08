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

export function LandingV2() {
  return (
    <div
      className="min-h-screen bg-neutral-950 text-neutral-100"
      style={{ colorScheme: "dark" }}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-emerald-500 focus:px-3 focus:py-2 focus:text-neutral-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-950 focus:ring-emerald-500"
      >
        Skip to main content
      </a>
      <header className="border-b border-neutral-800">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link
            href="/2"
            className="font-semibold text-neutral-100 hover:text-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 focus-visible:ring-emerald-500 rounded touch-manipulation"
          >
            {nav.logoLabel}
          </Link>
          <nav aria-label="Main">
            <ul className="flex items-center gap-8" role="list">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 focus-visible:ring-emerald-500 rounded touch-manipulation"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link
            href="#contact"
            className="rounded bg-emerald-500 px-4 py-2 text-sm font-medium text-neutral-950 hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 focus-visible:ring-emerald-500 touch-manipulation"
          >
            {nav.cta}
          </Link>
        </div>
      </header>

      <main id="main" className="scroll-mt-24" tabIndex={-1}>
        <section className="mx-auto max-w-5xl px-6 py-28">
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-balance text-neutral-50 sm:text-5xl lg:text-6xl">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-400 text-pretty">
            {hero.subhead}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#contact"
              className="inline-flex w-full justify-center rounded bg-emerald-500 px-6 py-3 font-medium text-neutral-950 hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 focus-visible:ring-emerald-500 sm:w-auto touch-manipulation"
            >
              {hero.primaryCta}
            </Link>
            <Link
              href="#features"
              className="inline-flex w-full justify-center rounded border border-neutral-600 px-6 py-3 font-medium text-neutral-100 hover:border-neutral-500 hover:bg-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 focus-visible:ring-emerald-500 sm:w-auto touch-manipulation"
            >
              {hero.secondaryCta}
            </Link>
          </div>
        </section>

        <section
          id="value"
          className="mx-auto max-w-5xl px-6 py-20 scroll-mt-24"
          aria-labelledby="value-title"
        >
          <h2 id="value-title" className="text-2xl font-bold text-balance text-neutral-50">
            {valueProposition.title}
          </h2>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2" role="list">
            {valueProposition.items.map((item) => (
              <li key={item.label} className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-6">
                <h3 className="text-lg font-semibold text-emerald-400">{item.label}</h3>
                <p className="mt-2 text-neutral-400 text-pretty">{item.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section
          id="features"
          className="mx-auto max-w-5xl px-6 py-20 scroll-mt-24"
          aria-labelledby="features-title"
        >
          <h2 id="features-title" className="text-2xl font-bold text-balance text-neutral-50">
            Features
          </h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
            {features.map((f) => (
              <li key={f.id} className="rounded-lg border border-neutral-800 bg-neutral-900/30 p-5">
                <h3 className="font-semibold text-neutral-100">{f.title}</h3>
                <p className="mt-2 text-sm text-neutral-400 text-pretty">{f.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="mx-auto max-w-5xl px-6 py-20 scroll-mt-24"
          aria-labelledby="testimonials-title"
        >
          <h2 id="testimonials-title" className="text-2xl font-bold text-balance text-neutral-50">
            {socialProof.title}
          </h2>
          <p className="mt-2 text-neutral-400">{socialProof.subtitle}</p>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2" role="list">
            {socialProof.testimonials.map((t) => (
              <li key={t.author} className="rounded-lg border border-neutral-800 bg-neutral-900/30 p-6">
                <blockquote className="text-neutral-300 text-pretty">
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
          className="mx-auto max-w-5xl px-6 py-28 scroll-mt-24"
          aria-labelledby="cta-title"
        >
          <span id="pricing" className="sr-only" aria-hidden="true" />
          <span id="integrations" className="sr-only" aria-hidden="true" />
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-10 text-center sm:p-14">
            <h2 id="cta-title" className="text-2xl font-bold text-balance text-neutral-50 sm:text-3xl">
              {cta.headline}
            </h2>
            <p className="mt-4 text-neutral-400 text-pretty">{cta.subhead}</p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="#contact"
                className="rounded bg-emerald-500 px-6 py-3 font-medium text-neutral-950 hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 focus-visible:ring-emerald-500 touch-manipulation"
              >
                {cta.button}
              </Link>
              <Link
                href="#pricing"
                className="text-neutral-400 hover:text-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 focus-visible:ring-emerald-500 rounded touch-manipulation"
              >
                {cta.secondaryLink}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-800 py-12">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <nav aria-label="Footer">
              <ul className="flex flex-wrap items-center justify-center gap-6 text-sm" role="list">
                {footer.product.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-neutral-400 hover:text-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 focus-visible:ring-emerald-500 rounded touch-manipulation"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                {footer.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-neutral-400 hover:text-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 focus-visible:ring-emerald-500 rounded touch-manipulation"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href={footer.contact.href}
                    className="text-neutral-400 hover:text-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 focus-visible:ring-emerald-500 rounded touch-manipulation"
                  >
                    {footer.contact.label}
                  </Link>
                </li>
              </ul>
            </nav>
            <VersionSwitcher current={2} className="text-neutral-500" />
          </div>
          <p className="mt-6 text-center text-sm text-neutral-500 sm:text-left">
            {footer.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
}
