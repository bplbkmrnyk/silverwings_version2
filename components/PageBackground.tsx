import Image from "next/image";

interface PageBackgroundProps {
  src: string;
  alt: string;
  opacity?: number;
}

export default function PageBackground({ src, alt, opacity = 0.3 }: PageBackgroundProps) {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-background">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover mix-blend-luminosity"
        style={{ opacity }}
        priority
      />
      {/* Tactical overlay gradients */}
      <div className="absolute inset-0 bg-linear-to-b from-background/40 via-background/80 to-background" />
      <div className="absolute inset-0 bg-grid-pattern mix-blend-overlay opacity-30" />
    </div>
  );
}
