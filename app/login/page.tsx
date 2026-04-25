import PageBackground from "@/components/PageBackground";
import Link from "next/link";

export default function Login() {
  return (
    <main className="grow pt-32 pb-24 px-6 md:px-12 lg:px-24 relative overflow-hidden min-h-screen flex items-center justify-center">
      <PageBackground src="/images/backgrounds/contact_bg.png" alt="Login Background" opacity={0.5} />

      {/* Decorative tactical lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-linear-to-b from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-linear-to-b from-transparent via-primary/20 to-transparent"></div>

      <div className="w-full max-w-lg relative z-10">
        {/* System status ticker */}
        <div className="bg-surface-container-lowest border border-outline-variant/20 px-4 py-2 flex items-center gap-3 mb-1 overflow-hidden">
          <span className="w-1.5 h-1.5 bg-military-green animate-pulse shrink-0"></span>
          <p className="text-[10px] font-mono text-on-surface-variant/60 uppercase tracking-widest whitespace-nowrap">
            NETWORK SECURE &nbsp;|&nbsp; ENCRYPTION: AES-256 &nbsp;|&nbsp; REGION: CLASSIFIED &nbsp;|&nbsp; THREAT LEVEL: LOW &nbsp;|&nbsp; UPLINK STABLE
          </p>
        </div>

        <div className="bg-surface-container-high grid-overlay p-8 md:p-12 relative overflow-hidden group tactical-shadow border border-outline-variant/30">
          <div className="absolute top-4 right-4 text-xs font-label text-on-surface-variant/40 uppercase tracking-widest">
            AUTH // TIER-1
          </div>

          <div className="mb-10 text-center">
            <span className="material-symbols-outlined text-4xl text-primary mb-4 block">shield_person</span>
            <h1 className="text-3xl font-headline font-bold tracking-tight text-on-surface mb-2 uppercase">Command Gateway</h1>
            <p className="text-sm text-on-surface-variant font-body">
              Enter security credentials to access the secure network.
            </p>
          </div>

          <form className="space-y-6 relative z-10">
            {/* User ID */}
            <div className="space-y-2">
              <label className="block text-xs font-label text-on-surface-variant uppercase tracking-widest">Operative ID / Clearance Code</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant text-lg">badge</span>
                <input
                  className="w-full bg-surface-container-highest border-0 border-b border-outline-variant text-on-surface pl-12 pr-4 py-3 font-body text-sm transition-all focus:border-tertiary focus:ring-0 focus:outline-none focus:bg-primary/5"
                  placeholder="ENTER ID"
                  type="text"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="block text-xs font-label text-on-surface-variant uppercase tracking-widest">Security Passphrase</label>
                <Link href="/forgot-password" className="text-xs font-label text-tertiary hover:text-tertiary/80 uppercase tracking-widest transition-colors">
                  Reset Clearance?
                </Link>
              </div>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant text-lg">password</span>
                <input
                  className="w-full bg-surface-container-highest border-0 border-b border-outline-variant text-on-surface pl-12 pr-4 py-3 font-body text-sm transition-all focus:border-tertiary focus:ring-0 focus:outline-none focus:bg-primary/5"
                  placeholder="ENTER PASSPHRASE"
                  type="password"
                  required
                />
              </div>
            </div>

            {/* Remember me checkbox */}
            <div className="flex items-center gap-3 pt-1">
              <input id="remember" type="checkbox" className="w-4 h-4 accent-primary bg-surface-container-highest border-outline-variant cursor-pointer" />
              <label htmlFor="remember" className="text-xs font-label text-on-surface-variant uppercase tracking-widest cursor-pointer select-none">Remember Terminal Session</label>
            </div>

            {/* Actions */}
            <div className="pt-4">
              <button className="w-full bg-linear-to-tr from-primary to-on-primary-container text-on-primary font-headline font-bold uppercase px-8 py-4 hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mb-6" type="button">
                AUTHORIZE ACCESS
                <span className="material-symbols-outlined text-sm">login</span>
              </button>

              <div className="relative flex items-center gap-4 mb-6">
                <div className="grow h-px bg-outline-variant/40"></div>
                <span className="text-[10px] font-mono text-on-surface-variant/50 uppercase tracking-widest shrink-0">OR</span>
                <div className="grow h-px bg-outline-variant/40"></div>
              </div>

              <div className="text-center">
                <p className="text-xs font-body text-on-surface-variant">
                  Unregistered Operative?{' '}
                  <Link href="/signup" className="text-primary hover:text-primary/80 font-bold uppercase tracking-widest transition-colors">
                    Initiate Clearance Request
                  </Link>
                </p>
              </div>
            </div>
          </form>

          {/* Biometric scanning effect overlay (decorative) */}
          <div className="absolute inset-0 bg-primary/5 -translate-y-full group-hover:translate-y-full transition-transform duration-[3s] ease-linear pointer-events-none">
            <div className="w-full h-1 bg-primary/30 shadow-[0_0_10px_rgba(175,200,240,0.5)]"></div>
          </div>
        </div>

        {/* Bottom security footer */}
        <div className="border border-outline-variant/20 border-t-0 bg-surface-container-lowest px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-military-green text-sm">verified_user</span>
            <span className="text-[10px] font-mono text-on-surface-variant/50 uppercase tracking-widest">Secure Connection</span>
          </div>
          <span className="text-[10px] font-mono text-on-surface-variant/30 uppercase tracking-widest">SWD-AUTH v2.4</span>
        </div>
      </div>
    </main>
  );
}
