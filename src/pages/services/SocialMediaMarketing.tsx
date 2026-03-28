import ServiceDetail from "@/components/ServiceDetail";
import { Share2 } from "lucide-react";

const SocialMediaMarketing = () => (
  <ServiceDetail
    title="Social Media Marketing"
    subtitle="Build brand presence and engage audiences"
    icon={<Share2 className="text-primary" size={32} />}
    overview="Our social media marketing services help brands build meaningful connections with their audience across all major platforms. We create data-driven social strategies that combine organic content creation with paid advertising to maximize reach, engagement, and conversions. From content calendars to community management, influencer partnerships to performance analytics, we handle every aspect of your social media presence. Our creative team produces scroll-stopping content that resonates with your target audience and drives measurable business results."
    benefits={[
      "Increased brand awareness and social presence",
      "Higher engagement rates and community growth",
      "Targeted social advertising campaigns",
      "Influencer partnership management",
      "Real-time social listening and reputation management",
      "Data-driven content strategy and optimization",
    ]}
    process={[
      { step: "Social Audit", desc: "Comprehensive analysis of your current social presence, competitors, and audience demographics." },
      { step: "Strategy Development", desc: "Custom social media roadmap with platform-specific tactics and content pillars." },
      { step: "Content Creation", desc: "Professional graphics, videos, and copy tailored to each platform's best practices." },
      { step: "Campaign Execution", desc: "Scheduled posting, paid promotions, and community management across platforms." },
      { step: "Analytics & Optimization", desc: "Monthly performance reviews with data-driven adjustments to maximize results." },
    ]}
    tools={["Meta Business Suite", "Hootsuite", "Canva Pro", "Buffer", "Sprout Social", "Instagram Insights", "LinkedIn Analytics", "TikTok Ads"]}
  />
);

export default SocialMediaMarketing;
