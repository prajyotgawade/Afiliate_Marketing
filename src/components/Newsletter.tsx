"use client";

import React, { useState, useEffect } from "react";
import { Mail, Check, Loader2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PRODUCTS } from "@/lib/data";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = localStorage.getItem("has-seen-newsletter-v1");
      if (!hasSeenPopup) {
        setIsPopupVisible(true);
      }
    }, 7000); // 7 seconds
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsPopupVisible(false);
    localStorage.setItem("has-seen-newsletter-v1", "true");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setTimeout(() => closePopup(), 2000);
    }, 1500);
  };

  return (
    <>
      <section className="py-32 px-6 lg:px-12 bg-black relative overflow-hidden">
      {/* Decorative background components */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/4" />

      <div className="max-w-5xl mx-auto glass border border-white/5 rounded-[3rem] p-12 lg:p-20 relative z-10 overflow-hidden text-center group">
        <div className="flex flex-col items-center gap-6 max-w-2xl mx-auto">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-primary"
          >
            <Mail size={32} />
          </motion.div>
          <motion.h2
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl lg:text-5xl font-black text-white leading-tight"
          >
            Never Miss <br />
            <span className="text-gradient">a Premium Deal.</span>
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
            className="text-zinc-500 text-lg"
          >
            Join 12,000+ tech enthusiasts and get early access to our most
            detailed reviews and limited-time discounts.
          </motion.p>

          <form
            onSubmit={handleSubmit}
            className="w-full mt-4 flex flex-col sm:flex-row gap-4 relative"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your professional email"
              disabled={status !== "idle"}
              className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4.5 text-white focus:outline-none focus:border-white/30 transition-all placeholder:text-zinc-700"
              required
            />
            <button
              type="submit"
              disabled={status !== "idle"}
              className="px-8 py-4.5 rounded-2xl bg-white text-black font-bold hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[140px]"
            >
              {status === "loading" ? (
                <Loader2 className="animate-spin" />
              ) : status === "success" ? (
                <div className="flex items-center gap-2">
                  <Check size={20} /> Signed!
                </div>
              ) : (
                "Join Newsletter"
              )}
            </button>
            <AnimatePresence>
              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute -bottom-10 left-0 right-0 text-green-400 font-medium text-sm"
                >
                  Welcome to the club! Check your inbox soon.
                </motion.p>
              )}
            </AnimatePresence>
          </form>

          <p className="text-[10px] text-zinc-600 mt-8 font-medium tracking-widest uppercase">
            NO SPAM. JUST PURE GADGET INTELLIGENCE.
          </p>
        </div>
      </div>
    </section>
    
    <AnimatePresence>
      {isPopupVisible && (
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
        >
           <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-lg glass-dark rounded-[3rem] p-10 border border-white/10 relative overflow-hidden"
           >
              <button
                 onClick={closePopup}
                 className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-zinc-500 hover:text-white"
              >
                 <X size={20} />
              </button>
              
              <div className="flex flex-col items-center text-center gap-6">
                 <div className="w-16 h-16 rounded-2xl bg-primary/20 text-primary flex items-center justify-center">
                    <Mail size={32} />
                 </div>
                 <h2 className="text-3xl font-black text-white">Join the Inner Circle.</h2>
                 <p className="text-zinc-500">Get early access to premium reviews and secret deals before they go public.</p>
                 
                 <form onSubmit={handleSubmit} className="w-full flex gap-2">
                    <input
                       type="email"
                       placeholder="your@email.com"
                       className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 text-white focus:outline-none focus:border-primary/50"
                       required
                    />
                    <button className="px-6 py-3.5 bg-white text-black font-black rounded-2xl hover:scale-105 active:scale-95 transition-all">
                       {status === "loading" ? <Loader2 className="animate-spin" /> : "Join"}
                    </button>
                 </form>
                 
                 <p className="text-[10px] text-zinc-700 font-bold uppercase tracking-widest">
                    No commitment. Unsubscribe anytime.
                 </p>
              </div>
           </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
};

export default Newsletter;
