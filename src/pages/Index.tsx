import HeroSlider from "@/components/HeroSlider";
import CollectionTeaser from "@/components/CollectionTeaser";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { useInView } from "@/hooks/useInView";

export default function Index() {
  return (
    <div className="bg-ivory min-h-screen">
      <Navigation />

      {/* Hero */}
      <HeroSlider />

      {/* Collections Teaser */}
      <CollectionTeaser />

      {/* Editorial Manifesto */}
      <EditorialManifesto />

      {/* Feature Strip */}
      <FeatureStrip />

      {/* CTA Banner */}
      <CtaBanner />

      <Footer />
    </div>
  );
}

function EditorialManifesto() {
  const left = useInView();
  const right = useInView();

  return (
    <section className="py-28 px-6 bg-charcoal overflow-hidden">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        {/* Left: Large italic quote */}
        <div
          ref={left.ref as React.RefObject<HTMLDivElement>}
          className={`fade-up ${left.inView ? "visible" : ""}`}
        >
          <p className="label-spaced text-champagne mb-8">The Manifesto</p>
          <blockquote className="font-display italic text-ivory leading-[1.1]" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
            "Clothing is the<br />
            <span className="text-champagne">architecture</span><br />
            of the self."
          </blockquote>
          <div className="divider-gold w-12 mt-10 mb-6" />
          <p className="label-spaced text-ivory/40 text-[9px]">
            — Édouard de Selection, Founder, 1974
          </p>
        </div>

        {/* Right: body text */}
        <div
          ref={right.ref as React.RefObject<HTMLDivElement>}
          className={`fade-up ${right.inView ? "visible" : ""}`}
          style={{ transitionDelay: "150ms" }}
        >
          <p className="body-elegant text-ivory/60 leading-[2] mb-8">
            Selection was born from a singular obsession: that the clothes we wear are not mere coverings, but the most intimate expression of who we are and who we aspire to become.
          </p>
          <p className="body-elegant text-ivory/60 leading-[2] mb-10">
            Since 1974, we have crafted each piece in our Parisian atelier, guided by the hands of master artisans and the eyes of uncompromising designers. We do not follow trends. We create the conversations that trends will one day echo.
          </p>
          <a href="/the-house" className="btn-gold">
            Our Heritage →
          </a>
        </div>
      </div>
    </section>
  );
}

function FeatureStrip() {
  const { ref, inView } = useInView();

  const features = [
    { number: "1974", label: "Year Founded" },
    { number: "48", label: "Stages of Quality Review" },
    { number: "6", label: "Global Ateliers" },
    { number: "300+", label: "Master Artisans" },
  ];

  return (
    <section className="py-20 px-6 bg-ivory border-y border-[hsl(var(--divider))]">
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8"
      >
        {features.map((f, i) => (
          <div
            key={f.label}
            className={`text-center fade-up ${inView ? "visible" : ""}`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <p className="font-display text-charcoal mb-2" style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 400 }}>
              {f.number}
            </p>
            <div className="divider-gold w-8 mx-auto mb-3" />
            <p className="label-spaced text-muted-foreground text-[10px]">{f.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CtaBanner() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      className="relative py-32 px-6 overflow-hidden bg-champagne-light"
    >
      {/* Decorative background text */}
      <p className="absolute inset-0 flex items-center justify-center font-display text-champagne/20 pointer-events-none select-none whitespace-nowrap"
        style={{ fontSize: "clamp(6rem, 15vw, 14rem)", fontWeight: 700, letterSpacing: "-0.04em" }}>
        Selection
      </p>

      <div className={`relative text-center max-w-2xl mx-auto fade-up ${inView ? "visible" : ""}`}>
        <p className="label-spaced text-champagne mb-6">New Arrivals</p>
        <h2 className="display-lg font-display text-charcoal mb-6">
          The Spring<br />
          <span className="italic">Lookbook Awaits</span>
        </h2>
        <p className="body-elegant text-muted-foreground mb-10">
          Fifty new looks. Three collections. One extraordinary season.
        </p>
        <a href="/collections" className="btn-editorial">
          Enter the Lookbook →
        </a>
      </div>
    </section>
  );
}
