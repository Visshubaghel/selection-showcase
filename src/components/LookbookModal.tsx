interface LookItem {
  id: number;
  image: string;
  title: string;
  description: string;
  category: "men" | "women" | "kids";
  style: "casuals" | "formals" | "ethnic" | "sportswear";
  aspectTall?: boolean;
  aspectWide?: boolean;
}

interface LookbookModalProps {
  item: LookItem | null;
  onClose: () => void;
}

export default function LookbookModal({ item, onClose }: LookbookModalProps) {
  if (!item) return null;

  return (
    <div
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative bg-ivory max-w-5xl w-full mx-4 flex flex-col md:flex-row overflow-hidden max-h-[90vh] animate-[slideUp_0.5s_cubic-bezier(0.16,1,0.3,1)_forwards]">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 border border-charcoal flex items-center justify-center text-charcoal hover:bg-charcoal hover:text-ivory transition-colors duration-300"
          aria-label="Close"
        >
          <span className="text-xs leading-none">✕</span>
        </button>

        {/* Image */}
        <div className="w-full md:w-[55%] shrink-0">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-72 md:h-full object-cover object-top"
            style={{ maxHeight: "80vh" }}
          />
        </div>

        {/* Content */}
        <div className="flex-1 p-10 md:p-12 flex flex-col justify-center">
          <p className="label-spaced text-champagne mb-4">
            {item.category.charAt(0).toUpperCase() + item.category.slice(1)} · {item.style.charAt(0).toUpperCase() + item.style.slice(1)}
          </p>
          <div className="divider-gold w-10 mb-6" />
          <h2 className="display-md font-display text-charcoal mb-6">
            {item.title}
          </h2>
          <p className="body-elegant text-muted-foreground leading-loose mb-8">
            {item.description}
          </p>
          <div className="divider-thin mb-8" />
          <div className="flex flex-col gap-3">
            <p className="label-spaced text-charcoal text-[10px]">Material & Craft</p>
            <p className="font-body text-sm text-muted-foreground font-light">
              Hand-finished in our Parisian atelier using ethically sourced, premium-grade fabrics. Each piece passes through forty-eight stages of quality review before leaving the maison.
            </p>
          </div>
          <div className="mt-10">
            <a href="/the-house" className="btn-editorial">
              Inquire About This Look →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export type { LookItem };
