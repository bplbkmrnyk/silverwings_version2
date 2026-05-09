import { cn } from "@/lib/utils";

export function GridBackground({ className }: { className?: string }) {
  return (
    <div className={cn("fixed inset-0 z-[-1] bg-black overflow-hidden pointer-events-none", className)}>
      <div
        className="absolute inset-0"
        style={{
          backgroundSize: "40px 40px",
          backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
        }}
      />
      {/* Radial fade to hide edges */}
      <div className="absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black_80%)]" />
      {/* Extra bottom/top gradients for text readability and cinematic feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90" />
    </div>
  );
}
