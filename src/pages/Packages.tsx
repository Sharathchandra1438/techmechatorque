import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { Search, Target, Share2, Megaphone, Globe, Wrench, ArrowRight } from "lucide-react";

const packageCategories = [
  { icon: Search, title: "SEO Packages", desc: "Boost your organic search rankings with our tiered SEO packages.", path: "/packages/seo" },
  { icon: Target, title: "PPC Packages", desc: "Maximize paid advertising ROI with managed PPC campaigns.", path: "/packages/ppc" },
  { icon: Share2, title: "SMM Packages", desc: "Grow your brand with strategic social media marketing.", path: "/packages/smm" },
  { icon: Megaphone, title: "SMO Packages", desc: "Optimize your social media presence for maximum engagement.", path: "/packages/smo" },
  { icon: Globe, title: "Website Packages", desc: "Professional websites built for performance and conversions.", path: "/packages/website" },
  { icon: Wrench, title: "Maintenance Packages", desc: "Keep your digital assets secure, updated, and performing.", path: "/packages/maintenance" },
];

const Packages = () => (
  <section className="section-padding">
    <div className="container-main">
      <ScrollReveal>
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Pricing</p>
          <h1 className="heading-xl mb-4">Our <span className="text-gradient">Packages</span></h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Flexible, transparent pricing designed to fit businesses of all sizes. Choose the plan that matches your goals.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packageCategories.map((cat, i) => (
          <ScrollReveal key={cat.title} delay={i * 80}>
            <Link to={cat.path} className="card-premium group block h-full text-center">
              <cat.icon className="text-primary mx-auto mb-4" size={40} />
              <h2 className="font-heading font-semibold text-xl mb-3 group-hover:text-primary transition-colors">{cat.title}</h2>
              <p className="text-sm text-muted-foreground mb-4">{cat.desc}</p>
              <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                View Plans <ArrowRight size={14} />
              </span>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Packages;
