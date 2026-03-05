import { articles, categories } from "@/data/articles";

const BASE_URL = "https://autojournal.de";

export function generateSitemapXml(): string {
  const staticPages = [
    { loc: "/", priority: "1.0", changefreq: "daily" },
    { loc: "/kontakt", priority: "0.3", changefreq: "monthly" },
  ];

  const categoryPages = categories.map((cat) => ({
    loc: `/kategorie/${encodeURIComponent(cat)}`,
    priority: "0.7",
    changefreq: "weekly" as const,
  }));

  // Dealer articles get higher priority
  const dealerSlugs = ["autohero-erfahrung", "nordic-cars-erfahrung"];
  const articlePages = articles.map((a) => ({
    loc: `/artikel/${a.slug}`,
    lastmod: a.date,
    priority: dealerSlugs.includes(a.slug) ? "0.9" : "0.8",
    changefreq: "monthly" as const,
  }));

  const allPages = [...staticPages, ...categoryPages, ...articlePages];

  const urls = allPages
    .map(
      (p) => `  <url>
    <loc>${BASE_URL}${p.loc}</loc>${
        "lastmod" in p ? `\n    <lastmod>${p.lastmod}</lastmod>` : ""
      }
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}
