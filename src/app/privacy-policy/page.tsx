"use client";

import React from "react";
import LegalPage from "@/components/LegalPage";

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      subtitle="Last updated: April 06, 2026. Your privacy is paramount at NEXORA."
    >
      <section className="space-y-8 text-zinc-400">
        <div>
          <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you
            create an account, subscribe to our newsletter, or contact us for
            support. This may include your name, email address, and any other
            information you choose to provide.
          </p>
        </div>

        <div>
           <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
           <p>
             We use the information we collect to provide, maintain, and improve
             our services, to communicate with you, and to personalize your
             experience on NEXORA. We do not sell your personal data to third
             parties.
           </p>
        </div>

        <div>
           <h2 className="text-2xl font-bold mb-4">3. Affiliate Links & Cookies</h2>
           <p>
             NEXORA uses cookies and similar tracking technologies to track
             activity on our website and hold certain information. Specifically,
             affiliate links use cookies to ensure that we receive credit for any
             purchases you make through our links. These cookies are typically
             set by our affiliate partners (like Amazon, specialized tech
             retailers, etc.).
           </p>
        </div>

        <div>
           <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
           <p>
             We implement a variety of security measures to maintain the safety
             of your personal information when you enter, submit, or access your
             personal information.
           </p>
        </div>

        <div className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 italic">
           For any privacy-related questions, please reach out to our team at{" "}
           <span className="text-white font-bold">privacy@nexora.com</span>.
        </div>
      </section>
    </LegalPage>
  );
}
