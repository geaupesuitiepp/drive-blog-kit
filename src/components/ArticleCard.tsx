import { Link } from "react-router-dom";
import type { Article } from "@/data/articles";

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

const ArticleCard = ({ article, featured = false }: ArticleCardProps) => {
  const formattedDate = new Date(article.date).toLocaleDateString("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  if (featured) {
    return (
      <Link to={`/artikel/${article.slug}`} className="group block overflow-hidden rounded-lg border border-border bg-card">
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="p-5">
          <span className="text-xs font-medium text-primary">{article.category}</span>
          <h2 className="mt-1 text-xl font-bold text-foreground group-hover:text-primary transition-colors">{article.title}</h2>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{article.excerpt}</p>
          <p className="mt-3 text-xs text-muted-foreground">{formattedDate}</p>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/artikel/${article.slug}`} className="group flex gap-4 rounded-lg border border-border bg-card p-3 transition-colors hover:border-primary/30">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
        <img
          src={article.image}
          alt={article.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col justify-center">
        <span className="text-xs font-medium text-primary">{article.category}</span>
        <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">{article.title}</h3>
        <p className="mt-1 text-xs text-muted-foreground">{formattedDate}</p>
      </div>
    </Link>
  );
};

export default ArticleCard;
