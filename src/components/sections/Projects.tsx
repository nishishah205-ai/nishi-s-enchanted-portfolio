import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Star } from "lucide-react";
import { useState } from "react";
import { ProjectsPeek } from "@/components/Mascots";

type Category = "All" | "Frontend" | "Full Stack" | "AI & ML" | "Open Source";

const projects = [
  {
    idx: "01",
    name: "Saamvara",
    year: "2025",
    categories: ["Full Stack", "AI & ML", "Frontend"] as Category[],
    featured: true,
    tagline: "AI-governed chit fund platform for India's informal savings circles.",
    desc: "Digitizes rotating savings communities with a Random Forest classifier (89% accuracy) for real-time member risk scores. Hindi Voice AI Foreman via Web Speech API and a portable ChitScore (0–1000) credit system across 10+ interactive screens.",
    tech: ["React", "TypeScript", "Vite", "Tailwind v4", "FastAPI", "Firebase", "Scikit-learn", "Web Speech"],
    metrics: [
      { label: "89% ML Accuracy", sage: true },
      { label: "10+ Screens", sage: false },
      { label: "AI Voice Foreman", sage: true },
    ],
    github: "https://github.com/Nishi577/saamvara",
    accent: "var(--accent-yellow-warm)",
    tint: "var(--bg-section-3)",
  },
  {
    idx: "02",
    name: "SafeCity",
    year: "2025",
    categories: ["Full Stack", "AI & ML"] as Category[],
    tagline: "Full-stack public safety intelligence platform.",
    desc: "Processes 500+ geotagged records via a Flask REST API with sub-200ms responses. Random Forest classifier on 1,200+ labeled incidents hits 83% accuracy, reducing triage effort ~60% with five interactive React visualizations.",
    tech: ["React.js", "Flask", "PostgreSQL", "Scikit-learn", "Pandas"],
    metrics: [
      { label: "500+ Records", sage: false },
      { label: "83% Accuracy", sage: true },
      { label: "Sub-200ms API", sage: true },
    ],
    github: "https://github.com/Nishi577/safecity",
    accent: "var(--accent-lilac)",
    tint: "var(--bg-section-2)",
  },
  {
    idx: "03",
    name: "BloomPath",
    year: "2024",
    categories: ["AI & ML", "Full Stack"] as Category[],
    tagline: "ML-powered career platform built exclusively for women.",
    desc: "Matches users with flexible remote opportunities using a Random Forest model analyzing education, skills, availability, and location. AWS Bedrock personalizes recommendations; data persists in DynamoDB with full S3 deployment.",
    tech: ["Python", "React", "Scikit-learn", "AWS Bedrock", "DynamoDB", "S3"],
    metrics: [
      { label: "AWS Powered", sage: false },
      { label: "ML Recommendations", sage: true },
      { label: "Women-focused", sage: false },
    ],
    github: "https://github.com/Nishi577/bloompath",
    accent: "var(--accent-blush)",
    tint: "var(--bg-section-4)",
  },
  {
    idx: "04",
    name: "ImpactSphere",
    year: "2024",
    categories: ["Full Stack", "Open Source"] as Category[],
    tagline: "Dual-dashboard NGO donation platform with real-time reconciliation.",
    desc: "Tracks 200+ donations across 3 partner NGOs via donor and admin dashboards with session-based auth and role-gated views. A 6-table normalized MySQL schema collapses NGO reconciliation from hours to under 5 minutes.",
    tech: ["Flask", "MySQL", "Bootstrap", "HTML/CSS"],
    metrics: [
      { label: "200+ Donations", sage: false },
      { label: "3 NGOs", sage: false },
      { label: "<5 Min Reconciliation", sage: true },
    ],
    github: "https://github.com/Nishi577/impactsphere",
    accent: "var(--accent-maroon-soft)",
    tint: "var(--bg-section-2)",
  },
];

const FILTERS: Category[] = ["All", "Frontend", "Full Stack", "AI & ML", "Open Source"];

function BrowserPreview({ name, accent, tint }: { name: string; accent: string; tint: string }) {
  return (
    <div className="relative w-full h-full min-h-[260px] rounded-xl overflow-hidden border"
      style={{ borderColor: "var(--border-lilac)", background: tint }}>
      <div className="flex items-center gap-1.5 px-3 py-2 border-b" style={{ borderColor: "var(--border-lilac)", background: "color-mix(in oklab, var(--bg-primary) 60%, transparent)" }}>
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--accent-maroon-soft)" }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--accent-yellow-warm)" }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--accent-sage-deep)" }} />
        <span className="ml-3 font-mono-jb text-[10px] tracking-wider" style={{ color: "var(--text-muted)" }}>
          {name.toLowerCase()}.app
        </span>
      </div>
      <div className="relative p-5 h-full">
        <div className="font-display text-3xl font-bold leading-none mb-3" style={{ color: "var(--text-primary)" }}>{name}</div>
        <div className="space-y-2">
          <div className="h-2 w-3/4 rounded-full" style={{ background: accent, opacity: 0.7 }} />
          <div className="h-2 w-1/2 rounded-full" style={{ background: "var(--accent-lilac)", opacity: 0.5 }} />
          <div className="h-2 w-2/3 rounded-full" style={{ background: "var(--accent-maroon-soft)", opacity: 0.4 }} />
        </div>
        <div className="mt-5 grid grid-cols-3 gap-2">
          {[0, 1, 2].map(i => (
            <div key={i} className="h-14 rounded-md border" style={{ borderColor: "var(--border-lilac)", background: "color-mix(in oklab, var(--bg-primary) 40%, transparent)" }} />
          ))}
        </div>
        <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full animate-pulse-soft"
          style={{ background: accent, opacity: 0.4, filter: "blur(4px)" }} />
      </div>
    </div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<Category>("All");
  const visible = projects.filter(p => filter === "All" || p.categories.includes(filter));

  return (
    <section id="work" className="relative py-28 px-6 md:px-10" style={{ background: "var(--bg-section-3)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-16" style={{ background: "var(--accent-maroon)" }} />
          <h2 className="font-display text-[clamp(36px,5vw,56px)] font-bold relative">
            Selected <span className="relative">Work
              <svg className="absolute -bottom-3 left-0 w-full" height="10" viewBox="0 0 120 10" fill="none">
                <motion.path d="M2 6 Q30 1 60 6 T118 5" stroke="var(--accent-maroon)" strokeWidth="2.5" fill="none" strokeLinecap="round"
                  initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} />
              </svg>
            </span>
          </h2>
          <div className="h-px w-16" style={{ background: "var(--accent-maroon)" }} />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {FILTERS.map(f => {
            const active = filter === f;
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className="relative px-4 py-2 rounded-full font-mono-jb text-[11px] tracking-[0.15em] uppercase border transition-all hover:-translate-y-[2px]"
                style={{
                  borderColor: active ? "var(--accent-maroon)" : "var(--border-lilac)",
                  background: active ? "var(--accent-maroon)" : "var(--bg-primary)",
                  color: active ? "var(--bg-primary)" : "var(--text-secondary)",
                  boxShadow: active ? "0 6px 20px -8px var(--glow-maroon)" : "none",
                }}
              >
                {active && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full animate-pulse"
                    style={{ background: "var(--accent-sage)", boxShadow: "0 0 8px var(--glow-sage)" }} />
                )}
                {f}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="popLayout">
          <div className="space-y-10">
            {visible.map((p, i) => (
              <motion.article
                layout
                key={p.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.25, 1, 0.5, 1] }}
                className="group relative grid md:grid-cols-[1.1fr_1fr] gap-0 rounded-2xl overflow-hidden border transition-all hover:-translate-y-2"
                style={{
                  borderColor: p.featured ? "var(--accent-maroon)" : "var(--border-maroon)",
                  background: "var(--bg-primary)",
                  boxShadow: p.featured
                    ? "0 20px 60px -20px var(--glow-maroon), 0 0 0 1px var(--glow-lilac)"
                    : "0 4px 24px -8px var(--glow-maroon)",
                }}
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 transition-all group-hover:w-2"
                  style={{ background: p.accent, boxShadow: `0 0 16px ${p.accent}` }} />

                {/* Content */}
                <div className="p-8 md:p-10 order-2 md:order-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono-jb text-[11px] tracking-wider" style={{ color: "var(--text-muted)" }}>
                      {p.idx} · {p.year} · {p.categories[0]}
                    </span>
                    {p.featured && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-mono-jb text-[10px] tracking-wider"
                        style={{ background: "var(--accent-maroon)", color: "var(--bg-primary)" }}>
                        <Star className="w-3 h-3" fill="currentColor" />
                        FEATURED
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent-sage)" }} />
                      </span>
                    )}
                  </div>
                  <div className="font-display text-[36px] md:text-[44px] font-bold leading-none transition-transform group-hover:translate-x-1"
                    style={{ color: "var(--text-primary)" }}>{p.name}</div>
                  <p className="font-display italic text-lg mt-3 mb-4" style={{ color: "var(--text-secondary)" }}>{p.tagline}</p>
                  <p className="text-[15px] leading-[1.7]" style={{ color: "var(--text-body)" }}>{p.desc}</p>

                  {/* Metric pills */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.metrics.map(m => (
                      <span key={m.label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-mono-jb text-[11px]"
                        style={{
                          background: "color-mix(in oklab, var(--accent-maroon) 8%, transparent)",
                          color: "var(--accent-maroon)",
                          border: "1px solid var(--border-maroon)",
                        }}>
                        {m.sage && <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent-sage-deep)", boxShadow: "0 0 6px var(--glow-sage)" }} />}
                        {m.label}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tech.map(t => (
                      <span key={t} className="px-2.5 py-1 rounded-md font-mono-jb text-[10px] transition-all hover:scale-105"
                        style={{ background: "var(--bg-section-2)", color: "var(--accent-maroon)", border: "1px solid var(--border-lilac)" }}>{t}</span>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-5 font-mono-jb text-xs">
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-[var(--accent-maroon)]"
                      style={{ color: "var(--text-yellow)" }}>
                      <Github className="w-3.5 h-3.5" /> GitHub
                    </a>
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-[var(--accent-maroon)]"
                      style={{ color: "var(--text-yellow)" }}>
                      <ExternalLink className="w-3.5 h-3.5" /> Live
                    </a>
                  </div>
                </div>

                {/* Preview */}
                <div className="relative p-6 md:p-8 order-1 md:order-2 transition-transform duration-500 group-hover:scale-[1.02]"
                  style={{ background: p.tint }}>
                  <BrowserPreview name={p.name} accent={p.accent} tint={p.tint} />
                </div>
              </motion.article>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
}
