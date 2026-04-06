"use client";

import React from "react";
import LegalPage from "@/components/LegalPage";

export default function FAQ() {
  return (
    <LegalPage
      title="Frequently Asked Questions"
      subtitle="Find answers to common questions about our platform and our review process."
    >
      <section className="space-y-12 text-zinc-400">
        <div>
           <h2 className="text-xl font-bold text-white mb-2">Q: How do you choose products for review?</h2>
           <p>
             We focus on products that are innovative, highly rated by consumers,
             and offer exceptional value. Our team of tech enthusiasts
             constantly scans the market for new and groundbreaking gear.
           </p>
        </div>

        <div>
           <h2 className="text-xl font-bold text-white mb-2">Q: Are your reviews unbiased if you earn commissions?</h2>
           <p>
             Absolutely. Our editorial team and our affiliate team operate
             separately. Reviews are based solely on our performance testing and
             opinions, regardless of whether a product is part of an affiliate
             program or not.
           </p>
        </div>

        <div>
           <h2 className="text-xl font-bold text-white mb-2">Q: Does clicking an affiliate link cost me extra?</h2>
           <p>
             No. The price you pay for the product remains exactly the same.
             In fact, we often negotiate special discounts and deals for our
             NEXORA community that you won't find elsewhere.
           </p>
        </div>

        <div>
           <h2 className="text-xl font-bold text-white mb-2">Q: How can I request a product review?</h2>
           <p>
             We love hearing from our community! If there's a specific piece of
             tech you'd like us to deep-dive into, simply reach out to us via
             the Contact page and our editorial board will consider it.
           </p>
        </div>

        <div className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 italic">
           For more specific support, please visit our{" "}
           <span className="text-white font-bold">Help Center</span>.
        </div>
      </section>
    </LegalPage>
  );
}
