'use client';

import { useState } from 'react';
import CTAButton from './CTAButton';

export default function PriceCard({ name, price, original, features, highlight = false, badge: badgeText, theme }) {
  const t = theme;
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: highlight ? `linear-gradient(180deg, ${t.subtleBg3} 0%, ${t.card} 40%)` : t.card,
        borderRadius: 16, padding: "36px 32px",
        border: highlight ? `2px solid ${t.yellow}` : `1px solid ${t.border}`,
        position: "relative",
        transform: hover ? "translateY(-6px)" : highlight ? "translateY(-4px)" : "none",
        transition: "all 0.3s ease",
        flex: "1 1 280px", maxWidth: 360,
        boxShadow: highlight ? t.highlightShadow : (hover ? t.cardHoverShadow : t.cardShadow),
      }}
    >
      {badgeText && (
        <div style={{
          position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)",
          background: t.yellow, color: t.ctaTextOnYellow, fontSize: 11, fontWeight: 800,
          padding: "6px 20px", borderRadius: 100, letterSpacing: 1.5, textTransform: "uppercase",
          fontFamily: "'Outfit'", whiteSpace: "nowrap",
        }}>{badgeText}</div>
      )}
      <div style={{ fontSize: 14, color: t.textMuted, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>{name}</div>
      <div style={{ margin: "16px 0 4px", display: "flex", alignItems: "baseline", gap: 4 }}>
        <span style={{ fontFamily: "'Outfit'", fontSize: 14, color: t.textMuted, fontWeight: 500 }}>R$</span>
        <span style={{ fontFamily: "'Outfit'", fontSize: 48, fontWeight: 800, color: t.text, lineHeight: 1 }}>{price}</span>
        <span style={{ fontSize: 14, color: t.textMuted }}>/mês</span>
      </div>
      {original && <div style={{ fontSize: 13, color: t.textMuted, textDecoration: "line-through", marginBottom: 4 }}>De R$ {original}/mês</div>}
      <div style={{ width: "100%", height: 1, background: t.border, margin: "20px 0" }} />
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
        {features.map((f, i) => (
          <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 14, color: t.featureText }}>
            <span style={{ color: t.yellow, fontSize: 16, lineHeight: 1.3 }}>✓</span>{f}
          </li>
        ))}
      </ul>
      <div style={{ marginTop: 28 }}>
        <CTAButton secondary={!highlight} small theme={t}>
          {highlight ? "Garantir minha vaga" : "Escolher plano"}
        </CTAButton>
      </div>
    </div>
  );
}
