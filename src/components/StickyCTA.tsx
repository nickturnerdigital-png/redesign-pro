import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY > 600;
      const order = document.getElementById("order");
      const nearOrder = order
        ? order.getBoundingClientRect().top < window.innerHeight - 100
        : false;
      setVisible(scrolled && !nearOrder);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Mobile: bottom bar */}
      <div
        className={`md:hidden fixed bottom-0 inset-x-0 z-40 transition-transform duration-300 ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="bg-brand-black/95 backdrop-blur border-t border-brand-gold/30 px-4 py-3 flex items-center justify-between gap-3">
          <div className="leading-tight">
            <div className="text-xs text-gray-400 uppercase tracking-wide font-semibold">
              Modern Redesign
            </div>
            <div className="text-white font-heading font-extrabold text-lg">
              Live in <span className="text-brand-gold">24 Hours</span>
            </div>
          </div>
          <a
            href="#order"
            className="bg-brand-gold text-black font-heading font-extrabold uppercase tracking-wide px-5 py-3 rounded-md text-sm flex items-center gap-2 active:scale-95 transition-transform"
          >
            Redesign My Site
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Desktop: floating button */}
      <a
        href="#order"
        className={`hidden md:inline-flex fixed bottom-6 right-6 z-40 items-center gap-2 bg-brand-red hover:bg-brand-redDark text-white font-heading font-bold uppercase tracking-wide px-6 py-4 rounded-full shadow-2xl shadow-brand-red/30 transition-all duration-300 group ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        Redesign My Site
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </a>
    </>
  );
}
