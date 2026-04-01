export default function MockImage({ label, ratio = "56.25%", icon = "▶", theme }) {
  const t = theme;
  return (
    <div style={{
      position: "relative",
      width: "100%",
      paddingBottom: ratio,
      background: `linear-gradient(135deg, ${t.mockGradient1} 0%, ${t.mockGradient2} 100%)`,
      borderRadius: 12,
      overflow: "hidden",
      border: `1px solid ${t.mockBorder}`,
    }}>
      <div style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
      }}>
        {icon === "▶" ? (
          <div style={{
            width: 64, height: 64, borderRadius: "50%",
            background: t.iconBg, border: `2px solid ${t.yellow}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 24, color: t.yellow, cursor: "pointer",
          }}>▶</div>
        ) : (
          <div style={{ fontSize: 40, opacity: 0.3 }}>{icon}</div>
        )}
        <span style={{ fontSize: 13, color: t.mockLabel, letterSpacing: 1, textTransform: "uppercase" }}>
          {label}
        </span>
      </div>
      {[{ top: 8, left: 8 }, { top: 8, right: 8 }, { bottom: 8, left: 8 }, { bottom: 8, right: 8 }].map((pos, i) => (
        <div key={i} style={{
          position: "absolute", ...pos, width: 16, height: 16,
          borderTop: pos.top !== undefined ? `2px solid ${t.cornerBorder}` : "none",
          borderBottom: pos.bottom !== undefined ? `2px solid ${t.cornerBorder}` : "none",
          borderLeft: pos.left !== undefined ? `2px solid ${t.cornerBorder}` : "none",
          borderRight: pos.right !== undefined ? `2px solid ${t.cornerBorder}` : "none",
        }} />
      ))}
    </div>
  );
}
