import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const steps = [
  { n: "01", title: "DISCOVER", sub: "Scope & plan" },
  { n: "02", title: "BUILD", sub: "Sprint delivery" },
  { n: "03", title: "SHIP", sub: "Iterate & launch" },
];

function Typewriter({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [t, setT] = useState("");
  useEffect(() => {
    if (!inView) return;
    let i = 0;
    const id = setInterval(() => {
      setT(text.slice(0, ++i));
      if (i >= text.length) clearInterval(id);
    }, 40);
    return () => clearInterval(id);
  }, [inView, text]);
  return <span ref={ref}>{t}<span className="inline-block w-[3px] h-[0.9em] align-middle ml-1 animate-pulse" style={{ background: "var(--accent-maroon)" }} /></span>;
}

export function Process() {
  return (
    <section id="process" className="relative py-28 px-6 md:px-10" style={{ background: "var(--bg-section-2)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-4">
          <span className="font-mono-jb text-[11px] tracking-[0.25em] uppercase" style={{ color: "var(--text-lilac)" }}>[ process ]</span>
        </div>
        <h2 className="font-display text-center text-[clamp(40px,6vw,64px)] font-bold">
          <Typewriter text="How I Work" />
        </h2>
        <p className="text-center mt-3 font-mono-jb text-sm" style={{ color: "var(--text-lilac)" }}>Typewriter effect</p>

        <div className="mt-20 relative">
          {/* line */}
          <svg className="absolute top-7 left-[10%] right-[10%]" height="2" preserveAspectRatio="none" viewBox="0 0 100 2">
            <motion.line x1="0" y1="1" x2="100" y2="1" stroke="var(--border-maroon)" strokeWidth="2"
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }} />
          </svg>

          <div className="grid grid-cols-3 relative">
            {steps.map((s, i) => (
              <motion.div key={s.n} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.2, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }} className="flex flex-col items-center">
                <div className="group relative w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all hover:scale-110"
                  style={{ background: "var(--bg-primary)", borderColor: "var(--accent-maroon)" }}>
                  <span className="font-display font-bold text-xl group-hover:text-[var(--bg-primary)] transition-colors relative z-10"
                    style={{ color: "var(--accent-maroon)" }}>{s.n}</span>
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: "var(--accent-maroon)" }} />
                </div>
                <div className="mt-6 font-bold text-xl" style={{ color: "var(--text-primary)" }}>{s.title}</div>
                <div className="mt-1 text-sm" style={{ color: "var(--text-lilac)" }}>{s.sub}</div>
              </motion.div>
            ))}
          </div>

          {/* Gantt strip */}
          <div className="mt-16 grid grid-cols-4 gap-2 max-w-2xl mx-auto">
            {[60, 80, 45, 70].map((w, i) => (
              <div key={i} className="h-3 rounded-full overflow-hidden" style={{ background: "color-mix(in oklab, var(--accent-lilac) 18%, transparent)" }}>
                <motion.div initial={{ width: 0 }} whileInView={{ width: `${w}%` }} viewport={{ once: true }} transition={{ delay: 0.6 + i * 0.1, duration: 0.8 }}
                  className="h-full rounded-full" style={{ background: "color-mix(in oklab, var(--accent-lilac) 60%, transparent)" }} />
              </div>
            ))}
          </div>
          <div className="mt-2 grid grid-cols-4 gap-2 max-w-2xl mx-auto font-mono-jb text-[10px] tracking-wider" style={{ color: "var(--text-muted)" }}>
            <div>W1</div><div>W2</div><div>W3</div><div>W4</div>
          </div>
        </div>
      </div>
    </section>
  );
}
