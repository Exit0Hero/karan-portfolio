"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Observation",
    subtitle: "Problem Definition",
    description:
      "Detect system anomalies, inefficiencies, and boundary conditions. Frame the problem space with precision before attempting solutions.",
    icon: "◎",
    details: [
      "System anomaly detection",
      "Inefficiency mapping",
      "Boundary framing",
      "Root cause isolation",
    ],
  },
  {
    number: "02",
    title: "Hypothesis",
    subtitle: "Testable Explanations",
    description:
      "Formulate falsifiable architectural explanations. Every hypothesis must be provable or disprovable through controlled testing.",
    icon: "◈",
    details: [
      "Architectural hypotheses",
      "Falsifiability criteria",
      "Assumption documentation",
      "Risk assessment",
    ],
  },
  {
    number: "03",
    title: "Experiment",
    subtitle: "Controlled Testing",
    description:
      "Isolate variables, run A/B benchmarks, and execute load tests. Let data speak louder than opinions.",
    icon: "◇",
    details: [
      "Variable isolation",
      "A/B benchmarking",
      "Load testing",
      "Stress boundaries",
    ],
  },
  {
    number: "04",
    title: "Analysis",
    subtitle: "Data Collection",
    description:
      "Collect quantitative logs, metrics, and qualitative telemetry. Transform raw data into actionable insights.",
    icon: "◆",
    details: [
      "Metric collection",
      "Log aggregation",
      "Telemetry evaluation",
      "Pattern recognition",
    ],
  },
  {
    number: "05",
    title: "Iterate",
    subtitle: "Conclusions & Refinement",
    description:
      "Draw conclusions, refine approaches, or discard invalidated hypotheses. Evolution through systematic iteration.",
    icon: "◉",
    details: [
      "Result synthesis",
      "Refinement cycles",
      "Hypothesis invalidation",
      "Architecture evolution",
    ],
  },
];

export function ScientificOS() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="font-mono text-xs tracking-widest uppercase"
            style={{ color: "var(--accent)" }}
          >
            Problem-Solving Framework
          </p>
          <h2
            className="font-display mt-4 text-3xl font-bold tracking-tight md:text-5xl"
            style={{ color: "var(--text)" }}
          >
            Scientific OS
          </h2>
          <p
            className="mx-auto mt-4 max-w-xl text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            A systematic approach to engineering problems. Not opinions —
            evidence.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[28px] top-0 bottom-0 w-[1px] md:left-1/2"
            style={{ backgroundColor: "var(--border)" }}
          />

          <div className="flex flex-col gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                className={`relative flex items-start gap-6 md:gap-12 ${
                  i % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Step number dot */}
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border md:absolute md:left-1/2 md:top-0 md:-translate-x-1/2"
                  style={{
                    borderColor:
                      activeStep === i ? "var(--accent)" : "var(--border-medium)",
                    backgroundColor:
                      activeStep === i ? "var(--accent)" : "var(--bg-surface)",
                    color:
                      activeStep === i ? "var(--bg)" : "var(--text)",
                  }}
                >
                  <span className="font-mono text-sm font-bold">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div
                  className={`flex-1 cursor-pointer rounded-2xl border p-6 transition-all md:w-[calc(50%-3rem)] ${
                    i % 2 === 0 ? "md:text-right" : ""
                  }`}
                  style={{
                    borderColor:
                      activeStep === i ? "var(--accent)" : "var(--border)",
                    backgroundColor:
                      activeStep === i ? "var(--bg-elevated)" : "var(--bg-surface)",
                  }}
                  onClick={() => setActiveStep(activeStep === i ? null : i)}
                >
                  <div className={`flex items-center gap-3 mb-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                    <span className="text-2xl" style={{ color: "var(--accent)" }}>
                      {step.icon}
                    </span>
                    <div>
                      <h3
                        className="font-display text-xl font-bold"
                        style={{ color: "var(--text)" }}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="font-mono text-xs"
                        style={{ color: "var(--accent)" }}
                      >
                        {step.subtitle}
                      </p>
                    </div>
                  </div>

                  <p
                    className="mt-3 text-sm leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {step.description}
                  </p>

                  <AnimatePresence>
                    {activeStep === i && (
                      <motion.ul
                        className={`mt-4 space-y-2 ${i % 2 === 0 ? "md:ml-auto" : ""}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {step.details.map((detail) => (
                          <li
                            key={detail}
                            className="flex items-center gap-2 text-xs font-mono"
                            style={{
                              color: "var(--text-muted)",
                              justifyContent:
                                i % 2 === 0 ? "flex-end" : "flex-start",
                            }}
                          >
                            <span style={{ color: "var(--signal)" }}>→</span>
                            {detail}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
