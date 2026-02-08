export type Story = {
  id: string;
  section?: string;
  headline: string;
  dek?: string;
  byline: string;
  excerpt?: string;
};

export type NewspaperContent = {
  masthead: string;
  date: string;
  edition?: string;
  lead: Story;
  stories: Story[];
  heroImageAlt?: string;
};

export const newspaperContent: NewspaperContent = {
  masthead: "The Daily Chronicle",
  date: "Sunday, February 8, 2025",
  edition: "No. 42,891",
  heroImageAlt: "City skyline at dawn",
  lead: {
    id: "lead",
    section: "World",
    headline: "Summit Reaches Historic Accord on Climate Funding",
    dek: "Delegates agree on $100 billion annual fund; implementation talks to begin in March.",
    byline: "By James Chen and Maria Santos",
    excerpt:
      "After two weeks of tense negotiations, representatives from more than 190 nations announced a landmark agreement to establish a permanent fund for climate adaptation and loss and damage. The deal, hailed as a turning point by environmental groups, commits wealthy nations to annual contributions starting in 2026.",
  },
  stories: [
    {
      id: "s1",
      section: "Politics",
      headline: "Senate Passes Infrastructure Bill in Late-Night Session",
      byline: "By Rebecca Torres",
      excerpt:
        "The sweeping package includes funding for bridges, broadband, and clean energy projects across all 50 states.",
    },
    {
      id: "s2",
      section: "Culture",
      headline: "New Museum Exhibit Reimagines the Ancient Silk Road",
      byline: "By David Okonkwo",
      excerpt:
        "Interactive displays and rare artifacts trace the trade routes that connected East and West for centuries.",
    },
    {
      id: "s3",
      section: "Business",
      headline: "Tech Giants Report Strong Quarter Despite Regulatory Headwinds",
      byline: "By Sarah Kim",
      excerpt:
        "Earnings beat expectations as companies point to growth in cloud services and artificial intelligence.",
    },
    {
      id: "s4",
      section: "Science",
      headline: "Researchers Identify Gene Linked to Longevity in Study of Centenarians",
      byline: "By Dr. Elena Vasquez",
      excerpt:
        "The finding could pave the way for new therapies aimed at healthy aging.",
    },
  ],
};
