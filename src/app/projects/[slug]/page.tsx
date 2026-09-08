"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { PROJECTS } from "@/data/content";
import { Reveal } from "@/animations/reveal";

function ArchitecturalDiagram({ components, color }: { components: { component: string; description: string }[]; color: string }) {
  return (
    <div className="relative">
      <div className="flex flex-col gap-4">
        {components.map((comp, i) => (
          <motion.div
            key={comp.component}
            className="relative flex items-center gap-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div
              className="h-12 w-12 shrink-0 rounded-xl flex items-center justify-center font-mono text-xs font-bold"
              style={{
                backgroundColor: `${color}15`,
                color: color,
                border: `1px solid ${color}30`,
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="flex-1 rounded-xl border p-4" style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-surface)" }}>
              <h5 className="font-display text-sm font-bold" style={{ color: "var(--text)" }}>
                {comp.component}
              </h5>
              <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                {comp.description}
              </p>
            </div>
            {i < components.length - 1 && (
              <div
                className="absolute left-6 top-12 h-4 w-[1px]"
                style={{ backgroundColor: `${color}30` }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function WorkflowDiagram({ steps, color }: { steps: string[]; color: string }) {
  return (
    <div className="flex flex-col gap-2">
      {steps.map((step, i) => (
        <motion.div
          key={i}
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
        >
          <div
            className="h-8 w-8 shrink-0 rounded-lg flex items-center justify-center font-mono text-xs"
            style={{ backgroundColor: `${color}15`, color }}
          >
            {i + 1}
          </div>
          <div className="flex-1 text-sm" style={{ color: "var(--text-muted)" }}>
            {step}
          </div>
          {i < steps.length - 1 && (
            <svg className="h-4 w-4 shrink-0" style={{ color: `${color}60` }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  );
}

export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const study = PROJECTS.find((p) => p.slug === slug);

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold mb-4" style={{ color: "var(--text)" }}>
            Case Study Coming Soon
          </h1>
          <p className="mb-8" style={{ color: "var(--text-muted)" }}>
            This case study is being documented.
          </p>
          <Link
            href="/projects"
            className="px-6 py-3 rounded-xl text-sm font-semibold"
            style={{ backgroundColor: "var(--accent)", color: "var(--bg)" }}
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : null;
  const nextProject = currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : null;

  return (
    <div className="min-h-screen px-6 py-32">
      <div className="mx-auto max-w-4xl">
        {/* Back link */}
        <Reveal>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm mb-12 transition-colors hover:opacity-100"
            style={{ color: "var(--text-muted)" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            All Projects
          </Link>
        </Reveal>

        {/* Header */}
        <Reveal delay={0.1}>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="font-mono text-xs tracking-widest uppercase px-3 py-1 rounded-full"
                style={{
                  backgroundColor: `${study.color}15`,
                  color: study.color,
                  border: `1px solid ${study.color}30`,
                }}
              >
                {study.category.replace("_", " & ")}
              </span>
              <span className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
                {study.stack.length} technologies
              </span>
            </div>
            <h1
              className="font-display text-4xl font-bold tracking-tight md:text-6xl"
              style={{ color: "var(--text)" }}
            >
              {study.title}
            </h1>
            <p className="mt-4 text-xl" style={{ color: "var(--text-muted)" }}>
              {study.tagline}
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {study.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-3 py-1 rounded-lg"
                  style={{
                    backgroundColor: "var(--bg-elevated)",
                    color: study.color,
                    border: `1px solid ${study.color}30`,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Problem */}
        <Reveal delay={0.15}>
          <section className="mb-16">
            <h2 className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "#ef4444" }}>
              Problem
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {study.problem}
            </p>
          </section>
        </Reveal>

        {/* Idea */}
        <Reveal delay={0.2}>
          <section className="mb-16">
            <h2 className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: study.color }}>
              Idea
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {study.idea}
            </p>
          </section>
        </Reveal>

        {/* Solution */}
        <Reveal delay={0.25}>
          <section className="mb-16">
            <h2 className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "var(--signal)" }}>
              Solution
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {study.solution}
            </p>
          </section>
        </Reveal>

        {/* Architecture */}
        <Reveal delay={0.3}>
          <section className="mb-16">
            <h2 className="font-mono text-xs tracking-widest uppercase mb-6" style={{ color: study.color }}>
              Architecture
            </h2>
            <ArchitecturalDiagram components={study.architecture} color={study.color} />
          </section>
        </Reveal>

        {/* Workflow */}
        <Reveal delay={0.35}>
          <section className="mb-16">
            <h2 className="font-mono text-xs tracking-widest uppercase mb-6" style={{ color: study.color }}>
              Workflow
            </h2>
            <div className="rounded-2xl border p-6" style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-surface)" }}>
              <WorkflowDiagram steps={study.workflow} color={study.color} />
            </div>
          </section>
        </Reveal>

        {/* Challenges */}
        <Reveal delay={0.4}>
          <section className="mb-16">
            <h2 className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "#f59e0b" }}>
              Challenges
            </h2>
            <div className="space-y-3">
              {study.challenges.map((c, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl border p-4"
                  style={{ borderColor: "#f59e0b30", backgroundColor: "var(--bg-surface)" }}
                >
                  <span className="text-amber-500 shrink-0">!</span>
                  <p className="text-sm" style={{ color: "var(--text-muted)" }}>{c}</p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* Results */}
        <Reveal delay={0.45}>
          <section className="mb-16">
            <h2 className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "var(--signal)" }}>
              Results
            </h2>
            <div className="rounded-2xl border p-6" style={{ borderColor: "#10b98130", backgroundColor: "var(--bg-surface)" }}>
              <p className="text-lg" style={{ color: "var(--text-muted)" }}>
                {study.results}
              </p>
            </div>
          </section>
        </Reveal>

        {/* Lessons */}
        <Reveal delay={0.5}>
          <section className="mb-16">
            <h2 className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: study.color }}>
              What I Learned
            </h2>
            <div className="space-y-3">
              {study.lessons.map((l, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl border p-4"
                  style={{ borderColor: `${study.color}30`, backgroundColor: "var(--bg-surface)" }}
                >
                  <span style={{ color: study.color }}>→</span>
                  <p className="text-sm" style={{ color: "var(--text-muted)" }}>{l}</p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* Next Steps */}
        <Reveal delay={0.55}>
          <section className="mb-16">
            <h2 className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "var(--text)" }}>
              Next Steps
            </h2>
            <div className="flex flex-wrap gap-2">
              {study.nextSteps.map((step, i) => (
                <span
                  key={i}
                  className="text-xs font-mono px-3 py-1.5 rounded-lg"
                  style={{
                    backgroundColor: "var(--bg-elevated)",
                    color: study.color,
                    border: `1px solid ${study.color}30`,
                  }}
                >
                  {step}
                </span>
              ))}
            </div>
          </section>
        </Reveal>

        {/* Links */}
        <Reveal delay={0.6}>
          <section className="mb-16">
            <div className="flex gap-3">
              {study.github ? (
                <a
                  href={study.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-xl text-sm font-semibold transition-all hover:scale-105"
                  style={{ border: "1px solid var(--border-medium)", color: "var(--text)" }}
                >
                  View Code →
                </a>
              ) : (
                <span className="px-6 py-2.5 rounded-xl text-sm font-mono" style={{ color: "var(--text-muted)", border: "1px solid var(--border)" }}>
                  [GITHUB LINK]
                </span>
              )}
              {study.demo ? (
                <a
                  href={study.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-xl text-sm font-semibold transition-all hover:scale-105"
                  style={{ backgroundColor: study.color, color: "var(--bg)" }}
                >
                  Live Demo →
                </a>
              ) : (
                <span className="px-6 py-2.5 rounded-xl text-sm font-mono" style={{ color: "var(--text-muted)", border: "1px solid var(--border)" }}>
                  [DEMO LINK]
                </span>
              )}
            </div>
          </section>
        </Reveal>

        {/* Navigation */}
        <Reveal delay={0.65}>
          <div className="border-t pt-8 flex justify-between" style={{ borderColor: "var(--border)" }}>
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="group flex items-center gap-2"
                style={{ color: "var(--text-muted)" }}
              >
                <svg className="h-4 w-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                <div>
                  <p className="font-mono text-[10px] uppercase" style={{ color: "var(--text-muted)" }}>Previous</p>
                  <p className="text-sm font-bold" style={{ color: "var(--text)" }}>{prevProject.title}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group flex items-center gap-2 text-right"
                style={{ color: "var(--text-muted)" }}
              >
                <div>
                  <p className="font-mono text-[10px] uppercase" style={{ color: "var(--text-muted)" }}>Next</p>
                  <p className="text-sm font-bold" style={{ color: "var(--text)" }}>{nextProject.title}</p>
                </div>
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
