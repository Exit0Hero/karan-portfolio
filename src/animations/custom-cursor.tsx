"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type CursorState = "default" | "pointer" | "project" | "link";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [state, setState] = useState<CursorState>("default");
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button']")) {
        setState("link");
      } else if (target.closest("[data-cursor='project']")) {
        setState("project");
      } else if (target.closest("[data-cursor='pointer']")) {
        setState("pointer");
      } else {
        setState("default");
      }
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isMobile, visible]);

  if (isMobile) return null;

  const sizes = {
    default: 8,
    pointer: 40,
    project: 64,
    link: 32,
  };

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Inner dot */}
          <motion.div
            className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full mix-blend-difference"
            style={{ backgroundColor: "#fff" }}
            animate={{
              x: position.x - sizes.default / 2,
              y: position.y - sizes.default / 2,
              width: sizes.default,
              height: sizes.default,
              opacity: 1,
            }}
            transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
          />
          {/* Outer ring */}
          <motion.div
            className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full border"
            style={{ borderColor: "rgba(255,255,255,0.5)" }}
            animate={{
              x: position.x - sizes[state] / 2,
              y: position.y - sizes[state] / 2,
              width: sizes[state],
              height: sizes[state],
              opacity: 1,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.8 }}
          />
          {/* Project label */}
          {state === "project" && (
            <motion.div
              className="pointer-events-none fixed z-[9999] font-mono text-[10px] tracking-widest uppercase"
              style={{ color: "#fff", left: position.x - 16, top: position.y + 40 }}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              VIEW
            </motion.div>
          )}
        </>
      )}
    </AnimatePresence>
  );
}
