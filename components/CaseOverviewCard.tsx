"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Case } from "@/data/cases";

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
            padding: "32px",
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
        </div>
      </Link>
    </motion.div>
  );
}
