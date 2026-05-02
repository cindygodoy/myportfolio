"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  onClick?: () => void;
  className?: string;
  external?: boolean;
}

export default function Button({
  children,
  href,
  variant = "primary",
  onClick,
  className = "",
  external = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 font-inter text-sm font-medium tracking-wide transition-all duration-200 rounded-xg";

  const variants = {
    primary:
      "bg-brand-primary text-white px-5 py-3 hover:bg-brand-primary/90 hover:shadow-[0_0_20px_rgba(123,97,255,0.4)]",
    outline:
      "border border-brand-primary/40 text-brand-light px-5 py-3 hover:border-brand-primary hover:bg-brand-primary/10",
    ghost:
      "text-brand-light underline-offset-4 hover:underline px-0 py-0",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link
          href={href}
          className={classes}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={classes}
    >
      {children}
    </motion.button>
  );
}
