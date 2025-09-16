import React from 'react';
import { Phone } from 'lucide-react';
import Container from '../ui/Container';
import BrandBadge from '../ui/BrandBadge';
import { COMPANY_INFO } from '../../utils/constants';

export default function Footer() {
  const links = [
    { title: "Produto", items: ["Recursos", "Planos", "Segurança"] },
    { title: "Empresa", items: ["Sobre", "Carreiras", "Contato"] },
    { title: "Legal", items: ["Privacidade", "Termos", "Contratos"] },
  ];

  return (
    <footer className="border-t border-neutral-200 bg-white">
      <Container className="py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <BrandBadge />
          <p className="mt-4 text-sm text-brand-secondary">
            {COMPANY_INFO.description}
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-sm text-brand-secondary">
            <Phone className="h-4 w-4" /> 
            Suporte: {COMPANY_INFO.phone}
          </div>
        </div>
        {links.map((column) => (
          <div key={column.title}>
            <h5 className="text-sm font-semibold">{column.title}</h5>
            <ul className="mt-3 space-y-2 text-sm text-brand-secondary">
              {column.items.map((item) => (
                <li key={item}>
                  <a className="hover:opacity-80" href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
      <div className="py-6 border-t border-neutral-200 text-center text-xs text-brand-muted">
        © {COMPANY_INFO.year} {COMPANY_INFO.name}. Todos os direitos reservados.
      </div>
    </footer>
  );
}