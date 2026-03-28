import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, CheckCircle } from "lucide-react";
import { ReactNode } from "react";

interface ServiceDetailProps {
  title: string;
  subtitle: string;
  overview: string;
  benefits: string[];
  process: { step: string; desc: string }[];
  tools: string[];
  icon: ReactNode;
}

const ServiceDetail = ({ title, subtitle, overview, benefits, process, tools, icon }: ServiceDetailProps) => (
  <>
    <section className="section-padding">
      <div className="container-main">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors mb-4 inline-block">
              ← Back to Services
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">{icon}</div>
              <div>
                <h1 className="heading-lg">{title}</h1>
                <p className="text-primary text-sm font-semibold">{subtitle}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto space-y-12">
          <ScrollReveal>
            <div className="card-premium">
              <h2 className="heading-md mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{overview}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="heading-md mb-6">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((b) => (
                <div key={b} className="flex items-start gap-3 card-premium">
                  <CheckCircle size={18} className="text-primary mt-0.5 shrink-0" />
                  <p className="text-sm">{b}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="heading-md mb-6">Our Process</h2>
            <div className="space-y-4">
              {process.map((p, i) => (
                <div key={p.step} className="card-premium flex items-start gap-4">
                  <span className="text-2xl font-heading font-bold text-primary/30">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-heading font-semibold mb-1">{p.step}</h3>
                    <p className="text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="heading-md mb-6">Tools & Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {tools.map((t) => (
                <span key={t} className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                  {t}
                </span>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="card-premium text-center py-10 border-primary/20">
              <h2 className="heading-md mb-3">Ready to Get Started?</h2>
              <p className="text-muted-foreground mb-6">Let's discuss how our {title.toLowerCase()} services can transform your business.</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all btn-primary-glow"
              >
                Get In Touch <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  </>
);

export default ServiceDetail;
