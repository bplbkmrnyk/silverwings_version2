"use client";

import PageBackground from "@/components/PageBackground";
import Link from "next/link";
import { useState } from "react";

export default function Signup() {
  const [passphrase, setPassphrase] = useState("");
  const [verify, setVerify] = useState("");
  const [mismatch, setMismatch] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit() {
    if (passphrase !== verify) {
      setMismatch(true);
      return;
    }
    setMismatch(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <main className="grow pt-32 pb-24 px-6 md:px-12 lg:px-24 relative overflow-hidden min-h-screen flex items-center justify-center">
      <PageBackground src="/images/backgrounds/contact_bg.png" alt="Signup Background" opacity={0.5} />

      {/* Decorative tactical lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-linear-to-b from-transparent via-tertiary/20 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-linear-to-b from-transparent via-tertiary/20 to-transparent"></div>

      {/* Success toast */}
      {submitted && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-military-green text-white font-mono text-sm uppercase tracking-widest px-8 py-4 flex items-center gap-3 shadow-2xl animate-in fade-in duration-300">
          <span className="material-symbols-outlined text-sm">verified</span>
          CLEARANCE REQUEST SUBMITTED
        </div>
      )}

      <div className="w-full max-w-2xl relative z-10">
        <div className="bg-surface-container-high grid-overlay p-8 md:p-12 relative overflow-hidden group tactical-shadow border border-outline-variant/30">
          <div className="absolute top-4 right-4 text-xs font-label text-on-surface-variant/40 uppercase tracking-widest">
            REQ // TIER-1
          </div>

          <div className="mb-10 text-center">
            <span className="material-symbols-outlined text-4xl text-tertiary mb-4 block">how_to_reg</span>
            <h1 className="text-3xl font-headline font-bold tracking-tight text-on-surface mb-2 uppercase">Operative Registration</h1>
            <p className="text-sm text-on-surface-variant font-body">
              Submit clearance request to join the secure defense network.
            </p>
          </div>

          <form className="space-y-6 relative z-10" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Operative Name */}
              <div className="space-y-2">
                <label className="block text-xs font-label text-on-surface-variant uppercase tracking-widest">Operative Name</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant text-lg">person</span>
                  <input
                    className="w-full bg-surface-container-highest border-0 border-b border-outline-variant text-on-surface pl-12 pr-4 py-3 font-body text-sm transition-all focus:border-tertiary focus:ring-0 focus:outline-none focus:bg-primary/5"
                    placeholder="ENTER FULL DESIGNATION"
                    type="text"
                    required
                  />
                </div>
              </div>

              {/* Clearance Code / User ID */}
              <div className="space-y-2">
                <label className="block text-xs font-label text-on-surface-variant uppercase tracking-widest">Requested ID</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant text-lg">badge</span>
                  <input
                    className="w-full bg-surface-container-highest border-0 border-b border-outline-variant text-on-surface pl-12 pr-4 py-3 font-body text-sm transition-all focus:border-tertiary focus:ring-0 focus:outline-none focus:bg-primary/5"
                    placeholder="ENTER USER ID"
                    type="text"
                    required
                  />
                </div>
              </div>

              {/* Agency */}
              <div className="space-y-2">
                <label className="block text-xs font-label text-on-surface-variant uppercase tracking-widest">Affiliation / Agency</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant text-lg">account_balance</span>
                  <input
                    className="w-full bg-surface-container-highest border-0 border-b border-outline-variant text-on-surface pl-12 pr-4 py-3 font-body text-sm transition-all focus:border-tertiary focus:ring-0 focus:outline-none focus:bg-primary/5"
                    placeholder="ENTER ORGANIZATION"
                    type="text"
                    required
                  />
                </div>
              </div>

              {/* Security Level */}
              <div className="space-y-2">
                <label className="block text-xs font-label text-on-surface-variant uppercase tracking-widest">Clearance Level Request</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant text-lg">security</span>
                  <select className="w-full bg-surface-container-highest border-0 border-b border-outline-variant text-on-surface pl-12 pr-4 py-3 font-body text-sm transition-all focus:border-tertiary focus:ring-0 appearance-none focus:outline-none focus:bg-primary/5">
                    <option className="bg-surface-container text-on-surface-variant" value="">SELECT LEVEL</option>
                    <option className="bg-surface-container text-on-surface" value="contractor">EXTERNAL CONTRACTOR</option>
                    <option className="bg-surface-container text-on-surface" value="standard">STANDARD OPERATIVE</option>
                    <option className="bg-surface-container text-tertiary" value="command">COMMAND STAFF</option>
                  </select>
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="block text-xs font-label text-on-surface-variant uppercase tracking-widest">Security Passphrase</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant text-lg">password</span>
                  <input
                    className={`w-full bg-surface-container-highest border-0 border-b text-on-surface pl-12 pr-4 py-3 font-body text-sm transition-all focus:ring-0 focus:outline-none focus:bg-primary/5 ${mismatch ? "border-red-500" : "border-outline-variant focus:border-tertiary"}`}
                    placeholder="CREATE PASSPHRASE"
                    type="password"
                    required
                    value={passphrase}
                    onChange={(e) => { setPassphrase(e.target.value); setMismatch(false); }}
                  />
                </div>
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <label className="block text-xs font-label text-on-surface-variant uppercase tracking-widest">Verify Passphrase</label>
                <div className="relative">
                  <span className={`absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-lg ${mismatch ? "text-red-500" : "text-on-surface-variant"}`}>done_all</span>
                  <input
                    className={`w-full bg-surface-container-highest border-0 border-b text-on-surface pl-12 pr-4 py-3 font-body text-sm transition-all focus:ring-0 focus:outline-none focus:bg-primary/5 ${mismatch ? "border-red-500 bg-red-500/5" : "border-outline-variant focus:border-tertiary"}`}
                    placeholder="RE-ENTER PASSPHRASE"
                    type="password"
                    required
                    value={verify}
                    onChange={(e) => { setVerify(e.target.value); setMismatch(false); }}
                  />
                </div>
                {mismatch && (
                  <p className="text-xs font-mono text-red-500 uppercase tracking-widest flex items-center gap-1 mt-1">
                    <span className="material-symbols-outlined text-sm">error</span>
                    PASSPHRASE MISMATCH — CLEARANCE DENIED
                  </p>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-8">
              <button
                className="w-full bg-linear-to-tr from-military-green to-[#606B29] text-white font-headline font-bold uppercase px-8 py-4 hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mb-4"
                type="submit"
              >
                SUBMIT CLEARANCE REQUEST
                <span className="material-symbols-outlined text-sm">send</span>
              </button>

              <div className="text-center">
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
