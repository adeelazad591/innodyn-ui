export const siteConfig = {
  name: "Innodyn",
  tagline: "Precision Compounds. Advanced Standards. Scientific Confidence.",
  description:
    "Science-first platform focused on advanced compounds, rigorous sourcing standards, and a research-minded customer experience.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  apiUrl: process.env.NEXT_PUBLIC_API_URL ?? "",
} as const;
