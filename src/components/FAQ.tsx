import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What types of projects do you take on?",
    a: "Custom websites, CRM systems, lead funnels, and business automations. If it helps you capture more leads, save time, or scale your business — I build it.",
  },
  {
    q: "How does the process work?",
    a: "Everything starts with a conversation. We discuss your business, goals, and challenges. From there, I put together a custom solution and timeline tailored to your needs.",
  },
  {
    q: "How much does a project cost?",
    a: "Every project is different. Pricing depends on scope, complexity, and your specific requirements. We'll discuss all of this on our discovery call — no surprises.",
  },
  {
    q: "How long does a project take?",
    a: "It depends on what you need. Some projects are done in days, others take weeks. We'll set clear expectations upfront so you always know what to expect.",
  },
  {
    q: "Do I work directly with you?",
    a: "Yes. You're not handed off to a junior or a project manager. You work directly with me from start to finish.",
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
            Answered. <span className="text-brand-gold">Straight Up.</span>
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
