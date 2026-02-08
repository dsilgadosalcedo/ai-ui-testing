export interface SecondaryStory {
  headline: string;
  summary: string;
}

export interface NewspaperContent {
  masthead: string;
  date: string;
  lead: {
    headline: string;
    summary: string;
  };
  secondary: SecondaryStory[];
}

export const newspaperContent: NewspaperContent = {
  masthead: "The Daily Chronicle",
  date: "Sunday, February 8, 2026",
  lead: {
    headline: "Local Council Approves New Green Space Initiative",
    summary:
      "After months of debate, the city council voted unanimously to convert the former industrial site into a 12-acre park. Construction is set to begin in spring, with opening planned for late 2027.",
  },
  secondary: [
    {
      headline: "Tech Sector Reports Strong Quarter",
      summary: "Regional software firms see 18% growth as remote work demand continues.",
    },
    {
      headline: "Schools to Pilot New Nutrition Program",
      summary: "Five districts will test free breakfast and lunch for all students starting in September.",
    },
    {
      headline: "Weather: Mild Week Ahead",
      summary: "Temperatures in the mid-50s with partly cloudy skies through Thursday.",
    },
  ],
};
