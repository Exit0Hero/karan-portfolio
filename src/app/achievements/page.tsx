"use client";

import { Reveal, StaggerChildren, StaggerItem } from "@/animations/reveal";
import { ACHIEVEMENTS, CERTIFICATIONS } from "@/data/content";

const CATEGORY_COLORS: Record<string, string> = {
  leadership: "#7000ff",
  project: "#10b981",
  certification: "#00f2fe",
  learning: "#f59e0b",
};

const CATEGORY_LABELS: Record<string, string> = {
  leadership: "Leadership",
  project: "Project",
  certification: "Certification",
  learning: "Learning",
};

export default function AchievementsPage() {
  return (
    <div className="min-h-screen px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="font-mono text-xs tracking-widest uppercase" style={{ color: "var(--accent)" }}>
            Achievements
          </p>
          <h1 className="font-display mt-4 text-4xl font-bold tracking-tight md:text-6xl" style={{ color: "var(--text)" }}>
            Milestones & Recognition
          </h1>
          <p className="mt-4 max-w-xl text-lg" style={{ color: "var(--text-muted)" }}>
            Verified achievements from projects, leadership, and continuous learning.
          </p>
        </Reveal>

        {/* Category legend */}
        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-4">
            {Object.entries(CATEGORY_COLORS).map(([key, color]) => (
              <div key={key} className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
                <span className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
                  {CATEGORY_LABELS[key]}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Achievements */}
        <StaggerChildren className="mt-12 space-y-4" delay={0.15}>
          {ACHIEVEMENTS.map((achievement, i) => {
            const color = CATEGORY_COLORS[achievement.category] || "var(--accent)";
            return (
              <StaggerItem key={i}>
                <div
                  className="rounded-2xl border p-6 transition-all hover:border-opacity-50"
                  style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-surface)" }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className="font-mono text-[10px] tracking-widest uppercase px-2 py-0.5 rounded"
                          style={{
                            backgroundColor: `${color}15`,
                            color: color,
                            border: `1px solid ${color}30`,
                          }}
                        >
                          {CATEGORY_LABELS[achievement.category]}
                        </span>
                        <span className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
                          {achievement.year}
                        </span>
                      </div>
                      <h3 className="font-display text-lg font-bold" style={{ color: "var(--text)" }}>
                        {achievement.title}
                      </h3>
                      <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
                        {achievement.organization}
                      </p>
                      <p className="text-sm mt-2" style={{ color: "var(--text-muted)" }}>
                        {achievement.description}
                      </p>
                    </div>
                    <div
                      className="h-10 w-10 shrink-0 rounded-xl flex items-center justify-center text-lg"
                      style={{ backgroundColor: `${color}15`, color }}
                    >
                      {achievement.category === "leadership" && "★"}
                      {achievement.category === "project" && "◆"}
                      {achievement.category === "certification" && "✓"}
                      {achievement.category === "learning" && "→"}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerChildren>

        {/* Certifications */}
        <Reveal delay={0.2}>
          <div className="mt-20">
            <h2 className="font-mono text-xs tracking-widest uppercase mb-8" style={{ color: "var(--accent)" }}>
              Certifications
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.title}
                  className="rounded-2xl border p-5"
                  style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-surface)" }}
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
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
