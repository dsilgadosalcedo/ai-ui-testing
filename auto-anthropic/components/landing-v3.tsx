import Link from "next/link";
import { LEGAL_SERVICES } from "@/lib/legal-services";

export function LandingV3() {
  return (
    <div
      className="min-h-screen bg-[#0a0e14] text-[#e0f7ff] font-[var(--font-rajdhani)]"
      style={{ fontFamily: "var(--font-rajdhani), sans-serif" }}
    >
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(0, 255, 255, 0.08) 0%, transparent 50%, rgba(255, 0, 255, 0.06) 100%)",
        }}
      />
      <header className="relative border-b border-cyan-500/30 px-6 py-5 flex items-center justify-between">
        <span
          className="text-xl font-[var(--font-orbitron)] tracking-widest text-cyan-400"
          style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
        >
          LEXFORGE
        </span>
        <nav className="flex gap-6">
          <Link
            href="/"
            className="text-sm text-cyan-400/90 hover:text-cyan-300 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#0a0e14]"
          >
            Home
          </Link>
          <Link
            href="/3#services"
            className="text-sm text-[#e0f7ff]/80 hover:text-[#e0f7ff] transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#0a0e14]"
          >
            Services
          </Link>
        </nav>
      </header>

      <main className="relative">
        <section className="px-6 pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="max-w-4xl">
            <p className="text-cyan-400 text-sm font-[var(--font-orbitron)] tracking-widest uppercase mb-4">
              Next-gen legal ops
            </p>
            <h1
              className="text-4xl md:text-6xl font-[var(--font-orbitron)] font-semibold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-[#e0f7ff] to-fuchsia-400"
              style={{
                fontFamily: "var(--font-orbitron), sans-serif",
                animation: "gradient-shift 8s ease-in-out infinite both",
              }}
            >
              Legal tech,
              <br />
              powered by AI.
            </h1>
            <p className="text-lg text-[#e0f7ff]/80 max-w-xl mb-10">
              Contract review, research, compliance, and workflow in one
              platform. Built for speed and scale.
            </p>
            <Link
              href="/3#services"
              className="inline-block px-6 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#0a0e14]"
            >
              Explore
            </Link>
          </div>
          <div
            className="absolute top-32 right-10 w-32 h-32 border border-cyan-500/40 rotate-12"
            aria-hidden
          />
          <div
            className="absolute top-48 right-1/4 w-20 h-20 border border-fuchsia-500/30 -rotate-45"
            aria-hidden
          />
        </section>

        <section
          id="services"
          className="px-6 py-20 border-t border-cyan-500/20"
        >
          <div className="max-w-5xl mx-auto">
            <h2
              className="text-2xl md:text-3xl font-[var(--font-orbitron)] text-cyan-400 mb-12"
              style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
            >
              CAPABILITIES
            </h2>
            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {LEGAL_SERVICES.map((service) => (
                <li
                  key={service.id}
                  className="p-6 border border-cyan-500/30 bg-[#0a0e14]/80 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all"
                >
                  <h3 className="text-lg font-semibold text-cyan-300 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#e0f7ff]/70">
                    {service.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-6 py-24 border-t border-cyan-500/20">
          <div className="max-w-2xl mx-auto text-center">
            <h2
              className="text-2xl font-[var(--font-orbitron)] text-cyan-400 mb-4"
              style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
            >
              READY TO LAUNCH
            </h2>
            <p className="text-[#e0f7ff]/80 mb-8">
              Integrate LexForge into your stack. APIs and UI.
            </p>
            <Link
              href="/"
              className="inline-block px-8 py-4 bg-cyan-500 text-[#0a0e14] font-semibold hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#0a0e14]"
            >
              Get in touch
            </Link>
          </div>
        </section>
      </main>

      <footer className="relative border-t border-cyan-500/20 px-6 py-6 text-center text-sm text-[#e0f7ff]/50">
        <Link href="/" className="hover:text-cyan-400 transition-colors">
          View all versions
        </Link>
      </footer>
    </div>
  );
}
