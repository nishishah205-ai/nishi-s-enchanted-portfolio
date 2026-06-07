import { useEffect, useRef } from "react";

type Ripple = {
  x: number;
  y: number;
  r: number;
  maxR: number;
  alpha: number;
  color: string;
  life: number;
};

const COLORS = ["#7B1C3E", "#A78BFA", "#F5D547"];

export default function RippleCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(pointer: coarse)");
    if (mq.matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const ripples: Ripple[] = [];
    let lastMove = 0;
    let colorIdx = 0;

    const addRipple = (x: number, y: number, strong = false) => {
      const color = COLORS[colorIdx++ % COLORS.length];
      ripples.push({
        x,
        y,
        r: strong ? 6 : 2,
        maxR: strong ? 110 : 55,
        alpha: strong ? 0.45 : 0.22,
        color,
        life: 1,
      });
    };

    const onMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastMove < 60) return;
      lastMove = now;
      addRipple(e.clientX, e.clientY, false);
    };
    const onDown = (e: MouseEvent) => addRipple(e.clientX, e.clientY, true);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown, { passive: true });

    let raf = 0;
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.r += (r.maxR - r.r) * 0.08;
        r.life -= 0.02;
        if (r.life <= 0) {
          ripples.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.r, 0, Math.PI * 2);
        ctx.strokeStyle = r.color;
        ctx.globalAlpha = Math.max(0, r.alpha * r.life);
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 9998,
      }}
    />
  );
}
