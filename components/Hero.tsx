"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section style={{ position: "relative", paddingTop: 156, paddingBottom: 48, textAlign: "center", overflow: "hidden" }}>
      <div className="glow-hero" />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1440, margin: "0 auto", padding: "0 24px" }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="font-crimson"
          style={{ fontSize: 28, lineHeight: 1.3, fontWeight: 600, color: "#EAEAF0", marginBottom: 4 }}
        >
          Hey, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="font-crimson"
          style={{
            fontSize: "clamp(72px, 10vw, 140px)",
            lineHeight: 0.9, fontWeight: 600,
            fontStyle: "italic", color: "#7B61FF",
            marginBottom: 32,
          }}
        >
          Cindy Godoy
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.32 }}
          className="font-inter"
          style={{
            fontSize: 18, lineHeight: 1.7,
            color: "rgba(234,234,240,0.6)",
            maxWidth: 540, margin: "0 auto",
          }}
        >
          Product Designer building 0→1 product experiences across fintech,
          betting and regulated ecosystems. Currently at{" "}
          <span style={{ color: "#CACAFB", fontWeight: 500 }}>PicPay</span>.
        </motion.p>

        {/* scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          style={{ marginTop: 56, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            style={{ display: "flex", flexDirection: "column", gap: 0, color: "#7B61FF", fontSize: 22 }}
          >
            <span>⌄</span>
            <span style={{ marginTop: -10, opacity: 0.55 }}>⌄</span>
          </motion.div>
          <p className="font-inter" style={{ fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(234,234,240,0.45)" }}>
            Scroll
          </p>
        </motion.div>
      </div>
    </section>
  );
}
