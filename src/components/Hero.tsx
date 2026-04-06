"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, Play, Star } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-32 pb-20 px-6 lg:px-12 overflow-hidden bg-transparent">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/15 blur-[120px] rounded-full delay-1000 animate-pulse" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        <div className="flex flex-col gap-8 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 self-center lg:self-start px-4 py-2 rounded-full glass border border-white/10 text-xs font-bold tracking-widest text-zinc-300 uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
            Curated For Excellence
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl lg:text-8xl font-black leading-[1.05] tracking-tight text-gradient"
          >
            Upgrade Your <br />
            <span className="text-gradient-primary">Digital Life</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg lg:text-xl text-zinc-400 leading-relaxed max-w-xl mx-auto lg:mx-0"
          >
            Discover the most innovative products, hand-picked by tech experts. 
            Detailed reviews and the best prices across the web, delivered in 
            one premium experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-4 mt-4 justify-center lg:justify-start"
          >
            <Link
              href="/products"
              className="group relative px-8 py-4 w-full sm:w-auto rounded-2xl bg-white text-black font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
              <div className="flex items-center justify-center gap-2 relative z-10">
                Explore Shop <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            
            <button className="flex items-center gap-3 px-8 py-4 w-full sm:w-auto rounded-2xl glass border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all">
              <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
                <Play size={14} className="fill-white translate-x-0.5" />
              </div>
              How we test
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-8 flex flex-col items-center lg:items-start gap-4"
          >
            <div className="flex -space-x-3 items-center">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-zinc-800 overflow-hidden relative">
                  <Image src={`https://i.pravatar.cc/100?u=${i}`} alt="User" fill />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-black bg-zinc-900 flex items-center justify-center text-[10px] font-bold text-white">
                12k+
              </div>
              <span className="ml-4 text-sm font-medium text-zinc-500">Trusted by over 12k enthusiasts</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex-1 relative w-full max-w-[500px] mx-auto lg:mx-0 mt-20 lg:mt-0"
        >
          <div className="relative z-10 w-full aspect-square rounded-[3rem] overflow-hidden border-2 border-white/10 rotate-3 transform-style-3d hover:rotate-0 transition-transform duration-700">
            <Image
              src="/hero-main.jpg"
              alt="Premium Tech"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent" />
            
            {/* Floating Reviews (Indian names) */}
            <motion.div
              initial={{ opacity: 0, x: -30, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                x: 0, 
                scale: 1,
                y: [0, -12, 0] 
              }}
              transition={{ 
                delay: 1, 
                duration: 0.6,
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="absolute left-2 sm:-left-12 lg:-left-24 top-4 sm:top-10 p-4 glass rounded-2xl shadow-2xl z-20 max-w-[150px] sm:max-w-[180px] scale-75 sm:scale-100 origin-top-left"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full border border-white/20 overflow-hidden relative">
                  <Image src="https://i.pravatar.cc/100?u=rahul" alt="Rahul" fill className="object-cover" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-white leading-none">Rahul Sharma</div>
                  <div className="flex gap-0.5 mt-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={8} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-[10px] text-zinc-400 leading-tight italic">
                "Finding genuine tech reviews in India was hard until I found this."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                x: 0, 
                scale: 1,
                y: [0, 15, 0] 
              }}
              transition={{ 
                delay: 1.3, 
                duration: 0.6,
                y: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="absolute right-2 sm:-right-12 lg:-right-24 top-1/2 -translate-y-1/2 p-4 glass rounded-2xl shadow-2xl z-20 max-w-[150px] sm:max-w-[180px] scale-75 sm:scale-100 origin-right"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full border border-white/20 overflow-hidden relative">
                  <Image src="https://i.pravatar.cc/100?u=priya" alt="Priya" fill className="object-cover" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-white leading-none">Priya Patel</div>
                  <div className="flex gap-0.5 mt-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={8} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-[10px] text-zinc-400 leading-tight italic">
                "The premium curation is visible in every product they recommend."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                x: 0, 
                scale: 1,
                y: [0, -8, 0] 
              }}
              transition={{ 
                delay: 1.9, 
                duration: 0.6,
                y: {
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="absolute right-2 sm:-right-12 lg:-right-24 top-4 sm:top-10 p-4 glass rounded-2xl shadow-2xl z-20 max-w-[150px] sm:max-w-[180px] scale-75 sm:scale-100 origin-top-right"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full border border-white/20 overflow-hidden relative">
                  <Image src="https://i.pravatar.cc/100?u=ananya" alt="Ananya" fill className="object-cover" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-white leading-none">Ananya Singh</div>
                  <div className="flex gap-0.5 mt-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={8} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-[10px] text-zinc-400 leading-tight italic">
                "Finally, a site that actually tests what they sell!"
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                y: [0, -10, 0], 
                scale: 1 
              }}
              transition={{ 
                delay: 1.6, 
                duration: 0.6,
                y: {
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="absolute left-2 sm:-left-8 lg:-left-16 bottom-4 sm:bottom-10 p-4 glass rounded-2xl shadow-2xl z-20 max-w-[150px] sm:max-w-[180px] scale-75 sm:scale-100 origin-bottom-left"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full border border-white/20 overflow-hidden relative">
                  <Image src="https://i.pravatar.cc/100?u=amit" alt="Amit" fill className="object-cover" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-white leading-none">Amit Gupta</div>
                  <div className="flex gap-0.5 mt-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={8} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-[10px] text-zinc-400 leading-tight italic">
                "Saved me thousands on my new home office setup. Pure gold!"
              </p>
            </motion.div>
          </div>
          
          {/* Decorative shapes behind */}
          <div className="absolute -top-10 -right-10 w-64 h-64 border-4 border-white/5 rounded-full" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 border border-white/5 rounded-[4rem] rotate-12" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
