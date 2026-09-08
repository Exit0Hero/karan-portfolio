"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectUniverse } from "@/components/project-universe";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/animations/reveal";
import { PROJECTS, type ProjectCategory } from "@/data/content";

const CATEGORIES: { id: ProjectCategory | "ALL"; label: string }[] = [
  { id: "ALL", label: "All Projects" },
  { id: "AI_OPTIMIZATION", label: "AI & Optimization" },
  { id: "SYSTEMS", label: "Systems" },
  { id: "DATA_ML", label: "Data & ML" },
  { id: "WEB_PLATFORMS", label: "Web Platforms" },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "ALL">("ALL");
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [view, setView] = useState<"3d" | "grid">("grid");

  const filteredProjects = activeCategory === "ALL"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  const selected = PROJECTS.find((p) => p.id === selectedProject);

  return (
    <div className="min-h-screen px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-16">
            <p className="font-mono text-xs tracking-widest uppercase" style={{ color: "var(--accent)" }}>
              Project Laboratory
            </p>
            <h1 className="font-display mt-4 text-4xl font-bold tracking-tight md:text-6xl" style={{ color: "var(--text)" }}>
              Engineering Work
            </h1>
            <p className="mt-4 max-w-xl text-lg" style={{ color: "var(--text-muted)" }}>
              Evidence-based projects. Real code. Real results. Each project follows
              the Scientific OS framework.
            </p>
          </div>
        </Reveal>

        {/* View Toggle + Filters */}
        <Reveal delay={0.1}>
          <div className="mb-8 flex flex-wrap items-center gap-4">
            <div
              className="flex rounded-xl p-1"
              style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}
            >
              {(["grid", "3d"] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  className="px-4 py-2 rounded-lg text-xs font-mono transition-all"
                  style={{
                    backgroundColor: view === v ? "var(--accent)" : "transparent",
                    color: view === v ? "var(--bg)" : "var(--text-muted)",
                  }}
                >
                  {v === "3d" ? "3D View" : "Grid"}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono transition-all"
                  style={{
                    backgroundColor: activeCategory === cat.id ? "var(--accent)" : "var(--bg-surface)",
                    color: activeCategory === cat.id ? "var(--bg)" : "var(--text-muted)",
                    border: `1px solid ${activeCategory === cat.id ? "var(--accent)" : "var(--border)"}`,
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* 3D Universe View */}
        <AnimatePresence mode="wait">
          {view === "3d" && (
            <motion.div
              key="3d"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectUniverse onSelectProject={setSelectedProject} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Grid View */}
        <AnimatePresence mode="wait">
          {view === "grid" && (
            <motion.div
              key="grid"
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <ProjectCard
                    title={project.title}
                    tagline={project.tagline}
                    category={project.category}
                    stack={project.stack}
                    accentColor={project.color}
                    onClick={() => setSelectedProject(project.id)}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={() => setSelectedProject(null)}
              />
              <motion.div
                className="relative max-w-2xl w-full rounded-3xl border p-8 overflow-hidden"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  borderColor: selected.color,
                }}
                initial={{ scale: 0.9, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 30 }}
              >
                <div
                  className="absolute -top-20 -right-20 w-60 h-60 rounded-full blur-[100px]"
                  style={{ backgroundColor: selected.color, opacity: 0.15 }}
                />

                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="font-mono text-xs tracking-widest uppercase px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: `${selected.color}15`,
                        color: selected.color,
                        border: `1px solid ${selected.color}30`,
                      }}
                    >
                      {selected.category.replace("_", " & ")}
                    </span>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="h-8 w-8 rounded-full flex items-center justify-center transition-colors"
                      style={{ backgroundColor: "var(--bg-elevated)", color: "var(--text-muted)" }}
                    >
                      ✕
                    </button>
                  </div>

                  <h2 className="font-display text-3xl font-bold mb-3" style={{ color: "var(--text)" }}>
                    {selected.title}
                  </h2>

                  <p className="text-sm mb-6 leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {selected.tagline}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: selected.color }}>
                      Problem
                    </h4>
                    <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                      {selected.problem}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: "var(--signal)" }}>
                      Results
                    </h4>
                    <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                      {selected.results}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: "var(--text)" }}>
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selected.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono px-3 py-1 rounded-lg"
                          style={{
                            backgroundColor: "var(--bg-elevated)",
                            color: selected.color,
                            border: `1px solid ${selected.color}30`,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={`/projects/${selected.slug}`}
                      className="px-6 py-2.5 rounded-xl text-sm font-semibold transition-all hover:scale-105"
                      style={{ backgroundColor: selected.color, color: "var(--bg)" }}
                    >
                      Full Case Study
                    </a>
                    {selected.github ? (
                      <a
                        href={selected.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2.5 rounded-xl text-sm font-semibold transition-all hover:scale-105"
                        style={{ border: "1px solid var(--border-medium)", color: "var(--text)" }}
                      >
                        View Code
                      </a>
                    ) : (
                      <span className="px-6 py-2.5 rounded-xl text-sm font-mono" style={{ color: "var(--text-muted)", border: "1px solid var(--border)" }}>
                        [GITHUB]
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
