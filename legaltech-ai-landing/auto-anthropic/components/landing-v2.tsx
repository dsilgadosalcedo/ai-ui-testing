import Link from "next/link";
import { LEGAL_SERVICES } from "@/lib/legal-services";

export function LandingV2() {
  return (
    <div
      className="min-h-screen bg-white text-black font-[var(--font-jetbrains)]"
      style={{ fontFamily: "var(--font-jetbrains), monospace" }}
    >
      <header className="border-b-4 border-black px-6 py-4 flex items-center justify-between">
        <span
          className="text-2xl font-[var(--font-bebas)] tracking-tighter"
          style={{ fontFamily: "var(--font-bebas), sans-serif" }}
        >
          LEXFORGE
        </span>
        <nav className="flex gap-6 text-sm uppercase tracking-wider">
          <Link
            href="/"
            className="text-red-600 hover:underline focus:outline-none focus:ring-2 focus:ring-black"
          >
            Index
          </Link>
          <Link
            href="/2#services"
            className="hover:underline focus:outline-none focus:ring-2 focus:ring-black"
          >
            Services
          </Link>
        </nav>
      </header>

      <main>
        <section className="px-6 py-20 md:py-28 border-b-4 border-black">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-widest text-red-600 mb-4">
              Legal tech / no fluff
            </p>
            <h1
              className="text-5xl md:text-8xl font-[var(--font-bebas)] leading-none mb-6"
              style={{ fontFamily: "var(--font-bebas), sans-serif" }}
            >
              BUILD.
              <br />
              SIGN.
              <br />
              COMPLY.
            </h1>
            <p className="text-lg max-w-xl mb-10">
              AI contract review. Document automation. Research. Compliance.
              E-signature. Due diligence. One stack.
            </p>
            <Link
              href="/2#services"
              className="inline-block bg-black text-white px-6 py-3 text-sm uppercase tracking-wider hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
            >
              See services
            </Link>
          </div>
        </section>

        <section id="services" className="px-6 py-16">
          <div className="max-w-5xl mx-auto">
            <h2
              className="text-3xl md:text-4xl font-[var(--font-bebas)] mb-12 border-b-4 border-black pb-4 inline-block"
              style={{ fontFamily: "var(--font-bebas), sans-serif" }}
            >
              SERVICES
            </h2>
            <ul className="grid md:grid-cols-2 gap-0 border-t-2 border-black">
              {LEGAL_SERVICES.map((service, i) => (
                <li
                  key={service.id}
                  className="group border-b-2 border-r-0 md:odd:border-r-2 border-black p-6 hover:bg-black hover:text-white transition-colors"
                >
                  <span className="text-xs text-red-600 group-hover:text-red-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-semibold mt-1 mb-2 uppercase tracking-wider">
                    {service.title}
                  </h3>
                  <p className="text-sm opacity-90">{service.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-6 py-20 border-t-4 border-black bg-black text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2
              className="text-2xl md:text-3xl font-[var(--font-bebas)] mb-4"
              style={{ fontFamily: "var(--font-bebas), sans-serif" }}
            >
              GET STARTED
            </h2>
            <p className="mb-8 text-sm">
              No demos. No gatekeeping. Just tools that work.
            </p>
            <Link
              href="/"
              className="inline-block bg-red-600 text-white px-8 py-4 text-sm uppercase tracking-wider hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            >
              Contact
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t-4 border-black px-6 py-6 text-center text-sm">
        <Link href="/" className="hover:underline">
          All versions
        </Link>
      </footer>
    </div>
  );
}
