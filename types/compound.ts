export interface Compound {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: CompoundCategory;
  purity: number;
  certifications: string[];
  labReportUrl?: string;
  inStock: boolean;
  createdAt: string;
  updatedAt: string;
}

export type CompoundCategory =
  | "nootropic"
  | "peptide"
  | "adaptogen"
  | "metabolic"
  | "other";

export interface CompoundFilters {
  category?: CompoundCategory;
  inStock?: boolean;
  search?: string;
}
