import PackageDetail from "@/components/PackageDetail";
import { Search } from "lucide-react";

const SEOPackages = () => (
  <PackageDetail
    title="SEO Packages"
    subtitle="Boost your organic search rankings"
    description="Choose the SEO package that fits your business goals. All plans include dedicated account management and monthly reporting."
    icon={<Search className="text-primary" size={32} />}
    plans={[
      {
        name: "Starter",
        price: "₹9,999",
        period: "month",
        features: [
          "Up to 20 Keywords",
          "On-Page SEO Optimization",
          "Technical SEO Audit",
          "Google My Business Setup",
          "Monthly Blog Post (1)",
          "Competitor Analysis",
          "Monthly Performance Report",
          "Email Support",
        ],
      },
      {
        name: "Advanced",
        price: "₹19,999",
        period: "month",
        popular: true,
        features: [
          "Up to 40 Keywords",
          "Advanced On-Page SEO",
          "Technical SEO + Fix Implementation",
          "Content Marketing (4 blogs/month)",
          "Link Building (10 backlinks/month)",
          "Local SEO Optimization",
          "Bi-Weekly Performance Reports",
          "Phone & Email Support",
          "Schema Markup Implementation",
        ],
      },
      {
        name: "E-commerce",
        price: "₹29,999",
        period: "month",
        features: [
          "Up to 80 Keywords",
          "Product Page Optimization",
          "Category Page SEO",
          "Content Marketing (8 blogs/month)",
          "Link Building (20 backlinks/month)",
          "E-commerce Schema Markup",
          "Conversion Rate Optimization",
          "Weekly Performance Reports",
          "Dedicated Account Manager",
          "Priority Support",
        ],
      },
    ]}
  />
);

export default SEOPackages;
