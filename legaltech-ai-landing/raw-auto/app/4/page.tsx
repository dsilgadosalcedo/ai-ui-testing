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

export default function Page4() {
  return (
    <div className="min-h-screen bg-[#fafaf9] text-[#1c1917] font-sans">
      <header className="border-b-2 border-[#1c1917] bg-[#fafaf9]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-xl font-bold uppercase tracking-tight text-[#1c1917]">
            {productName}
          </Link>
          <nav className="hidden gap-10 md:flex">
            <a href="#services" className="text-sm font-medium text-[#1c1917] hover:text-[#b91c1c]">
              Services
            </a>
            <a href="#why-ai" className="text-sm font-medium text-[#1c1917] hover:text-[#b91c1c]">
              Why AI
            </a>
          </nav>
          <div className="flex gap-3">
            <Link
              href="#"
              className="bg-[#b91c1c] px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-[#991b1b]"
            >
              {primaryCta}
            </Link>
            <Link
              href="#"
              className="border-2 border-[#1c1917] px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-[#1c1917] hover:bg-[#1c1917] hover:text-white"
            >
              {secondaryCta}
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="border-b-2 border-[#1c1917] py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#b91c1c]">
                  {tagline}
                </p>
                <h1 className="text-5xl font-bold leading-[1.1] text-[#1c1917] md:text-6xl lg:text-7xl">
                  {heroHeadline}
                </h1>
              </div>
              <div className="flex flex-col justify-end lg:col-span-5">
                <p className="max-w-md text-lg leading-relaxed text-[#44403c]">
                  {heroSubhead}
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="#"
                    className="inline-block bg-[#b91c1c] px-6 py-3.5 text-base font-bold text-white hover:bg-[#991b1b]"
                  >
                    {primaryCta}
                  </Link>
                  <Link
                    href="#"
                    className="inline-block border-2 border-[#1c1917] px-6 py-3.5 text-base font-bold text-[#1c1917] hover:bg-[#1c1917] hover:text-white"
                  >
                    {secondaryCta}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <h2 className="text-4xl font-bold uppercase tracking-tight text-[#1c1917] md:text-5xl">
                What we offer
              </h2>
              <p className="max-w-sm text-[#44403c]">
                End-to-end legal operations with AI where it matters.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s, i) => (
                <div
                  key={s.id}
                  className={`border-2 p-6 ${
                    s.isAi
                      ? "border-[#b91c1c] bg-[#fef2f2]"
                      : "border-[#1c1917] bg-white"
                  } ${i === 1 || i === 4 ? "lg:mt-8" : ""}`}
                >
                  {s.isAi && (
                    <span className="mb-3 inline-block bg-[#b91c1c] px-2 py-1 text-xs font-bold uppercase text-white">
                      AI
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-[#1c1917]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[#44403c]">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="why-ai" className="border-y-2 border-[#1c1917] bg-[#1c1917] py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-3xl font-bold uppercase tracking-tight text-white md:text-4xl">
              {whyAiHeadline}
            </h2>
            <p className="mt-6 text-lg text-[#d6d3d1]">{whyAiBody}</p>
          </div>
        </section>

        <footer className="border-t-2 border-[#1c1917] bg-[#fafaf9] py-10">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
            <div className="flex gap-8">
              {footerLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-sm font-medium text-[#1c1917] hover:text-[#b91c1c]"
                >
                  {l.label}
                </a>
              ))}
            </div>
            <p className="text-sm text-[#78716c]">{footerLegal}</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
