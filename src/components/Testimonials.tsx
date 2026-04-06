"use client";

import React from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    name: "Vikram Malhotra",
    role: "Tech Enthusiast",
    review: "NEXORA has completely changed how I shop for gadgets in India. The depth of their reviews is unmatched and the curated links actually save me money.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=vikram"
  },
  {
    name: "Sneha Reddy",
    role: "Freelance Designer",
    review: "Finally, a platform that understands what 'premium' actually means. Every product recommended here has premium build quality. Pure satisfaction!",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=sneha"
  },
  {
    name: "Arjun Mehta",
    role: "Productivity Nerd",
    review: "The price tracking here is a lifesaver. I waited for their signal on the Audio Pro Max and got it at its lowest price ever. Truly professional.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=arjun"
  },
  {
    name: "Deepa Iyer",
    role: "Software Engineer",
    review: "Authenticity is hard to find in tech reviews these days, but NEXORA's 30-day testing rule makes me trust them completely. Excellent UX!",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=deepa"
  },
  {
    name: "Rohan Das",
    role: "Gamer",
    review: "Their mechanical keyboard reviews are legendary. Built my entire setup based on their recommendations and couldn't be happier with the results.",
    rating: 4,
    avatar: "https://i.pravatar.cc/150?u=rohan"
  },
  {
    name: "Anjali Verma",
    role: "Digital Nomad",
    review: "As someone who travels constantly, I need gear that lasts. Their focus on durability is exactly what I was looking for. 5-star service!",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=anjali"
  }
];

const Testimonials = () => {
  return (
    <section className="py-32 px-6 lg:px-12 bg-black border-t border-zinc-900 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary uppercase tracking-widest mb-6"
          >
             Our Community
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight"
          >
            Trusted by the <br />
            <span className="text-gradient">Nexora Insiders.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 text-lg max-w-2xl mx-auto"
          >
            Join thousands of enthusiasts who have upgraded their digital life
            through our independent, high-performance curation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="p-8 rounded-[2.5rem] glass border border-white/5 relative overflow-hidden group"
            >
              <Quote className="absolute top-6 right-6 text-primary/10 group-hover:text-primary/20 transition-all" size={48} />
              
              <div className="flex items-center gap-4 mb-8">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-primary/50 transition-colors">
                  <Image src={testimonial.avatar} alt={testimonial.name} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-white font-bold leading-none mb-1">{testimonial.name}</h3>
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, starIdx) => (
                  <Star 
                    key={starIdx} 
                    size={14} 
                    className={starIdx < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-zinc-700"} 
                  />
                ))}
              </div>

              <p className="text-zinc-400 leading-relaxed italic relative z-10">
                "{testimonial.review}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
