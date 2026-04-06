"use client";

import React from "react";
import LegalPage from "@/components/LegalPage";
import { Mail, MessageSquare, Search, FileText } from "lucide-react";

export default function HelpCenter() {
  return (
    <LegalPage
      title="Help Center"
      subtitle="Find the help you need, whether it's regarding a product, our platform, or a partnership."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
         {[
           { icon: <Search size={24} />, title: "Product Search", desc: "How to find the best gear using our tools." },
           { icon: <MessageSquare size={24} />, title: "Contacting Support", desc: "How to get in touch with our tech experts." },
           { icon: <FileText size={24} />, title: "Review Requests", desc: "How to suggest a product for our team to review." },
           { icon: <Mail size={24} />, title: "Newsletter Support", desc: "Manage your subscription and email preferences." },
         ].map((item, i) => (
           <div key={i} className="p-8 rounded-[2.5rem] glass border border-white/5 hover:border-primary/50 transition-all flex flex-col gap-4">
              <div className="text-primary">{item.icon}</div>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
           </div>
         ))}
      </div>

      <section className="space-y-8 text-zinc-400 border-t border-zinc-900 pt-16">
        <div>
           <h2 className="text-2xl font-bold text-white mb-6">Common Support Questions</h2>
           <div className="space-y-6">
             <div>
               <h3 className="text-white font-bold mb-2">How can I track my order?</h3>
               <p>NEXORA does not directly sell products. Your orders are handled by our affiliate partners (like Amazon). You'll need to check your email or the retailer's website for your order tracking information.</p>
             </div>
             <div>
               <h3 className="text-white font-bold mb-2">Can I return a product I bought through your link?</h3>
               <p>Returns must be handled directly with the retailer where the purchase was made. Each retailer has their own return policy. We recommend checking their return terms before finishing your purchase.</p>
             </div>
             <div>
               <h3 className="text-white font-bold mb-2">How do I unsubscribe from your newsletter?</h3>
               <p>You can unsubscribe any time by clicking the "Unsubscribe" link at the bottom of any email we send you. Or reach out to us at support@nexora.com.</p>
             </div>
           </div>
        </div>
      </section>
    </LegalPage>
  );
}
