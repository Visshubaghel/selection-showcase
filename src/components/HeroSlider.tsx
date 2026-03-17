import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

import heroMen from "@/assets/hero-men.jpg";
import heroWomen from "@/assets/hero-women.jpg";
import heroBrand from "@/assets/hero-brand.jpg";

const slides = [
  {
    image: heroBrand,
    eyebrow: "Spring / Summer 2025",
    headline: "The Art of\nBeing Dressed",
    sub: "Where heritage meets contemporary vision",
    cta: "Explore the Collection",
    ctaTo: "/collections",
  },
  {
    image: heroMen,
    eyebrow: "Men's Collection",
    headline: "A Study\nin Tailoring",
    sub: "Precision-cut silhouettes for the modern gentleman",
    cta: "View the Lookbook",
    ctaTo: "/collections",
  },
  {
    image: heroWomen,
    eyebrow: "Women's Collection",
    headline: "Grace,\nUninterrupted",
    sub: "Fluid forms that move with purpose and poise",
    cta: "Discover the Women's Edit",
    ctaTo: "/collections",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [textVisible, setTextVisible] = useState(true);

  const goTo = useCallback(
    (index: number) => {
      if (animating) return;
      setAnimating(true);
      setTextVisible(false);
      setTimeout(() => {
        setCurrent(index);
        setTimeout(() => {
          setTextVisible(true);
          setAnimating(false);
        }, 100);
      }, 600);
    },
    [animating]
  );

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Image with Ken Burns */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={s.image}
            alt=""
            className={`w-full h-full object-cover object-top ${
              i === current ? "animate-ken-burns" : ""
            }`}
          />
        </div>
      ))}

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex items-end pb-24 md:pb-28 px-8 md:px-16 lg:px-20">
        <div className="max-w-2xl">
          <p
            className={`label-spaced text-champagne mb-6 transition-all duration-700 ${
              textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: "0ms" }}
          >
            {slide.eyebrow}
          </p>
          <h1
            className={`display-xl text-ivory whitespace-pre-line mb-6 transition-all duration-700 ${
              textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            {slide.headline}
          </h1>
          <p
            className={`font-body font-light text-ivory/70 text-base mb-10 transition-all duration-700 ${
              textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            {slide.sub}
          </p>
          <div
            className={`transition-all duration-700 ${
              textVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <Link to={slide.ctaTo} className="btn-editorial-light">
              {slide.cta}
              <span className="inline-block ml-1">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Slide controls */}
      <div className="absolute right-8 md:right-14 top-1/2 -translate-y-1/2 flex flex-col gap-4">
        <button
          onClick={prev}
          className="w-10 h-10 border border-ivory/40 flex items-center justify-center text-ivory hover:border-champagne hover:text-champagne transition-colors duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={next}
          className="w-10 h-10 border border-ivory/40 flex items-center justify-center text-ivory hover:border-champagne hover:text-champagne transition-colors duration-300"
          aria-label="Next slide"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-10 right-14 flex gap-3 items-center">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-500 ${
              i === current
                ? "w-10 h-px bg-champagne"
                : "w-4 h-px bg-ivory/40 hover:bg-ivory/70"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
        <span className="label-spaced text-ivory/40 text-[10px] ml-2">
          {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="label-spaced text-ivory/40 text-[9px]">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-ivory/40 to-transparent" />
      </div>
    </section>
  );
}
