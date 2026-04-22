export default function Products() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-[1600px] mx-auto">
      {/* Header Section */}
      <header className="mb-20">
        <div className="flex flex-col md:flex-row justify-between items-end border-b ghost-border pb-8">
          <div className="max-w-2xl">
            <p className="font-label text-tertiary uppercase tracking-widest text-sm mb-4">Tactical Inventory</p>
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-surface leading-none">ADVANCED<br/>SYSTEMS</h1>
          </div>
          <div className="mt-8 md:mt-0 max-w-sm text-right">
            <p className="text-on-surface-variant font-body text-sm">Deployment-ready hardware engineered for asymmetric dominance. All systems meet or exceed MIL-SPEC-810G protocols.</p>
          </div>
        </div>
      </header>
      
      {/* Product Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Product 1: Apex-1 Tactical UAV (Featured / Large) */}
        <article className="lg:col-span-12 bg-surface-container-high grid-overlay p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-50 font-mono text-xs text-on-surface-variant tracking-widest">ID: SWD-APX1-009</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] bg-surface-container-lowest ghost-border overflow-hidden">
              <img alt="Apex-1 Tactical UAV" className="w-full h-full object-cover object-center mix-blend-luminosity opacity-80 group-hover:opacity-100 transition-opacity duration-700" data-alt="Sharp, matte black tactical drone with aggressive angular design resting on a dark metallic surface under stark, cool directional lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBT7fkLl2-xe0clYXsvmZP66KeTGsIhUxTBls4X2NYOC0fG00Atdj5rmuDGIgdJQozI1LwTyekkZ9MBpqTIFx7F5i-fPMCHYTd2wYPPLf-dX9k9_hyG-YCfq-kbWc4tiPFKFPHLBvabUSXHLBzS4pi1nxpCvmHMYZbuTfOQ3nbLPTVKB93ldy74InJPjIYJ1yTPS6yEnQrbGOURmKpb5oByeXQ6Zpi_QpbBzaLaXLiaR1Tgfjkj9PCwvxyLXBpEGN7FBfYYLjno7qk"/>
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent opacity-60"></div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="mb-6">
                <span className="inline-block px-2 py-1 bg-[#4B5320] text-on-surface font-label text-xs uppercase tracking-wider mb-4">Operational Ready</span>
                <h2 className="font-headline text-4xl font-bold text-primary tracking-tight uppercase">Apex-1 Tactical UAV</h2>
                <p className="text-on-surface-variant mt-4 font-body leading-relaxed text-sm">High-altitude, long-endurance autonomous platform designed for contested airspace. Features stealth geometries and multi-spectral sensor fusion for unparalleled situational awareness.</p>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-8 border-t ghost-border pt-6">
                <div>
                  <p className="font-label text-tertiary text-xs uppercase tracking-widest">Range</p>
                  <p className="font-headline text-xl font-bold text-on-surface mt-1">450 <span className="text-sm text-on-surface-variant">NM</span></p>
                </div>
                <div>
                  <p className="font-label text-tertiary text-xs uppercase tracking-widest">Endurance</p>
                  <p className="font-headline text-xl font-bold text-on-surface mt-1">24 <span className="text-sm text-on-surface-variant">HRS</span></p>
                </div>
                <div>
                  <p className="font-label text-tertiary text-xs uppercase tracking-widest">Payload</p>
                  <p className="font-headline text-xl font-bold text-on-surface mt-1">150 <span className="text-sm text-on-surface-variant">KG</span></p>
                </div>
              </div>
              <button className="border border-tertiary text-tertiary font-label uppercase text-sm font-bold py-3 px-6 hover:bg-tertiary hover:text-surface-container-lowest transition-colors w-fit">Request Specs</button>
            </div>
          </div>
        </article>
        
        {/* Product 2: Aegis-5 Surveillance Suite */}
        <article className="lg:col-span-6 bg-surface-container-low p-6 relative flex flex-col justify-between group h-[500px]">
          <div className="absolute inset-0 bg-surface-container-highest opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
          <div className="absolute top-4 right-4 text-primary font-mono text-xs opacity-60">OPTICS//SYS</div>
          <div className="flex-grow flex items-center justify-center mb-6 relative overflow-hidden bg-surface-container-lowest ghost-border">
            <img alt="Aegis-5 Surveillance Suite" className="w-full h-full object-cover mix-blend-luminosity opacity-70 group-hover:scale-105 transition-transform duration-700" data-alt="Extreme close-up of a high-tech camera lens and optical sensor array with metallic silver and black housing, reflecting cold blue studio light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmFucDIy4XrPigf04lqS0GQ5vr4E9tE9HCKYCHRaX_YPBO1dxYSsOp0Kk7F5yi7RX1A3-7G8V-oBx-h8LtHwOxg6HoXjcXjizQlrNjvzenOr35u1TajkpzJXckKd-zlK7EqA8e4-gLG_2nB-GgfejoHDTUcwGfT6cjfg014COWNJ6odtxoNXVui3wK9keHgxhVE5DIbrnE0dqxN0ORwDFVDnY7y5OaE098k5wpbJe8OdjOnlKJa15vOHdHIAx7hBqKQWJUfQqvXV0"/>
            <div className="absolute bottom-0 left-0 p-4 bg-surface-container-lowest/90 backdrop-blur-md border-r border-t ghost-border transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 w-full">
              <p className="font-mono text-xs text-primary">RES: 8K // ZOOM: 200X // THERMAL: ACTIVE</p>
            </div>
          </div>
          <div>
            <h3 className="font-headline text-2xl font-bold text-inverse-surface tracking-tight uppercase mb-2">Aegis-5 Surveillance Suite</h3>
            <p className="text-on-surface-variant font-body text-sm line-clamp-2">Next-generation multi-modal optical package. Integrates deep-learning analytics for automated target classification in severe weather.</p>
          </div>
        </article>
        
        {/* Product 3: Sentry autonomous bot */}
        <article className="lg:col-span-6 bg-surface-container-low p-6 relative flex flex-col justify-between group h-[500px]">
          <div className="absolute inset-0 bg-surface-container-highest opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
          <div className="absolute top-4 right-4 text-primary font-mono text-xs opacity-60">GROUND//UGCV</div>
          <div className="flex-grow flex items-center justify-center mb-6 relative overflow-hidden bg-surface-container-lowest ghost-border">
            <img alt="Sentry Autonomous Bot" className="w-full h-full object-cover mix-blend-luminosity opacity-70 group-hover:scale-105 transition-transform duration-700" data-alt="Rugged tracked autonomous ground vehicle in a dimly lit industrial facility, featuring matte black armor plating and articulated sensor mast" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLH7t7WKq2PV4M0nExhhM7Ec7Vp4a6a9H0OsaZPSp3-j9EL7VJ_CVCPCF4cuu_qzWz0G3QYuHTVR-E-qyHj8KAMimArrRhk5tke18cbsPPkP9LSEFgsDRIhFILajw7TKYqkvcL7ue3K8HnytRU-ulENR8skmb1W8rlRIuSl2qAGncVLmLKmcxiOQjAK2O0sh5L5p4hCjLs5PSm4dprkKvhJKmxdmQYHdMdxphDJIZKU9JS89KXdMep2vPPpzr5WZDW-95kjzz59u8"/>
            <div className="absolute bottom-0 left-0 p-4 bg-surface-container-lowest/90 backdrop-blur-md border-r border-t ghost-border transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 w-full">
              <p className="font-mono text-xs text-primary">TERRAIN: ALL // ARMOR: STANAG-2 // COMMS: SATCOM</p>
            </div>
          </div>
          <div>
            <h3 className="font-headline text-2xl font-bold text-inverse-surface tracking-tight uppercase mb-2">Sentry Autonomous Bot</h3>
            <p className="text-on-surface-variant font-body text-sm line-clamp-2">Modular unmanned ground vehicle for perimeter defense and hazardous material handling. Swarm-capable architecture.</p>
          </div>
        </article>
      </div>
    </main>
  );
}
