import { useState, FormEvent } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <>
      <section className="section-padding">
        <div className="container-main">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Get In Touch</p>
              <h1 className="heading-xl mb-4">Contact <span className="text-gradient">Us</span></h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Ready to start your digital growth journey? Reach out and let's discuss how we can help.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <ScrollReveal>
              <form onSubmit={handleSubmit} className="card-premium space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Full Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      placeholder="+91 7993442607"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Service Interested In</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                    >
                      <option value="">Select a service</option>
                      <option>Web Development</option>
                      <option>SEO</option>
                      <option>PPC Advertising</option>
                      <option>Social Media Marketing</option>
                      <option>Content Marketing</option>
                      <option>Automation</option>
                      <option>IT Solutions</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all btn-primary-glow"
                >
                  Send Message <Send size={16} />
                </button>
              </form>
            </ScrollReveal>

            {/* Info */}
            <div className="space-y-8">
              <ScrollReveal delay={100}>
                <div className="card-premium">
                  <h3 className="font-heading font-semibold text-lg mb-4">Contact Information</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <MapPin size={20} className="text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium text-sm">Office Address</p>
                        <p className="text-sm text-muted-foreground">Sangareddy, Telangana 502 001, India</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Mail size={20} className="text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium text-sm">Email</p>
                        <a href="mailto:marketing@techmechatorque.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                          marketing@techmechatorque.com
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Phone size={20} className="text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-medium text-sm">Phone</p>
                        <a href="tel:+91 7993442607" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                          +91 7993442607
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="card-premium overflow-hidden">
                  <iframe
                    title="TMT Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.2944341828706!2d78.08271500000001!3d17.588748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbfa20b6061773%3A0x836c45a8a52a1686!2sOYO%2073247%20Cgr%20Manjeera!5e0!3m2!1sen!2sin!4v1774699311607!5m2!1sen!2sin"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/917993442607"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[hsl(142,70%,45%)] text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </>
  );
};

export default Contact;
