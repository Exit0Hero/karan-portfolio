"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/animations/reveal";
import { SITE } from "@/data/content";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="font-mono text-xs tracking-widest uppercase" style={{ color: "var(--accent)" }}>
            Contact
          </p>
          <h1 className="font-display mt-4 text-4xl font-bold tracking-tight md:text-6xl" style={{ color: "var(--text)" }}>
            Let&apos;s Build Something
          </h1>
          <p className="mt-4 max-w-xl text-lg" style={{ color: "var(--text-muted)" }}>
            Have a project idea, collaboration opportunity, or just want to connect?
            I&apos;d love to hear from you.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {/* Form */}
          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { name: "name", label: "Name", type: "text", placeholder: "Your name" },
                { name: "email", label: "Email", type: "email", placeholder: "you@example.com" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: "var(--text-muted)" }}>
                    {field.label}
                  </label>
                  <motion.div
                    animate={{
                      borderColor: focused === field.name ? "var(--accent)" : "var(--border)",
                    }}
                    className="rounded-xl border"
                    style={{ backgroundColor: "var(--bg-surface)" }}
                  >
                    <input
                      type={field.type}
                      value={form[field.name as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                      onFocus={() => setFocused(field.name)}
                      onBlur={() => setFocused(null)}
                      placeholder={field.placeholder}
                      required
                      className="w-full bg-transparent px-4 py-3 text-sm outline-none"
                      style={{ color: "var(--text)" }}
                    />
                  </motion.div>
                </div>
              ))}

              <div>
                <label className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: "var(--text-muted)" }}>
                  Message
                </label>
                <motion.div
                  animate={{
                    borderColor: focused === "message" ? "var(--accent)" : "var(--border)",
                  }}
                  className="rounded-xl border"
                  style={{ backgroundColor: "var(--bg-surface)" }}
                >
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    placeholder="Tell me about your project or idea..."
                    required
                    rows={5}
                    className="w-full bg-transparent px-4 py-3 text-sm outline-none resize-none"
                    style={{ color: "var(--text)" }}
                  />
                </motion.div>
              </div>

              <motion.button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-xl px-6 py-3.5 text-sm font-semibold transition-all"
                style={{
                  backgroundColor: status === "sent" ? "var(--signal)" : "var(--accent)",
                  color: "var(--bg)",
                  opacity: status === "sending" ? 0.7 : 1,
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {status === "sending" ? "Sending..." : status === "sent" ? "Message Sent!" : "Send Message"}
              </motion.button>
            </form>
          </Reveal>

          {/* Info */}
          <Reveal delay={0.2}>
            <div className="space-y-8">
              <div className="rounded-2xl border p-6" style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-surface)" }}>
                <h3 className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>
                  Quick Links
                </h3>
                <div className="space-y-3">
                  <a
                    href={SITE.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl border p-3 transition-all hover:border-opacity-50"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" style={{ color: "var(--text-muted)" }}>
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span className="text-sm" style={{ color: "var(--text)" }}>GitHub</span>
                    <svg className="ml-auto h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: "var(--text-muted)" }}>
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border p-6" style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-surface)" }}>
                <h3 className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>
                  Response Time
                </h3>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  I typically respond within 24 hours. For urgent matters,
                  reach out via GitHub.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
