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

export default function Page1() {
  return (
    <div className="min-h-screen bg-white text-[#0f172a] font-sans">
      <header className="border-b border-[#e2e8f0] bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="font-serif-lora text-xl font-semibold text-[#0f172a]">
            {productName}
          </Link>
          <nav className="hidden gap-8 md:flex">
            <a href="#services" className="text-sm text-[#475569] hover:text-[#0f172a]">
              Services
            </a>
            <a href="#why-ai" className="text-sm text-[#475569] hover:text-[#0f172a]">
              Why AI
            </a>
          </nav>
          <div className="flex gap-3">
            <Link
              href="#"
              className="rounded bg-[#0f172a] px-4 py-2 text-sm font-medium text-white hover:bg-[#1e293b]"
            >
              {primaryCta}
            </Link>
            <Link
              href="#"
              className="rounded border border-[#0f172a] px-4 py-2 text-sm font-medium text-[#0f172a] hover:bg-[#f1f5f9]"
            >
              {secondaryCta}
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="border-b border-[#e2e8f0] bg-[#f8fafc] py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[#64748b]">
              {tagline}
            </p>
            <h1 className="font-serif-lora text-4xl font-semibold leading-tight text-[#0f172a] md:text-5xl lg:text-6xl">
              {heroHeadline}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-[#475569]">
              {heroSubhead}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="#"
                className="rounded bg-[#0f172a] px-6 py-3 text-base font-medium text-white hover:bg-[#1e293b]"
              >
                {primaryCta}
              </Link>
              <Link
                href="#"
                className="rounded border border-[#0f172a] px-6 py-3 text-base font-medium text-[#0f172a] hover:bg-[#f1f5f9]"
              >
                {secondaryCta}
              </Link>
            </div>
          </div>
        </section>

        <section id="services" className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="font-serif-lora text-3xl font-semibold text-[#0f172a] md:text-4xl">
              What we offer
            </h2>
            <p className="mt-2 text-[#475569]">
              End-to-end legal operations with AI where it matters.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <div
                  key={s.id}
                  className={`rounded-lg border bg-white p-6 shadow-sm ${
                    s.isAi
                      ? "border-[#0f172a] border-2 bg-[#f8fafc]"
                      : "border-[#e2e8f0]"
                  }`}
                >
                  {s.isAi && (
                    <span className="mb-2 inline-block rounded bg-[#0f172a] px-2 py-0.5 text-xs font-medium text-white">
                      AI
                    </span>
                  )}
                  <h3 className="font-serif-lora text-lg font-semibold text-[#0f172a]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#475569]">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="why-ai" className="border-t border-[#e2e8f0] bg-[#f8fafc] py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="font-serif-lora text-2xl font-semibold text-[#0f172a] md:text-3xl">
              {whyAiHeadline}
            </h2>
            <p className="mt-4 text-[#475569]">{whyAiBody}</p>
          </div>
        </section>

        <footer className="border-t border-[#e2e8f0] py-10">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
            <div className="flex gap-6">
              {footerLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-sm text-[#475569] hover:text-[#0f172a]"
                >
                  {l.label}
                </a>
              ))}
            </div>
            <p className="text-sm text-[#64748b]">{footerLegal}</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
