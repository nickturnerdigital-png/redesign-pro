import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Do you handle my existing content?",
    a: "Yes. We migrate all your current content — text, images, contact info — onto the new design. You don't lift a finger.",
  },
  {
    q: "What if I don't like the design?",
    a: "One free revision round is included. We don't part ways until you're happy with it. Simple as that.",
  },
  {
    q: "How do you deliver in 24 hours?",
    a: "We have a proven process and a team that executes. There's no meetings, no pointless back and forth, no delays. We know what works and we build it.",
  },
  {
    q: "Do I need to provide anything?",
    a: "Just your current website URL and a 90-second form with your business details. That's it.",
  },
  {
    q: "Is $99 really the full price?",
    a: "Yes. One payment. No surprises, no upsells, no monthly fees. Hosting and domain stay with you.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section bg-brand-black">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p className="eyebrow mb-4">Questions</p>
          <h2 className="text-4xl md:text-6xl font-extrabold uppercase leading-tight">
            Answered. <span className="text-brand-gold">No BS.</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`border rounded-md overflow-hidden transition-colors ${
                  isOpen ? "border-brand-gold bg-brand-dark" : "border-white/10 bg-brand-dark/40"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-base md:text-lg uppercase tracking-tight pr-4">
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <Minus className="w-5 h-5 text-brand-gold flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-brand-gold flex-shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 md:px-6 pb-6 text-gray-300 text-base md:text-lg leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
