import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'Sistema para Troca de Óleo e Oficinas | O ERP de Troca de Óleo',
  description:
    'O sistema para oficinas criado para o dia a dia da rampa. Garanta seu acesso antecipado ao ERP de troca de óleo mais ágil do mercado.',
  keywords:
    'sistema para troca de óleo, sistema para oficinas, erp troca de óleo, software automotivo, gestão de oficina',
  icons: {
    icon: '/logo-sq.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
