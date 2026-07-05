export function About() {
  return (
    <section id="about" className="bg-onyx text-ivory">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-champagne text-xs tracking-wide-lg uppercase mb-4">Our story</p>
          <h2 className="font-display text-3xl md:text-4xl leading-tight mb-6">
            Every piece is chosen the way you'd choose a gift for someone you love.
          </h2>
          <p className="text-ivory/70 leading-relaxed">
            Vee Gem started with a simple idea: jewelry should feel personal, not mass-produced. Every
            piece in our collection is hand-finished in small batches, so what you wear stays a little
            bit rare. We ship across Nigeria and take orders directly — no middlemen, no long waits.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-onyx-soft border border-champagne/20 rounded-sm p-6 text-center">
            <p className="font-display text-3xl text-champagne">4+</p>
            <p className="text-xs tracking-wide-lg uppercase text-ivory/60 mt-2">Collections</p>
          </div>
          <div className="bg-onyx-soft border border-champagne/20 rounded-sm p-6 text-center">
            <p className="font-display text-3xl text-champagne">100%</p>
            <p className="text-xs tracking-wide-lg uppercase text-ivory/60 mt-2">Hand-finished</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="bg-ivory border-t border-stone/20">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <p className="font-display text-2xl tracking-wide-lg">
            VEE <span className="text-champagne">GEM</span>
          </p>
          <p className="text-stone text-sm mt-3 max-w-xs">
            Handpicked jewelry, hand-finished in small batches. Based in Lagos, shipping nationwide.
          </p>
        </div>

        <div>
          <p className="text-xs tracking-wide-lg uppercase text-stone mb-4">Order & Contact</p>
          <a
            href="https://wa.me/2348027627988"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm hover:text-champagne transition-colors mb-2"
          >
            WhatsApp: +234 802 762 7988
          </a>
          <p className="text-sm text-stone">Lagos, Nigeria</p>
        </div>

        <div>
          <p className="text-xs tracking-wide-lg uppercase text-stone mb-4">Hours</p>
          <p className="text-sm text-stone">Mon – Sat: 9am – 7pm</p>
          <p className="text-sm text-stone">Sunday: Closed</p>
        </div>
      </div>
      <div className="border-t border-stone/20 py-6 text-center text-xs text-stone">
        © 2026 Vee Gem. All pieces subject to availability.
      </div>
    </footer>
  );
}
