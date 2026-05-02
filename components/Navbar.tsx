"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { label: "Cases",      href: "/#cases" },
  { label: "Experience", href: "/#about" },
  { label: "About",      href: "/#about" },
  { label: "Contact",    href: "/#footer" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y:  0  }}
      transition={{ duration: 0.5 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: scrolled ? "14px 0" : "28px 0",
        transition: "padding 0.3s",
      }}
    >
      <nav
        className="font-inter"
        style={{
          maxWidth: 1078,
          margin: "0 auto",
          padding: "14px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled ? "rgba(15,10,35,0.68)" : "rgba(15,10,35,0.18)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 40,
          transition: "background 0.3s, backdrop-filter 0.3s",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", textDecoration: "none" }}>
          <img
            src="/images/cindy-logo.png?v=2"
            alt="Cindy Godoy logo"
            style={{
              width: 42,
              height: "auto",
              objectFit: "contain",
              display: "block",
            }}
          />
        </Link>

        {/* Links */}
        <ul style={{ display: "flex", gap: 32, listStyle: "none", margin: 0, padding: 0 }}>
          {links.map((l) => (
            <li key={l.label}>
              <Link href={l.href} style={{
                fontFamily: "var(--font-inter, system-ui, sans-serif)",
                fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase",
                color: "#EAEAF0", textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#CACAFB")}
              onMouseLeave={e => (e.currentTarget.style.color = "#EAEAF0")}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
