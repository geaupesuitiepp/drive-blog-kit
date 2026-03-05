import { useParams, Link } from "react-router-dom";
import { getArticleBySlug, articles } from "@/data/articles";
import { Helmet } from "react-helmet-async";
import { User, Clock } from "lucide-react";

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = getArticleBySlug(slug || "");

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-foreground">Artikel nicht gefunden</h1>
        <Link to="/" className="mt-4 inline-block text-primary hover:underline">
          Zurück zur Startseite
        </Link>
      </div>
    );
  }

  const formattedDate = new Date(article.date).toLocaleDateString("de-DE", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const wordCount = article.content.replace(/<[^>]*>/g, "").split(/\s+/).length;

  const related = articles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 4);

  return (
    <>
      <Helmet>
        <title>{article.title} | Motorblick</title>
        <meta name="description" content={article.excerpt} />
        <meta name="keywords" content={`${article.category}, ${article.title.split(/\s+/).slice(0, 5).join(", ")}, Motorblick, Auto, Gebrauchtwagen`} />
        <link rel="canonical" href={`https://motorblick.com/artikel/${article.slug}`} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:image" content={article.image} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://motorblick.com/artikel/${article.slug}`} />
        <meta property="og:site_name" content="Motorblick" />
        <meta property="og:locale" content="de_DE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.excerpt} />
        <meta name="twitter:image" content={article.image} />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.excerpt,
            image: article.image,
            datePublished: article.date,
            url: `https://motorblick.com/artikel/${article.slug}`,
            author: { "@type": "Organization", name: "Motorblick", url: "https://motorblick.com" },
            publisher: { "@type": "Organization", name: "Motorblick", url: "https://motorblick.com" },
            mainEntityOfPage: { "@type": "WebPage", "@id": `https://motorblick.com/artikel/${article.slug}` },
          })}
        </script>
        {article.slug === "nordic-cars-erfahrung" && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Nordic-Automobile cnr GmbH",
              alternateName: "Nordic Cars",
              url: "https://www.nordic-cars.net",
              telephone: "+494085539775",
              email: "info@nordic-cars.net",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Ellernreihe 59",
                addressLocality: "Hamburg",
                postalCode: "22179",
                addressCountry: "DE",
              },
              description: "Gebrauchtwagenhändler in Hamburg mit geprüften Fahrzeugen, 21-Tage-Geld-zurück-Garantie und deutschlandweiter Lieferung.",
              priceRange: "$$",
            })}
          </script>
        )}
        {article.slug === "autohero-erfahrung" && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Autohero",
              url: "https://www.autohero.com/de/",
              description: "Online-Gebrauchtwagenhändler mit deutschlandweiter Lieferung, 21-Tage-Garantie und Finanzierungsmöglichkeiten.",
              priceRange: "$$",
            })}
          </script>
        )}
      </Helmet>

      <article itemScope itemType="https://schema.org/BlogPosting">
        {/* Hero image */}
        <div className="relative h-64 md:h-[520px] overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
            loading="lazy"
            itemProp="image"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0">
            <div className="container max-w-4xl pb-6">
              <Link
                to={`/kategorie/${encodeURIComponent(article.category)}`}
                className="inline-block bg-primary text-primary-foreground px-3 py-1 text-[11px] font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors"
                itemProp="articleSection"
              >
                {article.category}
              </Link>
            </div>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="border-b border-border">
          <div className="container max-w-4xl py-2">
            <nav className="flex items-center gap-2 text-xs text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Startseite</Link>
              <span>›</span>
              <Link
                to={`/kategorie/${encodeURIComponent(article.category)}`}
                className="hover:text-primary transition-colors"
              >
                {article.category}
              </Link>
              <span>›</span>
              <span className="text-foreground truncate">{article.title}</span>
            </nav>
          </div>
        </div>

        {/* Title & meta */}
        <div className="border-b border-border">
          <div className="container max-w-4xl py-6">
            <h1
              className="text-2xl md:text-4xl font-black text-foreground mb-3 leading-[1.1] tracking-tight"
              itemProp="headline"
            >
              {article.title}
            </h1>
            <p
              className="text-base md:text-lg text-muted-foreground mb-5 leading-snug font-medium"
              itemProp="description"
            >
              {article.excerpt}
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground border-t border-border pt-4">
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" />
                <span itemProp="author" className="font-semibold text-foreground">
                  Motorblick
                </span>
              </span>
              <span className="w-px h-3.5 bg-border" />
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <time itemProp="datePublished" dateTime={article.date}>
                  {formattedDate}
                </time>
              </span>
              <span className="w-px h-3.5 bg-border" />
              <span>{wordCount} Wörter</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container max-w-4xl py-8">
          <div
            className="space-y-5 [&_p]:text-foreground [&_p]:leading-relaxed [&_p]:text-base md:[&_p]:text-[17px] [&_p:first-of-type]:first-letter:text-5xl [&_p:first-of-type]:first-letter:font-black [&_p:first-of-type]:first-letter:float-left [&_p:first-of-type]:first-letter:mr-2 [&_p:first-of-type]:first-letter:leading-none [&_p:first-of-type]:first-letter:text-primary [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-8 [&_h2]:mb-3 [&_a]:text-primary [&_a]:underline [&_a]:font-semibold [&_a]:hover:text-primary/80 [&_a]:transition-colors"
            dangerouslySetInnerHTML={{ __html: article.content }}
            itemProp="articleBody"
          />
        </div>
      </article>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="border-t border-border bg-secondary" aria-label="Mehr lesen">
          <div className="container max-w-7xl py-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block w-1 h-5 bg-primary flex-shrink-0" />
              <h2 className="font-black text-base text-foreground uppercase tracking-widest">
                Mehr lesen
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-border border border-border">
              {related.map((a) => (
                <Link
                  key={a.id}
                  to={`/artikel/${a.slug}`}
                  className="group p-5 hover:bg-background transition-colors"
                >
                  <span className="text-[10px] font-black text-primary uppercase tracking-widest">
                    {a.category}
                  </span>
                  <h3 className="font-bold text-foreground mt-2 mb-2 group-hover:text-primary transition-colors leading-snug tracking-tight text-sm">
                    {a.title}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">{a.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ArticlePage;
