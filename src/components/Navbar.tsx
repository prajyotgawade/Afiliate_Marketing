"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, X, ShoppingCart, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Reviews", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12",
          isScrolled ? "py-4 glass-dark" : "py-8 bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center font-bold text-xl">
              A
            </div>
            <span className="text-2xl font-bold tracking-tighter text-gradient">
              AuraAffiliate
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Actions */}
          <div className="flex items-center gap-4 md:gap-6">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Search size={20} />
            </button>
            <div className="hidden md:block h-6 w-[1px] bg-zinc-800" />
            <Link
              href="/products"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors"
            >
              Shop Now
            </Link>
            <button
              className="md:hidden text-zinc-400 hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 glass-dark border-t border-zinc-800 p-6 md:hidden flex flex-col gap-6"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-zinc-300 hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/products"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-center font-bold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Explore Products
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Global Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-start justify-center p-6 md:p-24 bg-black/60 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="w-full max-w-2xl glass-dark rounded-[2.5rem] p-8 border border-white/10 shadow-3xl"
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-white uppercase tracking-widest text-[11px]">
                  Global Search
                </h3>
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="p-2 rounded-full bg-white/5 text-zinc-400 hover:text-white transition-all"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="relative mb-10">
                <Search
                  className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-500"
                  size={24}
                />
                <input
                  autoFocus
                  placeholder="Find products, reviews, and more..."
                  className="w-full bg-white/5 border border-white/10 rounded-[2rem] py-6 pl-16 pr-8 text-xl text-white focus:outline-none focus:border-primary/50 transition-all placeholder:text-zinc-700"
                />
              </div>

              <div className="flex flex-col gap-4">
                <div className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-2">
                  Popular Searches
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Headphones", "Mechanical Keyboards", "Desk Setup", "Audio Pro Max"].map((tag) => (
                    <button key={tag} className="px-4 py-2 rounded-full glass border border-white/5 text-sm text-zinc-400 hover:text-white hover:border-white/20 transition-all">
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
