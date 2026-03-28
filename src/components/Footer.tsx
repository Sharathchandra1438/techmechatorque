import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-card border-t border-border theme-transition">
    <div className="container-main py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
        <Link to="/" className="flex items-center">
          <img
            src="/assets/logo3.png"
            alt="TMT Logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
          Engineering digital growth with precision & power. We help businesses scale through data-driven strategies and automation.
        </p>

        <p className="mt-3 text-xs text-muted-foreground italic">
          "Why Not Do It"
        </p>
      </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[
              { to: "/", label: "Home" },
              { to: "/services", label: "Services" },
              { to: "/packages", label: "Packages" },
              { to: "/about", label: "About Us" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-primary transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {["Web Development", "SEO", "PPC Advertising", "Social Media Marketing", "Content Marketing", "Automation"].map(
              (s) => (
                <li key={s}>
                  <Link
                    to={`/services/${s.toLowerCase().replace(/ /g, "-")}`}
                    className="hover:text-primary transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 text-primary shrink-0" />
              <span>Sangareddy, Telangana, India</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-primary shrink-0" />
              <a href="mailto:marketing@techmechatorque.com" className="hover:text-primary transition-colors">
                marketing@techmechatorque.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-primary shrink-0" />
              <a href="tel:+91 7993442607" className="hover:text-primary transition-colors">
                +91 7993442607
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Tech Mecha Torque. All rights reserved.</p>
        <p>Engineered with precision. Powered by data.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
