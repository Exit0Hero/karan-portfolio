"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate send
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

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
            Contact
          </p>
          <h1
            className="font-display mt-4 text-4xl font-bold tracking-tight md:text-6xl"
            style={{ color: "var(--text)" }}
          >
            Get in Touch
          </h1>
          <p
            className="mt-4 max-w-xl text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            Have a project idea, collaboration opportunity, or just want to connect?
            I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {[
              { name: "name", label: "Name", type: "text", placeholder: "Your name" },
              { name: "email", label: "Email", type: "email", placeholder: "you@example.com" },
              { name: "subject", label: "Subject", type: "text", placeholder: "What's this about?" },
            ].map((field) => (
              <div key={field.name}>
                <label
                  className="font-mono text-xs tracking-widest uppercase mb-2 block"
                  style={{ color: "var(--text-muted)" }}
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  value={form[field.name as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                  placeholder={field.placeholder}
                  required
                  className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors focus:border-opacity-100"
                  style={{
                    backgroundColor: "var(--bg-surface)",
                    borderColor: "var(--border)",
                    color: "var(--text)",
                  }}
                />
              </div>
            ))}

            <div>
              <label
                className="font-mono text-xs tracking-widest uppercase mb-2 block"
                style={{ color: "var(--text-muted)" }}
              >
                Message
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project or idea..."
                required
                rows={5}
                className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors focus:border-opacity-100 resize-none"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  borderColor: "var(--border)",
                  color: "var(--text)",
                }}
              />
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
          </motion.form>

          {/* Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div
              className="rounded-2xl border p-6"
              style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-surface)" }}
            >
              <h3
                className="font-mono text-xs tracking-widest uppercase mb-4"
                style={{ color: "var(--accent)" }}
              >
                Quick Links
              </h3>
              <div className="space-y-3">
                {[
                  { label: "GitHub", href: "https://github.com/Exit0Hero", icon: "⌘" },
                  { label: "Resume", href: "#", icon: "📄" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl border p-3 transition-all hover:border-opacity-50"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <span className="text-lg">{link.icon}</span>
                    <span className="text-sm" style={{ color: "var(--text)" }}>
                      {link.label}
                    </span>
                    <svg
                      className="ml-auto h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      style={{ color: "var(--text-muted)" }}
                    >
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div
              className="rounded-2xl border p-6"
              style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-surface)" }}
            >
              <h3
                className="font-mono text-xs tracking-widest uppercase mb-4"
                style={{ color: "var(--accent)" }}
              >
                Response Time
              </h3>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                I typically respond within 24 hours. For urgent matters,
                reach out via GitHub.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
