'use client';

import { useState } from 'react';

export default function FeatureCard({ icon, title, desc, theme }) {
  const t = theme;
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: hover ? t.card2 : t.card,
        borderRadius: 12,
        padding: 32,
        border: `1px solid ${hover ? t.cardHoverBorder : t.border}`,
        transition: "all 0.3s ease",
        transform: hover ? "translateY(-4px)" : "none",
        boxShadow: hover ? t.cardHoverShadow : t.cardShadow,
      }}
    >
      <div style={{
        width: 48, height: 48, borderRadius: 10, background: t.iconBg,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 22, marginBottom: 20,
      }}>{icon}</div>
      <h3 style={{
        fontFamily: "'Outfit'", fontSize: 18, fontWeight: 700, color: t.text,
        margin: "0 0 10px", lineHeight: 1.3,
      }}>{title}</h3>
      <p style={{ fontSize: 14, color: t.textMuted, lineHeight: 1.7, margin: 0 }}>{desc}</p>
    </div>
  );
}
