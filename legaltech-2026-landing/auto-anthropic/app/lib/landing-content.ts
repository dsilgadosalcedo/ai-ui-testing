export const landingContent = {
  hero: {
    headline: "Legal work, reimagined for 2026",
    subhead:
      "AI-powered contract review, document automation, and compliance guardrails. Built for firms and in-house teams who demand precision and speed.",
    ctaPrimary: "Request a demo",
    ctaSecondary: "See how it works",
  },
  trust: {
    badges: ["SOC 2 Type II", "GDPR compliant", "Enterprise-ready", "Top 100 law firms"],
  },
  features: [
    {
      id: "ai-review",
      title: "AI contract review",
      description:
        "Surface risks and anomalies in seconds. Trained on your playbooks and jurisdiction, with full audit trails.",
    },
    {
      id: "automation",
      title: "Document automation",
      description:
        "Generate, redline, and version contracts from templates. No more copy-paste or manual clause libraries.",
    },
    {
      id: "compliance",
      title: "Compliance guardrails",
      description:
        "Policy checks, approval workflows, and retention rules. Stay in control at scale.",
    },
    {
      id: "collaboration",
      title: "Secure collaboration",
      description:
        "Workspaces for matters and deals. Role-based access, e-signatures, and one source of truth.",
    },
  ],
  useCases: [
    { id: "firms", label: "Law firms", description: "Practice groups and matters with matter-centric workspaces." },
    { id: "in-house", label: "In-house legal", description: "Contracts, compliance, and self-serve workflows." },
    { id: "legal-ops", label: "Legal ops", description: "Spend, metrics, and process automation in one place." },
  ],
  socialProof: {
    stat: "60%",
    statLabel: "faster contract review",
    quote: "We cut first-pass review time by more than half. Our team focuses on judgment; the platform handles the rest.",
    attribution: "Head of Legal, Fortune 500",
  },
  finalCta: {
    headline: "Ready to transform your legal workflow?",
    subhead: "Join 500+ firms and legal teams already using the platform.",
    ctaPrimary: "Request a demo",
  },
  footer: {
    product: ["Features", "Pricing", "Integrations", "Security"],
    company: ["About", "Careers", "Blog", "Contact"],
    legal: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
    copyright: "© 2026 Legal Tech. All rights reserved.",
  },
} as const;

export type LandingContent = typeof landingContent;
