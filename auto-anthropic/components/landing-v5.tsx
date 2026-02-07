import Link from "next/link";
import { LEGAL_SERVICES } from "@/lib/legal-services";

export function LandingV5() {
  return (
    <div
      className="min-h-screen bg-[#1a1a1a] text-white font-[var(--font-dm-sans)] overflow-x-hidden"
      style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
    >
      <header className="relative z-10 px-6 py-6 flex items-center justify-between">
        <span
          className="text-2xl font-[var(--font-archivo-black)] tracking-tight"
          style={{ fontFamily: "var(--font-archivo-black), sans-serif" }}
        >
          LEXFORGE
        </span>
        <nav className="flex gap-8">
          <Link
            href="/"
            className="text-amber-400 hover:text-amber-300 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-[#1a1a1a]"
          >
            Home
          </Link>
          <Link
            href="/5#services"
            className="text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-[#1a1a1a]"
          >
            Services
          </Link>
        </nav>
      </header>

      <main className="relative">
        <section className="relative px-6 pt-12 pb-20 md:pt-16 md:pb-28">
          <div
            className="absolute top-20 -right-40 w-96 h-96 rounded-full bg-amber-500/20 blur-3xl"
            aria-hidden
          />
          <div
            className="absolute bottom-20 -left-20 w-72 h-72 rounded-full bg-rose-500/15 blur-3xl"
            aria-hidden
          />
          <div className="relative max-w-5xl">
            <p
              className="text-amber-400 font-[var(--font-archivo-black)] uppercase tracking-widest text-sm mb-6"
              style={{
                fontFamily: "var(--font-archivo-black), sans-serif",
                animation: "fade-in-up 0.7s ease-out both",
              }}
            >
              Legal tech that moves
            </p>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-[var(--font-archivo-black)] leading-[0.95] mb-8"
              style={{
                fontFamily: "var(--font-archivo-black), sans-serif",
                animation: "fade-in-up 0.7s ease-out 0.1s both",
              }}
            >
              Contracts.
              <br />
              <span className="text-amber-400">Research.</span>
              <br />
              Control.
            </h1>
            <p
              className="text-xl text-white/80 max-w-xl mb-12"
              style={{ animation: "fade-in-up 0.7s ease-out 0.2s both" }}
            >
              AI-powered review, automation, compliance, and workflows. One
              platform for the whole lifecycle.
            </p>
            <div style={{ animation: "fade-in-up 0.7s ease-out 0.3s both" }}>
              <Link
                href="/5#services"
                className="inline-block bg-amber-400 text-[#1a1a1a] px-10 py-4 font-[var(--font-archivo-black)] text-lg uppercase tracking-wide hover:bg-amber-300 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-[#1a1a1a]"
                style={{ fontFamily: "var(--font-archivo-black), sans-serif" }}
              >
                See what we do
              </Link>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="relative px-6 py-20"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, rgba(251, 191, 36, 0.05) 50%, transparent 100%)",
          }}
        >
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-3xl md:text-4xl font-[var(--font-archivo-black)] mb-16 text-center"
              style={{ fontFamily: "var(--font-archivo-black), sans-serif" }}
            >
              EVERYTHING YOU NEED
            </h2>
            <ul className="grid md:grid-cols-2 gap-8">
              {LEGAL_SERVICES.map((service, i) => (
                <li
                  key={service.id}
                  className="relative bg-white/5 border border-white/10 p-8 hover:border-amber-400/40 hover:bg-white/[0.08] transition-all md:odd:translate-y-8"
                  style={{
                    animation: "fade-in-up 0.6s ease-out both",
                    animationDelay: `${i * 0.06}s`,
                  }}
                >
                  <span className="absolute -top-3 -right-3 w-12 h-12 bg-amber-400/20 flex items-center justify-center font-[var(--font-archivo-black)] text-amber-400 text-lg">
                    {i + 1}
                  </span>
                  <h3 className="text-xl font-semibold text-amber-400 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/75 leading-relaxed">
                    {service.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="relative px-6 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-3xl md:text-4xl font-[var(--font-archivo-black)] mb-6"
              style={{ fontFamily: "var(--font-archivo-black), sans-serif" }}
            >
              LET&apos;S GO
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Get the full picture. Book a call or start a trial.
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-[#1a1a1a] px-12 py-5 font-[var(--font-archivo-black)] text-lg uppercase tracking-wide hover:bg-zinc-200 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1a1a1a]"
              style={{ fontFamily: "var(--font-archivo-black), sans-serif" }}
            >
              Get in touch
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/50">
        <Link href="/" className="hover:text-amber-400 transition-colors">
          View all versions
        </Link>
      </footer>
    </div>
  );
}
