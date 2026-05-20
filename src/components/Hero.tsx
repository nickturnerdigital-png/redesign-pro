import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col bg-brand-black overflow-hidden">
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,160,23,0.12),_transparent_60%)]" />

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-10 py-6 border-b border-white/5">
        <a href="#" className="font-heading font-extrabold text-xl md:text-2xl tracking-tight">
          NICK <span className="text-brand-gold">TURNER</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#what-you-get" className="hover:text-brand-gold transition-colors">What You Get</a>
          <a href="#about" className="hover:text-brand-gold transition-colors">About</a>
          <a href="#how-it-works" className="hover:text-brand-gold transition-colors">How It Works</a>
          <a href="#faq" className="hover:text-brand-gold transition-colors">FAQ</a>
        </div>
        <a href="#order" className="btn-gold !px-5 !py-2.5 text-xs md:text-sm">
          Redesign My Site
        </a>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/5">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
            <span className="text-xs md:text-sm font-medium text-brand-gold uppercase tracking-widest">
              Only 8 Spots Left This Month
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase leading-[0.95] mb-6">
            Your Website Is
            <br />
            <span className="text-brand-red">Costing You</span> Money.
          </h1>

          <p className="text-lg md:text-2xl text-gray-300 font-medium mb-2 max-w-3xl mx-auto">
            Modern Redesign. <span className="text-brand-gold font-bold">24 Hours.</span> <span className="text-white font-bold">$99.</span>
          </p>
          <p className="text-sm md:text-base text-gray-500 mb-10 max-w-2xl mx-auto">
            Built for local business owners who refuse to lose clients to a bad website.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#order" className="btn-primary group">
              Order Your Redesign
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#what-you-get" className="btn-outline">
              See What You Get
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-6 text-xs md:text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <span className="text-brand-gold">✓</span> Canadian-Built
            </span>
            <span>•</span>
            <span>24hr Turnaround</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">1 Free Revision</span>
          </div>
        </div>
      </div>

      {/* Gold/red divider */}
      <div className="relative z-10 h-1 bg-gradient-to-r from-brand-red via-brand-gold to-brand-red" />
    </section>
  );
}
