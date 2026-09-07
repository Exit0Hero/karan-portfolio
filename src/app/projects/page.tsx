"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectUniverse } from "@/components/project-universe";
import { ProjectCard } from "@/components/project-card";

const PROJECTS = [
  {
    id: "schedulai",
    title: "SchedulAI",
    tagline: "AI-powered scheduling engine that optimizes team productivity through ML-based time allocation and conflict resolution.",
    category: "AI_OPTIMIZATION",
    stack: ["Python", "TensorFlow", "FastAPI", "PostgreSQL", "Redis"],
    color: "#00f2fe",
    problem: "Manual scheduling causes 23% productivity loss in teams. Existing tools lack intelligent conflict resolution.",
    results: "40% reduction in scheduling conflicts, 15% improvement in team utilization.",
  },
  {
    id: "minibiz-erp",
    title: "MiniBiz ERP",
    tagline: "Lightweight ERP system for SMBs with real-time inventory, invoicing, and analytics dashboard.",
    category: "WEB_PLATFORMS",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    color: "#7000ff",
    problem: "Small businesses struggle with fragmented tools for inventory, invoicing, and reporting.",
    results: "Unified platform serving 50+ businesses, 60% faster invoice processing.",
  },
  {
    id: "adaptiq",
    title: "AdaptIQ",
    tagline: "Adaptive learning platform that personalizes content delivery based on user comprehension patterns.",
    category: "DATA_ML",
    stack: ["React", "Python", "scikit-learn", "MongoDB", "D3.js"],
    color: "#10b981",
    problem: "One-size-fits-all education fails 67% of learners who need personalized pacing.",
    results: "35% improvement in course completion rates, 2.1x faster knowledge retention.",
  },
  {
    id: "netflix-system",
    title: "Netflix Microservices",
    tagline: "Distributed video streaming architecture with adaptive bitrate, CDN optimization, and fault tolerance.",
    category: "SYSTEMS",
    stack: ["Go", "gRPC", "Kubernetes", "Redis", "S3"],
    color: "#f59e0b",
    problem: "Monolithic video platforms can't scale to millions of concurrent streams with sub-second latency.",
    results: "99.99% uptime, <100ms start latency, 10M+ concurrent streams supported.",
  },
  {
    id: "neural-search",
    title: "Neural Search",
    tagline: "Semantic search engine using transformer embeddings for context-aware document retrieval.",
    category: "AI_OPTIMIZATION",
    stack: ["Python", "PyTorch", "Elasticsearch", "FastAPI", "Docker"],
    color: "#00f2fe",
    problem: "Keyword-based search misses 40% of relevant documents due to semantic gaps.",
    results: "3.2x improvement in search relevance, 85% reduction in false positives.",
  },
  {
    id: "dataflow",
    title: "DataFlow Pipeline",
    tagline: "Real-time data processing pipeline handling 1M+ events/second with exactly-once semantics.",
    category: "DATA_ML",
    stack: ["Apache Kafka", "Flink", "Scala", "AWS", "Terraform"],
    color: "#10b981",
    problem: "Batch processing creates 15-minute delays in analytics, making real-time decisions impossible.",
    results: "Sub-second processing latency, 99.999% data delivery guarantee.",
  },
];

const CATEGORIES = [
  { id: "ALL", label: "All Projects" },
  { id: "AI_OPTIMIZATION", label: "AI & Optimization" },
  { id: "SYSTEMS", label: "Systems" },
  { id: "DATA_ML", label: "Data & ML" },
  { id: "WEB_PLATFORMS", label: "Web Platforms" },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [view, setView] = useState<"3d" | "grid">("3d");

  const filteredProjects = activeCategory === "ALL"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  const selected = PROJECTS.find((p) => p.id === selectedProject);

  return (
    <div className="min-h-screen px-6 py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="font-mono text-xs tracking-widest uppercase"
            style={{ color: "var(--accent)" }}
          >
            Project Universe
          </p>
          <h1
            className="font-display mt-4 text-4xl font-bold tracking-tight md:text-6xl"
            style={{ color: "var(--text)" }}
          >
            Engineering Work
          </h1>
          <p
            className="mt-4 max-w-xl text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            Evidence-based projects. Real code. Real results. Each project follows
            the Scientific OS framework.
          </p>
        </motion.div>

        {/* View Toggle + Filters */}
        <motion.div
          className="mb-8 flex flex-wrap items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div
            className="flex rounded-xl p-1"
            style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--border)" }}
          >
            <button
              onClick={() => setView("3d")}
              className="px-4 py-2 rounded-lg text-xs font-mono transition-all"
              style={{
                backgroundColor: view === "3d" ? "var(--accent)" : "transparent",
                color: view === "3d" ? "var(--bg)" : "var(--text-muted)",
              }}
            >
              3D View
            </button>
            <button
              onClick={() => setView("grid")}
              className="px-4 py-2 rounded-lg text-xs font-mono transition-all"
              style={{
                backgroundColor: view === "grid" ? "var(--accent)" : "transparent",
                color: view === "grid" ? "var(--bg)" : "var(--text-muted)",
              }}
            >
              Grid
            </button>
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
        </motion.div>

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
                {/* Glow */}
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

                  <h2
                    className="font-display text-3xl font-bold mb-3"
                    style={{ color: "var(--text)" }}
                  >
                    {selected.title}
                  </h2>

                  <p
                    className="text-sm mb-6 leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {selected.tagline}
                  </p>

                  {/* Problem */}
                  <div className="mb-6">
                    <h4
                      className="font-mono text-xs tracking-widest uppercase mb-2"
                      style={{ color: selected.color }}
                    >
                      Problem
                    </h4>
                    <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                      {selected.problem}
                    </p>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h4
                      className="font-mono text-xs tracking-widest uppercase mb-2"
                      style={{ color: "var(--signal)" }}
                    >
                      Results
                    </h4>
                    <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                      {selected.results}
                    </p>
                  </div>

                  {/* Stack */}
                  <div className="mb-6">
                    <h4
                      className="font-mono text-xs tracking-widest uppercase mb-2"
                      style={{ color: "var(--text)" }}
                    >
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

                  {/* Actions */}
                  <div className="flex gap-3">
                    <a
                      href={`/projects/${selected.id}`}
                      className="px-6 py-2.5 rounded-xl text-sm font-semibold transition-all hover:scale-105"
                      style={{
                        backgroundColor: selected.color,
                        color: "var(--bg)",
                      }}
                    >
                      Full Case Study
                    </a>
                    <a
                      href={`https://github.com/Exit0Hero`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 rounded-xl text-sm font-semibold transition-all hover:scale-105"
                      style={{
                        border: "1px solid var(--border-medium)",
                        color: "var(--text)",
                      }}
                    >
                      View Code
                    </a>
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
