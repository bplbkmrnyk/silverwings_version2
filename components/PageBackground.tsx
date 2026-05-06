import Image from "next/image";

interface PageBackgroundProps {
  src: string;
  alt: string;
  opacity?: number;
}

export default function PageBackground({ src, alt }: PageBackgroundProps) {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-background">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        style={{ opacity: 0.4 }}
        priority
      />
      {/* Directional vignette — heavier on left and bottom, lighter on right so image breathes */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(5,7,10,0.88) 0%, rgba(5,7,10,0.45) 50%, rgba(5,7,10,0.2) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(5,7,10,0.75) 0%, transparent 55%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(5,7,10,0.45) 0%, transparent 30%)",
        }}
      />
      <div className="absolute inset-0 bg-grid-pattern mix-blend-overlay opacity-15" />
    </div>
  );
}
