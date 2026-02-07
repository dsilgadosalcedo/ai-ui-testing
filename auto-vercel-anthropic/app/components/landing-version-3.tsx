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

export function LandingVersion3() {
  return (
    <div className="landing-v3 min-h-screen bg-[#faf9f7] text-[#1a1a1a] font-landing-body">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-[#1a1a1a] focus:px-3 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] focus:ring-offset-2"
      >
        Skip to main content
      </a>
      <header className="border-b border-[#1a1a1a]/08">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5" aria-label="Main">
          <Link
            href="/3"
            className="font-landing-display text-xl font-bold tracking-tight text-[#1a1a1a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a1a1a] focus-visible:ring-offset-2"
          >
            {productName}
          </Link>
          <div className="flex gap-8">
            {["1", "2", "3", "4", "5"].map((v) => (
              <Link
                key={v}
                href={`/${v}`}
                className="text-sm text-[#1a1a1a]/60 transition-colors hover:text-[#1a1a1a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a1a1a] focus-visible:ring-offset-2"
              >
                V{v}
              </Link>
            ))}
          </div>
        </nav>
      </header>
      <main id="main" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <section className="mb-24 grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-8">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#1a1a1a]/50">
              Legal technology
            </p>
            <h1 className="font-landing-display text-4xl font-bold leading-[1.15] tracking-tight text-[#1a1a1a] text-balance md:text-6xl">
              {heroHeadline}
            </h1>
          </div>
          <div className="md:col-span-4 flex flex-col justify-end border-l-2 border-[#1a1a1a]/15 pl-8">
            <p className="text-lg leading-relaxed text-[#1a1a1a]/80 text-pretty mb-8">
              {heroSubhead}
            </p>
            <div className="flex flex-col gap-3">
              <Link
                href="#"
                className="inline-flex h-12 w-fit items-center justify-center bg-[#1a1a1a] px-6 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a1a1a] focus-visible:ring-offset-2"
              >
                {primaryCta}
              </Link>
              <Link
                href="#"
                className="inline-flex h-12 w-fit items-center justify-center text-sm font-semibold text-[#1a1a1a] underline decoration-[#1a1a1a]/40 underline-offset-4 transition-colors hover:decoration-[#1a1a1a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a1a1a] focus-visible:ring-offset-2"
              >
                {secondaryCta}
              </Link>
            </div>
          </div>
        </section>
        <section className="mb-24" aria-labelledby="services-heading">
          <h2 id="services-heading" className="font-landing-display mb-12 text-3xl font-bold tracking-tight text-[#1a1a1a] scroll-mt-24">
            What we offer
          </h2>
          <div className="grid gap-12 md:grid-cols-2">
            {services.map((s) => (
              <article
                key={s.id}
                className="border-b border-[#1a1a1a]/10 pb-8 last:border-0"
              >
                <h3 className="font-landing-display mb-2 text-xl font-bold text-[#1a1a1a]">
                  {s.name}
                  {s.aiPowered && (
                    <span className="ml-2 text-sm font-normal text-[#1a1a1a]/60">
                      — AI-powered
                    </span>
                  )}
                </h3>
                <p className="text-[#1a1a1a]/75 leading-relaxed">{s.description}</p>
              </article>
            ))}
          </div>
        </section>
        <aside className="mb-24 border-l-4 border-[#1a1a1a] bg-white py-10 pl-10 pr-12 shadow-sm" aria-labelledby="trust-heading">
          <h2 id="trust-heading" className="sr-only">
            Trust
          </h2>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#1a1a1a]/50">
            {socialProof.line}
          </p>
          <blockquote className="font-landing-display text-2xl font-bold leading-snug text-[#1a1a1a] text-pretty md:text-3xl">
            &ldquo;{socialProof.testimonial}&rdquo;
          </blockquote>
          <cite className="mt-6 block text-sm not-italic text-[#1a1a1a]/60">
            {socialProof.attribution}
          </cite>
        </aside>
      </main>
      <footer className="border-t border-[#1a1a1a]/08 bg-white py-10">
        <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6" aria-label="Footer">
          <span className="font-landing-display text-sm font-bold text-[#1a1a1a]">
            {productName}
          </span>
          <ul className="flex gap-8">
            {footerLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-sm text-[#1a1a1a]/70 transition-colors hover:text-[#1a1a1a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a1a1a] focus-visible:ring-offset-2"
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
