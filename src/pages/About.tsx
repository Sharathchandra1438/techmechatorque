// import ScrollReveal from "@/components/ScrollReveal";
// import { Target, Eye, Award, Users, Briefcase, TrendingUp, Zap, ShieldCheck } from "lucide-react";

// // const stats = [
// //   { value: "500+", label: "Projects Delivered" },
// //   { value: "200+", label: "Happy Clients" },
// //   { value: "50+", label: "Team Members" },
// //   { value: "98%", label: "Client Retention" },
// // ];

// const team = [
//   { name: "Chilakamarry Jaya Chandra Reddy", role: "CEO & Founder", initials: "CJ" },
//   { name: "Konam Venkat Asrith", role: "Head of Marketing", initials: "KA" },
//   { name: "Rekhandar Sharath Chandra", role: "Intern", initials: "RS" },
// ];

// const About = () => (
//   <>
//     {/* Hero */}
//     <section className="section-padding">
//       <div className="container-main">
//         <ScrollReveal>
//           <div className="text-center mb-16">
//             <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">About Us</p>
//             <h1 className="heading-xl mb-6">
//               The Force Behind <span className="text-gradient">TMT</span>
//             </h1>
//             <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
//               Tech Mecha Torque was founded with a singular vision: to bridge the gap between technology and marketing. Based in Sangareddy, we've grown from a small team of passionate digital enthusiasts into a full-service agency serving clients across India and beyond. Our approach combines engineering precision with creative marketing to deliver campaigns that don't just look good — they perform.
//             </p>
//           </div>
//         </ScrollReveal>
//       </div>
//     </section>

//     {/* Mission & Vision */}
//     <section className="section-padding bg-card/50">
//       <div className="container-main">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <ScrollReveal>
//             <div className="card-premium h-full">
//               <Target className="text-primary mb-4" size={36} />
//               <h2 className="heading-md mb-4">Our Mission</h2>
//               <p className="text-muted-foreground leading-relaxed">
//                 To empower businesses with data-driven digital strategies and cutting-edge technology solutions that deliver measurable growth. We believe every business deserves access to enterprise-level marketing tools and expertise.
//               </p>
//             </div>
//           </ScrollReveal>
//           <ScrollReveal delay={100}>
//             <div className="card-premium h-full">
//               <Eye className="text-primary mb-4" size={36} />
//               <h2 className="heading-md mb-4">Our Vision</h2>
//               <p className="text-muted-foreground leading-relaxed">
//                 To become India's most trusted digital growth partner, known for innovation, transparency, and results. We envision a world where technology amplifies human potential and every business can compete on a global stage.
//               </p>
//             </div>
//           </ScrollReveal>
//         </div>
//       </div>
//     </section>

//     {/* Why TMT */}
//     <section className="section-padding">
//       <div className="container-main">
//         <ScrollReveal>
//           <h2 className="heading-lg text-center mb-12">Why Choose <span className="text-gradient">TMT</span></h2>
//         </ScrollReveal>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {[
//             { icon: TrendingUp, title: "Results-Driven", desc: "Every campaign measured against clear KPIs and business objectives." },
//             { icon: Zap, title: "Agile Execution", desc: "Fast turnarounds without compromising on quality or strategy." },
//             { icon: ShieldCheck, title: "Transparent", desc: "Real-time reporting and honest communication at every stage." },
//             { icon: Award, title: "Industry Expertise", desc: "Deep knowledge across verticals from e-commerce to SaaS." },
//           ].map((item, i) => (
//             <ScrollReveal key={item.title} delay={i * 80}>
//               <div className="card-premium text-center h-full">
//                 <item.icon className="text-primary mx-auto mb-3" size={28} />
//                 <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
//                 <p className="text-sm text-muted-foreground">{item.desc}</p>
//               </div>
//             </ScrollReveal>
//           ))}
//         </div>
//       </div>
//     </section>

//     {/* Stats
//     <section className="section-padding bg-card/50">
//       <div className="container-main">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//           {stats.map((s, i) => (
//             <ScrollReveal key={s.label} delay={i * 80}>
//               <div className="text-center">
//                 <p className="text-4xl md:text-5xl font-heading font-bold text-gradient">{s.value}</p>
//                 <p className="text-sm text-muted-foreground mt-2">{s.label}</p>
//               </div>
//             </ScrollReveal>
//           ))}
//         </div>
//       </div>
//     </section> */}

//     {/* Team */}
//     <section className="section-padding">
//       <div className="container-main">
//         <ScrollReveal>
//           <h2 className="heading-lg text-center mb-12">Meet the <span className="text-gradient">Team</span></h2>
//         </ScrollReveal>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {team.map((member, i) => (
//             <ScrollReveal key={member.name} delay={i * 80}>
//               <div className="card-premium text-center">
//                 <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
//                   <span className="text-xl font-heading font-bold text-primary">{member.initials}</span>
//                 </div>
//                 <h3 className="font-heading font-semibold">{member.name}</h3>
//                 <p className="text-sm text-muted-foreground">{member.role}</p>
//               </div>
//             </ScrollReveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   </>
// );

// export default About;
