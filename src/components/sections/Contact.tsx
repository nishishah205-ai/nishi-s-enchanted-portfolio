import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "Email", href: "mailto:nishi@example.com" },
  { label: "GitHub", href: "https://github.com/Nishi577" },
  { label: "LinkedIn", href: "https://linkedin.com/in/nishi-shah-602607368" },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-32 px-6 md:px-10" style={{ background: "var(--bg-footer)" }}>
      {/* Ambient orbs */}
      <div aria-hidden className="absolute -top-40 -left-20 w-[400px] h-[400px] rounded-full" style={{ background: "var(--accent-maroon)", opacity: 0.1, filter: "blur(80px)" }} />
      <div aria-hidden className="absolute top-20 right-0 w-[300px] h-[300px] rounded-full" style={{ background: "var(--accent-lilac)", opacity: 0.08, filter: "blur(80px)" }} />
      <div aria-hidden className="absolute bottom-0 left-1/3 w-[350px] h-[350px] rounded-full" style={{ background: "var(--accent-yellow)", opacity: 0.06, filter: "blur(80px)" }} />

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="font-mono-jb text-[11px] tracking-[0.3em] uppercase" style={{ color: "var(--accent-blush)" }}>Contact</div>

        <h2 className="font-display font-bold leading-[1.05] mt-6" style={{ fontSize: "clamp(48px, 8vw, 88px)", color: "#FAF6F0" }}>
          <motion.span initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="block">
            Let's Build
          </motion.span>
          <motion.span initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15, duration: 0.7 }} className="block">
            Something
          </motion.span>
          <motion.span initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.7 }} className="block"
            style={{ color: "var(--accent-yellow)" }}>
            That Matters.
          </motion.span>
        </h2>

        <div className="mt-14 flex flex-wrap justify-center gap-8">
          {links.map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-xl transition-colors"
              style={{ color: "#FAF6F0" }}>
              <span className="relative">
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  style={{ background: "var(--accent-yellow)" }} />
              </span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--accent-yellow)]" />
            </a>
          ))}
        </div>

        <div className="mt-24 pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-3 font-mono-jb text-[11px]"
          style={{ borderColor: "rgba(250,246,240,0.1)", color: "var(--text-muted)" }}>
          <div>© 2026 Nishi Shah</div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--accent-maroon-soft)" }} />
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--accent-lilac)", animationDelay: "0.3s" }} />
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--accent-yellow)", animationDelay: "0.6s" }} />
          </div>
          <div>Frontend · Full-Stack · ML</div>
        </div>
      </div>
    </section>
  );
}
