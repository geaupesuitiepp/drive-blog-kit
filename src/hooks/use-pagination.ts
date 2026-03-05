import { useState, useMemo } from "react";

export function usePagination<T>(items: T[], perPage: number = 6) {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(items.length / perPage));
  const currentPage = Math.min(page, totalPages);

  const paginatedItems = useMemo(
    () => items.slice((currentPage - 1) * perPage, currentPage * perPage),
    [items, currentPage, perPage]
  );

  return { paginatedItems, currentPage, totalPages, setPage };
}
