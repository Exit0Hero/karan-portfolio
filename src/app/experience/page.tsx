"use client";

import { motion } from "framer-motion";

const TIMELINE = [
  {
    type: "education",
    title: "B.Tech in Computer Engineering",
    organization: "Saraswati College of Engineering",
    location: "Mumbai, India",
    date: "2023 — Present",
    description: "Pursuing Bachelor of Technology with focus on systems design, AI/ML, and software engineering.",
    tags: ["Computer Science", "AI/ML", "Systems"],
  },
  {
    type: "experience",
    title: "Community Lead",
    organization: "Rotaract — Pages and Threads",
    location: "Mumbai, India",
    date: "2024 — Present",
    description: "Leading technical community drives, organizing hackathons, and mentoring junior developers in open-source contributions.",
    tags: ["Leadership", "Community", "Mentoring"],
  },
  {
    type: "project",
    title: "SchedulAI",
    organization: "Personal Project",
    date: "2024",
    description: "Built an AI-powered scheduling engine using TensorFlow and FastAPI. Achieved 40% reduction in scheduling conflicts.",
    tags: ["Python", "TensorFlow", "FastAPI"],
  },
  {
    type: "project",
    title: "MiniBiz ERP",
    organization: "Personal Project",
    date: "2024",
    description: "Developed a lightweight ERP system for SMBs with real-time inventory, invoicing, and analytics. Serving 50+ businesses.",
    tags: ["Next.js", "TypeScript", "Prisma"],
  },
  {
    type: "hackathon",
    title: "Hackathon Participant",
    organization: "Various Tech Events",
    date: "2023 — Present",
    description: "Participated in multiple hackathons focusing on AI, systems, and web platform challenges.",
    tags: ["Hackathons", "Rapid Prototyping"],
  },
];

const CERTIFICATIONS = [
  { title: "Machine Learning Specialization", issuer: "Coursera / Stanford", date: "2024" },
  { title: "System Design Interview", issuer: "Educative", date: "2024" },
  { title: "AWS Cloud Practitioner", issuer: "Amazon Web Services", date: "2023" },
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="font-mono text-xs tracking-widest uppercase"
            style={{ color: "var(--accent)" }}
          >
            Experience & Education
          </p>
          <h1
            className="font-display mt-4 text-4xl font-bold tracking-tight md:text-6xl"
            style={{ color: "var(--text)" }}
          >
            Journey
          </h1>
        </motion.div>

        {/* Timeline */}
        <div className="mt-16 relative">
          <div
            className="absolute left-4 top-0 bottom-0 w-[1px] md:left-1/2"
            style={{ backgroundColor: "var(--border)" }}
          />

          <div className="space-y-12">
            {TIMELINE.map((item, i) => (
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
                  style={{
                    backgroundColor:
                      item.type === "education"
                        ? "#00f2fe"
                        : item.type === "experience"
                        ? "#7000ff"
                        : item.type === "hackathon"
                        ? "#f59e0b"
                        : "#10b981",
                  }}
                />

                {/* Content */}
                <div
                  className={`flex-1 ml-10 md:ml-0 ${
                    i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div
                    className="rounded-2xl border p-6 transition-all hover:border-opacity-50"
                    style={{
                      borderColor: "var(--border)",
                      backgroundColor: "var(--bg-surface)",
                    }}
                  >
                    <div className={`flex items-center gap-2 mb-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      <span
                        className="font-mono text-[10px] tracking-widest uppercase px-2 py-0.5 rounded"
                        style={{
                          backgroundColor:
                            item.type === "education"
                              ? "#00f2fe15"
                              : item.type === "experience"
                              ? "#7000ff15"
                              : item.type === "hackathon"
                              ? "#f59e0b15"
                              : "#10b98115",
                          color:
                            item.type === "education"
                              ? "#00f2fe"
                              : item.type === "experience"
                              ? "#7000ff"
                              : item.type === "hackathon"
                              ? "#f59e0b"
                              : "#10b981",
                        }}
                      >
                        {item.type}
                      </span>
                      <span className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
                        {item.date}
                      </span>
                    </div>

                    <h3
                      className="font-display text-lg font-bold"
                      style={{ color: "var(--text)" }}
                    >
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
                          style={{
                            backgroundColor: "var(--bg-elevated)",
                            color: "var(--text-muted)",
                            border: "1px solid var(--border)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="font-mono text-xs tracking-widest uppercase mb-8"
            style={{ color: "var(--accent)" }}
          >
            Certifications
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {CERTIFICATIONS.map((cert) => (
              <motion.div
                key={cert.title}
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
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
