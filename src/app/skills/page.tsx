"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Reveal, StaggerChildren, StaggerItem } from "@/animations/reveal";
import { SKILLS, SKILL_CONNECTIONS } from "@/data/content";

type SkillCategory = keyof typeof SKILLS;

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | "all">("all");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories = Object.entries(SKILLS) as [SkillCategory, (typeof SKILLS)[SkillCategory]][];

  const filteredSkills = useMemo(() => {
    if (activeCategory === "all") {
      return categories.flatMap(([_, cat]) =>
        cat.skills.map((s) => ({ ...s, categoryGroup: cat.label }))
      );
    }
    const cat = SKILLS[activeCategory];
    return cat.skills.map((s) => ({ ...s, categoryGroup: cat.label }));
  }, [activeCategory]);

  const connectedSkills = useMemo(() => {
    if (!hoveredSkill) return [];
    return SKILL_CONNECTIONS.filter(
      (c) => c.from === hoveredSkill || c.to === hoveredSkill
    ).flatMap((c) => [c.from, c.to]);
  }, [hoveredSkill]);

  return (
    <div className="min-h-screen px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs tracking-widest uppercase" style={{ color: "var(--accent)" }}>
            Technical Laboratory
          </p>
          <h1 className="font-display mt-4 text-4xl font-bold tracking-tight md:text-6xl" style={{ color: "var(--text)" }}>
            Skills & Technologies
          </h1>
          <p className="mt-4 max-w-xl text-lg" style={{ color: "var(--text-muted)" }}>
            An interactive map of technical capabilities and how they connect.
          </p>
        </Reveal>

        {/* Category filters */}
        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory("all")}
              className="px-4 py-2 rounded-xl text-xs font-mono transition-all"
              style={{
                backgroundColor: activeCategory === "all" ? "var(--accent)" : "var(--bg-surface)",
                color: activeCategory === "all" ? "var(--bg)" : "var(--text-muted)",
                border: `1px solid ${activeCategory === "all" ? "var(--accent)" : "var(--border)"}`,
              }}
            >
              All
            </button>
            {categories.map(([key, cat]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className="px-4 py-2 rounded-xl text-xs font-mono transition-all"
                style={{
                  backgroundColor: activeCategory === key ? "var(--accent)" : "var(--bg-surface)",
                  color: activeCategory === key ? "var(--bg)" : "var(--text-muted)",
                  border: `1px solid ${activeCategory === key ? "var(--accent)" : "var(--border)"}`,
                }}
              >
                {cat.icon} {cat.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Skills visualization */}
        <StaggerChildren className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" delay={0.2}>
          {filteredSkills.map((skill) => {
            const isConnected = connectedSkills.includes(skill.name);
            const isHovered = hoveredSkill === skill.name;
            return (
              <StaggerItem key={skill.name}>
                <motion.div
                  className="relative rounded-2xl border p-5 transition-all"
                  style={{
                    borderColor: isHovered
                      ? "var(--accent)"
                      : isConnected
                      ? "var(--accent-secondary)"
                      : "var(--border)",
                    backgroundColor: "var(--bg-surface)",
                  }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  whileHover={{ y: -2 }}
                  data-cursor="pointer"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-display text-sm font-bold" style={{ color: "var(--text)" }}>
                      {skill.name}
                    </span>
                    <span className="font-mono text-[10px]" style={{ color: "var(--text-muted)" }}>
                      {skill.category}
                    </span>
                  </div>

                  {/* Skill bar */}
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: "var(--bg-elevated)" }}>
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: "var(--accent)" }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    />
                  </div>

                  <div className="mt-2 flex items-center justify-between">
                    <span className="font-mono text-[10px]" style={{ color: "var(--text-muted)" }}>
                      {skill.categoryGroup}
                    </span>
                    <span className="font-mono text-xs font-bold" style={{ color: "var(--accent)" }}>
                      {skill.level}%
                    </span>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerChildren>

        {/* Connection map legend */}
        <Reveal delay={0.3}>
          <div className="mt-16 rounded-2xl border p-6" style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-surface)" }}>
            <h3 className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>
              How Skills Connect
            </h3>
            <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>
              Hover over any skill to see related technologies. Connections are based on how commonly these skills are used together.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
                <span className="text-xs" style={{ color: "var(--text-muted)" }}>Direct connections</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full" style={{ backgroundColor: "var(--accent-secondary)" }} />
                <span className="text-xs" style={{ color: "var(--text-muted)" }}>Indirect connections</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
