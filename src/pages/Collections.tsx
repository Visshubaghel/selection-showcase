import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import LookbookGrid from "@/components/LookbookGrid";
import Footer from "@/components/Footer";

export default function Collections() {
  const [searchParams] = useSearchParams();
  const [initialCategory, setInitialCategory] = useState<"all" | "men" | "women" | "kids">("all");

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat === "men" || cat === "women" || cat === "kids") {
      setInitialCategory(cat);
    }
  }, [searchParams]);

  return (
    <div className="bg-ivory min-h-screen">
      <Navigation />

      {/* Page header */}
      <div className="pt-32 pb-16 px-6 text-center bg-ivory">
        <p className="label-spaced text-champagne mb-5">The Lookbook</p>
        <div className="divider-gold w-12 mx-auto mb-7" />
        <h1 className="display-lg font-display text-charcoal">
          The Collections<br />
          <span className="italic">Spring / Summer 2025</span>
        </h1>
        <p className="body-elegant text-muted-foreground mt-6 max-w-lg mx-auto">
          An editorial journey through three worlds of Selection — each look a study in the art of dressing well.
        </p>
      </div>

      {/* Lookbook grid with filters */}
      <LookbookGrid initialCategory={initialCategory} />

      <Footer />
    </div>
  );
}
