"use client";

import React from "react";
import LegalPage from "@/components/LegalPage";

export default function CookiePolicy() {
  return (
    <LegalPage
      title="Cookie Policy"
      subtitle="Last updated: April 06, 2026. NEXORA uses cookies to enhance your experience."
    >
      <section className="space-y-8 text-zinc-400">
        <div>
           <h2 className="text-2xl font-bold mb-4">1. What are Cookies?</h2>
           <p>
             Cookies are small text files placed on your device by websites to
             track activity and store preferences. They help us understand how
             you interact with NEXORA and personalize your experience.
           </p>
        </div>

        <div>
           <h2 className="text-2xl font-bold mb-4">2. Types of Cookies We Use</h2>
           <ul className="list-disc pl-6 space-y-4">
             <li>
               <strong className="text-white">Strictly Necessary:</strong> These
               are required for the website to function. They allow you to
               navigate and use our basic features.
             </li>
             <li>
               <strong className="text-white">Analytics:</strong> These help us
               analyze website performance and understand visitor behavior.
             </li>
             <li>
               <strong className="text-white">Affiliate Tracking:</strong> These
               are used by our affiliate partners to track your purchases so we
               can earn a commission. For example, when you click on a deal
               link.
             </li>
           </ul>
        </div>

        <div>
           <h2 className="text-2xl font-bold mb-4">3. Managing Your Cookies</h2>
           <p>
             Most browsers allow you to control cookies through their settings.
             However, disabling certain cookies may affect the functionality of
             NEXORA, especially when it comes to personalized recommendations or
             the ability to use affiliate links accurately.
           </p>
        </div>

        <div className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 italic">
           For more on how we protect your data, see our{" "}
           <span className="text-white font-bold">Privacy Policy</span>.
        </div>
      </section>
    </LegalPage>
  );
}
