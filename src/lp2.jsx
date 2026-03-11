import { useState, useEffect, useRef, createContext, useContext } from "react";

/* ─── THEME SYSTEM ─── */
const themes = {
  dark: {
    bg: "#111111",
    card: "#1A1A1A",
    card2: "#222222",
    text: "#F5F5F5",
    textMuted: "#999999",
    yellow: "#F5C518",
    yellowDark: "#D4A910",
    border: "rgba(255,255,255,0.06)",
    borderYellow: "rgba(245,197,24,0.15)",
    badgeBg: "rgba(245,197,24,0.1)",
    badgeBorder: "rgba(245,197,24,0.25)",
    iconBg: "rgba(245,197,24,0.1)",
    cardHoverBorder: "rgba(245,197,24,0.2)",
    navBg: "rgba(17,17,17,0.95)",
    progressBg: "rgba(255,255,255,0.06)",
    subtleBg: "rgba(245,197,24,0.03)",
    subtleBg2: "rgba(245,197,24,0.05)",
    subtleBg3: "rgba(245,197,24,0.06)",
    footerText: "rgba(255,255,255,0.3)",
    featureText: "rgba(245,245,245,0.8)",
    featureText2: "rgba(245,245,245,0.75)",
    btnTextSecondary: "#F5C518",
    ctaTextOnYellow: "#111111",
    quoteColor: "rgba(245,197,24,0.4)",
    mockGradient1: "#1A1A1A",
    mockGradient2: "#222222",
    mockBorder: "rgba(245,197,24,0.12)",
    cornerBorder: "rgba(245,197,24,0.25)",
    mockLabel: "#999999",
    toggleBg: "rgba(255,255,255,0.08)",
    toggleIcon: "#F5C518",
    cardShadow: "none",
    cardHoverShadow: "none",
    highlightShadow: "none",
    gradientEnd: "#FFE17D",
  },
  light: {
    bg: "#FAFAFA",
    card: "#FFFFFF",
    card2: "#F5F5F3",
    text: "#1A1A1A",
    textMuted: "#6B6B6B",
    yellow: "#D4A910",
    yellowDark: "#B8920D",
    border: "rgba(0,0,0,0.07)",
    borderYellow: "rgba(180,140,10,0.2)",
    badgeBg: "rgba(212,169,16,0.08)",
    badgeBorder: "rgba(212,169,16,0.25)",
    iconBg: "rgba(212,169,16,0.1)",
    cardHoverBorder: "rgba(212,169,16,0.35)",
    navBg: "rgba(250,250,250,0.92)",
    progressBg: "rgba(0,0,0,0.06)",
    subtleBg: "rgba(212,169,16,0.03)",
    subtleBg2: "rgba(212,169,16,0.04)",
    subtleBg3: "rgba(212,169,16,0.05)",
    footerText: "rgba(0,0,0,0.35)",
    featureText: "rgba(26,26,26,0.85)",
    featureText2: "rgba(26,26,26,0.65)",
    btnTextSecondary: "#B8920D",
    ctaTextOnYellow: "#1A1A1A",
    quoteColor: "rgba(212,169,16,0.3)",
    mockGradient1: "#EEEEEE",
    mockGradient2: "#E4E4E4",
    mockBorder: "rgba(0,0,0,0.08)",
    cornerBorder: "rgba(212,169,16,0.3)",
    mockLabel: "#999999",
    toggleBg: "rgba(0,0,0,0.05)",
    toggleIcon: "#D4A910",
    cardShadow: "0 1px 8px rgba(0,0,0,0.04)",
    cardHoverShadow: "0 8px 28px rgba(0,0,0,0.07)",
    highlightShadow: "0 12px 40px rgba(212,169,16,0.1)",
    gradientEnd: "#C49B00",
  },
};

const ThemeCtx = createContext(themes.dark);

/* ─── Utility: Fade-in on scroll ─── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function FadeIn({ children, delay = 0, className = "", style = {} }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} className={className} style={{
      ...style,
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(32px)",
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
    }}>{children}</div>
  );
}

/* ─── Countdown Timer ─── */
function Countdown() {
  const t = useContext(ThemeCtx);
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
  const Block = ({ val, label }) => (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontFamily: "'Outfit',sans-serif", fontSize: 36, fontWeight: 800, color: t.yellow, lineHeight: 1.1 }}>
        {String(val).padStart(2, "0")}
      </div>
      <div style={{ fontSize: 11, color: t.textMuted, textTransform: "uppercase", letterSpacing: 2, marginTop: 4 }}>{label}</div>
    </div>
  );
  return (
    <div style={{ display: "flex", gap: 24, justifyContent: "center", alignItems: "center" }}>
      <Block val={time.d} label="Dias" />
      <span style={{ color: t.yellow, fontSize: 28, fontWeight: 300, opacity: 0.4 }}>:</span>
      <Block val={time.h} label="Horas" />
      <span style={{ color: t.yellow, fontSize: 28, fontWeight: 300, opacity: 0.4 }}>:</span>
      <Block val={time.m} label="Min" />
      <span style={{ color: t.yellow, fontSize: 28, fontWeight: 300, opacity: 0.4 }}>:</span>
      <Block val={time.s} label="Seg" />
    </div>
  );
}

/* ─── Mock Image Placeholder ─── */
function MockImage({ label, ratio = "56.25%", icon = "▶" }) {
  const t = useContext(ThemeCtx);
  return (
    <div style={{
      position: "relative", width: "100%", paddingBottom: ratio,
      background: `linear-gradient(135deg, ${t.mockGradient1} 0%, ${t.mockGradient2} 100%)`,
      borderRadius: 12, overflow: "hidden", border: `1px solid ${t.mockBorder}`,
    }}>
      <div style={{
        position: "absolute", inset: 0, display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", gap: 12,
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
        <span style={{ fontSize: 13, color: t.mockLabel, letterSpacing: 1, textTransform: "uppercase" }}>{label}</span>
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

/* ─── CTA Button ─── */
function CTAButton({ children, secondary = false, small = false, onClick }) {
  const t = useContext(ThemeCtx);
  const [hover, setHover] = useState(false);
  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
      style={{
        padding: small ? "12px 28px" : "18px 48px",
        fontSize: small ? 14 : 16,
        fontWeight: 700, fontFamily: "'Outfit',sans-serif",
        letterSpacing: 1.5, textTransform: "uppercase",
        border: secondary ? `2px solid ${t.yellow}` : "none",
        borderRadius: 6, cursor: "pointer",
        background: secondary ? (hover ? t.yellow : "transparent") : (hover ? t.yellowDark : t.yellow),
        color: secondary ? (hover ? t.ctaTextOnYellow : t.btnTextSecondary) : t.ctaTextOnYellow,
        transform: hover ? "translateY(-2px)" : "none",
        boxShadow: hover && !secondary ? `0 8px 32px rgba(212,169,16,0.3)` : "none",
        transition: "all 0.3s ease",
      }}
    >{children}</button>
  );
}

/* ─── Badge ─── */
function Badge({ children }) {
  const t = useContext(ThemeCtx);
  return (
    <span style={{
      display: "inline-block", padding: "6px 16px", borderRadius: 100,
      background: t.badgeBg, border: `1px solid ${t.badgeBorder}`,
      color: t.yellow, fontSize: 12, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase",
      fontFamily: "'Outfit',sans-serif",
    }}>{children}</span>
  );
}

/* ─── Stat Counter ─── */
function StatNumber({ end, suffix = "", label }) {
  const t = useContext(ThemeCtx);
  const [ref, visible] = useInView();
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = Math.ceil(end / 40);
    const id = setInterval(() => {
      start += step;
      if (start >= end) { setVal(end); clearInterval(id); } else setVal(start);
    }, 30);
    return () => clearInterval(id);
  }, [visible, end]);
  return (
    <div ref={ref} style={{ textAlign: "center" }}>
      <div style={{ fontFamily: "'Outfit'", fontSize: 48, fontWeight: 800, color: t.yellow, lineHeight: 1 }}>{val}{suffix}</div>
      <div style={{ fontSize: 14, color: t.textMuted, marginTop: 8 }}>{label}</div>
    </div>
  );
}

/* ─── Testimonial Card ─── */
function TestimonialCard({ name, role, text, initials }) {
  const t = useContext(ThemeCtx);
  return (
    <div style={{
      background: t.card, borderRadius: 12, padding: 32,
      border: `1px solid ${t.border}`,
      display: "flex", flexDirection: "column", gap: 16,
      boxShadow: t.cardShadow,
    }}>
      <div style={{ color: t.quoteColor, fontSize: 32, lineHeight: 1 }}>"</div>
      <p style={{ color: t.text, fontSize: 15, lineHeight: 1.7, fontStyle: "italic", opacity: 0.9, margin: 0 }}>{text}</p>
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

/* ─── Feature Card ─── */
function FeatureCard({ icon, title, desc }) {
  const t = useContext(ThemeCtx);
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: hover ? t.card2 : t.card,
        borderRadius: 12, padding: 32,
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

/* ─── Price Card ─── */
function PriceCard({ name, price, original, features, highlight = false, badge: badgeText }) {
  const t = useContext(ThemeCtx);
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
        <CTAButton secondary={!highlight} small>{highlight ? "Garantir minha vaga" : "Escolher plano"}</CTAButton>
      </div>
    </div>
  );
}

/* ─── FAQ ─── */
function FAQ({ q, a }) {
  const t = useContext(ThemeCtx);
  const [open, setOpen] = useState(false);
  return (
    <div onClick={() => setOpen(!open)} style={{
      background: t.card, borderRadius: 10, padding: "20px 24px",
      border: `1px solid ${open ? t.cardHoverBorder : t.border}`,
      cursor: "pointer", transition: "all 0.3s ease",
      boxShadow: open ? t.cardHoverShadow : t.cardShadow,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "'Outfit'", fontSize: 15, fontWeight: 600, color: t.text }}>{q}</span>
        <span style={{
          color: t.yellow, fontSize: 20, transition: "transform 0.3s ease",
          transform: open ? "rotate(45deg)" : "rotate(0deg)", flexShrink: 0, marginLeft: 12,
        }}>+</span>
      </div>
      <div style={{ maxHeight: open ? 200 : 0, overflow: "hidden", transition: "max-height 0.4s ease" }}>
        <p style={{ fontSize: 14, color: t.textMuted, lineHeight: 1.7, margin: "12px 0 0" }}>{a}</p>
      </div>
    </div>
  );
}

/* ─── Theme Toggle ─── */
function ThemeToggle({ isDark, onToggle }) {
  const t = useContext(ThemeCtx);
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
        cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 18, transition: "all 0.3s ease",
        color: t.toggleIcon,
        transform: hover ? "scale(1.08)" : "none",
      }}
    >{isDark ? "☀️" : "🌙"}</button>
  );
}

/* ═══════════════════ MAIN PAGE ═══════════════════ */
export default function LandingPage() {
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const t = isDark ? themes.dark : themes.light;

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const cx = { maxWidth: 1120, margin: "0 auto", padding: "0 24px" };
  const sec = (extra = {}) => ({ padding: "100px 0", ...extra });

  return (
    <ThemeCtx.Provider value={t}>
      <div style={{
        background: t.bg, color: t.text, fontFamily: "'DM Sans',sans-serif",
        overflowX: "hidden", transition: "background 0.5s ease, color 0.5s ease",
      }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,300&family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
          *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
          html{scroll-behavior:smooth}
          body{background:${t.bg};transition:background 0.5s ease}
          ::selection{background:${t.yellow};color:${t.ctaTextOnYellow}}
          @keyframes pulse{0%,100%{opacity:1}50%{opacity:.5}}
        `}</style>

        {/* NAVBAR */}
        <nav style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          background: scrolled ? t.navBg : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? `1px solid ${t.border}` : "none",
          transition: "all 0.3s ease", padding: "0 24px",
        }}>
          <div style={{ ...cx, display: "flex", justifyContent: "space-between", alignItems: "center", height: 72 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 8,
                background: `linear-gradient(135deg, ${t.yellow} 0%, ${t.yellowDark} 100%)`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "'Outfit'", fontWeight: 900, fontSize: 18, color: t.ctaTextOnYellow,
              }}>A1</div>
              <span style={{ fontFamily: "'Outfit'", fontWeight: 700, fontSize: 18, color: t.text }}>
                Alerta<span style={{ color: t.yellow }}>1</span>
              </span>
            </div>
            <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
              {["Recursos","Depoimentos","Planos","FAQ"].map(item=>(
                <a key={item} href={`#${item.toLowerCase()}`} style={{
                  color: t.textMuted, textDecoration: "none", fontSize: 14, fontWeight: 500, transition: "color 0.2s",
                }}
                  onMouseEnter={e=>e.target.style.color=t.text}
                  onMouseLeave={e=>e.target.style.color=t.textMuted}
                >{item}</a>
              ))}
              <ThemeToggle isDark={isDark} onToggle={()=>setIsDark(!isDark)} />
              <CTAButton small>Acesso antecipado</CTAButton>
            </div>
          </div>
        </nav>

        {/* HERO */}
        <header style={{ ...sec({ paddingTop: 160, paddingBottom: 80 }), position: "relative" }}>
          <div style={{ position: "absolute", top: -100, right: -200, width: 600, height: 600, background: `radial-gradient(circle, ${t.subtleBg3} 0%, transparent 70%)`, pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: -200, left: -100, width: 400, height: 400, background: `radial-gradient(circle, ${t.subtleBg2} 0%, transparent 70%)`, pointerEvents: "none" }} />
          <div style={cx}>
            <FadeIn style={{ textAlign: "center", maxWidth: 820, margin: "0 auto" }}>
              <Badge>🔥 Pré-venda aberta — vagas limitadas</Badge>
              <h1 style={{
                fontFamily: "'Outfit'", fontSize: "clamp(36px,5vw,64px)", fontWeight: 900,
                lineHeight: 1.08, margin: "28px 0 0", letterSpacing: -1, color: t.text,
              }}>
                Pare de perder dinheiro{" "}
                <span style={{
                  background: `linear-gradient(90deg, ${t.yellow} 30%, ${t.gradientEnd} 100%)`,
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                }}>com papel e planilha.</span>
              </h1>
              <p style={{ fontSize: 18, color: t.textMuted, lineHeight: 1.7, margin: "24px auto 0", maxWidth: 600 }}>
                O ERP feito sob medida para oficinas de troca de óleo. Controle estoque,
                clientes, financeiro e ordem de serviço — tudo em um só lugar.{" "}
                <span style={{ color: t.text, fontWeight: 600 }}>Sem complicação.</span>
              </p>
            </FadeIn>
            <FadeIn delay={0.2} style={{ textAlign: "center", marginTop: 40 }}>
              <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                <CTAButton>Garantir minha vaga agora</CTAButton>
                <CTAButton secondary>Ver demonstração</CTAButton>
              </div>
              <p style={{ fontSize: 13, color: t.textMuted, marginTop: 16 }}>
                ✦ Primeiros 50 clientes com <span style={{ color: t.yellow, fontWeight: 700 }}>40% de desconto vitalício</span>
              </p>
            </FadeIn>
            <FadeIn delay={0.4} style={{ marginTop: 64, maxWidth: 900, margin: "64px auto 0" }}>
              <MockImage label="Vídeo de demonstração do sistema" ratio="56.25%" icon="▶" />
            </FadeIn>
            <FadeIn delay={0.5} style={{ marginTop: 48, display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
              <StatNumber end={7} suffix="+" label="Anos no ramo automotivo" />
              <StatNumber end={500} suffix="+" label="Trocas de óleo realizadas" />
              <StatNumber end={98} suffix="%" label="Satisfação dos clientes" />
            </FadeIn>
          </div>
        </header>

        {/* PAIN POINTS */}
        <section style={sec()}>
          <div style={cx}>
            <FadeIn style={{ textAlign: "center", marginBottom: 64 }}>
              <Badge>O problema</Badge>
              <h2 style={{ fontFamily: "'Outfit'", fontSize: 36, fontWeight: 800, margin: "20px 0 16px", lineHeight: 1.2 }}>
                Você se identifica com algum desses <span style={{ color: t.yellow }}>problemas</span>?
              </h2>
            </FadeIn>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
              {[
                { icon: "📋", title: "Controle no caderno ou planilha", desc: "Dados perdidos, retrabalho e zero visibilidade sobre o que entra e sai da oficina." },
                { icon: "📦", title: "Estoque descontrolado", desc: "Óleo parado encalhado ou falta de filtro na hora da venda. Dinheiro jogado fora." },
                { icon: "😤", title: "Cliente sumiu e você nem percebeu", desc: "Sem histórico de revisão, sem lembrete, sem recorrência. Receita que vai pro concorrente." },
                { icon: "💸", title: "Não sabe quanto lucra de verdade", desc: "Fatura, mas não sabe se sobra. Sem controle financeiro, crescer é impossível." },
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.1}><FeatureCard icon={item.icon} title={item.title} desc={item.desc} /></FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="recursos" style={{ ...sec(), background: `linear-gradient(180deg, ${t.subtleBg} 0%, transparent 50%)` }}>
          <div style={cx}>
            <FadeIn style={{ textAlign: "center", marginBottom: 64 }}>
              <Badge>A solução</Badge>
              <h2 style={{ fontFamily: "'Outfit'", fontSize: 36, fontWeight: 800, margin: "20px 0 16px", lineHeight: 1.2 }}>
                Tudo que sua oficina precisa. <span style={{ color: t.yellow }}>Nada que não precisa.</span>
              </h2>
              <p style={{ fontSize: 16, color: t.textMuted, maxWidth: 560, margin: "0 auto" }}>
                Módulos pensados por quem vive o dia a dia de uma troca de óleo há mais de 7 anos.
              </p>
            </FadeIn>

            {[
              { badge: "Módulo 1", title: "Ordem de Serviço Digital", desc: "Abra, acompanhe e finalize OS em segundos. O cliente recebe tudo por WhatsApp. Histórico completo de cada veículo — placa, km, óleo usado, filtros trocados.", feats: ["Preenchimento automático por placa","Envio de OS por WhatsApp","Histórico completo do veículo"], mockLabel: "Screenshot — Tela de Ordem de Serviço", textFirst: true },
              { badge: "Módulo 2", title: "Estoque Inteligente", desc: "Saiba exatamente o que tem, o que está acabando e o que precisa comprar. Alertas automáticos de estoque mínimo — nunca mais perca uma venda.", feats: ["Catálogo de filtros integrado","Alerta de estoque baixo","Controle de entrada e saída"], mockLabel: "Screenshot — Dashboard de Estoque", textFirst: false },
              { badge: "Módulo 3", title: "Financeiro Simplificado", desc: "Entradas, saídas, lucro real. Saiba exatamente quanto sua oficina fatura e quanto sobra no final do mês. Relatórios claros, sem precisar de contador.", feats: ["Dashboard de faturamento","Controle de contas a pagar/receber","Relatórios por período"], mockLabel: "Screenshot — Painel Financeiro", textFirst: true },
            ].map((mod, idx) => {
              const textBlock = (
                <FadeIn key={"t"+idx}>
                  <Badge>{mod.badge}</Badge>
                  <h3 style={{ fontFamily: "'Outfit'", fontSize: 28, fontWeight: 700, margin: "16px 0 12px" }}>{mod.title}</h3>
                  <p style={{ color: t.textMuted, lineHeight: 1.7, fontSize: 15 }}>{mod.desc}</p>
                  <ul style={{ listStyle: "none", padding: 0, marginTop: 20, display: "flex", flexDirection: "column", gap: 10 }}>
                    {mod.feats.map((f, i) => (
                      <li key={i} style={{ display: "flex", gap: 10, fontSize: 14, color: t.featureText2 }}>
                        <span style={{ color: t.yellow }}>✓</span> {f}
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              );
              const mockBlock = <FadeIn key={"m"+idx} delay={0.15}><MockImage label={mod.mockLabel} ratio="65%" icon="🖥" /></FadeIn>;
              return (
                <div key={idx} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", marginBottom: idx < 2 ? 80 : 0 }}>
                  {mod.textFirst ? <>{textBlock}{mockBlock}</> : <>{mockBlock}{textBlock}</>}
                </div>
              );
            })}

            <FadeIn style={{ marginTop: 80 }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
                {[
                  { icon: "👥", title: "Gestão de Clientes", desc: "CRM completo com histórico e lembretes de retorno." },
                  { icon: "📊", title: "Relatórios & KPIs", desc: "Métricas que mostram a saúde real do seu negócio." },
                  { icon: "📱", title: "Acesso pelo Celular", desc: "Funciona no celular, tablet e computador. Sem instalar nada." },
                  { icon: "🔔", title: "Notificações Smart", desc: "Lembrete de troca para o cliente voltar na hora certa." },
                ].map((f, i) => <FeatureCard key={i} icon={f.icon} title={f.title} desc={f.desc} />)}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* URGENCY */}
        <section style={{ ...sec(), textAlign: "center", background: `linear-gradient(180deg, transparent, ${t.subtleBg2} 50%, transparent)` }}>
          <div style={cx}>
            <FadeIn>
              <Badge>⏳ Oferta por tempo limitado</Badge>
              <h2 style={{ fontFamily: "'Outfit'", fontSize: 36, fontWeight: 800, margin: "20px 0 12px" }}>
                Essa condição <span style={{ color: t.yellow }}>não vai durar.</span>
              </h2>
              <p style={{ color: t.textMuted, fontSize: 16, maxWidth: 520, margin: "0 auto 40px" }}>
                Os primeiros 50 assinantes garantem desconto vitalício e acesso a todos os módulos antes de qualquer um. Depois disso, o preço sobe.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div style={{
                background: t.card, borderRadius: 16, padding: "40px 48px",
                border: `1px solid ${t.borderYellow}`, display: "inline-block",
                boxShadow: t.cardShadow,
              }}>
                <p style={{ fontSize: 13, color: t.textMuted, textTransform: "uppercase", letterSpacing: 2, marginBottom: 24 }}>A oferta encerra em</p>
                <Countdown />
                <div style={{ marginTop: 32 }}><CTAButton>Quero garantir 40% OFF vitalício</CTAButton></div>
                <div style={{ display: "flex", justifyContent: "center", gap: 24, marginTop: 24, flexWrap: "wrap" }}>
                  {["Sem fidelidade","Cancele quando quiser","Suporte humanizado"].map((txt, i) => (
                    <span key={i} style={{ fontSize: 12, color: t.textMuted, display: "flex", alignItems: "center", gap: 6 }}>
                      <span style={{ color: t.yellow }}>✦</span> {txt}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} style={{ maxWidth: 400, margin: "48px auto 0" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: t.textMuted, marginBottom: 8 }}>
                <span>Vagas preenchidas</span>
                <span style={{ color: t.yellow, fontWeight: 700 }}>38 / 50</span>
              </div>
              <div style={{ height: 8, borderRadius: 100, background: t.progressBg, overflow: "hidden" }}>
                <div style={{ width: "76%", height: "100%", borderRadius: 100, background: `linear-gradient(90deg, ${t.yellowDark}, ${t.yellow})`, animation: "pulse 2s infinite" }} />
              </div>
              <p style={{ fontSize: 12, color: t.textMuted, marginTop: 8 }}>
                ⚡ Apenas <span style={{ color: t.yellow, fontWeight: 700 }}>12 vagas</span> restantes com desconto
              </p>
            </FadeIn>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="depoimentos" style={sec()}>
          <div style={cx}>
            <FadeIn style={{ textAlign: "center", marginBottom: 64 }}>
              <Badge>Prova social</Badge>
              <h2 style={{ fontFamily: "'Outfit'", fontSize: 36, fontWeight: 800, margin: "20px 0 16px" }}>
                Quem já testou, <span style={{ color: t.yellow }}>aprovou.</span>
              </h2>
            </FadeIn>
            <FadeIn style={{ maxWidth: 700, margin: "0 auto 48px" }}>
              <MockImage label="Vídeo depoimento — Cliente beta" ratio="56.25%" icon="▶" />
            </FadeIn>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
              <FadeIn><TestimonialCard initials="RM" name="Ricardo Mendes" role="Oficina Rápida — Osasco, SP" text="Antes eu perdia tempo anotando tudo no caderno. Com o Alerta1 consigo controlar o estoque e saber quanto lucro em cada troca. É outro nível." /></FadeIn>
              <FadeIn delay={0.1}><TestimonialCard initials="CL" name="Carlos Lima" role="Auto Center Express — Barueri, SP" text="O que mais me impressionou foi a simplicidade. Meu funcionário aprendeu a usar em 10 minutos. O envio da OS por WhatsApp é um diferencial absurdo." /></FadeIn>
              <FadeIn delay={0.2}><TestimonialCard initials="AF" name="Ana Ferreira" role="Troca Certa — Campinas, SP" text="Finalmente um sistema que entende a rotina de quem faz troca de óleo. Não é um ERP genérico. Foi feito pra gente." /></FadeIn>
            </div>
          </div>
        </section>

        {/* AUTHORITY */}
        <section style={{ ...sec(), background: `linear-gradient(180deg, ${t.subtleBg} 0%, transparent 50%)` }}>
          <div style={cx}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
              <FadeIn><MockImage label="Foto do fundador / equipe" ratio="100%" icon="📸" /></FadeIn>
              <FadeIn delay={0.15}>
                <Badge>Quem criou</Badge>
                <h2 style={{ fontFamily: "'Outfit'", fontSize: 32, fontWeight: 800, margin: "20px 0 16px", lineHeight: 1.2 }}>
                  Feito por quem <span style={{ color: t.yellow }}>vive a oficina</span> todo dia.
                </h2>
                <p style={{ color: t.textMuted, lineHeight: 1.8, fontSize: 15, marginBottom: 16 }}>
                  Não somos uma empresa de tecnologia que "acha" que sabe o que sua oficina precisa.
                  O Alerta1 nasceu dentro de uma oficina de troca de óleo real — a nossa.
                </p>
                <p style={{ color: t.textMuted, lineHeight: 1.8, fontSize: 15, marginBottom: 24 }}>
                  São <span style={{ color: t.text, fontWeight: 600 }}>mais de 7 anos</span> atendendo
                  clientes, gerenciando estoque e entendendo na pele os desafios do dia a dia.
                  Cada funcionalidade foi pensada para resolver problemas que nós mesmos enfrentamos.
                </p>
                <div style={{ display: "flex", gap: 32 }}>
                  {[{ v: "7+", l: "Anos no ramo" },{ v: "500+", l: "Trocas realizadas" },{ v: "1", l: "Missão: simplificar" }].map((s, i) => (
                    <div key={i}>
                      <div style={{ fontFamily: "'Outfit'", fontSize: 32, fontWeight: 800, color: t.yellow }}>{s.v}</div>
                      <div style={{ fontSize: 13, color: t.textMuted }}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="planos" style={sec()}>
          <div style={cx}>
            <FadeIn style={{ textAlign: "center", marginBottom: 64 }}>
              <Badge>Planos</Badge>
              <h2 style={{ fontFamily: "'Outfit'", fontSize: 36, fontWeight: 800, margin: "20px 0 12px" }}>
                Investimento que se paga <span style={{ color: t.yellow }}>na primeira semana.</span>
              </h2>
              <p style={{ color: t.textMuted, fontSize: 16, maxWidth: 520, margin: "0 auto" }}>
                Quanto você perde por mês sem controle de estoque? Com certeza mais do que qualquer plano abaixo.
              </p>
            </FadeIn>
            <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
              <FadeIn><PriceCard name="Essencial" price="97" original="147" features={["Ordem de Serviço digital","Cadastro de clientes","Controle de estoque básico","Acesso mobile","Suporte por WhatsApp"]} /></FadeIn>
              <FadeIn delay={0.1}><PriceCard name="Profissional" price="147" original="247" highlight badge="Mais popular" features={["Tudo do Essencial +","Financeiro completo","Relatórios e KPIs","Notificações de retorno","Catálogo de filtros integrado","Suporte prioritário"]} /></FadeIn>
              <FadeIn delay={0.2}><PriceCard name="Rede" price="247" original="397" features={["Tudo do Profissional +","Multi-unidades","Gestão de equipe","API de integração","Onboarding dedicado","Consultoria de implantação"]} /></FadeIn>
            </div>
            <FadeIn delay={0.25} style={{ textAlign: "center", marginTop: 40 }}>
              <p style={{ fontSize: 14, color: t.textMuted }}>
                ✦ Todos os planos com <span style={{ color: t.yellow, fontWeight: 700 }}>40% OFF vitalício</span> para os 50 primeiros · Sem fidelidade · Cancele quando quiser
              </p>
            </FadeIn>
          </div>
        </section>

        {/* GUARANTEE */}
        <section style={{ ...sec({ padding: "80px 0" }) }}>
          <div style={cx}>
            <FadeIn>
              <div style={{
                background: t.card, borderRadius: 20, padding: "48px 56px",
                border: `1px solid ${t.borderYellow}`,
                display: "flex", gap: 48, alignItems: "center", flexWrap: "wrap",
                boxShadow: t.cardShadow,
              }}>
                <div style={{
                  minWidth: 120, width: 120, height: 120, borderRadius: "50%",
                  background: t.iconBg, border: `2px solid ${t.yellow}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 48, flexShrink: 0,
                }}>🛡️</div>
                <div style={{ flex: 1, minWidth: 280 }}>
                  <h3 style={{ fontFamily: "'Outfit'", fontSize: 26, fontWeight: 800, marginBottom: 12 }}>
                    Garantia de <span style={{ color: t.yellow }}>7 dias</span> sem risco.
                  </h3>
                  <p style={{ color: t.textMuted, lineHeight: 1.7, fontSize: 15 }}>
                    Teste o Alerta1 por 7 dias. Se não transformar a gestão da sua oficina,
                    devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.{" "}
                    <span style={{ color: t.text, fontWeight: 500 }}>O risco é todo nosso.</span>
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" style={sec()}>
          <div style={{ ...cx, maxWidth: 720 }}>
            <FadeIn style={{ textAlign: "center", marginBottom: 48 }}>
              <Badge>Dúvidas frequentes</Badge>
              <h2 style={{ fontFamily: "'Outfit'", fontSize: 36, fontWeight: 800, margin: "20px 0" }}>Ainda tem dúvidas?</h2>
            </FadeIn>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { q: "Preciso instalar algo no computador?", a: "Não. O Alerta1 funciona 100% no navegador — no celular, tablet ou computador. Basta acessar e começar a usar." },
                { q: "Funciona para oficinas pequenas?", a: "Sim! O sistema foi pensado justamente para oficinas de 1 a 10 funcionários. Simples de usar, sem complexidade desnecessária." },
                { q: "Consigo migrar meus dados de planilha?", a: "Sim. Nossa equipe ajuda na importação dos seus dados atuais sem custo adicional para os planos Profissional e Rede." },
                { q: "Posso cancelar a qualquer momento?", a: "Sim. Sem fidelidade, sem multa. Cancele quando quiser com um clique. Mas aposto que não vai querer cancelar." },
                { q: "O desconto de 40% é pra sempre mesmo?", a: "Sim. Quem entra agora na pré-venda garante 40% OFF vitalício — o preço nunca aumenta pra você, mesmo quando o valor subir para novos clientes." },
                { q: "Tem suporte? Como funciona?", a: "Suporte humanizado via WhatsApp. Nada de robô. Você fala direto com quem entende do sistema e do ramo de troca de óleo." },
              ].map((item, i) => <FadeIn key={i} delay={i * 0.05}><FAQ q={item.q} a={item.a} /></FadeIn>)}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section style={{ ...sec(), textAlign: "center", background: `linear-gradient(180deg, transparent, ${t.subtleBg3} 50%, transparent)` }}>
          <div style={cx}>
            <FadeIn>
              <h2 style={{ fontFamily: "'Outfit'", fontSize: "clamp(28px,4vw,44px)", fontWeight: 900, lineHeight: 1.15, marginBottom: 20 }}>
                Sua oficina merece sair do{" "}
                <span style={{ textDecoration: "line-through", opacity: 0.4 }}>caderno</span>{" "}
                e entrar no <span style={{ color: t.yellow }}>próximo nível.</span>
              </h2>
              <p style={{ color: t.textMuted, fontSize: 16, maxWidth: 500, margin: "0 auto 36px" }}>
                Não deixe pra depois. As vagas com desconto estão acabando e essa oferta não vai se repetir.
              </p>
              <CTAButton>Quero começar agora</CTAButton>
              <div style={{ marginTop: 24, display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap" }}>
                {["🔒 Pagamento seguro","✦ 7 dias de garantia","📱 Suporte via WhatsApp"].map((txt, i) => (
                  <span key={i} style={{ fontSize: 13, color: t.textMuted }}>{txt}</span>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ padding: "48px 0", borderTop: `1px solid ${t.border}` }}>
          <div style={{ ...cx, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{
                width: 28, height: 28, borderRadius: 6, background: t.yellow,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "'Outfit'", fontWeight: 900, fontSize: 13, color: t.ctaTextOnYellow,
              }}>A1</div>
              <span style={{ fontFamily: "'Outfit'", fontWeight: 600, fontSize: 14, color: t.textMuted }}>Alerta1 ERP</span>
            </div>
            <div style={{ fontSize: 13, color: t.footerText }}>© 2026 Alerta1. Todos os direitos reservados.</div>
          </div>
        </footer>
      </div>
    </ThemeCtx.Provider>
  );
}
