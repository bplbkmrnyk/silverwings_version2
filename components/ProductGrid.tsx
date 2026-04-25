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
      <article
        id={`product-card-${product.id}`}
        data-product-id={product.id}
        data-product-name={product.name}
        className="bg-surface-container-low relative flex flex-col overflow-hidden ghost-border group cursor-crosshair h-auto md:h-[400px]"
      >
        {/* Image + hover area */}
        <div
          className="relative h-[250px] md:absolute md:inset-0 md:h-full w-full overflow-hidden bg-surface-container-lowest"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => { setIsHovered(false); setIsHoveringCTA(false); }}
          onMouseMove={handleMouseMove}
        >
          {/* Background Image */}
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBT7fkLl2-xe0clYXsvmZP66KeTGsIhUxTBls4X2NYOC0fG00Atdj5rmuDGIgdJQozI1LwTyekkZ9MBpqTIFx7F5i-fPMCHYTd2wYPPLf-dX9k9_hyG-YCfq-kbWc4tiPFKFPHLBvabUSXHLBzS4pi1nxpCvmHMYZbuTfOQ3nbLPTVKB93ldy74InJPjIYJ1yTPS6yEnQrbGOURmKpb5oByeXQ6Zpi_QpbBzaLaXLiaR1Tgfjkj9PCwvxyLXBpEGN7FBfYYLjno7qk"
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-80 md:group-hover:scale-110 md:group-hover:opacity-20 transition-all duration-700"
          />

          {/* Desktop Default Overlay */}
          <div className="hidden md:flex absolute inset-0 bg-linear-to-t from-surface-container-lowest via-surface-container-lowest/40 to-transparent flex-col justify-end p-6 md:group-hover:opacity-0 transition-opacity duration-500 pointer-events-none">
            <div className="font-mono text-xs text-primary opacity-80 mb-2">SWD-SYS-{product.id}</div>
            <h3 className="font-headline text-2xl font-bold text-inverse-surface uppercase tracking-tight">{product.name}</h3>
          </div>

          {/* Desktop Hover CTA */}
          <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full md:group-hover:translate-y-0 transition-transform duration-500 hidden md:block z-10">
            <button
              id={`acquire-btn-${product.id}`}
              aria-label={`Acquire system: ${product.name}`}
              onClick={() => router.push(`/products/${product.id}`)}
              onMouseEnter={() => setIsHoveringCTA(true)}
              onMouseLeave={() => setIsHoveringCTA(false)}
              className="font-mono uppercase text-xs tracking-widest text-surface-container-lowest bg-tertiary py-4 px-6 w-full font-bold hover:bg-white transition-colors flex justify-between items-center group/btn relative overflow-hidden"
            >
              <span className="relative z-10">[ ACQUIRE SYSTEM ]</span>
              <span className="relative z-10 group-hover/btn:translate-x-2 transition-transform">→</span>
            </button>
          </div>
        </div>

        {/* Mobile Details */}
        <div className="p-6 flex flex-col md:hidden bg-surface-container-low border-t ghost-border">
          <div className="font-mono text-xs text-primary opacity-80 mb-2">SWD-SYS-{product.id}</div>
          <h3 className="font-headline text-xl font-bold text-inverse-surface uppercase tracking-tight mb-4">{product.name}</h3>

          {/* Click-to-toggle specs panel on mobile (also accessible to automated tests) */}
          <button
            id={`specs-toggle-${product.id}`}
            aria-label={`View specs for ${product.name}`}
            aria-expanded={isTooltipPinned}
            aria-controls={`specs-panel-${product.id}`}
            onClick={() => setIsTooltipPinned(!isTooltipPinned)}
            className="text-xs font-mono text-primary uppercase tracking-widest mb-3 flex items-center gap-2 hover:text-tertiary transition-colors"
          >
            <span className="material-symbols-outlined text-sm">{isTooltipPinned ? 'expand_less' : 'expand_more'}</span>
            {isTooltipPinned ? 'HIDE SPECS' : 'VIEW SPECS'}
          </button>

          {/* Specs panel — always rendered but toggled for mobile and test access */}
          <div
            id={`specs-panel-${product.id}`}
            role="region"
            aria-label={`Specs for ${product.name}`}
            className={`p-4 bg-surface-container-lowest border border-primary/20 mb-6 transition-all duration-300 ${isTooltipPinned ? 'block opacity-100' : 'hidden opacity-0'}`}
          >
            <p className="text-[#00ff41] font-mono text-xs leading-relaxed whitespace-pre-wrap drop-shadow-[0_0_2px_rgba(0,255,65,0.8)]">
              {product.specs}
            </p>
          </div>

          <button
            id={`acquire-mobile-btn-${product.id}`}
            aria-label={`Acquire system: ${product.name}`}
            onClick={() => router.push(`/products/${product.id}`)}
            className="font-mono uppercase text-xs tracking-widest text-surface-container-lowest bg-tertiary py-4 px-6 w-full font-bold flex justify-between items-center hover:bg-white transition-colors"
          >
            <span>[ ACQUIRE SYSTEM ]</span>
            <span>→</span>
          </button>
        </div>
      </article>

      {/* Desktop Hover Tooltip (pointer-attached) */}
      {showTooltip && (
        <div
          id={`product-tooltip-${product.id}`}
          role="tooltip"
          aria-label={`System info for ${product.name}`}
          className={`fixed hidden md:flex flex-col pointer-events-none z-100 bg-surface-container-highest/95 backdrop-blur-xl border p-5 shadow-2xl w-full transform -translate-x-4 -translate-y-[calc(100%+16px)] transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] ${isHoveringCTA ? 'max-w-[240px] border-[#ff003c]/60' : 'max-w-[340px] border-primary/40'}`}
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
          }}
        >
          {/* Corner accents */}
          <div className={`absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 ${isHoveringCTA ? 'border-[#ff003c]' : 'border-primary'}`}></div>
          <div className={`absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 ${isHoveringCTA ? 'border-[#ff003c]' : 'border-primary'}`}></div>
          <div className={`absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 ${isHoveringCTA ? 'border-[#ff003c]' : 'border-primary'}`}></div>
          <div className={`absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 ${isHoveringCTA ? 'border-[#ff003c]' : 'border-primary'}`}></div>

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
                  {`>>> INITIATING SECURE ACQUISITION PROTOCOL.\n\nWARNING: THIS ACTION WILL DEPLOY CLEARANCE LEVEL 4 ASSETS.\n\nAWAITING USER CONFIRMATION...`}<span className="inline-block w-2 h-3 bg-[#ff003c] animate-pulse align-middle ml-1"></span>
                </span>
              ) : (
                <span className="text-[#00ff41] drop-shadow-[0_0_2px_rgba(0,255,65,0.8)]">
                  {typedText}<span className="inline-block w-2 h-3 bg-[#00ff41] animate-pulse align-middle ml-1"></span>
                </span>
              )}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
