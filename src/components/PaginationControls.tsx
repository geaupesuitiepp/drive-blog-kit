import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function getVisiblePages(current: number, total: number): (number | "...")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const pages: (number | "...")[] = [1];

  if (current > 3) pages.push("...");

  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);

  for (let i = start; i <= end; i++) pages.push(i);

  if (current < total - 2) pages.push("...");

  pages.push(total);
  return pages;
}

const PaginationControls = ({ currentPage, totalPages, onPageChange }: PaginationControlsProps) => {
  if (totalPages <= 1) return null;

  const visible = getVisiblePages(currentPage, totalPages);

  return (
    <div className="mt-8 flex items-center justify-center gap-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded-md border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary disabled:opacity-30 disabled:hover:border-border disabled:hover:text-muted-foreground"
        aria-label="Vorherige Seite"
      >
        <ChevronLeft size={18} />
      </button>

      {visible.map((p, i) =>
        p === "..." ? (
          <span key={`dots-${i}`} className="px-1 text-muted-foreground">…</span>
        ) : (
          <button
            key={p}
            onClick={() => onPageChange(p)}
            className={`h-9 w-9 rounded-md text-sm font-medium transition-colors ${
              p === currentPage
                ? "bg-primary text-primary-foreground"
                : "border border-border text-muted-foreground hover:border-primary hover:text-primary"
            }`}
          >
            {p}
          </button>
        )
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded-md border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary disabled:opacity-30 disabled:hover:border-border disabled:hover:text-muted-foreground"
        aria-label="Nächste Seite"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
};

export default PaginationControls;
