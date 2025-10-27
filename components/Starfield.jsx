"use client";
import { useEffect, useRef } from "react";

export default function Starfield({
  density = 0.0015,              // stars per pixel
  speed = 0.05,                  // base drift speed
  color = "255,255,255",         // RGB only; alpha computed per-star
  maxAlpha = 0.9,                // peak twinkle brightness
}) {
  const ref = useRef(null);
  const starsRef = useRef([]);
  const sizeRef = useRef({ w: 0, h: 0 });

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      sizeRef.current = { w: canvas.width, h: canvas.height };

      const count = Math.floor(canvas.width * canvas.height * density);
      starsRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1 + 0.2,           // depth (affects speed)
        a: Math.random() * 0.5 + 0.4,         // base alpha
        r: Math.random() * 1.2 + 0.4,         // radius
        phase: Math.random() * Math.PI * 2,   // twinkle phase
      }));
    }

    let raf;
    function tick() {
      const { w, h } = sizeRef.current;
      ctx.clearRect(0, 0, w, h);

      for (const s of starsRef.current) {
        s.y += speed * (0.3 + s.z);
        if (s.y > h + 2) {
          s.y = -2;
          s.x = Math.random() * w;
        }
        s.phase += 0.015 + s.z * 0.005;
        const twinkle = s.a + Math.sin(s.phase) * 0.15;
        const alpha = Math.max(0.2, Math.min(maxAlpha, twinkle));

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${alpha})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    }

    resize();
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [density, speed, color, maxAlpha]);

  return (
    <canvas
      ref={ref}
      style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}
    />
  );
}
