"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Product } from '@/lib/products';

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div id="product-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveringCTA, setIsHoveringCTA] = useState(false);
  const [isTooltipPinned, setIsTooltipPinned] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState('');

  const showTooltip = isHovered || isTooltipPinned;

  // Typing animation for retro terminal feel
  useEffect(() => {
    if (showTooltip && !isHoveringCTA) {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex === 0) setTypedText('');
        if (currentIndex <= product.specs.length) {
          setTypedText(product.specs.slice(0, currentIndex));
          currentIndex += 2;
        } else {
          clearInterval(interval);
        }
      }, 15);
      return () => clearInterval(interval);
    } else {
      setTimeout(() => setTypedText(''), 0);
    }
  }, [showTooltip, isHoveringCTA, product.specs]);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
      {/* ── Square card ── */}
      <article
        id={`product-card-${product.id}`}
        data-product-id={product.id}
        data-product-name={product.name}
        className="relative overflow-hidden ghost-border group cursor-crosshair"
        style={{ aspectRatio: '1 / 1' }}
      >
        {/* Dark card base */}
        <div className="absolute inset-0 bg-[#07090d]" />

        {/* ── Image zone: top 67% ── */}
        <div
          className="absolute inset-x-0 top-0 overflow-hidden"
          style={{ height: '67%' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => { setIsHovered(false); setIsHoveringCTA(false); }}
          onMouseMove={handleMouseMove}
        >
          {/* Silver studio spotlight — warm-white top light, cool silver rim */}
          <div
            className="absolute inset-0 transition-opacity duration-700"
            style={{
              background:
                'radial-gradient(ellipse 80% 70% at 50% 40%, rgba(240,245,255,0.18) 0%, rgba(200,215,235,0.07) 50%, transparent 100%)',
              opacity: isHovered ? 1 : 0.7,
            }}
          />
          {/* Ground reflection — subtle silver bloom at bottom */}
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              background:
                'radial-gradient(ellipse 60% 30% at 50% 100%, rgba(180,200,230,0.12) 0%, transparent 70%)',
              opacity: isHovered ? 1 : 0.4,
            }}
          />
          {/* Extra white hotspot on hover — polished chrome catch-light */}
          <div
            className="absolute inset-0 transition-opacity duration-400"
            style={{
              background:
                'radial-gradient(ellipse 35% 30% at 48% 38%, rgba(255,255,255,0.12) 0%, transparent 60%)',
              opacity: isHovered ? 1 : 0,
            }}
          />

          {/* Product image — pure polished silver / chrome finish */}
          <img
            src={product.image || "https://lh3.googleusercontent.com/aida-public/AB6AXuBT7fkLl2-xe0clYXsvmZP66KeTGsIhUxTBls4X2NYOC0fG00Atdj5rmuDGIgdJQozI1LwTyekkZ9MBpqTIFx7F5i-fPMCHYTd2wYPPLf-dX9k9_hyG-YCfq-kbWc4tiPFKFPHLBvabUSXHLBzS4pi1nxpCvmHMYZbuTfOQ3nbLPTVKB93ldy74InJPjIYJ1yTPS6yEnQrbGOURmKpb5oByeXQ6Zpi_QpbBzaLaXLiaR1Tgfjkj9PCwvxyLXBpEGN7FBfYYLjno7qk"}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-contain p-6 transition-all duration-700 group-hover:scale-[1.07]"
            style={{
              /* Polished silver: fully desaturated, very bright, high contrast, subtle cool hue */
              filter:
                'grayscale(1) brightness(1.75) contrast(1.3) hue-rotate(-5deg) drop-shadow(0 4px 24px rgba(200,220,255,0.18))',
              mixBlendMode: 'normal',
            }}
          />

          {/* ── All 4 targeting reticles inside the IMAGE zone ── */}
          <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-primary/35 group-hover:border-primary transition-colors duration-300" />
          <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-primary/35 group-hover:border-primary transition-colors duration-300" />
          <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-primary/35 group-hover:border-primary transition-colors duration-300" />
          <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-primary/35 group-hover:border-primary transition-colors duration-300" />

          {/* Soft gradient fade into info strip */}
          <div
            className="absolute bottom-0 inset-x-0 h-14 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, transparent, #0a0d12)' }}
          />
        </div>

        {/* ── Info strip: bottom 33% ── */}
        <div
          className="absolute inset-x-0 bottom-0 flex flex-col px-5 pt-3 pb-4 gap-1"
          style={{ height: '33%', background: 'linear-gradient(to bottom, #0a0d12 0%, #07090d 100%)' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => { setIsHovered(false); setIsHoveringCTA(false); }}
          onMouseMove={handleMouseMove}
        >
          {/* Divider */}
          <div className="w-full h-px bg-outline-variant/25 mb-1" />

          {/* Product number */}
          <p className="font-mono text-[11px] text-primary/65 tracking-[0.25em] uppercase leading-none">
            SWD-SYS-{String(product.id).padStart(2, '0')}
          </p>

          {/* Product name */}
          <h3 className="font-headline text-xl md:text-2xl font-bold text-on-surface uppercase tracking-tight leading-tight">
            {product.name}
          </h3>

          {/* Acquire CTA — always in the strip, slides up + fades in on hover */}
          <button
            id={`acquire-btn-${product.id}`}
            aria-label={`Acquire system: ${product.name}`}
            onClick={() => router.push(`/products/${product.id}`)}
            onMouseEnter={() => setIsHoveringCTA(true)}
            onMouseLeave={() => setIsHoveringCTA(false)}
            className="mt-auto w-full font-mono uppercase text-[11px] tracking-widest text-[#07090d] bg-tertiary py-3 px-4 font-bold flex justify-between items-center hover:bg-white transition-all duration-500"
            style={{
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? 'translateY(0)' : 'translateY(100%)',
            }}
          >
            <span>[ ACQUIRE SYSTEM ]</span>
            <span>→</span>
          </button>
        </div>
      </article>

      {/* ── Desktop hover tooltip (pointer-attached) ── */}
      {showTooltip && (
        <div
          id={`product-tooltip-${product.id}`}
          role="tooltip"
          aria-label={`System info for ${product.name}`}
          className={`fixed hidden md:flex flex-col pointer-events-none z-[100] bg-surface-container-highest/95 backdrop-blur-xl border p-5 shadow-2xl w-full transform -translate-x-4 -translate-y-[calc(100%+16px)] transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] ${isHoveringCTA ? 'max-w-[240px] border-[#ff003c]/60' : 'max-w-[340px] border-primary/40'}`}
          style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
        >
          {/* Corner accents */}
          <div className={`absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 ${isHoveringCTA ? 'border-[#ff003c]' : 'border-primary'}`} />
          <div className={`absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 ${isHoveringCTA ? 'border-[#ff003c]' : 'border-primary'}`} />
          <div className={`absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 ${isHoveringCTA ? 'border-[#ff003c]' : 'border-primary'}`} />
          <div className={`absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 ${isHoveringCTA ? 'border-[#ff003c]' : 'border-primary'}`} />

          <div className={`flex justify-between items-center mb-3 pb-2 border-b ${isHoveringCTA ? 'border-[#ff003c]/20' : 'border-primary/20'}`}>
            <span className={`font-mono text-[10px] opacity-70 ${isHoveringCTA ? 'text-[#ff003c]' : 'text-primary'}`}>
              {isHoveringCTA ? 'SYS.ALERT//CRITICAL' : 'SYS.OVERRIDE//ACTIVE'}
            </span>
            <span className={`font-mono text-[10px] animate-pulse ${isHoveringCTA ? 'text-[#ff003c]' : 'text-[#00ff41]'}`}>
              {isHoveringCTA ? 'WARN' : 'REC'}
            </span>
          </div>

          <h4 className={`font-headline text-lg font-bold uppercase tracking-tight mb-3 ${isHoveringCTA ? 'text-[#ff003c]' : 'text-primary'}`}>
            {isHoveringCTA ? 'ACTION REQ' : product.name}
          </h4>

          <div className={`bg-surface-container-lowest/50 p-3 border ${isHoveringCTA ? 'border-[#ff003c]/20' : 'border-primary/10'}`}>
            <p className="font-mono text-xs leading-relaxed whitespace-pre-wrap min-h-[140px]">
              {isHoveringCTA ? (
                <span className="text-[#ff003c] drop-shadow-[0_0_2px_rgba(255,0,60,0.8)]">
                  {`>>> INITIATING SECURE ACQUISITION PROTOCOL.\n\nWARNING: THIS ACTION WILL DEPLOY CLEARANCE LEVEL 4 ASSETS.\n\nAWAITING USER CONFIRMATION...`}
                  <span className="inline-block w-2 h-3 bg-[#ff003c] animate-pulse align-middle ml-1" />
                </span>
              ) : (
                <span className="text-[#00ff41] drop-shadow-[0_0_2px_rgba(0,255,65,0.8)]">
                  {typedText}
                  <span className="inline-block w-2 h-3 bg-[#00ff41] animate-pulse align-middle ml-1" />
                </span>
              )}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
