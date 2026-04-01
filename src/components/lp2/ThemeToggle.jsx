'use client';

import { useState } from 'react';

export default function ThemeToggle({ isDark, onToggle, theme }) {
  const t = theme;
  const [hover, setHover] = useState(false);

  return (
    <button
      onClick={onToggle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-label="Alternar tema"
      style={{
        width: 42, height: 42, borderRadius: 10,
        background: hover ? t.iconBg : t.toggleBg,
        border: `1px solid ${hover ? t.cardHoverBorder : t.border}`,
        cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 18, transition: "all 0.3s ease",
        color: t.toggleIcon,
        transform: hover ? "scale(1.08)" : "none",
      }}
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}
