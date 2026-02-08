import Link from "next/link";
import {
  hero,
  services,
  aiSection,
  socialProof,
  footer,
} from "@/lib/legal-tech-copy";

export const metadata = {
  title: "Legal Tech | Legal Work, Simplified",
  description:
    "Contract review, document automation, and AI-powered drafting in one platform.",
};

export default function Landing1() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-neutral-900 focus:px-4 focus:py-2 focus:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
      >
        Skip to main content
      </a>
      <div className="min-h-screen bg-white font-sans text-neutral-800">
        <header className="border-b border-neutral-200">
          <nav
            className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5"
            aria-label="Main navigation"
          >
            <Link
              href="/1"
              className="text-lg font-medium text-neutral-900 transition-colors hover:text-neutral-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
            >
              LegalTech
            </Link>
            <div className="flex gap-8">
              <Link
                href="#services"
                className="text-neutral-600 transition-colors hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
              >
                Services
              </Link>
              <Link
                href="#ai"
                className="text-neutral-600 transition-colors hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
              >
                AI Features
              </Link>
              <Link
                href="/"
                className="text-neutral-600 transition-colors hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
              >
                All Versions
              </Link>
            </div>
          </nav>
        </header>

        <main id="main-content" className="scroll-mt-20" tabIndex={-1}>
          <section className="mx-auto max-w-5xl px-6 py-24 text-center">
            <h1 className="mx-auto max-w-2xl text-4xl font-semibold leading-tight text-neutral-900 text-balance sm:text-5xl">
              {hero.headline}
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-neutral-600">
              {hero.subhead}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-neutral-900 px-6 text-base font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 touch-manipulation"
                style={{ touchAction: "manipulation" }}
              >
                {hero.ctaPrimary}
              </Link>
              <Link
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-neutral-300 bg-white px-6 text-base font-medium text-neutral-900 transition-colors hover:border-neutral-400 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 touch-manipulation"
                style={{ touchAction: "manipulation" }}
              >
                {hero.ctaSecondary}
              </Link>
            </div>
          </section>

          <section
            id="services"
            className="scroll-mt-20 border-t border-neutral-200 bg-neutral-50/50"
            aria-labelledby="services-heading"
          >
            <div className="mx-auto max-w-5xl px-6 py-20">
              <h2
                id="services-heading"
                className="text-center text-2xl font-semibold text-neutral-900 text-balance"
              >
                Services
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-center text-neutral-600">
                Everything you need to manage contracts and legal workflows.
              </p>
              <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((s) => (
                  <li key={s.title}>
                    <h3 className="text-lg font-medium text-neutral-900 text-balance">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-neutral-600 break-words">
                      {s.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section
            id="ai"
            className="scroll-mt-20 border-t border-neutral-200"
            aria-labelledby="ai-heading"
          >
            <div className="mx-auto max-w-5xl px-6 py-20">
              <h2
                id="ai-heading"
                className="text-center text-2xl font-semibold text-neutral-900 text-balance"
              >
                {aiSection.heading}
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-center text-neutral-600">
                {aiSection.subhead}
              </p>
              <ul className="mt-14 grid gap-10 sm:grid-cols-3">
                {aiSection.features.map((f) => (
                  <li key={f.title}>
                    <h3 className="text-lg font-medium text-neutral-900 text-balance">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-neutral-600 break-words">
                      {f.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section
            className="scroll-mt-20 border-t border-neutral-200 bg-neutral-50/50"
            aria-labelledby="trust-heading"
          >
            <div className="mx-auto max-w-5xl px-6 py-16">
              <h2
                id="trust-heading"
                className="sr-only"
              >
                Trusted by legal teams
              </h2>
              <p className="text-center text-sm font-medium uppercase tracking-wider text-neutral-500">
                {socialProof.line}
              </p>
              <blockquote className="mx-auto mt-6 max-w-2xl text-center text-neutral-700">
                &ldquo;{socialProof.testimonial}&rdquo;
              </blockquote>
            </div>
          </section>
        </main>

        <footer className="border-t border-neutral-200 bg-white">
          <div className="mx-auto max-w-5xl px-6 py-14">
            <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <Link
                  href="/1"
                  className="text-lg font-medium text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
                >
                  LegalTech
                </Link>
                <p className="mt-4 text-sm text-neutral-500">
                  {footer.copyright}
                </p>
              </div>
              <div className="flex gap-12">
                <div>
                  <h3 className="text-sm font-medium text-neutral-900">
                    Product
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {footer.product.map((l) => (
                      <li key={l.label}>
                        <a
                          href={l.href}
                          className="text-neutral-600 transition-colors hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
                        >
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-neutral-900">
                    Company
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {footer.company.map((l) => (
                      <li key={l.label}>
                        <a
                          href={l.href}
                          className="text-neutral-600 transition-colors hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
                        >
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-neutral-900">
                    Legal
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {footer.legal.map((l) => (
                      <li key={l.label}>
                        <a
                          href={l.href}
                          className="text-neutral-600 transition-colors hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2"
                        >
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-10 pt-8 border-t border-neutral-200">
              <Link
                href="#"
                className="inline-flex h-11 items-center justify-center rounded-lg bg-neutral-900 px-5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-2 touch-manipulation"
                style={{ touchAction: "manipulation" }}
              >
                {footer.cta}
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
