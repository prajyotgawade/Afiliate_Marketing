import { Product, BlogPost } from "@/types";

export const PRODUCTS: Product[] = [
  {
    id: "premium-headphones-pro",
    title: "Celestial Audio Pro Max",
    description: "Industry-leading noise cancellation and spatial audio for an immersive listening experience.",
    price: 349.99,
    rating: 4.8,
    reviews: 1240,
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000",
    category: "Audio",
    affiliateUrl: "https://amazon.com",
    features: ["Active Noise Cancellation", "40-hour Battery Life", "Spatial Audio Support", "Seamless Device Switching"],
    pros: ["Superior Sound Quality", "Exceptional Build", "Excellent Noise Cancellation"],
    cons: ["Premium Pricing", "Case is bulky"],
    isTrending: true
  },
  {
    id: "smartwatch-vanguard",
    title: "Vanguard Titan X Smartwatch",
    description: "The ultimate rugged smartwatch for extreme athletes and outdoor explorers.",
    price: 799.00,
    rating: 4.9,
    reviews: 865,
    imageUrl: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1000",
    category: "Wearables",
    affiliateUrl: "https://amazon.com",
    features: ["Titanium Case", "Precision Dual-frequency GPS", "Up to 36 hours of battery", "Water resistant to 100m"],
    pros: ["Indestructible Design", "Incredible Battery Life", "Highly Accurate Sensors"],
    cons: ["Large and heavy for small wrists"],
    isLimitedTime: true
  },
  {
    id: "ergonomic-keyboard-elite",
    title: "Lumina mechanical 75%",
    description: "Low-profile mechanical keyboard with customizable RGB and tactile switches.",
    price: 229.00,
    rating: 4.7,
    reviews: 540,
    imageUrl: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=1000",
    category: "Peripherals",
    affiliateUrl: "https://amazon.com",
    features: ["Hot-swappable switches", "Per-key RGB lighting", "Bluetooth 5.1 & Wired", "Full aluminum body"],
    pros: ["Amazing Typing Feel", "Sleek Aesthetics", "Highly Customizable"],
    cons: ["Non-standard bottom row", "Software can be finicky"]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "best-tech-stack-2026",
    title: "10 Must-Have Tech Gadgets to Elevate Your Productivity in 2026",
    excerpt: "From AI-powered monitors to ergonomic setups that actually work, we've curated the ultimate list.",
    content: "Content placeholder...",
    author: "Alex Rivera",
    date: "April 05, 2026",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000",
    category: "Productivity",
    readTime: "8 min read"
  },
  {
    id: "the-future-of-audio",
    title: "Spatial Audio vs. Lossless: What Actually Matters for Audiophiles?",
    excerpt: "Deep diving into the world of high-fidelity audio and why your current setup might be holding you back.",
    content: "Content placeholder...",
    author: "Jordan Smith",
    date: "March 28, 2026",
    imageUrl: "https://images.unsplash.com/photo-1524368270343-bc97e101f3db?q=80&w=1000",
    category: "Audio",
    readTime: "12 min read"
  }
];
