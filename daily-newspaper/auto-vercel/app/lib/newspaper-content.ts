export const MASTHEAD_NAME = "The Daily Chronicle";

export const heroImage = {
  src: "/hero-placeholder.svg",
  width: 800,
  height: 500,
  alt: "Lead story photograph",
} as const;

export interface Article {
  id: string;
  kicker: string;
  title: string;
  summary: string;
  byline?: string;
  isHero?: boolean;
}

export const articles: Article[] = [
  {
    id: "1",
    kicker: "National",
    title: "Major Infrastructure Bill Passes After Late-Night Vote",
    summary:
      "Lawmakers approved the sweeping package with bipartisan support, paving the way for billions in funding for roads, bridges and broadband.",
    byline: "Jane Smith",
    isHero: true,
  },
  {
    id: "2",
    kicker: "Economy",
    title: "Markets Reach New High as Earnings Season Surprises",
    summary:
      "Stocks rallied amid stronger-than-expected results from tech and healthcare sectors.",
    byline: "Robert Chen",
  },
  {
    id: "3",
    kicker: "Culture",
    title: "City Museum to Open Landmark Exhibition Next Month",
    summary:
      "The show will feature more than 200 works spanning three centuries of local art.",
    byline: "Maria Garcia",
  },
  {
    id: "4",
    kicker: "Sports",
    title: "Home Team Advances to Finals After Overtime Thriller",
    summary:
      "A last-minute goal in extra time sealed the victory in front of a sold-out crowd.",
    byline: "David Park",
  },
  {
    id: "5",
    kicker: "Opinion",
    title: "Why Public Transit Deserves a Bigger Share of the Budget",
    summary:
      "Investing in buses and trains pays off in jobs, equity and climate resilience.",
    byline: "Editorial Board",
  },
];

export function formatNewspaperDate(date: Date = new Date()): string {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}
