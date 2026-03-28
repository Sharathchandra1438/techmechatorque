import ServiceDetail from "@/components/ServiceDetail";
import { Zap } from "lucide-react";

const Automation = () => (
  <ServiceDetail
    title="Automation"
    subtitle="Streamline workflows and scale efficiently"
    icon={<Zap className="text-primary" size={32} />}
    overview="Our marketing and business automation solutions help you streamline repetitive tasks, nurture leads, and scale operations without proportionally increasing resources. We design and implement intelligent automation workflows that connect your marketing, sales, and customer service processes into a unified, efficient system. From email drip campaigns to CRM integrations, chatbot deployments to reporting automation, we build systems that work around the clock. Our automation strategies are designed to improve lead quality, reduce response times, and deliver personalized experiences at scale."
    benefits={[
      "Save 20+ hours per week on repetitive tasks",
      "Improved lead nurturing and conversion rates",
      "Personalized customer experiences at scale",
      "Unified data across marketing and sales platforms",
      "Reduced human error and operational costs",
      "Real-time reporting and performance dashboards",
    ]}
    process={[
      { step: "Workflow Audit", desc: "Map existing processes and identify automation opportunities with highest impact." },
      { step: "System Design", desc: "Architect automation workflows with clear triggers, actions, and decision points." },
      { step: "Integration Setup", desc: "Connect tools, platforms, and data sources into a unified automation ecosystem." },
      { step: "Testing & Launch", desc: "Thorough testing of all automation sequences before going live." },
      { step: "Optimization", desc: "Monitor performance metrics and refine workflows for continuous improvement." },
    ]}
    tools={["HubSpot", "Zapier", "Make (Integromat)", "Mailchimp", "ActiveCampaign", "Salesforce", "n8n", "Power Automate"]}
  />
);

export default Automation;
