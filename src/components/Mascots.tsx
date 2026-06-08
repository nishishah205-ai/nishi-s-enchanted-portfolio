import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import running from "@/assets/mascot-running.mp4.asset.json";
import waving from "@/assets/mascot-waving.mp4.asset.json";

const pixel: React.CSSProperties = {
  imageRendering: "pixelated",
  WebkitFontSmoothing: "none",
};

type VidProps = {
  src: string;
  size?: number;
  loop?: boolean;
  style?: React.CSSProperties;
  className?: string;
};

function MascotVideo({ src, size = 80, loop = true, style, className }: VidProps) {
  return (
    <video
      src={src}
      autoPlay
      muted
      loop={loop}
      playsInline
      width={size}
      height={size}
      className={className}
      style={{
        width: size,
        height: size,
        objectFit: "contain",
        background: "transparent",
        ...pixel,
        ...style,
      }}
    />
  );
}

/** 1. Hero runner — cameo across bottom, once on load */
export function HeroRunner() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const upd = () => setMobile(mq.matches);
    upd();
    mq.addEventListener("change", upd);
    return () => mq.removeEventListener("change", upd);
  }, []);

  return (
    <motion.div
      aria-hidden
      initial={{ x: "110vw" }}
      animate={{ x: "-20vw" }}
      transition={{ delay: 1.2, duration: 3.5, ease: "linear" }}
      className="pointer-events-none absolute bottom-4 left-0"
      style={{ zIndex: 10 }}
    >
      <MascotVideo src={running.url} size={mobile ? 64 : 80} />
    </motion.div>
  );
}

/** Shared once-per-session viewport trigger */
function useOnceInView<T extends HTMLElement>(threshold = 0.4) {
  const ref = useRef<T | null>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current || seen) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [seen, threshold]);
  return { ref, seen };
}

/** 2. Projects peek — peeks from behind first card */
export function ProjectsPeek() {
  const { ref, seen } = useOnceInView<HTMLDivElement>(0.3);
  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute hidden md:block"
      style={{ left: -32, bottom: 0, zIndex: 10 }}
    >
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={seen ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
      >
        {seen && <MascotVideo src={waving.url} size={80} />}
      </motion.div>
    </div>
  );
}

/** 3. About / Skills floater — gentle idle companion */
export function AboutFloater() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute hidden md:block animate-float-y"
      style={{ right: 12, bottom: 12, zIndex: 10, opacity: 0.92 }}
    >
      <MascotVideo src={waving.url} size={64} />
    </div>
  );
}

/** 4. Contact celebration — appears once near CTA */
export function ContactCelebrate() {
  const { ref, seen } = useOnceInView<HTMLDivElement>(0.6);
  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute hidden md:block"
      style={{ right: 24, bottom: 80, zIndex: 10 }}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={seen ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
      >
        {seen && <MascotVideo src={waving.url} size={80} />}
      </motion.div>
    </div>
  );
}
