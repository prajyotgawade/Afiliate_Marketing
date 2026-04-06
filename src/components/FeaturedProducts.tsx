"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { PRODUCTS } from "@/lib/data";

const FeaturedProducts = () => {
  return (
    <section className="py-24 px-6 lg:px-12 bg-black border-y border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-xl text-left">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight"
            >
              Trending <span className="text-gradient">Products</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-500"
            >
              The most loved tech and essentials by our community. These are our
              top recommendations for the month.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Link
              href="/products"
              className="flex items-center gap-2 text-white font-bold group px-6 py-3 rounded-full border border-zinc-800 hover:border-white transition-all"
            >
              View More <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.slice(0, 3).map((product, index) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
