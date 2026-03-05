import { Link } from "react-router-dom";
import { articles, categories } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";

const Index = () => {
  const featured = articles.slice(0, 2);
  const rest = articles.slice(2);

  return (
    <>
      {/* Hero / Featured */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((article) => (
            <ArticleCard key={article.id} article={article} featured />
          ))}
        </div>
      </section>

      {/* Categories section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="mb-6 text-xl font-bold text-foreground">Kategorien</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories.map((cat) => (
            <Link
              key={cat}
              to={`/kategorie/${encodeURIComponent(cat)}`}
              className="rounded-lg border border-border bg-card p-4 text-center text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>

      {/* Weitere Artikel */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="mb-6 text-xl font-bold text-foreground">Weitere Artikel</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((article) => (
            <ArticleCard key={article.id} article={article} featured />
          ))}
        </div>
      </section>
    </>
  );
};

export default Index;
