import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import {
  Globe, Search, Target, Share2, FileText, Zap, Monitor,
  BarChart3, Users, Rocket, Award, TrendingUp, Star,
  ArrowRight, CheckCircle
} from "lucide-react";

const servicesData = [
  { icon: Globe, title: "Web Development", desc: "Custom, responsive websites built for performance and conversion.", path: "/services/web-development" },
  { icon: Search, title: "SEO", desc: "Dominate search rankings with data-driven optimization strategies.", path: "/services/seo" },
  { icon: Target, title: "PPC Advertising", desc: "Maximize ROI with precision-targeted paid advertising campaigns.", path: "/services/ppc" },
  { icon: Share2, title: "Social Media Marketing", desc: "Engage audiences and build brand presence across platforms.", path: "/services/social-media-marketing" },
  { icon: FileText, title: "Content Marketing", desc: "Compelling content that drives traffic and builds authority.", path: "/services/content-marketing" },
  { icon: Zap, title: "Automation", desc: "Streamline workflows with intelligent marketing automation.", path: "/services/automation" },
  { icon: Monitor, title: "IT Solutions", desc: "Enterprise-grade technology solutions for modern businesses.", path: "/services/it-solutions" },
];

const processSteps = [
  { num: "01", title: "Research", desc: "Deep market analysis and competitor research to identify opportunities." },
  { num: "02", title: "Strategy", desc: "Custom blueprints aligned with your business objectives and KPIs." },
  { num: "03", title: "Execution", desc: "Precision implementation with agile methodologies and real-time tracking." },
  { num: "04", title: "Optimization", desc: "Continuous refinement based on data analytics and performance metrics." },
];

const testimonials = [
  { name: "Ravi Sharma", role: "CEO, TechVista", text: "TMT transformed our digital presence. Our organic traffic grew 340% in 6 months.", rating: 5 },
  { name: "Priya Nair", role: "Founder, StyleHub", text: "The automation systems they built saved us 20+ hours per week. Incredible ROI.", rating: 5 },
  { name: "Arjun Mehta", role: "CMO, FinEdge", text: "Professional, data-driven, and results-oriented. TMT is our go-to digital partner.", rating: 5 },
  { name: "Sneha Reddy", role: "Director, EduPro", text: "From PPC to SEO, every campaign delivered measurable results. Highly recommended!", rating: 5 },
];

const featuredPackages = [
  { title: "SEO Starter", price: "₹9,999", period: "/month", features: ["Up to 20 Keywords", "On-Page SEO", "Monthly Reporting", "Technical Audit"], path: "/packages/seo" },
  { title: "SMM Growth", price: "₹39,999", period: "/month", features: ["Multi-Platform Ads", "Campaign Optimization", "Creative Design", "Weekly Reports"], path: "/packages/smm", popular: true },
  { title: "Website Business", price: "₹29,999", period: "one-time", features: ["Up to 15 Pages", "Responsive Design", "SEO Optimized", "1 Year Hosting"], path: "/packages/website" },
];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center section-padding">
        <div className="container-main">
          <div className="max-w-4xl">
            <ScrollReveal>
              <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-4">
                Why Not Do It
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="heading-xl leading-tight mb-6">
                Engineering Digital Growth with{" "}
                <span className="text-gradient">Precision & Power</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
                We help businesses grow using data-driven strategies, automation, and high-performance marketing systems.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all btn-primary-glow"
                >
                  Discover More <ArrowRight size={18} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-border text-foreground font-semibold rounded-lg hover:bg-secondary transition-all"
                >
                  Get Started
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-card/50">
        <div className="container-main">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-lg mb-6">
                Who We <span className="text-gradient">Are</span>
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Tech Mecha Torque (TMT) is a product-based SaaS company focused on building powerful, scalable software solutions tailored to the unique needs of different industries and organizations. We design and develop intelligent systems that help businesses streamline operations, improve efficiency, and drive innovation.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Expanding beyond software, TMT has now ventured into digital media marketing, bringing the same precision, automation, and data-driven approach to help brands grow their online presence and reach the right audience effectively.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                By combining technology with marketing, we empower businesses with end-to-end digital growth solutions — from custom software to high-performance marketing strategies.
              </p>

              <Link
                to="https://www.techmechatorque.com/"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Learn More About Us <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="heading-lg mb-4">
                Our <span className="text-gradient">Services</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Comprehensive digital solutions engineered to accelerate your growth.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {servicesData.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 80}>
                <Link to={service.path} className="card-premium group block h-full">
                  <service.icon className="text-primary mb-4" size={32} />
                  <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{service.desc}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-card/50">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="heading-lg mb-4">
                Why Choose <span className="text-gradient">TMT</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BarChart3, title: "Data-Driven Strategies", desc: "Every decision backed by analytics and real-time data insights." },
              { icon: TrendingUp, title: "ROI-Focused Campaigns", desc: "Maximizing returns with precision-targeted marketing efforts." },
              { icon: Zap, title: "Automation Systems", desc: "Streamlined workflows that save time and reduce costs." },
              { icon: Users, title: "Expert Team", desc: "Seasoned professionals with deep industry expertise." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                    <item.icon className="text-primary" size={28} />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="heading-lg mb-4">
                Our <span className="text-gradient">Process</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 100}>
                <div className="card-premium text-center h-[220px] flex flex-col justify-between">
                  <span className="text-4xl font-heading font-bold text-primary/20">{step.num}</span>
                  <h3 className="font-heading font-semibold text-lg mt-2 mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="section-padding bg-card/50">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="heading-lg mb-4">
                Featured <span className="text-gradient">Packages</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Flexible plans designed to fit every business need.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {featuredPackages.map((pkg, i) => (
              <ScrollReveal key={pkg.title} delay={i * 100}>
                <div className={`card-premium text-center relative ${pkg.popular ? "border-primary ring-1 ring-primary" : ""}`}>
                  {pkg.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                  <h3 className="font-heading font-semibold text-lg mb-2">{pkg.title}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-heading font-bold">{pkg.price}</span>
                    <span className="text-sm text-muted-foreground">{pkg.period}</span>
                  </div>
                  <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <CheckCircle size={14} className="text-primary shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={pkg.path}
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground font-semibold text-sm rounded-lg hover:bg-primary/90 transition-all w-full justify-center"
                  >
                    View Details
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/packages"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              View All Packages <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="section-padding">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="heading-lg mb-4">
                Client <span className="text-gradient">Testimonials</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 80}>
                <div className="card-premium h-full flex flex-col">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={14} className="text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">"{t.text}"</p>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="section-padding">
        <div className="container-main">
          <ScrollReveal>
            <div className="card-premium text-center py-16 px-8 border-primary/20">
              <Rocket className="text-primary mx-auto mb-4" size={40} />
              <h2 className="heading-lg mb-4">
                Ready to <span className="text-gradient">Scale</span> Your Business?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Let's build a data-driven strategy that delivers measurable results. Your growth journey starts here.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-all btn-primary-glow text-lg"
              >
                Get In Touch <ArrowRight size={20} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Index;
