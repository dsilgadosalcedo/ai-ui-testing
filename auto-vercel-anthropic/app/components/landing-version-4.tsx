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

export function LandingVersion4() {
  return (
    <div className="landing-v4 min-h-screen bg-[#0d0d0d] text-[#e0e0e0] font-landing-body">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-emerald-400 focus:px-3 focus:py-2 focus:text-[#0d0d0d] focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-[#0d0d0d]"
      >
        Skip to main content
      </a>
      <header className="border-b border-emerald-400/30">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5" aria-label="Main">
          <Link
            href="/4"
            className="font-landing-mono text-lg font-medium tracking-wider text-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0d0d]"
          >
            {productName.toUpperCase()}
          </Link>
          <div className="flex gap-6">
            {["1", "2", "3", "4", "5"].map((v) => (
              <Link
                key={v}
                href={`/${v}`}
                className="font-landing-mono text-xs text-[#e0e0e0]/50 transition-colors hover:text-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0d0d]"
              >
                /V{v}
              </Link>
            ))}
          </div>
        </nav>
      </header>
      <main id="main" className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <section className="mb-24 border border-emerald-400/20 bg-[#0d0d0d] p-8 md:p-12">
          <div className="mb-6 font-landing-mono text-xs tracking-widest text-emerald-400">
            &gt; LEGAL_TECH_PLATFORM
          </div>
          <h1 className="font-landing-display mb-6 text-3xl font-semibold leading-tight tracking-tight text-[#e0e0e0] text-balance md:text-4xl">
            {heroHeadline}
          </h1>
          <p className="mb-8 max-w-xl font-landing-mono text-sm leading-relaxed text-[#e0e0e0]/80">
            {heroSubhead}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#"
              className="inline-flex h-11 items-center justify-center border border-emerald-400 bg-emerald-400/10 px-5 font-landing-mono text-sm text-emerald-400 transition-colors hover:bg-emerald-400/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0d0d]"
            >
              {primaryCta}
            </Link>
            <Link
              href="#"
              className="inline-flex h-11 items-center justify-center border border-[#e0e0e0]/30 px-5 font-landing-mono text-sm text-[#e0e0e0] transition-colors hover:border-emerald-400/50 hover:text-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0d0d]"
            >
              {secondaryCta}
            </Link>
          </div>
        </section>
        <section className="mb-24" aria-labelledby="services-heading">
          <h2 id="services-heading" className="font-landing-mono mb-10 text-xs font-medium uppercase tracking-widest text-emerald-400 scroll-mt-24">
            [ SERVICES ]
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {services.map((s) => (
              <li
                key={s.id}
                className="border border-[#e0e0e0]/15 p-5 font-landing-mono transition-colors hover:border-emerald-400/40"
              >
                <h3 className="mb-1 text-sm font-medium text-[#e0e0e0]">
                  {s.name}
                  {s.aiPowered && (
                    <span className="ml-2 text-emerald-400">[AI]</span>
                  )}
                </h3>
                <p className="text-xs leading-relaxed text-[#e0e0e0]/70">{s.description}</p>
              </li>
            ))}
          </ul>
        </section>
        <section className="mb-24 border-l-2 border-emerald-400/50 pl-6" aria-labelledby="trust-heading">
          <h2 id="trust-heading" className="sr-only">
            Trust
          </h2>
          <p className="mb-4 font-landing-mono text-xs tracking-widest text-emerald-400/90">
            {socialProof.line.toUpperCase()}
          </p>
          <blockquote className="font-landing-display text-xl font-medium leading-snug text-[#e0e0e0] text-pretty md:text-2xl">
            &ldquo;{socialProof.testimonial}&rdquo;
          </blockquote>
          <cite className="mt-4 block font-landing-mono text-xs not-italic text-[#e0e0e0]/50">
            {socialProof.attribution}
          </cite>
        </section>
      </main>
      <footer className="border-t border-[#e0e0e0]/15 py-8">
        <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-6 px-6" aria-label="Footer">
          <span className="font-landing-mono text-xs font-medium text-[#e0e0e0]/70">
            {productName.toUpperCase()}
          </span>
          <ul className="flex gap-6">
            {footerLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="font-landing-mono text-xs text-[#e0e0e0]/50 transition-colors hover:text-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0d0d]"
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
