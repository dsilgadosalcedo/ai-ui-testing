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

export function LandingVersion1() {
  return (
    <div className="landing-v1 min-h-screen bg-white text-[#171717] font-landing-body">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-[#171717] focus:px-3 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-[#171717] focus:ring-offset-2"
      >
        Skip to main content
      </a>
      <header className="border-b border-[#171717]/10">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5" aria-label="Main">
          <Link
            href="/1"
            className="font-landing-display text-xl font-semibold tracking-tight text-[#171717] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717] focus-visible:ring-offset-2"
          >
            {productName}
          </Link>
          <div className="flex gap-8">
            {["1", "2", "3", "4", "5"].map((v) => (
              <Link
                key={v}
                href={`/${v}`}
                className="text-sm text-[#171717]/70 transition-colors hover:text-[#171717] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717] focus-visible:ring-offset-2"
              >
                V{v}
              </Link>
            ))}
          </div>
        </nav>
      </header>
      <main id="main" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <section className="mb-32 grid gap-16 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            <h1 className="font-landing-display text-4xl font-semibold leading-[1.15] tracking-tight text-[#171717] text-balance md:text-5xl">
              {heroHeadline}
            </h1>
          </div>
          <div className="md:col-span-5 flex flex-col justify-end gap-8">
            <p className="text-lg leading-relaxed text-[#171717]/75 max-w-md">
              {heroSubhead}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#"
                className="inline-flex h-12 items-center justify-center rounded bg-[#171717] px-6 text-sm font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717] focus-visible:ring-offset-2"
              >
                {primaryCta}
              </Link>
              <Link
                href="#"
                className="inline-flex h-12 items-center justify-center rounded border border-[#171717]/20 px-6 text-sm font-medium text-[#171717] transition-colors hover:border-[#171717]/40 hover:bg-[#171717]/05 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717] focus-visible:ring-offset-2"
              >
                {secondaryCta}
              </Link>
            </div>
          </div>
        </section>
        <section className="mb-32" aria-labelledby="services-heading">
          <h2 id="services-heading" className="font-landing-display mb-16 text-2xl font-semibold tracking-tight text-[#171717] scroll-mt-24">
            Services
          </h2>
          <ul className="grid gap-px bg-[#171717]/10 md:grid-cols-2">
            {services.map((s) => (
              <li key={s.id} className="bg-white p-8 md:p-10">
                <h3 className="font-landing-display mb-2 text-lg font-semibold text-[#171717]">
                  {s.name}
                  {s.aiPowered && (
                    <span className="ml-2 text-xs font-normal text-red-600">
                      AI
                    </span>
                  )}
                </h3>
                <p className="text-[#171717]/70 leading-relaxed">{s.description}</p>
              </li>
            ))}
          </ul>
        </section>
        <section className="mb-32" aria-labelledby="trust-heading">
          <h2 id="trust-heading" className="sr-only">
            Trust
          </h2>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[#171717]/50">
            {socialProof.line}
          </p>
          <blockquote className="font-landing-display text-2xl font-medium leading-snug text-[#171717] text-pretty md:text-3xl">
            &ldquo;{socialProof.testimonial}&rdquo;
          </blockquote>
          <cite className="mt-4 block text-sm not-italic text-[#171717]/60">
            {socialProof.attribution}
          </cite>
        </section>
      </main>
      <footer className="border-t border-[#171717]/10 py-12">
        <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-6 px-6" aria-label="Footer">
          <span className="font-landing-display text-sm font-semibold text-[#171717]">
            {productName}
          </span>
          <ul className="flex gap-8">
            {footerLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-sm text-[#171717]/70 transition-colors hover:text-[#171717] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717] focus-visible:ring-offset-2"
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
