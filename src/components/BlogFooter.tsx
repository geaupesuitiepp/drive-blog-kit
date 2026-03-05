import { Link } from "react-router-dom";
import { categories } from "@/data/articles";

const BlogFooter = () => {
  return (
    <footer className="border-t border-[hsl(220,14%,22%)] bg-[hsl(220,20%,10%)] py-10">
      <div className="container max-w-7xl px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-lg font-black text-[hsl(0,0%,92%)] tracking-tight">
              <span className="text-primary italic">Auto</span>Journal
            </h3>
            <p className="text-sm text-[hsl(0,0%,55%)]">
              Dein Blog rund um Autos, Technik, Lifestyle und alles was dazugehört.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-xs font-black uppercase tracking-widest text-[hsl(0,0%,92%)]">Kategorien</h4>
            <ul className="space-y-1">
              {categories.map((cat) => (
                <li key={cat}>
                  <Link
                    to={`/kategorie/${encodeURIComponent(cat)}`}
                    className="text-sm text-[hsl(0,0%,55%)] transition-colors hover:text-primary"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-xs font-black uppercase tracking-widest text-[hsl(0,0%,92%)]">Links</h4>
            <ul className="space-y-1">
              <li>
                <Link to="/kontakt" className="text-sm text-[hsl(0,0%,55%)] transition-colors hover:text-primary">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="text-sm text-[hsl(0,0%,55%)] transition-colors hover:text-primary">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-[hsl(220,14%,22%)] pt-6 text-center text-xs text-[hsl(0,0%,45%)]">
          © {new Date().getFullYear()} AutoJournal. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};

export default BlogFooter;
