import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import IndustryPage from "./pages/IndustryPage.tsx";
import InsulatedPanelsPage from "./pages/InsulatedPanelsPage.tsx";
import NotFound from "./pages/NotFound.tsx";
import ProductsPage from "./pages/ProductsPage.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/industries/:slug" element={<IndustryPage />} />
          <Route path="/products/panels" element={<InsulatedPanelsPage />} />
          <Route path="/products/panels/:slug" element={<InsulatedPanelsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
