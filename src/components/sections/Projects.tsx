import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    idx: "01",
    name: "Saamvara",
    tagline: "AI-governed chit fund platform for India's informal savings circles.",
    desc: "Digitizes rotating savings communities with a Random Forest classifier (89% accuracy) for real-time member risk scores. Hindi Voice AI Foreman via Web Speech API and a portable ChitScore (0–1000) credit system across 10+ interactive screens.",
    tech: ["React", "TypeScript", "Vite", "Tailwind v4", "FastAPI", "Firebase", "Scikit-learn", "Web Speech"],
    github: "https://github.com/Nishi577/saamvara",
    accent: "var(--accent-yellow-warm)",
    tint: "var(--bg-section-3)",
  },
  {
    idx: "02",
    name: "SafeCity",
    tagline: "Full-stack public safety intelligence platform.",
    desc: "Processes 500+ geotagged records via a Flask REST API with sub-200ms responses. Random Forest classifier on 1,200+ labeled incidents hits 83% accuracy, reducing triage effort ~60% with five interactive React visualizations.",
    tech: ["React.js", "Flask", "PostgreSQL", "Scikit-learn", "Pandas"],
    github: "https://github.com/Nishi577/safecity",
    accent: "var(--accent-lilac)",
    tint: "var(--bg-section-2)",
  },
  {
    idx: "03",
    name: "BloomPath",
    tagline: "ML-powered career platform built exclusively for women.",
    desc: "Matches users with flexible remote opportunities using a Random Forest model analyzing education, skills, availability, and location. AWS Bedrock personalizes recommendations; data persists in DynamoDB with full S3 deployment.",
    tech: ["Python", "React", "Scikit-learn", "AWS Bedrock", "DynamoDB", "S3"],
    github: "https://github.com/Nishi577/bloompath",
    accent: "var(--accent-blush)",
    tint: "var(--bg-section-4)",
  },
  {
    idx: "04",
    name: "ImpactSphere",
    tagline: "Dual-dashboard NGO donation platform with real-time reconciliation.",
    desc: "Tracks 200+ donations across 3 partner NGOs via donor and admin dashboards with session-based auth and role-gated views. A 6-table normalized MySQL schema collapses NGO reconciliation from hours to under 5 minutes.",
    tech: ["Flask", "MySQL", "Bootstrap", "HTML/CSS"],
    github: "https://github.com/Nishi577/impactsphere",
    accent: "var(--accent-maroon-soft)",
    tint: "var(--bg-section-2)",
  },
];

export function Projects() {
  return (
    <section id="work" className="relative py-28 px-6 md:px-10" style={{ background: "var(--bg-section-3)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-16">
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

        <div className="space-y-10">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
              className="group relative grid md:grid-cols-[1fr_1.3fr] gap-0 rounded-2xl overflow-hidden border transition-all hover:-translate-y-2"
              style={{ borderColor: "var(--border-maroon)", background: "var(--bg-primary)", boxShadow: "0 4px 24px -8px var(--glow-maroon)" }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: p.accent }} />
              {/* Visual panel */}
              <div className="relative p-8 flex flex-col justify-between min-h-[280px]" style={{ background: p.tint }}>
                <div className="flex items-center justify-between">
                  <span className="font-mono-jb text-xs tracking-wider" style={{ color: "var(--text-muted)" }}>{p.idx} /</span>
                  <div className="w-8 h-8 rounded-full" style={{ background: p.accent, opacity: 0.5 }} />
                </div>
                <div className="font-display text-[40px] font-bold leading-none" style={{ color: "var(--text-primary)" }}>{p.name}</div>
                <div className="flex gap-3">
                  <div className="h-2 w-24 rounded-full" style={{ background: p.accent, opacity: 0.6 }} />
                  <div className="h-2 w-12 rounded-full" style={{ background: "var(--accent-maroon-soft)", opacity: 0.4 }} />
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-10">
                <p className="font-display italic text-lg mb-4" style={{ color: "var(--text-secondary)" }}>{p.tagline}</p>
                <p className="text-[15px] leading-[1.7]" style={{ color: "var(--text-body)" }}>{p.desc}</p>
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
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
