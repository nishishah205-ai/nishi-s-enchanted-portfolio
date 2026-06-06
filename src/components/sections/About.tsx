import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, Mail, MapPin, GraduationCap, Code2, Trophy, GitBranch } from "lucide-react";
import { useRef } from "react";
import avatarAsset from "@/assets/avatar-motion.mp4.asset.json";

const facts = [
  { icon: MapPin, label: "Location", value: "Mumbai, India" },
  { icon: GraduationCap, label: "Degree", value: "B.E. IT — A.P. Shah Institute" },
  { icon: Trophy, label: "CGPA", value: "8.9 / 10" },
  { icon: Code2, label: "Projects Built", value: "5+ Shipped" },
  { icon: Trophy, label: "Hackathons", value: "3+ Finalist" },
  { icon: GitBranch, label: "Open Source", value: "GSSoC Active" },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-1, 1], [6, -6]), { stiffness: 80, damping: 14 });
  const ry = useSpring(useTransform(mx, [-1, 1], [-6, 6]), { stiffness: 80, damping: 14 });

  const handleMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 2);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 2);
  };
  const reset = () => { mx.set(0); my.set(0); };

  return (
    <section id="about" className="relative py-28 px-6 md:px-10" style={{ background: "var(--bg-section-2)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono-jb text-[11px] tracking-[0.25em] uppercase" style={{ color: "var(--text-lilac)" }}>
            [ personal branding · interactive motion ]
          </span>
        </div>

        <div className="grid md:grid-cols-[1fr_1.15fr] gap-14 items-center">
          {/* LEFT — Avatar */}
          <motion.div
            ref={ref}
            onMouseMove={handleMove}
            onMouseLeave={reset}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
            className="relative mx-auto w-full max-w-[440px] aspect-square"
            style={{ perspective: 1000 }}
          >
            {/* Outer maroon ring */}
            <div className="absolute -inset-6 rounded-full border-2 animate-spin-slower"
              style={{ borderColor: "var(--accent-maroon)", borderStyle: "dashed", opacity: 0.35 }} />
            {/* Lilac counter-rotating ring */}
            <div className="absolute -inset-12 rounded-full border animate-spin-slow"
              style={{ borderColor: "var(--accent-lilac)", borderStyle: "dotted", opacity: 0.45, animationDirection: "reverse" }} />
            {/* Multi-glow */}
            <div aria-hidden className="absolute inset-0 rounded-[36px] blur-2xl"
              style={{ background: "radial-gradient(circle at 30% 30%, var(--glow-maroon), transparent 60%), radial-gradient(circle at 70% 70%, var(--glow-lilac), transparent 60%)" }} />

            {/* Sage particles */}
            {[
              { t: "8%", l: "12%", d: "0s" },
              { t: "20%", l: "92%", d: "0.4s" },
              { t: "78%", l: "6%", d: "0.8s" },
              { t: "92%", l: "70%", d: "1.2s" },
              { t: "50%", l: "98%", d: "0.2s" },
              { t: "4%", l: "60%", d: "1.6s" },
            ].map((p, i) => (
              <span key={i} className="absolute w-1.5 h-1.5 rounded-full animate-pulse-soft pointer-events-none"
                style={{ top: p.t, left: p.l, background: "var(--accent-sage)", boxShadow: "0 0 8px var(--glow-sage)", animationDelay: p.d }} />
            ))}

            {/* Video container */}
            <motion.div
              style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
              whileHover={{ scale: 1.04, y: -10 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="group relative w-full h-full rounded-[32px] overflow-hidden border-2"
              style={{
                borderColor: "var(--border-maroon)",
                background: "var(--bg-primary)",
                boxShadow: "0 30px 60px -20px var(--glow-maroon), 0 0 0 8px color-mix(in oklab, var(--accent-lilac) 12%, transparent)",
              }}
            >
              <video
                src={avatarAsset.url}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Soft tint overlay */}
              <div aria-hidden className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(180deg, transparent 60%, color-mix(in oklab, var(--accent-maroon) 20%, transparent))" }} />
              {/* Corner badge */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-mono-jb text-[10px] tracking-wider backdrop-blur-md"
                style={{ background: "color-mix(in oklab, var(--bg-primary) 70%, transparent)", color: "var(--text-primary)" }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--accent-sage-deep)" }} />
                LIVE · 2026
              </div>
            </motion.div>

            {/* Orbiting sage dot */}
            <div className="absolute top-1/2 left-1/2 pointer-events-none">
              <div className="animate-spin-slow" style={{ width: 520, height: 520, marginLeft: -260, marginTop: -260 }}>
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--accent-sage)", boxShadow: "0 0 12px var(--glow-sage)" }} />
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Story */}
          <div>
            <div className="font-mono-jb text-[11px] tracking-[0.3em] uppercase mb-4" style={{ color: "var(--text-lilac)" }}>
              GET TO KNOW ME
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-display text-[clamp(36px,5vw,56px)] font-bold leading-[1.05]"
            >
              Building Technology <br />
              That <span style={{ color: "var(--accent-maroon)" }}>Matters.</span>
            </motion.h2>

            <div className="mt-6 space-y-4 text-[16px] leading-[1.7]" style={{ color: "var(--text-body)" }}>
              <p>
                I'm <strong style={{ color: "var(--text-primary)" }}>Nishi Shah</strong> — a frontend-focused full-stack
                developer who treats interfaces as the front door to social impact. I obsess over the small details that
                make products feel inevitable, and over the systems beneath them that have to scale.
              </p>
              <p>
                My work lives at the intersection of <em style={{ color: "var(--text-yellow)" }}>AI/ML</em>, thoughtful UX,
                and real-world outcomes — financial inclusion for India's informal savings circles, public safety
                intelligence, women-first career mobility, and NGO fundraising tooling.
              </p>
              <p>
                I'm a Smart India Hackathon 2025, AI Bharat Hackathon 2025, and GDG On Campus 2024 participant, an active
                open-source contributor through <strong style={{ color: "var(--text-primary)" }}>GSSoC</strong>, and hold
                5 cloud &amp; cybersecurity certifications. I ship.
              </p>
            </div>

            {/* Facts grid */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {facts.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                  className="group relative rounded-xl p-4 border transition-all hover:-translate-y-1"
                  style={{ borderColor: "var(--border-lilac)", background: "var(--bg-primary)", boxShadow: "0 2px 12px -6px var(--glow-maroon)" }}
                >
                  <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full"
                    style={{ background: "var(--accent-sage-deep)", boxShadow: "0 0 6px var(--glow-sage)" }} />
                  <f.icon className="w-4 h-4 mb-2" style={{ color: "var(--accent-maroon)" }} />
                  <div className="font-mono-jb text-[10px] tracking-wider uppercase" style={{ color: "var(--text-muted)" }}>{f.label}</div>
                  <div className="mt-0.5 text-sm font-medium" style={{ color: "var(--text-primary)" }}>{f.value}</div>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/nishi-shah-resume.pdf" target="_blank" rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-mono-jb text-xs tracking-[0.15em] transition-all hover:-translate-y-[3px]"
                style={{ background: "var(--accent-maroon)", color: "var(--bg-primary)", boxShadow: "0 6px 0 -2px var(--glow-maroon)" }}>
                DOWNLOAD RESUME <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
              </a>
              <a href="#contact"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-mono-jb text-xs tracking-[0.15em] border-2 transition-all hover:-translate-y-[3px]"
                style={{ borderColor: "var(--accent-lilac)", color: "var(--text-lilac)" }}>
                CONTACT ME <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
