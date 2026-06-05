import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx, ry = my;
    let raf = 0;

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    const onDown = () => {
      if (dotRef.current) dotRef.current.style.transform += " scale(0.5)";
      if (ringRef.current) ringRef.current.style.transform += " scale(0.85)";
    };
    const onUp = () => {
      if (dotRef.current) dotRef.current.dataset.click = "1";
      setTimeout(() => { if (dotRef.current) delete dotRef.current.dataset.click; }, 220);
    };

    const tick = () => {
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${mx - 5}px, ${my - 5}px, 0)`;
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${rx - 18}px, ${ry - 18}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  if (!enabled) return null;
  return (
    <>
      <div ref={dotRef} className="pointer-events-none fixed left-0 top-0 z-[9999]"
        style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--accent-maroon)", transition: "background 0.2s" }} />
      <div ref={ringRef} className="pointer-events-none fixed left-0 top-0 z-[9999]"
        style={{ width: 36, height: 36, borderRadius: "50%", border: "2px solid var(--accent-lilac)", transition: "border-color 0.3s, width 0.3s, height 0.3s" }} />
    </>
  );
}
