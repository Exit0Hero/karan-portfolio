"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function IntroSequence({ onComplete }: { onComplete: () => void }) {
  const [visible, setVisible] = useState(true);
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mq.matches);

    if (mq.matches) {
      onComplete();
      setVisible(false);
      return;
    }

    const seen = sessionStorage.getItem("intro-seen");
    if (seen) {
      onComplete();
      setVisible(false);
      return;
    }
  }, [onComplete]);

  const handleSkip = () => {
    sessionStorage.setItem("intro-seen", "1");
    setVisible(false);
    onComplete();
  };

  useEffect(() => {
    if (!visible || prefersReduced) return;
    const timer = setTimeout(() => {
      sessionStorage.setItem("intro-seen", "1");
      setVisible(false);
      onComplete();
    }, 2400);
    return () => clearTimeout(timer);
  }, [visible, prefersReduced, onComplete]);

  if (prefersReduced) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ backgroundColor: "var(--bg)" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              className="absolute inset-0 rounded-full blur-[80px]"
              style={{ backgroundColor: "var(--accent)", opacity: 0.15 }}
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.1, 0.25, 0.1],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1
                className="font-display text-5xl font-bold tracking-tighter md:text-7xl"
                style={{ color: "var(--text)" }}
              >
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  K
                </motion.span>
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  a
                </motion.span>
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  r
                </motion.span>
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                >
                  a
                </motion.span>
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                >
                  n
                </motion.span>
              </h1>
            </motion.div>

            <motion.p
              className="font-mono text-xs tracking-widest uppercase"
              style={{ color: "var(--accent)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              Systems Thinker · Builder
            </motion.p>

            <motion.div
              className="mt-4 h-[1px] w-0"
              style={{ backgroundColor: "var(--accent)" }}
              animate={{ width: 120 }}
              transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
            />

            <motion.button
              onClick={handleSkip}
              className="absolute -bottom-16 text-xs tracking-wide"
              style={{ color: "var(--text-muted)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 1.5 }}
              whileHover={{ opacity: 1 }}
            >
              SKIP →
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
