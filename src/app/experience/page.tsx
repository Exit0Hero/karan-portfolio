"use client";

import { motion } from "framer-motion";
import { Reveal, StaggerChildren, StaggerItem } from "@/animations/reveal";
import { TIMELINE, CERTIFICATIONS } from "@/data/content";

const TYPE_COLORS: Record<string, string> = {
  education: "#00f2fe",
  project: "#10b981",
  hackathon: "#f59e0b",
  leadership: "#7000ff",
};

export default function ExperiencePage() {
  return (
    <div className="min-h-screen px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="font-mono text-xs tracking-widest uppercase" style={{ color: "var(--accent)" }}>
            Experience & Education
          </p>
          <h1 className="font-display mt-4 text-4xl font-bold tracking-tight md:text-6xl" style={{ color: "var(--text)" }}>
            Journey
          </h1>
        </Reveal>

        {/* Timeline */}
        <div className="mt-16 relative">
          <div
            className="absolute left-4 top-0 bottom-0 w-[1px] md:left-1/2"
            style={{ backgroundColor: "var(--border)" }}
          />

          <div className="space-y-12">
            {TIMELINE.map((item, i) => {
              const color = TYPE_COLORS[item.type] || "var(--accent)";
              return (
                <motion.div
                  key={i}
                  className={`relative flex gap-6 md:gap-12 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  {/* Dot */}
                  <div
                    className="absolute left-4 md:left-1/2 top-0 h-3 w-3 rounded-full -translate-x-1/2 z-10"
                    style={{ backgroundColor: color }}
                  />

                  {/* Content */}
                  <div className={`flex-1 ml-10 md:ml-0 ${
                    i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"
                  }`}>
                    <div
                      className="rounded-2xl border p-6 transition-all hover:border-opacity-50"
                      style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-surface)" }}
                    >
                      <div className={`flex items-center gap-2 mb-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                        <span
                          className="font-mono text-[10px] tracking-widest uppercase px-2 py-0.5 rounded"
                          style={{ backgroundColor: `${color}15`, color }}
                        >
                          {item.type}
                        </span>
                        <span className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
                          {item.year}
                        </span>
                      </div>

                      <h3 className="font-display text-lg font-bold" style={{ color: "var(--text)" }}>
                        {item.title}
                      </h3>
                      <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                        {item.organization}
                        {item.location && ` · ${item.location}`}
                      </p>
                      <p className="text-sm mt-2" style={{ color: "var(--text-muted)" }}>
                        {item.description}
                      </p>

                      <div className={`flex flex-wrap gap-2 mt-3 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-mono px-2 py-0.5 rounded"
                            style={{ backgroundColor: "var(--bg-elevated)", color: "var(--text-muted)", border: "1px solid var(--border)" }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Certifications */}
        <Reveal delay={0.2}>
          <div className="mt-24">
            <h2 className="font-mono text-xs tracking-widest uppercase mb-8" style={{ color: "var(--accent)" }}>
              Certifications
            </h2>
            <StaggerChildren className="grid gap-4 md:grid-cols-3">
              {CERTIFICATIONS.map((cert) => (
                <StaggerItem key={cert.title}>
                  <motion.div
                    className="rounded-2xl border p-5"
                    style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-surface)" }}
                    whileHover={{ borderColor: "var(--accent)", y: -2 }}
                  >
                    <h4 className="font-display text-sm font-bold" style={{ color: "var(--text)" }}>
                      {cert.title}
                    </h4>
                    <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                      {cert.issuer}
                    </p>
                    <p className="font-mono text-xs mt-2" style={{ color: "var(--accent)" }}>
                      {cert.date}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
