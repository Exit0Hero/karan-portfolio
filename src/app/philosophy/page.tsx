"use client";

import { motion } from "framer-motion";

const PRINCIPLES = [
  {
    number: "01",
    title: "Evidence Over Opinion",
    description: "Every architectural decision must be backed by data, benchmarks, or verifiable results. No 'I think' — only 'I measured'.",
    icon: "◎",
  },
  {
    number: "02",
    title: "Systems Over Symptoms",
    description: "Don't treat bugs — understand systems. Every failure is a symptom of a deeper architectural truth waiting to be uncovered.",
    icon: "◈",
  },
  {
    number: "03",
    title: "Iteration Over Perfection",
    description: "Ship, measure, learn, improve. Perfection is the enemy of progress. Real users teach more than any theoretical model.",
    icon: "◇",
  },
  {
    number: "04",
    title: "Transparency Over Mystery",
    description: "Document decisions, failures, and trade-offs. Future you (and your team) will thank present you for the clarity.",
    icon: "◆",
  },
  {
    number: "05",
    title: "Simplicity Over Cleverness",
    description: "The best code is the code you don't write. The best architecture is the one your team can understand and maintain.",
    icon: "◉",
  },
];

export default function PhilosophyPage() {
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
            Philosophy
          </p>
          <h1
            className="font-display mt-4 text-4xl font-bold tracking-tight md:text-6xl"
            style={{ color: "var(--text)" }}
          >
            Engineering Principles
          </h1>
          <p
            className="mt-4 max-w-xl text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            The guiding principles behind every system I build, every decision I make,
            and every problem I solve.
          </p>
        </motion.div>

        {/* Scientific OS Recap */}
        <motion.div
          className="mt-16 rounded-2xl border p-8"
          style={{ borderColor: "var(--accent)", backgroundColor: "var(--bg-surface)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div
              className="h-12 w-12 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: "var(--accent)", color: "var(--bg)" }}
            >
              <span className="font-mono text-sm font-bold">OS</span>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold" style={{ color: "var(--text)" }}>
                Scientific Operating System
              </h2>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                My systematic approach to engineering problems
              </p>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-5">
            {["Observe", "Hypothesize", "Experiment", "Analyze", "Iterate"].map((step, i) => (
              <div key={step} className="text-center">
                <div
                  className="h-10 w-10 rounded-full flex items-center justify-center mx-auto mb-2 font-mono text-xs font-bold"
                  style={{
                    backgroundColor: `${["#00f2fe", "#7000ff", "#10b981", "#f59e0b", "#ec4899"][i]}15`,
                    color: ["#00f2fe", "#7000ff", "#10b981", "#f59e0b", "#ec4899"][i],
                    border: `1px solid ${["#00f2fe", "#7000ff", "#10b981", "#f59e0b", "#ec4899"][i]}30`,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
                  {step}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Principles */}
        <div className="mt-16 space-y-6">
          {PRINCIPLES.map((principle, i) => (
            <motion.div
              key={principle.number}
              className="rounded-2xl border p-6 md:p-8"
              style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-surface)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ borderColor: "var(--accent)", y: -2 }}
            >
              <div className="flex items-start gap-6">
                <div
                  className="h-12 w-12 shrink-0 rounded-xl flex items-center justify-center text-xl"
                  style={{ backgroundColor: "var(--bg-elevated)", color: "var(--accent)" }}
                >
                  {principle.icon}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs" style={{ color: "var(--accent)" }}>
                      {principle.number}
                    </span>
                    <h3 className="font-display text-lg font-bold" style={{ color: "var(--text)" }}>
                      {principle.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {principle.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Quote */}
        <motion.div
          className="mt-24 rounded-2xl border p-8 text-center"
          style={{ borderColor: "var(--accent-secondary)", backgroundColor: "var(--bg-surface)" }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <p
            className="font-display text-2xl font-bold italic md:text-3xl"
            style={{ color: "var(--text)" }}
          >
            &ldquo;The goal is not to write code.
            <br />
            The goal is to solve problems that matter.&rdquo;
          </p>
        </motion.div>
      </div>
    </div>
  );
}
