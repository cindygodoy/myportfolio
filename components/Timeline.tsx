"use client";

export default function SectionLabel({ label }: { label: string }) {
  return (
    <h2 className="font-inter text-sm font-semibold tracking-widest opacity-40">
      {label}
    </h2>
  );
}
