"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const CASE_STUDIES: Record<string, {
  title: string;
  tagline: string;
  category: string;
  color: string;
  stack: string[];
  problem: string;
  hypothesis: string;
  observations: string[];
  constraints: string[];
  architecture: { component: string; description: string }[];
  experiments: { name: string; result: string; metric: string }[];
  decisions: { decision: string; alternatives: string; rationale: string; tradeoff: string }[];
  failures: string[];
  results: string;
  lessons: string[];
  nextSteps: string[];
}> = {
  "schedulai": {
    title: "SchedulAI",
    tagline: "AI-powered scheduling engine",
    category: "AI_OPTIMIZATION",
    color: "#00f2fe",
    stack: ["Python", "TensorFlow", "FastAPI", "PostgreSQL", "Redis"],
    problem: "Manual scheduling causes 23% productivity loss in teams. Existing tools lack intelligent conflict resolution and cannot adapt to changing team dynamics.",
    hypothesis: "An ML model trained on historical scheduling data can predict optimal time slots and resolve conflicts 3x faster than manual methods.",
    observations: [
      "Peak productivity occurs between 10am-12pm for 73% of developers",
      "Meeting-free blocks > 2 hours increase deep work output by 40%",
      "Cross-timezone teams have 2.5x more scheduling conflicts",
    ],
    constraints: [
      "Must integrate with Google Calendar and Outlook",
      "Response time < 500ms for scheduling queries",
      "GDPR compliant data handling",
    ],
    architecture: [
      { component: "FastAPI Gateway", description: "REST API handling scheduling requests with rate limiting" },
      { component: "ML Predictor", description: "TensorFlow model for optimal slot prediction" },
      { component: "Conflict Resolver", description: "Graph-based algorithm for multi-party scheduling" },
      { component: "Cache Layer", description: "Redis for frequently accessed calendar data" },
    ],
    experiments: [
      { name: "ML vs Rule-based", result: "ML reduced conflicts by 40%", metric: "40% fewer conflicts" },
      { name: "Response Time", result: "p95 latency under 200ms", metric: "< 200ms p95" },
      { name: "User Satisfaction", result: "NPS improved from 32 to 67", metric: "NPS +35" },
    ],
    decisions: [
      { decision: "TensorFlow over PyTorch", alternatives: "PyTorch, ONNX Runtime", rationale: "Better production deployment tooling", tradeoff: "Less experimental flexibility" },
      { decision: "PostgreSQL over MongoDB", alternatives: "MongoDB, DynamoDB", rationale: "Complex relational queries for scheduling", tradeoff: "Horizontal scaling more complex" },
    ],
    failures: [
      "Initial CNN approach failed — scheduling is sequential, not spatial",
      "Real-time sync via WebSockets caused race conditions — switched to polling",
    ],
    results: "40% reduction in scheduling conflicts, 15% improvement in team utilization, deployed to 200+ users.",
    lessons: [
      "Domain-specific ML outperforms generic models",
      "Simple polling can be more reliable than WebSockets for non-critical updates",
      "User feedback loops are essential for model retraining",
    ],
    nextSteps: [
      "Natural language scheduling via chatbot interface",
      "Multi-calendar federated learning",
      "Predictive meeting duration estimation",
    ],
  },
  "minibiz-erp": {
    title: "MiniBiz ERP",
    tagline: "Lightweight ERP for SMBs",
    category: "WEB_PLATFORMS",
    color: "#7000ff",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    problem: "Small businesses struggle with fragmented tools — separate apps for inventory, invoicing, and reporting. This creates data silos and 15+ hours/week of manual data entry.",
    hypothesis: "A unified, lightweight ERP with real-time sync can reduce administrative overhead by 60% while maintaining data accuracy.",
    observations: [
      "Average SMB uses 5+ disconnected tools for operations",
      "Manual data entry causes 12% error rate in financial records",
      "Real-time inventory visibility reduces overstock by 30%",
    ],
    constraints: [
      "Must handle 10,000+ SKUs per business",
      "Sub-second page loads on mobile",
      "PCI DSS compliant payment processing",
    ],
    architecture: [
      { component: "Next.js Frontend", description: "SSR/SSG hybrid with optimistic UI updates" },
      { component: "API Routes", description: "Serverless endpoints with rate limiting" },
      { component: "Prisma ORM", description: "Type-safe database queries with migrations" },
      { component: "Stripe Integration", description: "Automated invoicing and payment tracking" },
    ],
    experiments: [
      { name: "SSR vs CSR", result: "SSR reduced initial load by 45%", metric: "45% faster FCP" },
      { name: "Optimistic UI", result: "Perceived latency dropped to near-zero", metric: "~0ms perceived" },
      { name: "Bundle Size", result: "Code splitting reduced initial bundle by 60%", metric: "-60% bundle" },
    ],
    decisions: [
      { decision: "Next.js over Remix", alternatives: "Remix, SvelteKit", rationale: "Larger ecosystem, better Vercel integration", tradeoff: "Slightly larger bundle" },
      { decision: "Prisma over Drizzle", alternatives: "Drizzle, Kysely", rationale: "Better DX with schema-first approach", tradeoff: "Runtime overhead" },
    ],
    failures: [
      "Initial monolithic component structure caused 3s page loads — refactored to feature-based splitting",
      "Real-time inventory sync via polling hammered the DB — switched to change data capture",
    ],
    results: "Unified platform serving 50+ businesses, 60% faster invoice processing, 99.9% uptime.",
    lessons: [
      "Feature-based code splitting is non-negotiable for ERPs",
      "Optimistic UI is essential for perceived performance",
      "Change data capture scales better than polling for real-time features",
    ],
    nextSteps: [
      "Multi-tenant architecture for SaaS model",
      "AI-powered expense categorization",
      "Mobile app with barcode scanning",
    ],
  },
};

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

export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const study = CASE_STUDIES[slug];

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold mb-4" style={{ color: "var(--text)" }}>
            Case Study Coming Soon
          </h1>
          <p className="mb-8" style={{ color: "var(--text-muted)" }}>
            This case study is being documented with full scientific rigor.
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

  return (
    <div className="min-h-screen px-6 py-32">
      <div className="mx-auto max-w-4xl">
        {/* Back link */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
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
        </motion.div>

        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span
            className="font-mono text-xs tracking-widest uppercase px-3 py-1 rounded-full inline-block mb-4"
            style={{
              backgroundColor: `${study.color}15`,
              color: study.color,
              border: `1px solid ${study.color}30`,
            }}
          >
            {study.category.replace("_", " & ")}
          </span>
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
        </motion.div>

        {/* Sections */}
        {[
          { title: "Problem Statement", content: study.problem, color: "#ef4444" },
          { title: "Hypothesis", content: study.hypothesis, color: study.color },
          { title: "Results", content: study.results, color: "#10b981" },
        ].map((section, i) => (
          <motion.div
            key={section.title}
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <h2
              className="font-mono text-xs tracking-widest uppercase mb-4"
              style={{ color: section.color }}
            >
              {section.title}
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {section.content}
            </p>
          </motion.div>
        ))}

        {/* Observations */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="font-mono text-xs tracking-widest uppercase mb-4"
            style={{ color: study.color }}
          >
            Observations
          </h2>
          <div className="space-y-3">
            {study.observations.map((obs, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xl border p-4"
                style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-surface)" }}
              >
                <span className="font-mono text-xs" style={{ color: study.color }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>{obs}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Architecture */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="font-mono text-xs tracking-widest uppercase mb-6"
            style={{ color: study.color }}
          >
            Architecture
          </h2>
          <ArchitecturalDiagram components={study.architecture} color={study.color} />
        </motion.div>

        {/* Experiments */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="font-mono text-xs tracking-widest uppercase mb-4"
            style={{ color: study.color }}
          >
            Controlled Experiments
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {study.experiments.map((exp) => (
              <div
                key={exp.name}
                className="rounded-xl border p-5"
                style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-surface)" }}
              >
                <h4 className="font-display text-sm font-bold mb-2" style={{ color: "var(--text)" }}>
                  {exp.name}
                </h4>
                <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>{exp.result}</p>
                <span
                  className="font-mono text-lg font-bold"
                  style={{ color: study.color }}
                >
                  {exp.metric}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Decision Matrix */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="font-mono text-xs tracking-widest uppercase mb-4"
            style={{ color: study.color }}
          >
            Decision Matrix
          </h2>
          <div className="space-y-4">
            {study.decisions.map((d) => (
              <div
                key={d.decision}
                className="rounded-xl border p-5"
                style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-surface)" }}
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-display text-sm font-bold mb-1" style={{ color: study.color }}>
                      {d.decision}
                    </h4>
                    <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                      Alternatives: {d.alternatives}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs mb-1" style={{ color: "var(--signal)" }}>
                      Rationale: {d.rationale}
                    </p>
                    <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                      Trade-off: {d.tradeoff}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Failures */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="font-mono text-xs tracking-widest uppercase mb-4"
            style={{ color: "#ef4444" }}
          >
            Documented Failures
          </h2>
          <div className="space-y-3">
            {study.failures.map((f, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xl border p-4"
                style={{ borderColor: "#ef444430", backgroundColor: "var(--bg-surface)" }}
              >
                <span className="text-red-500">✕</span>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>{f}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Lessons */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="font-mono text-xs tracking-widest uppercase mb-4"
            style={{ color: "#10b981" }}
          >
            Lessons Learned
          </h2>
          <div className="space-y-3">
            {study.lessons.map((l, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xl border p-4"
                style={{ borderColor: "#10b98130", backgroundColor: "var(--bg-surface)" }}
              >
                <span className="text-emerald-500">→</span>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>{l}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="font-mono text-xs tracking-widest uppercase mb-4"
            style={{ color: study.color }}
          >
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
        </motion.div>
      </div>
    </div>
  );
}
