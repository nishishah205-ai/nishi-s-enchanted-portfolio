import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, Mail, MapPin, GraduationCap, Code2, Trophy, GitBranch, Building2, Award } from "lucide-react";
import { useRef } from "react";
import avatarAsset from "@/assets/avatar-motion.mp4.asset.json";

const facts = [
  { icon: MapPin, label: "Location", value: "Mumbai, India" },
  { icon: GraduationCap, label: "Degree", value: "B.E. Information Technology" },
  { icon: Building2, label: "Institute", value: "A.P. Shah Institute of Technology" },
  { icon: Trophy, label: "CGPA", value: "8.9 / 10" },
  { icon: Award, label: "Hackathons", value: "3+ Competed" },
  { icon: GitBranch, label: "Open Source", value: "GSSoC Active Contributor" },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  // gentle parallax — max 4px offset
  const tx = useSpring(useTransform(mx, [-1, 1], [-4, 4]), { stiffness: 90, damping: 16 });
  const ty = useSpring(useTransform(my, [-1, 1], [-4, 4]), { stiffness: 90, damping: 16 });

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

        <div className="grid md:grid-cols-[1.05fr_1fr] gap-16 md:gap-20 items-center">
          {/* LEFT — Portrait Avatar */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
            className="relative mx-auto w-full max-w-[440px]"
          >
            {/* Soft radial gradient wash filling the column space */}
            <div aria-hidden className="absolute -inset-24 pointer-events-none -z-10"
              style={{ background: "radial-gradient(ellipse at center, color-mix(in oklab, var(--accent-lilac) 10%, transparent), transparent 65%)" }} />

            {/* Wrapper for rings + container — sized to portrait */}
            <div
              ref={ref}
              onMouseMove={handleMove}
              onMouseLeave={reset}
              className="relative group"
              style={{ aspectRatio: "3 / 4.4" }}
            >
              {/* Outermost (yellow) wide elliptical ring */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 0.22, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45, duration: 0.9 }}
                className="absolute -inset-x-20 -inset-y-24 rounded-[50%] border animate-spin-slower pointer-events-none"
                style={{ borderColor: "var(--accent-yellow)", borderStyle: "dashed", animationDuration: "70s" }}
              />
              {/* Outer primary (maroon) elliptical ring — clockwise */}
              <div
                className="absolute -inset-x-8 -inset-y-10 rounded-[50%] border-2 animate-spin-slower pointer-events-none transition-[animation-duration] group-hover:[animation-duration:40s]"
                style={{ borderColor: "var(--accent-maroon)", borderStyle: "dashed", opacity: 0.32 }}
              />
              {/* Secondary (lilac) elliptical ring — counter-clockwise */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 0.45, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="absolute -inset-x-14 -inset-y-16 rounded-[50%] border animate-spin-slow pointer-events-none"
                style={{ borderColor: "var(--accent-lilac)", borderStyle: "dotted", animationDirection: "reverse" }}
              />

              {/* Multi-layer glow with slow breathing pulse */}
              <motion.div aria-hidden
                animate={{ opacity: [0.85, 1, 0.85] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-10 blur-3xl pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 30% 20%, var(--glow-maroon), transparent 60%), radial-gradient(ellipse at 70% 80%, var(--glow-lilac), transparent 60%), radial-gradient(ellipse at 50% 50%, var(--glow-yellow), transparent 70%)" }} />

              {/* Ambient particles */}
              {[
                { t: "4%", l: "10%", d: "0s", c: "var(--accent-sage)" },
                { t: "18%", l: "96%", d: "0.4s", c: "var(--accent-lilac)" },
                { t: "42%", l: "-3%", d: "0.8s", c: "var(--accent-yellow)" },
                { t: "70%", l: "100%", d: "1.2s", c: "var(--accent-sage)" },
                { t: "88%", l: "8%", d: "0.6s", c: "var(--accent-maroon-soft)" },
                { t: "96%", l: "78%", d: "1.6s", c: "var(--accent-lilac)" },
                { t: "30%", l: "104%", d: "1.0s", c: "var(--accent-sage-deep)" },
              ].map((p, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 0.7, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.08, duration: 0.5 }}
                  className="absolute w-1.5 h-1.5 rounded-full animate-pulse-soft pointer-events-none"
                  style={{ top: p.t, left: p.l, background: p.c, boxShadow: `0 0 8px ${p.c}`, animationDelay: p.d }}
                />
              ))}

              {/* Gradient depth backdrop */}
              <div aria-hidden className="absolute inset-0 rounded-[40px] pointer-events-none"
                style={{ background: "linear-gradient(160deg, color-mix(in oklab, var(--accent-lilac) 14%, transparent), transparent 50%, color-mix(in oklab, var(--accent-maroon) 12%, transparent))" }} />

              {/* Video container — portrait, cinematic */}
              <motion.div
                style={{
                  x: tx,
                  y: ty,
                  borderColor: "var(--border-maroon)",
                  background: "var(--bg-primary)",
                  boxShadow: "0 40px 80px -24px var(--glow-maroon), 0 0 0 10px color-mix(in oklab, var(--accent-lilac) 10%, transparent), inset 0 0 0 1px color-mix(in oklab, var(--accent-cream) 40%, transparent)",
                }}
                whileHover={{ scale: 1.04, y: -10 }}
                transition={{ type: "spring", stiffness: 180, damping: 18 }}
                className="relative w-full h-full rounded-[40px] overflow-hidden border"
              >
                <video
                  src={avatarAsset.url}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                {/* Soft top + bottom tint for editorial feel */}
                <div aria-hidden className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(180deg, color-mix(in oklab, var(--accent-lilac) 8%, transparent), transparent 30%, transparent 70%, color-mix(in oklab, var(--accent-maroon) 22%, transparent))" }} />

                {/* Live badge */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-mono-jb text-[10px] tracking-wider backdrop-blur-md"
                  style={{ background: "color-mix(in oklab, var(--bg-primary) 70%, transparent)", color: "var(--text-primary)" }}>
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--accent-sage-deep)" }} />
                  LIVE · 2026
                </div>
              </motion.div>
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
                developer with a sharp UX instinct. I design the surface and engineer what holds it up, so the product
                feels inevitable from the first click to the last query.
              </p>
              <p>
                My work lives at the intersection of <em style={{ color: "var(--text-yellow)" }}>AI/ML</em> and social
                impact: financial inclusion for India's informal savings circles, public safety intelligence, women-first
                career mobility, and tooling that helps NGOs raise more, faster.
              </p>
              <p>
                I've competed at <strong style={{ color: "var(--text-primary)" }}>Smart India Hackathon 2025</strong>,
                AI Bharat Hackathon 2025, and GDG On Campus 2024, contribute through{" "}
                <strong style={{ color: "var(--text-primary)" }}>GSSoC</strong>, and hold 5 cloud &amp; cybersecurity
                certifications.
              </p>
              <p>
                I build on a simple conviction — the best technology disappears into the human problem it solves.
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
                  className="hover-lift group relative rounded-xl p-4 border"
                  style={{ borderColor: "var(--border-lilac)", background: "var(--bg-primary)", boxShadow: "0 2px 12px -6px var(--glow-maroon)" }}
                >
                  <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full"
                    style={{ background: "var(--accent-sage-deep)", boxShadow: "0 0 6px var(--glow-sage)" }} />
                  <f.icon className="w-4 h-4 mb-2" style={{ color: "var(--accent-maroon)" }} />
                  <div className="font-mono-jb text-[10px] tracking-wider uppercase" style={{ color: "var(--text-muted)" }}>{f.label}</div>
                  <div className="mt-0.5 text-sm font-medium leading-snug" style={{ color: "var(--text-primary)" }}>{f.value}</div>
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
