"use client";

import { motion } from "framer-motion";
import { Reveal, StaggerChildren, StaggerItem } from "@/animations/reveal";
import { SITE } from "@/data/content";

export default function AboutPage() {
  return (
    <div className="min-h-screen px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="font-mono text-xs tracking-widest uppercase" style={{ color: "var(--accent)" }}>
            About
          </p>
          <h1 className="font-display mt-4 text-4xl font-bold tracking-tight md:text-6xl" style={{ color: "var(--text)" }}>
            Who I Am
          </h1>
        </Reveal>

        {/* Who I Am */}
        <Reveal delay={0.1}>
          <div className="mt-12 rounded-2xl border p-8" style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-surface)" }}>
            <p className="text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
              I&apos;m Karan Sasane — an AI/ML engineer, developer, and builder based in Mumbai, India.
              I don&apos;t just build projects. I build systems, experiments, and products.
            </p>
            <p className="text-lg leading-relaxed mt-4" style={{ color: "var(--text-muted)" }}>
              Currently pursuing B.Tech at Saraswati College of Engineering, I approach every problem
              through the Scientific OS — a systematic framework of observation, hypothesis,
              experimentation, analysis, and iteration.
            </p>
          </div>
        </Reveal>

        {/* My Approach */}
        <Reveal delay={0.15}>
          <div className="mt-12">
            <h2 className="font-mono text-xs tracking-widest uppercase mb-6" style={{ color: "var(--accent)" }}>
              My Approach
            </h2>
            <StaggerChildren className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Problem Solving",
                  description: "Every problem starts with observation. I measure before I assume, and I hypothesize before I implement.",
                  icon: "◎",
                },
                {
                  title: "Learning",
                  description: "I learn by building. Theory is essential, but understanding comes from implementation and iteration.",
                  icon: "◈",
                },
                {
                  title: "Building",
                  description: "I build systems that solve real problems. Every project has a clear problem statement and measurable outcomes.",
                  icon: "◇",
                },
                {
                  title: "Experimentation",
                  description: "I treat every project as an experiment. Hypotheses are tested, results are measured, and failures are documented.",
                  icon: "◆",
                },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <motion.div
                    className="rounded-2xl border p-6"
                    style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-surface)" }}
                    whileHover={{ borderColor: "var(--accent)", y: -2 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xl" style={{ color: "var(--accent)" }}>{item.icon}</span>
                      <h3 className="font-display text-lg font-bold" style={{ color: "var(--text)" }}>
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {item.description}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </Reveal>

        {/* Beyond Code */}
        <Reveal delay={0.2}>
          <div className="mt-12 rounded-2xl border p-8" style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-surface)" }}>
            <h2 className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>
              Beyond Code
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              When I&apos;m not building systems, I&apos;m leading technical communities at Rotaract,
              mentoring junior developers, and exploring the intersection of AI and human
              problem-solving. I believe the best engineering happens at the crossroads of
              technical depth and genuine curiosity.
            </p>
          </div>
        </Reveal>

        {/* Quote */}
        <Reveal delay={0.25}>
          <div className="mt-16 rounded-2xl border p-8 text-center" style={{ borderColor: "var(--accent-secondary)", backgroundColor: "var(--bg-surface)" }}>
            <p className="font-display text-2xl font-bold italic md:text-3xl" style={{ color: "var(--text)" }}>
              &ldquo;I&apos;m a human. I&apos;ll die, never to be born again.
              So I&apos;d better make it count.&rdquo;
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
