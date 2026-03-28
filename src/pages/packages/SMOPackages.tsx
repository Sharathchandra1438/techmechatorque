import PackageDetail from "@/components/PackageDetail";
import { Megaphone } from "lucide-react";

const SMOPackages = () => (
  <PackageDetail
    title="SMO Packages"
    subtitle="Optimize your social media presence"
    description="Enhance your organic social media presence with strategic content creation, community management, and engagement optimization."
    icon={<Megaphone className="text-primary" size={32} />}
    plans={[
      {
        name: "Starter",
        price: "₹19,999",
        period: "month",
        features: [
          "2 Platforms (Facebook + Instagram)",
          "12 Posts Per Month",
          "Basic Graphic Design",
          "Hashtag Research & Optimization",
          "Profile Optimization",
          "Community Management",
          "Monthly Analytics Report",
          "Email Support",
        ],
      },
      {
        name: "Growth",
        price: "₹39,999",
        period: "month",
        popular: true,
        features: [
          "3 Platforms (FB + IG + LinkedIn)",
          "20 Posts Per Month",
          "Professional Graphic Design",
          "Reels/Short Video Content (4/month)",
          "Story Content (8/month)",
          "Advanced Hashtag Strategy",
          "Engagement & Community Building",
          "Bi-Weekly Reports",
          "Phone & Email Support",
        ],
      },
      {
        name: "Advanced",
        price: "₹74,000",
        period: "month",
        features: [
          "All Major Platforms (5+)",
          "30 Posts Per Month",
          "Premium Design & Video Content",
          "Reels/Short Videos (8/month)",
          "Daily Stories & Interactive Content",
          "Influencer Collaboration Support",
          "Brand Voice Development",
          "Social Listening & Sentiment Analysis",
          "Weekly Reports & Strategy Sessions",
          "Dedicated Social Media Manager",
        ],
      },
    ]}
  />
);

export default SMOPackages;
