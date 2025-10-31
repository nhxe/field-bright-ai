import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
// NEW: Import the ProtectedRoutes component
import ProtectedRoutes from "./components/ProtectedRoutes";
// NEW: Import the useAuth hook (though it's only used within ProtectedRoutes now)
// import { useAuth } from './hooks/useAuth'; // You don't actually need to import it here anymore

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* 1. PUBLIC ROUTES: Routes accessible to everyone */}
            <Route path="/login" element={<Login />} />

            {/* 2. PROTECTED ROUTES: Wrap routes that require login */}
            <Route element={<ProtectedRoutes />}>
              {/* This is the main application route that only logged-in users can see */}
              <Route path="/" element={<Index />} />
              {/* Add other protected routes here, e.g., <Route path="/dashboard" element={<Dashboard />} /> */}
            </Route>
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;