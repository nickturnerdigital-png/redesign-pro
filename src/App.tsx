import Hero from "./components/Hero";
import PainSection from "./components/PainSection";
import WhatYouGet from "./components/WhatYouGet";
import HowItWorks from "./components/HowItWorks";
import About from "./components/About";
// import Testimonials from "./components/Testimonials"; // hidden until real testimonials come in
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import StickyCTA from "./components/StickyCTA";

export default function App() {
  return (
    <main className="bg-brand-black text-white min-h-screen pb-20 md:pb-0">
      <Hero />
      <PainSection />
      <WhatYouGet />
      <HowItWorks />
      <About />
      {/* <Testimonials /> — re-enable once real testimonials are collected */}
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyCTA />
    </main>
  );
}
