"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="font-mono text-xs tracking-widest uppercase"
            style={{ color: "var(--accent)" }}
          >
            About
          </p>
          <h1
            className="font-display mt-4 text-4xl font-bold tracking-tight md:text-6xl"
            style={{ color: "var(--text)" }}
          >
            Karan Sasane
          </h1>
        </motion.div>

        <motion.div
          className="mt-12 space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div
            className="rounded-2xl border p-8"
            style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-surface)" }}
          >
            <p className="text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
              I&apos;m a systems thinker and technical builder based in Mumbai, India.
              Currently pursuing B.Tech at Saraswati College of Engineering, I approach
              every problem through the lens of the Scientific OS — observation,
              hypothesis, experimentation, analysis, and iteration.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              { label: "Focus Areas", items: ["System Design", "AI/ML Engineering", "Full-Stack Development", "Performance Optimization"] },
              { label: "Philosophy", items: ["Evidence over opinion", "Systems over symptoms", "Iteration over perfection", "Transparency over mystery"] },
            ].map((section) => (
              <motion.div
                key={section.label}
                className="rounded-2xl border p-6"
                style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-surface)" }}
                whileHover={{ borderColor: "var(--accent)", y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3
                  className="font-mono text-xs tracking-widest uppercase mb-4"
                  style={{ color: "var(--accent)" }}
                >
                  {section.label}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <span style={{ color: "var(--accent)" }}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="rounded-2xl border p-8 text-center"
            style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-surface)" }}
            whileHover={{ borderColor: "var(--accent-secondary)" }}
          >
            <p
              className="font-display text-2xl font-bold italic md:text-3xl"
              style={{ color: "var(--text)" }}
            >
              &ldquo;I&apos;m a human. I&apos;ll die, never to be born again.
              So I&apos;d better make it count.&rdquo;
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
