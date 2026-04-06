"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Search, ShoppingCart, Activity, BarChart3, Star, ArrowRight } from "lucide-react";

const ProcessPage = () => {
  const steps = [
    {
      icon: <Search size={28} />,
      title: "Market Curation",
      desc: "Our team of tech enthusiasts spends hundreds of hours scanning the global market. We don't just look for what's trending; we look for what's next. Innovation, design, and real-world utility are our primary filters.",
      tag: "Step 01"
    },
    {
      icon: <ShoppingCart size={28} />,
      title: "Independent Acquisition",
      desc: "To maintain 100% editorial independence, we purchase products directly with our own funds. We refuse free 'review units' from brands that come with strings attached. This ensures our verdict is only for you, not the manufacturer.",
      tag: "Step 02"
    },
    {
      icon: <Activity size={28} />,
      title: "Stress Testing",
      desc: "A desk review isn't enough. Every product on NEXORA undergoes a rigorous 30-day testing period in real environments. We use them for work, for play, and for daily life to find the flaws that short reviews miss.",
      tag: "Step 03"
    },
    {
      icon: <BarChart3 size={28} />,
      title: "Performance Analysis",
      desc: "We analyze everything from material durability down to firmware stability. If it's a mechanical keyboard, we test the switch debounce. If it's an audio setup, we check the frequency response across genres.",
      tag: "Step 04"
    },
    {
      icon: <Star size={28} />,
      title: "The NEXORA Verdict",
      desc: "Only the top 5% of products we test make it to our final curated lists. If a product doesn't meet our 'Modern Enthusiast' standard for longevity and performance, it simply doesn't appear on NEXORA.",
      tag: "Final Step"
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-32 overscroll-none overflow-x-hidden">
      <Navbar />
      
      {/* Background Aura */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/10 blur-[180px] rounded-full animate-float-slow" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-secondary/10 blur-[180px] rounded-full animate-float-fast" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-32">
        <div className="text-center mb-32">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-[10px] font-bold tracking-widest text-zinc-300 uppercase mb-8"
          >
             <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
             The NEXORA Standard
          </motion.div>
          
          <motion.h1
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-5xl lg:text-8xl font-black text-white mb-8 leading-tight tracking-tighter"
          >
             How we define <br />
             <span className="text-gradient">The Best.</span>
          </motion.h1>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="text-lg lg:text-xl text-zinc-500 leading-relaxed max-w-2xl mx-auto"
          >
             A deep-dive into our 5-stage curation engine. 
             Transparency is our most important product.
          </motion.p>
        </div>

        <div className="space-y-12 lg:space-y-24">
           {steps.map((step, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, type: "spring" }}
               className={`flex flex-col lg:flex-row gap-12 lg:items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
             >
                <div className="flex-1">
                   <div className="relative aspect-video lg:aspect-[4/3] rounded-[3rem] overflow-hidden glass border border-white/5 p-12 group transition-all duration-700 hover:border-primary/30">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center gap-6">
                         <div className="w-24 h-24 rounded-3xl bg-white/5 flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                            {step.icon}
                         </div>
                         <div className="font-black text-6xl text-white/5 select-none">{step.tag}</div>
                      </div>
                   </div>
                </div>
                
                <div className="flex-1 space-y-6 lg:px-12">
                   <div className="text-primary font-bold text-sm tracking-widest uppercase">{step.tag}</div>
                   <h2 className="text-3xl lg:text-5xl font-black text-white">{step.title}</h2>
                   <p className="text-zinc-500 text-lg leading-relaxed">
                      {step.desc}
                   </p>
                   <div className="w-full h-[1px] bg-gradient-to-r from-zinc-800 to-transparent" />
                </div>
             </motion.div>
           ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-40 p-12 lg:p-24 rounded-[4rem] glass-dark border border-white/5 text-center relative overflow-hidden"
        >
           <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-50" />
           <div className="relative z-10">
              <h2 className="text-4xl lg:text-7xl font-black text-white mb-8 tracking-tighter">
                 Trust is earned, <br />
                 <span className="text-primary">Every single day.</span>
              </h2>
              <p className="text-zinc-500 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
                 Started with a mission to simplify the complex world of tech. 
                 NEXORA is your digital gateway to innovation.
              </p>
              <button className="px-10 py-5 rounded-2xl bg-white text-black font-bold text-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2 mx-auto shadow-2xl">
                 Contact Editorial <ArrowRight size={20} />
              </button>
           </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProcessPage;
