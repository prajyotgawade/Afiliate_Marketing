import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Globe, Mail, Share2, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-black py-20 px-6 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 lg:gap-32">
        <div className="max-w-sm flex-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="relative w-10 h-10 overflow-hidden rounded-lg">
              <Image 
                src="/logo-new.png" 
                alt="NEXORA Logo" 
                fill 
                className="object-cover scale-125" 
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-white uppercase italic">
              NEXORA
            </span>
          </div>
          <p className="text-zinc-500 text-sm leading-relaxed mb-8">
            The world's premium curated tech review and affiliate platform. We
            bring you the most innovative gadgets with deep insights to help you
            make the best decisions.
          </p>
          <div className="flex gap-4">
            {[Globe, Mail, Share2].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-white hover:border-zinc-500 transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 flex-1">
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold mb-2">Company</h4>
            {["About Us", "Our Process", "Partners", "Contact"].map((link) => (
              <Link
                key={link}
                href={`/${link.toLowerCase().replace(" ", "-")}`}
                className="text-zinc-500 hover:text-white transition-colors text-sm"
              >
                {link}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold mb-2">Support</h4>
            {["Help Center", "Privacy Policy", "Terms of Use", "FAQ"].map(
              (link) => (
                <Link
                  key={link}
                  href={`/${link.toLowerCase().replace(/ /g, "-")}`}
                  className="text-zinc-500 hover:text-white transition-colors text-sm"
                >
                  {link}
                </Link>
              )
            )}
          </div>
          <div className="col-span-2 sm:col-span-1 flex flex-col gap-4">
            <h4 className="text-white font-bold mb-2">Newsletter</h4>
            <p className="text-zinc-600 text-xs leading-relaxed mb-2">
              Subscribe to get the latest deals and premium reviews.
            </p>
            <form className="relative flex items-center">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full bg-zinc-900 border border-zinc-800 py-3 pl-4 pr-12 rounded-xl text-sm focus:outline-none focus:border-zinc-500 transition-all text-white placeholder:text-zinc-600"
              />
              <button className="absolute right-2 p-1.5 rounded-lg bg-zinc-100 text-black hover:bg-white transition-all">
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-16 mt-16 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-6 text-zinc-700 text-xs">
        <p>© 2026 NEXORA. All rights reserved.</p>
        <div className="flex gap-8">
          <Link href="/cookie-policy" className="hover:text-zinc-400 transition-colors">
            Cookie Policy
          </Link>
          <Link href="/security" className="hover:text-zinc-400 transition-colors">
            Security
          </Link>
          <Link href="/disclosure" className="hover:text-zinc-400 transition-colors">
            Disclosure
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
