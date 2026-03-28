import PackageDetail from "@/components/PackageDetail";
import { Target } from "lucide-react";

const PPCPackages = () => (
  <PackageDetail
    title="PPC Packages"
    subtitle="Maximize your advertising ROI"
    description="Performance-driven PPC management plans designed to deliver immediate results. Ad spend is separate from management fees."
    icon={<Target className="text-primary" size={32} />}
    plans={[
      {
        name: "Basic",
        price: "₹19,999",
        period: "month",
        features: [
          "Up to 2 Campaigns",
          "Up to 50 Keywords",
          "Google Search Ads",
          "Ad Copy Creation (3 variants)",
          "Bid Management & Optimization",
          "Conversion Tracking Setup",
          "Monthly Reporting",
          "Email Support",
        ],
      },
      {
        name: "Advanced",
        price: "₹29,999",
        period: "month",
        popular: true,
        features: [
          "Up to 5 Campaigns",
          "Up to 150 Keywords",
          "Google Search + Display Ads",
          "Remarketing Campaigns",
          "Ad Copy A/B Testing",
          "Landing Page Recommendations",
          "Bi-Weekly Reporting & Calls",
          "Phone & Email Support",
          "Negative Keyword Management",
        ],
      },
      {
        name: "Enterprise",
        price: "₹39,999",
        period: "month",
        features: [
          "Unlimited Campaigns",
          "Unlimited Keywords",
          "Google + Bing + Social Ads",
          "Advanced Remarketing & RLSA",
          "Shopping Ads Management",
          "Video Ads (YouTube)",
          "Custom Dashboard & Reporting",
          "Weekly Strategy Calls",
          "Dedicated PPC Specialist",
          "Priority Support",
        ],
      },
    ]}
  />
);

export default PPCPackages;
