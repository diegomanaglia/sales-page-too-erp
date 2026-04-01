'use client';

import { useState } from 'react';

export default function CTAButton({ children, secondary = false, small = false, onClick, theme }) {
  const [hover, setHover] = useState(false);
  const t = theme;

  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
      style={{
        padding: small ? "12px 28px" : "18px 48px",
        fontSize: small ? 14 : 16,
        fontWeight: 700,
        fontFamily: "'Outfit',sans-serif",
        letterSpacing: 1.5,
        textTransform: "uppercase",
        border: secondary ? `2px solid ${t.yellow}` : "none",
        borderRadius: 6,
        cursor: "pointer",
        background: secondary ? (hover ? t.yellow : "transparent") : (hover ? t.yellowDark : t.yellow),
        color: secondary ? (hover ? t.ctaTextOnYellow : t.btnTextSecondary) : t.ctaTextOnYellow,
        transform: hover ? "translateY(-2px)" : "none",
        boxShadow: hover && !secondary ? "0 8px 32px rgba(212,169,16,0.3)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      {children}
    </button>
  );
}
