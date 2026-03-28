import ServiceDetail from "@/components/ServiceDetail";
import { Search } from "lucide-react";

const SEO = () => (
  <ServiceDetail
    title="SEO"
    subtitle="Dominate search rankings organically"
    icon={<Search className="text-primary" size={32} />}
    overview="Our comprehensive SEO strategies are designed to increase your organic visibility, drive qualified traffic, and improve conversion rates. We combine technical excellence with content strategy and authority building to deliver sustainable rankings. Our team stays ahead of algorithm updates and industry trends to ensure your website maintains its competitive edge. From local SEO to enterprise-level campaigns, we tailor our approach to match your specific market and business objectives, delivering measurable growth in organic search performance."
    benefits={[
      "Increased organic traffic and visibility",
      "Higher search engine rankings for target keywords",
      "Improved website authority and domain rating",
      "Better user experience through technical optimization",
      "Comprehensive competitor analysis and gap identification",
      "Local SEO optimization for geo-targeted visibility",
    ]}
    process={[
      { step: "Technical Audit", desc: "In-depth analysis of your website's technical health, crawlability, and indexation issues." },
      { step: "Keyword Research", desc: "Data-driven keyword strategy targeting high-intent search queries with optimal competition balance." },
      { step: "On-Page Optimization", desc: "Content optimization, meta tags, schema markup, and internal linking structure improvements." },
      { step: "Content Strategy", desc: "Creation of SEO-optimized content that addresses user intent and builds topical authority." },
      { step: "Link Building", desc: "Strategic outreach and quality backlink acquisition to boost domain authority." },
      { step: "Monitoring & Reporting", desc: "Monthly performance reports with actionable insights and strategy refinements." },
    ]}
    tools={["Google Search Console", "SEMrush", "Ahrefs", "Screaming Frog", "Google Analytics", "Moz", "Surfer SEO", "Schema.org"]}
  />
);

export default SEO;
