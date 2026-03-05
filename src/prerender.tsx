import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import AppRoutes from "./AppRoutes";
import { articles, categories } from "./data/articles";

// Generate all routes for prerendering
const staticRoutes = [
  "/",
  "/kontakt",
  ...articles.map((a) => `/artikel/${a.slug}`),
  ...categories.map((c) => `/kategorie/${encodeURIComponent(c)}`),
];

export async function prerender(data: { url: string }) {
  const helmetContext: { helmet?: any } = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={data.url}>
        <AppRoutes />
      </StaticRouter>
    </HelmetProvider>
  );

  const { helmet } = helmetContext;

  // Build head elements from react-helmet-async
  const headElements = new Set<{ type: string; props: Record<string, string> }>();

  if (helmet) {
    // Extract meta tags
    const metaRegex = /<meta\s+([^>]+)\/?>/g;
    const metaStr = [
      helmet.meta?.toString?.() || "",
      helmet.link?.toString?.() || "",
    ].join("");

    let match;
    while ((match = metaRegex.exec(metaStr)) !== null) {
      const attrStr = match[1];
      const props: Record<string, string> = {};
      const attrRegex = /(\w[\w-]*)="([^"]*)"/g;
      let attrMatch;
      while ((attrMatch = attrRegex.exec(attrStr)) !== null) {
        props[attrMatch[1]] = attrMatch[2];
      }
      headElements.add({ type: "meta", props });
    }

    // Extract link tags
    const linkRegex = /<link\s+([^>]+)\/?>/g;
    const linkStr = helmet.link?.toString?.() || "";
    while ((match = linkRegex.exec(linkStr)) !== null) {
      const attrStr = match[1];
      const props: Record<string, string> = {};
      const attrRegex = /(\w[\w-]*)="([^"]*)"/g;
      let attrMatch;
      while ((attrMatch = attrRegex.exec(attrStr)) !== null) {
        props[attrMatch[1]] = attrMatch[2];
      }
      headElements.add({ type: "link", props });
    }
  }

  // Return links for crawling on first render
  const links = data.url === "/" ? staticRoutes : undefined;

  return {
    html,
    links,
    head: {
      lang: "de",
      title: helmet?.title?.toString?.()?.replace(/<title[^>]*>|<\/title>/g, "") || "Motorblick",
      elements: headElements,
    },
  };
}
