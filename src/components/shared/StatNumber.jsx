'use client';

import { useState, useEffect } from 'react';
import useInView from '@/hooks/useInView';

export default function StatNumber({ end, suffix = "", label, colors = {} }) {
  const [ref, visible] = useInView();
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = Math.ceil(end / 40);
    const id = setInterval(() => {
      start += step;
      if (start >= end) {
        setVal(end);
        clearInterval(id);
      } else {
        setVal(start);
      }
    }, 30);
    return () => clearInterval(id);
  }, [visible, end]);

  return (
    <div ref={ref} style={{ textAlign: "center" }}>
      <div style={{
        fontFamily: "'Outfit',sans-serif",
        fontSize: 48,
        fontWeight: 800,
        color: colors.value || "#F5C518",
        lineHeight: 1,
      }}>
        {val}{suffix}
      </div>
      <div style={{
        fontSize: 14,
        color: colors.label || "#999999",
        marginTop: 8,
      }}>
        {label}
      </div>
    </div>
  );
}
