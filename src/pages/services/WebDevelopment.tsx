import ServiceDetail from "@/components/ServiceDetail";
import { Globe } from "lucide-react";

const WebDevelopment = () => (
  <ServiceDetail
    title="Web Development"
    subtitle="Custom digital experiences built to convert"
    icon={<Globe className="text-primary" size={32} />}
    overview="At TMT, we craft bespoke websites and web applications that are engineered for performance, scalability, and conversion. Our development process combines modern frameworks with proven UX principles to create digital experiences that captivate visitors and drive business results. From responsive corporate websites to complex e-commerce platforms, we build solutions that grow with your business. Every project starts with a deep understanding of your audience and business goals, ensuring the final product isn't just visually stunning but strategically effective."
    benefits={[
      "Custom-designed, fully responsive layouts for all devices",
      "SEO-optimized architecture for maximum visibility",
      "Fast loading speeds with optimized performance",
      "Secure hosting and SSL implementation",
      "Content management system integration",
      "E-commerce functionality with payment gateways",
      "Analytics and conversion tracking setup",
      "Ongoing support and maintenance options",
    ]}
    process={[
      { step: "Discovery & Planning", desc: "We analyze your business goals, target audience, and competitors to create a detailed project roadmap." },
      { step: "UI/UX Design", desc: "Our designers create wireframes and high-fidelity mockups for your approval before development begins." },
      { step: "Development", desc: "Clean, maintainable code built with modern frameworks and best practices for performance." },
      { step: "Testing & QA", desc: "Rigorous testing across devices and browsers to ensure flawless functionality." },
      { step: "Launch & Optimization", desc: "Smooth deployment with post-launch monitoring and performance optimization." },
    ]}
    tools={["React", "Next.js", "TypeScript", "Tailwind CSS", "WordPress", "Shopify", "Node.js", "PostgreSQL", "AWS", "Vercel"]}
  />
);

export default WebDevelopment;
