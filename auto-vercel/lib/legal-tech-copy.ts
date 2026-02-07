export const hero = {
  headline: "Legal Work, Simplified",
  subhead:
    "Contract review, document automation, and AI-powered drafting in one platform. Trusted by legal teams to move faster without sacrificing accuracy.",
  ctaPrimary: "Start Free Trial",
  ctaSecondary: "Book a Demo",
} as const;

export const services = [
  {
    title: "Contract Review & Analysis",
    description:
      "Review and analyze contracts at scale. Identify risks, missing clauses, and non-standard terms with consistent, auditable results.",
  },
  {
    title: "Document Automation",
    description:
      "Generate NDAs, MSAs, and other standard documents from templates. Reduce manual drafting and keep language up to date.",
  },
  {
    title: "Legal Research",
    description:
      "Search across your matter library and external sources. Find precedent and citations without leaving the platform.",
  },
  {
    title: "Compliance Monitoring",
    description:
      "Track regulatory changes and internal policies. Get alerts when documents or processes need updates.",
  },
  {
    title: "E-Signatures",
    description:
      "Send, sign, and store agreements electronically. Full audit trail and integration with your existing workflows.",
  },
  {
    title: "AI Contract Drafting",
    description:
      "Draft first-pass contracts and amendments using AI. Trained on your playbooks and approved language.",
  },
] as const;

export const aiSection = {
  heading: "AI-Integrated Legal Services",
  subhead:
    "Use AI where it helps most: drafting, suggesting clauses, and accelerating due diligence.",
  features: [
    {
      title: "AI Drafting",
      description:
        "Generate initial drafts from a short brief. Edit and approve in your normal workflow.",
    },
    {
      title: "Clause Suggestions",
      description:
        "Get alternative clauses and fallbacks. Compare options side by side with risk notes.",
    },
    {
      title: "Due Diligence",
      description:
        "Extract key terms, obligations, and dates from large document sets. Summaries and red-flag reports in minutes.",
    },
  ],
} as const;

export const socialProof = {
  line: "Trusted by legal teams at leading enterprises",
  testimonial:
    "We cut contract review time by 60% and kept our risk standards. The AI suggestions are actually usable.",
} as const;

export const footer = {
  product: [
    { label: "Product", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Integrations", href: "#" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Careers", href: "#" },
  ],
  legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
  cta: "Get Started",
  copyright: "© " + new Date().getFullYear() + " LegalTech. All rights reserved.",
} as const;
