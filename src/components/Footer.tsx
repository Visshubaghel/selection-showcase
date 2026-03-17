import { Link } from "react-router-dom";
import { Instagram, Twitter, Youtube } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-charcoal text-ivory">
      {/* Newsletter band */}
      <div className="border-b border-ivory/10 py-16 px-6">
        <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="label-spaced text-champagne mb-3">The Journal</p>
            <h3 className="display-sm text-ivory font-display italic">
              Enter the world of Selection
            </h3>
          </div>
          <div>
            {subscribed ? (
              <p className="label-spaced text-champagne">Thank you. You have been added to our list.</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-0">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="flex-1 bg-transparent border border-ivory/30 border-r-0 px-5 py-3 text-ivory placeholder:text-ivory/40 font-body text-sm font-light focus:outline-none focus:border-champagne transition-colors duration-300"
                />
                <button type="submit" className="btn-editorial-light shrink-0 px-6">
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="py-16 px-6">
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <p className="font-display tracking-[0.3em] text-lg uppercase mb-4 text-ivory">
              Selection
            </p>
            <p className="body-elegant text-ivory/50 text-sm leading-loose">
              Crafted for those who live beautifully. Est. 1974.
            </p>
            <div className="flex gap-5 mt-6">
              <a href="#" aria-label="Instagram" className="text-ivory/40 hover:text-champagne transition-colors duration-300">
                <Instagram size={16} />
              </a>
              <a href="#" aria-label="Twitter" className="text-ivory/40 hover:text-champagne transition-colors duration-300">
                <Twitter size={16} />
              </a>
              <a href="#" aria-label="YouTube" className="text-ivory/40 hover:text-champagne transition-colors duration-300">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Collections */}
          <div>
            <p className="label-spaced text-champagne mb-6">Collections</p>
            <ul className="space-y-3">
              {["Men", "Women", "Children", "The Lookbook"].map((item) => (
                <li key={item}>
                  <Link to="/collections" className="text-ivory/50 hover:text-ivory font-body text-sm font-light transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* The House */}
          <div>
            <p className="label-spaced text-champagne mb-6">The House</p>
            <ul className="space-y-3">
              {["Our Heritage", "Craftsmanship", "Boutiques", "Press"].map((item) => (
                <li key={item}>
                  <Link to="/the-house" className="text-ivory/50 hover:text-ivory font-body text-sm font-light transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Client Services */}
          <div>
            <p className="label-spaced text-champagne mb-6">Services</p>
            <ul className="space-y-3">
              {["Bespoke Tailoring", "Private Appointments", "Global Delivery", "Care & Repairs"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-ivory/50 hover:text-ivory font-body text-sm font-light transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ivory/10 py-6 px-6">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-ivory/30 font-body text-xs tracking-widest uppercase">
            © 2025 Selection. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "Legal"].map((item) => (
              <a key={item} href="#" className="text-ivory/30 hover:text-ivory/60 font-body text-xs tracking-wider uppercase transition-colors duration-300">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
