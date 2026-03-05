import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import BlogHeader from "@/components/BlogHeader";
import BlogFooter from "@/components/BlogFooter";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import ArticlePage from "./pages/ArticlePage";
import CategoryPage from "./pages/CategoryPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import DatenschutzPage from "./pages/DatenschutzPage";

const queryClient = new QueryClient();

const AppRoutes = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ScrollToTop />
      <div className="min-h-screen bg-background">
        <BlogHeader />
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/artikel/:slug" element={<ArticlePage />} />
            <Route path="/kategorie/:name" element={<CategoryPage />} />
            <Route path="/kontakt" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <BlogFooter />
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default AppRoutes;
