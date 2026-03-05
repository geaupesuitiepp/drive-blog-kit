import { Link } from "react-router-dom";
import { categories } from "@/data/articles";

const BlogFooter = () => {
  return (
    <footer className="border-t border-border bg-card py-10">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-lg font-bold text-primary">DerAutoBlog</h3>
            <p className="text-sm text-muted-foreground">
              Dein Blog rund um Autos, Technik, Lifestyle und alles was dazugehört.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">Kategorien</h4>
            <ul className="space-y-1">
              {categories.map((cat) => (
                <li key={cat}>
                  <Link
                    to={`/kategorie/${encodeURIComponent(cat)}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">Rechtliches</h4>
            <ul className="space-y-1">
              <li>
                <Link to="/impressum" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} DerAutoBlog. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};

export default BlogFooter;
