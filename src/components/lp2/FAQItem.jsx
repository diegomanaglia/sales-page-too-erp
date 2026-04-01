'use client';

import { useState } from 'react';

export default function FAQItem({ q, a, theme }) {
  const t = theme;
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      style={{
        background: t.card,
        borderRadius: 10,
        padding: "20px 24px",
        border: `1px solid ${open ? t.cardHoverBorder : t.border}`,
        cursor: "pointer",
        transition: "all 0.3s ease",
        boxShadow: open ? t.cardHoverShadow : t.cardShadow,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "'Outfit'", fontSize: 15, fontWeight: 600, color: t.text }}>{q}</span>
        <span style={{
          color: t.yellow, fontSize: 20,
          transition: "transform 0.3s ease",
          transform: open ? "rotate(45deg)" : "rotate(0deg)",
          flexShrink: 0, marginLeft: 12,
        }}>+</span>
      </div>
      <div style={{ maxHeight: open ? 200 : 0, overflow: "hidden", transition: "max-height 0.4s ease" }}>
        <p style={{ fontSize: 14, color: t.textMuted, lineHeight: 1.7, margin: "12px 0 0" }}>{a}</p>
      </div>
    </div>
  );
}
