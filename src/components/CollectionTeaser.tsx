import { useRef } from "react";
import { Link } from "react-router-dom";
import { useInView } from "@/hooks/useInView";

import teaserMen from "@/assets/teaser-men.jpg";
import teaserWomen from "@/assets/teaser-women.jpg";
import teaserChildren from "@/assets/teaser-children.jpg";

const collections = [
  {
    image: teaserMen,
    label: "Men",
    title: "The Gentleman's Edit",
    description:
      "Architecture in cloth. Precision-cut silhouettes that command the room.",
    link: "/collections",
    param: "men",
  },
  {
    image: teaserWomen,
    label: "Women",
    title: "The Women's Collection",
    description:
      "Fluid grace and structured elegance — crafted for the woman who defines her own era.",
    link: "/collections",
    param: "women",
  },
  {
    image: teaserChildren,
    label: "Children",
    title: "The Children's House",
    description:
      "Miniature masterpieces. Heirlooms designed to be worn, remembered, and cherished.",
    link: "/collections",
    param: "kids",
  },
];

export default function CollectionTeaser() {
  return (
    <section className="py-28 px-6 bg-ivory">
      <div className="max-w-screen-xl mx-auto">
        {/* Section header */}
        <TeaserHeader />

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {collections.map((col, i) => (
            <TeaserCard key={col.label} item={col} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeaserHeader() {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`text-center fade-up ${inView ? "visible" : ""}`}
    >
      <p className="label-spaced text-champagne mb-4">The Collections</p>
      <div className="divider-gold w-16 mx-auto mb-6" />
      <h2 className="display-lg font-display text-charcoal">
        Three worlds.<br />
        <span className="italic">One vision.</span>
      </h2>
    </div>
  );
}

function TeaserCard({
  item,
  delay,
}: {
  item: (typeof collections)[0];
  delay: number;
}) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`fade-up ${inView ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Link to={`${item.link}?category=${item.param}`} className="block group">
        {/* Image */}
        <div className="img-editorial aspect-[3/4] overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover object-top transition-transform duration-[900ms] ease-luxury group-hover:scale-105 group-hover:saturate-[85%]"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-all duration-700" />
        </div>

        {/* Text */}
        <div className="pt-6 pb-2">
          <p className="label-spaced text-champagne mb-2">{item.label}</p>
          <h3 className="display-sm font-display text-charcoal mb-3 group-hover:italic transition-all duration-300">
            {item.title}
          </h3>
          <p className="body-elegant text-muted-foreground text-sm mb-5">
            {item.description}
          </p>
          <span className="label-spaced text-charcoal text-[10px] flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
            Explore the Edit <span>→</span>
          </span>
        </div>
      </Link>
    </div>
  );
}
