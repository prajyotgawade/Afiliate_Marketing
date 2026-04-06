"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/lib/data";
import { Search, SlidersHorizontal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Audio", "Wearables", "Peripherals", "Home Office"];

  const filteredProducts =
    activeCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-black flex flex-col pt-32">
      <Navbar />
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
             <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary uppercase tracking-widest mb-4"
              >
                Catalog
              </motion.div>
            <motion.h1
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 }}
              className="text-4xl lg:text-7xl font-black text-white mb-6 leading-tight"
            >
              Curated <br />
              <span className="text-gradient">Selection.</span>
            </motion.h1>
            <motion.p
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="text-zinc-500"
            >
              Browse our collection of the most innovative and high-quality tech.
              Prices shown are approximations, check deal for the latest price.
            </motion.p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
             <div className="relative w-full sm:w-[300px]">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl py-3.5 pl-12 pr-6 text-sm text-white focus:outline-none focus:border-zinc-500 transition-all placeholder:text-zinc-700"
                />
             </div>
             <button className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl border border-zinc-800 text-white font-bold text-sm bg-zinc-900/50 hover:bg-zinc-800 transition-all w-full sm:w-auto">
                <SlidersHorizontal size={18} />
                More Filters
             </button>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center gap-2 mb-12 overflow-x-auto pb-4 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? "bg-white text-black"
                  : "bg-zinc-900 text-zinc-500 border border-zinc-800 hover:border-zinc-700 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
           layout
           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredProducts.length === 0 && (
          <div className="w-full py-32 flex flex-col items-center justify-center text-center opacity-50">
            <Search size={48} className="mb-6 text-zinc-700" />
            <h3 className="text-xl font-bold text-white mb-2">No products found</h3>
            <p className="text-zinc-500">Try adjusting your filters or search term.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
