import { Link } from "react-router-dom";
import { categories } from "@/data/articles";
import { Menu, X, Search } from "lucide-react";
import logo from "@/assets/logo.png";
import { useState } from "react";

const mainCategories = categories.slice(0, 5);
const subCategories = categories.slice(5);

const BlogHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="sticky top-0 z-50">
      {/* Top row - dark */}
      <div className="bg-[hsl(220,20%,10%)] border-b border-[hsl(220,14%,22%)]">
        <div className="container max-w-7xl flex items-center justify-between px-4 py-3">
          <Link to="/" className="text-2xl font-black tracking-tight text-[hsl(0,0%,92%)]">
            <span className="text-primary italic">Auto</span>Journal
          </Link>

          {/* Desktop main nav */}
          <nav className="hidden items-center gap-6 md:flex">
            {mainCategories.map((cat) => (
              <Link
                key={cat}
                to={`/kategorie/${encodeURIComponent(cat)}`}
                className="text-sm font-medium text-[hsl(0,0%,65%)] transition-colors hover:text-primary"
              >
                {cat}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-[hsl(0,0%,65%)] hover:text-[hsl(0,0%,92%)] transition-colors"
              aria-label="Suche"
            >
              <Search size={20} />
            </button>
            <button
              className="text-[hsl(0,0%,92%)] md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menü"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Sub-categories row (desktop) */}
      {subCategories.length > 0 && (
        <div className="hidden md:block border-b border-[hsl(220,14%,22%)] bg-[hsl(220,20%,14%)]">
          <div className="container max-w-7xl px-4">
            <nav className="flex items-center gap-1 overflow-x-auto">
              <Link
                to="/"
                className="px-3 py-2.5 text-[11px] font-bold uppercase tracking-widest text-[hsl(0,0%,55%)] hover:text-primary transition-colors whitespace-nowrap"
              >
                Alle
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat}
                  to={`/kategorie/${encodeURIComponent(cat)}`}
                  className="px-3 py-2.5 text-[11px] font-bold uppercase tracking-widest text-[hsl(0,0%,55%)] hover:text-primary transition-colors whitespace-nowrap"
                >
                  {cat}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Search bar */}
      {searchOpen && (
        <div className="border-b border-border bg-secondary px-4 py-3">
          <div className="container max-w-7xl">
            <input
              type="text"
              placeholder="Artikel suchen..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-background border border-border rounded px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              autoFocus
            />
          </div>
        </div>
      )}

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="border-b border-[hsl(220,14%,22%)] bg-[hsl(220,20%,10%)] px-4 pb-4 md:hidden">
          {categories.map((cat) => (
            <Link
              key={cat}
              to={`/kategorie/${encodeURIComponent(cat)}`}
              className="block py-2 text-sm font-medium text-[hsl(0,0%,65%)] transition-colors hover:text-primary"
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
