export default function Badge({ children, theme }) {
  const t = theme;
  return (
    <span style={{
      display: "inline-block",
      padding: "6px 16px",
      borderRadius: 100,
      background: t.badgeBg,
      border: `1px solid ${t.badgeBorder}`,
      color: t.yellow,
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: 1.5,
      textTransform: "uppercase",
      fontFamily: "'Outfit',sans-serif",
    }}>
      {children}
    </span>
  );
}
