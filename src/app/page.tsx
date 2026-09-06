"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { IntroSequence } from "@/components/intro-sequence";
import { HeroCanvas } from "@/components/hero-canvas";
import { ScientificOS } from "@/components/scientific-os";

export default function Home() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      <IntroSequence onComplete={() => setIntroDone(true)} />

      {introDone && (
        <>
          <HeroCanvas />

          {/* Hero Section */}
          <section className="relative z-10 flex min-h-[90vh] flex-col items-center justify-center px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p
                className="font-mono text-xs tracking-[0.3em] uppercase"
                style={{ color: "var(--accent)" }}
              >
                Engineering Portfolio
              </p>

              <h1
                className="font-display mt-6 text-6xl font-bold tracking-tighter md:text-8xl lg:text-9xl"
                style={{ color: "var(--text)" }}
              >
                Karan
                <br />
                <span className="text-gradient">Sasane</span>
              </h1>

              <motion.p
                className="mx-auto mt-6 max-w-lg text-lg md:text-xl"
                style={{ color: "var(--text-muted)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
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
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <a
                  href="/projects"
                  className="rounded-xl px-8 py-3.5 text-sm font-semibold transition-all hover:scale-105"
                  style={{
                    backgroundColor: "var(--accent)",
                    color: "var(--bg)",
                  }}
                >
                  View Projects
                </a>
                <a
                  href="/contact"
                  className="rounded-xl px-8 py-3.5 text-sm font-semibold transition-all hover:scale-105"
                  style={{
                    border: "1px solid var(--border-medium)",
                    color: "var(--text)",
                  }}
                >
                  Get in Touch
                </a>
              </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              className="absolute bottom-10 flex flex-col items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 1.5 }}
            >
              <span
                className="font-mono text-[10px] tracking-widest"
                style={{ color: "var(--text-muted)" }}
              >
                SCROLL
              </span>
              <motion.div
                className="h-8 w-[1px]"
                style={{ backgroundColor: "var(--text-muted)" }}
                animate={{ scaleY: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </section>

          {/* Scientific OS Section */}
          <div className="relative z-10">
            <ScientificOS />
          </div>

          {/* Footer */}
          <footer
            className="relative z-10 border-t px-6 py-12 text-center"
            style={{ borderColor: "var(--border)" }}
          >
            <p
              className="font-mono text-xs"
              style={{ color: "var(--text-muted)" }}
            >
              © 2026 Karan Sasane · Built with Next.js, Three.js & obsessive
              attention to detail
            </p>
          </footer>
        </>
      )}
    </>
  );
}
