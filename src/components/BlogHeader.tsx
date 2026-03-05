import { Link } from "react-router-dom";
import { categories } from "@/data/articles";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const BlogHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link to="/" className="text-2xl font-bold text-primary">
          DerAutoBlog
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {categories.map((cat) => (
            <Link
              key={cat}
              to={`/kategorie/${encodeURIComponent(cat)}`}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {cat}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="text-foreground md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="border-t border-border bg-background px-4 pb-4 md:hidden">
          {categories.map((cat) => (
            <Link
              key={cat}
              to={`/kategorie/${encodeURIComponent(cat)}`}
              className="block py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              onClick={() => setMenuOpen(false)}
            >
              {cat}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default BlogHeader;
