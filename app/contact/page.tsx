"use client";

import PageBackground from "@/components/PageBackground";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();
  const [transmitted, setTransmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleTransmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    
    const params = new URLSearchParams(window.location.search);
    const intent = params.get("intent");
    
    let messageIntent = "General Contact";
    if (intent === "brochure") messageIntent = "Brochure Request";
    else if (intent === "clearance") messageIntent = "Client Login / Clearance Request";
    else if (intent === "acquisition") messageIntent = "Product Confirmation / Acquisition";
    else if (intent === "proposal") messageIntent = "Request Proposal";
    else if (intent === "explore") messageIntent = "Explore Solutions";
    else if (intent === "specs") messageIntent = "View Technical Specifications";

    const formData = new FormData(e.currentTarget);
    const firstName = formData.get("firstName") || "";
    const lastName = formData.get("lastName") || "";
    const workEmail = formData.get("workEmail") || "";
    const contactNumber = formData.get("contactNumber") || "";
    const organisation = formData.get("organisation") || "";
    const designation = formData.get("designation") || "";
    const cityCountry = formData.get("cityCountry") || "";
    const purpose = formData.get("purpose") || "";
    const message = formData.get("message") || "";

    const subject = `Silver Wings Defence - ${messageIntent}`;
    const body = `Intent: ${messageIntent}

Name: ${firstName} ${lastName}
Email: ${workEmail}
Contact Number: ${contactNumber}
Organisation: ${organisation}
Designation: ${designation}
City / Country: ${cityCountry}
Purpose of Enquiry: ${purpose}

Message / Mission Details:
${message}
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

    setTransmitted(true);
    setTimeout(() => {
      router.push("/success");
    }, 500);
  }

  return (
    <main className="grow pt-32 pb-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <PageBackground src="/images/backgrounds/contact_bg.png" alt="Contact Background" opacity={0.4} />

      {/* Transmission success toast */}
      {transmitted && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-military-green text-white font-mono text-sm uppercase tracking-widest px-8 py-4 flex items-center gap-3 shadow-2xl animate-in fade-in duration-300">
          <span className="material-symbols-outlined text-sm">done_all</span>
          TRANSMISSION ACKNOWLEDGED — CHANNEL SECURE
        </div>
      )}
      {/* Header */}
      <div className="mb-16 max-w-4xl">
        <h5 className="text-tertiary font-label text-sm tracking-widest uppercase mb-4">Secure Communications Protocol</h5>
        <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tight text-on-surface mb-6 uppercase">Establish Command</h1>
        <p className="text-lg text-on-surface-variant font-body max-w-2xl leading-relaxed">
          Initiate encrypted correspondence. Our global network of defense specialists stands ready to analyze, strategize, and deploy solutions tailored to your operational requirements.
        </p>
      </div>

      {/* Bento Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        {/* Form Section (Col 1-7) */}
        <div className="lg:col-span-7 bg-surface-container-high grid-overlay p-8 md:p-12 relative overflow-hidden group">
          <div className="absolute top-4 right-4 text-xs font-label text-on-surface-variant/40 uppercase tracking-widest">
            FRM-09A // INIT
          </div>
          <h2 className="text-xl md:text-2xl font-headline font-bold text-on-surface uppercase mb-6 relative z-10">Share Your Requirements</h2>
          <form className="space-y-6 relative z-10" onSubmit={handleTransmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div className="space-y-2">
                <label className="block text-xs font-label text-on-surface-variant uppercase tracking-widest">First Name *</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant text-lg">person</span>
                  <input name="firstName" className="w-full bg-surface-container-highest border-0 border-b border-outline-variant text-on-surface pl-12 pr-4 py-3 font-body text-sm transition-all focus:border-tertiary focus:ring-0 focus:outline-none focus:bg-primary/5" placeholder="First Name" type="text" required />
                </div>
              </div>
              {/* Last Name */}
              <div className="space-y-2">
                <label className="block text-xs font-label text-on-surface-variant uppercase tracking-widest">Last Name *</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant text-lg">person</span>
                  <input name="lastName" className="w-full bg-surface-container-highest border-0 border-b border-outline-variant text-on-surface pl-12 pr-4 py-3 font-body text-sm transition-all focus:border-tertiary focus:ring-0 focus:outline-none focus:bg-primary/5" placeholder="Last Name" type="text" required />
                </div>
              </div>
            </div>

            {/* Work Email */}
            <div className="space-y-2">
              <label className="block text-xs font-label text-on-surface-variant uppercase tracking-widest">Work Email *</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant text-lg">mail</span>
                <input name="workEmail" className="w-full bg-surface-container-highest border-0 border-b border-outline-variant text-on-surface pl-12 pr-4 py-3 font-body text-sm transition-all focus:border-tertiary focus:ring-0 focus:outline-none focus:bg-primary/5" placeholder="Work Email" type="email" required />
              </div>
            </div>

            {/* Contact Number */}
            <div className="space-y-2">
              <label className="block text-xs font-label text-on-surface-variant uppercase tracking-widest">Contact Number *</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant text-lg">call</span>
                <input name="contactNumber" className="w-full bg-surface-container-highest border-0 border-b border-outline-variant text-on-surface pl-12 pr-4 py-3 font-body text-sm transition-all focus:border-tertiary focus:ring-0 focus:outline-none focus:bg-primary/5" placeholder="Contact Number" type="tel" required />
              </div>
            </div>

            {/* Organisation / Unit Name */}
            <div className="space-y-2">
              <label className="block text-xs font-label text-on-surface-variant uppercase tracking-widest">Organisation / Unit Name *</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant text-lg">account_balance</span>
                <input name="organisation" className="w-full bg-surface-container-highest border-0 border-b border-outline-variant text-on-surface pl-12 pr-4 py-3 font-body text-sm transition-all focus:border-tertiary focus:ring-0 focus:outline-none focus:bg-primary/5" placeholder="Organisation / Unit Name" type="text" required />
              </div>
            </div>

            {/* Designation */}
            <div className="space-y-2">
              <label className="block text-xs font-label text-on-surface-variant uppercase tracking-widest">Designation</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant text-lg">badge</span>
                <input name="designation" className="w-full bg-surface-container-highest border-0 border-b border-outline-variant text-on-surface pl-12 pr-4 py-3 font-body text-sm transition-all focus:border-tertiary focus:ring-0 focus:outline-none focus:bg-primary/5" placeholder="Designation" type="text" />
              </div>
            </div>

            {/* City / Country */}
            <div className="space-y-2">
              <label className="block text-xs font-label text-on-surface-variant uppercase tracking-widest">City / Country</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant text-lg">location_on</span>
                <input name="cityCountry" className="w-full bg-surface-container-highest border-0 border-b border-outline-variant text-on-surface pl-12 pr-4 py-3 font-body text-sm transition-all focus:border-tertiary focus:ring-0 focus:outline-none focus:bg-primary/5" placeholder="City / Country" type="text" />
              </div>
            </div>

            {/* Purpose of Enquiry */}
            <div className="space-y-2">
              <label className="block text-xs font-label text-on-surface-variant uppercase tracking-widest">Purpose of Enquiry *</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant text-lg">help_outline</span>
                <select name="purpose" className="w-full bg-surface-container-highest border-0 border-b border-outline-variant text-on-surface pl-12 pr-4 py-3 font-body text-sm transition-all focus:border-tertiary focus:ring-0 appearance-none focus:outline-none focus:bg-primary/5" required>
                  <option className="bg-surface-container text-on-surface-variant" value="">Select a purpose</option>
                  <option className="bg-surface-container text-on-surface" value="sales">Sales & Procurement</option>
                  <option className="bg-surface-container text-on-surface" value="support">Technical Support</option>
                  <option className="bg-surface-container text-on-surface" value="partnership">Partnership & Integration</option>
                  <option className="bg-surface-container text-on-surface" value="general">General Enquiry</option>
                </select>
              </div>
            </div>

            {/* Message / Mission Details */}
            <div className="space-y-2">
              <label className="block text-xs font-label text-on-surface-variant uppercase tracking-widest">Message / Mission Details *</label>
              <div className="relative">
                <span className="absolute left-4 top-4 material-symbols-outlined text-on-surface-variant text-lg">chat</span>
                <textarea name="message" className="w-full bg-surface-container-highest border-0 border-b border-outline-variant text-on-surface pl-12 pr-4 py-3 font-body text-sm transition-all focus:border-tertiary focus:ring-0 resize-none focus:outline-none focus:bg-primary/5" placeholder="Message / Mission Details" rows={4} required></textarea>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-col gap-4">
              <button disabled={isSubmitting} className="w-full bg-linear-to-tr from-primary to-on-primary-container text-on-primary font-headline font-bold uppercase tracking-widest px-8 py-4 hover:opacity-90 transition-opacity flex justify-center items-center gap-2 disabled:opacity-50" type="submit">
                {isSubmitting ? "TRANSMITTING..." : "TRANSMIT MESSAGE"}
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
              <p className="text-[10px] text-on-surface-variant font-mono text-center leading-relaxed">
                By submitting this form, you authorise Silver Wings Defence to contact you regarding your enquiry. Your information will be handled in accordance with applicable data-protection norms.
              </p>
            </div>
          </form>

          {/* Radar sweeping effect overlay (decorative) */}
          <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:-translate-y-full transition-transform duration-[4s] ease-in-out pointer-events-none">
            <div className="w-full h-1 bg-primary/30 shadow-[0_0_10px_rgba(175,200,240,0.5)]"></div>
          </div>
        </div>

        {/* Side Info (Col 8-12) */}
        <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
          {/* Location Module */}
          <div className="bg-surface-container-low p-8 relative grow">
            <div className="absolute top-4 right-4 text-xs font-label text-on-surface-variant/40 uppercase tracking-widest">
              LOC // HQ
            </div>
            <h3 className="text-2xl font-headline font-bold text-on-surface uppercase mb-6">Global Command</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-1">location_on</span>
                <div>
                  <p className="text-sm font-label text-on-surface-variant uppercase tracking-widest mb-1">E-51 Infocity
                  </p>
                  <p className="text-on-surface font-body">Patia<br />Bhubaneswar<br />Odisha <br />India<br />751024</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-1">call</span>
                <div>
                  <p className="text-sm font-label text-on-surface-variant uppercase tracking-widest mb-1">Direct Line</p>
                  <p className="text-on-surface font-body">+91-9777213043<br />+91-6742361305</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-1">mail</span>
                <div>
                  <p className="text-sm font-label text-on-surface-variant uppercase tracking-widest mb-1">Encrypted Comm</p>
                  <p className="text-on-surface font-body">info@silverwingsdefence.com</p>
                </div>
              </div>
            </div>

            {/* Map Preview */}
            <div className="mt-8 h-48 bg-surface-container-highest relative overflow-hidden border border-outline-variant/15">
              <img alt="Dark themed satellite map view of Washington DC area" className="w-full h-full object-cover opacity-60 grayscale mix-blend-luminosity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgvwDJC-ouIBzYzmpnvlu2esaJEpN2Rt0dYap5fctrtDw0DjDouMDiODjO2prsBQ59ygxY5_bXcsx48XI29AA8kTLMeofRzRBll52YY9svted3DfH11Joxi84SR_jlN2wrvV0ufQRQdDE30n5XFEP-ABwbKmnP9-Q8dVHHO4OxLuyzxrYPRcSS6olzEKPM-PJsVpc19GHOikXmwN7CnR6jn3aXZ_Vs60Mx_6BdfY2wQrXwmAQRY9U5xaiD-xG4qoeizTOKOT2p58g" />
              <div className="absolute inset-0 bg-primary/5 mix-blend-overlay"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4 h-4 rounded-none border border-tertiary flex items-center justify-center relative">
                  <div className="w-1 h-1 bg-tertiary"></div>
                  <div className="absolute -top-1 -bottom-1 left-1/2 w-px bg-tertiary/50"></div>
                  <div className="absolute -left-1 -right-1 top-1/2 h-px bg-tertiary/50"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Secure Portal Preview */}
          <div className="bg-surface-container-high grid-overlay p-8 border border-tertiary/20 relative group">
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-military-green animate-pulse"></span>
              <span className="text-xs font-label text-military-green uppercase tracking-widest">ACTIVE</span>
            </div>
            <span className="material-symbols-outlined text-3xl text-tertiary mb-4 block">vpn_key</span>
            <h3 className="text-xl font-headline font-bold text-on-surface uppercase mb-2">Partner Portal</h3>
            <p className="text-sm text-on-surface-variant font-body mb-6">Access classified documentation, supply chain telemetry, and active deployment status.</p>
            <Link href="/login" className="w-full border border-tertiary text-tertiary font-headline font-bold uppercase px-6 py-3 hover:bg-tertiary/10 transition-colors flex items-center justify-center gap-2">
              AUTHORIZE ACCESS
              <span className="material-symbols-outlined text-sm">login</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
