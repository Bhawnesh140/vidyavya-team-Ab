import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Programs from "./pages/Programs";
import DataEngineering from "./pages/DataEngineering";
import AIMLEngineering from "./pages/AIMLEngineering";
import StudentLife from "./pages/StudentLife";
import Partner from "./pages/Partner";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

import { RequestCallbackProvider } from "@/context/RequestCallbackContext";
import RequestCallbackModal from "@/components/modals/RequestCallbackModal";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <RequestCallbackProvider>
        <Toaster />
        <Sonner />
        <RequestCallbackModal />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/programs/data-engineering" element={<DataEngineering />} />
            <Route path="/programs/ai-ml-engineering" element={<AIMLEngineering />} />
            <Route path="/student-life" element={<StudentLife />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </RequestCallbackProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
