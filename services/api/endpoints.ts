export const ENDPOINTS = {
  compounds: {
    list: "/api/compounds",
    detail: (id: string) => `/api/compounds/${id}`,
    bySlug: (slug: string) => `/api/compounds/slug/${slug}`,
  },
  standards: {
    list: "/api/standards",
    detail: (id: string) => `/api/standards/${id}`,
  },
} as const;
