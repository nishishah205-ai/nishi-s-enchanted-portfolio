import { motion } from "framer-motion";
import { Trophy, Sparkles, Users, GitMerge } from "lucide-react";

const events = [
  { year: "2025", name: "Smart India Hackathon 2025", desc: "Built a full-stack government-problem prototype in 36 hours among 1,000s of national teams.", tint: "var(--accent-yellow)", Icon: Trophy },
  { year: "2025", name: "AI Bharat Hackathon 2025", desc: "Shipped an ML solution under tight 24-hour constraints with end-to-end deployment.", tint: "var(--accent-maroon-soft)", Icon: Sparkles },
  { year: "2024", name: "GDG On Campus Hackathon 2024", desc: "Live demo to industry judges. Praised for UX quality and product polish.", tint: "var(--accent-lilac)", Icon: Users },
  { year: "2026", name: "GSSoC 2026", desc: "3+ merged PRs across features, bugfixes, and docs via async Git workflows.", tint: "var(--accent-blush)", Icon: GitMerge },
];

export function Hackathons() {
  return (
    <section id="recognition" className="relative py-28 px-6 md:px-10" style={{ background: "var(--bg-section-5)" }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-center text-[clamp(36px,5vw,60px)] font-bold leading-tight">
          {"Compete. Contribute. Repeat.".split(" ").map((w, i) => (
            <motion.span key={i} initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }} className="inline-block mr-3">{w}</motion.span>
          ))}
        </h2>
        <div className="text-center mt-2 font-mono-jb text-[11px] tracking-[0.25em] uppercase" style={{ color: "var(--text-lilac)" }}>Recognition &amp; Impact</div>

        <div className="mt-20 relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px]" style={{ background: "var(--border-maroon)" }} />
          <div className="space-y-12">
            {events.map((e, i) => {
              const left = i % 2 === 0;
              const Icon = e.Icon;
              return (
                <div key={i} className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-6">
                  <div className={left ? "" : "invisible"}>
                    {left && <EventCard e={e} from="left" Icon={Icon} />}
                  </div>
                  <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
                    className="relative w-4 h-4 rounded-full border-[3px]" style={{ background: "var(--accent-maroon)", borderColor: "var(--accent-maroon)" }}>
                    <div className="absolute inset-0 rounded-full animate-ping" style={{ background: "var(--accent-maroon)", opacity: 0.3 }} />
                  </motion.div>
                  <div className={!left ? "" : "invisible"}>
                    {!left && <EventCard e={e} from="right" Icon={Icon} />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function EventCard({ e, from, Icon }: { e: any; from: "left" | "right"; Icon: any }) {
  return (
    <motion.div initial={{ opacity: 0, x: from === "left" ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
      className="rounded-2xl p-6 border flex gap-4"
      style={{ background: "var(--bg-primary)", borderColor: "var(--border-maroon)" }}>
      <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: e.tint, opacity: 0.95 }}>
        <Icon className="w-5 h-5" style={{ color: "var(--text-primary)" }} />
      </div>
      <div>
        <div className="flex items-center gap-2 font-mono-jb text-[11px]" style={{ color: "var(--text-muted)" }}>{e.year}</div>
        <div className="font-bold text-lg mt-1" style={{ color: "var(--accent-maroon)" }}>{e.name}</div>
        <div className="text-sm mt-1.5" style={{ color: "var(--text-body)" }}>{e.desc}</div>
      </div>
    </motion.div>
  );
}
