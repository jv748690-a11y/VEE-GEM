export default function Hero() {
  return (
    <section id="top" className="relative bg-onyx text-ivory overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 38px, #C9A455 38px, #C9A455 39px)",
        }}
      />
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-28 md:py-36 relative">
        <p className="text-champagne text-xs tracking-wide-lg uppercase mb-6">Handpicked · Lagos, Nigeria</p>
        <h1 className="font-display text-5xl md:text-7xl leading-[1.05] max-w-2xl">
          Jewelry that feels like it was made for a story only you know.
        </h1>
        <p className="mt-6 max-w-md text-ivory/70 text-base md:text-lg">
          Small-batch pieces, finished by hand, and shipped straight to you across Nigeria.
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
