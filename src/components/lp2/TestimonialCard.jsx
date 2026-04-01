export default function TestimonialCard({ name, role, text, initials, theme }) {
  const t = theme;
  return (
    <div style={{
      background: t.card, borderRadius: 12, padding: 32,
      border: `1px solid ${t.border}`,
      display: "flex", flexDirection: "column", gap: 16,
      boxShadow: t.cardShadow,
    }}>
      <div style={{ color: t.quoteColor, fontSize: 32, lineHeight: 1 }}>&ldquo;</div>
      <p style={{ color: t.text, fontSize: 15, lineHeight: 1.7, fontStyle: "italic", opacity: 0.9, margin: 0 }}>
        {text}
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: "auto" }}>
        <div style={{
          width: 44, height: 44, borderRadius: "50%", background: t.iconBg,
          display: "flex", alignItems: "center", justifyContent: "center",
          color: t.yellow, fontWeight: 700, fontSize: 16, fontFamily: "'Outfit'",
        }}>{initials}</div>
        <div>
          <div style={{ color: t.text, fontWeight: 600, fontSize: 14 }}>{name}</div>
          <div style={{ color: t.textMuted, fontSize: 12 }}>{role}</div>
        </div>
      </div>
    </div>
  );
}
