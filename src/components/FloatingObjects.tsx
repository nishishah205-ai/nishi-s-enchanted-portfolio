import { useEffect, useRef } from "react";

/** Global ambient decorative layer. Fixed full-screen, behind content. */
export function FloatingObjects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove);

    let raf = 0;
    const tick = () => {
      const c = containerRef.current;
      const scrollY = window.scrollY;
      if (c) {
        const nodes = c.querySelectorAll<HTMLElement>("[data-fo]");
        nodes.forEach((n, idx) => {
          const r = n.getBoundingClientRect();
          const cx = r.left + r.width / 2;
          const cy = r.top + r.height / 2;
          const dx = cx - mouseRef.current.x;
          const dy = cy - mouseRef.current.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 300 && dist > 0) {
            const force = (1 - dist / 300) * 6;
            n.style.setProperty("--mx", `${(dx / dist) * force}px`);
            n.style.setProperty("--my", `${(dy / dist) * force}px`);
          } else {
            n.style.setProperty("--mx", `0px`);
            n.style.setProperty("--my", `0px`);
          }
          const speed = 0.1 + ((idx * 0.07) % 0.3);
          n.style.setProperty("--sy", `${-scrollY * speed}px`);
        });
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{ contain: "strict" }}
    >
      <style>{`
        .fo { position: absolute; transform: translate(var(--mx,0), calc(var(--my,0) + var(--sy,0))); transition: transform 0.4s cubic-bezier(0.23,1,0.32,1); will-change: transform; }
        .fo-inner { animation-fill-mode: both; will-change: transform; }
        @keyframes fo-drift-1 { 0%,100% { transform: translate(0,0) rotate(0); } 50% { transform: translate(18px,-12px) rotate(180deg); } }
        @keyframes fo-drift-2 { 0%,100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-20px) scale(1.12); } }
        @keyframes fo-drift-3 { 0%,100% { transform: translateY(0) rotate(45deg); } 50% { transform: translateY(14px) rotate(405deg); } }
        @keyframes fo-drift-4 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(-10px,8px); } }
        @keyframes fo-drift-5 { 0%,100% { transform: translateY(0) scale(0.9); } 50% { transform: translateY(-25px) scale(1.1); } }
        @keyframes fo-drift-7 { 0%,100% { transform: translateY(0) rotate(0); } 50% { transform: translateY(18px) rotate(180deg); } }
        @keyframes fo-drift-8 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(30px,-20px); } }
        @keyframes fo-drift-9 { 0%,100% { transform: rotate(0); opacity: 0.5; } 50% { transform: rotate(90deg); opacity: 1; } }
        @keyframes fo-drift-10 { 0%,100% { transform: translateX(0) scale(1); } 50% { transform: translateX(12px) scale(1.4); } }
        @keyframes fo-drift-11 { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        @keyframes fo-drift-12 { 0%,100% { transform: translateX(0) rotate(-15deg); } 50% { transform: translateX(20px) rotate(15deg); } }
        @keyframes fo-pulse { 0%,100% { transform: scale(0.8); opacity: 0.6; } 50% { transform: scale(1.2); opacity: 1; } }
        @keyframes fo-blob { 0%,100% { transform: scale(1); } 50% { transform: scale(1.15); } }
        @keyframes fo-line { 0%,100% { width: 80px; transform: rotate(-8deg); } 50% { width: 120px; transform: rotate(8deg); } }
        @keyframes fo-dot-pulse { 0%,100% { opacity: 0.4; } 50% { opacity: 1; } }
      `}</style>

      {/* 1 - Large lilac ring */}
      <div data-fo className="fo" style={{ top: "8%", left: "6%" }}>
        <div className="fo-inner" style={{ animation: "fo-drift-1 40s linear infinite" }}>
          <div style={{ width: 120, height: 120, borderRadius: "50%", border: "2px solid var(--accent-lilac)" }} />
        </div>
      </div>

      {/* 2 - Yellow blob */}
      <div data-fo className="fo" style={{ top: "12%", right: "8%" }}>
        <div className="fo-inner" style={{ animation: "fo-drift-2 7s ease-in-out infinite" }}>
          <svg width="80" height="80" viewBox="0 0 100 100" style={{ filter: "blur(1px)" }}>
            <path d="M50,5 C75,10 95,30 90,55 C85,80 60,95 35,88 C10,80 5,55 12,30 C18,12 35,2 50,5 Z" fill="var(--accent-yellow)" opacity="0.6" />
          </svg>
        </div>
      </div>

      {/* 3 - Maroon diamond */}
      <div data-fo className="fo" style={{ top: "22%", left: "18%" }}>
        <div className="fo-inner" style={{ animation: "fo-drift-3 15s linear infinite" }}>
          <div style={{ width: 28, height: 28, background: "var(--accent-maroon-soft)" }} />
        </div>
      </div>

      {/* 4 - Lilac dot cluster */}
      <div data-fo className="fo" style={{ top: "35%", right: "5%" }}>
        <div className="fo-inner" style={{ animation: "fo-drift-4 8s ease-in-out infinite" }}>
          <div className="grid grid-cols-3 gap-[12px]">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} style={{
                width: 6, height: 6, borderRadius: "50%", background: "var(--accent-lilac)",
                opacity: 0.7, animation: `fo-dot-pulse 2s ease-in-out infinite`, animationDelay: `${(i * 0.2) % 2}s`,
              }} />
            ))}
          </div>
        </div>
      </div>

      {/* 5 - Maroon hollow circle */}
      <div data-fo className="fo" style={{ top: "45%", left: "3%" }}>
        <div className="fo-inner" style={{ animation: "fo-drift-5 10s ease-in-out infinite" }}>
          <div style={{ width: 64, height: 64, borderRadius: "50%", border: "3px solid var(--accent-maroon)" }} />
        </div>
      </div>

      {/* 6 - Yellow line */}
      <div data-fo className="fo" style={{ top: "52%", right: "12%" }}>
        <div className="fo-inner" style={{ animation: "fo-line 4s ease-in-out infinite", height: 2, background: "var(--accent-yellow-warm)", transformOrigin: "left" }} />
      </div>

      {/* 7 - Blush triangle */}
      <div data-fo className="fo" style={{ top: "60%", left: "10%" }}>
        <div className="fo-inner" style={{ animation: "fo-drift-7 20s linear infinite" }}>
          <svg width="36" height="36" viewBox="0 0 36 36"><polygon points="18,2 34,32 2,32" fill="var(--accent-blush)" opacity="0.8" /></svg>
        </div>
      </div>

      {/* 8 - Lilac large blob */}
      <div data-fo className="fo" style={{ top: "65%", right: "3%" }}>
        <div className="fo-inner" style={{ animation: "fo-drift-8 18s ease-in-out infinite" }}>
          <div style={{ width: 160, height: 160, borderRadius: "50%", background: "var(--accent-lilac)", opacity: 0.08, filter: "blur(40px)" }} />
        </div>
      </div>

      {/* 9 - Maroon plus */}
      <div data-fo className="fo" style={{ top: "72%", left: "15%" }}>
        <div className="fo-inner" style={{ animation: "fo-drift-9 12s ease-in-out infinite" }}>
          <div className="relative" style={{ width: 28, height: 28 }}>
            <div className="absolute" style={{ top: 11, left: 0, width: 28, height: 6, background: "var(--accent-maroon-soft)" }} />
            <div className="absolute" style={{ top: 0, left: 11, width: 6, height: 28, background: "var(--accent-maroon-soft)" }} />
          </div>
        </div>
      </div>

      {/* 10 - Yellow ring */}
      <div data-fo className="fo" style={{ top: "78%", right: "18%" }}>
        <div className="fo-inner" style={{ animation: "fo-drift-10 5s ease-in-out infinite" }}>
          <div style={{ width: 40, height: 40, borderRadius: "50%", border: "2px solid var(--border-yellow)" }} />
        </div>
      </div>

      {/* 11 - Maroon dots trail */}
      <div data-fo className="fo" style={{ top: "30%", left: "88%" }}>
        <div className="fo-inner" style={{ animation: "fo-drift-11 9s ease-in-out infinite" }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} style={{
              width: 5, height: 5, borderRadius: "50%", background: "var(--accent-maroon)",
              marginLeft: i * 10, marginTop: i === 0 ? 0 : 9,
              animation: `fo-dot-pulse 2s ease-in-out infinite`, animationDelay: `${i * 0.15}s`,
            }} />
          ))}
        </div>
      </div>

      {/* 12 - Lilac pill */}
      <div data-fo className="fo" style={{ top: "88%", left: "25%" }}>
        <div className="fo-inner" style={{ animation: "fo-drift-12 11s ease-in-out infinite" }}>
          <div style={{ width: 50, height: 20, borderRadius: 99, background: "var(--accent-lilac)", opacity: 0.5 }} />
        </div>
      </div>

      {/* 13 - Yellow starburst */}
      <div data-fo className="fo" style={{ top: "18%", left: "45%" }}>
        <div className="fo-inner" style={{ animation: "fo-pulse 3s ease-in-out infinite" }}>
          <div style={{ width: 16, height: 16, borderRadius: "50%", background: "var(--accent-yellow)", boxShadow: "0 0 12px 4px var(--glow-yellow)" }} />
        </div>
      </div>

      {/* 14 - Hero maroon blob */}
      <div data-fo className="fo" style={{ top: "2%", right: "0%" }}>
        <div className="fo-inner" style={{ animation: "fo-blob 12s ease-in-out infinite" }}>
          <div style={{ width: 200, height: 200, borderRadius: "50%", background: "var(--accent-maroon)", opacity: 0.05, filter: "blur(50px)" }} />
        </div>
      </div>
    </div>
  );
}
