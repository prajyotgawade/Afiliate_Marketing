"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ArrowUpRight, TrendingUp, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { Product } from "@/types";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative flex flex-col glass overflow-hidden rounded-3xl transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20"
    >
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex gap-2">
        {product.isTrending && (
          <div className="flex items-center gap-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg">
            <TrendingUp size={10} />
            TRENDING
          </div>
        )}
        {product.isLimitedTime && (
          <div className="flex items-center gap-1 bg-zinc-100 text-black text-[10px] font-bold px-2 py-1 rounded-full shadow-lg">
            <Clock size={10} />
            LIMITED OFFER
          </div>
        )}
      </div>

      {/* Image Section */}
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <Image
          src={product.imageUrl}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
        
        {/* Rating overlay */}
        <div className="absolute bottom-4 left-4 flex items-center gap-1 text-white bg-black/40 backdrop-blur-md px-2 py-1 rounded-lg text-xs font-semibold">
          <Star size={12} className="text-yellow-400 fill-yellow-400" />
          {product.rating} <span className="text-zinc-400 ml-1">({product.reviews})</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-1 gap-3 relative">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-bold tracking-widest text-primary uppercase">
            {product.category}
          </span>
          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
            {product.title}
          </h3>
        </div>
        
        <p className="text-zinc-400 text-sm line-clamp-2 leading-relaxed h-[40px]">
          {product.description}
        </p>

        <div className="mt-auto flex items-center justify-between pt-4 border-t border-zinc-800/50">
          <div className="flex flex-col">
            <span className="text-[10px] text-zinc-500 font-medium">Price approx</span>
            <span className="text-lg font-bold text-white">${product.price}</span>
          </div>
          
          <Link
            href={`/products/${product.id}`}
            className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all transform group-hover:rotate-12"
          >
            <ArrowUpRight size={20} />
          </Link>
        </div>
      </div>

      <a
        href={product.affiliateUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mx-6 mb-6 py-3.5 rounded-2xl bg-zinc-900 border border-zinc-800 text-white text-sm font-bold text-center hover:bg-zinc-100 hover:text-black hover:border-white transition-all duration-300"
      >
        View Best Deal
      </a>
    </motion.div>
  );
};

export default ProductCard;
