import { newspaperContent } from "./newspaper-content";

export interface LeadStory {
  section: string;
  headline: string;
  dek: string;
  byline: string;
}

export interface SecondaryItem {
  section: string;
  headline: string;
}

export interface NewspaperContentExtended {
  masthead: string;
  tagline: string;
  date: string;
  edition: string;
  leads: LeadStory[];
  secondaries: SecondaryItem[];
  briefs: string[];
}

export const newspaperContentExtended: NewspaperContentExtended = {
  masthead: newspaperContent.masthead,
  tagline: newspaperContent.tagline,
  date: newspaperContent.date,
  edition: newspaperContent.edition,
  leads: [
    {
      section: "World",
      headline: "Summit Reaches Historic Accord on Climate Targets",
      dek: "Leaders from more than 40 nations agree to binding emissions cuts by 2035, with financing package for developing countries.",
      byline: "By James Chen and Maria Santos",
    },
    {
      section: "Business",
      headline: "Tech Giants Report Record Quarter Amid AI Push",
      dek: "Revenue gains across major firms as artificial intelligence products drive growth and investor optimism.",
      byline: "By Rachel Park",
    },
    {
      section: "Science",
      headline: "Researchers Identify Gene Linked to Longevity",
      dek: "Landmark study points to potential therapies; ethics debate over access heats up.",
      byline: "By Dr. Elena Vasquez",
    },
  ],
  secondaries: [
    { section: "Culture", headline: "New Museum Wing Opens With Focus on Digital Art" },
    { section: "Politics", headline: "Senate Passes Infrastructure Bill After Late-Night Session" },
    { section: "Sports", headline: "Underdogs Advance to Finals in Historic Upset" },
    { section: "Opinion", headline: "Why the City Needs a New Transit Plan" },
    { section: "Health", headline: "Vaccine Rollout Expands to Younger Age Groups" },
    { section: "Technology", headline: "Open-Source AI Models Gain Traction in Enterprises" },
    { section: "Environment", headline: "Local Watershed Project Nears Completion" },
    { section: "Education", headline: "Universities Report Record Applications for Fall" },
    { section: "Arts", headline: "Award-Winning Play Extends Run Through Spring" },
    { section: "Economy", headline: "Central Bank Holds Rates Amid Mixed Data" },
  ],
  briefs: [
    "City council to vote on zoning changes Tuesday.",
    "Highway 9 repair work completed ahead of schedule.",
    "New café opens on Main Street this weekend.",
    "Library hosts author talk next month.",
    "Local charity raises 50K in annual drive.",
    "Weather: Sunny, high 72. Clear tonight.",
    "Traffic update: Delays on bridge until 3 p.m.",
    "Community center adds evening fitness classes.",
  ],
};
