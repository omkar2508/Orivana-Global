import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

/**
 * Counts up numbers when scrolled into view.
 * - String values such as "500+" or "98%" are parsed (anything else, e.g. "2X-3X", renders unchanged).
 * - Numeric values can use `prefix`, `suffix` and `decimals` (e.g. value={12000} prefix="$" suffix="+").
 */
export function CountUp({ value, duration = 1.6, prefix = "", suffix = "", decimals = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  let target = null;
  let sfx = suffix;
  if (typeof value === "number") {
    target = value;
  } else {
    const match = String(value).match(/^(\d+)([+%]?)$/);
    if (match) {
      target = parseInt(match[1], 10);
      sfx = match[2] + suffix;
    }
  }
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView || target === null) return;
    const controls = animate(0, target, { duration, ease: "easeOut", onUpdate: setN });
    return () => controls.stop();
  }, [inView, target, duration]);

  if (target === null) return <span ref={ref}>{value}</span>;
  const shown = (inView ? n : 0).toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
  return (
    <span ref={ref}>
      {prefix}
      {shown}
      {sfx}
    </span>
  );
}
