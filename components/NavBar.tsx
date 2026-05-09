"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav
      id="main-navbar"
      aria-label="Main Navigation"
      className="fixed top-0 w-full z-50 bg-[#111417]/90 backdrop-blur-md px-6 md:px-10 py-4 md:py-6 shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
    >
      <div className="flex justify-between items-center max-w-[1600px] mx-auto">
        {/* Logo */}
        <Link
          id="nav-logo"
          href="/"
          aria-label="Silver Wings Defence Home"
          className="relative z-50 flex items-center group"
        >
          <Image src="/images/SilverWingLogo.png" alt="Silver Wings Defence Logo" width={200} height={60} className="h-10 md:h-12 w-auto drop-shadow-[0_0_12px_rgba(255,255,255,0.5)] group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] transition-all duration-300" priority />
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex gap-8 items-center" id="desktop-nav-links">
          <Link id="nav-home"    href="/"         className={`font-medium font-['Space_Grotesk'] tracking-tight uppercase hover:text-[#eac349] transition-all duration-300 ${pathname === '/' ? 'text-[#eac349]' : 'text-[#e1e2e7]'}`}>Home</Link>
          <Link id="nav-about"   href="/about-us" className={`font-medium font-['Space_Grotesk'] tracking-tight uppercase hover:text-[#eac349] transition-all duration-300 ${pathname === '/about-us' ? 'text-[#eac349]' : 'text-[#e1e2e7]'}`}>About</Link>
          <Link id="nav-services" href="/services" className={`font-medium font-['Space_Grotesk'] tracking-tight uppercase hover:text-[#eac349] transition-all duration-300 ${pathname === '/services' ? 'text-[#eac349]' : 'text-[#e1e2e7]'}`}>Services</Link>
          <Link id="nav-products" href="/products" className={`font-medium font-['Space_Grotesk'] tracking-tight uppercase hover:text-[#eac349] transition-all duration-300 ${pathname === '/products' ? 'text-[#eac349]' : 'text-[#e1e2e7]'}`}>Products</Link>
          <Link id="nav-news"    href="/news"     className={`font-medium font-['Space_Grotesk'] tracking-tight uppercase hover:text-[#eac349] transition-all duration-300 ${pathname === '/news' ? 'text-[#eac349]' : 'text-[#e1e2e7]'}`}>News</Link>
          <Link id="nav-career"  href="/career"   className={`font-medium font-['Space_Grotesk'] tracking-tight uppercase hover:text-[#eac349] transition-all duration-300 ${pathname === '/career' ? 'text-[#eac349]' : 'text-[#e1e2e7]'}`}>Career</Link>
        </div>

        {/* Right-side actions */}
        <div className="flex items-center gap-4 md:gap-6 relative z-50">
          {/* Contact CTA */}
          <Link
            id="nav-contact-cta"
            href="/contact"
            aria-label="Contact Us"
            className="hidden sm:flex items-center gap-2 bg-linear-to-tr from-primary to-on-primary-container text-on-primary font-bold uppercase px-4 md:px-6 py-2 text-xs md:text-sm hover:text-[#eac349] transition-colors"
          >
            <span className="material-symbols-outlined text-sm" aria-hidden="true">mail</span>
            CONTACT US
          </Link>

          {/* Hamburger — always in DOM; hidden visually on lg+ via opacity/pointer-events, not display:none */}
          <button
            id="mobile-menu-toggle"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu-overlay"
            className="lg:hidden text-primary ml-2 flex items-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="material-symbols-outlined text-3xl" aria-hidden="true">
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu-overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        className={`fixed inset-0 bg-[#111417] z-40 flex flex-col items-center justify-center gap-8 lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <Link id="mobile-nav-home"     href="/"         onClick={() => setIsOpen(false)} className={`text-2xl font-headline tracking-widest uppercase hover:text-[#eac349] transition-colors ${pathname === '/' ? 'text-[#eac349]' : 'text-[#e1e2e7]'}`}>Home</Link>
        <Link id="mobile-nav-about"    href="/about-us" onClick={() => setIsOpen(false)} className={`text-2xl font-headline tracking-widest uppercase hover:text-[#eac349] transition-colors ${pathname === '/about-us' ? 'text-[#eac349]' : 'text-[#e1e2e7]'}`}>About</Link>
        <Link id="mobile-nav-services" href="/services" onClick={() => setIsOpen(false)} className={`text-2xl font-headline tracking-widest uppercase hover:text-[#eac349] transition-colors ${pathname === '/services' ? 'text-[#eac349]' : 'text-[#e1e2e7]'}`}>Services</Link>
        <Link id="mobile-nav-products" href="/products" onClick={() => setIsOpen(false)} className={`text-2xl font-headline tracking-widest uppercase hover:text-[#eac349] transition-colors ${pathname === '/products' ? 'text-[#eac349]' : 'text-[#e1e2e7]'}`}>Products</Link>
        <Link id="mobile-nav-news"     href="/news"     onClick={() => setIsOpen(false)} className={`text-2xl font-headline tracking-widest uppercase hover:text-[#eac349] transition-colors ${pathname === '/news' ? 'text-[#eac349]' : 'text-[#e1e2e7]'}`}>News</Link>
        <Link id="mobile-nav-career"   href="/career"   onClick={() => setIsOpen(false)} className={`text-2xl font-headline tracking-widest uppercase hover:text-[#eac349] transition-colors ${pathname === '/career' ? 'text-[#eac349]' : 'text-[#e1e2e7]'}`}>Career</Link>
        <Link
          id="mobile-contact-cta"
          href="/contact"
          onClick={() => setIsOpen(false)}
          className="mt-8 bg-linear-to-tr from-primary to-on-primary-container text-on-primary font-bold uppercase px-8 py-4 text-sm hover:text-[#eac349] transition-colors w-3/4 max-w-sm text-center flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined text-sm" aria-hidden="true">mail</span>
          CONTACT US
        </Link>
      </div>
    </nav>
  );
}
