import { motion } from "framer-motion";

const skills = [
  { name: "Frontend Development", pct: 92 },
  { name: "Backend & APIs", pct: 78 },
  { name: "ML / Data Science", pct: 72 },
  { name: "Cloud & Databases", pct: 75 },
  { name: "Dev Tools & Workflow", pct: 80 },
];

const marquee = ["React.js", "Python", "Vite", "MySQL", "Wix", "Firebase", "Dev Cockpiece", "TypeScript", "FastAPI", "AWS Bedrock", "DynamoDB", "Tailwind", "Scikit-learn"];

export function Skills() {
  return (
    <section id="arsenal" className="relative py-28 px-6 md:px-10" style={{ background: "var(--bg-section-4)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <div className="font-mono-jb text-[11px] tracking-[0.25em] uppercase mb-3" style={{ color: "var(--text-lilac)" }}>WHAT I BUILD WITH</div>
          <h2 className="font-display text-[clamp(36px,5vw,56px)] font-bold">Technical Arsenal</h2>
        </div>

        <div className="mt-16 space-y-6">
          {skills.map((s, i) => (
            <div key={s.name} className="grid grid-cols-[180px_1fr_50px] items-center gap-5">
              <div className="text-[15px]" style={{ color: "var(--text-body)" }}>{s.name}</div>
              <div className="relative h-2 rounded-full" style={{ background: "var(--border-maroon)" }}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 1, ease: [0.25, 1, 0.5, 1] }}
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{ background: "linear-gradient(90deg, var(--accent-maroon-soft), var(--accent-maroon))" }}
                >
                  <div className="absolute -right-1 -top-1 w-4 h-4 rounded-full"
                    style={{ background: "var(--accent-yellow)", boxShadow: "0 0 8px var(--glow-yellow)" }} />
                </motion.div>
              </div>
              <div className="text-right font-mono-jb text-sm" style={{ color: "var(--accent-maroon)" }}>{s.pct}%</div>
            </div>
          ))}
        </div>

        {/* Marquee */}
        <div className="mt-20 overflow-hidden border-y py-4" style={{ borderColor: "var(--border-maroon)" }}>
          <div className="flex animate-marquee whitespace-nowrap">
            {[...marquee, ...marquee].map((m, i) => (
              <span key={i} className="font-mono-jb text-[13px] mx-5 flex items-center gap-5" style={{ color: "var(--text-secondary)" }}>
                {m} <span style={{ color: "var(--accent-yellow-warm)" }}>·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
