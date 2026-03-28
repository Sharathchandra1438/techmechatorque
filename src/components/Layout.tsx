import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ParticleBackground from "./ParticleBackground";

const Layout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col theme-transition">
      <ParticleBackground />
      <Navbar />
      <main className="flex-1 relative z-10 pt-16 md:pt-20">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
