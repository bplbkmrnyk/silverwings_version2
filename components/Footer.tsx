import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#191c1f] text-[#afc8f0] font-['Inter'] text-sm tracking-widest uppercase rounded-none w-full border-t border-[#43474e]/15 px-6 md:px-12 py-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-[1600px] mx-auto">
        <div className="flex flex-col justify-between gap-6 md:gap-8 text-center lg:text-left">
          <div className="text-xl md:text-2xl font-bold text-[#e1e2e7] font-headline">
            SILVER WINGS DEFENCE
          </div>
          <div className="text-[#e1e2e7]/60 text-xs mt-4 lg:mt-auto">
            © 2024 SILVER WINGS DEFENCE. TACTICAL PRECISION SECURED.
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-end gap-4">
          <Link className="text-[#e1e2e7]/60 hover:text-[#eac349] transition-colors" href="#">Privacy Policy</Link>
          <Link className="text-[#e1e2e7]/60 hover:text-[#eac349] transition-colors" href="#">Terms of Service</Link>
          <Link className="text-[#e1e2e7]/60 hover:text-[#eac349] transition-colors" href="#">Careers</Link>
          <Link className="text-[#e1e2e7]/60 hover:text-[#eac349] transition-colors" href="#">Download Brochures</Link>
          <Link className="text-[#e1e2e7]/60 hover:text-[#eac349] transition-colors" href="#">Partner Portal</Link>
        </div>
      </div>
    </footer>
  );
}
