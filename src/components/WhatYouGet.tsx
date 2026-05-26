import { Check, ArrowRight } from "lucide-react";

const features = [
  { title: "Custom Website Design", desc: "Built from scratch. No templates. Tailored to your brand and market." },
  { title: "CRM & Lead Management", desc: "Capture, track, and convert leads with systems that work for you." },
  { title: "Business Automations", desc: "Eliminate repetitive tasks. Let technology do the heavy lifting." },
  { title: "Mobile-First Experience", desc: "Looks and works perfectly on every device your clients use." },
  { title: "SEO-Ready Foundation", desc: "Built to rank. Show up when people search for what you do." },
  { title: "Lightning Performance", desc: "Sub-3 second load times. Fast sites convert better." },
];

export default function WhatYouGet() {
  return (
    <section id="what-you-get" className="section bg-brand-dark">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">What I Build</p>
          <h2 className="text-4xl md:text-6xl font-extrabold uppercase leading-tight text-balance">
            Full-Stack Solutions. <span className="text-brand-gold">Built to Scale.</span>
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

        {/* CTA callout */}
        <div className="bg-brand-black border border-brand-gold/30 text-center p-8 md:p-10 rounded-md max-w-3xl mx-auto">
          <p className="text-white font-heading font-extrabold text-2xl md:text-3xl uppercase tracking-tight mb-3 text-balance">
            Ready to Build Something Custom?
          </p>
          <p className="text-gray-400 text-base md:text-lg mb-6">
            Every project is different. Let&apos;s talk about what you need.
          </p>
          <a href="#order" className="btn-gold group inline-flex">
            Schedule a Call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
