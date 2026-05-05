"use client";

import PageBackground from "@/components/PageBackground";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Signup() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const operativeName = formData.get("operativeName") || "";
    const codeName = formData.get("codeName") || "";
    const organization = formData.get("organization") || "";
    const clearance = formData.get("clearance") || "";
    const payload = formData.get("payload") || "";

    const messageIntent = "Client Login / Clearance Request";
    const subject = `Silver Wings Defence - ${messageIntent}`;
    const body = `Intent: ${messageIntent}

Operative Name: ${operativeName}
Sur/Code Name: ${codeName}
Organization/Agency: ${organization}
Security Clearance: ${clearance}

Encrypted Payload:
${payload}
`;

    try {
      await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subject, body }),
      });
    } catch (err) {
      console.error("Failed to send email", err);
    }

    // Redirect to success page
    setTimeout(() => {
      router.push("/success");
    }, 500);
  }

  return (
    <main className="grow pt-32 pb-24 px-6 md:px-12 lg:px-24 relative overflow-hidden min-h-screen flex items-center justify-center">
      <PageBackground src="/images/backgrounds/contact_bg.png" alt="Signup Background" opacity={0.5} />

      {/* Decorative tactical lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-linear-to-b from-transparent via-tertiary/20 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-linear-to-b from-transparent via-tertiary/20 to-transparent"></div>

      <div className="w-full max-w-2xl relative z-10">
        <div className="bg-surface-container-high grid-overlay p-8 md:p-12 relative overflow-hidden group tactical-shadow border border-outline-variant/30">
          <div className="absolute top-4 right-4 text-xs font-label text-on-surface-variant/40 uppercase tracking-widest">
            FRM-09A // INIT
          </div>

          <div className="mb-10 text-center">
            <span className="material-symbols-outlined text-4xl text-tertiary mb-4 block">how_to_reg</span>
            <h1 className="text-3xl font-headline font-bold tracking-tight text-on-surface mb-2 uppercase">Initiate Clearance Request</h1>
            <p className="text-sm text-on-surface-variant font-body">
              Submit clearance request to join the secure defense network.
            </p>
          </div>

          <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* First Name */}
              <div className="space-y-2">
                <label className="block text-xs font-label text-on-surface-variant uppercase tracking-widest">Operative Name</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant text-lg">person</span>
                  <input name="operativeName" className="w-full bg-surface-container-highest border-0 border-b border-outline-variant text-on-surface pl-12 pr-4 py-3 font-body text-sm transition-all focus:border-tertiary focus:ring-0 focus:outline-none focus:bg-primary/5" placeholder="ENTER DESIGNATION" type="text" required />
                </div>
              </div>
              {/* Last Name */}
              <div className="space-y-2">
                <label className="block text-xs font-label text-on-surface-variant uppercase tracking-widest">Sur/Code Name</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant text-lg">badge</span>
                  <input name="codeName" className="w-full bg-surface-container-highest border-0 border-b border-outline-variant text-on-surface pl-12 pr-4 py-3 font-body text-sm transition-all focus:border-tertiary focus:ring-0 focus:outline-none focus:bg-primary/5" placeholder="ENTER CLEARANCE ID" type="text" required />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Organization */}
              <div className="space-y-2">
                <label className="block text-xs font-label text-on-surface-variant uppercase tracking-widest">Organization/Agency</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant text-lg">account_balance</span>
                  <input name="organization" className="w-full bg-surface-container-highest border-0 border-b border-outline-variant text-on-surface pl-12 pr-4 py-3 font-body text-sm transition-all focus:border-tertiary focus:ring-0 focus:outline-none focus:bg-primary/5" placeholder="ENTER AFFILIATION" type="text" required />
                </div>
              </div>
              {/* Clearance */}
              <div className="space-y-2">
                <label className="block text-xs font-label text-on-surface-variant uppercase tracking-widest">Security Clearance (Opt)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant text-lg">security</span>
                  <select name="clearance" className="w-full bg-surface-container-highest border-0 border-b border-outline-variant text-on-surface pl-12 pr-4 py-3 font-body text-sm transition-all focus:border-tertiary focus:ring-0 appearance-none focus:outline-none focus:bg-primary/5">
                    <option className="bg-surface-container text-on-surface-variant" value="">SELECT LEVEL</option>
                    <option className="bg-surface-container text-on-surface" value="unclassified">UNCLASSIFIED</option>
                    <option className="bg-surface-container text-on-surface" value="confidential">CONFIDENTIAL</option>
                    <option className="bg-surface-container text-on-surface" value="secret">SECRET</option>
                    <option className="bg-surface-container text-tertiary" value="top_secret">TOP SECRET</option>
                  </select>
                </div>
              </div>
            </div>
            
            {/* Message */}
            <div className="space-y-2">
              <label className="block text-xs font-label text-on-surface-variant uppercase tracking-widest">Encrypted Payload</label>
              <div className="relative">
                <span className="absolute left-4 top-4 material-symbols-outlined text-on-surface-variant text-lg">enhanced_encryption</span>
                <textarea name="payload" className="w-full bg-surface-container-highest border-0 border-b border-outline-variant text-on-surface pl-12 pr-4 py-3 font-body text-sm transition-all focus:border-tertiary focus:ring-0 resize-none focus:outline-none focus:bg-primary/5" placeholder="ENTER TRANSMISSION DATA..." rows={5}></textarea>
              </div>
            </div>
            
            {/* Actions */}
            <div className="flex flex-col gap-6 pt-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-label text-on-surface-variant uppercase">
                  <span className="w-2 h-2 bg-military-green"></span>
                  CHANNEL SECURE
                </div>
                <button disabled={isSubmitting} className="bg-linear-to-tr from-military-green to-[#606B29] text-white font-headline font-bold uppercase px-8 py-3 hover:opacity-90 transition-opacity flex items-center gap-2 disabled:opacity-50" type="submit">
                  {isSubmitting ? "TRANSMITTING..." : "SUBMIT CLEARANCE REQUEST"}
                  <span className="material-symbols-outlined text-sm">send</span>
                </button>
              </div>

              <div className="text-center pt-4 border-t border-outline-variant/20">
                <p className="text-xs font-body text-on-surface-variant">
                  Already have active clearance?{' '}
                  <Link href="/login" className="text-tertiary hover:text-tertiary/80 font-bold uppercase tracking-widest transition-colors">
                    Return to Command Gateway
                  </Link>
                </p>
              </div>
            </div>
          </form>

          {/* Radar sweeping effect overlay (decorative) */}
          <div className="absolute inset-0 bg-tertiary/5 translate-y-full group-hover:-translate-y-full transition-transform duration-[4s] ease-in-out pointer-events-none">
            <div className="w-full h-1 bg-tertiary/30 shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
