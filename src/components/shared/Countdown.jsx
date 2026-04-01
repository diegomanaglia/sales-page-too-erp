'use client';

import { useState, useEffect } from 'react';

function CountdownBlock({ val, label, style = {} }) {
  return (
    <div style={{ textAlign: "center", ...style }}>
      <div style={{
        fontFamily: "'Outfit',sans-serif",
        fontSize: 36,
        fontWeight: 800,
        lineHeight: 1.1,
        ...style.value,
      }}>
        {String(val).padStart(2, "0")}
      </div>
      <div style={{
        fontSize: 11,
        textTransform: "uppercase",
        letterSpacing: 2,
        marginTop: 4,
        ...style.label,
      }}>
        {label}
      </div>
    </div>
  );
}

export default function Countdown({ colors = {} }) {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const end = new Date();
    end.setDate(end.getDate() + 3);
    end.setHours(23, 59, 59, 0);
    const tick = () => {
      const diff = Math.max(0, end - new Date());
      setTime({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const valueColor = colors.value || "#F5C518";
  const labelColor = colors.label || "#999999";
  const sepColor = colors.separator || "#F5C518";

  const blockStyle = {
    value: { color: valueColor },
    label: { color: labelColor },
  };

  return (
    <div style={{ display: "flex", gap: 24, justifyContent: "center", alignItems: "center" }}>
      <CountdownBlock val={time.d} label="Dias" style={blockStyle} />
      <span style={{ color: sepColor, fontSize: 28, fontWeight: 300, opacity: 0.4 }}>:</span>
      <CountdownBlock val={time.h} label="Horas" style={blockStyle} />
      <span style={{ color: sepColor, fontSize: 28, fontWeight: 300, opacity: 0.4 }}>:</span>
      <CountdownBlock val={time.m} label="Min" style={blockStyle} />
      <span style={{ color: sepColor, fontSize: 28, fontWeight: 300, opacity: 0.4 }}>:</span>
      <CountdownBlock val={time.s} label="Seg" style={blockStyle} />
    </div>
  );
}
