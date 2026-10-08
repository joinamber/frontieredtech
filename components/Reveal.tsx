"use client";
import { motion, useReducedMotion } from "motion/react";

/** Restrained scroll-triggered reveal. Renders static when reduced motion is preferred. */
export function Reveal({
  children, delay = 0, as = "div", className,
}: { children: React.ReactNode; delay?: number; as?: "div" | "p" | "h2" | "h3" | "li" | "blockquote"; className?: string }) {
  const reduce = useReducedMotion();
  const M = motion[as];
  if (reduce) return <M className={className}>{children}</M>;
  return (
    <M
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </M>
  );
}
