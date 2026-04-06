"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { BLOG_POSTS } from "@/lib/data";

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-black pt-32">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 lg:px-12 pb-32">
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary uppercase tracking-widest mb-6"
          >
             Intelligence
          </motion.div>
          <motion.h1
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-4xl lg:text-7xl font-black text-white mb-8"
          >
            Insights <br />
            <span className="text-gradient">& Reviews.</span>
          </motion.h1>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="text-zinc-500 text-lg"
          >
            Deep dives into the latest technology, design trends, and how to
            optimize your digital ecosystem.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {BLOG_POSTS.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col gap-8 rounded-3xl overflow-hidden glass border border-white/5 hover:border-white/10 transition-all p-6"
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl group-hover:scale-[1.01] transition-transform duration-500">
                <Image
                   src={post.imageUrl}
                   alt={post.title}
                   fill
                   className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                <div className="absolute top-6 left-6 px-4 py-2 glass border border-white/10 text-xs font-bold text-white uppercase tracking-widest rounded-full">
                   {post.category}
                </div>
              </div>

              <div className="flex flex-col gap-4 flex-1">
                 <div className="flex items-center gap-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">
                    <div className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</div>
                    <div className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</div>
                 </div>
                 <h2 className="text-2xl lg:text-3xl font-black text-white group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                 </h2>
                 <p className="text-zinc-400 leading-relaxed line-clamp-3">
                   {post.excerpt}
                 </p>
                 
                 <div className="mt-auto pt-6 flex items-center justify-between border-t border-zinc-800/50">
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-full bg-zinc-800 border border-white/10 overflow-hidden relative">
                          <Image src={`https://i.pravatar.cc/100?u=${post.author}`} alt={post.author} fill />
                       </div>
                       <span className="text-white font-bold text-sm tracking-wide uppercase">{post.author}</span>
                    </div>
                    
                    <button className="flex items-center gap-2 text-white font-black text-sm group/btn px-4 py-2.5 rounded-full glass border border-white/10 hover:bg-white hover:text-black transition-all">
                       Read More <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                 </div>
              </div>
            </motion.article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
