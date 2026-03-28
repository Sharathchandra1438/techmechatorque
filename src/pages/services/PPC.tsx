import ServiceDetail from "@/components/ServiceDetail";
import { Target } from "lucide-react";

const PPC = () => (
  <ServiceDetail
    title="PPC Advertising"
    subtitle="Maximize ROI with precision-targeted ads"
    icon={<Target className="text-primary" size={32} />}
    overview="Our PPC advertising services deliver immediate, measurable results through strategic paid campaigns across Google Ads, Microsoft Advertising, and social media platforms. We combine data analytics with creative excellence to create campaigns that convert clicks into customers. Our certified PPC specialists continuously optimize your campaigns to lower cost-per-click, improve quality scores, and maximize your advertising ROI. Whether you're looking to drive leads, increase sales, or build brand awareness, our paid media strategies are designed to deliver results from day one."
    benefits={[
      "Immediate visibility and traffic generation",
      "Precise audience targeting and retargeting",
      "Measurable ROI with transparent reporting",
      "Lower cost-per-acquisition through optimization",
      "A/B testing for continuous improvement",
      "Cross-platform campaign management",
    ]}
    process={[
      { step: "Account Audit & Setup", desc: "Review existing campaigns or set up new accounts with proper tracking and conversion goals." },
      { step: "Keyword & Audience Research", desc: "Identify high-intent keywords and build targeted audience segments for maximum relevance." },
      { step: "Ad Creation", desc: "Compelling ad copy and creative assets designed to drive clicks and conversions." },
      { step: "Campaign Launch", desc: "Strategic bid management and budget allocation across campaigns and ad groups." },
      { step: "Optimization & Scaling", desc: "Continuous A/B testing, bid adjustments, and performance optimization to maximize ROI." },
    ]}
    tools={["Google Ads", "Microsoft Ads", "Facebook Ads Manager", "Google Analytics", "Google Tag Manager", "Optmyzr", "SpyFu"]}
  />
);

export default PPC;
