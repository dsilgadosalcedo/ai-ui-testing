import { Bebas_Neue, Cormorant_Garamond } from "next/font/google";
import Link from "next/link";
import { newspaperContent } from "@/app/lib/newspaper-content";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

export default function Edition3() {
  const { masthead, date, edition, lead, stories } = newspaperContent;

  return (
    <div
      className={`${bebas.variable} ${cormorant.variable} relative min-h-screen bg-[#f7f4ed] text-[#1c1c1c]`}
      style={{ fontFamily: "var(--font-cormorant), serif" }}
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 20px,
            #1c1c1c 20px,
            #1c1c1c 21px
          )`,
        }}
      />
      <div className="relative mx-auto max-w-5xl px-8 py-10">
        <header className="text-center">
          <div className="mx-auto mb-2 h-px w-24 bg-[#c9a227]" />
          <h1
            className="text-5xl tracking-[0.15em] text-[#1c1c1c] md:text-6xl"
            style={{ fontFamily: "var(--font-bebas), sans-serif" }}
          >
            {masthead}
          </h1>
          <div className="mx-auto mt-2 h-px w-24 bg-[#c9a227]" />
          <p className="mt-4 text-sm tracking-widest text-[#555]">
            {date}
            {edition && (
              <span className="ml-3 text-[#c9a227]">— {edition}</span>
            )}
          </p>
        </header>

        <main className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-12">
          <article className="md:col-span-8">
            <span
              className="text-xs font-semibold tracking-[0.3em] text-[#c9a227]"
              style={{ fontFamily: "var(--font-bebas), sans-serif" }}
            >
              {lead.section}
            </span>
            <h2
              className="mt-3 text-3xl font-semibold leading-tight md:text-4xl"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              {lead.headline}
            </h2>
            {lead.dek && (
              <p className="mt-3 text-lg italic text-[#444]">{lead.dek}</p>
            )}
            <p className="mt-2 text-sm text-[#666]">{lead.byline}</p>
            <div className="my-4 h-px w-16 bg-[#c9a227]" />
            {lead.excerpt && (
              <p className="text-[1.05rem] leading-relaxed text-[#333]">
                {lead.excerpt}
              </p>
            )}
          </article>

          <aside className="border-l-2 border-[#c9a227] pl-8 md:col-span-4">
            <div
              className="mb-6 text-sm tracking-[0.2em] text-[#c9a227]"
              style={{ fontFamily: "var(--font-bebas), sans-serif" }}
            >
              MORE STORIES
            </div>
            {stories.map((story) => (
              <article key={story.id} className="mb-8">
                <span className="text-xs tracking-widest text-[#888]">
                  {story.section}
                </span>
                <h3 className="mt-1 text-lg font-semibold">
                  <Link
                    href="#"
                    className="text-[#1c1c1c] hover:text-[#c9a227]"
                  >
                    {story.headline}
                  </Link>
                </h3>
                <p className="mt-1 text-xs text-[#666]">{story.byline}</p>
                {story.excerpt && (
                  <p className="mt-2 text-sm text-[#555]">{story.excerpt}</p>
                )}
              </article>
            ))}
          </aside>
        </main>

        <footer className="mt-12 border-t border-[#ddd] pt-6 text-center">
          <Link
            href="/"
            className="text-sm tracking-widest text-[#c9a227] hover:underline"
          >
            ← All editions
          </Link>
        </footer>
      </div>
    </div>
  );
}
