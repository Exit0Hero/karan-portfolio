"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IntroSequence } from "@/components/intro-sequence";
import { HeroCanvas } from "@/components/hero-canvas";
import { ScientificOS } from "@/components/scientific-os";
import { HeroParallax } from "@/components/hero-parallax";

const NAV_LINKS = [
  { href: "/projects", label: "Projects" },
  { href: "/philosophy", label: "Philosophy" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

const STATS = [
  { value: "4+", label: "Projects Built" },
  { value: "50+", label: "Users Served" },
  { value: "99.9%", label: "Uptime" },
  { value: "40%", label: "Avg Improvement" },
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
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                {STATS.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className="rounded-2xl border p-6 text-center"
                    style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-surface)" }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ borderColor: "var(--accent)", y: -4 }}
                  >
                    <motion.span
                      className="font-display text-3xl font-bold md:text-4xl"
                      style={{ color: "var(--accent)" }}
                      initial={{ scale: 0.5 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, delay: i * 0.1 }}
                    >
                      {stat.value}
                    </motion.span>
                    <p className="font-mono text-xs mt-2 tracking-wider uppercase" style={{ color: "var(--text-muted)" }}>
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Projects Preview */}
          <section className="relative z-10 px-6 py-20">
            <div className="mx-auto max-w-5xl">
              <motion.div
                className="mb-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="font-mono text-xs tracking-widest uppercase" style={{ color: "var(--accent)" }}>
                  Featured Work
                </p>
                <h2 className="font-display mt-4 text-3xl font-bold md:text-5xl" style={{ color: "var(--text)" }}>
                  Project Highlights
                </h2>
              </motion.div>

              <div className="grid gap-6 md:grid-cols-2">
                {[
                  { title: "SchedulAI", desc: "AI scheduling engine — 40% fewer conflicts", color: "#00f2fe", link: "/projects/schedulai" },
                  { title: "MiniBiz ERP", desc: "Lightweight ERP serving 50+ businesses", color: "#7000ff", link: "/projects/minibiz-erp" },
                ].map((project, i) => (
                  <motion.a
                    key={project.title}
                    href={project.link}
                    className="group relative overflow-hidden rounded-2xl border p-8"
                    style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-surface)" }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ borderColor: project.color, y: -4 }}
                  >
                    <div
                      className="absolute -top-20 -right-20 h-40 w-40 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ backgroundColor: project.color }}
                    />
                    <div className="relative">
                      <span className="font-mono text-xs tracking-widest uppercase" style={{ color: project.color }}>
                        {project.title}
                      </span>
                      <p className="mt-2 text-sm" style={{ color: "var(--text-muted)" }}>
                        {project.desc}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-sm font-medium" style={{ color: "var(--text)" }}>
                        View Case Study
                        <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              <motion.div
                className="mt-8 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <motion.a
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all"
                  style={{ border: "1px solid var(--border-medium)", color: "var(--text)" }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View All Projects
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
              </motion.div>
            </div>
          </section>

          {/* Scientific OS Section */}
          <div className="relative z-10">
            <ScientificOS />
          </div>

          {/* Footer */}
          <footer
            className="relative z-10 border-t px-6 py-12"
            style={{ borderColor: "var(--border)" }}
          >
            <div className="mx-auto max-w-5xl">
              <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className="h-8 w-8 rounded-lg flex items-center justify-center font-display text-xs font-bold"
                    style={{ backgroundColor: "var(--accent)", color: "var(--bg)" }}
                  >
                    K
                  </div>
                  <span className="font-display text-sm font-bold" style={{ color: "var(--text)" }}>
                    Karan Sasane
                  </span>
                </div>
                <div className="flex gap-6">
                  {NAV_LINKS.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-xs transition-colors hover:opacity-100"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
                <p className="font-mono text-[10px]" style={{ color: "var(--text-muted)" }}>
                  © 2026 Karan Sasane
                </p>
              </div>
            </div>
          </footer>
        </>
      )}
    </>
  );
}
