"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import SectionLabel from "@/components/SectionLabel";
import CaseCard from "@/components/CaseCard";
import Footer from "@/components/Footer";
import { cases } from "@/data/cases";

const C = {
  bg:       "#0F0A23",
  card:     "#1A113D",
  card2:    "#14103a",
  primary:  "#7B61FF",
  light:    "#CACAFB",
  text:     "#EAEAF0",
  muted:    "rgba(234,234,240,0.55)",
  subtle:   "rgba(234,234,240,0.35)",
  border:   "rgba(255,255,255,0.07)",
};

const education = [
  { degree: "BSc in Information Systems (In progress)", period: "2025 → 2028",  institution: "Universidade do Sul de Santa Catarina" },
  { degree: "Postgraduate Certificate in UX Design",    period: "2023 → 2024",  institution: "Universidade do Sul de Santa Catarina" },
  { degree: "Business Administration (Associate Degree)",period: "2017 → 2020", institution: "Centro Universitário Uninter" },
];

const career = [
  { role: "PicPay",                period: "2025 → present", active: true  },
  { role: "EstrelaBet",            period: "2023 → 2025",    active: false },
  { role: "InpeaceApp",            period: "2022 → 2023",    active: false },
  { role: "Martin Luz",period: "2022 → 2023",              active: false},
];

const tools = [
  { name: "Figma", file: "FIGMA.svg" },
  { name: "Framer", file: "FRAMER.svg" },
  { name: "Sketch", file: "SKETCH.svg" },
  { name: "Miro", file: "MIRO.svg" },
  { name: "Lottie", file: "LOTTIE.svg" },
  { name: "Metabase", file: "METABASE.svg" },
  { name: "ChatGPT", file: "Chatgpt.svg" },
  { name: "Claude", file: "CLAUDE.svg" },
];

function Card({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, rgba(26,17,61,0.72) 0%, rgba(15,10,35,0.58) 100%)",
        border: "1px solid rgba(255,255,255,0.11)",
        borderRadius: 20,
        backdropFilter: "blur(22px)",
        WebkitBackdropFilter: "blur(22px)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05), 0 24px 80px rgba(0,0,0,0.18)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [fullCase, ...halfCases] = cases;

  return (
    <>
      <Hero />

      {/* ── CASES ── */}
      <section id="cases" style={{ paddingBottom: 100, maxWidth: 1440, margin: "0 auto", padding: "0 40px 100px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <SectionLabel label="Selected work" icon="✦" className="mb-12" />
          <div style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 20 }}>
            <CaseCard caseData={fullCase} variant="full" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
              {halfCases.map((c) => (
                <CaseCard key={c.slug} caseData={c} variant="half" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ position: "relative", padding: "80px 40px", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 50% 42%, rgba(123,97,255,0.26) 0%, rgba(123,97,255,0.10) 28%, transparent 62%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "18%",
            width: 540,
            height: 760,
            transform: "translateX(-50%)",
            background: "linear-gradient(180deg, rgba(123,97,255,0.20), transparent 72%)",
            filter: "blur(90px)",
            opacity: 0.9,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1208, margin: "0 auto" }}>

          <SectionLabel label="About me" icon="🧳" />

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="font-crimson"
            style={{ fontSize: "clamp(26px,3vw,38px)", color: C.text, textAlign: "center", margin: "40px auto 56px", maxWidth: 680, lineHeight: 1.3 }}
          >
            Designing products where{" "}
            <span style={{ color: C.primary }}>behavior</span>,{" "}
            <span style={{ color: C.primary }}>business</span> and{" "}
            <span style={{ color: C.primary }}>systems</span> meet.
          </motion.h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, alignItems: "start" }}>

            {/* LEFT */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {/* Photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                style={{
                  borderRadius: 16, overflow: "hidden",
                  background: "rgba(26,17,61,0.52)", border: "1px solid rgba(255,255,255,0.11)",
                  aspectRatio: "4/3", position: "relative",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(123,97,255,0.15), transparent)" }} />
                
                <img
                  src="/images/profile-picture.png"
                  alt="Cindy Godoy"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center center",
                    zIndex: 1,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 20,
                    left: 20,
                    zIndex: 2,
                  }}
                >
                  <img
                    src="/images/cindy-logo.png"
                    alt="Cindy Logo"
                    style={{
                      width: 68,
                      height: "auto",
                    }}
                  />
                </div>
              </motion.div>

              {/* Education */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card style={{ padding: 32 }}>
                  <h4 className="font-crimson" style={{ fontSize: 24, fontWeight: 600, color: C.text, marginBottom: 24 }}>Education</h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                    {education.map((edu) => (
                      <div key={edu.degree}>
                        <p className="font-inter" style={{ fontSize: 20, fontWeight: 600, color: C.text, lineHeight: 1.4 }}>{edu.degree}</p>
                        <p className="font-inter" style={{ fontSize: 16, color: C.primary, opacity: 0.8, marginTop: 3 }}>{edu.period}</p>
                        <p className="font-inter" style={{ fontSize: 16, color: "rgba(234,234,240,0.6)", marginTop: 2 }}>{edu.institution}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* RIGHT */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {/* Bio */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card style={{ padding: 32 }}>
                  <h4
                    className="font-crimson"
                    style={{
                      fontSize: 24,
                      fontWeight: 600,
                      color: C.text,
                      marginBottom: 24,
                    }}
                  >
                    My Approach
                  </h4>
                  <p className="font-inter" style={{ fontSize: 17, lineHeight: 1.75, color: "rgba(234,234,240,0.68)" }}>
                    I&apos;m a Brazilian Product Designer with 5+ years of experience designing digital products in regulated and high-engagement environments.<br /><br />
                    My work focuses on behavioral design, complex user journeys and scalable systems, especially across fintech, betting and platform products.
                  </p>
                  <a
  href="/resume.pdf" download
  target="_blank"
  rel="noopener noreferrer"
  className="font-inter"
  style={{
    marginTop: 24,
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    background: "rgb(123, 97, 255)",
    color: "#FFFFFF",
    border: "1px solid rgba(123,97,255,0.2)",
    borderRadius: 100,
    fontSize: 14,
    fontWeight: 500,
    padding: "10px 20px",
    cursor: "pointer",
    textDecoration: "none",
  }}
>
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
  Resume
</a>
                </Card>
              </motion.div>

              {/* Career */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card style={{ padding: 32 }}>
                  <h4 className="font-crimson" style={{ fontSize: 24, fontWeight: 600, color: C.text, marginBottom: 20 }}>Career Journey</h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {career.map((item, i) => (
                      <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "baseline", columnGap: 16 }}>
                        <p className="font-inter" style={{
                          fontSize: 20,
                          fontWeight: item.active ? 600 : 400,
                          color: item.active ? C.text : "rgba(234,234,240,0.6)",
                          fontStyle: "normal",
                        }}>{item.role}</p>
                        {item.period && (
                          <p className="font-inter" style={{ fontSize: 16, color: C.subtle, textAlign: "left" }}>{item.period}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>

              {/* Tools */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card style={{ padding: 32 }}>
                  <h4 className="font-crimson" style={{ fontSize: 24, fontWeight: 600, color: C.text, marginBottom: 20 }}>Tool Stack</h4>
                  <div style={{ display: "flex", flexWrap: "nowrap", gap: 10, alignItems: "center", overflow: "hidden" }}>
                    {tools.map((t) => (
                      <div
                        key={t.name}
                        title={t.name}
                        style={{
                          width: 44,
                          height: 44,
                          borderRadius: "50%",
                          background: "linear-gradient(145deg, rgba(234,234,240,0.18) 0%, rgba(234,234,240,0.08) 46%, rgba(123,97,255,0.10) 100%)",
                          border: "1px solid rgba(255,255,255,0.14)",
                          backdropFilter: "blur(14px) saturate(120%)",
                          WebkitBackdropFilter: "blur(14px) saturate(120%)",
                          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -8px 16px rgba(15,10,35,0.18), 0 8px 22px rgba(0,0,0,0.14)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "default",
                          overflow: "hidden",
                        }}
                        className="font-inter"
                      >
                        <img
                          src={`/assets/${t.file}`}
                          alt={t.name}
                          style={{
                            width: 17,
                            height: 17,
                            objectFit: "contain",
                            opacity: 0.78,
                            filter: "drop-shadow(0 1px 1px rgba(255,255,255,0.08))",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
