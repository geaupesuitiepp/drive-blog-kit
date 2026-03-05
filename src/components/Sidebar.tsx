import { Link } from "react-router-dom";
import { articles, categories, getArticlesByCategory } from "@/data/articles";

const Sidebar = () => {
  const popular = articles.slice(0, 4);

  return (
    <aside className="space-y-6">
      {/* Popular articles */}
      <div className="border border-border bg-card">
        <div className="bg-secondary px-4 py-3">
          <h3 className="text-xs font-black uppercase tracking-widest text-foreground">Beliebt</h3>
        </div>
        <div className="divide-y divide-border">
          {popular.map((article, i) => (
            <Link
              key={article.id}
              to={`/artikel/${article.slug}`}
              className="flex items-start gap-3 p-4 hover:bg-secondary/50 transition-colors group"
            >
              <span className="text-2xl font-black text-muted-foreground/30 leading-none mt-0.5">
                {i + 1}
              </span>
              <div>
                <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                  {article.title}
                </h4>
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest mt-1 block">
                  {article.category}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Categories with counts */}
      <div className="border border-border bg-card">
        <div className="bg-secondary px-4 py-3">
          <h3 className="text-xs font-black uppercase tracking-widest text-foreground">Kategorien</h3>
        </div>
        <div className="p-4 flex flex-wrap gap-2">
          {categories.map((cat) => {
            const count = getArticlesByCategory(cat).length;
            return (
              <Link
                key={cat}
                to={`/kategorie/${encodeURIComponent(cat)}`}
                className="inline-flex items-center gap-1 border border-border px-3 py-1.5 text-xs text-muted-foreground hover:border-primary hover:text-primary transition-colors"
              >
                {cat}
                <span className="text-muted-foreground/50">({count})</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Newsletter */}
      <div className="border border-border bg-card p-5">
        <div className="mb-3">
          <span className="text-primary text-lg">✦</span>
        </div>
        <h3 className="text-base font-bold text-primary mb-1">Newsletter</h3>
        <p className="text-xs text-muted-foreground mb-4">
          Die neuesten Artikel direkt in Ihr Postfach.
        </p>
        <input
          type="email"
          placeholder="Ihre E-Mail-Adresse"
          className="w-full bg-background border border-border px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground mb-3 focus:outline-none focus:ring-1 focus:ring-primary"
        />
        <button className="w-full border border-foreground text-foreground py-2 text-sm font-medium hover:bg-foreground hover:text-background transition-colors">
          Abonnieren
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
