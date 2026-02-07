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

export default function Page2() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#18181b] font-sans">
      <header className="sticky top-0 z-10 border-b border-[#e4e4e7]/80 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-semibold text-[#18181b]">
            {productName}
          </Link>
          <nav className="hidden gap-8 md:flex">
            <a href="#services" className="text-sm text-[#71717a] hover:text-[#18181b]">
              Services
            </a>
            <a href="#why-ai" className="text-sm text-[#71717a] hover:text-[#18181b]">
              Why AI
            </a>
          </nav>
          <div className="flex gap-3">
            <Link
              href="#"
              className="rounded-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] px-5 py-2.5 text-sm font-medium text-white shadow-md hover:opacity-90"
            >
              {primaryCta}
            </Link>
            <Link
              href="#"
              className="rounded-full border border-[#e4e4e7] bg-white px-5 py-2.5 text-sm font-medium text-[#18181b] hover:bg-[#f4f4f5]"
            >
              {secondaryCta}
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden py-24 md:py-32">
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#e0e7ff] via-[#f5f3ff] to-[#fce7f3] opacity-60"
            aria-hidden
          />
          <div className="relative mx-auto max-w-6xl px-6 text-center">
            <p className="mb-4 text-sm font-medium text-[#6366f1]">{tagline}</p>
            <h1 className="text-4xl font-bold leading-tight text-[#18181b] md:text-5xl lg:text-6xl">
              {heroHeadline}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[#52525b]">
              {heroSubhead}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="#"
                className="rounded-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] px-6 py-3.5 text-base font-medium text-white shadow-lg hover:opacity-90"
              >
                {primaryCta}
              </Link>
              <Link
                href="#"
                className="rounded-full border border-[#e4e4e7] bg-white px-6 py-3.5 text-base font-medium text-[#18181b] hover:bg-[#f4f4f5]"
              >
                {secondaryCta}
              </Link>
            </div>
          </div>
        </section>

        <section id="services" className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold text-[#18181b] md:text-4xl">
              What we offer
            </h2>
            <p className="mt-2 text-[#52525b]">
              End-to-end legal operations with AI where it matters.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <div
                  key={s.id}
                  className={`rounded-2xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md ${
                    s.isAi
                      ? "border-[#c4b5fd] bg-gradient-to-br from-[#f5f3ff] to-[#ede9fe]"
                      : "border-[#e4e4e7]"
                  }`}
                >
                  {s.isAi && (
                    <span className="mb-2 inline-block rounded-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] px-3 py-1 text-xs font-medium text-white">
                      AI
                    </span>
                  )}
                  <h3 className="text-lg font-semibold text-[#18181b]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#52525b]">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="why-ai" className="py-20">
          <div className="mx-auto max-w-3xl rounded-3xl bg-white px-8 py-12 text-center shadow-lg md:px-12">
            <h2 className="text-2xl font-bold text-[#18181b] md:text-3xl">
              {whyAiHeadline}
            </h2>
            <p className="mt-4 text-[#52525b]">{whyAiBody}</p>
          </div>
        </section>

        <footer className="border-t border-[#e4e4e7] bg-white py-10">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
            <div className="flex gap-6">
              {footerLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-sm text-[#71717a] hover:text-[#18181b]"
                >
                  {l.label}
                </a>
              ))}
            </div>
            <p className="text-sm text-[#a1a1aa]">{footerLegal}</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
