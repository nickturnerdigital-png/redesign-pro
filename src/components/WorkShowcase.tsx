import { ExternalLink, ArrowRight } from "lucide-react";

const SITE_URL = "https://home-valuation-funnel.vercel.app/";

export default function WorkShowcase() {
  return (
    <section id="work" className="section bg-brand-black">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <p className="eyebrow mb-4">See It Live</p>
          <h2 className="text-4xl md:text-6xl font-extrabold uppercase leading-tight mb-6">
            See What You're <span className="text-brand-gold">Getting.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Here's a live lead funnel I built from scratch. Modern, fast, built to convert. This is the standard.
            <span className="text-white font-bold"> Your business is next.</span>
          </p>
        </div>

        {/* Browser mockup */}
        <a
          href={SITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block group max-w-4xl mx-auto rounded-lg overflow-hidden border border-white/10 hover:border-brand-gold/50 transition-colors shadow-2xl shadow-black/50"
          aria-label="Open the live example site in a new tab"
        >
          {/* Top bar */}
          <div className="flex items-center gap-3 bg-brand-gray px-4 py-3 border-b border-white/5">
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-brand-red" />
              <span className="w-3 h-3 rounded-full bg-brand-gold" />
              <span className="w-3 h-3 rounded-full bg-gray-600" />
            </div>
            <div className="flex-1 bg-brand-black rounded px-3 py-1.5 text-xs text-gray-400 truncate text-center">
              home-valuation-funnel.vercel.app
            </div>
          </div>

          {/* Live preview */}
          <div className="relative bg-brand-black h-[420px] md:h-[560px] overflow-hidden">
            <iframe
              src={SITE_URL}
              title="Example site built by Nick Turner"
              loading="lazy"
              className="w-full h-full pointer-events-none select-none"
              tabIndex={-1}
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-brand-black/0 group-hover:bg-brand-black/40 transition-colors">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity btn-gold !py-3 pointer-events-none">
                View Live Site
                <ExternalLink className="w-4 h-4" />
              </span>
            </div>
          </div>
        </a>

        {/* Feature chips */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
          {["Lead Funnel", "Mobile-First", "Conversion-Focused"].map((chip) => (
            <span
              key={chip}
              className="px-4 py-2 rounded-full border border-brand-gold/30 bg-brand-gold/5 text-sm font-semibold text-brand-gold uppercase tracking-wide"
            >
              {chip}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href={SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold group"
          >
            Explore The Live Site
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
