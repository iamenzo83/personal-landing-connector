
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import Index from "./pages/Index";
import ERPNextItalia from "./pages/ERPNextItalia";
import NotFound from "./pages/NotFound";
import ERPNextItaliaOldURL from "./pages/ERPNextItaliaOldURL";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/erp/erpnext-italia" element={<ERPNextItalia />} />
            
            {/* Redirect from old URLs to new SEO-friendly URLs */}
            <Route path="/2013/08/erpnext-italia" element={<ERPNextItaliaOldURL />} />
            <Route path="/2013/08/erpnext-italia/" element={<ERPNextItaliaOldURL />} />
            <Route path="/2013/08/erpnext-italia/index.html" element={<ERPNextItaliaOldURL />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
