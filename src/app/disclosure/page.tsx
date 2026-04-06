"use client";

import React from "react";
import LegalPage from "@/components/LegalPage";

export default function Disclosure() {
  return (
    <LegalPage
      title="Disclosure"
      subtitle="Last updated: April 06, 2026. NEXORA transparency is key."
    >
      <section className="space-y-8 text-zinc-400">
        <div>
           <h2 className="text-2xl font-bold mb-4">1. Affiliate Disclosure</h2>
           <p>
             NEXORA is a participant in the Amazon Services LLC Associates
             Program, an affiliate advertising program designed to provide a
             means for sites to earn advertising fees by advertising and
             linking to Amazon.com. We also participate in other affiliate
             programs with various tech and lifestyle retailers.
           </p>
        </div>

        <div>
           <h2 className="text-2xl font-bold mb-4">2. Earning Commissions</h2>
           <p>
             When you click on links and buy products through our site, we may
             earn a small commission at no additional cost to you. These
             commissions help us run the NEXORA team and maintain the quality of
             our reviews.
           </p>
        </div>

        <div>
           <h2 className="text-2xl font-bold mb-4">3. Editorial Independence</h2>
           <p>
             Our reviews are 100% independent. We do not accept payment to write
             favorable reviews, and our affiliate partnerships have no impact on
             the ratings we give to products.
           </p>
        </div>

        <div className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 italic text-white font-bold">
           Transparent gear intelligence because we believe in the products we recommend.
        </div>
      </section>
    </LegalPage>
  );
}
