import PackageDetail from "@/components/PackageDetail";
import { Share2 } from "lucide-react";

const SMMPackages = () => (
  <PackageDetail
    title="SMM Packages"
    subtitle="Strategic social media advertising"
    description="Grow your brand with targeted social media marketing campaigns across all major platforms. Ad spend is additional."
    icon={<Share2 className="text-primary" size={32} />}
    plans={[
      {
        name: "Starter",
        price: "₹19,999",
        period: "month",
        features: [
          "Up to ₹10,000 Ad Spend Management",
          "2 Platforms (Facebook + Instagram)",
          "Up to 3 Campaigns",
          "Ad Creative Design (5/month)",
          "Audience Targeting & Setup",
          "Monthly Performance Report",
          "Email Support",
        ],
      },
      {
        name: "Growth",
        price: "₹39,999",
        period: "month",
        popular: true,
        features: [
          "Up to ₹20,000 Ad Spend Management",
          "3 Platforms (FB + IG + LinkedIn)",
          "Up to 6 Campaigns",
          "Ad Creative Design (12/month)",
          "A/B Testing & Optimization",
          "Retargeting Campaigns",
          "Bi-Weekly Reports & Strategy Calls",
          "Phone & Email Support",
        ],
      },
      {
        name: "Advanced",
        price: "₹74,999",
        period: "month",
        features: [
          "Up to ₹40,000 Ad Spend Management",
          "All Platforms (FB, IG, LinkedIn, Twitter, YouTube)",
          "Unlimited Campaigns",
          "Custom Ad Creatives & Videos",
          "Advanced Audience Segmentation",
          "Cross-Platform Retargeting",
          "Influencer Campaign Coordination",
          "Weekly Reports & Strategy Sessions",
          "Dedicated Account Manager",
          "Priority Support",
        ],
      },
    ]}
  />
);

export default SMMPackages;
