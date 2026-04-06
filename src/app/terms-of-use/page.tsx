"use client";

import React from "react";
import LegalPage from "@/components/LegalPage";

export default function TermsOfUse() {
  return (
    <LegalPage
      title="Terms of Use"
      subtitle="Last updated: April 06, 2026. These terms govern your use of the NEXORA platform."
    >
      <section className="space-y-8 text-zinc-400">
        <div>
          <h2 className="text-2xl font-bold mb-4">1. Acceptable Use</h2>
          <p>
            By accessing and using NEXORA, you agree to comply with all
            applicable laws and regulations. You may not use NEXORA for any
            unlawful or prohibited purpose, nor in any way that could damage,
            disable, or impair the platform.
          </p>
        </div>

        <div>
           <h2 className="text-2xl font-bold mb-4">2. Intellectual Property</h2>
           <p>
             All content on NEXORA, including text, graphics, logos, and images,
             is the property of NEXORA or its content suppliers and is protected
             by international copyright laws. Any unauthorized use of the
             content is strictly prohibited.
           </p>
        </div>

        <div>
           <h2 className="text-2xl font-bold mb-4">3. Affiliate Links Disclaimer</h2>
           <p>
             NEXORA participates in various affiliate marketing programs. When
             you click on links to products on our site and make a purchase, this
             can result in a commission that is credited to NEXORA. This does
             NOT increase the price you pay. Our reviews and recommendations are
             based on our own opinions and testing, regardless of potential
             commission.
           </p>
        </div>

        <div>
           <h2 className="text-2xl font-bold mb-4">4. Limitation of Liability</h2>
           <p>
             NEXORA provides product information and reviews "as is" and makes no
             warranties, express or implied, regarding the accuracy,
             completeness, or reliability of the information. NEXORA shall not
             be liable for any damages arising out of your use of the platform or
             your purchase of any products through our affiliate links.
           </p>
        </div>

        <div className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 italic">
           For legal inquiries, contact us at{" "}
           <span className="text-white font-bold">legal@nexora.com</span>.
        </div>
      </section>
    </LegalPage>
  );
}
