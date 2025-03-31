
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import ERPNextItalia from "./pages/ERPNextItalia";
import NotFound from "./pages/NotFound";
import OldERPNextRedirect from "./pages/OldERPNextRedirect";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/erp/erpnext-italia" element={<ERPNextItalia />} />
          
          {/* Redirect from old URLs to new SEO-friendly URLs */}
          <Route path="/2013/08/erpnext-italia" element={<OldERPNextRedirect />} />
          <Route path="/2013/08/erpnext-italia/" element={<OldERPNextRedirect />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
