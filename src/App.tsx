import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import YouTube from "./pages/YouTube";
import Facebook from "./pages/Facebook";
import Instagram from "./pages/Instagram";
import TikTok from "./pages/TikTok";
import Twitter from "./pages/Twitter";
import Vimeo from "./pages/Vimeo";
import Dailymotion from "./pages/Dailymotion";
import Pinterest from "./pages/Pinterest";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import DMCA from "./pages/DMCA";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import API from "./pages/API";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/youtube" element={<YouTube />} />
            <Route path="/facebook" element={<Facebook />} />
            <Route path="/instagram" element={<Instagram />} />
            <Route path="/tiktok" element={<TikTok />} />
            <Route path="/twitter" element={<Twitter />} />
            <Route path="/vimeo" element={<Vimeo />} />
            <Route path="/dailymotion" element={<Dailymotion />} />
            <Route path="/pinterest" element={<Pinterest />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/dmca" element={<DMCA />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/api" element={<API />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
