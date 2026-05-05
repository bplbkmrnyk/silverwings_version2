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
        style={{ opacity: 0.5 }}
        priority
      />
      {/* Removed heavy dark gradients to show original image */}
      <div className="absolute inset-0 bg-grid-pattern mix-blend-overlay opacity-30" />
    </div>
  );
}
