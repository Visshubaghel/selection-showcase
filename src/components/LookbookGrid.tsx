import { useState, useCallback } from "react";
import LookbookModal, { type LookItem } from "@/components/LookbookModal";
import { useInView } from "@/hooks/useInView";

import lookMenCasual1 from "@/assets/look-men-casual-1.jpg";
import lookMenCasual2 from "@/assets/look-men-casual-2.jpg";
import lookMenFormal1 from "@/assets/look-men-formal-1.jpg";
import lookMenEthnic1 from "@/assets/look-men-ethnic-1.jpg";
import lookMenSport1 from "@/assets/look-men-sport-1.jpg";
import lookWomenCasual1 from "@/assets/look-women-casual-1.jpg";
import lookWomenCasual2 from "@/assets/look-women-casual-2.jpg";
import lookWomenFormal1 from "@/assets/look-women-formal-1.jpg";
import lookWomenEthnic1 from "@/assets/look-women-ethnic-1.jpg";
import lookWomenSport1 from "@/assets/look-women-sport-1.jpg";
import lookKidsFormal1 from "@/assets/look-kids-formal-1.jpg";
import lookKidsCasual1 from "@/assets/look-kids-casual-1.jpg";

const allLooks: LookItem[] = [
  // MEN
  {
    id: 1, image: lookMenCasual1, title: "The Riviera Blazer", category: "men", style: "casuals", aspectTall: true,
    description: "An unstructured camel linen blazer worn over ivory cashmere — the definition of effortless, warm-weather refinement. Paired with wide-leg sand trousers, hand-loomed in the finest Italian linen."
  },
  {
    id: 2, image: lookMenCasual2, title: "The Côte d'Azur Knit", category: "men", style: "casuals",
    description: "A navy ribbed turtleneck sweater in Scottish Merino wool, paired with pleated sand chinos tailored on the Via della Spiga. Brown suede Chelsea boots complete the look."
  },
  {
    id: 3, image: lookMenFormal1, title: "The Midnight Tuxedo", category: "men", style: "formals", aspectWide: true,
    description: "A midnight blue tuxedo with shawl lapels in Duchesse satin. Worn here over a white piqué dress shirt and black barathea bow tie. The gold of the ballroom finds its equal in the wearer."
  },
  {
    id: 4, image: lookMenEthnic1, title: "The Ivory Sherwani", category: "men", style: "ethnic", aspectTall: true,
    description: "An ivory silk sherwani adorned with hand-worked gold zardozi embroidery. A testament to the South Asian artisans of our atelier in Delhi — three hundred hours of embroidery in a single garment."
  },
  {
    id: 5, image: lookMenSport1, title: "The Athletic Form", category: "men", style: "sportswear",
    description: "A sleek charcoal performance zip-jacket in recycled technical fabric. Minimalist aesthetics for the man who moves with intention. Engineered for motion, conceived for elegance."
  },
  // WOMEN
  {
    id: 6, image: lookWomenCasual1, title: "The Cashmere Shore", category: "women", style: "casuals", aspectTall: true,
    description: "An ivory oversized cashmere crewneck over wide-leg ivory trousers. Shot at dawn on the white sands of Formentera — the first light of morning on the finest fibres in the world."
  },
  {
    id: 7, image: lookWomenCasual2, title: "The Parisian Overcoat", category: "women", style: "casuals",
    description: "A structured camel herringbone overcoat worn over a black turtleneck and fitted trousers. The epitome of the Paris autumn — architecturally precise, effortlessly worn."
  },
  {
    id: 8, image: lookWomenFormal1, title: "The Black Velvet Gown", category: "women", style: "formals", aspectTall: true,
    description: "A floor-length off-shoulder velvet ball gown with a hand-ruched bodice and cathedral train. Worn under the gold chandeliers of a grand Parisian hôtel particulier, this is the gown that stops time."
  },
  {
    id: 9, image: lookWomenEthnic1, title: "The Golden Lehenga", category: "women", style: "ethnic",
    description: "An exquisite champagne silk lehenga hand-embroidered with gold zardozi and kundan work. Each motif — a peacock, a lotus, a vine — is sewn by master karigars in Lucknow. Takes six months to complete."
  },
  {
    id: 10, image: lookWomenSport1, title: "The Ocean Terrace Set", category: "women", style: "sportswear",
    description: "A champagne-sheen technical crop jacket and ivory high-waisted leggings. Premium performance fabrication meets the aesthetics of a sun-drenched Mediterranean morning."
  },
  // KIDS
  {
    id: 11, image: lookKidsFormal1, title: "The Grand Hotel Suit", category: "kids", style: "formals", aspectWide: true,
    description: "Two miniature navy tailcoats with champagne brocade waistcoats, hand-stitched in our children's atelier. For children who understand that a grand entrance is everything."
  },
  {
    id: 12, image: lookKidsCasual1, title: "The Provencal Linen Dress", category: "kids", style: "casuals", aspectTall: true,
    description: "A hand-embroidered ivory linen smock dress with a Peter Pan collar detailed in wildflower embroidery. Worn in the lavender gardens of Provence — the childhood our mothers dreamed of."
  },
];

type Category = "all" | "men" | "women" | "kids";
type Style = "all" | "casuals" | "formals" | "ethnic" | "sportswear";

interface LookbookGridProps {
  initialCategory?: Category;
}

export default function LookbookGrid({ initialCategory = "all" }: LookbookGridProps) {
  const [category, setCategory] = useState<Category>(initialCategory);
  const [style, setStyle] = useState<Style>("all");
  const [selectedItem, setSelectedItem] = useState<LookItem | null>(null);

  const categories: { value: Category; label: string }[] = [
    { value: "all", label: "All" },
    { value: "men", label: "Men" },
    { value: "women", label: "Women" },
    { value: "kids", label: "Children" },
  ];

  const styles: { value: Style; label: string }[] = [
    { value: "all", label: "All Styles" },
    { value: "casuals", label: "Casuals" },
    { value: "formals", label: "Formals" },
    { value: "ethnic", label: "Ethnic" },
    { value: "sportswear", label: "Sportswear" },
  ];

  const filtered = allLooks.filter((look) => {
    const catMatch = category === "all" || look.category === category;
    const styleMatch = style === "all" || look.style === style;
    return catMatch && styleMatch;
  });

  const handleItemClick = useCallback((item: LookItem) => {
    setSelectedItem(item);
    document.body.style.overflow = "hidden";
  }, []);

  const handleClose = useCallback(() => {
    setSelectedItem(null);
    document.body.style.overflow = "";
  }, []);

  return (
    <>
      {/* Filter bar */}
      <div className="sticky top-16 md:top-20 z-30 bg-ivory/95 backdrop-blur-sm border-b border-[hsl(var(--divider))] py-4 px-6">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          {/* Category */}
          <div className="flex gap-1">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => { setCategory(cat.value); setStyle("all"); }}
                className={`label-spaced text-[10px] px-4 py-2 transition-all duration-300 ${
                  category === cat.value
                    ? "bg-charcoal text-ivory"
                    : "text-muted-foreground hover:text-charcoal"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-5 bg-[hsl(var(--divider))]" />

          {/* Style */}
          <div className="flex gap-1 flex-wrap">
            {styles.map((s) => (
              <button
                key={s.value}
                onClick={() => setStyle(s.value)}
                className={`label-spaced text-[10px] px-3 py-2 transition-all duration-300 ${
                  style === s.value
                    ? "text-champagne border-b border-champagne"
                    : "text-muted-foreground hover:text-charcoal"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Count */}
          <p className="label-spaced text-muted-foreground text-[9px]">
            {filtered.length} Look{filtered.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-screen-xl mx-auto px-6 py-16">
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="display-sm font-display italic text-muted-foreground">
              No looks found for this selection.
            </p>
          </div>
        ) : (
          <div className="lookbook-grid">
            {filtered.map((item) => (
              <LookbookItem key={item.id} item={item} onClick={handleItemClick} />
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedItem && (
        <LookbookModal item={selectedItem} onClose={handleClose} />
      )}
    </>
  );
}

function LookbookItem({
  item,
  onClick,
}: {
  item: LookItem;
  onClick: (item: LookItem) => void;
}) {
  const { ref, inView } = useInView(0.05);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`lookbook-item fade-up ${inView ? "visible" : ""}`}
    >
      <div
        className="img-editorial cursor-pointer group relative overflow-hidden"
        onClick={() => onClick(item)}
      >
        <img
          src={item.image}
          alt={item.title}
          className={`w-full object-cover transition-transform duration-[900ms] ease-luxury group-hover:scale-105 group-hover:saturate-[85%] ${
            item.aspectTall ? "aspect-[3/4]" : item.aspectWide ? "aspect-[4/3]" : "aspect-[3/4]"
          }`}
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-all duration-700 flex items-end">
          <div className="p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <p className="label-spaced text-champagne text-[9px] mb-1">{item.style}</p>
            <p className="font-display text-ivory text-base italic">{item.title}</p>
            <p className="label-spaced text-ivory/60 text-[9px] mt-2">View Look →</p>
          </div>
        </div>
      </div>
    </div>
  );
}
