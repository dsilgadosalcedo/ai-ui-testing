export const productName = "LexForge";

export const tagline =
  "Legal technology that scales with your practice. AI-powered tools for modern firms.";

export const heroHeadline =
  "Legal work, reimagined with AI.";

export const heroSubhead =
  "Contract review, compliance, and document automation in one platform. Trusted by firms who demand precision and speed.";

export const primaryCta = "Start free trial";
export const secondaryCta = "Request demo";

export const services = [
  {
    id: "contract-review",
    name: "Contract review",
    description: "AI-assisted redlining and risk flagging so you close deals faster.",
    aiPowered: true,
  },
  {
    id: "compliance",
    name: "Compliance monitoring",
    description: "Stay ahead of regulatory changes with automated tracking and alerts.",
    aiPowered: false,
  },
  {
    id: "document-automation",
    name: "Document automation",
    description: "Generate and tailor agreements from templates with one click.",
    aiPowered: false,
  },
  {
    id: "legal-research",
    name: "AI legal research",
    description: "Find relevant precedent and citations in seconds, not hours.",
    aiPowered: true,
  },
  {
    id: "e-signatures",
    name: "E-signatures",
    description: "Secure signing workflows with full audit trails.",
    aiPowered: false,
  },
  {
    id: "case-prediction",
    name: "Case outcome insight",
    description: "Data-driven likelihoods to support strategy and settlement decisions.",
    aiPowered: true,
  },
] as const;

export const aiFeaturesList = [
  "Natural language contract search",
  "Clause extraction and comparison",
  "Regulatory change summaries",
  "Draft suggestions from your playbooks",
] as const;

export const socialProof = {
  line: "Trusted by 500+ firms worldwide",
  testimonial:
    "LexForge cut our contract review time by 60%. The AI catches clauses we used to miss.",
  attribution: "— Head of Legal, Fortune 500",
} as const;

export const footerLinks = [
  { label: "Product", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Legal", href: "#" },
] as const;
