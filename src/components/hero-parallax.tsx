"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function HeroParallax() {
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) {
    return (
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div>
          <p className="font-mono text-xs tracking-[0.3em] uppercase" style={{ color: "var(--accent)" }}>
            Engineering Portfolio
          </p>
          <h1 className="font-display mt-6 text-6xl font-bold tracking-tighter md:text-8xl lg:text-9xl">
            <span className="block" style={{ color: "var(--text)" }}>Karan</span>
            <span className="block text-gradient">Sasane</span>
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-lg md:text-xl" style={{ color: "var(--text-muted)" }}>
            Systems thinker. Problem solver. Technical builder.
          </p>
        </div>
      </section>
    );
  }

  return (
    <motion.section
      ref={heroRef}
      className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center"
      style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.p
          className="font-mono text-xs tracking-[0.3em] uppercase"
          style={{ color: "var(--accent)" }}
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          animate={{ opacity: 1, letterSpacing: "0.3em" }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Engineering Portfolio
        </motion.p>

        <h1 className="font-display mt-6 text-6xl font-bold tracking-tighter md:text-8xl lg:text-9xl">
          <motion.span
            className="block"
            style={{ color: "var(--text)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Karan
          </motion.span>
          <motion.span
            className="block text-gradient"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Sasane
          </motion.span>
        </h1>

        <motion.p
          className="mx-auto mt-6 max-w-lg text-lg md:text-xl"
          style={{ color: "var(--text-muted)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Systems thinker. Problem solver. Technical builder.
          <br />
          Building evidence-based solutions through
          <br />
          scientific experimentation.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <motion.a
            href="/projects"
            className="rounded-xl px-8 py-3.5 text-sm font-semibold transition-all"
            style={{ backgroundColor: "var(--accent)", color: "var(--bg)" }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px var(--accent)" }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="/contact"
            className="rounded-xl px-8 py-3.5 text-sm font-semibold transition-all"
            style={{ border: "1px solid var(--border-medium)", color: "var(--text)" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.5 }}
      >
        <span className="font-mono text-[10px] tracking-widest" style={{ color: "var(--text-muted)" }}>
          SCROLL
        </span>
        <motion.div
          className="h-8 w-[1px]"
          style={{ backgroundColor: "var(--text-muted)" }}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </motion.section>
  );
}
