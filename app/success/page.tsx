"use client";

import PageBackground from "@/components/PageBackground";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="grow pt-32 pb-24 px-6 md:px-12 lg:px-24 relative overflow-hidden min-h-screen flex items-center justify-center">
      <PageBackground src="/images/backgrounds/contact_bg.png" alt="Success Background" opacity={0.5} />

      {/* Decorative tactical lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-linear-to-b from-transparent via-military-green/20 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-linear-to-b from-transparent via-military-green/20 to-transparent"></div>

      <div className="w-full max-w-2xl relative z-10 text-center">
        <div className="bg-surface-container-high grid-overlay p-8 md:p-16 relative overflow-hidden group tactical-shadow border border-military-green/30">
          <div className="absolute top-4 right-4 text-xs font-label text-military-green uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-military-green animate-pulse shrink-0"></span>
            SYS // CONFIRMED
          </div>

          <div className="flex flex-col items-center justify-center space-y-8">
            <div className="w-24 h-24 rounded-full border border-military-green/30 flex items-center justify-center bg-military-green/10">
              <span className="material-symbols-outlined text-6xl text-military-green">check_circle</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl font-headline font-bold tracking-tight text-white uppercase">
                Successfully Transmitted<br/>Your Message
              </h1>
              <p className="text-on-surface-variant font-mono text-sm tracking-widest uppercase">
                Data packet securely delivered to Command.<br/>Response protocol initiated.
              </p>
            </div>

            <div className="pt-8 w-full max-w-sm mx-auto">
              <Link href="/" className="w-full bg-surface-container-lowest border border-tertiary text-tertiary hover:bg-tertiary hover:text-black font-headline font-bold uppercase tracking-widest px-8 py-4 transition-all flex justify-center items-center gap-3">
                <span className="material-symbols-outlined text-sm">home</span>
                Back to Home
              </Link>
            </div>
          </div>
          
          {/* Radar sweeping effect overlay (decorative) */}
          <div className="absolute inset-0 bg-military-green/5 -translate-y-full group-hover:translate-y-full transition-transform duration-[3s] ease-linear pointer-events-none">
            <div className="w-full h-1 bg-military-green/30 shadow-[0_0_10px_rgba(75,83,32,0.5)]"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
