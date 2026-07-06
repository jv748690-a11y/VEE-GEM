import { buildGeneralEnquiryLink } from "../utils/whatsapp";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-ivory/90 backdrop-blur-sm border-b border-stone/20">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">
        <a href="#top" className="font-display text-2xl tracking-wide-lg text-onyx">
          VEE <span className="text-champagne">GEM</span>
        </a>

        <nav className="hidden md:flex gap-8 text-sm tracking-wide text-onyx/70">
          <a href="#collection" className="hover:text-champagne transition-colors">Collection</a>
          <a href="#about" className="hover:text-champagne transition-colors">About</a>
          <a href="#contact" className="hover:text-champagne transition-colors">Contact</a>
        </nav>

        <a
          href={buildGeneralEnquiryLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-onyx text-ivory rounded-full px-5 py-2.5 text-sm hover:bg-onyx/85 transition-colors"
        >
          Enquire
        </a>
      </div>
    </header>
  );
}
