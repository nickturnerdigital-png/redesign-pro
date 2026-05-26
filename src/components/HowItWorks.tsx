import { ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We talk. I learn your business, goals, and competition. This is where the real work begins.",
  },
  {
    num: "02",
    title: "Strategy & Build",
    desc: "Custom solution designed specifically for your market. No templates. No shortcuts.",
  },
  {
    num: "03",
    title: "Launch & Optimize",
    desc: "Your system goes live. We monitor, refine, and make sure it performs.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section bg-brand-black">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">The Process</p>
          <h2 className="text-4xl md:text-6xl font-extrabold uppercase leading-tight text-balance">
            A Process Built
            <br />
            <span className="text-brand-gold">For Results.</span>
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

        <p className="text-center mt-12 text-lg md:text-xl text-gray-400 italic text-pretty">
          Every project starts with a conversation. <span className="text-brand-gold not-italic font-bold">That&apos;s where the magic happens.</span>
        </p>
      </div>
    </section>
  );
}
