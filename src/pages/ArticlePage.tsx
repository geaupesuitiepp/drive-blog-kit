import { useParams, Link } from "react-router-dom";
import { getArticleBySlug, articles } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";
import { Helmet } from "react-helmet-async";

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
    month: "long",
    day: "numeric",
  });

  const related = articles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{article.title} | DerAutoBlog</title>
        <meta name="description" content={article.excerpt} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:image" content={article.image} />
        <meta property="og:type" content="article" />
      </Helmet>

      <article className="container mx-auto max-w-3xl px-4 py-8">
        <Link to="/" className="mb-4 inline-block text-sm text-muted-foreground hover:text-primary">
          ← Zurück
        </Link>
        <span className="mb-2 block text-sm font-medium text-primary">{article.category}</span>
        <h1 className="text-3xl font-bold text-foreground md:text-4xl">{article.title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{formattedDate}</p>

        <div className="mt-6 overflow-hidden rounded-lg">
          <img
            src={article.image}
            alt={article.title}
            className="w-full object-cover"
          />
        </div>

        <div
          className="prose-invert mt-8 max-w-none text-foreground [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-foreground [&_p]:mb-4 [&_p]:leading-relaxed [&_p]:text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>

      {related.length > 0 && (
        <section className="container mx-auto max-w-3xl px-4 pb-12">
          <h2 className="mb-4 text-lg font-bold text-foreground">Ähnliche Artikel</h2>
          <div className="grid gap-4">
            {related.map((a) => (
              <ArticleCard key={a.id} article={a} />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default ArticlePage;
