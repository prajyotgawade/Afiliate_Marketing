"use client";

import React from "react";
import { Shield, Zap, Award, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      icon: <Zap className="text-yellow-400" />,
      title: "Lightning Fast Deals",
      description:
        "We track prices across 100+ stores to find the best deals in real-time.",
    },
    {
      icon: <Shield className="text-blue-400" />,
      title: "Verified Reviews",
      description:
        "Every product is tested for at least 30 days before we recommend it.",
    },
    {
      icon: <Award className="text-purple-400" />,
      title: "Premium Curation",
      description:
        "We only feature products that meet our high standards for design and quality.",
    },
    {
      icon: <BarChart3 className="text-green-400" />,
      title: "Deep Comparisons",
      description:
        "Detailed pros and cons tables for every category to help you choose.",
    },
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl font-bold text-white mb-6"
          >
            Why trust <span className="text-gradient-primary">AuraAffiliate?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 max-w-2xl mx-auto"
          >
            We're not just another affiliate site. We're a team of enthusiasts
            dedicated to finding the highest quality tech and life-style products.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl glass border border-white/5 hover:border-primary/20 hover:bg-white/[0.05] transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
