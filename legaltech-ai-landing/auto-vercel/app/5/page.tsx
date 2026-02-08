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

export default function Landing5() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:border-2 focus:border-black focus:bg-white focus:px-4 focus:py-2 focus:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
      >
        Skip to main content
      </a>
      <div className="min-h-screen bg-white font-mono text-black">
        <header className="border-b-4 border-black">
          <nav
            className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4"
            aria-label="Main navigation"
          >
            <Link
              href="/5"
              className="text-sm font-bold uppercase tracking-wider transition-colors hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            >
              LegalTech
            </Link>
            <div className="flex gap-4">
              <Link
                href="#services"
                className="text-sm font-bold uppercase tracking-wider transition-colors hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              >
                Services
              </Link>
              <Link
                href="#ai"
                className="text-sm font-bold uppercase tracking-wider transition-colors hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              >
                AI
              </Link>
              <Link
                href="/"
                className="text-sm font-bold uppercase tracking-wider transition-colors hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              >
                All Versions
              </Link>
            </div>
          </nav>
        </header>

        <main id="main-content" className="scroll-mt-20" tabIndex={-1}>
          <section className="mx-auto max-w-4xl px-4 py-20">
            <div className="border-4 border-black p-8">
              <h1 className="max-w-xl text-3xl font-bold leading-tight text-balance sm:text-4xl">
                {hero.headline}
              </h1>
              <p className="mt-6 text-base leading-relaxed">
                {hero.subhead}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="#"
                  className="inline-block border-4 border-black bg-black px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 touch-manipulation"
                  style={{ touchAction: "manipulation" }}
                >
                  {hero.ctaPrimary}
                </Link>
                <Link
                  href="#"
                  className="inline-block border-4 border-black bg-white px-6 py-3 text-sm font-bold uppercase tracking-wider text-black transition-colors hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 touch-manipulation"
                  style={{ touchAction: "manipulation" }}
                >
                  {hero.ctaSecondary}
                </Link>
              </div>
            </div>
          </section>

          <section
            id="services"
            className="scroll-mt-20 border-t-4 border-black"
            aria-labelledby="services-heading"
          >
            <div className="mx-auto max-w-4xl px-4 py-16">
              <h2
                id="services-heading"
                className="text-2xl font-bold uppercase tracking-wider text-balance"
              >
                Services
              </h2>
              <p className="mt-2 text-sm">
                Everything you need to manage contracts and legal workflows.
              </p>
              <ul className="mt-12 grid gap-0 border-t-4 border-black">
                {services.map((s, i) => (
                  <li
                    key={s.title}
                    className="border-b-2 border-black py-8 first:border-t-0"
                  >
                    <h3 className="text-lg font-bold uppercase tracking-wider text-balance">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed break-words">
                      {s.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section
            id="ai"
            className="scroll-mt-20 border-t-4 border-black bg-black text-white"
            aria-labelledby="ai-heading"
          >
            <div className="mx-auto max-w-4xl px-4 py-16">
              <h2
                id="ai-heading"
                className="text-2xl font-bold uppercase tracking-wider text-balance"
              >
                {aiSection.heading}
              </h2>
              <p className="mt-2 text-sm text-neutral-300">
                {aiSection.subhead}
              </p>
              <ul className="mt-12 grid gap-8 sm:grid-cols-3">
                {aiSection.features.map((f) => (
                  <li key={f.title} className="border border-white p-6">
                    <h3 className="text-base font-bold uppercase tracking-wider text-balance">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-sm text-neutral-300 break-words">
                      {f.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section
            className="scroll-mt-20 border-t-4 border-black"
            aria-labelledby="trust-heading"
          >
            <div className="mx-auto max-w-4xl px-4 py-12">
              <h2 id="trust-heading" className="sr-only">
                Trusted by legal teams
              </h2>
              <p className="text-xs font-bold uppercase tracking-widest">
                {socialProof.line}
              </p>
              <blockquote className="mt-4 text-base">
                &ldquo;{socialProof.testimonial}&rdquo;
              </blockquote>
            </div>
          </section>
        </main>

        <footer className="border-t-4 border-black bg-black text-white">
          <div className="mx-auto max-w-4xl px-4 py-12">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <Link
                  href="/5"
                  className="text-sm font-bold uppercase tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  LegalTech
                </Link>
                <p className="mt-4 text-xs text-neutral-400">
                  {footer.copyright}
                </p>
              </div>
              <div className="flex gap-8">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider">
                    Product
                  </h3>
                  <ul className="mt-2 space-y-1">
                    {footer.product.map((l) => (
                      <li key={l.label}>
                        <a
                          href={l.href}
                          className="text-sm text-neutral-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                        >
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider">
                    Company
                  </h3>
                  <ul className="mt-2 space-y-1">
                    {footer.company.map((l) => (
                      <li key={l.label}>
                        <a
                          href={l.href}
                          className="text-sm text-neutral-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                        >
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider">
                    Legal
                  </h3>
                  <ul className="mt-2 space-y-1">
                    {footer.legal.map((l) => (
                      <li key={l.label}>
                        <a
                          href={l.href}
                          className="text-sm text-neutral-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                        >
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-10 border-t border-neutral-700 pt-8">
              <Link
                href="#"
                className="inline-block border-2 border-white bg-white px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-black transition-colors hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black touch-manipulation"
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
