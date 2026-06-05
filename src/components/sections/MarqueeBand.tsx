/** Decorative continuously-scrolling text band between sections. */
export function MarqueeBand({
  reverse = false,
  bg = "var(--bg-primary)",
  color = "var(--accent-maroon)",
  items,
}: { reverse?: boolean; bg?: string; color?: string; items: string[] }) {
  const repeated = [...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden py-6 border-y" style={{ background: bg, borderColor: "var(--border-maroon)" }}>
      <div className={`flex whitespace-nowrap ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {repeated.map((t, i) => (
          <span key={i} className="font-display italic text-[28px] md:text-[40px] mx-8 flex items-center gap-8" style={{ color }}>
            {t}
            <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ background: "var(--accent-yellow-warm)" }} />
          </span>
        ))}
      </div>
    </div>
  );
}
