interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

export default function Header({ cartCount, onCartClick }: HeaderProps) {
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

        <button
          onClick={onCartClick}
          aria-label="Open cart"
          className="relative flex items-center gap-2 border border-onyx/20 rounded-full px-4 py-2 hover:border-champagne transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          <span className="text-sm">Bag</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-champagne text-onyx text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
