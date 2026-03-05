import { articles } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";
import Sidebar from "@/components/Sidebar";
import PaginationControls from "@/components/PaginationControls";
import { usePagination } from "@/hooks/use-pagination";
import { Helmet } from "react-helmet-async";

const ARTICLES_PER_PAGE = 10;

const Index = () => {
  const featured = articles[0];
  const rest = articles.slice(1);
  const { paginatedItems, currentPage, totalPages, setPage } = usePagination(rest, ARTICLES_PER_PAGE);

  return (
    <>
      <Helmet>
        <title>Motorblick - Autos, Technik & Lifestyle Blog</title>
        <meta name="description" content="Motorblick ist dein Blog rund um Autos, Technik, Gadgets und Lifestyle. Aktuelle Artikel über Sportwagen, Elektroautos, Tuning, Autohero Erfahrungen, Nordic Cars und mehr." />
        <meta name="keywords" content="Auto Blog, Gebrauchtwagen, Autohero Erfahrung, Nordic Cars, Elektroauto, Tuning, Sportwagen" />
        <link rel="canonical" href="https://motorblick.com/" />
      </Helmet>
      <div className="container max-w-7xl py-6">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main content */}
        <div className="flex-1 min-w-0">
          {/* Hero article */}
          {featured && (
            <div className="mb-6">
              <ArticleCard article={featured} featured />
            </div>
          )}

          {/* Article list */}
          <div className="grid gap-4">
            {paginatedItems.map((article, i) => (
              <div
                key={article.id}
                className="animate-fade-in"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <ArticleCard article={article} />
              </div>
            ))}
          </div>

          {/* Pagination info */}
          <p className="text-center text-xs text-muted-foreground mt-3">
            Seite {currentPage} von {totalPages} · {articles.length} Artikel gesamt
          </p>
          <PaginationControls currentPage={currentPage} totalPages={totalPages} onPageChange={setPage} />
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-72 xl:w-80 flex-shrink-0">
          <Sidebar />
        </div>
      </div>
    </div>
    </>
  );
};

export default Index;
