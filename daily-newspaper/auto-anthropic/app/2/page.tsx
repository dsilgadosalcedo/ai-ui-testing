import { IBM_Plex_Mono } from "next/font/google";
import Link from "next/link";
import { newspaperContent } from "@/app/lib/newspaper-content";

const plexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
});

export default function Edition2() {
  const { masthead, date, edition, lead, stories } = newspaperContent;

  return (
    <div
      className={`${plexMono.variable} min-h-screen bg-white text-black`}
      style={{ fontFamily: "var(--font-plex-mono), monospace" }}
    >
      <div className="mx-auto max-w-5xl">
        <header className="border-b-4 border-black px-6 py-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold uppercase tracking-[0.25em] md:text-3xl">
              {masthead}
            </h1>
            <div className="flex justify-between text-xs uppercase tracking-widest text-[#333]">
              <span>{date}</span>
              {edition && <span>{edition}</span>}
            </div>
          </div>
        </header>

        <main className="grid grid-cols-1 border-b-4 border-black md:grid-cols-3">
          <article className="border-b border-black p-6 md:col-span-2 md:border-b-0 md:border-r-4 md:border-r-black">
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em]">
              [{lead.section}]
            </div>
            <h2 className="text-xl font-bold leading-tight md:text-2xl">
              {lead.headline}
            </h2>
            {lead.dek && (
              <p className="mt-3 text-sm font-medium text-[#333]">
                {lead.dek}
              </p>
            )}
            <p className="mt-2 text-xs text-[#555]">{lead.byline}</p>
            {lead.excerpt && (
              <p className="mt-4 text-sm leading-relaxed">{lead.excerpt}</p>
            )}
          </article>

          <aside className="divide-y-4 divide-black">
            {stories.map((story, i) => (
              <article key={story.id} className="p-6">
                <div className="text-[10px] font-semibold uppercase tracking-widest text-[#333]">
                  {story.section}
                </div>
                <h3 className="mt-2 font-bold">
                  <Link href="#" className="hover:bg-black hover:text-white">
                    {story.headline}
                  </Link>
                </h3>
                <p className="mt-1 text-xs text-[#555]">{story.byline}</p>
                {story.excerpt && (
                  <p className="mt-2 text-xs">{story.excerpt}</p>
                )}
              </article>
            ))}
          </aside>
        </main>

        <footer className="px-6 py-4 text-center text-xs uppercase tracking-widest">
          <Link href="/" className="hover:underline">
            ← index
          </Link>
        </footer>
      </div>
    </div>
  );
}
