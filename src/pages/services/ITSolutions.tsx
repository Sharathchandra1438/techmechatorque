import ServiceDetail from "@/components/ServiceDetail";
import { Monitor } from "lucide-react";

const ITSolutions = () => (
  <ServiceDetail
    title="IT Solutions"
    subtitle="Enterprise-grade technology for modern businesses"
    icon={<Monitor className="text-primary" size={32} />}
    overview="Our IT solutions division provides comprehensive technology services that help businesses modernize their infrastructure, enhance security, and leverage cutting-edge tools for competitive advantage. From cloud migration to custom software development, cybersecurity audits to managed IT services, we deliver enterprise-grade solutions tailored to your specific needs and budget. Our team of certified engineers and architects work closely with your stakeholders to design technology strategies that align with your business objectives, ensuring seamless integration and maximum return on technology investment."
    benefits={[
      "Scalable cloud infrastructure solutions",
      "Enhanced cybersecurity and data protection",
      "Custom software and application development",
      "24/7 managed IT support and monitoring",
      "Technology consulting and digital transformation",
      "Disaster recovery and business continuity planning",
    ]}
    process={[
      { step: "Assessment", desc: "Comprehensive evaluation of your current IT infrastructure, security posture, and technology needs." },
      { step: "Architecture Design", desc: "Design scalable, secure technology solutions aligned with your growth trajectory." },
      { step: "Implementation", desc: "Phased deployment with minimal disruption to ongoing operations." },
      { step: "Migration & Integration", desc: "Seamless data migration and system integration with existing tools." },
      { step: "Support & Management", desc: "Ongoing monitoring, maintenance, and support to ensure optimal performance." },
    ]}
    tools={["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform", "Linux", "JIRA", "GitHub", "Cloudflare"]}
  />
);

export default ITSolutions;
