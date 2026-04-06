"use client";

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";

interface LegalPageProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const LegalPage: React.FC<LegalPageProps> = ({ title, subtitle, children }) => {
  return (
    <div className="min-h-screen bg-black pt-32">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 lg:px-12 pb-32">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="mb-16 border-b border-zinc-900 pb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-zinc-500 text-lg leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.2 }}
           className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-zinc-400 prose-li:text-zinc-400 prose-strong:text-white"
        >
          {children}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default LegalPage;
