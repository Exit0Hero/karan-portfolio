"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  tagline: string;
  category: string;
  stack: string[];
  accentColor: string;
  onClick?: () => void;
}

export function ProjectCard({ title, tagline, category, stack, accentColor, onClick }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotateX(-y * 20);
    setRotateY(x * 20);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      className="group relative cursor-pointer"
      style={{
        perspective: "1000px",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        className="relative overflow-hidden rounded-2xl border p-6 transition-all"
        style={{
          borderColor: isHovered ? accentColor : "var(--border)",
          backgroundColor: "var(--bg-surface)",
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          boxShadow: isHovered
            ? `0 20px 60px -15px ${accentColor}33, 0 0 30px ${accentColor}11`
            : "0 4px 20px rgba(0,0,0,0.1)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at ${50 + rotateY * 2}% ${50 + rotateX * 2}%, ${accentColor}15, transparent 70%)`,
          }}
        />

        {/* Category badge */}
        <div className="flex items-center justify-between mb-4">
          <span
            className="font-mono text-[10px] tracking-widest uppercase px-3 py-1 rounded-full"
            style={{
              backgroundColor: `${accentColor}15`,
              color: accentColor,
              border: `1px solid ${accentColor}30`,
            }}
          >
            {category.replace("_", " & ")}
          </span>
          <motion.div
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: accentColor }}
            animate={{ scale: isHovered ? [1, 1.5, 1] : 1 }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </div>

        {/* Title */}
        <h3
          className="font-display text-xl font-bold mb-2"
          style={{ color: "var(--text)", transform: "translateZ(20px)" }}
        >
          {title}
        </h3>

        {/* Tagline */}
        <p
          className="text-sm mb-4"
          style={{ color: "var(--text-muted)", transform: "translateZ(10px)" }}
        >
          {tagline}
        </p>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-2" style={{ transform: "translateZ(15px)" }}>
          {stack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2 py-0.5 rounded"
              style={{
                backgroundColor: "var(--bg-elevated)",
                color: "var(--text-muted)",
                border: "1px solid var(--border)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Hover arrow */}
        <motion.div
          className="absolute bottom-4 right-4"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
          style={{ color: accentColor }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </motion.div>

        {/* Shine line */}
        <motion.div
          className="absolute top-0 left-0 h-full w-[1px]"
          style={{ backgroundColor: accentColor }}
          initial={{ opacity: 0, top: "-100%" }}
          animate={{
            opacity: isHovered ? 0.5 : 0,
            top: isHovered ? "100%" : "-100%",
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
}
