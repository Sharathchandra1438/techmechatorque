import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Layout from "@/components/Layout";

import Index from "./pages/Index";
import Services from "./pages/Services";
import Packages from "./pages/Packages";
// import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import WebDevelopment from "./pages/services/WebDevelopment";
import SEOService from "./pages/services/SEOService";
import PPC from "./pages/services/PPC";
import SocialMediaMarketing from "./pages/services/SocialMediaMarketing";
import ContentMarketing from "./pages/services/ContentMarketing";
import Automation from "./pages/services/Automation";
import ITSolutions from "./pages/services/ITSolutions";

import SEOPackages from "./pages/packages/SEOPackages";
import PPCPackages from "./pages/packages/PPCPackages";
import SMMPackages from "./pages/packages/SMMPackages";
import SMOPackages from "./pages/packages/SMOPackages";
import WebsitePackages from "./pages/packages/WebsitePackages";
import MaintenancePackages from "./pages/packages/MaintenancePackages";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/web-development" element={<WebDevelopment />} />
              <Route path="/services/seo" element={<SEOService />} />
              <Route path="/services/ppc" element={<PPC />} />
              <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
              <Route path="/services/content-marketing" element={<ContentMarketing />} />
              <Route path="/services/automation" element={<Automation />} />
              <Route path="/services/it-solutions" element={<ITSolutions />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/packages/seo" element={<SEOPackages />} />
              <Route path="/packages/ppc" element={<PPCPackages />} />
              <Route path="/packages/smm" element={<SMMPackages />} />
              <Route path="/packages/smo" element={<SMOPackages />} />
              <Route path="/packages/website" element={<WebsitePackages />} />
              <Route path="/packages/maintenance" element={<MaintenancePackages />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
