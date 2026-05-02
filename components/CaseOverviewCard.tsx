"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Case } from "@/data/cases";

const gradients: Record<string, string> = {
  "scratch-card":              "linear-gradient(160deg, #2D1B6B, #1A113D, #0F0A23)",
  "igaming-product-evolution": "linear-gradient(160deg, #0d2b4a, #1A113D, #0F0A23)",
  "event-commerce-redesign":   "linear-gradient(160deg, #1a2d1b, #1A113D, #0F0A23)",
};

export default function CaseOverviewCard({ caseData, index = 0 }: { caseData: Case; index?: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/cases/${caseData.slug}`} style={{ textDecoration: "none", display: "block" }}>
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            background: "#1A113D",
            border: `1px solid ${hovered ? "rgba(123,97,255,0.3)" : "rgba(255,255,255,0.07)"}`,
            borderRadius: 16, overflow: "hidden",
            transition: "border-color 0.35s, box-shadow 0.35s",
            boxShadow: hovered ? "0 8px 40px rgba(123,97,255,0.15)" : "0 4px 24px rgba(0,0,0,0.3)",
            padding: "32px 32px 0 32px",
            display: "flex", flexDirection: "column",
          }}
        >
          <p className="font-inter" style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(202,202,251,0.7)", marginBottom: 14 }}>
            {caseData.tags.join(" • ")}
          </p>
          <h3 className="font-crimson" style={{ fontSize: "clamp(24px,2.5vw,32px)", lineHeight: 1.2, color: hovered ? "#CACAFB" : "#EAEAF0", marginBottom: 12, transition: "color 0.3s", fontWeight: 600 }}>
            {caseData.title}
          </h3>
          <p className="font-inter" style={{ fontSize: 15, lineHeight: 1.75, color: "rgba(234,234,240,0.5)", marginBottom: 20 }}>
            {caseData.description}
          </p>
          <span className="font-inter" style={{ fontSize: 14, color: "#FFFFFF", textDecoration: "underline", textUnderlineOffset: 4, marginBottom: 24, display: "block" }}>
            View Case Study
          </span>
          {/* Phone container */}
          <div style={{
            width: "100%", minHeight: 240, borderTop: "1px solid rgba(255,255,255,0.04)",
            background: gradients[caseData.slug] ?? "linear-gradient(#1A113D, #0F0A23)",
            display: "flex", alignItems: "flex-end", justifyContent: "center", paddingTop: 24, overflow: "hidden",
          }}>
            <div style={{
              width: 130, height: 250, borderRadius: 20,
              background: "linear-gradient(160deg, #2D1B6B, #0F0A23)",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: hovered ? "0 0 40px rgba(123,97,255,0.25)" : "0 0 20px rgba(0,0,0,0.5)",
              position: "relative", overflow: "hidden", flexShrink: 0,
              transform: hovered ? "scale(1.04) translateY(-4px)" : "scale(1)",
              transition: "transform 0.4s, box-shadow 0.4s",
            }}>
              <div style={{ position: "absolute", top: 10, left: "50%", transform: "translateX(-50%)", width: 44, height: 5, background: "rgba(0,0,0,0.6)", borderRadius: 3 }} />
              <div style={{ position: "absolute", inset: 14, borderRadius: 14, background: "linear-gradient(135deg, rgba(123,97,255,0.22), transparent, rgba(202,202,251,0.08))" }} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
