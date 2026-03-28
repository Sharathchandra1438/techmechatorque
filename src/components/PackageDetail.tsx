import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { CheckCircle, ArrowRight } from "lucide-react";
import { ReactNode } from "react";

export interface PlanData {
  name: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
}

interface PackageDetailProps {
  title: string;
  subtitle: string;
  description: string;
  icon: ReactNode;
  plans: PlanData[];
}

const PackageDetail = ({ title, subtitle, description, icon, plans }: PackageDetailProps) => (
  <section className="section-padding">
    <div className="container-main">
      <ScrollReveal>
        <div className="text-center mb-16">
          <Link to="/packages" className="text-sm text-muted-foreground hover:text-primary transition-colors mb-4 inline-block">
            ← Back to Packages
          </Link>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-primary/10">{icon}</div>
          </div>
          <h1 className="heading-xl mb-3">{title}</h1>
          <p className="text-primary font-semibold text-sm mb-4">{subtitle}</p>
          <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
        </div>
      </ScrollReveal>

      <div className={`grid grid-cols-1 md:grid-cols-${plans.length} gap-8 max-w-6xl mx-auto`}>
        {plans.map((plan, i) => (
          <ScrollReveal key={plan.name} delay={i * 100}>
            <div className={`card-premium text-center relative flex flex-col h-full ${plan.popular ? "border-primary ring-1 ring-primary" : ""}`}>
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="font-heading font-semibold text-xl mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-heading font-bold">{plan.price}</span>
                <span className="text-sm text-muted-foreground">/{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8 text-left flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`inline-flex items-center justify-center gap-2 w-full px-6 py-3 font-semibold text-sm rounded-lg transition-all ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 btn-primary-glow"
                    : "bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                Get Started <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default PackageDetail;
