"use client";

import { motion } from "framer-motion";
import { Case } from "@/data/cases";
import Footer from "@/components/Footer";
import SectionLabel from "@/components/SectionLabel";

const C = {
  bg:      "#0F0A23",
  card:    "#1A113D",
  primary: "#7B61FF",
  light:   "#CACAFB",
  text:    "#EAEAF0",
  muted:   "rgba(234,234,240,0.55)",
  subtle:  "rgba(234,234,240,0.4)",
  border:  "rgba(255,255,255,0.07)",
};

function fade(delay = 0) {
  return {
    initial: { opacity: 0, y: 22 } as const,
    whileInView: { opacity: 1, y: 0 } as const,
    viewport: { once: true, margin: "-50px" } as const,
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
  };
}

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

interface Props { caseData: Case; otherCases: Case[]; }

export default function CaseDetailClient({ caseData, otherCases }: Props) {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ position: "relative", paddingTop: 140, paddingBottom: 40, overflow: "hidden", textAlign: "center" }}>
        <div className="glow-hero" />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1440, margin: "0 auto", padding: "0 40px" }}>
          <div style={{ maxWidth: 987, margin: "0 auto" }}>
            <SectionLabel label="Selected Work" icon="✦" />
            <motion.h1
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-crimson"
              style={{ fontSize: "clamp(48px,6vw,80px)", lineHeight: 1, color: C.text, margin: "24px 0 12px", fontWeight: 600 }}
            >
              {caseData.title}
            </motion.h1>
          </div>
        </div>
      </section>

      {/* ── COVER ── */}
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 40px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            style={{
              position: "relative",
              borderRadius: 16,
              overflow: "hidden",
              background: `url('/images/BACKGROIUND.png') center/cover no-repeat, ${C.card}`,
              border: `1px solid ${C.border}`,
              aspectRatio: "1180/650",
            }}
          >
            {/* Left info */}
            <div
              style={{
                position: "absolute",
                left: 56,
                top: 48,
                width: 560,
                minHeight: 470,
                zIndex: 2,
                padding: 28,
                borderRadius: 20,
                background: "rgba(26,17,61,0.52)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
              }}
            >
              <p className="font-inter" style={{ fontSize: 14, letterSpacing: "0.14em", textTransform: "uppercase", color: C.primary, fontWeight: 500, marginBottom: 12 }}>
                {caseData.tags.join(" • ")}
              </p>
              <h2 className="font-crimson" style={{ fontSize: 58, lineHeight: 1.2, color: C.text, fontWeight: 600, marginBottom: 12 }}>{caseData.title}</h2>
              <p className="font-inter" style={{ fontSize: 18, color: C.subtle, lineHeight: 1.7, maxWidth: 500 }}>{caseData.description}</p>
              <div style={{ display: "grid", gridTemplateColumns: "140px 1fr", rowGap: 22, columnGap: 32, marginTop: 48 }}>
                <p className="font-inter" style={{ fontSize: 14, letterSpacing: "0.14em", textTransform: "uppercase", color: C.primary, fontWeight: 600 }}>Role</p>
                <p className="font-inter" style={{ fontSize: 18, color: C.text }}>Product Designer</p>

                <p className="font-inter" style={{ fontSize: 14, letterSpacing: "0.14em", textTransform: "uppercase", color: C.primary, fontWeight: 600 }}>Timeline</p>
                <p className="font-inter" style={{ fontSize: 18, color: C.text }}>3 weeks</p>

                <p className="font-inter" style={{ fontSize: 14, letterSpacing: "0.14em", textTransform: "uppercase", color: C.primary, fontWeight: 600 }}>Year</p>
                <p className="font-inter" style={{ fontSize: 18, color: C.text }}>2026</p>
              </div>
            </div>
            {/* Mockup */}
            <div
              style={{
                position: "absolute",
                right: 44,
                bottom: 0,
                width: 460,
                height: 640,
                zIndex: 2,
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
              }}
            >
              <img
                src="/images/RASPADINHA MOCKUP.png"
                alt="Scratch Card mockup"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  objectPosition: "bottom center",
                  display: "block",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── BODY ── */}
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "64px 40px 96px" }}>
        <div style={{ maxWidth: 987, margin: "0 auto", display: "flex", flexDirection: "column", gap: 72 }}>

          {/* Metrics */}
<motion.div
  {...fade(0)}
  style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "40px 72px",
    justifyContent: "center",
    alignItems: "flex-start",
    textAlign: "center",
    width: "100%",
  }}
>
  {caseData.metrics.map((m) => (
    <div
      key={m.label}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <p
        className="font-crimson"
        style={{
          fontSize: "clamp(40px,5.5vw,64px)",
          lineHeight: 1,
          color: C.primary,
          fontWeight: 600,
        }}
      >
        {m.value}
      </p>

      <p
        className="font-inter"
        style={{
          fontSize: 18,
          color: C.subtle,
          marginTop: 8,
        }}
      >
        {m.label}
      </p>
    </div>
  ))}
</motion.div>
          {/* Context */}
          <div>
            <motion.h2 {...fade(0)} className="font-crimson" style={{ fontSize: 40, fontWeight: 600, color: C.text, marginBottom: 32 }}>Context</motion.h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 40 }}>
              <motion.p {...fade(0.05)} className="font-inter" style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(234,234,240,0.65)" }}>{caseData.context.left}</motion.p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {caseData.context.right.map((p, i) => (
                  <motion.p key={i} {...fade(i * 0.05)} className="font-inter" style={{ fontSize: 15, lineHeight: 1.8, color: C.muted }}>{p}</motion.p>
                ))}
              </div>
            </div>
          </div>

          {/* Challenges */}
          <div>
            <motion.h2 {...fade(0)} className="font-crimson" style={{ fontSize: 40, fontWeight: 600, color: C.text, marginBottom: 32 }}>Challenges</motion.h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
              {caseData.challenges.map((ch, i) => (
                <motion.div key={ch.title} {...fade(i * 0.08)}>
                  <Card style={{ padding: 32, height: "100%" }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(123,97,255,0.1)", border: "1px solid rgba(123,97,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                      <img
                        src={["/assets/heart.svg", "/assets/Brain.svg", "/assets/fire.svg"][i]}
                        alt={ch.title}
                        style={{
                          width: 20,
                          height: 20,
                          objectFit: "contain",
                          opacity: 0.9,
                        }}
                      />
                    </div>
                    <h4 className="font-inter" style={{ fontSize: 17, fontWeight: 600, color: C.text, marginBottom: 10, lineHeight: 1.4 }}>{ch.title}</h4>
                    <p className="font-inter" style={{ fontSize: 14, color: C.muted, lineHeight: 1.75 }}>{ch.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div>
            <motion.h2 {...fade(0)} className="font-crimson" style={{ fontSize: 40, fontWeight: 600, color: C.text, marginBottom: 32 }}>Process</motion.h2>
            <motion.div {...fade(0.05)} style={{ marginBottom: 28, overflow: "hidden" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  width: "100%",
                  paddingBottom: 8,
                }}
              >
                {caseData.timelineSteps.map((step, index) => (
                  <div
                    key={step.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      flexShrink: 1,
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10, minWidth: 118 }}>
                      <div
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          background: C.primary,
                          boxShadow: "0 0 18px rgba(123,97,255,0.45)",
                        }}
                      />
                      <span
                        className="font-inter"
                        style={{
                          fontSize: 16,
                          fontWeight: 600,
                          color: C.subtle,
                          whiteSpace: "nowrap",
                          textAlign: "center",
                        }}
                      >
                        {step.label}
                      </span>
                    </div>
                    {index < caseData.timelineSteps.length - 1 && (
                      <div
                        style={{
                          width: 48,
                          height: 1,
                          background: "linear-gradient(to right, rgba(123,97,255,0.55), rgba(123,97,255,0.12))",
                          marginBottom: 20,
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...fade(0.1)}>
              <Card style={{ padding: 40 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
                  {caseData.processSections.map((s) => (
                    <div key={s.title}>
                      <h4 className="font-inter" style={{ fontSize: 17, fontWeight: 600, color: C.text, marginBottom: 14 }}>{s.title}</h4>
                      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                        {s.paragraphs.map((p, i) => (
                          <p key={i} className="font-inter" style={{ fontSize: 15, lineHeight: 1.8, color: C.muted }}>{p}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>


          {/* Solution */}
          <div>
            <motion.h2 {...fade(0)} className="font-crimson" style={{ fontSize: 40, fontWeight: 600, color: C.text, marginBottom: 32 }}>{caseData.solutionTitle}</motion.h2>
            {/* Visual */}
            <motion.div
              {...fade(0.05)}
              style={{
                position: "relative",
                borderRadius: 20,
                overflow: "hidden",
                background: `url('/images/Gradient.png') center/cover no-repeat, linear-gradient(180deg, rgba(26,17,61,0.72) 0%, rgba(15,10,35,0.58) 100%)`,
                border: "1px solid rgba(255,255,255,0.11)",
                backdropFilter: "blur(22px)",
                WebkitBackdropFilter: "blur(22px)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05), 0 24px 80px rgba(0,0,0,0.18)",
                aspectRatio: "987/500",
                marginBottom: 32,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 520,
                  height: 520,
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(123,97,255,0.30) 0%, rgba(123,97,255,0.12) 38%, transparent 70%)",
                  filter: "blur(18px)",
                  zIndex: 1,
                  pointerEvents: "none",
                }}
              />

              <img
                src="/images/UserFlow.png"
                alt="Scratch Card user flow"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  objectPosition: "center",
                  opacity: 0.55,
                  zIndex: 2,
                  pointerEvents: "none",
                }}
              />

              <img
                src="/images/RASPADINHA MOCKUP.png"
                alt="Scratch Card solution mockup"
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "38%",
                  height: "88%",
                  objectFit: "contain",
                  objectPosition: "center",
                  zIndex: 3,
                  display: "block",
                }}
              />

              <img
                src="/images/cindy-logo.png"
                alt="Cindy Godoy logo"
                style={{
                  position: "absolute",
                  left: 28,
                  bottom: 28,
                  width: 52,
                  height: "auto",
                  objectFit: "contain",
                  zIndex: 4,
                  display: "block",
                }}
              />
            </motion.div>
            <motion.div {...fade(0.1)} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {caseData.solutionContent.map((s) => (
                <Card key={s.title} style={{ padding: 32 }}>
                  <h4 className="font-inter" style={{ fontSize: 17, fontWeight: 600, color: C.text, marginBottom: 12 }}>{s.title}</h4>
                  {s.paragraphs.map((p, i) => (
                    <p key={i} className="font-inter" style={{ fontSize: 15, lineHeight: 1.8, color: C.muted }}>{p}</p>
                  ))}
                </Card>
              ))}
            </motion.div>
          </div>

          {/* Learning */}
          <div>
            <motion.h2 {...fade(0)} className="font-crimson" style={{ fontSize: 40, fontWeight: 600, color: C.text, marginBottom: 32 }}>Learning artifacts</motion.h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
              {caseData.learningArtifacts.map((a, i) => (
                <motion.div key={a.title} {...fade(i * 0.08)}>
                  <Card style={{ padding: 32 }}>
                    <h4 className="font-inter" style={{ fontSize: 17, fontWeight: 600, color: C.light, marginBottom: 10 }}>{a.title}</h4>
                    <p className="font-inter" style={{ fontSize: 14, color: C.muted, lineHeight: 1.75 }}>{a.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── OTHER CASES ── */}
      {otherCases.length > 0 && (
        <section style={{ position: "relative", padding: "56px 40px", borderTop: "1px solid rgba(255,255,255,0.05)", overflow: "hidden" }}>
          <div className="glow-section" />
          <div style={{ position: "relative", zIndex: 1, maxWidth: 1260, margin: "0 auto" }}>
            <SectionLabel label="Other Cases" icon="✦" />
            <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
              {otherCases.map((c, i) => (
                <motion.a
                  key={c.slug}
                  href={`/cases/${c.slug}`}
                  {...fade(i * 0.08)}
                  style={{
                    textDecoration: "none",
                    display: "block",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: 20,
                    background: `url('/images/BACKGROIUND.png') center/cover no-repeat, ${C.card}`,
                    border: `1px solid ${C.border}`,
                    padding: 32,
                    minHeight: 320,
                    boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      minHeight: 256,
                      padding: 32,
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
                      <h3
                        className="font-crimson"
                        style={{
                          fontSize: "clamp(28px,2.8vw,42px)",
                          lineHeight: 1.15,
                          color: C.text,
                          marginBottom: 16,
                          fontWeight: 600,
                        }}
                      >
                        {c.title}
                      </h3>

                      <p
                        className="font-inter"
                        style={{
                          fontSize: 12,
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          color: C.primary,
                          fontWeight: 500,
                          marginBottom: 28,
                        }}
                      >
                        {c.tags.join(" • ")}
                      </p>

                      <p
                        className="font-inter"
                        style={{
                          fontSize: 15,
                          lineHeight: 1.75,
                          color: C.muted,
                          marginBottom: 32,
                        }}
                      >
                        {c.description}
                      </p>
                    </div>

                    <span
                      className="font-inter"
                      style={{
                        fontSize: 14,
                        color: "#FFFFFF",
                        textDecoration: "underline",
                        textUnderlineOffset: 4,
                      }}
                    >
                      View Case Study
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
