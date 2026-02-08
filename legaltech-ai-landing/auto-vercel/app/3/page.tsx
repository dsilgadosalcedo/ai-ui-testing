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

export default function Landing3() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-black focus:px-4 focus:py-2 focus:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
      >
        Skip to main content
      </a>
      <div className="min-h-screen bg-white font-sans text-stone-800">
        <header className="border-b-2 border-stone-900">
          <nav
            className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
            aria-label="Main navigation"
          >
            <Link
              href="/3"
              className="text-xl font-bold text-stone-900 transition-colors hover:text-stone-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2"
            >
              LegalTech
            </Link>
            <div className="flex gap-6">
              <Link
                href="#services"
                className="font-medium text-stone-700 transition-colors hover:text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2"
              >
                Services
              </Link>
              <Link
                href="#ai"
                className="font-medium text-stone-700 transition-colors hover:text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2"
              >
                AI Features
              </Link>
              <Link
                href="/"
                className="font-medium text-stone-700 transition-colors hover:text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2"
              >
                All Versions
              </Link>
            </div>
          </nav>
        </header>

        <main id="main-content" className="scroll-mt-20" tabIndex={-1}>
          <section className="mx-auto max-w-6xl px-6 pt-16 pb-24">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <h1 className="text-4xl font-bold leading-[1.15] text-stone-900 text-balance sm:text-5xl lg:text-6xl">
                  {hero.headline}
                </h1>
                <p className="mt-8 max-w-lg text-lg leading-relaxed text-stone-600">
                  {hero.subhead}
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href="#"
                    className="inline-flex h-12 items-center justify-center bg-stone-900 px-6 text-base font-semibold text-white transition-colors hover:bg-stone-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2 touch-manipulation"
                    style={{ touchAction: "manipulation" }}
                  >
                    {hero.ctaPrimary}
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-12 items-center justify-center border-2 border-stone-900 bg-white px-6 text-base font-semibold text-stone-900 transition-colors hover:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2 touch-manipulation"
                    style={{ touchAction: "manipulation" }}
                  >
                    {hero.ctaSecondary}
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5 lg:pt-8">
                <p className="text-sm font-semibold uppercase tracking-widest text-stone-400">
                  {socialProof.line}
                </p>
                <blockquote className="mt-4 text-xl font-medium leading-snug text-stone-800">
                  &ldquo;{socialProof.testimonial}&rdquo;
                </blockquote>
              </div>
            </div>
          </section>

          <section
            id="services"
            className="scroll-mt-20 border-t-2 border-stone-200 bg-stone-50"
            aria-labelledby="services-heading"
          >
            <div className="mx-auto max-w-6xl px-6 py-20">
              <h2
                id="services-heading"
                className="text-3xl font-bold text-stone-900 text-balance"
              >
                Services
              </h2>
              <p className="mt-2 max-w-xl text-stone-600">
                Everything you need to manage contracts and legal workflows.
              </p>
              <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((s) => (
                  <li key={s.title} className="border-b border-stone-200 pb-8">
                    <h3 className="text-xl font-bold text-stone-900 text-balance">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-stone-600 break-words">
                      {s.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section
            id="ai"
            className="scroll-mt-20 border-t-2 border-stone-200"
            aria-labelledby="ai-heading"
          >
            <div className="mx-auto max-w-6xl px-6 py-20">
              <div className="grid gap-12 lg:grid-cols-3">
                <div className="lg:col-span-1">
                  <h2
                    id="ai-heading"
                    className="text-3xl font-bold text-stone-900 text-balance"
                  >
                    {aiSection.heading}
                  </h2>
                  <p className="mt-4 text-stone-600">{aiSection.subhead}</p>
                </div>
                <ul className="lg:col-span-2 grid gap-10 sm:grid-cols-2">
                  {aiSection.features.map((f) => (
                    <li key={f.title}>
                      <h3 className="text-lg font-bold text-stone-900 text-balance">
                        {f.title}
                      </h3>
                      <p className="mt-2 text-stone-600 break-words">
                        {f.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t-2 border-stone-900 bg-stone-900 text-stone-200">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <Link
                  href="/3"
                  className="text-lg font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-900"
                >
                  LegalTech
                </Link>
                <p className="mt-4 text-sm text-stone-400">
                  {footer.copyright}
                </p>
              </div>
              <div className="flex gap-12">
                <div>
                  <h3 className="text-sm font-bold text-white">Product</h3>
                  <ul className="mt-3 space-y-2">
                    {footer.product.map((l) => (
                      <li key={l.label}>
                        <a
                          href={l.href}
                          className="text-stone-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-900"
                        >
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Company</h3>
                  <ul className="mt-3 space-y-2">
                    {footer.company.map((l) => (
                      <li key={l.label}>
                        <a
                          href={l.href}
                          className="text-stone-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-900"
                        >
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Legal</h3>
                  <ul className="mt-3 space-y-2">
                    {footer.legal.map((l) => (
                      <li key={l.label}>
                        <a
                          href={l.href}
                          className="text-stone-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-900"
                        >
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-10 border-t border-stone-700 pt-8">
              <Link
                href="#"
                className="inline-flex h-11 items-center justify-center bg-amber-400 px-5 text-sm font-semibold text-stone-900 transition-colors hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-900 touch-manipulation"
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
