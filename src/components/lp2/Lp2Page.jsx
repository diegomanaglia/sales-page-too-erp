'use client';

import { useState, useEffect } from 'react';
import { themes } from './themes';
import FadeIn from '@/components/shared/FadeIn';
import Countdown from '@/components/shared/Countdown';
import StatNumber from '@/components/shared/StatNumber';
import CTAButton from './CTAButton';
import Badge from './Badge';
import MockImage from './MockImage';
import FeatureCard from './FeatureCard';
import TestimonialCard from './TestimonialCard';
import PriceCard from './PriceCard';
import FAQItem from './FAQItem';
import ThemeToggle from './ThemeToggle';

export default function Lp2Page() {
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

  const countdownColors = { value: t.yellow, label: t.textMuted, separator: t.yellow };
  const statColors = { value: t.yellow, label: t.textMuted };

  return (
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
            {["Recursos", "Depoimentos", "Planos", "FAQ"].map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{ color: t.textMuted, textDecoration: "none", fontSize: 14, fontWeight: 500, transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = t.text}
                onMouseLeave={e => e.target.style.color = t.textMuted}
              >{item}</a>
            ))}
            <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} theme={t} />
            <CTAButton small theme={t}>Acesso antecipado</CTAButton>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header style={{ ...sec({ paddingTop: 160, paddingBottom: 80 }), position: "relative" }}>
        <div style={{ position: "absolute", top: -100, right: -200, width: 600, height: 600, background: `radial-gradient(circle, ${t.subtleBg3} 0%, transparent 70%)`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -200, left: -100, width: 400, height: 400, background: `radial-gradient(circle, ${t.subtleBg2} 0%, transparent 70%)`, pointerEvents: "none" }} />
        <div style={cx}>
          <FadeIn style={{ textAlign: "center", maxWidth: 820, margin: "0 auto" }}>
            <Badge theme={t}>🔥 Pré-venda aberta — vagas limitadas</Badge>
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
              <CTAButton theme={t}>Garantir minha vaga agora</CTAButton>
              <CTAButton secondary theme={t}>Ver demonstração</CTAButton>
            </div>
            <p style={{ fontSize: 13, color: t.textMuted, marginTop: 16 }}>
              ✦ Primeiros 50 clientes com <span style={{ color: t.yellow, fontWeight: 700 }}>40% de desconto vitalício</span>
            </p>
          </FadeIn>
          <FadeIn delay={0.4} style={{ marginTop: 64, maxWidth: 900, margin: "64px auto 0" }}>
            <MockImage label="Vídeo de demonstração do sistema" ratio="56.25%" icon="▶" theme={t} />
          </FadeIn>
          <FadeIn delay={0.5} style={{ marginTop: 48, display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
            <StatNumber end={7} suffix="+" label="Anos no ramo automotivo" colors={statColors} />
            <StatNumber end={500} suffix="+" label="Trocas de óleo realizadas" colors={statColors} />
            <StatNumber end={98} suffix="%" label="Satisfação dos clientes" colors={statColors} />
          </FadeIn>
        </div>
      </header>

      {/* PAIN POINTS */}
      <section style={sec()}>
        <div style={cx}>
          <FadeIn style={{ textAlign: "center", marginBottom: 64 }}>
            <Badge theme={t}>O problema</Badge>
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
              <FadeIn key={i} delay={i * 0.1}>
                <FeatureCard icon={item.icon} title={item.title} desc={item.desc} theme={t} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="recursos" style={{ ...sec(), background: `linear-gradient(180deg, ${t.subtleBg} 0%, transparent 50%)` }}>
        <div style={cx}>
          <FadeIn style={{ textAlign: "center", marginBottom: 64 }}>
            <Badge theme={t}>A solução</Badge>
            <h2 style={{ fontFamily: "'Outfit'", fontSize: 36, fontWeight: 800, margin: "20px 0 16px", lineHeight: 1.2 }}>
              Tudo que sua oficina precisa. <span style={{ color: t.yellow }}>Nada que não precisa.</span>
            </h2>
            <p style={{ fontSize: 16, color: t.textMuted, maxWidth: 560, margin: "0 auto" }}>
              Módulos pensados por quem vive o dia a dia de uma troca de óleo há mais de 7 anos.
            </p>
          </FadeIn>

          {[
            { badge: "Módulo 1", title: "Ordem de Serviço Digital", desc: "Abra, acompanhe e finalize OS em segundos. O cliente recebe tudo por WhatsApp. Histórico completo de cada veículo — placa, km, óleo usado, filtros trocados.", feats: ["Preenchimento automático por placa", "Envio de OS por WhatsApp", "Histórico completo do veículo"], mockLabel: "Screenshot — Tela de Ordem de Serviço", textFirst: true },
            { badge: "Módulo 2", title: "Estoque Inteligente", desc: "Saiba exatamente o que tem, o que está acabando e o que precisa comprar. Alertas automáticos de estoque mínimo — nunca mais perca uma venda.", feats: ["Catálogo de filtros integrado", "Alerta de estoque baixo", "Controle de entrada e saída"], mockLabel: "Screenshot — Dashboard de Estoque", textFirst: false },
            { badge: "Módulo 3", title: "Financeiro Simplificado", desc: "Entradas, saídas, lucro real. Saiba exatamente quanto sua oficina fatura e quanto sobra no final do mês. Relatórios claros, sem precisar de contador.", feats: ["Dashboard de faturamento", "Controle de contas a pagar/receber", "Relatórios por período"], mockLabel: "Screenshot — Painel Financeiro", textFirst: true },
          ].map((mod, idx) => {
            const textBlock = (
              <FadeIn key={"t" + idx}>
                <Badge theme={t}>{mod.badge}</Badge>
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
            const mockBlock = <FadeIn key={"m" + idx} delay={0.15}><MockImage label={mod.mockLabel} ratio="65%" icon="🖥" theme={t} /></FadeIn>;
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
              ].map((f, i) => <FeatureCard key={i} icon={f.icon} title={f.title} desc={f.desc} theme={t} />)}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* URGENCY */}
      <section style={{ ...sec(), textAlign: "center", background: `linear-gradient(180deg, transparent, ${t.subtleBg2} 50%, transparent)` }}>
        <div style={cx}>
          <FadeIn>
            <Badge theme={t}>⏳ Oferta por tempo limitado</Badge>
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
              <Countdown colors={countdownColors} />
              <div style={{ marginTop: 32 }}><CTAButton theme={t}>Quero garantir 40% OFF vitalício</CTAButton></div>
              <div style={{ display: "flex", justifyContent: "center", gap: 24, marginTop: 24, flexWrap: "wrap" }}>
                {["Sem fidelidade", "Cancele quando quiser", "Suporte humanizado"].map((txt, i) => (
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
            <Badge theme={t}>Prova social</Badge>
            <h2 style={{ fontFamily: "'Outfit'", fontSize: 36, fontWeight: 800, margin: "20px 0 16px" }}>
              Quem já testou, <span style={{ color: t.yellow }}>aprovou.</span>
            </h2>
          </FadeIn>
          <FadeIn style={{ maxWidth: 700, margin: "0 auto 48px" }}>
            <MockImage label="Vídeo depoimento — Cliente beta" ratio="56.25%" icon="▶" theme={t} />
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            <FadeIn><TestimonialCard initials="RM" name="Ricardo Mendes" role="Oficina Rápida — Osasco, SP" text="Antes eu perdia tempo anotando tudo no caderno. Com o Alerta1 consigo controlar o estoque e saber quanto lucro em cada troca. É outro nível." theme={t} /></FadeIn>
            <FadeIn delay={0.1}><TestimonialCard initials="CL" name="Carlos Lima" role="Auto Center Express — Barueri, SP" text="O que mais me impressionou foi a simplicidade. Meu funcionário aprendeu a usar em 10 minutos. O envio da OS por WhatsApp é um diferencial absurdo." theme={t} /></FadeIn>
            <FadeIn delay={0.2}><TestimonialCard initials="AF" name="Ana Ferreira" role="Troca Certa — Campinas, SP" text="Finalmente um sistema que entende a rotina de quem faz troca de óleo. Não é um ERP genérico. Foi feito pra gente." theme={t} /></FadeIn>
          </div>
        </div>
      </section>

      {/* AUTHORITY */}
      <section style={{ ...sec(), background: `linear-gradient(180deg, ${t.subtleBg} 0%, transparent 50%)` }}>
        <div style={cx}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <FadeIn><MockImage label="Foto do fundador / equipe" ratio="100%" icon="📸" theme={t} /></FadeIn>
            <FadeIn delay={0.15}>
              <Badge theme={t}>Quem criou</Badge>
              <h2 style={{ fontFamily: "'Outfit'", fontSize: 32, fontWeight: 800, margin: "20px 0 16px", lineHeight: 1.2 }}>
                Feito por quem <span style={{ color: t.yellow }}>vive a oficina</span> todo dia.
              </h2>
              <p style={{ color: t.textMuted, lineHeight: 1.8, fontSize: 15, marginBottom: 16 }}>
                Não somos uma empresa de tecnologia que &quot;acha&quot; que sabe o que sua oficina precisa.
                O Alerta1 nasceu dentro de uma oficina de troca de óleo real — a nossa.
              </p>
              <p style={{ color: t.textMuted, lineHeight: 1.8, fontSize: 15, marginBottom: 24 }}>
                São <span style={{ color: t.text, fontWeight: 600 }}>mais de 7 anos</span> atendendo
                clientes, gerenciando estoque e entendendo na pele os desafios do dia a dia.
                Cada funcionalidade foi pensada para resolver problemas que nós mesmos enfrentamos.
              </p>
              <div style={{ display: "flex", gap: 32 }}>
                {[{ v: "7+", l: "Anos no ramo" }, { v: "500+", l: "Trocas realizadas" }, { v: "1", l: "Missão: simplificar" }].map((s, i) => (
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
            <Badge theme={t}>Planos</Badge>
            <h2 style={{ fontFamily: "'Outfit'", fontSize: 36, fontWeight: 800, margin: "20px 0 12px" }}>
              Investimento que se paga <span style={{ color: t.yellow }}>na primeira semana.</span>
            </h2>
            <p style={{ color: t.textMuted, fontSize: 16, maxWidth: 520, margin: "0 auto" }}>
              Quanto você perde por mês sem controle de estoque? Com certeza mais do que qualquer plano abaixo.
            </p>
          </FadeIn>
          <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
            <FadeIn><PriceCard name="Essencial" price="97" original="147" features={["Ordem de Serviço digital", "Cadastro de clientes", "Controle de estoque básico", "Acesso mobile", "Suporte por WhatsApp"]} theme={t} /></FadeIn>
            <FadeIn delay={0.1}><PriceCard name="Profissional" price="147" original="247" highlight badge="Mais popular" features={["Tudo do Essencial +", "Financeiro completo", "Relatórios e KPIs", "Notificações de retorno", "Catálogo de filtros integrado", "Suporte prioritário"]} theme={t} /></FadeIn>
            <FadeIn delay={0.2}><PriceCard name="Rede" price="247" original="397" features={["Tudo do Profissional +", "Multi-unidades", "Gestão de equipe", "API de integração", "Onboarding dedicado", "Consultoria de implantação"]} theme={t} /></FadeIn>
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
            <Badge theme={t}>Dúvidas frequentes</Badge>
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
            ].map((item, i) => <FadeIn key={i} delay={i * 0.05}><FAQItem q={item.q} a={item.a} theme={t} /></FadeIn>)}
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
            <CTAButton theme={t}>Quero começar agora</CTAButton>
            <div style={{ marginTop: 24, display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap" }}>
              {["🔒 Pagamento seguro", "✦ 7 dias de garantia", "📱 Suporte via WhatsApp"].map((txt, i) => (
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
          <div style={{ fontSize: 13, color: t.footerText }}>&copy; 2026 Alerta1. Todos os direitos reservados.</div>
        </div>
      </footer>
    </div>
  );
}
