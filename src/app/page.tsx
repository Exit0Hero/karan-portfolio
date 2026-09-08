"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { IntroSequence } from "@/components/intro-sequence";
import { HeroCanvas } from "@/components/hero-canvas";
import { ScientificOS } from "@/components/scientific-os";
import { HeroParallax } from "@/components/hero-parallax";
import { Reveal, StaggerChildren, StaggerItem } from "@/animations/reveal";
import { MagneticButton } from "@/animations/magnetic-button";
import { PROJECTS, SITE } from "@/data/content";

const STATS = [
  { value: "4+", label: "Projects Built" },
  { value: "40%", label: "Avg Improvement" },
  { value: "5+", label: "Technologies" },
  { value: "1", label: "Mission" },
];

export default function Home() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      <IntroSequence onComplete={() => setIntroDone(true)} />

      {introDone && (
        <>
          <HeroCanvas />
          <HeroParallax />

          {/* Stats Section */}
          <section className="relative z-10 px-6 py-20">
            <div className="mx-auto max-w-5xl">
              <StaggerChildren className="grid grid-cols-2 gap-6 md:grid-cols-4">
                {STATS.map((stat) => (
                  <StaggerItem key={stat.label}>
                    <motion.div
                      className="rounded-2xl border p-6 text-center"
                      style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-surface)" }}
                      whileHover={{ borderColor: "var(--accent)", y: -4 }}
                    >
                      <span className="font-display text-3xl font-bold md:text-4xl" style={{ color: "var(--accent)" }}>
                        {stat.value}
                      </span>
                      <p className="font-mono text-xs mt-2 tracking-wider uppercase" style={{ color: "var(--text-muted)" }}>
                        {stat.label}
                      </p>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </div>
          </section>

          {/* Selected Work */}
          <section className="relative z-10 px-6 py-20">
            <div className="mx-auto max-w-5xl">
              <Reveal>
                <div className="mb-12">
                  <p className="font-mono text-xs tracking-widest uppercase" style={{ color: "var(--accent)" }}>
                    Selected Work
                  </p>
                  <h2 className="font-display mt-4 text-3xl font-bold md:text-5xl" style={{ color: "var(--text)" }}>
                    Project Highlights
                  </h2>
                </div>
              </Reveal>

              <StaggerChildren className="grid gap-6 md:grid-cols-2" delay={0.1}>
                {PROJECTS.filter((p) => p.featured).map((project) => (
                  <StaggerItem key={project.id}>
                    <a
                      href={`/projects/${project.slug}`}
                      className="group relative overflow-hidden rounded-2xl border p-8 block"
                      style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-surface)" }}
                      data-cursor="project"
                    >
                      <motion.div
                        className="absolute -top-20 -right-20 h-40 w-40 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ backgroundColor: project.color }}
                      />
                      <div className="relative">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="font-mono text-xs tracking-widest uppercase" style={{ color: project.color }}>
                            {project.title}
                          </span>
                          <span className="font-mono text-[10px] px-2 py-0.5 rounded" style={{ backgroundColor: `${project.color}15`, color: project.color }}>
                            {project.category.replace("_", " & ")}
                          </span>
                        </div>
                        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                          {project.tagline}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.stack.slice(0, 3).map((tech) => (
                            <span key={tech} className="text-[10px] font-mono px-2 py-0.5 rounded" style={{ backgroundColor: "var(--bg-elevated)", color: "var(--text-muted)" }}>
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="mt-6 flex items-center gap-2 text-sm font-medium" style={{ color: "var(--text)" }}>
                          View Case Study
                          <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </a>
                  </StaggerItem>
                ))}
              </StaggerChildren>

              <Reveal delay={0.2}>
                <div className="mt-8 text-center">
                  <MagneticButton
                    href="/projects"
                    className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all"
                    strength={0.2}
                  >
                    <span style={{ color: "var(--text)", border: "1px solid var(--border-medium)", padding: "0.75rem 1.5rem", borderRadius: "0.75rem" }}>
                      View All Projects →
                    </span>
                  </MagneticButton>
                </div>
              </Reveal>
            </div>
          </section>

          {/* Technical Identity */}
          <section className="relative z-10 px-6 py-20">
            <div className="mx-auto max-w-5xl">
              <Reveal>
                <div className="mb-12 text-center">
                  <p className="font-mono text-xs tracking-widest uppercase" style={{ color: "var(--accent)" }}>
                    Technical Identity
                  </p>
                  <h2 className="font-display mt-4 text-3xl font-bold md:text-5xl" style={{ color: "var(--text)" }}>
                    How I Think
                  </h2>
                </div>
              </Reveal>

              <StaggerChildren className="grid gap-6 md:grid-cols-3" delay={0.1}>
                {[
                  {
                    title: "AI / ML",
                    items: ["Python", "TensorFlow", "scikit-learn", "Recommendation Systems", "Data Analysis"],
                    color: "#00f2fe",
                  },
                  {
                    title: "Development",
                    items: ["React", "Next.js", "TypeScript", "FastAPI", "REST APIs"],
                    color: "#7000ff",
                  },
                  {
                    title: "Data & Systems",
                    items: ["PostgreSQL", "MongoDB", "Redis", "SQL", "Docker"],
                    color: "#10b981",
                  },
                ].map((group) => (
                  <StaggerItem key={group.title}>
                    <div
                      className="rounded-2xl border p-6 h-full"
                      style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-surface)" }}
                    >
                      <h3 className="font-display text-lg font-bold mb-4" style={{ color: group.color }}>
                        {group.title}
                      </h3>
                      <ul className="space-y-2">
                        {group.items.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
                            <span style={{ color: group.color }}>→</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </div>
          </section>

          {/* Journey Preview */}
          <section className="relative z-10 px-6 py-20">
            <div className="mx-auto max-w-5xl">
              <Reveal>
                <div className="mb-12 text-center">
                  <p className="font-mono text-xs tracking-widest uppercase" style={{ color: "var(--accent)" }}>
                    Journey
                  </p>
                  <h2 className="font-display mt-4 text-3xl font-bold md:text-5xl" style={{ color: "var(--text)" }}>
                    The Path So Far
                  </h2>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="relative">
                  <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px]" style={{ backgroundColor: "var(--border)" }} />
                  <div className="space-y-8">
                    {[
                      { year: "2023", text: "Started B.Tech at Saraswati College of Engineering", color: "#00f2fe" },
                      { year: "2024", text: "Built SchedulAI, MiniBiz ERP, and AdaptIQ", color: "#7000ff" },
                      { year: "2024", text: "Became Community Lead at Rotaract", color: "#10b981" },
                      { year: "2025", text: "Continuing to build and learn", color: "#f59e0b" },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        className="relative flex items-center gap-6 md:justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <div className="flex-1 md:text-right md:pr-12">
                          <p className="text-sm" style={{ color: "var(--text-muted)" }}>{item.text}</p>
                        </div>
                        <div className="absolute left-4 md:left-1/2 h-3 w-3 rounded-full -translate-x-1/2" style={{ backgroundColor: item.color }} />
                        <div className="flex-1 md:pl-12">
                          <span className="font-mono text-xs" style={{ color: item.color }}>{item.year}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-12 text-center">
                  <a
                    href="/experience"
                    className="text-sm font-medium transition-colors"
                    style={{ color: "var(--accent)" }}
                  >
                    View Full Journey →
                  </a>
                </div>
              </Reveal>
            </div>
          </section>

          {/* Scientific OS */}
          <div className="relative z-10">
            <ScientificOS />
          </div>

          {/* CTA */}
          <section className="relative z-10 px-6 py-32">
            <div className="mx-auto max-w-3xl text-center">
              <Reveal>
                <h2 className="font-display text-3xl font-bold md:text-5xl" style={{ color: "var(--text)" }}>
                  {SITE.cta}
                </h2>
                <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <MagneticButton
                    href="/projects"
                    className="rounded-xl px-8 py-3.5 text-sm font-semibold transition-all"
                    strength={0.2}
                  >
                    <span style={{ backgroundColor: "var(--accent)", color: "var(--bg)", padding: "0.875rem 2rem", borderRadius: "0.75rem", display: "inline-block" }}>
                      View Projects
                    </span>
                  </MagneticButton>
                  <MagneticButton
                    href="/contact"
                    className="rounded-xl px-8 py-3.5 text-sm font-semibold transition-all"
                    strength={0.2}
                  >
                    <span style={{ border: "1px solid var(--border-medium)", color: "var(--text)", padding: "0.875rem 2rem", borderRadius: "0.75rem", display: "inline-block" }}>
                      Get in Touch
                    </span>
                  </MagneticButton>
                </div>
              </Reveal>
            </div>
          </section>
        </>
      )}
    </>
  );
}
