import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * CSS-3D tilt card. Tilts toward the cursor with a moving highlight.
 * Disabled automatically on touch devices (no hover) via the pointer type check.
 */
export function TiltCard({ children, className = "", max = 8 }) {
  const ref = useRef(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [max, -max]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-max, max]), { stiffness: 200, damping: 20 });
  const glowX = useTransform(x, [0, 1], ["0%", "100%"]);
  const glowY = useTransform(y, [0, 1], ["0%", "100%"]);
  const background = useMotionTemplate`radial-gradient(240px circle at ${glowX} ${glowY}, hsl(var(--gold) / 0.14), transparent 60%)`;

  const onMove = (e) => {
    if (e.pointerType === "touch" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width);
    y.set((e.clientY - r.top) / r.height);
  };
  const onLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <div style={{ perspective: 900 }} className="h-full">
      <motion.div
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={`relative h-full ${className}`}
      >
        {children}
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 hover:opacity-100"
          style={{ background }}
        />
      </motion.div>
    </div>
  );
}
