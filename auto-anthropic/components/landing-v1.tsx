import Link from "next/link";
import { LEGAL_SERVICES } from "@/lib/legal-services";

export function LandingV1() {
  return (
    <div
      className="min-h-screen bg-[#0f1419] text-[#e8e4dc] font-[var(--font-source-serif)]"
      style={{ fontFamily: "var(--font-source-serif), serif" }}
    >
      <header className="border-b border-[#2a2a24] px-6 py-5 flex items-center justify-between">
        <span
          className="text-xl tracking-[0.2em] uppercase font-[var(--font-playfair)]"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          LexForge
        </span>
        <nav className="flex gap-8">
          <Link
            href="/"
            className="text-sm tracking-widest uppercase text-[#c4a84b] hover:text-[#e0c96a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#c4a84b] focus:ring-offset-2 focus:ring-offset-[#0f1419]"
          >
            Home
          </Link>
          <Link
            href="/1#services"
            className="text-sm tracking-widest uppercase text-[#e8e4dc]/80 hover:text-[#e8e4dc] transition-colors focus:outline-none focus:ring-2 focus:ring-[#c4a84b] focus:ring-offset-2 focus:ring-offset-[#0f1419]"
          >
            Services
          </Link>
        </nav>
      </header>

      <main>
        <section className="relative overflow-hidden px-6 pt-24 pb-32 md:pt-32 md:pb-40">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c4a84b' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <div className="relative max-w-4xl">
          <p
            className="text-[#c4a84b] tracking-[0.3em] uppercase text-sm mb-6"
            style={{ animation: "fade-in-up 0.8s ease-out both" }}
          >
            Legal intelligence, reimagined
          </p>
            <h1
              className="text-5xl md:text-7xl font-[var(--font-playfair)] leading-[1.1] mb-8"
              style={{
                fontFamily: "var(--font-playfair), serif",
                animation: "fade-in-up 0.8s ease-out 0.1s both",
              }}
            >
              Where precision meets{" "}
              <span className="text-[#c4a84b] italic">possibility</span>
            </h1>
            <p
              className="text-lg md:text-xl text-[#e8e4dc]/80 max-w-xl leading-relaxed"
              style={{ animation: "fade-in-up 0.8s ease-out 0.2s both" }}
            >
              AI-powered tools for contract review, research, compliance, and
              workflow. Built for firms that refuse to compromise.
            </p>
            <div
              className="mt-12"
              style={{ animation: "fade-in-up 0.8s ease-out 0.3s both" }}
            >
              <Link
                href="/1#services"
                className="inline-block border border-[#c4a84b] text-[#c4a84b] px-8 py-4 tracking-widest uppercase text-sm hover:bg-[#c4a84b] hover:text-[#0f1419] transition-colors focus:outline-none focus:ring-2 focus:ring-[#c4a84b] focus:ring-offset-2 focus:ring-offset-[#0f1419]"
              >
                Explore services
              </Link>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="px-6 py-24 border-t border-[#2a2a24]"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, rgba(196, 168, 75, 0.03) 100%)",
          }}
        >
          <div className="max-w-5xl mx-auto">
            <h2
              className="text-3xl md:text-4xl font-[var(--font-playfair)] text-[#e8e4dc] mb-4"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              What we offer
            </h2>
            <p className="text-[#e8e4dc]/70 mb-16 max-w-xl">
              One platform. Every stage of the legal lifecycle.
            </p>
            <ul className="grid md:grid-cols-2 gap-x-12 gap-y-16">
              {LEGAL_SERVICES.map((service, i) => (
                <li
                  key={service.id}
                  className="border-l-2 border-[#c4a84b]/40 pl-8 py-2"
                  style={{
                    animation: "fade-in-up 0.6s ease-out both",
                    animationDelay: `${i * 0.08}s`,
                  }}
                >
                  <h3 className="text-lg font-semibold text-[#c4a84b] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[#e8e4dc]/80 leading-relaxed">
                    {service.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-6 py-24 border-t border-[#2a2a24]">
          <div className="max-w-2xl mx-auto text-center">
            <h2
              className="text-2xl md:text-3xl font-[var(--font-playfair)] text-[#e8e4dc] mb-6"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Ready to transform your practice?
            </h2>
            <p className="text-[#e8e4dc]/70 mb-10">
              Join leading firms who trust LexForge for clarity, speed, and
              control.
            </p>
            <Link
              href="/"
              className="inline-block bg-[#c4a84b] text-[#0f1419] px-10 py-4 tracking-widest uppercase text-sm font-semibold hover:bg-[#e0c96a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#c4a84b] focus:ring-offset-2 focus:ring-offset-[#0f1419]"
            >
              Get in touch
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#2a2a24] px-6 py-8 text-center text-sm text-[#e8e4dc]/50">
        <Link href="/" className="hover:text-[#e8e4dc]/80 transition-colors">
          View all versions
        </Link>
      </footer>
    </div>
  );
}
