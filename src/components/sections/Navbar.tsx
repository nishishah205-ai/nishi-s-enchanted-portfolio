import { Code2 } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  { label: "ABOUT", href: "#about" },
  { label: "WORK", href: "#work" },
  { label: "ARSENAL", href: "#arsenal" },
  { label: "RECOGNITION", href: "#recognition" },
  { label: "CONTACT", href: "#contact" },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 flex items-center justify-between backdrop-blur-md"
      style={{ background: "color-mix(in oklab, var(--bg-primary) 75%, transparent)" }}>
      <a href="#top" className="flex items-center justify-center w-11 h-11 rounded-full border-2"
        style={{ borderColor: "var(--accent-maroon)", color: "var(--accent-maroon)" }}>
        <span className="font-display text-lg font-bold leading-none">NS</span>
      </a>
      <div className="hidden md:flex items-center gap-7 font-mono-jb text-[11px] tracking-[0.18em]"
        style={{ color: "var(--text-secondary)" }}>
        {links.map((l, i) => (
          <a key={l.label} href={l.href} className="hover:text-[var(--accent-maroon)] transition-colors flex items-center gap-2">
            {l.label}
            {i < links.length - 1 && <span style={{ color: "var(--accent-maroon-soft)" }}>·</span>}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-full"
          style={{ background: "var(--text-primary)", color: "var(--accent-yellow)" }}>
          <Code2 className="w-3.5 h-3.5" />
          <span className="font-mono-jb text-[10px] tracking-wider">DEV</span>
        </div>
      </div>
    </nav>
  );
}
