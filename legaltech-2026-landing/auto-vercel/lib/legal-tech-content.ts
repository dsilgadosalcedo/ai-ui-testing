/**
 * Shared copy for all 5 legal tech 2026 landing page versions.
 * Same sections and messaging; layout and visuals differ by version.
 */

export const hero = {
  headline: "Legal work, reimagined for 2026",
  subhead:
    "AI-powered contract review, compliance checks, and document intelligence. Built for law firms and legal teams who demand speed without sacrificing accuracy.",
  primaryCta: "Request a demo",
  secondaryCta: "See how it works",
} as const;

export const valueProposition = {
  title: "Why teams choose us",
  items: [
    { label: "Speed", description: "Review contracts in minutes, not days." },
    {
      label: "Accuracy",
      description: "AI trained on legal language, with human oversight.",
    },
    {
      label: "Security",
      description: "Enterprise-grade encryption and access controls.",
    },
    {
      label: "Compliance",
      description: "SOC 2, GDPR, and jurisdiction-specific frameworks.",
    },
  ],
} as const;

export const features = [
  {
    id: "contract-analysis",
    title: "Contract analysis",
    description:
      "Upload agreements and get instant risk flags, missing clauses, and suggested edits.",
  },
  {
    id: "clause-library",
    title: "Clause library",
    description:
      "Standardized clauses and playbooks so your team stays consistent at scale.",
  },
  {
    id: "compliance-checks",
    title: "Compliance checks",
    description:
      "Automated checks against your policies and regulatory requirements.",
  },
  {
    id: "ai-drafting",
    title: "AI drafting",
    description:
      "First drafts from templates and playbooks, ready for lawyer review.",
  },
  {
    id: "secure-collaboration",
    title: "Secure collaboration",
    description:
      "Comments, approvals, and version history in one secure workspace.",
  },
  {
    id: "audit-trail",
    title: "Audit trail",
    description:
      "Full activity log for every document so you're always audit-ready.",
  },
] as const;

export const socialProof = {
  title: "Trusted by legal teams worldwide",
  subtitle: "From boutiques to global firms",
  testimonials: [
    {
      quote:
        "We cut contract review time by 70%. The AI catches issues we used to miss.",
      author: "Sarah Chen",
      role: "General Counsel, TechCorp",
    },
    {
      quote:
        "Finally, a platform that understands legal workflows instead of forcing us to adapt.",
      author: "Marcus Webb",
      role: "Head of Legal, ScaleUp Inc",
    },
  ],
} as const;

export const cta = {
  headline: "Ready to transform your legal workflow?",
  subhead: "Join forward-thinking legal teams already using the platform.",
  button: "Book a demo",
  secondaryLink: "See pricing",
} as const;

export const footer = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Integrations", href: "#integrations" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
  contact: { label: "Contact", href: "/contact" },
  copyright: "© 2026 LegalTech. All rights reserved.",
} as const;

export const nav = {
  logoLabel: "LegalTech",
  links: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "/contact" },
  ],
  cta: "Request demo",
} as const;
