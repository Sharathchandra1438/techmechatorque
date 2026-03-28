import ServiceDetail from "@/components/ServiceDetail";
import { FileText } from "lucide-react";

const ContentMarketing = () => (
  <ServiceDetail
    title="Content Marketing"
    subtitle="Content that drives traffic and builds authority"
    icon={<FileText className="text-primary" size={32} />}
    overview="Our content marketing services create compelling, SEO-optimized content that attracts, engages, and converts your target audience. We develop comprehensive content strategies that align with your business goals and buyer journey. From blog posts and whitepapers to infographics and video scripts, we produce high-quality content that establishes your brand as an industry authority. Our data-driven approach ensures every piece of content serves a strategic purpose, driving organic traffic, generating leads, and nurturing prospects through the sales funnel."
    benefits={[
      "Increased organic traffic through SEO-optimized content",
      "Established thought leadership and brand authority",
      "Higher engagement and lead generation",
      "Consistent brand voice across all channels",
      "Content repurposing for maximum ROI",
      "Data-backed content performance tracking",
    ]}
    process={[
      { step: "Content Audit", desc: "Evaluate existing content assets and identify gaps in your content ecosystem." },
      { step: "Strategy & Calendar", desc: "Develop a content roadmap with topics, formats, and publishing schedules." },
      { step: "Creation & Optimization", desc: "Professional writers create SEO-optimized content aligned with search intent." },
      { step: "Distribution", desc: "Multi-channel content distribution to maximize reach and engagement." },
      { step: "Performance Analysis", desc: "Track content metrics and optimize strategy based on data insights." },
    ]}
    tools={["WordPress", "SEMrush", "Surfer SEO", "Grammarly", "BuzzSumo", "Google Analytics", "Ahrefs", "Jasper AI"]}
  />
);

export default ContentMarketing;
