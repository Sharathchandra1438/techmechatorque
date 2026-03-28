import PackageDetail from "@/components/PackageDetail";
import { Globe } from "lucide-react";

const WebsitePackages = () => (
  <PackageDetail
    title="Website Packages"
    subtitle="Professional websites built to perform"
    description="Get a professionally designed and developed website that represents your brand and converts visitors into customers."
    icon={<Globe className="text-primary" size={32} />}
    plans={[
      {
        name: "Basic",
        price: "₹19,999",
        period: "one-time",
        features: [
          "Up to 5 Pages",
          "Responsive Design",
          "Contact Form Integration",
          "Basic SEO Setup",
          "Social Media Integration",
          "1 Year Domain Registration",
          "1 Year Web Hosting",
          "SSL Certificate",
          "3 Months Free Support",
        ],
      },
      {
        name: "Business",
        price: "₹29,999",
        period: "one-time",
        popular: true,
        features: [
          "Up to 15 Pages",
          "Custom UI/UX Design",
          "CMS Integration (WordPress)",
          "Blog Setup",
          "Advanced SEO Optimization",
          "Google Analytics Setup",
          "Live Chat Integration",
          "1 Year Domain + Hosting",
          "SSL + CDN Setup",
          "6 Months Free Support",
        ],
      },
      {
        name: "E-commerce",
        price: "₹39,999",
        period: "one-time",
        features: [
          "Up to 50 Products",
          "Shopping Cart & Checkout",
          "Payment Gateway Integration",
          "Inventory Management",
          "Customer Account System",
          "Order Tracking",
          "Product Reviews & Ratings",
          "E-commerce SEO",
          "1 Year Domain + Premium Hosting",
          "SSL + CDN + Security",
          "12 Months Free Support",
        ],
      },
    ]}
  />
);

export default WebsitePackages;
