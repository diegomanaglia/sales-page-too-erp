import { useState, useEffect, useRef } from "react";
import {
  BarChart3, Package, Users, Bell, FileText, TrendingUp,
  CheckCircle2, ChevronDown, ArrowRight, Shield,
  Smartphone, Star, Clock, Zap, MessageSquare,
  Award, Lock, PhoneCall, DollarSign,
  AlertTriangle, Wrench, Play, Check, X, Gauge,
  RefreshCw, Layers
} from "lucide-react";

/* ─── DESIGN TOKENS ─── */
const C = {
  bg:                "#080808",
  card:              "#0F0F0F",
  card2:             "#161616",
  cardHover:         "#1C1C1C",
  text:              "#F7F7F7",
  textMuted:         "#787878",
  textSubtle:        "#444444",
  brand:             "#F5C518",
  brandDark:         "#C49B00",
  brandLight:        "#FFE066",
  brandGlow:         "rgba(245,197,24,0.18)",
  brandGlow2:        "rgba(245,197,24,0.08)",
  brandGlow3:        "rgba(245,197,24,0.04)",
  border:            "rgba(255,255,255,0.055)",
  borderBrand:       "rgba(245,197,24,0.2)",
  borderBrandHover:  "rgba(245,197,24,0.45)",
  navBg:             "rgba(8,8,8,0.88)",
  btnText:           "#0A0A0A",
  red:               "#EF4444",
  green:             "#22C55E",
};

/* ─── GLOBAL CSS ─── */
const GLOBAL = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Outfit:wght@400;600;700;800;900&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
  html{scroll-behavior:smooth}
  body{background:${C.bg};overflow-x:hidden;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}
  ::selection{background:${C.brand};color:#0A0A0A}

  @keyframes orb-a{0%,100%{transform:translate(0,0) scale(1);opacity:0.5}40%{transform:translate(60px,-40px) scale(1.15);opacity:0.7}70%{transform:translate(-30px,30px) scale(0.9);opacity:0.4}}
  @keyframes orb-b{0%,100%{transform:translate(0,0) scale(1);opacity:0.4}35%{transform:translate(-50px,50px) scale(0.9);opacity:0.6}65%{transform:translate(40px,-25px) scale(1.1);opacity:0.45}}
  @keyframes ticker{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
  @keyframes blink{0%,100%{opacity:1}50%{opacity:0.35}}
  @keyframes pop{0%{transform:scale(1)}50%{transform:scale(1.06)}100%{transform:scale(1)}}
  @keyframes fade-up{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
  @keyframes progress{from{width:0}to{width:76%}}

  @media(max-width:768px){
    .hide-sm{display:none!important}
    .col-sm{flex-direction:column!important;align-items:stretch!important}
    .grid-1-sm{grid-template-columns:1fr!important}
    .text-center-sm{text-align:center!important}
    .px-sm{padding-left:20px!important;padding-right:20px!important}
  }
  @media(max-width:1024px){
    .grid-1-md{grid-template-columns:1fr!important}
  }
`;

/* ─── HOOKS ─── */
function useInView(threshold = 0.12) {
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

/* ─── FADE IN ─── */
function FadeIn({ children, delay = 0, style = {}, className = "" }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} className={className} style={{
      ...style,
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
    }}>{children}</div>
  );
}

/* ─── BADGE ─── */
function Badge({ children, icon: Icon }) {
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
function CTABtn({ children, secondary = false, small = false, onClick, fullWidth = false, icon: Icon = ArrowRight }) {
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
    border: "none",
    outline: "none",
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

/* ─── STAR RATING ─── */
function Stars({ n = 5 }) {
  return (
    <div style={{ display: "flex", gap: 3 }}>
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} size={14} fill={C.brand} stroke="none" />
      ))}
    </div>
  );
}

/* ─── STAT NUMBER ─── */
function StatNum({ end, suffix = "", label }) {
  const [ref, visible] = useInView();
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!visible) return;
    let cur = 0;
    const step = Math.ceil(end / 50);
    const id = setInterval(() => {
      cur = Math.min(cur + step, end);
      setVal(cur);
      if (cur >= end) clearInterval(id);
    }, 25);
    return () => clearInterval(id);
  }, [visible, end]);
  return (
    <div ref={ref} style={{ textAlign: "center" }}>
      <div style={{ fontFamily: "'Outfit'", fontSize: 42, fontWeight: 900, color: C.brand, lineHeight: 1 }}>{val}{suffix}</div>
      <div style={{ fontSize: 13, color: C.textMuted, marginTop: 6, fontWeight: 500 }}>{label}</div>
    </div>
  );
}

/* ─── COUNTDOWN ─── */
function Countdown() {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const end = new Date();
    end.setDate(end.getDate() + 3);
    end.setHours(23, 59, 59, 0);
    const tick = () => {
      const diff = Math.max(0, end - new Date());
      setT({ d: Math.floor(diff / 86400000), h: Math.floor((diff % 86400000) / 3600000), m: Math.floor((diff % 3600000) / 60000), s: Math.floor((diff % 60000) / 1000) });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  const Blk = ({ val, lbl }) => (
    <div style={{ textAlign: "center", minWidth: 64 }}>
      <div style={{
        background: C.card2, border: `1px solid ${C.borderBrand}`, borderRadius: 10,
        padding: "12px 16px", fontFamily: "'Outfit'", fontSize: 32, fontWeight: 900, color: C.brand, lineHeight: 1,
      }}>{String(val).padStart(2, "0")}</div>
      <div style={{ fontSize: 10, color: C.textMuted, marginTop: 6, textTransform: "uppercase", letterSpacing: 2 }}>{lbl}</div>
    </div>
  );
  const Sep = () => <span style={{ color: C.brand, fontSize: 28, opacity: 0.4, lineHeight: 1, paddingBottom: 22 }}>:</span>;
  return (
    <div style={{ display: "flex", gap: 12, alignItems: "flex-end", justifyContent: "center" }}>
      <Blk val={t.d} lbl="Dias" /><Sep /><Blk val={t.h} lbl="Horas" /><Sep /><Blk val={t.m} lbl="Min" /><Sep /><Blk val={t.s} lbl="Seg" />
    </div>
  );
}

/* ─── SCREEN MOCK ─── */
function ScreenMock({ title, items = [] }) {
  return (
    <div style={{
      background: C.card, borderRadius: 14, border: `1px solid ${C.border}`,
      overflow: "hidden", boxShadow: `0 20px 60px rgba(0,0,0,0.4)`,
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
function FeatureCard({ icon: Icon, title, desc, items = [] }) {
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
        boxShadow: hover ? `0 12px 40px rgba(0,0,0,0.3)` : "none",
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
function TestCard({ name, role, text, initials, stars = 5 }) {
  return (
    <div style={{
      background: C.card, borderRadius: 14, padding: 28,
      border: `1px solid ${C.border}`,
      display: "flex", flexDirection: "column", gap: 14,
    }}>
      <Stars n={stars} />
      <p style={{ fontSize: 14, color: C.text, lineHeight: 1.8, fontStyle: "italic", opacity: 0.9, flex: 1 }}>
        "{text}"
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
function PriceCard({ name, price, originalPrice, features, highlight = false, badge: badgeText }) {
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
      {originalPrice && (
        <div style={{ fontSize: 12, color: C.textMuted, textDecoration: "line-through", marginBottom: 4 }}>
          Era R$ {originalPrice}/mês
        </div>
      )}
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
function FAQItem({ q, a }) {
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

/* ═══════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════ */
export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const W = { maxWidth: 1100, margin: "0 auto", padding: "0 24px" };
  const S = (extra = {}) => ({ padding: "100px 0", ...extra });

  const tabs = [
    {
      icon: FileText, label: "Ordem de Serviço",
      title: "OS digital em segundos. Cliente feliz no WhatsApp.",
      desc: "Abra, acompanhe e finalize ordens de serviço em menos de 1 minuto. O cliente recebe tudo pelo WhatsApp — placa, km, óleo, filtros, valor. Histórico completo de cada veículo na palma da mão.",
      items: ["Preenchimento por placa (busca automática)", "OS enviada por WhatsApp com 1 clique", "Histórico completo por veículo e cliente", "Assinatura digital e recibo instantâneo"],
      mock: {
        title: "Ordens de Serviço — Hoje",
        items: [
          { label: "ABC-1234 · Troca óleo + filtro ar", value: "R$ 187", up: true },
          { label: "XYZ-5678 · Troca óleo completa", value: "R$ 149" },
          { label: "DEF-9012 · Revisão 10.000 km", value: "R$ 320" },
          { label: "GHI-3456 · Filtro combustível", value: "R$ 89" },
        ]
      }
    },
    {
      icon: Package, label: "Estoque",
      title: "Nunca mais perca uma venda por falta de produto.",
      desc: "Alertas automáticos quando o estoque está baixo. Catálogo completo de filtros e óleos integrado. Saiba exatamente o que tem, o que está acabando e o que precisa pedir — antes de precisar.",
      items: ["Alerta de estoque mínimo configurável", "Catálogo de filtros por modelo de veículo", "Entrada e saída com histórico completo", "Valor em estoque em tempo real"],
      mock: {
        title: "Estoque — Alertas Ativos",
        items: [
          { label: "Óleo Sintético 5W30 — Estoque baixo", value: "3 un", down: true },
          { label: "Filtro de óleo universal — OK", value: "28 un", up: true },
          { label: "Filtro ar Palio/Uno — Reposição", value: "1 un", down: true },
          { label: "Aditivo radiador — OK", value: "15 un" },
        ]
      }
    },
    {
      icon: BarChart3, label: "Financeiro",
      title: "Saiba exatamente quanto você lucra. Todo dia.",
      desc: "Chega de virar o mês sem saber se sobrou dinheiro. Dashboard de faturamento em tempo real, contas a pagar e receber, relatórios por período. Tudo o que você precisa para crescer com segurança.",
      items: ["Dashboard de faturamento diário/mensal", "Controle de contas a pagar e receber", "Relatório de lucro líquido por serviço", "Exportação para contabilidade"],
      mock: {
        title: "Financeiro — Resumo Mensal",
        items: [
          { label: "Receita total — Março 2026", value: "R$ 18.430", up: true },
          { label: "Custos (peças + insumos)", value: "R$ 6.210", down: true },
          { label: "Lucro líquido", value: "R$ 12.220", up: true },
          { label: "Ticket médio por OS", value: "R$ 163" },
        ]
      }
    },
    {
      icon: Users, label: "Clientes",
      title: "Clientes que somem? Nunca mais com o A1 ERP.",
      desc: "CRM completo com histórico de visitas, lembretes automáticos de retorno e notificações de troca no prazo certo. Aumente a recorrência sem precisar ligar para ninguém.",
      items: ["Histórico de visitas e serviços por cliente", "Lembretes automáticos de retorno por km/data", "Notificações por WhatsApp no nome do cliente", "Ranking de clientes mais rentáveis"],
      mock: {
        title: "Clientes — Lembretes da Semana",
        items: [
          { label: "João Silva — Troca vence amanhã", value: "Notificar", up: true },
          { label: "Maria Costa — 5.000 km desde a troca", value: "Notificar" },
          { label: "Carlos Mendes — 3 meses sem visita", value: "Reengajar", down: true },
          { label: "Ana Lima — Agendado para sexta", value: "OK", up: true },
        ]
      }
    },
  ];

  const painPoints = [
    { icon: AlertTriangle, title: "Caderno e planilha te trairão", desc: "Dados rasurados, planilha travada, anotação perdida. Você não tem visibilidade — e isso custa caro." },
    { icon: Package, title: "Estoque vira adivinhação", desc: "Óleo parado encalhado ou falta de filtro bem na hora da venda. Dinheiro morto em prateleira ou venda perdida." },
    { icon: Users, title: "Cliente sumiu — e você nem percebeu", desc: "Sem lembrete de retorno, o cliente vai para o concorrente que mandou um WhatsApp no dia certo." },
    { icon: DollarSign, title: "Não sabe quanto sobra de verdade", desc: "Fatura R$ 20 mil por mês, mas não sabe se lucrou R$ 2 mil ou R$ 12 mil. Sem dados, crescer é sorte." },
  ];

  return (
    <div style={{ background: C.bg, color: C.text, fontFamily: "'Plus Jakarta Sans',sans-serif", overflowX: "hidden" }}>
      <style>{GLOBAL}</style>

      {/* ── ANNOUNCEMENT BAR ── */}
      <div style={{
        background: C.brand, overflow: "hidden", height: 36, display: "flex", alignItems: "center",
      }}>
        <div style={{ display: "flex", animation: "ticker 18s linear infinite", whiteSpace: "nowrap" }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} style={{
              fontSize: 12, fontWeight: 700, color: C.btnText,
              fontFamily: "'Outfit'", letterSpacing: 0.5, paddingRight: 64,
            }}>
              ⚡ PRÉ-VENDA ABERTA · 40% OFF VITALÍCIO PARA OS 50 PRIMEIROS · APENAS 12 VAGAS RESTANTES · SEM FIDELIDADE · CANCELE QUANDO QUISER
            </span>
          ))}
        </div>
      </div>

      {/* ── NAVBAR ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        background: scrolled ? C.navBg : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? `1px solid ${C.border}` : "none",
        transition: "all 0.35s ease",
        padding: "0 24px",
        marginTop: 36,
      }}>
        <div style={{ ...W, display: "flex", justifyContent: "space-between", alignItems: "center", height: 68 }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img src="/logo-sq.png" alt="A1 ERP" style={{ width: 34, height: 34, objectFit: "contain" }} />
            <span style={{ fontFamily: "'Outfit'", fontWeight: 700, fontSize: 17, color: C.text }}>A1 ERP</span>
          </div>

          {/* Nav links */}
          <div className="hide-sm" style={{ display: "flex", gap: 32, alignItems: "center" }}>
            {[["#recursos", "Recursos"], ["#depoimentos", "Depoimentos"], ["#planos", "Planos"], ["#faq", "FAQ"]].map(([href, label]) => (
              <a key={href} href={href} className="a1-link">{label}</a>
            ))}
          </div>

          {/* CTA */}
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <div className="hide-sm">
              <CTABtn small>Acesso antecipado</CTABtn>
            </div>
            <button
              className="hide-sm" // show only on mobile as menu trigger (add show logic if needed)
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: "none", border: "none", color: C.textMuted, cursor: "pointer", display: "none" }}
            >
              {menuOpen ? <X size={22} /> : <></>}
            </button>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <header style={{ position: "relative", paddingTop: 180, paddingBottom: 100, overflow: "hidden" }}>
        {/* Gradient orbs */}
        <div style={{
          position: "absolute", top: -100, right: "5%", width: 700, height: 700,
          borderRadius: "50%", background: `radial-gradient(circle, rgba(245,197,24,0.12) 0%, transparent 65%)`,
          animation: "orb-a 14s ease-in-out infinite", pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: -200, left: "-5%", width: 600, height: 600,
          borderRadius: "50%", background: `radial-gradient(circle, rgba(245,197,24,0.07) 0%, transparent 65%)`,
          animation: "orb-b 18s ease-in-out infinite", pointerEvents: "none",
        }} />
        {/* Grid pattern */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: `linear-gradient(${C.border} 1px, transparent 1px), linear-gradient(90deg, ${C.border} 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 100%)",
        }} />

        <div style={W}>
          <FadeIn style={{ textAlign: "center" }}>
            <Badge icon={Zap}>Pré-venda · 50 vagas com 40% off</Badge>

            <h1 style={{
              fontFamily: "'Outfit'", fontWeight: 900,
              fontSize: "clamp(36px, 5.5vw, 68px)",
              lineHeight: 1.06, letterSpacing: -2,
              margin: "28px auto 0", maxWidth: 860,
            }}>
              Sua oficina de troca de óleo{" "}
              <span style={{
                background: `linear-gradient(90deg, ${C.brand} 0%, ${C.brandLight} 60%, ${C.brand} 100%)`,
                backgroundSize: "200%",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>
                no controle total.
              </span>
            </h1>

            <p style={{
              fontSize: "clamp(16px, 2vw, 19px)",
              color: C.textMuted, lineHeight: 1.75,
              margin: "24px auto 0", maxWidth: 580,
            }}>
              O único ERP feito por quem vive a rotina de troca de óleo.
              Controle estoque, clientes, financeiro e OS —&nbsp;
              <strong style={{ color: C.text, fontWeight: 600 }}>tudo em um lugar, sem complicação.</strong>
            </p>
          </FadeIn>

          <FadeIn delay={0.18} style={{ textAlign: "center", marginTop: 40 }}>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <CTABtn>Garantir minha vaga com 40% OFF</CTABtn>
              <CTABtn secondary icon={Play}>Ver demonstração</CTABtn>
            </div>
            <p style={{ fontSize: 13, color: C.textMuted, marginTop: 14, display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
              <Lock size={12} strokeWidth={2.5} style={{ color: C.brand }} />
              Sem fidelidade · Cancele quando quiser · 7 dias de garantia
            </p>
          </FadeIn>

          {/* Hero mockup */}
          <FadeIn delay={0.32} style={{ marginTop: 72, maxWidth: 860, margin: "72px auto 0" }}>
            <div style={{
              borderRadius: 18, overflow: "hidden",
              border: `1px solid ${C.borderBrand}`,
              boxShadow: `0 0 0 1px ${C.border}, 0 40px 100px rgba(0,0,0,0.6), 0 0 80px ${C.brandGlow}`,
              background: C.card,
            }}>
              {/* Browser bar */}
              <div style={{ padding: "14px 20px", borderBottom: `1px solid ${C.border}`, display: "flex", alignItems: "center", gap: 8, background: C.card2 }}>
                {[C.red, "#F59E0B", C.green].map((c, i) => <div key={i} style={{ width: 11, height: 11, borderRadius: "50%", background: c }} />)}
                <div style={{ flex: 1, height: 22, borderRadius: 6, background: C.bg, marginLeft: 12, display: "flex", alignItems: "center", paddingLeft: 12 }}>
                  <span style={{ fontSize: 11, color: C.textSubtle }}>app.a1erp.com.br/dashboard</span>
                </div>
              </div>
              {/* Dashboard mock */}
              <div style={{ padding: 24, display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 }}>
                {[
                  { icon: DollarSign, label: "Faturamento Hoje", value: "R$ 1.847", sub: "+12% vs ontem", up: true },
                  { icon: FileText, label: "OS Abertas", value: "8", sub: "3 aguardando" },
                  { icon: Package, label: "Itens em Alerta", value: "2", sub: "Repor hoje", down: true },
                  { icon: Users, label: "Clientes Ativos", value: "143", sub: "+5 este mês", up: true },
                ].map((kpi, i) => (
                  <div key={i} style={{
                    background: C.card2, borderRadius: 12, padding: "16px 14px",
                    border: `1px solid ${C.border}`,
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                      <span style={{ fontSize: 11, color: C.textMuted, fontWeight: 600 }}>{kpi.label}</span>
                      <kpi.icon size={14} strokeWidth={2} style={{ color: C.brand, opacity: 0.7 }} />
                    </div>
                    <div style={{ fontFamily: "'Outfit'", fontSize: 22, fontWeight: 800, color: C.text, lineHeight: 1, marginBottom: 6 }}>{kpi.value}</div>
                    <div style={{ fontSize: 11, color: kpi.up ? C.green : kpi.down ? C.red : C.textMuted }}>{kpi.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Stats */}
          <FadeIn delay={0.45} style={{ marginTop: 72, display: "flex", justifyContent: "center", gap: 64, flexWrap: "wrap" }}>
            <StatNum end={7} suffix="+" label="Anos no ramo automotivo" />
            <StatNum end={500} suffix="+" label="Trocas de óleo realizadas" />
            <StatNum end={98} suffix="%" label="Satisfação dos clientes" />
            <StatNum end={40} suffix="%" label="OFF vitalício para os primeiros" />
          </FadeIn>
        </div>
      </header>

      {/* ── PAIN SECTION ── */}
      <section style={S()}>
        <div style={W}>
          <FadeIn style={{ textAlign: "center", marginBottom: 64 }}>
            <Badge icon={AlertTriangle}>O problema</Badge>
            <h2 style={{ fontFamily: "'Outfit'", fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, margin: "20px 0 16px", lineHeight: 1.2 }}>
              Você administra sua oficina no{" "}
              <span style={{ color: C.red }}>escuro</span>.
            </h2>
            <p style={{ fontSize: 16, color: C.textMuted, maxWidth: 520, margin: "0 auto" }}>
              Não é culpa sua — é que as ferramentas disponíveis nunca foram feitas para quem faz troca de óleo.
            </p>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16 }} className="grid-1-sm">
            {painPoints.map(({ icon: Icon, title, desc }, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div style={{
                  background: C.card, borderRadius: 14, padding: 28,
                  border: `1px solid ${C.border}`,
                }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 9, background: "rgba(239,68,68,0.08)",
                    border: "1px solid rgba(239,68,68,0.2)", display: "flex", alignItems: "center",
                    justifyContent: "center", color: C.red, marginBottom: 16,
                  }}>
                    <Icon size={18} strokeWidth={2} />
                  </div>
                  <h3 style={{ fontFamily: "'Outfit'", fontSize: 16, fontWeight: 700, color: C.text, marginBottom: 8 }}>{title}</h3>
                  <p style={{ fontSize: 14, color: C.textMuted, lineHeight: 1.7 }}>{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.4} style={{ textAlign: "center", marginTop: 52 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 12,
              background: C.brandGlow2, border: `1px solid ${C.borderBrand}`,
              borderRadius: 12, padding: "14px 24px",
            }}>
              <CheckCircle2 size={18} strokeWidth={2} style={{ color: C.brand }} />
              <span style={{ fontSize: 15, color: C.text, fontWeight: 500 }}>
                O A1 ERP resolve cada um desses problemas. <span style={{ color: C.brand, fontWeight: 700 }}>Veja como:</span>
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="recursos" style={{ ...S(), background: `linear-gradient(180deg, ${C.brandGlow3} 0%, transparent 60%)` }}>
        <div style={W}>
          <FadeIn style={{ textAlign: "center", marginBottom: 52 }}>
            <Badge icon={Layers}>A solução</Badge>
            <h2 style={{ fontFamily: "'Outfit'", fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, margin: "20px 0 16px", lineHeight: 1.2 }}>
              Tudo que sua oficina precisa.{" "}
              <span style={{ color: C.brand }}>Nada que não precisa.</span>
            </h2>
            <p style={{ fontSize: 16, color: C.textMuted, maxWidth: 500, margin: "0 auto" }}>
              Módulos pensados por quem viveu cada um desses problemas — dentro de uma oficina real.
            </p>
          </FadeIn>

          {/* Tabs */}
          <FadeIn delay={0.1}>
            <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", marginBottom: 40 }}>
              {tabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  style={{
                    display: "flex", alignItems: "center", gap: 8,
                    padding: "10px 18px", borderRadius: 9, cursor: "pointer",
                    border: `1px solid ${activeTab === i ? C.borderBrandHover : C.border}`,
                    background: activeTab === i ? C.brandGlow2 : C.card,
                    color: activeTab === i ? C.brand : C.textMuted,
                    fontSize: 13, fontWeight: 600, transition: "all 0.2s ease",
                    fontFamily: "'Plus Jakarta Sans',sans-serif",
                    outline: "none",
                  }}
                >
                  <tab.icon size={15} strokeWidth={2} />
                  {tab.label}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Tab content */}
          {tabs.map((tab, i) => i === activeTab && (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }} className="grid-1-md">
              <FadeIn style={{ paddingTop: 8 }}>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "5px 14px", borderRadius: 100,
                  background: C.brandGlow2, border: `1px solid ${C.borderBrand}`,
                  color: C.brand, fontSize: 11, fontWeight: 700,
                  letterSpacing: 1.5, textTransform: "uppercase",
                  fontFamily: "'Outfit'", marginBottom: 20,
                }}>
                  <tab.icon size={12} strokeWidth={2.5} /> Módulo — {tab.label}
                </div>
                <h3 style={{ fontFamily: "'Outfit'", fontSize: "clamp(22px,2.5vw,30px)", fontWeight: 800, lineHeight: 1.25, marginBottom: 14 }}>
                  {tab.title}
                </h3>
                <p style={{ fontSize: 15, color: C.textMuted, lineHeight: 1.8, marginBottom: 24 }}>{tab.desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
                  {tab.items.map((item, j) => (
                    <div key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <CheckCircle2 size={16} strokeWidth={2} style={{ color: C.brand, flexShrink: 0, marginTop: 2 }} />
                      <span style={{ fontSize: 14, color: C.textMuted }}>{item}</span>
                    </div>
                  ))}
                </div>
                <CTABtn>Quero esse módulo</CTABtn>
              </FadeIn>
              <FadeIn delay={0.15}>
                <ScreenMock title={tab.mock.title} items={tab.mock.items} />
              </FadeIn>
            </div>
          ))}

          {/* Extra feature cards */}
          <FadeIn style={{ marginTop: 80 }}>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <p style={{ fontSize: 13, color: C.textMuted, textTransform: "uppercase", letterSpacing: 2, fontWeight: 700 }}>Também incluso em todos os planos</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16 }}>
              {[
                { icon: Smartphone, title: "Funciona no celular", desc: "Sem instalar nada. Acesse pelo navegador no celular, tablet ou computador. Em qualquer lugar." },
                { icon: Bell, title: "Notificações inteligentes", desc: "Lembretes automáticos de retorno enviados por WhatsApp no nome do cliente. Recorrência garantida." },
                { icon: TrendingUp, title: "Relatórios e KPIs", desc: "Métricas que mostram a saúde real do negócio — sem precisar de contador ou planilha." },
                { icon: PhoneCall, title: "Suporte humanizado", desc: "Fala direto com quem entende de troca de óleo. Nada de robô, nada de espera." },
              ].map((f, i) => (
                <FadeIn key={i} delay={i * 0.07}>
                  <FeatureCard icon={f.icon} title={f.title} desc={f.desc} />
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={S()}>
        <div style={W}>
          <FadeIn style={{ textAlign: "center", marginBottom: 64 }}>
            <Badge icon={RefreshCw}>Como funciona</Badge>
            <h2 style={{ fontFamily: "'Outfit'", fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, margin: "20px 0" }}>
              Do cadastro ao <span style={{ color: C.brand }}>primeiro resultado</span> em 24h.
            </h2>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 20, position: "relative" }}>
            {[
              { step: "01", icon: Clock, title: "Cadastre sua oficina", desc: "Crie sua conta em 2 minutos. Sem cartão de crédito, sem burocracia. Pronto para usar imediatamente." },
              { step: "02", icon: Wrench, title: "Importe seus dados", desc: "Traga seus clientes e produtos da planilha. Nossa equipe te ajuda gratuitamente nos planos Profissional e Rede." },
              { step: "03", icon: Gauge, title: "Veja o controle real", desc: "Em 24 horas você já sabe exatamente quanto lucra, o que tem em estoque e quem precisa voltar." },
            ].map(({ step, icon: Icon, title, desc }, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <div style={{
                  background: C.card, borderRadius: 14, padding: 28,
                  border: `1px solid ${C.border}`, position: "relative",
                }}>
                  <div style={{
                    fontFamily: "'Outfit'", fontSize: 56, fontWeight: 900, lineHeight: 1,
                    color: C.brandGlow, position: "absolute", top: 20, right: 20,
                    userSelect: "none",
                  }}>{step}</div>
                  <div style={{
                    width: 44, height: 44, borderRadius: 10, background: C.brandGlow2,
                    border: `1px solid ${C.borderBrand}`, display: "flex", alignItems: "center",
                    justifyContent: "center", color: C.brand, marginBottom: 18,
                  }}>
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <h3 style={{ fontFamily: "'Outfit'", fontSize: 17, fontWeight: 700, marginBottom: 8, color: C.text }}>{title}</h3>
                  <p style={{ fontSize: 14, color: C.textMuted, lineHeight: 1.75 }}>{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── URGENCY ── */}
      <section style={{ ...S({ padding: "80px 0" }), background: `linear-gradient(180deg, transparent, ${C.brandGlow3} 50%, transparent)` }}>
        <div style={W}>
          <FadeIn style={{ textAlign: "center" }}>
            <Badge icon={Clock}>Oferta por tempo limitado</Badge>
            <h2 style={{ fontFamily: "'Outfit'", fontSize: "clamp(26px,3.5vw,40px)", fontWeight: 800, margin: "20px 0 12px" }}>
              Essa condição <span style={{ color: C.brand }}>não vai se repetir.</span>
            </h2>
            <p style={{ color: C.textMuted, fontSize: 16, maxWidth: 500, margin: "0 auto 40px" }}>
              Os primeiros 50 assinantes garantem 40% OFF vitalício e acesso a todos os módulos antes de qualquer um. Depois disso, o preço sobe para novos clientes.
            </p>
          </FadeIn>
          <FadeIn delay={0.1} style={{ display: "flex", justifyContent: "center" }}>
            <div style={{
              background: C.card, borderRadius: 20, padding: "40px 48px",
              border: `1px solid ${C.borderBrand}`,
              boxShadow: `0 0 60px ${C.brandGlow}`,
              maxWidth: 560, width: "100%",
            }}>
              <p style={{ fontSize: 12, color: C.textMuted, textTransform: "uppercase", letterSpacing: 2, marginBottom: 24, textAlign: "center" }}>A oferta encerra em</p>
              <Countdown />
              <div style={{ marginTop: 36, display: "flex", justifyContent: "center" }}>
                <CTABtn>Quero garantir 40% OFF vitalício</CTABtn>
              </div>
              <div style={{ display: "flex", justifyContent: "center", gap: 24, marginTop: 20, flexWrap: "wrap" }}>
                {[
                  [Shield, "Sem fidelidade"],
                  [RefreshCw, "Cancele quando quiser"],
                  [PhoneCall, "Suporte humanizado"],
                ].map(([Icon, txt], i) => (
                  <span key={i} style={{ fontSize: 12, color: C.textMuted, display: "flex", alignItems: "center", gap: 5 }}>
                    <Icon size={11} strokeWidth={2} style={{ color: C.brand }} /> {txt}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2} style={{ maxWidth: 420, margin: "40px auto 0" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 8 }}>
              <span style={{ color: C.textMuted }}>Vagas preenchidas</span>
              <span style={{ color: C.brand, fontWeight: 700 }}>38 / 50</span>
            </div>
            <div style={{ height: 8, borderRadius: 100, background: C.card2, overflow: "hidden" }}>
              <div style={{
                width: "76%", height: "100%", borderRadius: 100,
                background: `linear-gradient(90deg, ${C.brandDark}, ${C.brand})`,
                animation: "blink 2.5s ease-in-out infinite",
              }} />
            </div>
            <p style={{ fontSize: 12, color: C.textMuted, marginTop: 8, textAlign: "center" }}>
              <span style={{ color: C.brand, fontWeight: 700 }}>12 vagas</span> restantes com desconto vitalício
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="depoimentos" style={S()}>
        <div style={W}>
          <FadeIn style={{ textAlign: "center", marginBottom: 64 }}>
            <Badge icon={Star}>Prova social</Badge>
            <h2 style={{ fontFamily: "'Outfit'", fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, margin: "20px 0" }}>
              Quem testou, <span style={{ color: C.brand }}>não voltou para o caderno.</span>
            </h2>
          </FadeIn>

          {/* Video testimonial */}
          <FadeIn delay={0.1} style={{ maxWidth: 640, margin: "0 auto 56px" }}>
            <div style={{
              background: C.card, borderRadius: 14, overflow: "hidden",
              border: `1px solid ${C.borderBrand}`,
              boxShadow: `0 0 40px ${C.brandGlow}`,
              aspectRatio: "16/9", display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", position: "relative",
            }}>
              <div style={{
                position: "absolute", inset: 0,
                background: `radial-gradient(circle at center, ${C.brandGlow2} 0%, transparent 70%)`,
              }} />
              <div style={{
                width: 72, height: 72, borderRadius: "50%",
                background: C.brand, display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: `0 0 40px ${C.brandGlow}`,
                transition: "transform 0.2s, box-shadow 0.2s",
              }}>
                <Play size={28} strokeWidth={0} fill={C.btnText} style={{ marginLeft: 4 }} />
              </div>
              <div style={{
                position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)",
                background: "rgba(0,0,0,0.7)", borderRadius: 8, padding: "8px 16px",
                backdropFilter: "blur(8px)",
              }}>
                <span style={{ fontSize: 13, color: C.text, fontWeight: 600 }}>Depoimento em vídeo — Cliente beta</span>
              </div>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 20 }}>
            <FadeIn>
              <TestCard
                initials="RM" name="Ricardo Mendes" role="Oficina Rápida — Osasco, SP"
                text="Antes eu perdia tempo anotando tudo no caderno e ainda assim não sabia quanto lucrava. Com o A1 ERP fechei o mês passado sabendo exatamente: R$ 14.200 de receita e R$ 8.900 de lucro. Isso mudou tudo."
              />
            </FadeIn>
            <FadeIn delay={0.1}>
              <TestCard
                initials="CL" name="Carlos Lima" role="Auto Center Express — Barueri, SP"
                text="Meu funcionário aprendeu a usar em literalmente 10 minutos. O envio da OS por WhatsApp é um diferencial absurdo — cliente adora receber o comprovante na hora. Profissionaliza muito a imagem da oficina."
              />
            </FadeIn>
            <FadeIn delay={0.2}>
              <TestCard
                initials="AF" name="Ana Ferreira" role="Troca Certa — Campinas, SP"
                text="Finalmente um sistema que entende que troca de óleo é um negócio específico. Não é um ERP genérico adaptado. Foi feito pra gente — e dá pra sentir isso em cada detalhe do sistema."
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── AUTHORITY ── */}
      <section style={{ ...S(), background: `linear-gradient(180deg, ${C.brandGlow3} 0%, transparent 60%)` }}>
        <div style={W}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="grid-1-md">
            <FadeIn>
              <div style={{
                borderRadius: 16, overflow: "hidden", aspectRatio: "1/1",
                background: `linear-gradient(135deg, ${C.card2} 0%, ${C.card} 100%)`,
                border: `1px solid ${C.borderBrand}`,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <div style={{ textAlign: "center" }}>
                  <Award size={56} strokeWidth={1} style={{ color: C.brand, opacity: 0.5, marginBottom: 16 }} />
                  <p style={{ fontSize: 13, color: C.textMuted }}>Foto do fundador / equipe</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <Badge icon={Award}>Quem criou</Badge>
              <h2 style={{ fontFamily: "'Outfit'", fontSize: "clamp(26px,3vw,36px)", fontWeight: 800, margin: "20px 0 16px", lineHeight: 1.2 }}>
                Feito por quem <span style={{ color: C.brand }}>vive a oficina</span> todo dia.
              </h2>
              <p style={{ color: C.textMuted, lineHeight: 1.85, fontSize: 15, marginBottom: 16 }}>
                O A1 ERP não nasceu em uma sala de coworking. Nasceu dentro de uma oficina de troca de óleo real — a nossa.
              </p>
              <p style={{ color: C.textMuted, lineHeight: 1.85, fontSize: 15, marginBottom: 28 }}>
                São <strong style={{ color: C.text }}>mais de 7 anos</strong> atendendo clientes, gerenciando estoque e entendendo na pele os desafios do dia a dia. Cada funcionalidade resolve um problema que nós mesmos enfrentamos.
              </p>
              <div style={{ display: "flex", gap: 40 }}>
                {[{ v: "7+", l: "Anos no ramo" }, { v: "500+", l: "Trocas realizadas" }, { v: "1", l: "Missão clara" }].map((s, i) => (
                  <div key={i}>
                    <div style={{ fontFamily: "'Outfit'", fontSize: 34, fontWeight: 900, color: C.brand }}>{s.v}</div>
                    <div style={{ fontSize: 13, color: C.textMuted, marginTop: 4 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="planos" style={S()}>
        <div style={W}>
          <FadeIn style={{ textAlign: "center", marginBottom: 64 }}>
            <Badge icon={DollarSign}>Planos</Badge>
            <h2 style={{ fontFamily: "'Outfit'", fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, margin: "20px 0 12px" }}>
              Investimento que se paga{" "}
              <span style={{ color: C.brand }}>na primeira semana.</span>
            </h2>
            <p style={{ color: C.textMuted, fontSize: 16, maxWidth: 500, margin: "0 auto" }}>
              Quanto você perde por mês sem controle de estoque? Com certeza mais do que qualquer plano abaixo.
            </p>
          </FadeIn>
          <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap", alignItems: "flex-start" }}>
            <FadeIn>
              <PriceCard
                name="Essencial" price="97" originalPrice="147"
                features={["Ordem de Serviço digital", "Cadastro de clientes", "Controle de estoque básico", "Acesso mobile", "Suporte por WhatsApp"]}
              />
            </FadeIn>
            <FadeIn delay={0.08}>
              <PriceCard
                name="Profissional" price="147" originalPrice="247"
                highlight badge="Mais popular"
                features={["Tudo do Essencial, mais:", "Financeiro completo e relatórios", "KPIs e dashboard executivo", "Notificações automáticas de retorno", "Catálogo de filtros integrado", "Suporte prioritário"]}
              />
            </FadeIn>
            <FadeIn delay={0.16}>
              <PriceCard
                name="Rede" price="247" originalPrice="397"
                features={["Tudo do Profissional, mais:", "Multi-unidades ilimitadas", "Gestão de equipe e permissões", "API de integração", "Onboarding dedicado", "Consultoria de implantação"]}
              />
            </FadeIn>
          </div>
          <FadeIn delay={0.25} style={{ textAlign: "center", marginTop: 36 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8, flexWrap: "wrap", justifyContent: "center",
              background: C.brandGlow2, border: `1px solid ${C.borderBrand}`, borderRadius: 10, padding: "10px 20px",
              fontSize: 13, color: C.textMuted,
            }}>
              <CheckCircle2 size={14} strokeWidth={2} style={{ color: C.brand }} />
              Todos os planos com <strong style={{ color: C.brand }}>40% OFF vitalício</strong> para os 50 primeiros
              <span style={{ color: C.textSubtle }}>·</span> Sem fidelidade
              <span style={{ color: C.textSubtle }}>·</span> Cancele quando quiser
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── GUARANTEE ── */}
      <section style={S({ padding: "80px 0" })}>
        <div style={W}>
          <FadeIn>
            <div style={{
              background: `linear-gradient(135deg, ${C.card} 0%, rgba(245,197,24,0.04) 100%)`,
              borderRadius: 20, padding: "48px 52px",
              border: `1px solid ${C.borderBrand}`,
              display: "flex", gap: 40, alignItems: "center", flexWrap: "wrap",
              boxShadow: `0 0 60px rgba(245,197,24,0.08)`,
            }}>
              <div style={{
                width: 108, height: 108, borderRadius: "50%", flexShrink: 0,
                background: C.brandGlow2, border: `2px solid ${C.brand}`,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Shield size={44} strokeWidth={1.25} style={{ color: C.brand }} />
              </div>
              <div style={{ flex: 1, minWidth: 260 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: C.brand, textTransform: "uppercase", letterSpacing: 2, marginBottom: 10 }}>Garantia incondicional</div>
                <h3 style={{ fontFamily: "'Outfit'", fontSize: "clamp(22px,2.5vw,28px)", fontWeight: 800, marginBottom: 12, lineHeight: 1.2 }}>
                  7 dias de garantia. <span style={{ color: C.brand }}>O risco é todo nosso.</span>
                </h3>
                <p style={{ color: C.textMuted, lineHeight: 1.8, fontSize: 15 }}>
                  Teste o A1 ERP por 7 dias completos. Se não transformar a gestão da sua oficina,
                  devolvemos 100% do seu dinheiro — sem perguntas, sem burocracia, sem enrolação.{" "}
                  <strong style={{ color: C.text }}>Simples assim.</strong>
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={S()}>
        <div style={{ ...W, maxWidth: 700 }}>
          <FadeIn style={{ textAlign: "center", marginBottom: 52 }}>
            <Badge icon={MessageSquare}>Dúvidas frequentes</Badge>
            <h2 style={{ fontFamily: "'Outfit'", fontSize: "clamp(26px,3.5vw,40px)", fontWeight: 800, margin: "20px 0" }}>
              Ainda tem dúvidas?
            </h2>
          </FadeIn>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { q: "Preciso instalar algo no computador?", a: "Não. O A1 ERP funciona 100% no navegador — celular, tablet ou computador. Acesse de qualquer lugar sem instalar nada." },
              { q: "Funciona para oficinas pequenas, com poucos funcionários?", a: "Sim! Foi criado justamente para oficinas de 1 a 10 funcionários. Simples de usar, sem treinamento longo. Seu funcionário aprende em 10 minutos." },
              { q: "Consigo importar meus dados de planilha?", a: "Sim. Nossa equipe ajuda na importação gratuitamente nos planos Profissional e Rede. Para o plano Essencial, disponibilizamos guia passo a passo." },
              { q: "Posso cancelar a qualquer momento?", a: "Sim. Sem fidelidade, sem multa, sem burocracia. Cancele quando quiser com um clique. Mas apostamos que você não vai querer." },
              { q: "O desconto de 40% é vitalício mesmo?", a: "Sim. Quem entra na pré-venda trava o preço para sempre com 40% OFF. O valor nunca aumenta para você, mesmo quando subir para novos clientes." },
              { q: "Como funciona o suporte?", a: "Suporte humanizado via WhatsApp. Nenhum robô, nenhuma fila. Você fala direto com quem entende de troca de óleo e do sistema." },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.04}>
                <FAQItem q={item.q} a={item.a} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ ...S(), textAlign: "center", background: `linear-gradient(180deg, transparent, ${C.brandGlow3} 50%, transparent)`, position: "relative" }}>
        <div style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
          width: 600, height: 400,
          background: `radial-gradient(ellipse, ${C.brandGlow} 0%, transparent 70%)`,
          pointerEvents: "none",
        }} />
        <div style={W}>
          <FadeIn>
            <h2 style={{ fontFamily: "'Outfit'", fontSize: "clamp(28px,4.5vw,52px)", fontWeight: 900, lineHeight: 1.12, marginBottom: 20, maxWidth: 700, margin: "0 auto 20px" }}>
              Sua oficina merece{" "}
              <span style={{ textDecoration: "line-through", opacity: 0.3 }}>caderno</span>{" "}
              <span style={{ color: C.brand }}>não.</span>{" "}
              Merece crescer.
            </h2>
            <p style={{ color: C.textMuted, fontSize: 17, maxWidth: 480, margin: "0 auto 40px" }}>
              Não deixe para depois. Restam apenas <strong style={{ color: C.brand }}>12 vagas</strong> com 40% OFF vitalício. Essa oferta não se repete.
            </p>
            <CTABtn>Garantir minha vaga agora</CTABtn>
            <div style={{ marginTop: 24, display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
              {[
                [Lock, "Pagamento seguro"],
                [Shield, "7 dias de garantia"],
                [PhoneCall, "Suporte via WhatsApp"],
              ].map(([Icon, txt], i) => (
                <span key={i} style={{ fontSize: 13, color: C.textMuted, display: "flex", alignItems: "center", gap: 6 }}>
                  <Icon size={13} strokeWidth={2} style={{ color: C.brand }} /> {txt}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ padding: "48px 0", borderTop: `1px solid ${C.border}` }}>
        <div style={{ ...W, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img src="/logo-sq.png" alt="A1 ERP" style={{ width: 28, height: 28, objectFit: "contain" }} />
            <span style={{ fontFamily: "'Outfit'", fontWeight: 600, fontSize: 14, color: C.textMuted }}>A1 ERP ERP</span>
          </div>
          <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
            {["Privacidade", "Termos de Uso", "Contato"].map(lbl => (
              <a key={lbl} href="#" style={{ fontSize: 13, color: C.textSubtle, textDecoration: "none", transition: "color 0.2s", cursor: "pointer" }}
                onMouseEnter={e => e.target.style.color = C.textMuted}
                onMouseLeave={e => e.target.style.color = C.textSubtle}
              >{lbl}</a>
            ))}
          </div>
          <div style={{ fontSize: 13, color: C.textSubtle }}>© 2026 A1 ERP. Todos os direitos reservados.</div>
        </div>
      </footer>
    </div>
  );
}
