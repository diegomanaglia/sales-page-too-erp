export const C = {
  bg: "#080808",
  card: "#0F0F0F",
  card2: "#161616",
  cardHover: "#1C1C1C",
  text: "#F7F7F7",
  textMuted: "#787878",
  textSubtle: "#444444",
  brand: "#F5C518",
  brandDark: "#C49B00",
  brandLight: "#FFE066",
  brandGlow: "rgba(245,197,24,0.18)",
  brandGlow2: "rgba(245,197,24,0.08)",
  brandGlow3: "rgba(245,197,24,0.04)",
  border: "rgba(255,255,255,0.055)",
  borderBrand: "rgba(245,197,24,0.2)",
  borderBrandHover: "rgba(245,197,24,0.45)",
  navBg: "rgba(8,8,8,0.88)",
  btnText: "#0A0A0A",
  red: "#EF4444",
  green: "#22C55E",
};

export const GLOBAL_CSS = `
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
