import { useParams, Link } from "react-router-dom";
import { getArticlesByCategory, categories, type Category } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";
import Sidebar from "@/components/Sidebar";
import PaginationControls from "@/components/PaginationControls";
import { usePagination } from "@/hooks/use-pagination";
import { Helmet } from "react-helmet-async";

const ARTICLES_PER_PAGE = 10;

const CategoryPage = () => {
  const { name } = useParams<{ name: string }>();
  const decodedName = decodeURIComponent(name || "") as Category;
  const isValidCategory = categories.includes(decodedName);
  const categoryArticles = isValidCategory ? getArticlesByCategory(decodedName) : [];
  const { paginatedItems, currentPage, totalPages, setPage } = usePagination(categoryArticles, ARTICLES_PER_PAGE);

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

  const featured = categoryArticles[0];
  const rest = categoryArticles.slice(1);

  return (
    <>
      <Helmet>
        <title>{decodedName} | AutoJournal</title>
        <meta name="description" content={`Alle Artikel in der Kategorie ${decodedName} auf AutoJournal.`} />
      </Helmet>

      <div className="container max-w-7xl py-6">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 min-w-0">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
              <Link to="/" className="hover:text-primary transition-colors">Startseite</Link>
              <span>›</span>
              <span className="text-foreground">{decodedName}</span>
            </nav>

            <h1 className="text-2xl font-black text-foreground mb-6 uppercase tracking-wide">
              {decodedName}
            </h1>

            {categoryArticles.length === 0 ? (
              <p className="text-muted-foreground">Keine Artikel in dieser Kategorie.</p>
            ) : (
              <>
                {featured && (
                  <div className="mb-6">
                    <ArticleCard article={featured} featured />
                  </div>
                )}
                <div className="grid gap-4">
                  {(totalPages > 1 ? paginatedItems : rest).map((article, i) => (
                    <div
                      key={article.id}
                      className="animate-fade-in"
                      style={{ animationDelay: `${i * 60}ms` }}
                    >
                      <ArticleCard article={article} />
                    </div>
                  ))}
                </div>
                <p className="text-center text-xs text-muted-foreground mt-3">
                  Seite {currentPage} von {totalPages} · {categoryArticles.length} Artikel
                </p>
                <PaginationControls currentPage={currentPage} totalPages={totalPages} onPageChange={setPage} />
              </>
            )}
          </div>

          <div className="w-full lg:w-72 xl:w-80 flex-shrink-0">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
