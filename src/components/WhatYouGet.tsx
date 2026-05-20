import { Check } from "lucide-react";

const features = [
  { title: "Mobile-Responsive Design", desc: "Looks perfect on every phone, tablet, and desktop." },
  { title: "Modern, Clean Layout", desc: "Built to  2026 standards." },
  { title: "Fast Loading (Sub-3s)", desc: "Google ranks fast sites higher. You rank higher." },
  { title: "Professional Branding", desc: "Your logo, colors, and identity — all done right." },
  { title: "SEO-Ready Structure", desc: "Show up when locals search. Built-in." },
  { title: "Live in 24 Hours", desc: "Submit by morning. Live by tomorrow. Guaranteed." },
];

export default function WhatYouGet() {
  return (
    <section id="what-you-get" className="section bg-brand-dark">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">What You Get</p>
          <h2 className="text-4xl md:text-6xl font-extrabold uppercase leading-tight">
            Everything. <span className="text-brand-gold">Done For You.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex items-start gap-4 bg-brand-black/60 border border-white/5 p-6 rounded-md hover:border-brand-gold/40 transition-colors"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center">
                <Check className="w-5 h-5 text-black stroke-[3]" strokeWidth={3} />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold uppercase tracking-tight mb-1">
                  {f.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Price callout */}
        <div className="bg-brand-red text-center p-8 md:p-10 rounded-md max-w-3xl mx-auto">
          <p className="text-white font-heading font-extrabold text-3xl md:text-5xl uppercase tracking-tight mb-2">
            $99 Flat
          </p>
          <p className="text-white/90 text-base md:text-lg font-semibold">
            No hidden fees. No subscriptions. No monthly nonsense.
          </p>
        </div>
      </div>
    </section>
  );
}
