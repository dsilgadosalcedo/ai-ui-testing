export interface NewspaperContent {
  masthead: string;
  tagline: string;
  date: string;
  edition: string;
  lead: {
    section: string;
    headline: string;
    dek: string;
    byline: string;
  };
  secondaries: Array<{
    section: string;
    headline: string;
  }>;
}

export const newspaperContent: NewspaperContent = {
  masthead: "The Daily Chronicle",
  tagline: "All the News That Fits the Day",
  date: "Sunday, February 8, 2025",
  edition: "Vol. 142, No. 47",
  lead: {
    section: "World",
    headline: "Summit Reaches Historic Accord on Climate Targets",
    dek: "Leaders from more than 40 nations agree to binding emissions cuts by 2035, with financing package for developing countries.",
    byline: "By James Chen and Maria Santos",
  },
  secondaries: [
    { section: "Business", headline: "Tech Giants Report Record Quarter Amid AI Push" },
    { section: "Culture", headline: "New Museum Wing Opens With Focus on Digital Art" },
    { section: "Science", headline: "Researchers Identify Gene Linked to Longevity" },
  ],
};
