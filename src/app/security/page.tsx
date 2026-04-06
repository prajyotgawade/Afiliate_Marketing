"use client";

import React from "react";
import LegalPage from "@/components/LegalPage";

export default function Security() {
  return (
    <LegalPage
      title="Security"
      subtitle="Last updated: April 06, 2026. Your data security is our top priority."
    >
      <section className="space-y-8 text-zinc-400">
        <div>
           <h2 className="text-2xl font-bold mb-4">1. Data Encryption</h2>
           <p>
             NEXORA uses top-tier SSL encryption (HTTPS) to secure all data
             transmissions between your browser and our servers. We never store
             your passwords in plain text.
           </p>
        </div>

        <div>
           <h2 className="text-2xl font-bold mb-4">2. Secure Payment Redirects</h2>
           <p>
             NEXORA does not directly handle your credit card or financial
             information. When you click a deal link or purchase a product, you
             are redirected to our partner retailers' secure checkout pages (e.g.
             Amazon). We only integrate with retailers who meet stringent
             security standards.
           </p>
        </div>

        <div>
           <h2 className="text-2xl font-bold mb-4">3. Regular Audits</h2>
           <p>
             Our infrastructure is regularly audited for vulnerabilities, and
             our internal team follows strict security protocols when updating
             the platform.
           </p>
        </div>

        <div className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 italic">
           To report a security vulnerability, please contact us at{" "}
           <span className="text-white font-bold">security@nexora.com</span>.
        </div>
      </section>
    </LegalPage>
  );
}
