// Vite plugin to generate sitemap.xml at build time
import type { Plugin } from "vite";
import fs from "fs";
import path from "path";

const BASE_URL = "https://motorblick.com";

export function sitemapPlugin(): Plugin {
  return {
    name: "generate-sitemap",
    closeBundle() {
      // Read the articles data file to extract slugs
      const articlesPath = path.resolve(__dirname, "../src/data/articles.ts");
      const content = fs.readFileSync(articlesPath, "utf-8");

      // Extract all slugs
      const slugRegex = /slug:\s*"([^"]+)"/g;
      const slugs: string[] = [];
      let match;
      while ((match = slugRegex.exec(content)) !== null) {
        slugs.push(match[1]);
      }

      // Extract all dates per slug
      const dateRegex = /slug:\s*"([^"]+)"[\s\S]*?date:\s*"([^"]+)"/g;
      const slugDates: Record<string, string> = {};
      while ((match = dateRegex.exec(content)) !== null) {
        slugDates[match[1]] = match[2];
      }

      const categories = [
        "Auto & Fahrkultur",
        "Technik & Gadgets",
        "Style & Lifestyle",
        "Tuning",
        "Allgemein",
        "Händler",
      ];

      const dealerSlugs = ["autohero-erfahrung", "nordic-cars-erfahrung"];

      const urls: string[] = [];

      // Static pages
      urls.push(`  <url>
    <loc>${BASE_URL}/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>`);

      urls.push(`  <url>
    <loc>${BASE_URL}/kontakt</loc>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
  </url>`);

      // Category pages
      for (const cat of categories) {
        urls.push(`  <url>
    <loc>${BASE_URL}/kategorie/${encodeURIComponent(cat)}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`);
      }

      // Article pages
      for (const slug of slugs) {
        const priority = dealerSlugs.includes(slug) ? "0.9" : "0.8";
        const lastmod = slugDates[slug] ? `\n    <lastmod>${slugDates[slug]}</lastmod>` : "";
        urls.push(`  <url>
    <loc>${BASE_URL}/artikel/${slug}</loc>${lastmod}
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`);
      }

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

      const distDir = path.resolve(__dirname, "../dist");
      if (fs.existsSync(distDir)) {
        fs.writeFileSync(path.resolve(distDir, "sitemap.xml"), sitemap);
        console.log(`✅ sitemap.xml generated with ${slugs.length} articles`);
      }
    },
  };
}
