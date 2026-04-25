import PageBackground from "@/components/PageBackground";
import Link from "next/link";

export default function ForgotPassword() {
  return (
    <main className="grow pt-32 pb-24 px-6 md:px-12 lg:px-24 relative overflow-hidden min-h-screen flex items-center justify-center">
      <PageBackground src="/images/backgrounds/contact_bg.png" alt="Forgot Password Background" opacity={0.4} />

      {/* Decorative tactical lines */}
      <div className="absolute top-0 left-1/3 w-px h-full bg-linear-to-b from-transparent via-outline-variant/20 to-transparent"></div>
      <div className="absolute top-0 right-1/3 w-px h-full bg-linear-to-b from-transparent via-outline-variant/20 to-transparent"></div>

      <div className="w-full max-w-md relative z-10">
        <div className="bg-surface-container-high grid-overlay p-8 md:p-12 relative overflow-hidden border border-outline-variant/30 tactical-shadow">
          <div className="absolute top-4 right-4 text-xs font-label text-on-surface-variant/40 uppercase tracking-widest">
            SEC // RESET
          </div>

          <div className="mb-10 text-center">
            <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-4 block">lock_reset</span>
            <h1 className="text-3xl font-headline font-bold tracking-tight text-on-surface mb-2 uppercase">Reset Clearance</h1>
            <p className="text-sm text-on-surface-variant font-body">
              Enter your operative ID to receive a passphrase reset transmission.
            </p>
          </div>

          <form className="space-y-6 relative z-10">
            <div className="space-y-2">
              <label className="block text-xs font-label text-on-surface-variant uppercase tracking-widest">Operative ID / Registered Email</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant text-lg">alternate_email</span>
                <input
                  className="w-full bg-surface-container-highest border-0 border-b border-outline-variant text-on-surface pl-12 pr-4 py-3 font-body text-sm transition-all focus:border-tertiary focus:ring-0 focus:outline-none focus:bg-primary/5"
                  placeholder="ENTER REGISTERED EMAIL / ID"
                  type="email"
                  required
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                className="w-full bg-linear-to-tr from-on-primary-fixed-variant to-primary text-on-primary font-headline font-bold uppercase px-8 py-4 hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mb-6"
                type="button"
              >
                TRANSMIT RESET CODE
                <span className="material-symbols-outlined text-sm">send</span>
              </button>

              <div className="text-center">
                <Link href="/login" className="text-xs font-body text-on-surface-variant hover:text-primary transition-colors uppercase tracking-widest">
                  ← Return to Command Gateway
                </Link>
              </div>
            </div>
          </form>

          {/* Decorative scanning overlay */}
          <div className="absolute inset-0 bg-primary/5 translate-y-full hover:-translate-y-full transition-transform duration-[4s] ease-in-out pointer-events-none">
            <div className="w-full h-1 bg-primary/20 shadow-[0_0_8px_rgba(175,200,240,0.4)]"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
