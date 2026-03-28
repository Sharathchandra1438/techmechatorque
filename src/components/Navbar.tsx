import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import { Sun, Moon, Menu, X, ChevronDown } from "lucide-react";

const services = [
  { name: "Web Development", path: "/services/web-development" },
  { name: "SEO", path: "/services/seo" },
  { name: "PPC Advertising", path: "/services/ppc" },
  { name: "Social Media Marketing", path: "/services/social-media-marketing" },
  { name: "Content Marketing", path: "/services/content-marketing" },
  { name: "Automation", path: "/services/automation" },
  { name: "IT Solutions", path: "/services/it-solutions" },
];

const packages = [
  { name: "SEO Packages", path: "/packages/seo" },
  { name: "PPC Packages", path: "/packages/ppc" },
  { name: "SMM Packages", path: "/packages/smm" },
  { name: "SMO Packages", path: "/packages/smo" },
  { name: "Website Packages", path: "/packages/website" },
  { name: "Maintenance Packages", path: "/packages/maintenance" },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [packagesOpen, setPackagesOpen] = useState(false);
  const location = useLocation();

  const servicesRef = useRef(null);
  const packagesRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target)
      ) {
        setServicesOpen(false);
      }
      if (
        packagesRef.current &&
        !packagesRef.current.contains(event.target)
      ) {
        setPackagesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setPackagesOpen(false);
  }, [location.pathname]);

  const DropdownMenu = ({ items, open }) => (
    <div
      className={`absolute top-full left-0 w-56 bg-card border border-border rounded-xl shadow-xl overflow-hidden transition-all duration-200 z-50 ${
        open
          ? "opacity-100 translate-y-1 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
    >
      {items.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className="block px-4 py-3 text-sm text-foreground/80 hover:text-foreground hover:bg-primary/10 transition-colors"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border">
      <div className="container-main flex items-center justify-between h-16 md:h-20">
        <Link to="/">
          <img src="/assets/logo3.png" className="h-10" />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <Link to="/" className="nav-link">Home</Link>

          {/* Services */}
          <div className="relative" ref={servicesRef}>
            <button
              onClick={() => {
                setServicesOpen(!servicesOpen);
                setPackagesOpen(false);
              }}
              className="nav-link flex items-center gap-1"
            >
              Services
              <ChevronDown
                size={14}
                className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            <DropdownMenu items={services} open={servicesOpen} />
          </div>

          {/* Packages */}
          <div className="relative" ref={packagesRef}>
            <button
              onClick={() => {
                setPackagesOpen(!packagesOpen);
                setServicesOpen(false);
              }}
              className="nav-link flex items-center gap-1"
            >
              Packages
              <ChevronDown
                size={14}
                className={`transition-transform ${packagesOpen ? "rotate-180" : ""}`}
              />
            </button>
            <DropdownMenu items={packages} open={packagesOpen} />
          </div>

          {/* <Link to="/about" className="nav-link">About</Link> */}
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-secondary"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Link
            to="/contact"
            className="hidden md:inline-flex items-center px-5 py-2.5 bg-primary text-primary-foreground font-semibold text-sm rounded-lg hover:bg-primary/90 transition-all"
          >
            Get In Touch
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
