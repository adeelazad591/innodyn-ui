export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Standards", href: "/standards" },
  { label: "Compounds", href: "/compounds" },
  { label: "How It Works", href: "/how-it-works" },
] as const;

export const COMPOUND_CATEGORIES = [
  { value: "nootropic", label: "Nootropic" },
  { value: "peptide", label: "Peptide" },
  { value: "adaptogen", label: "Adaptogen" },
  { value: "metabolic", label: "Metabolic" },
  { value: "other", label: "Other" },
] as const;
