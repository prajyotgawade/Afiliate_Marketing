"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Send, Globe, Mail, MessageSquare, Check, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ContactPage = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <div className="min-h-screen bg-black pt-32">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 lg:px-12 pb-32">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             className="flex-1"
           >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary uppercase tracking-widest mb-6">
                 Connect
              </div>
              <h1 className="text-4xl lg:text-7xl font-black text-white mb-8 leading-tight">
                 Let's <span className="text-gradient">Collaborate.</span>
              </h1>
              <p className="text-zinc-500 text-lg leading-relaxed mb-12">
                 Whether you're a brand looking for a review, or a reader with a
                 question, we're here to help. Reach out and well get back to
                 you within 24 hours.
              </p>
              
              <div className="flex flex-col gap-8">
                 {[
                   { icon: <Mail />, label: "Email", value: "hello@nexora.com" },
                   { icon: <Globe />, label: "Location", value: "San Francisco, CA" },
                   { icon: <MessageSquare />, label: "Support", value: "Online 24/7" },
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-6 group">
                      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                         {item.icon}
                      </div>
                      <div>
                         <div className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-1">{item.label}</div>
                         <div className="text-white font-bold">{item.value}</div>
                      </div>
                   </div>
                 ))}
              </div>
           </motion.div>

           <motion.div
             initial={{ opacity: 0, x: 30 }}
             animate={{ opacity: 1, x: 0 }}
             className="flex-1"
           >
              <form onSubmit={handleSubmit} className="p-8 lg:p-12 rounded-[3.5rem] glass border border-white/5 flex flex-col gap-6 relative overflow-hidden group">
                 <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                       <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-2">First Name</label>
                       <input
                         type="text"
                         required
                         className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-white/30 transition-all placeholder:text-zinc-800"
                       />
                    </div>
                    <div className="flex flex-col gap-2">
                       <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-2">Last Name</label>
                       <input
                         type="text"
                         required
                         className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-white/30 transition-all placeholder:text-zinc-800"
                       />
                    </div>
                 </div>

                 <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-2">Email Address</label>
                    <input
                      type="email"
                      required
                      className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-white/30 transition-all placeholder:text-zinc-800"
                    />
                 </div>

                 <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-2">Message</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="How can we help you?"
                      className="bg-white/5 border border-white/10 rounded-[2rem] px-6 py-4 text-white focus:outline-none focus:border-white/30 transition-all placeholder:text-zinc-800 resize-none"
                    ></textarea>
                 </div>

                 <button
                   type="submit"
                   disabled={status !== "idle"}
                   className="w-full mt-4 py-5 rounded-[2rem] bg-white text-black font-black text-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                 >
                   {status === "loading" ? (
                     <Loader2 className="animate-spin" />
                   ) : status === "success" ? (
                     <><Check /> Message Sent!</>
                   ) : (
                     <><Send size={20} /> Send Inquiry</>
                   )}
                 </button>

                 <AnimatePresence>
                   {status === "success" && (
                     <motion.div
                       initial={{ opacity: 0, y: 20 }}
                       animate={{ opacity: 1, y: 0 }}
                       className="absolute inset-0 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center p-12 text-center"
                     >
                        <div className="w-20 h-20 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mb-6">
                           <Check size={40} />
                        </div>
                        <h3 className="text-2xl font-black text-white mb-4">Message Captured!</h3>
                        <p className="text-zinc-500 mb-8">We've received your message and will get back to you shortly.</p>
                        <button
                          onClick={() => setStatus("idle")}
                          className="px-8 py-3 rounded-full border border-white/10 text-white font-bold hover:bg-white hover:text-black transition-all"
                        >
                          Send another
                        </button>
                     </motion.div>
                   )}
                 </AnimatePresence>
              </form>
           </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
