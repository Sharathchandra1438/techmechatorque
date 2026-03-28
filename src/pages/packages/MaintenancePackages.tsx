import PackageDetail from "@/components/PackageDetail";
import { Wrench } from "lucide-react";

const MaintenancePackages = () => (
  <PackageDetail
    title="Maintenance Packages"
    subtitle="Keep your digital assets secure & performing"
    description="Ensure your website stays secure, fast, and up-to-date with our comprehensive maintenance plans."
    icon={<Wrench className="text-primary" size={32} />}
    plans={[
      {
        name: "Basic",
        price: "₹19,999",
        period: "year",
        features: [
          "Monthly Backups",
          "Security Monitoring",
          "CMS & Plugin Updates",
          "Uptime Monitoring",
          "Basic Performance Check",
          "SSL Renewal",
          "Email Support",
          "48-Hour Response Time",
        ],
      },
      {
        name: "Standard",
        price: "₹29,999",
        period: "year",
        popular: true,
        features: [
          "Weekly Backups",
          "Advanced Security Scanning",
          "Malware Removal",
          "CMS, Plugin & Theme Updates",
          "Performance Optimization",
          "Content Updates (2/month)",
          "Uptime Monitoring (5-min intervals)",
          "Phone & Email Support",
          "24-Hour Response Time",
        ],
      },
      {
        name: "Premium",
        price: "₹39,999",
        period: "year",
        features: [
          "Daily Backups",
          "Real-Time Security Monitoring",
          "Priority Malware Removal",
          "All Updates & Patches",
          "Monthly Performance Optimization",
          "Content Updates (Unlimited)",
          "Database Optimization",
          "CDN & Caching Management",
          "Monthly Health Reports",
          "Dedicated Support Manager",
          "4-Hour Response Time",
        ],
      },
    ]}
  />
);

export default MaintenancePackages;
