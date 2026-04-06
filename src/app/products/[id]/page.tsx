"use client";

import React, { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Check, X, ArrowUpRight, ChevronLeft, Award, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { PRODUCTS } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const ProductDetailPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-center">
        <div>
          <h1 className="text-4xl font-bold text-white mb-6">Product not found</h1>
          <Link href="/products" className="px-8 py-4 rounded-full bg-white text-black font-bold">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-32">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 lg:px-12 pb-32">
        <Link href="/products" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white mb-12 group">
          <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to Catalog
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column: Product Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-8 w-full"
          >
            <div className="relative aspect-square w-full rounded-[3rem] overflow-hidden glass border border-white/5 shadow-2xl">
              <Image
                 src={product.imageUrl}
                 alt={product.title}
                 fill
                 className="object-cover"
                 priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              <div className="absolute top-8 left-8 flex flex-col gap-2">
                 <div className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-xs font-bold text-white uppercase tracking-widest">
                    <Star size={12} className="text-yellow-400 fill-yellow-400" />
                    {product.rating} Rated
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-10 sticky top-32"
          >
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-black tracking-[0.3em] text-primary uppercase">
                {product.category} Elite Range
              </span>
              <h1 className="text-4xl lg:text-7xl font-black text-white leading-tight">
                {product.title}
              </h1>
              <p className="text-lg lg:text-xl text-zinc-400 leading-relaxed max-w-xl">
                {product.description}
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-6">
                 <div>
                   <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest block mb-1">Price Now (est.)</span>
                   <span className="text-4xl font-black text-white">${product.price}</span>
                 </div>
                 <div className="h-10 w-[1px] bg-zinc-800" />
                 <div>
                   <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest block mb-1">Availability</span>
                   <span className="text-lg font-bold text-green-400">IN STOCK</span>
                 </div>
              </div>

              <a
                href={product.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full py-6 rounded-[2rem] bg-white text-black font-black text-xl hover:scale-[1.02] active:scale-[0.98] transition-all overflow-hidden text-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                   View Latest Deal <ArrowUpRight size={24} />
                </span>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-primary/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </a>
              
              <p className="text-center text-xs text-zinc-600 font-medium">
                Affiliate disclosure: We may earn a small commission on purchases.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
               {[
                 { icon: <ShieldCheck size={20} />, label: "30-Day Guarantee" },
                 { icon: <Zap size={20} />, label: "Expert Reviewed" },
                 { icon: <Award size={20} />, label: "Top Pick 2026" },
                 { icon: <Check size={20} />, label: "Verified Deal" },
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-3 p-4 rounded-2xl glass-dark border border-white/5 text-sm text-zinc-400 font-medium whitespace-nowrap">
                    <div className="text-primary">{item.icon}</div>
                    {item.label}
                 </div>
               ))}
            </div>
          </motion.div>
        </div>

        {/* Product Deep Dive Section */}
        <div className="mt-32 pt-32 border-t border-zinc-900 grid grid-cols-1 md:grid-cols-2 gap-16">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="flex flex-col gap-10"
           >
              <h2 className="text-3xl lg:text-5xl font-black text-white leading-tight">
                 What makes it <br />
                 <span className="text-gradient">stand out.</span>
              </h2>
              
              <ul className="flex flex-col gap-4">
                 {product.features.map((feature, i) => (
                   <li key={i} className="flex gap-4 p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                      <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center text-xs font-bold pt-0.5">
                         {i + 1}
                      </div>
                      <span className="text-white font-medium">{feature}</span>
                   </li>
                 ))}
              </ul>
           </motion.div>

           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="grid grid-cols-1 gap-8"
           >
              <div className="p-8 rounded-[2rem] glass border border-white/5">
                 <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    The Positives <Check size={24} className="text-green-400" />
                 </h3>
                 <ul className="flex flex-col gap-4">
                    {product.pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-3 text-zinc-400 text-sm">
                         <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                         {pro}
                      </li>
                    ))}
                 </ul>
              </div>

              <div className="p-8 rounded-[2rem] glass border border-white/5 opacity-80">
                 <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    Room for improvement <X size={24} className="text-red-500" />
                 </h3>
                 <ul className="flex flex-col gap-4">
                    {product.cons.map((con, i) => (
                      <li key={i} className="flex items-start gap-3 text-zinc-500 text-sm">
                         <div className="w-1.5 h-1.5 rounded-full bg-red-800 mt-1.5 shrink-0" />
                         {con}
                      </li>
                    ))}
                 </ul>
              </div>
           </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
