import { TrendingDown, Users, X } from "lucide-react";

const pains = [
  {
    icon: TrendingDown,
    stat: "75%",
    text: "of users judge your business credibility by your website alone.",
  },
  {
    icon: Users,
    stat: "5-10",
    text: "clients lost per month due to outdated, slow, or broken sites.",
  },
  {
    icon: X,
    stat: "88%",
    text: "of visitors won't return after one bad experience on your site.",
  },
];

export default function PainSection() {
  return (
    <section className="section bg-brand-black">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">The Problem</p>
          <h2 className="text-4xl md:text-6xl font-extrabold uppercase leading-tight mb-6">
            Your Competitors Just
            <br />
            <span className="text-brand-red">Took Your Clients.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Your website looks like 2010. Theirs doesn't.<br /> That's costing you money every single day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pains.map(({ icon: Icon, stat, text }) => (
            <div
              key={stat}
              className="bg-brand-dark border-l-4 border-brand-gold p-8 hover:bg-brand-gray transition-colors"
            >
              <Icon className="w-8 h-8 text-brand-red mb-4" />
              <div className="text-5xl md:text-6xl font-heading font-extrabold text-brand-gold mb-3">
                {stat}
              </div>
              <p className="text-gray-300 text-base md:text-lg leading-snug">{text}</p>
            </div>
          ))}
        </div>

        <p className="text-center mt-14 text-xl md:text-2xl italic text-white max-w-3xl mx-auto">
          "Your website is your first impression. <span className="text-brand-gold not-italic font-bold">Make it count.</span>"
        </p>
      </div>
    </section>
  );
}
