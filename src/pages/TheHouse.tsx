import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useInView } from "@/hooks/useInView";

import heritageAtelier from "@/assets/heritage-atelier.jpg";
import heritageCraft from "@/assets/heritage-craft.jpg";
import heroMen from "@/assets/hero-men.jpg";
import craftsmanshipHeritage from "@/assets/craftsmanship-heritage.jpg";

const boutiques = [
  {
    city: "Mumbai",
    address: "Jio World Drive, Level 2, Bandra Kurla Complex, Mumbai 400051, India",
    phone: "+91 22 6173 9000",
    hours: "Mon – Sun, 11:00 – 21:00",
    description: "Our singular Indian maison. An intimate sanctuary of curated style nestled in the heart of Mumbai's most discerning address, offering bespoke consultations by appointment.",
  },
];

export default function TheHouse() {
  return (
    <div className="bg-ivory min-h-screen">
      <Navigation />

      {/* Hero */}
      <HouseHero />

      {/* Heritage story */}
      <HeritageSection />

      {/* Craft section */}
      <CraftSection />

      {/* Craftsmanship & Heritage */}
      <CraftsmanshipSection />

      <Footer />
    </div>
  );
}

function HouseHero() {
  return (
    <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
      <img
        src={heritageAtelier}
        alt="Selection Atelier"
        className="w-full h-full object-cover object-center animate-ken-burns"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/20 to-charcoal/60" />
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-24 text-center px-6">
        <p className="label-spaced text-champagne mb-5 animate-[heroTextReveal_0.9s_ease_forwards]" style={{ animationDelay: "0.2s", opacity: 0 }}>
          Est. 1974 · Paris
        </p>
        <h1 className="display-xl text-ivory animate-[heroTextReveal_0.9s_ease_forwards]" style={{ animationDelay: "0.4s", opacity: 0 }}>
          The House of<br />
          <span className="italic">Selection</span>
        </h1>
        <div className="divider-gold w-12 mt-8 animate-[heroTextReveal_0.9s_ease_forwards]" style={{ animationDelay: "0.6s", opacity: 0 }} />
      </div>
    </div>
  );
}

function HeritageSection() {
  const left = useInView();
  const right = useInView();

  return (
    <section className="py-28 px-6">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Image */}
        <div
          ref={left.ref as React.RefObject<HTMLDivElement>}
          className={`fade-up ${left.inView ? "visible" : ""}`}
        >
          <div className="img-editorial aspect-[4/5] overflow-hidden">
            <img
              src={heroMen}
              alt="Heritage"
              className="w-full h-full object-cover transition-transform duration-[900ms] ease-luxury hover:scale-105"
            />
          </div>
        </div>

        {/* Text */}
        <div
          ref={right.ref as React.RefObject<HTMLDivElement>}
          className={`fade-up ${right.inView ? "visible" : ""}`}
          style={{ transitionDelay: "150ms" }}
        >
          <p className="label-spaced text-champagne mb-6">Our Heritage</p>
          <div className="divider-gold w-10 mb-8" />
          <h2 className="display-lg font-display text-charcoal mb-8">
            A maison built<br />
            on <span className="italic">conviction</span>
          </h2>
          <p className="body-elegant text-muted-foreground mb-6 leading-[2]">
            In 1974, Édouard de Selection left his post at Balenciaga with a single belief: that true luxury is not about extravagance, but about the irreplaceable feeling of a garment that fits as if it were made for you alone.
          </p>
          <p className="body-elegant text-muted-foreground mb-6 leading-[2]">
            He opened a small atelier on Avenue Montaigne with three tailors and a bolt of the finest English worsted wool. Within five years, the waiting list for a Selection suit stretched to fourteen months.
          </p>
          <p className="body-elegant text-muted-foreground mb-10 leading-[2]">
            Today, Selection has found its home in India — bringing the same uncompromising standards and hand-finished mastery that Édouard set in that first, modest salon to a new generation of discerning patrons.
          </p>
          <a href="#contact" className="btn-editorial">
            Inquire about bespoke →
          </a>
        </div>
      </div>
    </section>
  );
}

function CraftSection() {
  const { ref, inView } = useInView();

  const pillars = [
    {
      number: "01",
      title: "The Fabric",
      text: "Every material is sourced directly from the mill — Italian silks from Como, Scottish wools from the Borders, Egyptian cottons from the Nile Delta. Nothing arrives by proxy.",
    },
    {
      number: "02",
      title: "The Pattern",
      text: "Each pattern is hand-drafted by our master cutters. No digitisation. No short-cuts. A Selection pattern takes four days to draw and is kept in our archive indefinitely.",
    },
    {
      number: "03",
      title: "The Hand",
      text: "Our garments pass through forty-eight stages of quality control, each performed by a different artisan. The final stitch — always — is sewn by hand.",
    },
  ];

  return (
    <section className="py-28 px-6 bg-charcoal">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`grid md:grid-cols-2 gap-12 items-end mb-20 fade-up ${inView ? "visible" : ""}`}
        >
          <div>
            <p className="label-spaced text-champagne mb-6">The Craft</p>
            <h2 className="display-lg font-display text-ivory">
              Three pillars of<br />
              <span className="italic text-champagne">uncompromising</span><br />
              craft
            </h2>
          </div>
          <div>
            <div className="img-editorial aspect-video overflow-hidden">
              <img
                src={heritageCraft}
                alt="Craftsmanship"
                className="w-full h-full object-cover transition-transform duration-[900ms] ease-luxury hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-8 border-t border-ivory/10 pt-16">
          {pillars.map((pillar, i) => (
            <CraftPillar key={pillar.number} pillar={pillar} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CraftPillar({ pillar, delay }: { pillar: { number: string; title: string; text: string }; delay: number }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`fade-up ${inView ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className="font-display text-champagne/30 mb-4" style={{ fontSize: "3.5rem", fontWeight: 400 }}>
        {pillar.number}
      </p>
      <div className="divider-gold w-8 mb-5" />
      <h3 className="display-sm font-display text-ivory mb-4 italic">{pillar.title}</h3>
      <p className="font-body text-ivory/50 text-sm font-light leading-relaxed">{pillar.text}</p>
    </div>
  );
}

function BoutiquesSection() {
  const { ref, inView } = useInView();

  return (
    <section className="py-28 px-6">
      <div className="max-w-screen-xl mx-auto">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 fade-up ${inView ? "visible" : ""}`}
        >
          <p className="label-spaced text-champagne mb-4">Find a Boutique</p>
          <div className="divider-gold w-12 mx-auto mb-6" />
          <h2 className="display-lg font-display text-charcoal">
            Our Global<br />
            <span className="italic">Maisons</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {boutiques.map((b, i) => (
            <BoutiqueCard key={b.city} boutique={b} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BoutiqueCard({ boutique, delay }: { boutique: typeof boutiques[0]; delay: number }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`fade-up ${inView ? "visible" : ""} border border-[hsl(var(--divider))] p-8 hover:border-champagne transition-colors duration-500 group`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-display text-charcoal text-xl group-hover:italic transition-all duration-300">
          {boutique.city}
        </h3>
        <MapPin size={14} className="text-champagne mt-1 shrink-0" />
      </div>
      <div className="divider-gold w-8 mb-5" />
      <p className="font-body text-sm text-muted-foreground font-light mb-5 leading-relaxed italic">
        "{boutique.description}"
      </p>
      <div className="space-y-2 text-sm">
        <div className="flex items-start gap-2 text-charcoal/70">
          <MapPin size={12} className="mt-0.5 shrink-0 text-champagne" />
          <span className="font-body font-light">{boutique.address}</span>
        </div>
        <div className="flex items-center gap-2 text-charcoal/70">
          <Phone size={12} className="shrink-0 text-champagne" />
          <span className="font-body font-light">{boutique.phone}</span>
        </div>
        <div className="flex items-center gap-2 text-charcoal/70">
          <Clock size={12} className="shrink-0 text-champagne" />
          <span className="font-body font-light">{boutique.hours}</span>
        </div>
      </div>
    </div>
  );
}

function ContactSection() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-28 px-6 bg-secondary">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`max-w-2xl mx-auto fade-up ${inView ? "visible" : ""}`}
      >
        <div className="text-center mb-14">
          <p className="label-spaced text-champagne mb-4">Contact</p>
          <div className="divider-gold w-12 mx-auto mb-6" />
          <h2 className="display-lg font-display text-charcoal">
            Begin a<br />
            <span className="italic">Conversation</span>
          </h2>
          <p className="body-elegant text-muted-foreground mt-4">
            For bespoke commissions, press inquiries, or boutique appointments.
          </p>
        </div>

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
                className="bg-transparent border border-[hsl(var(--divider))] border-l-0 sm:border-l-0 px-5 py-4 font-body text-sm font-light placeholder:text-muted-foreground focus:outline-none focus:border-champagne transition-colors duration-300"
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
    </section>
  );
}
