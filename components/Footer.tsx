import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#191c1f] text-[#afc8f0] font-['Inter'] text-sm tracking-widest uppercase rounded-none w-full border-t border-outline-variant/15 px-6 md:px-12 py-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-[1600px] mx-auto">
        <div className="flex flex-col justify-between gap-6 md:gap-8 text-center lg:text-left">
          <div className="flex justify-center lg:justify-start">
            <Image src="/images/SilverWingLogo.png" alt="Silver Wings Defence Logo" width={250} height={75} className="h-12 md:h-16 w-auto drop-shadow-[0_0_12px_rgba(255,255,255,0.5)] transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]" />
          </div>
          <div className="text-[#e1e2e7]/60 text-xs mt-4 lg:mt-auto">
            &copy; {new Date().getFullYear()} SILVER WINGS DEFENCE INDUSTRY PVT. LTD. TACTICAL PRECISION SECURED.
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-end gap-4">
          <Link className="text-[#e1e2e7]/60 hover:text-[#eac349] transition-colors" href="/about-us">about</Link>
          <Link className="text-[#e1e2e7]/60 hover:text-[#eac349] transition-colors" href="/services">Service</Link>
          <Link className="text-[#e1e2e7]/60 hover:text-[#eac349] transition-colors" href="/career">Careers</Link>
          <Link className="text-[#e1e2e7]/60 hover:text-[#eac349] transition-colors" href="/products">Products</Link>
          <Link className="text-[#e1e2e7]/60 hover:text-[#eac349] transition-colors" href="/contact">contact</Link>
        </div>
      </div>
    </footer>
  );
}
