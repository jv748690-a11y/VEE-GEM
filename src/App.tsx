import { useState } from "react";
import type { Product } from "./types";
import { products } from "./data/products";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import ProductModal from "./components/ProductModal";
import { About, Footer } from "./components/AboutFooter";

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen bg-ivory">
      <Header />
      <Hero />
      <ProductGrid products={products} onSelect={setSelectedProduct} />
      <About />
      <Footer />
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
}

export default App;
