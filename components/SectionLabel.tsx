"use client";

import { motion } from "framer-motion";

export default function SectionLabel({ label, icon = "✦", className = "" }: { label: string; icon?: string; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45 }}
      className={className}
      style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 0 }}
    >
      <div style={{ height: 2, width: 124, background: "linear-gradient(to right, #5635FA 0%, #24156B 100%)" }} />
      <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "0 20px" }}>
        <span
          className="font-inter"
          style={{ fontSize: 24, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(234,234,240,0.4)", whiteSpace: "nowrap" }}
        >
          {label}
        </span>
        <img
          src={label === "About me" ? "/assets/BAG.svg" : "/assets/SPARKLE.svg"}
          alt={label}
          style={{
            width: 18,
            height: 18,
            objectFit: "contain",
            opacity: 0.9,
          }}
        />
      </div>
      <div style={{ height: 2, width: 124, background: "linear-gradient(to left, #5635FA 0%, #24156B 100%)" }} />
    </motion.div>
  );
}
