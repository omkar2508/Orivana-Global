import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/**
 * Fade-and-rise on scroll. Replaces the AnimatedSection / AnimatedCard copies
 * that were duplicated across pages. Respects prefers-reduced-motion via CSS in index.css.
 */
export function Reveal({ children, className = "", delay = 0, y = 32 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
