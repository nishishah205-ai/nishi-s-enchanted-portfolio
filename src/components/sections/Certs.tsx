const certs = [
  "Google Cloud Cybersecurity",
  "AWS Generative AI Foundations",
  "AWS ML for NLP",
  "Oracle Database Foundations",
  "Cisco Junior Cybersecurity Analyst",
];

export function Certs() {
  return (
    <section className="relative py-12" style={{ background: "var(--bg-section-2)" }}>
      <div className="overflow-hidden group">
        <div className="flex animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
          {[...certs, ...certs, ...certs].map((c, i) => (
            <div key={i} className="mx-3 inline-flex items-center px-5 py-3 rounded-full border-l-[3px] border transition-all hover:scale-[1.06]"
              style={{ background: "var(--bg-primary)", borderColor: "var(--border-lilac)", borderLeftColor: "var(--accent-maroon)" }}>
              <span className="font-sans text-[13px]" style={{ color: "var(--text-body)" }}>{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
