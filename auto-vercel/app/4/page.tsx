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

export default function Landing4() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-2xl focus:bg-violet-600 focus:px-4 focus:py-2 focus:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
      >
        Skip to main content
      </a>
      <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-fuchsia-50 font-sans text-slate-800">
        <header className="sticky top-0 z-40 border-b border-white/60 bg-white/70 backdrop-blur-md">
          <nav
            className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4"
            aria-label="Main navigation"
          >
            <Link
              href="/4"
              className="text-lg font-semibold text-slate-900 transition-colors hover:text-violet-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              LegalTech
            </Link>
            <div className="flex gap-6">
              <Link
                href="#services"
                className="text-slate-600 transition-colors hover:text-violet-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Services
              </Link>
              <Link
                href="#ai"
                className="text-slate-600 transition-colors hover:text-violet-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                AI Features
              </Link>
              <Link
                href="/"
                className="text-slate-600 transition-colors hover:text-violet-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                All Versions
              </Link>
            </div>
          </nav>
        </header>

        <main id="main-content" className="scroll-mt-20" tabIndex={-1}>
          <section className="mx-auto max-w-5xl px-6 py-24 text-center">
            <div className="rounded-3xl bg-white/60 p-10 shadow-lg shadow-violet-100/50 backdrop-blur-sm sm:p-16">
              <h1 className="mx-auto max-w-2xl text-4xl font-bold leading-tight text-slate-900 text-balance sm:text-5xl">
                {hero.headline}
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
                {hero.subhead}
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="#"
                  className="inline-flex h-12 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 text-base font-medium text-white shadow-lg shadow-violet-200/50 transition-opacity hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white touch-manipulation"
                  style={{ touchAction: "manipulation" }}
                >
                  {hero.ctaPrimary}
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-12 items-center justify-center rounded-2xl border border-slate-200 bg-white/80 px-6 text-base font-medium text-slate-800 shadow-sm transition-colors hover:border-violet-200 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white touch-manipulation"
                  style={{ touchAction: "manipulation" }}
                >
                  {hero.ctaSecondary}
                </Link>
              </div>
            </div>
          </section>

          <section
            id="services"
            className="scroll-mt-20 px-6 py-20"
            aria-labelledby="services-heading"
          >
            <div className="mx-auto max-w-5xl">
              <h2
                id="services-heading"
                className="text-center text-2xl font-bold text-slate-900 text-balance"
              >
                Services
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-center text-slate-600">
                Everything you need to manage contracts and legal workflows.
              </p>
              <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((s) => (
                  <li
                    key={s.title}
                    className="rounded-2xl border border-white/80 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md"
                  >
                    <h3 className="text-lg font-semibold text-slate-900 text-balance">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-slate-600 break-words">
                      {s.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section
            id="ai"
            className="scroll-mt-20 px-6 py-20"
            aria-labelledby="ai-heading"
          >
            <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-br from-violet-100/80 to-fuchsia-100/80 p-10 shadow-inner backdrop-blur-sm sm:p-16">
              <h2
                id="ai-heading"
                className="text-center text-2xl font-bold text-slate-900 text-balance"
              >
                {aiSection.heading}
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-center text-slate-700">
                {aiSection.subhead}
              </p>
              <ul className="mt-14 grid gap-8 sm:grid-cols-3">
                {aiSection.features.map((f) => (
                  <li
                    key={f.title}
                    className="rounded-2xl bg-white/80 p-6 shadow-sm backdrop-blur-sm"
                  >
                    <h3 className="text-lg font-semibold text-violet-900 text-balance">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-slate-600 break-words">
                      {f.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section
            className="scroll-mt-20 px-6 py-16"
            aria-labelledby="trust-heading"
          >
            <div className="mx-auto max-w-2xl rounded-2xl bg-white/70 px-8 py-10 text-center shadow-sm backdrop-blur-sm">
              <h2 id="trust-heading" className="sr-only">
                Trusted by legal teams
              </h2>
              <p className="text-sm font-medium uppercase tracking-wider text-violet-600">
                {socialProof.line}
              </p>
              <blockquote className="mt-4 text-slate-700">
                &ldquo;{socialProof.testimonial}&rdquo;
              </blockquote>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/60 bg-white/50 backdrop-blur-sm">
          <div className="mx-auto max-w-5xl px-6 py-14">
            <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <Link
                  href="/4"
                  className="text-lg font-semibold text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  LegalTech
                </Link>
                <p className="mt-4 text-sm text-slate-500">
                  {footer.copyright}
                </p>
              </div>
              <div className="flex gap-12">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    Product
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {footer.product.map((l) => (
                      <li key={l.label}>
                        <a
                          href={l.href}
                          className="text-slate-600 transition-colors hover:text-violet-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                        >
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    Company
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {footer.company.map((l) => (
                      <li key={l.label}>
                        <a
                          href={l.href}
                          className="text-slate-600 transition-colors hover:text-violet-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                        >
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    Legal
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {footer.legal.map((l) => (
                      <li key={l.label}>
                        <a
                          href={l.href}
                          className="text-slate-600 transition-colors hover:text-violet-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                        >
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-10 border-t border-slate-200/80 pt-8">
              <Link
                href="#"
                className="inline-flex h-11 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 text-sm font-medium text-white shadow-md transition-opacity hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white touch-manipulation"
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
