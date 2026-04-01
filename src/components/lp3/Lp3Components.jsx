'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronDown, Star, Check } from 'lucide-react';
import { C } from './tokens';

/* ─── BADGE ─── */
export function Badge({ children, icon: Icon }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      padding: "5px 14px", borderRadius: 100,
      background: C.brandGlow2, border: `1px solid ${C.borderBrand}`,
      color: C.brand, fontSize: 11, fontWeight: 700,
      letterSpacing: 1.8, textTransform: "uppercase",
      fontFamily: "'Outfit',sans-serif",
    }}>
      {Icon && <Icon size={12} strokeWidth={2.5} />}
      {children}
    </span>
  );
}

/* ─── CTA BUTTON ─── */
export function CTABtn({ children, secondary = false, small = false, onClick, fullWidth = false, icon: Icon = ArrowRight }) {
  const [hover, setHover] = useState(false);
  const base = {
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    gap: 8, cursor: "pointer",
    padding: small ? "11px 24px" : "16px 36px",
    fontSize: small ? 13 : 15,
    fontWeight: 700, fontFamily: "'Outfit',sans-serif",
    letterSpacing: 0.5, borderRadius: 8,
    transition: "all 0.25s ease",
    width: fullWidth ? "100%" : "auto",
    border: "none", outline: "none",
  };
  if (secondary) return (
    <button onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={onClick} style={{
      ...base,
      background: hover ? C.brandGlow2 : "transparent",
      border: `1.5px solid ${hover ? C.brand : C.borderBrand}`,
      color: hover ? C.brand : C.textMuted,
      transform: hover ? "translateY(-1px)" : "none",
    }}>{children}</button>
  );
  return (
    <button onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={onClick} style={{
      ...base,
      background: hover ? C.brandDark : C.brand,
      color: C.btnText,
      boxShadow: hover ? `0 8px 40px ${C.brandGlow}` : `0 4px 20px rgba(245,197,24,0.12)`,
      transform: hover ? "translateY(-2px)" : "none",
    }}>
      {children}
      {Icon && <Icon size={16} strokeWidth={2.5} style={{ transition: "transform 0.2s", transform: hover ? "translateX(3px)" : "none" }} />}
    </button>
  );
}

/* ─── STARS ─── */
export function Stars({ n = 5 }) {
  return (
    <div style={{ display: "flex", gap: 3 }}>
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} size={14} fill={C.brand} stroke="none" />
      ))}
    </div>
  );
}

/* ─── SCREEN MOCK ─── */
export function ScreenMock({ title, items = [] }) {
  return (
    <div style={{
      background: C.card, borderRadius: 14, border: `1px solid ${C.border}`,
      overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
    }}>
      <div style={{ padding: "12px 16px", borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", gap: 8 }}>
        {[C.red, "#F59E0B", C.green].map((c, i) => (
          <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: c, opacity: 0.8 }} />
        ))}
        <div style={{ flex: 1, height: 8, borderRadius: 4, background: C.card2, marginLeft: 8 }} />
      </div>
      <div style={{ padding: 20 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.textMuted, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 14 }}>{title}</div>
        {items.map((item, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: 10,
            padding: "10px 12px", borderRadius: 8,
            background: i === 0 ? C.brandGlow2 : "transparent",
            border: `1px solid ${i === 0 ? C.borderBrand : "transparent"}`,
            marginBottom: 6,
          }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: i === 0 ? C.brand : C.textSubtle, flexShrink: 0 }} />
            <div style={{ flex: 1, fontSize: 13, color: i === 0 ? C.text : C.textMuted }}>{item.label}</div>
            {item.value && (
              <div style={{ fontSize: 12, fontWeight: 700, color: item.up ? C.green : (item.down ? C.red : C.brand) }}>
                {item.value}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── FEATURE CARD ─── */
export function FeatureCard({ icon: Icon, title, desc, items = [] }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: hover ? C.cardHover : C.card,
        borderRadius: 14, padding: 28,
        border: `1px solid ${hover ? C.borderBrandHover : C.border}`,
        transition: "all 0.3s ease",
        transform: hover ? "translateY(-4px)" : "none",
        boxShadow: hover ? "0 12px 40px rgba(0,0,0,0.3)" : "none",
        cursor: "default",
      }}
    >
      <div style={{
        width: 44, height: 44, borderRadius: 10,
        background: C.brandGlow2, border: `1px solid ${C.borderBrand}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: C.brand, marginBottom: 18,
      }}>
        <Icon size={20} strokeWidth={1.75} />
      </div>
      <h3 style={{ fontFamily: "'Outfit'", fontSize: 17, fontWeight: 700, color: C.text, marginBottom: 8, lineHeight: 1.3 }}>{title}</h3>
      <p style={{ fontSize: 14, color: C.textMuted, lineHeight: 1.75, marginBottom: items.length ? 16 : 0 }}>{desc}</p>
      {items.map((item, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
          <Check size={13} strokeWidth={3} style={{ color: C.brand, flexShrink: 0 }} />
          <span style={{ fontSize: 13, color: C.textMuted }}>{item}</span>
        </div>
      ))}
    </div>
  );
}

/* ─── TESTIMONIAL CARD ─── */
export function TestCard({ name, role, text, initials, stars = 5 }) {
  return (
    <div style={{
      background: C.card, borderRadius: 14, padding: 28,
      border: `1px solid ${C.border}`,
      display: "flex", flexDirection: "column", gap: 14,
    }}>
      <Stars n={stars} />
      <p style={{ fontSize: 14, color: C.text, lineHeight: 1.8, fontStyle: "italic", opacity: 0.9, flex: 1 }}>
        &ldquo;{text}&rdquo;
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 4, borderTop: `1px solid ${C.border}` }}>
        <div style={{
          width: 40, height: 40, borderRadius: "50%",
          background: `linear-gradient(135deg, ${C.brandDark} 0%, ${C.brand} 100%)`,
          display: "flex", alignItems: "center", justifyContent: "center",
          color: C.btnText, fontWeight: 800, fontSize: 14, fontFamily: "'Outfit'", flexShrink: 0,
        }}>{initials}</div>
        <div>
          <div style={{ color: C.text, fontWeight: 600, fontSize: 14 }}>{name}</div>
          <div style={{ color: C.textMuted, fontSize: 12, marginTop: 2 }}>{role}</div>
        </div>
      </div>
    </div>
  );
}

/* ─── PRICE CARD ─── */
export function PriceCard({ name, price, originalPrice, features, highlight = false, badge: badgeText }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: highlight ? `linear-gradient(180deg, rgba(245,197,24,0.07) 0%, ${C.card} 50%)` : C.card,
        borderRadius: 16, padding: "36px 28px",
        border: `${highlight ? "2px" : "1px"} solid ${highlight || hover ? C.borderBrandHover : C.border}`,
        position: "relative",
        transform: hover ? "translateY(-6px)" : highlight ? "translateY(-4px)" : "none",
        transition: "all 0.3s ease",
        flex: "1 1 280px", maxWidth: 340,
        boxShadow: highlight ? `0 0 60px ${C.brandGlow}` : hover ? "0 12px 48px rgba(0,0,0,0.3)" : "none",
      }}
    >
      {badgeText && (
        <div style={{
          position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)",
          background: C.brand, color: C.btnText,
          fontSize: 10, fontWeight: 800, padding: "5px 16px", borderRadius: 100,
          letterSpacing: 1.5, textTransform: "uppercase", fontFamily: "'Outfit'", whiteSpace: "nowrap",
        }}>{badgeText}</div>
      )}
      <div style={{ fontSize: 12, color: C.textMuted, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5 }}>{name}</div>
      <div style={{ margin: "16px 0 4px", display: "flex", alignItems: "baseline", gap: 4 }}>
        <span style={{ fontFamily: "'Outfit'", fontSize: 13, color: C.textMuted, fontWeight: 500 }}>R$</span>
        <span style={{ fontFamily: "'Outfit'", fontSize: 48, fontWeight: 900, color: C.text, lineHeight: 1 }}>{price}</span>
        <span style={{ fontSize: 13, color: C.textMuted }}>/mês</span>
      </div>
      {originalPrice && <div style={{ fontSize: 12, color: C.textMuted, textDecoration: "line-through", marginBottom: 4 }}>Era R$ {originalPrice}/mês</div>}
      <div style={{ width: "100%", height: 1, background: C.border, margin: "20px 0" }} />
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 10 }}>
        {features.map((f, i) => (
          <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 14, color: C.textMuted }}>
            <CheckCircle2 size={15} strokeWidth={2} style={{ color: C.brand, flexShrink: 0, marginTop: 1 }} />{f}
          </li>
        ))}
      </ul>
      <CTABtn secondary={!highlight} fullWidth icon={highlight ? ArrowRight : null}>
        {highlight ? "Garantir minha vaga" : "Escolher plano"}
      </CTABtn>
    </div>
  );
}

/* ─── FAQ ITEM ─── */
export function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen(!open)}
      style={{
        background: open ? C.card2 : C.card, borderRadius: 12,
        padding: "18px 22px",
        border: `1px solid ${open ? C.borderBrand : C.border}`,
        cursor: "pointer", transition: "all 0.25s ease",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
        <span style={{ fontFamily: "'Outfit'", fontSize: 15, fontWeight: 600, color: C.text, lineHeight: 1.4 }}>{q}</span>
        <div style={{
          color: C.brand, transition: "transform 0.3s ease",
          transform: open ? "rotate(180deg)" : "none", flexShrink: 0,
        }}>
          <ChevronDown size={18} strokeWidth={2} />
        </div>
      </div>
      <div style={{ maxHeight: open ? 200 : 0, overflow: "hidden", transition: "max-height 0.4s ease" }}>
        <p style={{ fontSize: 14, color: C.textMuted, lineHeight: 1.8, paddingTop: 14 }}>{a}</p>
      </div>
    </div>
  );
}
