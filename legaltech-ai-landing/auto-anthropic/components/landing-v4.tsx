import Link from "next/link";
import { LEGAL_SERVICES } from "@/lib/legal-services";

export function LandingV4() {
  return (
    <div
      className="min-h-screen bg-[#fafaf9] text-[#1c1917] font-[var(--font-outfit)]"
      style={{ fontFamily: "var(--font-outfit), sans-serif" }}
    >
      <header className="px-6 py-8 max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          <span
            className="text-lg font-[var(--font-cormorant)] font-semibold text-[#1e3a5f]"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            LexForge
          </span>
          <nav className="flex gap-8 text-sm">
            <Link
              href="/"
              className="text-[#1e3a5f] hover:underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:ring-offset-2 focus:ring-offset-[#fafaf9]"
            >
              Home
            </Link>
            <Link
              href="/4#services"
              className="text-[#57534e] hover:text-[#1c1917] focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:ring-offset-2 focus:ring-offset-[#fafaf9]"
            >
              Services
            </Link>
          </nav>
        </div>
      </header>

      <main className="px-6 max-w-4xl mx-auto">
        <section className="pt-16 pb-24 md:pt-24 md:pb-32">
          <p
            className="text-[#1e3a5f] text-sm mb-6 font-[var(--font-cormorant)]"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            Legal technology, simplified.
          </p>
          <h1
            className="text-4xl md:text-5xl font-[var(--font-cormorant)] font-semibold leading-[1.2] text-[#1c1917] mb-8 max-w-2xl"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            One platform for contracts, research, compliance, and workflow.
          </h1>
          <p className="text-lg text-[#57534e] max-w-xl mb-14 leading-relaxed">
            AI-powered tools that fit how you work. No clutter, no lock-in.
          </p>
          <Link
            href="/4#services"
            className="inline-block text-[#1e3a5f] font-medium border-b-2 border-[#1e3a5f] pb-1 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:ring-offset-2 focus:ring-offset-[#fafaf9]"
          >
            See services
          </Link>
        </section>

        <section id="services" className="py-20 border-t border-[#e7e5e4]">
          <h2
            className="text-2xl font-[var(--font-cormorant)] font-semibold text-[#1c1917] mb-12"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            What we offer
          </h2>
          <ul className="space-y-16">
            {LEGAL_SERVICES.map((service) => (
              <li key={service.id} className="max-w-2xl">
                <h3 className="text-lg font-semibold text-[#1e3a5f] mb-2">
                  {service.title}
                </h3>
                <p className="text-[#57534e] leading-relaxed">
                  {service.description}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="py-24 border-t border-[#e7e5e4]">
          <div className="max-w-xl">
            <h2
              className="text-2xl font-[var(--font-cormorant)] font-semibold text-[#1c1917] mb-4"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Start with a clear view.
            </h2>
            <p className="text-[#57534e] mb-8 leading-relaxed">
              Join teams who use LexForge to stay in control of their legal
              work.
            </p>
            <Link
              href="/"
              className="inline-block bg-[#1e3a5f] text-white px-8 py-4 font-medium hover:bg-[#2d4a6f] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:ring-offset-2 focus:ring-offset-[#fafaf9]"
            >
              Get in touch
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#e7e5e4] px-6 py-8 max-w-4xl mx-auto text-center text-sm text-[#78716c]">
        <Link href="/" className="hover:text-[#1c1917] transition-colors">
          View all versions
        </Link>
      </footer>
    </div>
  );
}
