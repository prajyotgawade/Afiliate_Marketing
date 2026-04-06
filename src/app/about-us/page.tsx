"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Check, Target, Users, BookOpen, Shield } from "lucide-react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black pt-32">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 lg:px-12 pb-32">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32 mb-40">
           <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-1 text-left"
           >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary uppercase tracking-widest mb-6 font-logo">
                 The Nexora Story
              </div>
              <h1 className="text-5xl lg:text-8xl font-black text-white mb-8 leading-[0.95] tracking-tight">
                 Redefining <br />
                 <span className="text-gradient">Tech Curation.</span>
              </h1>
              <p className="text-zinc-500 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl">
                 NEXORA was born out of a simple frustration: the digital world is 
                 flooded with noise, sponsored bias, and shallow reviews. 
                 We created a sanctuary for enthusiasts who demand more than 
                 just a spec sheet.
              </p>
              
              <div className="flex flex-wrap gap-12">
                 <div>
                   <div className="text-4xl font-black text-white mb-1 font-logo">12k+</div>
                   <div className="text-zinc-600 font-bold text-[10px] uppercase tracking-widest">Enthusiasts</div>
                 </div>
                 <div>
                   <div className="text-4xl font-black text-white mb-1 font-logo">500+</div>
                   <div className="text-zinc-600 font-bold text-[10px] uppercase tracking-widest">Verified Reviews</div>
                 </div>
                 <div>
                   <div className="text-4xl font-black text-white mb-1 font-logo">24/7</div>
                   <div className="text-zinc-600 font-bold text-[10px] uppercase tracking-widest">Price Tracking</div>
                 </div>
              </div>
           </motion.div>
           
           <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex-1 relative aspect-[4/5] w-full max-w-[500px] rounded-[4rem] overflow-hidden group"
           >
              <Image
                 src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000"
                 alt="Our Design Lab"
                 fill
                 className="object-cover group-hover:scale-105 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-12 left-12 right-12 p-8 glass rounded-3xl border border-white/10">
                 <div className="text-xs font-bold text-primary mb-2 uppercase tracking-widest">Our HQ</div>
                 <div className="text-white text-xl font-bold">Bangalore Design Lab</div>
              </div>
           </motion.div>
        </div>

        {/* Brand Mission & Values */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-40">
           <div className="lg:col-span-1">
              <h2 className="text-4xl font-black text-white mb-6 leading-tight">Our Core <br /><span className="text-zinc-600">Philosophies.</span></h2>
              <p className="text-zinc-500 leading-relaxed">
                 Every recommendation we make is backed by a 120-point testing protocol 
                 designed to push hardware to its absolute limit.
              </p>
           </div>
           <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "No Sponsored Biases", desc: "We purchase every unit we test. We accept no free samples from manufacturers to ensure 100% independence.", icon: <Shield size={24} /> },
                { title: "The 30-Day Rule", desc: "First impressions are for amateurs. We live with every device for at least 30 days before formuating a verdict.", icon: <BookOpen size={24} /> },
                { title: "Deep Traceability", desc: "Every deal link is verified across 12 pricing engines to ensure you get the absolute lowest historical price.", icon: <Target size={24} /> },
                { title: "Sustainability Check", desc: "Repairability is a tier-one metric for us. We only recommend gear that's built for the long haul.", icon: <Check size={24} /> }
              ].map((item, i) => (
                <div key={i} className="p-10 rounded-[2.5rem] glass border border-white/5 hover:border-white/20 transition-all group">
                   <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                      {item.icon}
                   </div>
                   <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                   <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>

        {/* Narrative Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-40">
           {[
             {
               title: "The Performance Gap",
               desc: "We don't just test if it works. We test if it performs. Our benchmarks are designed for modern enthusiasts who demand consistency under load.",
               image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000"
             },
             {
               title: "Built for Longevity",
               desc: "A product is only as good as its durability. We test materials, hinge stress, and software longevity to ensure your investment lasts years.",
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
                <Image src={card.image} alt={card.title} fill className="object-cover opacity-20 group-hover:opacity-40 transition-all duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                <div className="absolute inset-0 p-12 flex flex-col justify-end gap-2">
                   <h3 className="text-4xl font-black text-white">{card.title}</h3>
                   <p className="text-zinc-400 text-base leading-relaxed max-w-sm">{card.desc}</p>
                </div>
             </motion.div>
           ))}
        </div>

        {/* Final CTA/Mission */}
        <section className="text-center py-40 border-t border-zinc-900 overflow-hidden relative">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
           <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="relative z-10"
           >
              <h2 className="text-5xl lg:text-9xl font-black text-white mb-12 tracking-tighter leading-none">
                 The Future <br />
                 <span className="text-primary italic">is Independent.</span>
              </h2>
              <p className="text-zinc-500 text-lg lg:text-2xl max-w-2xl mx-auto mb-16 leading-relaxed">
                 Join NEXORA as we continue to push the boundaries of honest tech evaluation. 
                 No noise. No bias. Just pure gadget intelligence.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                 <button className="px-10 py-5 rounded-full bg-white text-black font-black text-lg hover:scale-105 transition-all shadow-2xl">
                    Our Testing Process
                 </button>
                 <button className="px-10 py-5 rounded-full glass border border-white/10 text-white font-black text-lg hover:bg-white/5 transition-all">
                    Contact The Lab
                 </button>
              </div>
           </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
