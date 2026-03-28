import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { Globe, Search, Target, Share2, FileText, Zap, Monitor, ArrowRight } from "lucide-react";

const allServices = [
  { icon: Globe, title: "Web Development", desc: "Custom-built, responsive websites and web applications designed for performance, scalability, and conversion. We create digital experiences that leave lasting impressions.", path: "/services/web-development" },
  { icon: Search, title: "SEO", desc: "Dominate search engine rankings with our comprehensive SEO strategies. From technical audits to content optimization, we ensure your brand is discoverable.", path: "/services/seo" },
  { icon: Target, title: "PPC Advertising", desc: "Maximize your advertising ROI with precision-targeted campaigns across Google Ads, Bing, and social platforms. Every click is an investment.", path: "/services/ppc" },
  { icon: Share2, title: "Social Media Marketing", desc: "Build brand presence and engage audiences across Facebook, Instagram, LinkedIn, and more with data-driven social campaigns.", path: "/services/social-media-marketing" },
  { icon: FileText, title: "Content Marketing", desc: "Compelling, SEO-optimized content that drives organic traffic, builds authority, and converts visitors into loyal customers.", path: "/services/content-marketing" },
  { icon: Zap, title: "Automation", desc: "Streamline your marketing and business workflows with intelligent automation systems that save time and reduce costs.", path: "/services/automation" },
  { icon: Monitor, title: "IT Solutions", desc: "Enterprise-grade technology solutions including cloud infrastructure, cybersecurity, and custom software development.", path: "/services/it-solutions" },
];

const Services = () => (
  <>
    <section className="section-padding">
      <div className="container-main">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">What We Do</p>
            <h1 className="heading-xl mb-4">Our <span className="text-gradient">Services</span></h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital marketing and technology solutions engineered to accelerate your business growth.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 80}>
              <Link to={s.path} className="card-premium group block h-full">
                <s.icon className="text-primary mb-4" size={36} />
                <h2 className="font-heading font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                  {s.title}
                </h2>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{s.desc}</p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                  Learn More <ArrowRight size={14} />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Services;
