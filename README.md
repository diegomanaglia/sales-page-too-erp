# Troca de Óleo Online ERP - Landing Page

Uma landing page moderna e responsiva para o sistema ERP de oficinas de troca de óleo, construída com React, Vite e Tailwind CSS.

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para interfaces de usuário
- **Vite** - Build tool rápido e moderno
- **Tailwind CSS** - Framework CSS utilitário
- **Lucide React** - Ícones SVG modernos
- **PostCSS** - Processador CSS

## 📁 Estrutura do Projeto

```
sales-page/
├── public/                 # Arquivos estáticos
├── src/
│   ├── components/
│   │   ├── sections/      # Componentes de seções da página
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Features.jsx
│   │   │   ├── Pricing.jsx
│   │   │   └── ...
│   │   └── ui/           # Componentes reutilizáveis
│   │       ├── Button.jsx
│   │       ├── Container.jsx
│   │       └── ...
│   ├── utils/
│   │   └── constants.js  # Constantes e configurações
│   ├── App.jsx          # Componente principal
│   ├── main.jsx         # Ponto de entrada
│   └── index.css        # Estilos globais
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🛠️ Instalação e Configuração

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para instalação

1. **Clone ou navegue até o diretório do projeto:**
   ```bash
   cd sales-page
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure os assets:**
   - Coloque o logo da empresa no diretório `public/` como `logo-sq.png`
   - Atualize as constantes em `src/utils/constants.js` se necessário

## 🚀 Executando o Projeto

### Desenvolvimento
```bash
npm run dev
```
O projeto será executado em `http://localhost:3000`

### Build para Produção
```bash
npm run build
```
Os arquivos otimizados serão gerados na pasta `dist/`

### Preview da Build
```bash
npm run preview
```
Visualize a versão de produção em `http://localhost:4173`

## 📦 Deploy

### Netlify
1. Faça build do projeto: `npm run build`
2. Faça upload da pasta `dist/` para o Netlify
3. Configure redirects se necessário

### Vercel
1. Conecte seu repositório ao Vercel
2. Configure o comando de build: `npm run build`
3. Configure o diretório de output: `dist`

### Servidor Web Tradicional
1. Execute `npm run build`
2. Copie o conteúdo da pasta `dist/` para seu servidor web
3. Configure o servidor para servir `index.html` para todas as rotas

## 🎨 Personalização

### Cores da Marca
Edite o arquivo `src/utils/constants.js` para alterar as cores:

```javascript
export const BRAND = {
  text: "#3e3e3f",      // Cor do texto principal
  primary: "#ffcd00",   // Cor primária (amarelo)
  secondary: "#5a5a5b", // Cor secundária
  muted: "#7b7b7c"      // Cor para textos secundários
};
```

### Tailwind CSS
As cores da marca também estão configuradas no `tailwind.config.js` para uso com classes utilitárias:

```javascript
colors: {
  brand: {
    text: '#3e3e3f',
    primary: '#ffcd00',
    secondary: '#5a5a5b',
    muted: '#7b7b7c'
  }
}
```

### Conteúdo
- Textos e informações da empresa: `src/utils/constants.js`
- Seções da página: arquivos em `src/components/sections/`
- Planos de preços: `src/components/sections/Pricing.jsx`
- FAQ: `src/components/sections/FAQ.jsx`

## 📱 Responsividade

O projeto é totalmente responsivo e otimizado para:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (até 767px)

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza a build de produção
- `npm run lint` - Executa o linter ESLint

## 📄 Licença

Este projeto foi desenvolvido para uso interno da empresa Troca de Óleo Online ERP.

## 🤝 Suporte

Para dúvidas ou suporte técnico, entre em contato através do e-mail ou telefone disponível no rodapé da página.