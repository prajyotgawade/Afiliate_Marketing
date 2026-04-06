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
                 At NEXORA, we believe that technology should be an
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

        {/* The NEXORA Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-40">
           {[
             {
               title: "The Performance Gap",
               desc: "We don't just test if it works. We test if it performs. Our benchmarks are designed for modern enthusiasts who demand consistency under load.",
               image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000"
             },
             {
               title: "Design for Longevity",
               desc: "A product is only good as its durability. We test materials, hinge stress, and software longevity to ensure your investment lasts years, not months.",
               image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000"
             }
           ].map((card, i) => (
             <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative aspect-video rounded-[3rem] overflow-hidden border border-white/10 glass transition-all duration-700"
             >
                <Image src={card.image} alt={card.title} fill className="object-cover opacity-30 group-hover:opacity-50 transition-all duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/20" />
                <div className="absolute inset-0 p-12 flex flex-col justify-end gap-4 transform transition-all group-hover:-translate-y-2">
                   <h3 className="text-3xl font-black text-white">{card.title}</h3>
                   <p className="text-zinc-400 text-lg leading-relaxed max-w-sm">{card.desc}</p>
                </div>
             </motion.div>
           ))}
        </div>

        {/* Brand Mission Section */}
        <section className="text-center py-32 border-t border-zinc-900">
           <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-7xl font-black text-white mb-12 tracking-tight"
           >
              Honest Intelligence <br />
              <span className="text-primary">For Digital Natives.</span>
           </motion.h2>
           <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left"
           >
              {[
                { title: "No Sponsored Reviews", desc: "We purchase all our test units. No freebies from brands, ensuring zero bias in our verdicts." },
                { title: "The 30-Day Rule", desc: "No first-impression reviews. We use every product for at least a month before publishing." },
                { title: "Transparency First", desc: "We disclose every single affiliate partnership. Our loyalty is to the reader, not the retailer." }
              ].map((value, i) => (
                <div key={i} className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 space-y-4">
                   <div className="text-primary font-black uppercase text-xs">Rule 0{i + 1}</div>
                   <h3 className="text-xl font-bold text-white">{value.title}</h3>
                   <p className="text-zinc-500 text-sm leading-relaxed">{value.desc}</p>
                </div>
              ))}
           </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
