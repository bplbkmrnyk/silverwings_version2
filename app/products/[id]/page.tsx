import Link from 'next/link';
import { getProductById } from '@/lib/products';

export default async function SingleProductPage({ params }: { params: { id: string } }) {
  const id = params.id;
  const product = await getProductById(id);
  
  const name = product?.name || 'Unknown System';

  return (
    <main className="min-h-screen pt-24 bg-[#0a0a0a] flex flex-col relative overflow-hidden font-body">
      {/* Background Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik02MCAwaC0xdjYwaDFWME0wIDYwaDYwdi0xSDB2MXoiIGZpbGw9IiMzMzMiIGZpbGwtb3BhY2l0eT0iLjE1Ii8+PC9nPjwvc3ZnPg==')] opacity-30 mix-blend-overlay"></div>
      
      {/* Top Bar Tech Nav */}
      <div className="w-full border-b ghost-border px-6 md:px-12 py-4 flex justify-between items-center bg-surface-container-low/80 backdrop-blur-md relative z-10">
        <Link href="/products" className="font-mono text-sm text-tertiary hover:text-white transition-colors flex items-center gap-2 group">
          <span className="transform group-hover:-translate-x-1 transition-transform">←</span> [ ABORT AND RETURN ]
        </Link>
        <div className="font-mono text-xs text-primary flex items-center gap-4">
          <span className="hidden md:inline">ENCRYPTION: 256-BIT SECURE</span>
          <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#00ff41] animate-pulse"></span> CONNECTION STABLE</span>
        </div>
      </div>

      <div className="grow w-full max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-px bg-primary/20 relative z-10 border-x ghost-border">
        
        {/* Left Column - Visuals */}
        <div className="lg:col-span-7 relative bg-surface-container-lowest flex items-center justify-center p-8 md:p-16 min-h-[60vh] lg:min-h-0 overflow-hidden">
          
          {/* Tech UI Elements over image */}
          <div className="absolute top-8 left-8 border-t-2 border-l-2 border-primary w-16 h-16 opacity-50"></div>
          <div className="absolute top-8 right-8 border-t-2 border-r-2 border-primary w-16 h-16 opacity-50"></div>
          <div className="absolute bottom-8 left-8 border-b-2 border-l-2 border-primary w-16 h-16 opacity-50"></div>
          <div className="absolute bottom-8 right-8 border-b-2 border-r-2 border-primary w-16 h-16 opacity-50"></div>
          
          <div className="absolute top-1/2 left-0 w-full h-px bg-primary/20 pointer-events-none"></div>
          <div className="absolute left-1/2 top-0 w-px h-full bg-primary/20 pointer-events-none"></div>

          <div className="relative w-full max-w-2xl aspect-square group flex items-center justify-center">
            {/* Rotating targeting rings */}
            <div className="absolute inset-[5%] border border-dashed border-primary/20 rounded-full animate-[spin_60s_linear_infinite] pointer-events-none"></div>
            <div className="absolute inset-[15%] border border-primary/10 rounded-full animate-[spin_40s_linear_infinite_reverse] pointer-events-none"></div>
            
            {/* The Product Image */}
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBT7fkLl2-xe0clYXsvmZP66KeTGsIhUxTBls4X2NYOC0fG00Atdj5rmuDGIgdJQozI1LwTyekkZ9MBpqTIFx7F5i-fPMCHYTd2wYPPLf-dX9k9_hyG-YCfq-kbWc4tiPFKFPHLBvabUSXHLBzS4pi1nxpCvmHMYZbuTfOQ3nbLPTVKB93ldy74InJPjIYJ1yTPS6yEnQrbGOURmKpb5oByeXQ6Zpi_QpbBzaLaXLiaR1Tgfjkj9PCwvxyLXBpEGN7FBfYYLjno7qk" 
              alt={name}
              className="w-full h-full object-contain mix-blend-luminosity drop-shadow-2xl hover:mix-blend-normal transition-all duration-1000 group-hover:scale-105 z-10"
            />
          </div>

          {/* Overlays texts */}
          <div className="absolute bottom-8 left-12 font-mono text-xs text-primary/70 flex flex-col gap-1 pointer-events-none">
            <span>TARGET: {name}</span>
            <span>STATUS: READY FOR DEPLOYMENT</span>
            <span>COORDINATES: CLASSIFIED</span>
          </div>
        </div>

        {/* Right Column - Details */}
        <div className="lg:col-span-5 bg-surface-container-low p-8 md:p-12 xl:p-16 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-12">
              <div>
                <p className="font-mono text-primary text-sm mb-2 opacity-80">SYS.ID // SWD-SYS-{id}</p>
                <h1 className="font-headline text-4xl md:text-5xl xl:text-6xl font-bold uppercase tracking-tighter text-inverse-surface leading-none">{name}</h1>
              </div>
              <div className="border border-tertiary px-3 py-1 font-mono text-xs text-tertiary animate-pulse shrink-0 ml-4">
                RESTRICTED
              </div>
            </div>

            <div className="space-y-10">
              <section>
                <h3 className="font-mono text-xs text-primary uppercase tracking-widest border-b ghost-border border-primary/30 pb-2 mb-6">Tactical Specifications</h3>
                <ul className="font-mono text-sm text-on-surface-variant space-y-4">
                  <li className="flex justify-between border-b ghost-border border-opacity-30 pb-2">
                    <span>Classification</span>
                    <span className="text-white text-right">Autonomous Combat/Recon</span>
                  </li>
                  <li className="flex justify-between border-b ghost-border border-opacity-30 pb-2">
                    <span>Payload Capacity</span>
                    <span className="text-white text-right">Classified (Level 4 req.)</span>
                  </li>
                  <li className="flex justify-between border-b ghost-border border-opacity-30 pb-2">
                    <span>Operational Range</span>
                    <span className="text-white text-right">Beyond Visual Line of Sight</span>
                  </li>
                  <li className="flex justify-between border-b ghost-border border-opacity-30 pb-2">
                    <span>Endurance</span>
                    <span className="text-white text-right">Extended multi-hour operations</span>
                  </li>
                  <li className="flex justify-between border-b ghost-border border-opacity-30 pb-2">
                    <span>Propulsion</span>
                    <span className="text-white text-right">Next-gen low acoustic signature</span>
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="font-mono text-xs text-primary uppercase tracking-widest border-b ghost-border border-primary/30 pb-2 mb-6">System Analysis</h3>
                <div className="bg-[#050505] p-6 border border-primary/20 relative overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]">
                  {/* Scanline effect */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-primary/50 animate-[scan_3s_linear_infinite] pointer-events-none"></div>
                  
                  <p className="font-mono text-xs md:text-sm text-[#00ff41] leading-relaxed relative z-10 drop-shadow-[0_0_2px_rgba(0,255,65,0.4)]">
                    {`> INITIALIZING DIAGNOSTICS...
> SENSORS: ONLINE AND CALIBRATED
> WEAPONS/PAYLOAD BAY: SECURE
> COMMS LINK: ENCRYPTED (AES-256)
> AUTONOMY ENGINE: ACTIVE
> 
> THE ${name.toUpperCase()} IS A TIER-1 ASSET. DEPLOYMENT REQUIRES EXECUTIVE AUTHORIZATION. ALL SYSTEMS NOMINAL.`}
                  </p>
                </div>
              </section>
            </div>
          </div>

          <div className="mt-16 xl:mt-24">
            <p className="font-mono text-xs text-on-surface-variant mb-4 flex justify-between">
              <span>CONFIRMATION REQUIRED</span>
              <span className="text-[#ff003c]">[ Y / N ]</span>
            </p>
            <button className="w-full bg-[#ff003c] hover:bg-white text-white hover:text-black transition-all duration-300 py-6 md:py-8 font-headline text-2xl md:text-3xl font-bold tracking-widest uppercase relative overflow-hidden group">
              <span className="relative z-10 flex items-center justify-center gap-4">
                [ CONFIRM ACQUISITION ]
              </span>
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIG9wYWNpdHk9Ii4xNSIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTQwIDBMcCA0ME0wIDBsNDAgNDAiLz48L2c+PC9zdmc+')] opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay pointer-events-none"></div>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
