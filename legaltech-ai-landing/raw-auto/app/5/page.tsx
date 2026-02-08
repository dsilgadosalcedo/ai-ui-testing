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

export default function Page5() {
  return (
    <div className="min-h-screen bg-white text-[#374151] font-sans">
      <header className="border-b border-[#e5e7eb]">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-6">
          <Link href="/" className="text-base font-medium text-[#111827]">
            {productName}
          </Link>
          <nav className="hidden gap-8 md:flex">
            <a href="#services" className="text-sm text-[#6b7280] hover:text-[#111827]">
              Services
            </a>
            <a href="#why-ai" className="text-sm text-[#6b7280] hover:text-[#111827]">
              Why AI
            </a>
          </nav>
          <div className="flex gap-2">
            <Link
              href="#"
              className="rounded border border-[#d1d5db] px-4 py-2 text-sm font-medium text-[#374151] hover:border-[#9ca3af] hover:bg-[#f9fafb]"
            >
              {secondaryCta}
            </Link>
            <Link
              href="#"
              className="rounded border border-[#374151] bg-[#374151] px-4 py-2 text-sm font-medium text-white hover:bg-[#4b5563]"
            >
              {primaryCta}
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-4xl px-6">
            <p className="mb-6 text-sm text-[#9ca3af]">{tagline}</p>
            <h1 className="max-w-2xl text-3xl font-normal leading-snug text-[#111827] md:text-4xl">
              {heroHeadline}
            </h1>
            <p className="mt-8 max-w-xl text-[#6b7280] leading-relaxed">
              {heroSubhead}
            </p>
            <div className="mt-12 flex gap-3">
              <Link
                href="#"
                className="rounded border border-[#374151] bg-[#374151] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#4b5563]"
              >
                {primaryCta}
              </Link>
              <Link
                href="#"
                className="rounded border border-[#e5e7eb] px-5 py-2.5 text-sm font-medium text-[#374151] hover:border-[#d1d5db] hover:bg-[#f9fafb]"
              >
                {secondaryCta}
              </Link>
            </div>
          </div>
        </section>

        <section id="services" className="border-t border-[#e5e7eb] py-24">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-medium text-[#111827]">
              What we offer
            </h2>
            <p className="mt-2 text-[#6b7280]">
              End-to-end legal operations with AI where it matters.
            </p>
            <ul className="mt-16 space-y-0">
              {services.map((s) => (
                <li
                  key={s.id}
                  className={`border-b border-[#e5e7eb] py-8 first:pt-0 ${
                    s.isAi ? "bg-[#fafafa]" : ""
                  }`}
                >
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      {s.isAi && (
                        <span className="mb-1 inline-block text-xs font-medium text-[#6b7280]">
                          AI
                        </span>
                      )}
                      <h3 className="text-lg font-medium text-[#111827]">
                        {s.title}
                      </h3>
                      <p className="mt-1 text-[#6b7280]">{s.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="why-ai" className="border-t border-[#e5e7eb] py-24">
          <div className="mx-auto max-w-2xl px-6">
            <h2 className="text-2xl font-medium text-[#111827]">
              {whyAiHeadline}
            </h2>
            <p className="mt-4 text-[#6b7280] leading-relaxed">{whyAiBody}</p>
          </div>
        </section>

        <footer className="border-t border-[#e5e7eb] py-12">
          <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
            <div className="flex gap-8">
              {footerLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-sm text-[#6b7280] hover:text-[#111827]"
                >
                  {l.label}
                </a>
              ))}
            </div>
            <p className="text-sm text-[#9ca3af]">{footerLegal}</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
