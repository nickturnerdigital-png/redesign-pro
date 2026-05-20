import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Got 3 new calls the first week after the new site went live. Should've done this years ago.",
    name: "John M.",
    role: "Master Plumber",
    location: "Toronto, ON",
  },
  {
    quote: "My old site was embarrassing. This one looks like a million bucks. Patients actually book online now.",
    name: "Dr. Sarah K.",
    role: "Dentist",
    location: "Vancouver, BC",
  },
  {
    quote: "Paid for itself in the first new client. 24 hours, no nonsense. Best $99 I've spent on the business.",
    name: "Marcus T.",
    role: "General Contractor",
    location: "Calgary, AB",
  },
];

export default function Testimonials() {
  return (
    <section className="section bg-brand-dark">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <p className="eyebrow mb-4">Trusted By Local Businesses</p>
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-gold text-black font-heading font-extrabold uppercase tracking-wide text-sm mb-6">
            <span>★</span>
            50+ Businesses Redesigned
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold uppercase leading-tight">
            Real Owners. <span className="text-brand-red">Real Results.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-brand-black border border-white/5 p-8 rounded-md hover:border-brand-gold/40 transition-colors flex flex-col"
            >
              <Quote className="w-8 h-8 text-brand-gold mb-4" />
              <p className="text-white text-base md:text-lg leading-relaxed mb-6 flex-1">
                "{t.quote}"
              </p>
              <div className="border-t border-white/10 pt-4">
                <p className="font-bold text-white">{t.name}</p>
                <p className="text-sm text-gray-400">
                  {t.role} · {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
