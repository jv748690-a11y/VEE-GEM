export default function Hero() {
  return (
    <section id="top" className="relative bg-onyx text-ivory overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1616837874254-8d5aaa63e273?w=1600&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/70 to-onyx/30" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 py-28 md:py-40 relative">
        <p className="text-champagne text-xs tracking-wide-lg uppercase mb-6">Handpicked · Lagos, Nigeria</p>
        <h1 className="font-display text-5xl md:text-7xl leading-[1.05] max-w-2xl">
          Jewelry that feels like it was made for a story only you know.
        </h1>
        <p className="mt-6 max-w-md text-ivory/80 text-base md:text-lg">
          Watches, necklaces, earrings, and eyeglasses — handpicked for men and women, shipped across Nigeria.
        </p>
        <a
          href="#collection"
          className="inline-block mt-10 bg-champagne text-onyx px-8 py-3.5 rounded-full text-sm tracking-wide-lg uppercase hover:bg-champagne-light transition-colors"
        >
          Shop the collection
        </a>
      </div>
    </section>
  );
}
