import Link from "next/link";
import {
  productName,
  tagline,
  heroHeadline,
  heroSubhead,
  primaryCta,
  secondaryCta,
  services,
  whyAiHeadline,
  whyAiBody,
  footerLinks,
  footerLegal,
} from "../lib/legal-tech-content";

export default function Page3() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#fafafa] font-sans">
      <header className="border-b border-[#262626] bg-[#0f0f0f]/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-semibold text-[#fafafa]">
            {productName}
          </Link>
          <nav className="hidden gap-8 md:flex">
            <a href="#services" className="text-sm text-[#a3a3a3] hover:text-[#fbbf24]">
              Services
            </a>
            <a href="#why-ai" className="text-sm text-[#a3a3a3] hover:text-[#fbbf24]">
              Why AI
            </a>
          </nav>
          <div className="flex gap-3">
            <Link
              href="#"
              className="rounded bg-[#fbbf24] px-4 py-2 text-sm font-medium text-[#0f0f0f] hover:bg-[#fcd34d]"
            >
              {primaryCta}
            </Link>
            <Link
              href="#"
              className="rounded border border-[#fbbf24]/50 px-4 py-2 text-sm font-medium text-[#fbbf24] hover:bg-[#fbbf24]/10"
            >
              {secondaryCta}
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="relative py-24 md:py-32">
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] via-[#0f0f0f] to-[#0f0f0f]"
            aria-hidden
          />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#fbbf24]/30 to-transparent" aria-hidden />
          <div className="relative mx-auto max-w-6xl px-6 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-[#fbbf24]">
              {tagline}
            </p>
            <h1 className="text-4xl font-bold leading-tight text-[#fafafa] md:text-5xl lg:text-6xl">
              {heroHeadline}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[#a3a3a3]">
              {heroSubhead}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="#"
                className="rounded bg-[#fbbf24] px-6 py-3 text-base font-medium text-[#0f0f0f] hover:bg-[#fcd34d]"
              >
                {primaryCta}
              </Link>
              <Link
                href="#"
                className="rounded border border-[#fbbf24]/50 px-6 py-3 text-base font-medium text-[#fbbf24] hover:bg-[#fbbf24]/10"
              >
                {secondaryCta}
              </Link>
            </div>
          </div>
        </section>

        <section id="services" className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold text-[#fafafa] md:text-4xl">
              What we offer
            </h2>
            <p className="mt-2 text-[#a3a3a3]">
              End-to-end legal operations with AI where it matters.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <div
                  key={s.id}
                  className={`rounded-xl border p-6 ${
                    s.isAi
                      ? "border-[#fbbf24]/50 bg-[#1a1a1a] ring-1 ring-[#fbbf24]/20"
                      : "border-[#262626] bg-[#171717]"
                  }`}
                >
                  {s.isAi && (
                    <span className="mb-2 inline-block rounded bg-[#fbbf24] px-2 py-0.5 text-xs font-medium text-[#0f0f0f]">
                      AI
                    </span>
                  )}
                  <h3 className="text-lg font-semibold text-[#fafafa]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#a3a3a3]">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="why-ai" className="py-20">
          <div className="mx-auto max-w-3xl rounded-xl border border-[#262626] bg-[#171717] px-8 py-12 text-center md:px-12">
            <h2 className="text-2xl font-bold text-[#fafafa] md:text-3xl">
              {whyAiHeadline}
            </h2>
            <p className="mt-4 text-[#a3a3a3]">{whyAiBody}</p>
          </div>
        </section>

        <footer className="border-t border-[#262626] py-10">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
            <div className="flex gap-6">
              {footerLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-sm text-[#a3a3a3] hover:text-[#fbbf24]"
                >
                  {l.label}
                </a>
              ))}
            </div>
            <p className="text-sm text-[#737373]">{footerLegal}</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
