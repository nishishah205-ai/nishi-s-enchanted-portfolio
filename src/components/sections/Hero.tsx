import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import { HeroRunner } from "@/components/Mascots";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return <span>{v}{suffix}</span>;
}

const fade = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.15 + i * 0.12, duration: 0.7, ease: [0.25, 1, 0.5, 1] as const } }),
};

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-28 pb-20 px-6 md:px-10"
      style={{ background: "var(--bg-primary)" }}>
      <HeroRunner />
      {/* Big watermark */}
      <div aria-hidden className="absolute inset-x-0 top-24 text-center pointer-events-none select-none">
        <span className="font-display font-bold tracking-[0.05em]"
          style={{ fontSize: "clamp(60px, 14vw, 220px)", color: "var(--accent-maroon)", opacity: 0.06 }}>
          NISHI SHAH
        </span>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-[1.4fr_1fr] gap-12 items-center">
        <div>
          <motion.div custom={0} variants={fade} initial="hidden" animate="show"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 font-mono-jb text-[11px] tracking-[0.2em]"
            style={{ background: "color-mix(in oklab, var(--accent-yellow) 18%, transparent)", color: "var(--text-yellow)" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--accent-yellow-warm)" }} /> OPEN TO WORK · 2026
          </motion.div>

          <h1 className="font-display font-bold text-[clamp(40px,7vw,82px)] leading-[1.02]"
            style={{ color: "var(--text-primary)" }}>
            <motion.span custom={1} variants={fade} initial="hidden" animate="show" className="block">I Design, Build &amp; Ship</motion.span>
            <motion.span custom={2} variants={fade} initial="hidden" animate="show" className="block">
              Products That{" "}
              <span className="relative inline-block" style={{ color: "var(--accent-yellow-warm)" }}>
                Matter.
                <svg className="absolute -bottom-2 left-0 w-full" height="14" viewBox="0 0 240 14" fill="none">
                  <motion.path d="M2 8 Q60 2 120 7 T238 6" stroke="var(--accent-yellow-warm)" strokeWidth="3" strokeLinecap="round" fill="none"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.1, duration: 0.7 }} />
                </svg>
              </span>
            </motion.span>
          </h1>

          <motion.p custom={3} variants={fade} initial="hidden" animate="show"
            className="mt-6 max-w-xl text-[17px] leading-[1.65]" style={{ color: "var(--text-body)" }}>
            Frontend-focused full-stack developer &amp; social impact technologist building thoughtful interfaces, ML-powered tools, and
            <em style={{ color: "var(--text-yellow)" }}> products that actually move the needle</em>.
          </motion.p>

          <motion.div custom={4} variants={fade} initial="hidden" animate="show" className="mt-8 flex flex-wrap gap-4">
            <a href="#work" className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-mono-jb text-xs tracking-[0.15em] transition-all hover:-translate-y-[3px]"
              style={{ background: "var(--accent-maroon)", color: "var(--bg-primary)", boxShadow: "0 6px 0 -2px var(--glow-maroon)" }}>
              VIEW MY WORK <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="/nishi-shah-resume.pdf" target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-mono-jb text-xs tracking-[0.15em] border-2 transition-all"
              style={{ borderColor: "var(--accent-lilac)", color: "var(--text-lilac)" }}>
              DOWNLOAD RESUME <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div custom={5} variants={fade} initial="hidden" animate="show"
            className="mt-12 grid grid-cols-4 max-w-lg">
            {[
              { n: 4, s: "+", l: "Projects" },
              { n: 89, s: "%", l: "ML Accuracy" },
              { n: 3, s: "×", l: "Hackathons" },
              { n: 8.9, s: "", l: "CGPA" },
            ].map((s, i) => (
              <div key={i} className="px-4 first:pl-0 border-l" style={{ borderColor: "var(--border-lilac)" }}>
                <div className="font-display font-bold text-[44px] leading-none" style={{ color: "var(--accent-maroon)" }}>
                  {Number.isInteger(s.n) ? <Counter to={s.n as number} suffix={s.s} /> : <>{s.n}{s.s}</>}
                </div>
                <div className="mt-2 font-mono-jb text-[10px] tracking-[0.18em] uppercase" style={{ color: "var(--text-muted)" }}>{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right deco column */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8, duration: 0.9 }}
          className="relative hidden md:block aspect-square">
          <div className="absolute inset-0 rounded-full border-[3px] animate-spin-slower" style={{ borderColor: "var(--accent-lilac)", opacity: 0.4, borderStyle: "dashed" }} />
          <div className="absolute top-10 right-6 w-40 h-40 rounded-full animate-breathe" style={{ background: "var(--accent-yellow)", opacity: 0.28, filter: "blur(2px)" }} />
          <div className="absolute bottom-10 left-2 w-56 h-56 rounded-full border-2 animate-spin-slow" style={{ borderColor: "var(--accent-maroon-soft)", borderStyle: "dashed" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full animate-glow"
            style={{ background: "var(--accent-maroon)", opacity: 0.9 }} />
          <div className="absolute bottom-8 right-12 w-3 h-3 rounded-full animate-float-y" style={{ background: "var(--accent-yellow-warm)" }} />
          <div className="absolute top-20 left-12 w-2 h-2 rounded-full animate-float-x" style={{ background: "var(--accent-blush)" }} />
          {/* Orbiting satellites */}
          <div className="absolute top-1/2 left-1/2">
            <div className="animate-spin-slow" style={{ width: 280, height: 280, marginLeft: -140, marginTop: -140 }}>
              <div className="w-3 h-3 rounded-full" style={{ background: "var(--accent-lilac-deep)" }} />
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2">
            <div className="animate-spin-slower" style={{ width: 360, height: 360, marginLeft: -180, marginTop: -180, animationDirection: "reverse" }}>
              <div className="absolute right-0 top-1/2 w-2.5 h-2.5 rounded-full" style={{ background: "var(--accent-yellow-warm)" }} />
            </div>
          </div>
        </motion.div>

        {/* Scroll hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-mono-jb text-[10px] tracking-[0.3em]"
          style={{ color: "var(--text-muted)" }}>
          <span>SCROLL</span>
          <span className="w-px h-8 block animate-scroll-hint" style={{ background: "var(--accent-maroon)" }} />
        </div>
      </div>
    </section>
  );
}
