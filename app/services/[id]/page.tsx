import Link from 'next/link';
import { getServiceById } from '@/lib/services';
import { notFound } from 'next/navigation';

export default async function SingleServicePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const service = await getServiceById(id);
  
  if (!service) {
    notFound();
  }

  const name = service.name;

  return (
    <main className="min-h-screen pt-24 bg-[#0a0a0a] flex flex-col relative overflow-hidden font-body">
      {/* Background Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik02MCAwaC0xdjYwaDFWME0wIDYwaDYwdi0xSDB2MXoiIGZpbGw9IiMzMzMiIGZpbGwtb3BhY2l0eT0iLjE1Ii8+PC9nPjwvc3ZnPg==')] opacity-30 mix-blend-overlay"></div>
      
      {/* Top Bar Tech Nav */}
      <div className="w-full border-b ghost-border px-6 md:px-12 py-4 flex justify-between items-center bg-surface-container-low/80 backdrop-blur-md relative z-10">
        <Link href="/services" className="font-mono text-sm text-tertiary hover:text-white transition-colors flex items-center gap-2 group">
          <span className="transform group-hover:-translate-x-1 transition-transform">←</span> [ ABORT AND RETURN TO SERVICES ]
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

          <div className="relative w-full h-full min-h-[400px] group flex items-center justify-center overflow-hidden border border-outline-variant/30">
            {/* The Service Image */}
            <img 
              src={service.imageSrc} 
              alt={service.imageAlt}
              className="absolute inset-0 w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105 opacity-80 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-linear-to-t from-surface-container-lowest to-transparent pointer-events-none"></div>
          </div>

          {/* Overlays texts */}
          <div className="absolute bottom-8 left-12 font-mono text-xs text-primary/70 flex flex-col gap-1 pointer-events-none">
            <span>SERVICE: {name}</span>
            <span>STATUS: OPERATIONAL</span>
            <span>CLEARANCE: LEVEL 5</span>
          </div>
        </div>

        {/* Right Column - Details */}
        <div className="lg:col-span-5 bg-surface-container-low p-8 md:p-12 xl:p-16 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-12">
              <div>
                <p className="font-mono text-primary text-sm mb-2 opacity-80 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">{service.icon}</span>
                  SYS.ID // SRV-OP-{id.toUpperCase()}
                </p>
                <h1 className="font-headline text-4xl md:text-5xl font-bold uppercase tracking-tighter text-inverse-surface leading-tight mb-4">{name}</h1>
                <p className="text-on-surface-variant leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="border border-tertiary px-3 py-1 font-mono text-xs text-tertiary animate-pulse shrink-0 ml-4 hidden md:block">
                TACTICAL
              </div>
            </div>

            <div className="space-y-10">
              <section>
                <h3 className="font-mono text-xs text-primary uppercase tracking-widest border-b ghost-border border-primary/30 pb-2 mb-6">Key Capabilities</h3>
                <ul className="font-mono text-sm text-on-surface-variant space-y-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex justify-between border-b ghost-border border-opacity-30 pb-2">
                      <span className="text-primary/70">[{String(idx + 1).padStart(2, '0')}]</span>
                      <span className="text-white text-right">{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="font-mono text-xs text-primary uppercase tracking-widest border-b ghost-border border-primary/30 pb-2 mb-6">Service Diagnostics</h3>
                <div className="bg-[#050505] p-6 border border-primary/20 relative overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]">
                  {/* Scanline effect */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-primary/50 animate-[scan_3s_linear_infinite] pointer-events-none"></div>
                  
                  <p className="font-mono text-xs md:text-sm text-[#00ff41] leading-relaxed relative z-10 drop-shadow-[0_0_2px_rgba(0,255,65,0.4)]">
                    {`> INITIALIZING CAPABILITY SCAN...
> RESOURCES: DEPLOYED AND READY
> INTEGRATION PROTOCOLS: ACTIVE
> STRATEGIC ALIGNMENT: 100%
> COMMAND LINK: SECURE
> 
> ${name.toUpperCase()} IS FULLY OPERATIONAL. STANDBY FOR DEPLOYMENT ORDERS.`}
                  </p>
                </div>
              </section>
            </div>
          </div>


        </div>
      </div>
    </main>
  );
}
