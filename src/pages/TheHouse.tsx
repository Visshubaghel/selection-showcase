import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useInView } from "@/hooks/useInView";

import heritageAtelier from "@/assets/heritage-atelier.jpg";
import heritageCraft from "@/assets/heritage-craft.jpg";
import heroMen from "@/assets/hero-men.jpg";
import craftsmanshipHeritage from "@/assets/craftsmanship-heritage.jpg";

export default function TheHouse() {
  return (
    <div className="bg-ivory min-h-screen">
      <Navigation />
      <HouseHero />
      <HeritageSection />
      <CraftSection />
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
          <a href="/contact" className="btn-editorial">
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

function CraftsmanshipSection() {
  const left = useInView();
  const right = useInView();

  return (
    <section className="py-28 px-6">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div
          ref={left.ref as React.RefObject<HTMLDivElement>}
          className={`fade-up ${left.inView ? "visible" : ""}`}
        >
          <div className="img-editorial aspect-[4/5] overflow-hidden">
            <img
              src={craftsmanshipHeritage}
              alt="Craftsmanship and heritage"
              className="w-full h-full object-cover transition-transform duration-[900ms] ease-luxury hover:scale-105"
            />
          </div>
        </div>

        <div
          ref={right.ref as React.RefObject<HTMLDivElement>}
          className={`fade-up ${right.inView ? "visible" : ""}`}
          style={{ transitionDelay: "150ms" }}
        >
          <p className="label-spaced text-champagne mb-6">Craftsmanship & Heritage</p>
          <div className="divider-gold w-10 mb-8" />
          <h2 className="display-lg font-display text-charcoal mb-8">
            An unwavering devotion<br />
            to <span className="italic">excellence</span>
          </h2>
          <p className="body-elegant text-muted-foreground mb-6 leading-[2]">
            Every Selection garment begins with the world's most exceptional materials — Italian silks from the looms of Como, Scottish cashmere from the Borders, and the finest Egyptian cotton from the banks of the Nile. We accept nothing less than perfection at the source.
          </p>
          <p className="body-elegant text-muted-foreground mb-6 leading-[2]">
            Our master tailors, each with decades of expertise, shape these fabrics through forty-eight stages of meticulous handwork. From the first cut to the final press, every stitch is placed with deliberate intention — ensuring that each piece carries the quiet confidence of true craftsmanship.
          </p>
          <p className="body-elegant text-muted-foreground leading-[2]">
            This is the promise of Selection: garments that transcend seasons, that age with grace, and that honour the timeless art of dressing well.
          </p>
        </div>
      </div>
    </section>
  );
}