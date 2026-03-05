import { Link } from "react-router-dom";
import type { Article } from "@/data/articles";

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

const ArticleCard = ({ article, featured = false }: ArticleCardProps) => {
  const formattedDate = new Date(article.date).toLocaleDateString("de-DE", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  // Hero card with image overlay
  if (featured) {
    return (
      <Link to={`/artikel/${article.slug}`} className="group block">
        <article className="relative overflow-hidden bg-card border border-border hover:border-primary/40 transition-all duration-300">
          <div className="relative">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-64 md:h-[460px] object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
              <span className="inline-block bg-primary text-primary-foreground px-2.5 py-0.5 text-[10px] font-bold rounded-sm mb-3 tracking-widest uppercase">
                {article.category}
              </span>
              <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 leading-tight text-[hsl(0,0%,100%)]">
                {article.title}
              </h2>
              <p className="text-sm mb-3 max-w-2xl leading-relaxed hidden md:block text-[hsl(0,0%,100%/0.65)]">
                {article.excerpt}
              </p>
              <div className="flex items-center gap-2 text-xs text-[hsl(0,0%,100%/0.45)]">
                <span className="font-semibold">DerAutoBlog</span>
                <span>·</span>
                <span>{formattedDate}</span>
              </div>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  // Horizontal list card
  return (
    <Link to={`/artikel/${article.slug}`} className="group block">
      <article className="overflow-hidden bg-card border border-border hover:border-border transition-all duration-200 flex flex-col sm:flex-row">
        <div className="sm:w-48 md:w-52 flex-shrink-0 overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-40 sm:h-full object-cover group-hover:scale-[1.03] transition-transform duration-300 ease-out"
            loading="lazy"
          />
        </div>
        <div className="p-4 flex-1 flex flex-col justify-between border-l border-border">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                {article.category}
              </span>
              <span className="text-xs text-muted-foreground">· {formattedDate}</span>
            </div>
            <h3 className="text-sm md:text-base font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors leading-snug">
              {article.title}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
              {article.excerpt}
            </p>
          </div>
          <div className="mt-2.5 flex items-center gap-1.5">
            <span className="text-xs font-semibold text-muted-foreground">DerAutoBlog</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ArticleCard;
