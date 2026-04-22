export default function Contact() {
  return (
    <main className="flex-grow pt-32 pb-24 px-6 md:px-12 lg:px-24">
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
          <form className="space-y-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* First Name */}
              <div className="space-y-2">
                <label className="block text-xs font-label text-on-surface-variant uppercase tracking-widest">Operative Name</label>
                <input className="w-full bg-surface-container-highest border-0 border-b border-outline-variant text-on-surface px-4 py-3 font-body text-sm transition-all focus:border-tertiary focus:ring-0 focus:outline-none focus:bg-primary/5" placeholder="ENTER DESIGNATION" type="text" />
              </div>
              {/* Last Name */}
              <div className="space-y-2">
                <label className="block text-xs font-label text-on-surface-variant uppercase tracking-widest">Sur/Code Name</label>
                <input className="w-full bg-surface-container-highest border-0 border-b border-outline-variant text-on-surface px-4 py-3 font-body text-sm transition-all focus:border-tertiary focus:ring-0 focus:outline-none focus:bg-primary/5" placeholder="ENTER CLEARANCE ID" type="text" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Organization */}
              <div className="space-y-2">
                <label className="block text-xs font-label text-on-surface-variant uppercase tracking-widest">Organization/Agency</label>
                <input className="w-full bg-surface-container-highest border-0 border-b border-outline-variant text-on-surface px-4 py-3 font-body text-sm transition-all focus:border-tertiary focus:ring-0 focus:outline-none focus:bg-primary/5" placeholder="ENTER AFFILIATION" type="text" />
              </div>
              {/* Clearance */}
              <div className="space-y-2">
                <label className="block text-xs font-label text-on-surface-variant uppercase tracking-widest">Security Clearance (Opt)</label>
                <select className="w-full bg-surface-container-highest border-0 border-b border-outline-variant text-on-surface px-4 py-3 font-body text-sm transition-all focus:border-tertiary focus:ring-0 appearance-none focus:outline-none focus:bg-primary/5">
                  <option className="bg-surface-container text-on-surface-variant" value="">SELECT LEVEL</option>
                  <option className="bg-surface-container text-on-surface" value="unclassified">UNCLASSIFIED</option>
                  <option className="bg-surface-container text-on-surface" value="confidential">CONFIDENTIAL</option>
                  <option className="bg-surface-container text-on-surface" value="secret">SECRET</option>
                  <option className="bg-surface-container text-tertiary" value="top_secret">TOP SECRET</option>
                </select>
              </div>
            </div>
            {/* Message */}
            <div className="space-y-2">
              <label className="block text-xs font-label text-on-surface-variant uppercase tracking-widest">Encrypted Payload</label>
              <textarea className="w-full bg-surface-container-highest border-0 border-b border-outline-variant text-on-surface px-4 py-3 font-body text-sm transition-all focus:border-tertiary focus:ring-0 resize-none focus:outline-none focus:bg-primary/5" placeholder="ENTER TRANSMISSION DATA..." rows={5}></textarea>
            </div>
            {/* Actions */}
            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center gap-2 text-xs font-label text-on-surface-variant uppercase">
                <span className="w-2 h-2 bg-[#4B5320]"></span>
                CHANNEL SECURE
              </div>
              <button className="bg-gradient-to-tr from-primary to-on-primary-container text-on-primary font-headline font-bold uppercase px-8 py-3 hover:opacity-90 transition-opacity flex items-center gap-2" type="button">
                TRANSMIT
                <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </div>
          </form>
        </div>

        {/* Side Info (Col 8-12) */}
        <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
          {/* Location Module */}
          <div className="bg-surface-container-low p-8 relative flex-grow">
            <div className="absolute top-4 right-4 text-xs font-label text-on-surface-variant/40 uppercase tracking-widest">
              LOC // HQ
            </div>
            <h3 className="text-2xl font-headline font-bold text-on-surface uppercase mb-6">Global Command</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-1">location_on</span>
                <div>
                  <p className="text-sm font-label text-on-surface-variant uppercase tracking-widest mb-1">Primary Nexus</p>
                  <p className="text-on-surface font-body">100 Tactical Way<br/>Sector 7G, Pentagon City<br/>VA 22202, USA</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-1">call</span>
                <div>
                  <p className="text-sm font-label text-on-surface-variant uppercase tracking-widest mb-1">Direct Line</p>
                  <p className="text-on-surface font-body">+1 (800) DEF-SYNC</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-1">mail</span>
                <div>
                  <p className="text-sm font-label text-on-surface-variant uppercase tracking-widest mb-1">Encrypted Comm</p>
                  <p className="text-on-surface font-body">nexus@silverwings.defense</p>
                </div>
              </div>
            </div>

            {/* Map Preview */}
            <div className="mt-8 h-48 bg-surface-container-highest relative overflow-hidden border border-outline-variant/15">
              <img alt="Dark themed satellite map view of Washington DC area" className="w-full h-full object-cover opacity-60 grayscale mix-blend-luminosity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgvwDJC-ouIBzYzmpnvlu2esaJEpN2Rt0dYap5fctrtDw0DjDouMDiODjO2prsBQ59ygxY5_bXcsx48XI29AA8kTLMeofRzRBll52YY9svted3DfH11Joxi84SR_jlN2wrvV0ufQRQdDE30n5XFEP-ABwbKmnP9-Q8dVHHO4OxLuyzxrYPRcSS6olzEKPM-PJsVpc19GHOikXmwN7CnR6jn3aXZ_Vs60Mx_6BdfY2wQrXwmAQRY9U5xaiD-xG4qoeizTOKOT2p58g"/>
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
              <span className="w-1.5 h-1.5 bg-[#4B5320] animate-pulse"></span>
              <span className="text-xs font-label text-[#4B5320] uppercase tracking-widest">ACTIVE</span>
            </div>
            <span className="material-symbols-outlined text-3xl text-tertiary mb-4 block">vpn_key</span>
            <h3 className="text-xl font-headline font-bold text-on-surface uppercase mb-2">Partner Portal</h3>
            <p className="text-sm text-on-surface-variant font-body mb-6">Access classified documentation, supply chain telemetry, and active deployment status.</p>
            <button className="w-full border border-tertiary text-tertiary font-headline font-bold uppercase px-6 py-3 hover:bg-tertiary/10 transition-colors flex items-center justify-center gap-2">
              AUTHORIZE ACCESS
              <span className="material-symbols-outlined text-sm">login</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
