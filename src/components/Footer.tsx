export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-white/5 px-6 py-10">
      <div className="container-narrow flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-heading font-extrabold text-lg tracking-tight">
          NICK <span className="text-brand-gold">TURNER</span>
        </div>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Nick Turner ·{" "}
          <a href="https://nicholasturner.ca" className="hover:text-brand-gold transition-colors">
            nicholasturner.ca
          </a>
        </p>
        <div className="flex gap-6 text-sm text-gray-500">
          <a href="#" className="hover:text-brand-gold transition-colors">Terms</a>
          <a href="#" className="hover:text-brand-gold transition-colors">Privacy</a>
          <a href="mailto:nick@nicholasturner.ca" className="hover:text-brand-gold transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
