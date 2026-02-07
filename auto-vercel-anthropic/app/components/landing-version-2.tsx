import Link from "next/link";
import {
  productName,
  heroHeadline,
  heroSubhead,
  primaryCta,
  secondaryCta,
  services,
  socialProof,
  footerLinks,
} from "@/app/lib/legal-tech-content";

export function LandingVersion2() {
  return (
    <div className="landing-v2 min-h-screen bg-[#0c1222] text-[#f5f0e8] font-landing-body">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-amber-400/20 focus:px-3 focus:py-2 focus:text-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:ring-offset-2 focus:ring-offset-[#0c1222]"
      >
        Skip to main content
      </a>
      <header className="border-b border-[#f5f0e8]/10">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6" aria-label="Main">
          <Link
            href="/2"
            className="font-landing-display text-xl font-semibold tracking-wide text-[#f5f0e8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c1222]"
          >
            {productName}
          </Link>
          <div className="flex gap-8">
            {["1", "2", "3", "4", "5"].map((v) => (
              <Link
                key={v}
                href={`/${v}`}
                className="text-sm text-[#f5f0e8]/60 transition-colors hover:text-amber-200/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c1222]"
              >
                V{v}
              </Link>
            ))}
          </div>
        </nav>
      </header>
      <main id="main" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <section className="mb-28 flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h1 className="font-landing-display text-4xl font-semibold leading-[1.2] tracking-tight text-[#f5f0e8] text-balance md:text-5xl">
              {heroHeadline}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#f5f0e8]/80">
              {heroSubhead}
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="#"
              className="inline-flex h-12 items-center justify-center rounded bg-amber-500 px-6 text-sm font-medium text-[#0c1222] transition-colors hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c1222]"
            >
              {primaryCta}
            </Link>
            <Link
              href="#"
              className="inline-flex h-12 items-center justify-center rounded border border-[#f5f0e8]/30 px-6 text-sm font-medium text-[#f5f0e8] transition-colors hover:border-amber-400/50 hover:bg-[#f5f0e8]/05 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c1222]"
            >
              {secondaryCta}
            </Link>
          </div>
        </section>
        <section className="mb-28" aria-labelledby="services-heading">
          <h2 id="services-heading" className="font-landing-display mb-12 text-2xl font-semibold tracking-tight text-amber-200 scroll-mt-24">
            Services
          </h2>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <li
                key={s.id}
                className="rounded-lg border border-[#f5f0e8]/15 bg-[#f5f0e8]/05 p-6 transition-colors hover:border-amber-400/30"
              >
                <h3 className="font-landing-display mb-2 text-lg font-semibold text-[#f5f0e8]">
                  {s.name}
                  {s.aiPowered && (
                    <span className="ml-2 text-xs font-normal text-amber-400">
                      AI
                    </span>
                  )}
                </h3>
                <p className="text-[#f5f0e8]/70 leading-relaxed">{s.description}</p>
              </li>
            ))}
          </ul>
        </section>
        <section className="mb-28 rounded-2xl border border-[#f5f0e8]/10 bg-[#f5f0e8]/05 p-10 md:p-14" aria-labelledby="trust-heading">
          <h2 id="trust-heading" className="sr-only">
            Trust
          </h2>
          <p className="mb-6 text-sm font-medium uppercase tracking-widest text-amber-400/90">
            {socialProof.line}
          </p>
          <blockquote className="font-landing-display text-2xl font-medium leading-snug text-[#f5f0e8] text-pretty md:text-3xl">
            &ldquo;{socialProof.testimonial}&rdquo;
          </blockquote>
          <cite className="mt-6 block text-sm not-italic text-[#f5f0e8]/60">
            {socialProof.attribution}
          </cite>
        </section>
      </main>
      <footer className="border-t border-[#f5f0e8]/10 py-10">
        <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6" aria-label="Footer">
          <span className="font-landing-display text-sm font-semibold text-[#f5f0e8]">
            {productName}
          </span>
          <ul className="flex gap-8">
            {footerLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-sm text-[#f5f0e8]/60 transition-colors hover:text-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c1222]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </footer>
    </div>
  );
}
