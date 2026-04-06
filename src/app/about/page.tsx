"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Check, Target, Users, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black pt-32">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 lg:px-12 pb-32">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32 mb-32">
           <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-1 text-left"
           >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary uppercase tracking-widest mb-6">
                 Who we are
              </div>
              <h1 className="text-4xl lg:text-7xl font-black text-white mb-8 leading-tight">
                 Elevating your <br />
                 <span className="text-gradient">digital experience.</span>
              </h1>
              <p className="text-zinc-500 text-lg lg:text-xl leading-relaxed mb-10">
                 At AuraAffiliate, we believe that technology should be an
                 extension of our potential. Our mission is to curate the
                 highest quality tools and gadgets that help you work, play,
                 and create at your absolute best.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                 <div>
                   <div className="text-3xl font-black text-white mb-2">12k+</div>
                   <div className="text-zinc-500 font-bold text-[10px] uppercase tracking-widest">Active Community</div>
                 </div>
                 <div>
                   <div className="text-3xl font-black text-white mb-2">500+</div>
                   <div className="text-zinc-500 font-bold text-[10px] uppercase tracking-widest">Products Tested</div>
                 </div>
              </div>
           </motion.div>
           
           <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex-1 relative aspect-[4/5] w-full max-w-[500px] rounded-[4rem] overflow-hidden glass border border-white/5"
           >
              <Image
                 src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000"
                 alt="Our Office"
                 fill
                 className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
           </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Target size={32} />,
                title: "Our Mission",
                desc: "To provide honest, deep-dive reviews that cut through the marketing noise."
              },
              {
                icon: <Users size={32} />,
                title: "Our Community",
                desc: "A group of enthusiasts who value design, performance, and longevity."
              },
              {
                icon: <BookOpen size={32} />,
                title: "Our Process",
                desc: "30-day testing periods for every single product before we publish a review."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[3rem] glass border border-white/5 hover:border-white/10 transition-all text-center flex flex-col items-center gap-6"
              >
                 <div className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center text-primary">
                    {item.icon}
                 </div>
                 <h3 className="text-2xl font-black text-white">{item.title}</h3>
                 <p className="text-zinc-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
