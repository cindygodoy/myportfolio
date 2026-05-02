"use client";

import { motion } from "framer-motion";

const socials = [
  { label: "Gmail", href: "mailto:cindygodoy@gmail.com", file: "GMAIL.svg" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/cindygodoycunha/", file: "LINKEDIN.svg" },
  { label: "Instagram", href: "https://www.instagram.com/cindygodoycunha", file: "INSTAGRAM.svg" },
  { label: "Medium", href: "https://uxcindygodoy.medium.com/", file: "MEDIUM.svg" },
];

export default function Footer() {
  return (
    <footer id="footer" style={{ background: "#0a0820", padding: "64px 24px", textAlign: "center" }}>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-crimson"
        style={{ fontSize: "clamp(32px,4vw,48px)", fontWeight: 600, color: "#EAEAF0", marginBottom: 20 }}
      >
        Let&apos;s Chat
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-inter"
        style={{ fontSize: 20, lineHeight: 1.75, color: "rgba(234,234,240,0.5)", maxWidth: 620, margin: "0 auto 40px" }}
      >
        I care about building products that people understand, trust and enjoy using.
        Got a project, an opportunity or just want to talk design? Let&apos;s connect.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{ display: "flex", justifyContent: "center", gap: 12 }}
      >
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            aria-label={s.label}
            target="_blank"
            rel="noopener noreferrer"
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
              overflow: "hidden",
              transition: "all 0.2s",
              textDecoration: "none",
            }}
          >
            <img
              src={`/assets/${s.file}`}
              alt={s.label}
              style={{
                width: 17,
                height: 17,
                objectFit: "contain",
                opacity: 0.78,
                filter: "drop-shadow(0 1px 1px rgba(255,255,255,0.08))",
              }}
            />
          </a>
        ))}
      </motion.div>
    </footer>
  );
}
