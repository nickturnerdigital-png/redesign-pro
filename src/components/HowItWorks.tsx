import { ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Submit",
    desc: "Send me your current site URL and a quick form. Takes 90 seconds.",
  },
  {
    num: "02",
    title: "We Build",
    desc: "My team redesigns your entire site in under 24 hours. No meetings.",
  },
  {
    num: "03",
    title: "Go Live",
    desc: "Approve it. We deploy it. You start capturing more leads. Done.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section bg-brand-black">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">The Process</p>
          <h2 className="text-4xl md:text-6xl font-extrabold uppercase leading-tight">
            3 Steps. 24 Hours.
            <br />
            <span className="text-brand-gold">Done.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 relative">
          {steps.map((step, i) => (
            <div key={step.num} className="relative flex flex-col items-start">
              <div className="bg-brand-dark border border-white/5 p-8 rounded-md w-full h-full hover:border-brand-gold/40 transition-colors">
                <div className="text-6xl md:text-7xl font-heading font-extrabold text-brand-gold/30 mb-4 leading-none">
                  {step.num}
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold uppercase mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-base md:text-lg">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-brand-red" />
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center mt-12 text-lg md:text-xl text-gray-400 italic">
          No calls. No meetings. No delays. <span className="text-brand-gold not-italic font-bold">Just results.</span>
        </p>
      </div>
    </section>
  );
}
