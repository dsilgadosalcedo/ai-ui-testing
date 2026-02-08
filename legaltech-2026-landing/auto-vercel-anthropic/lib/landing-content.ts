export const productName = "LexForge";

export const hero = {
  headline: "AI-powered contract intelligence for modern firms",
  subhead:
    "Review, negotiate, and close agreements faster with purpose-built legal AI. Built in 2026 for the way legal teams actually work.",
  primaryCta: "Request a demo",
  secondaryCta: "See how it works",
};

export const trustBar = {
  label: "Trusted by 500+ firms worldwide",
  // Optional: logo strip keys for placeholder SVGs
};

export const features = [
  {
    id: "ai-review",
    title: "AI contract review",
    description:
      "Surface risks and missing clauses in seconds. Trained on your playbooks and jurisdiction so recommendations stay on-brand and compliant.",
  },
  {
    id: "document-automation",
    title: "Document automation",
    description:
      "Generate first drafts from templates and clause libraries. One source of truth, fewer handoffs, and consistent output every time.",
  },
  {
    id: "compliance-security",
    title: "Compliance & security",
    description:
      "Enterprise-grade security and audit trails. SOC 2 Type II and built for the strictest data residency and confidentiality requirements.",
  },
  {
    id: "workflow",
    title: "Workflow that scales",
    description:
      "From intake to signature, keep matters moving. Integrations with your DMS, e-signature, and matter management so nothing falls through the cracks.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "We cut first-pass review time by 60%. Our team focuses on judgment; LexForge handles the heavy lifting.",
    name: "Sarah Chen",
    role: "General Counsel",
    firm: "Northgate Partners",
  },
  {
    quote:
      "Finally, legal tech that feels built for 2026—not a reskinned product from a decade ago.",
    name: "Marcus Webb",
    role: "Head of Legal Ops",
    firm: "Venture Legal Co.",
  },
] as const;

export const finalCta = {
  headline: "Ready to transform how your team works?",
  buttonLabel: "Get a demo",
};

export const footer = {
  productLinks: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Integrations", href: "#integrations" },
    { label: "Security", href: "#security" },
  ],
  legalLinks: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
  contact: { label: "Contact", href: "mailto:hello@lexforge.demo" },
  copyright: `© ${new Date().getFullYear()} ${productName}. All rights reserved.`,
};
