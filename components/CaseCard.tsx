"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Case } from "@/data/cases";

const C = {
  bg:      "#0F0A23",
  card:    "#1A113D",
  card2:   "#14103a",
  primary: "#7B61FF",
  light:   "#CACAFB",
  text:    "#EAEAF0",
  muted:   "rgba(234,234,240,0.55)",
};

export default function CaseCard({ caseData, variant = "full" }: { caseData: Case; variant?: "full" | "half" }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/cases/${caseData.slug}`} style={{ textDecoration: "none", display: "block" }}>
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            background: `linear-gradient(rgba(26,17,61,0.82), rgba(26,17,61,0.82)), url('/images/BACKGROIUND.png') center/cover no-repeat, ${C.card}`,
            border: `1px solid ${hovered ? "rgba(123,97,255,0.3)" : "rgba(255,255,255,0.07)"}`,
            borderRadius: 16,
            overflow: "hidden",
            transition: "border-color 0.35s, box-shadow 0.35s",
            boxShadow: hovered ? "0 8px 48px rgba(123,97,255,0.16)" : "0 4px 32px rgba(0,0,0,0.35)",
            position: "relative",
          }}
        >
          {variant === "full" ? <FullCard c={caseData} hovered={hovered} /> : <HalfCard c={caseData} hovered={hovered} />}
          {/* glow overlay */}
          <div style={{
            position: "absolute", inset: 0, borderRadius: 16, pointerEvents: "none",
            background: "linear-gradient(135deg, rgba(123,97,255,0.05) 0%, transparent 60%)",
            opacity: hovered ? 1 : 0, transition: "opacity 0.4s",
          }} />
        </div>
      </Link>
    </motion.div>
  );
}

function FullCard({ c, hovered }: { c: Case; hovered: boolean }) {
  return (
    <div style={{ display: "flex", flexDirection: "row", minHeight: 360 }}>
      {/* Left */}
      <div style={{ flex: 1, padding: "40px", display: "flex", alignItems: "center", justifyContent: "center", minWidth: 0 }}>
        <div
          style={{
            width: "100%",
            minHeight: 280,
            padding: 28,
            borderRadius: 20,
            background: "rgba(26,17,61,0.52)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h3 className="font-crimson" style={{ fontSize: "clamp(28px,3vw,42px)", lineHeight: 1.15, color: hovered ? C.light : C.text, marginBottom: 14, transition: "color 0.3s", fontWeight: 600 }}>
              {c.title}
            </h3>
            <p className="font-inter" style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: C.primary, marginTop: 12, marginBottom: 16, fontWeight: 500 }}>
              {c.tags.join(" • ")}
            </p>
            <p className="font-inter" style={{ fontSize: 15, lineHeight: 1.75, color: C.muted, maxWidth: 440, marginBottom: 28 }}>
              {c.description}
            </p>
          </div>
          {/* Metrics */}
          <div style={{ display: "flex", gap: 36, flexWrap: "nowrap", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28, width: "100%" }}>
            {c.metrics.map((m) => (
              <div key={m.label} style={{ flex: 1, minWidth: 0 }}>
                <p className="font-crimson" style={{ fontSize: 22, fontWeight: 600, color: C.light, lineHeight: 1 }}>{m.value}</p>
                <p className="font-inter" style={{ fontSize: 16, color: "rgba(234,234,240,0.4)", marginTop: 4, maxWidth: 150, lineHeight: 1.35 }}>{m.label}</p>
              </div>
            ))}
          </div>
          {/* CTA */}
          <div>
            <span className="font-inter" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: C.primary, color: C.text,
              fontSize: 13, fontWeight: 500,
              padding: "10px 20px", borderRadius: 100,
              transition: "background 0.2s",
            }}>
              View Case Study
            </span>
          </div>
        </div>
      </div>
      {/* Phone area */}
      <div style={{
        width: "45%", minHeight: 340, background: "linear-gradient(135deg, rgba(45,27,107,0.5), transparent)",
        display: "flex", alignItems: "flex-end", justifyContent: "center", flexShrink: 0, overflow: "hidden",
      }}>
        <PhoneMock slug={c.slug} size="lg" hovered={hovered} />
      </div>
    </div>
  );
}

function HalfCard({ c, hovered }: { c: Case; hovered: boolean }) {
  return (
    <div style={{ padding: "32px 32px 0 32px", display: "flex", flexDirection: "column" }}>
      <h3 className="font-crimson" style={{ fontSize: "clamp(26px,2.5vw,34px)", lineHeight: 1.2, color: hovered ? C.light : C.text, marginBottom: 12, transition: "color 0.3s", fontWeight: 600 }}>
        {c.title}
      </h3>
      <p className="font-inter" style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(202,202,251,0.75)", marginTop: 10, marginBottom: 14, fontWeight: 500 }}>
        {c.tags.join(" • ")}
      </p>
      <p className="font-inter" style={{ fontSize: 15, lineHeight: 1.75, color: C.muted, marginBottom: 20, flexGrow: 1 }}>
        {c.description}
      </p>
      <div style={{ marginBottom: 24 }}>
        <span className="font-inter" style={{ fontSize: 14, color: C.text, textDecoration: "underline", textUnderlineOffset: 4 }}>
          View Case Study
        </span>
      </div>
      {/* Phone + gradient container */}
      <div style={{
        width: "100%", minHeight: 360,
        background: "linear-gradient(to bottom, rgba(26,17,61,0), rgba(15,10,35,0.6))",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        display: "flex", alignItems: "flex-end", justifyContent: "center",
        paddingTop: 24, overflow: "hidden",
      }}>
        <PhoneMock slug={c.slug} size="md" hovered={hovered} />
      </div>
    </div>
  );
}

function PhoneMock({ slug, size, hovered }: { slug: string; size: "md" | "lg"; hovered: boolean }) {
  const dim = {
    md: { w: 360, h: 360, r: 0, notchW: 0, notchH: 0 },
    lg: { w: 420, h: 420, r: 0, notchW: 0, notchH: 0 },
  }[size];

  const mockups: Record<string, string> = {
    "scratch-card": "/images/RASPADINHA MOCKUP.png",
    "igaming-product-evolution": "/images/EB MOCKUP.png",
    "event-commerce-redesign": "/images/INPEACE MOCKUP.png",
  };

  return (
    <div style={{
      width: dim.w, height: dim.h,
      borderRadius: dim.r,
      background: "transparent",
      border: "none",
      boxShadow: "none",
      position: "relative", overflow: "visible",
      transition: "box-shadow 0.4s, transform 0.4s",
      transform: hovered ? "scale(1.02) translateY(-4px)" : "scale(1)",
      flexShrink: 0,
    }}>
      <img
        src={mockups[slug] ?? "/images/EB MOCKUP.png"}
        alt={slug}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          objectPosition: "bottom center",
        }}
      />
    </div>
  );
}
