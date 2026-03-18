import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isHome = location.pathname === "/";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled || !isHome
            ? "bg-ivory/95 backdrop-blur-sm border-b border-[hsl(var(--divider))]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 md:h-20">
          {/* Left nav links */}
          <div className="hidden md:flex items-center gap-10">
            <Link
              to="/"
              className={`nav-link ${scrolled || !isHome ? "text-charcoal" : "text-ivory"} ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/collections"
              className={`nav-link ${scrolled || !isHome ? "text-charcoal" : "text-ivory"} ${
                location.pathname === "/collections" ? "active" : ""
              }`}
            >
              Collections
            </Link>
          </div>

          {/* Brand name – center */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2">
            <span
              className={`font-display font-normal tracking-[0.25em] text-sm md:text-base uppercase transition-colors duration-700 ${
                scrolled || !isHome ? "text-charcoal" : "text-ivory"
              }`}
            >
              Selection
            </span>
          </Link>

          {/* Right nav links */}
          <div className="hidden md:flex items-center gap-10">
            <Link
              to="/the-house"
              className={`nav-link ${scrolled || !isHome ? "text-charcoal" : "text-ivory"} ${
                location.pathname === "/the-house" ? "active" : ""
              }`}
            >
              The House
            </Link>
          <Link
              to="/the-house#contact"
              className={`nav-link ${scrolled || !isHome ? "text-charcoal" : "text-ivory"}`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden ml-auto transition-colors duration-700 ${
              scrolled || !isHome ? "text-charcoal" : "text-ivory"
            }`}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-charcoal flex flex-col items-center justify-center gap-10">
          <span className="font-display text-ivory tracking-[0.3em] text-sm uppercase mb-8">
            Selection
          </span>
          {[
            { to: "/", label: "Home" },
            { to: "/collections", label: "Collections" },
            { to: "/the-house", label: "The House" },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="font-display italic text-ivory text-3xl hover:text-champagne transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
          <div className="divider-gold w-16 mt-4" />
          <a
            href="mailto:inquiries@selection.com"
            className="label-spaced text-champagne mt-2"
          >
            Contact Us
          </a>
        </div>
      )}
    </>
  );
}
