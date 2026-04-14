/** Shared shape for B2B / EPC-facing product detail pages */

export type B2BSpecRow = { parameter: string; value: string };

export type B2BProductDetail = {
  /** Short label for breadcrumbs */
  familyLabel: string;
  eyebrow: string;
  title: string;
  /** Resolved image URL from Vite static import */
  heroImage: string;
  heroAlt: string;
  lead: string;
  body: string[];
  keyBenefits: string[];
  specifications: B2BSpecRow[];
  applications: string[];
  /** EU market framing — compliance-oriented, non-certifying */
  complianceNotes: string[];
  relatedInternal: { label: string; to: string }[];
  /** Optional deep-dive blocks (e.g. system families, installation concepts) */
  technicalSections?: { heading: string; paragraphs: string[] }[];
};
