"use client";

import { useEffect, useRef } from "react";

export function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let columns: number = 0;
    const drops: number[] = [];
    const fontSize = 14;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / fontSize);
      
      // Reset or extend drops array based on new width
      while (drops.length < columns) {
        drops.push(Math.random() * -100);
      }
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝ";
    const characters = matrixChars.split("");

    let lastDrawTime = 0;
    const fps = 30; // Matrix effect looks best at slightly lower framerates
    const interval = 1000 / fps;

    const draw = (timestamp: number) => {
      animationFrameId = requestAnimationFrame(draw);

      if (timestamp - lastDrawTime < interval) return;
      lastDrawTime = timestamp;

      // Deep black trailing effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Aesthetic brighter green text
      ctx.fillStyle = "rgba(52, 211, 153, 0.85)"; // Tailwind emerald-400 brighter and more opaque
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];

        // Randomly make some characters perfectly bright for depth
        if (Math.random() > 0.95) {
          ctx.fillStyle = "rgba(167, 243, 208, 1)"; // Pure bright emerald-200
        } else {
          ctx.fillStyle = "rgba(52, 211, 153, 0.85)";
        }

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] bg-black overflow-hidden pointer-events-none">
      <canvas
        ref={canvasRef}
        className="block w-full h-full opacity-50"
      />
      {/* Heavy vignette to make sure the text content on the page remains perfectly readable */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,black_100%)] opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black/90" />
    </div>
  );
}
