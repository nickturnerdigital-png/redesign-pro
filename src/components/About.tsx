export default function About() {
  return (
    <section id="about" className="section bg-brand-dark">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <p className="eyebrow mb-4">Meet The Builder</p>
          <h2 className="text-4xl md:text-6xl font-extrabold uppercase leading-tight">
            I'm <span className="text-brand-gold">Nick.</span> I Build Sites
            <br />
            That Convert.
          </h2>
        </div>

        {/* Copy */}
        <div className="max-w-3xl mx-auto space-y-5 text-gray-300 text-base md:text-lg leading-relaxed text-center">
          <p>
           I got tired of watching local businesses lose money to websites that were built decades ago. Seeing business owners pay thousands to agencies and then waiting months for a mediocre site. That's broken.
          </p>
          <p>
            <span className="text-white font-bold">We do this differently. No hidden fees, no surprises, no long timelines, no bullsh*t.</span> My team and I get your site live in 24 hours for $99.
          </p>
          <p>
            If your website is costing you clients, we'll fix it. Fast.
          </p>
          <p className="pt-2 text-brand-gold font-bold not-italic">
            — Nick Turner, <a href="https://nicholasturner.ca" className="underline decoration-brand-gold/40 hover:decoration-brand-gold">nicholasturner.ca</a>
          </p>
          <p className="pt-1">
            <a
              href="https://www.linkedin.com/in/nick-turner-digital/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-brand-gold transition-colors"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
              </svg>
              Connect with me on LinkedIn
            </a>
          </p>
        </div>

        {/* Stat blocks */}
        <div className="grid grid-cols-3 gap-4 md:gap-6 mt-14 max-w-3xl mx-auto">
          {[
            { num: "$99", label: "Flat Price" },
            { num: "24hr", label: "Turnaround" },
            { num: "1", label: "Free Revision" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-brand-black border border-white/5 p-5 md:p-6 rounded-md text-center"
            >
              <div className="text-3xl md:text-5xl font-heading font-extrabold text-brand-gold mb-1">
                {s.num}
              </div>
              <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wide font-semibold">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
