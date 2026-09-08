"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SITE, NAV_LINKS } from "@/data/content";

export function Footer() {
  return (
    <footer
      className="relative z-10 border-t px-6 py-16"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Top */}
        <div className="flex flex-col items-center gap-12 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div
                className="h-10 w-10 rounded-xl flex items-center justify-center font-display text-sm font-bold"
                style={{ backgroundColor: "var(--accent)", color: "var(--bg)" }}
              >
                K
              </div>
              <div>
                <span className="font-display text-lg font-bold" style={{ color: "var(--text)" }}>
                  {SITE.name}
                </span>
                <p className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
                  {SITE.tagline}
                </p>
              </div>
            </div>
          </div>

          {/* Nav */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-center md:text-left">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm transition-colors hover:opacity-100"
                style={{ color: "var(--text-muted)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social */}
          <div className="flex flex-col items-center gap-3 md:items-end">
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm transition-colors hover:opacity-100"
              style={{ color: "var(--text-muted)" }}
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>

        {/* Divider */}
        <div
          className="my-8 h-[1px]"
          style={{ backgroundColor: "var(--border)" }}
        />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="font-mono text-[10px] tracking-wider" style={{ color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <motion.p
            className="font-mono text-[10px] tracking-wider"
            style={{ color: "var(--text-muted)" }}
            initial={{ opacity: 0.5 }}
            whileHover={{ opacity: 1, color: "var(--accent)" }}
          >
            {SITE.signature}
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
