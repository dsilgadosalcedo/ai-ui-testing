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

export function LandingVersion5() {
  return (
    <div className="landing-v5 min-h-screen bg-[#f7f4ef] text-[#2c2a26] font-landing-body">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-[#6b5b4f] focus:px-4 focus:py-2 focus:text-[#f7f4ef] focus:outline-none focus:ring-2 focus:ring-[#6b5b4f] focus:ring-offset-2"
      >
        Skip to main content
      </a>
      <header className="bg-[#f7f4ef]/90 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5" aria-label="Main">
          <Link
            href="/5"
            className="font-landing-display text-xl font-semibold text-[#2c2a26] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6b5b4f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f4ef]"
          >
            {productName}
          </Link>
          <div className="flex gap-6">
            {["1", "2", "3", "4", "5"].map((v) => (
              <Link
                key={v}
                href={`/${v}`}
                className="text-sm text-[#2c2a26]/60 transition-colors hover:text-[#6b5b4f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6b5b4f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f4ef]"
              >
                Version {v}
              </Link>
            ))}
          </div>
        </nav>
      </header>
      <main id="main" className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <section className="mb-24 rounded-3xl bg-white/80 p-10 shadow-[0_4px_24px_rgba(43,42,38,0.06)] md:p-14">
          <h1 className="font-landing-display mb-6 text-4xl font-semibold leading-[1.2] tracking-tight text-[#2c2a26] text-balance md:text-5xl">
            {heroHeadline}
          </h1>
          <p className="mb-10 max-w-xl text-lg leading-relaxed text-[#2c2a26]/80">
            {heroSubhead}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#6b5b4f] px-6 text-sm font-medium text-[#f7f4ef] transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6b5b4f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f4ef]"
            >
              {primaryCta}
            </Link>
            <Link
              href="#"
              className="inline-flex h-12 items-center justify-center rounded-full border-2 border-[#6b5b4f]/30 px-6 text-sm font-medium text-[#6b5b4f] transition-colors hover:border-[#6b5b4f] hover:bg-[#6b5b4f]/05 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6b5b4f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f4ef]"
            >
              {secondaryCta}
            </Link>
          </div>
        </section>
        <section className="mb-24" aria-labelledby="services-heading">
          <h2 id="services-heading" className="font-landing-display mb-12 text-2xl font-semibold text-[#2c2a26] scroll-mt-24">
            What we offer
          </h2>
          <ul className="grid gap-6 sm:grid-cols-2">
            {services.map((s) => (
              <li
                key={s.id}
                className="rounded-2xl bg-white/70 p-6 shadow-[0_2px_12px_rgba(43,42,38,0.04)] transition-shadow hover:shadow-[0_4px_20px_rgba(43,42,38,0.08)]"
              >
                <h3 className="font-landing-display mb-2 text-lg font-semibold text-[#2c2a26]">
                  {s.name}
                  {s.aiPowered && (
                    <span className="ml-2 inline-flex items-center rounded-full bg-[#6b5b4f]/15 px-2 py-0.5 text-xs font-medium text-[#6b5b4f]">
                      AI
                    </span>
                  )}
                </h3>
                <p className="text-[#2c2a26]/75 leading-relaxed">{s.description}</p>
              </li>
            ))}
          </ul>
        </section>
        <section className="mb-24 rounded-2xl bg-[#6b5b4f]/08 p-10 md:p-12" aria-labelledby="trust-heading">
          <h2 id="trust-heading" className="sr-only">
            Trust
          </h2>
          <p className="mb-6 text-sm font-medium text-[#6b5b4f]">
            {socialProof.line}
          </p>
          <blockquote className="font-landing-display text-2xl font-semibold leading-snug text-[#2c2a26] text-pretty md:text-3xl">
            &ldquo;{socialProof.testimonial}&rdquo;
          </blockquote>
          <cite className="mt-6 block text-sm not-italic text-[#2c2a26]/60">
            {socialProof.attribution}
          </cite>
        </section>
      </main>
      <footer className="border-t border-[#2c2a26]/08 bg-white/50 py-10">
        <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-6 px-6" aria-label="Footer">
          <span className="font-landing-display text-sm font-semibold text-[#2c2a26]">
            {productName}
          </span>
          <ul className="flex gap-8">
            {footerLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-sm text-[#2c2a26]/70 transition-colors hover:text-[#6b5b4f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6b5b4f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f4ef]"
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
