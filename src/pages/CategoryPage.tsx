import { useParams, Link } from "react-router-dom";
import { getArticlesByCategory, categories, type Category } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";
import { Helmet } from "react-helmet-async";

const CategoryPage = () => {
  const { name } = useParams<{ name: string }>();
  const decodedName = decodeURIComponent(name || "") as Category;
  const isValidCategory = categories.includes(decodedName);
  const categoryArticles = isValidCategory ? getArticlesByCategory(decodedName) : [];

  if (!isValidCategory) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-foreground">Kategorie nicht gefunden</h1>
        <Link to="/" className="mt-4 inline-block text-primary hover:underline">
          Zurück zur Startseite
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{decodedName} | DerAutoBlog</title>
        <meta name="description" content={`Alle Artikel in der Kategorie ${decodedName} auf DerAutoBlog.`} />
      </Helmet>

      <section className="container mx-auto px-4 py-8">
        <Link to="/" className="mb-4 inline-block text-sm text-muted-foreground hover:text-primary">
          ← Zurück
        </Link>
        <h1 className="mb-6 text-3xl font-bold text-foreground">{decodedName}</h1>
        {categoryArticles.length === 0 ? (
          <p className="text-muted-foreground">Keine Artikel in dieser Kategorie.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categoryArticles.map((article) => (
              <ArticleCard key={article.id} article={article} featured />
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default CategoryPage;
