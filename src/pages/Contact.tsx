import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useInView } from "@/hooks/useInView";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-ivory min-h-screen">
      <Navigation />

      {/* Hero Banner */}
      <ContactHero />

      {/* Split-screen Contact Section */}
      <ContactSplit />

      <Footer />
    </div>
  );
}

function ContactHero() {
  const { ref, inView } = useInView();

  return (
    <div className="pt-20 md:pt-24 pb-16 md:pb-20 bg-secondary">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`max-w-screen-xl mx-auto px-6 lg:px-12 text-center fade-up ${inView ? "visible" : ""}`}
      >
        <p
          className="label-spaced text-champagne mb-5 animate-[heroTextReveal_0.9s_ease_forwards]"
          style={{ animationDelay: "0.2s", opacity: 0 }}
        >
          Get in Touch
        </p>
        <h1
          className="display-xl text-charcoal animate-[heroTextReveal_0.9s_ease_forwards]"
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          Begin a<br />
          <span className="italic">Conversation</span>
        </h1>
        <div
          className="divider-gold w-12 mx-auto mt-8 animate-[heroTextReveal_0.9s_ease_forwards]"
          style={{ animationDelay: "0.6s", opacity: 0 }}
        />
        <p
          className="body-elegant text-muted-foreground mt-6 max-w-lg mx-auto animate-[heroTextReveal_0.9s_ease_forwards]"
          style={{ animationDelay: "0.8s", opacity: 0 }}
        >
          For bespoke commissions, press inquiries, or boutique appointments — we welcome your correspondence.
        </p>
      </div>
    </div>
  );
}

function ContactSplit() {
  const formRef = useInView();
  const detailsRef = useInView();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-20">
        {/* Left – Form */}
        <div
          ref={formRef.ref as React.RefObject<HTMLDivElement>}
          className={`fade-up ${formRef.inView ? "visible" : ""}`}
        >
          <p className="label-spaced text-champagne mb-4">The Enquiry</p>
          <div className="divider-gold w-10 mb-8" />
          <h2 className="display-lg font-display text-charcoal mb-10">
            Write to<br />
            <span className="italic">Selection</span>
          </h2>

          {sent ? (
            <div className="text-center py-16 border border-champagne">
              <p className="label-spaced text-champagne mb-4">Message Received</p>
              <h3 className="display-sm font-display italic text-charcoal">
                We will be in touch shortly.
              </h3>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="bg-transparent border border-[hsl(var(--divider))] px-5 py-4 font-body text-sm font-light placeholder:text-muted-foreground focus:outline-none focus:border-champagne transition-colors duration-300"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="bg-transparent border border-[hsl(var(--divider))] sm:border-l-0 px-5 py-4 font-body text-sm font-light placeholder:text-muted-foreground focus:outline-none focus:border-champagne transition-colors duration-300"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full bg-transparent border border-[hsl(var(--divider))] border-t-0 px-5 py-4 font-body text-sm font-light placeholder:text-muted-foreground focus:outline-none focus:border-champagne transition-colors duration-300"
              />
              <textarea
                rows={6}
                placeholder="Your message…"
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-transparent border border-[hsl(var(--divider))] border-t-0 px-5 py-4 font-body text-sm font-light placeholder:text-muted-foreground focus:outline-none focus:border-champagne transition-colors duration-300 resize-none"
              />
              <button type="submit" className="btn-editorial w-full justify-center border-t-0 py-5">
                Send Message →
              </button>
            </form>
          )}
        </div>

        {/* Right – Boutique Details & Map */}
        <div
          ref={detailsRef.ref as React.RefObject<HTMLDivElement>}
          className={`fade-up ${detailsRef.inView ? "visible" : ""}`}
          style={{ transitionDelay: "150ms" }}
        >
          <p className="label-spaced text-champagne mb-4">Visit Our Boutique</p>
          <div className="divider-gold w-10 mb-8" />
          <h2 className="display-lg font-display text-charcoal mb-10">
            Our<br />
            <span className="italic">Maison</span>
          </h2>

          {/* Details */}
          <div className="space-y-6 mb-12">
            <div className="flex items-start gap-4">
              <MapPin size={16} className="text-champagne mt-1 shrink-0" />
              <div>
                <p className="font-display text-charcoal text-sm tracking-wide mb-1">Address</p>
                <p className="font-body text-muted-foreground text-sm font-light leading-relaxed">
                  Jio World Drive, Level 2<br />
                  Bandra Kurla Complex<br />
                  Mumbai 400051, India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone size={16} className="text-champagne mt-1 shrink-0" />
              <div>
                <p className="font-display text-charcoal text-sm tracking-wide mb-1">Telephone</p>
                <p className="font-body text-muted-foreground text-sm font-light">
                  +91 22 6173 9000
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail size={16} className="text-champagne mt-1 shrink-0" />
              <div>
                <p className="font-display text-charcoal text-sm tracking-wide mb-1">Inquiries</p>
                <p className="font-body text-muted-foreground text-sm font-light mb-1">
                  General: inquiries@selection.com
                </p>
                <p className="font-body text-muted-foreground text-sm font-light">
                  Press: press@selection.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock size={16} className="text-champagne mt-1 shrink-0" />
              <div>
                <p className="font-display text-charcoal text-sm tracking-wide mb-1">Opening Hours</p>
                <p className="font-body text-muted-foreground text-sm font-light leading-relaxed">
                  Monday – Saturday: 10:00 AM – 7:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="border border-[hsl(var(--divider))] overflow-hidden">
            <iframe
              title="Selection Boutique Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.2!2d72.8686!3d19.0558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8d0!2sJio%20World%20Drive!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0, filter: "grayscale(100%) contrast(1.1) opacity(0.7)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}