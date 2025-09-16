import React from 'react';
import { Check } from 'lucide-react';
import Container from '../ui/Container';
import { BRAND } from '../../utils/constants';

export default function Showcase() {
  return (
    <section className="py-20 border-t border-neutral-200">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div 
              className="inline-flex items-center rounded-full border px-3 py-1 text-xs" 
              style={{ 
                borderColor: "#ffe27a", 
                color: BRAND.primary, 
                backgroundColor: "#fff7cc" 
              }}
            >
              Destaque
            </div>
            <h3 className="mt-4 text-2xl font-semibold">
              Fechamento de OS com pagamento integrado
            </h3>
            <p className="mt-3 text-brand-secondary">
              Finalize serviços com cálculo automático de peças, mão de obra e descontos. 
              Exporte recibos e notas de forma simples.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-brand-secondary">
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4" style={{ color: BRAND.primary }} /> 
                Impressão otimizada
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4" style={{ color: BRAND.primary }} /> 
                Regras de preço por marca/modelo
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4" style={{ color: BRAND.primary }} /> 
                Relatório diário do caixa
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-3">
            <div 
              className="aspect-[4/3] w-full rounded-xl border border-neutral-200" 
              style={{ 
                background: "linear-gradient(135deg, rgba(255,205,0,0.15), rgba(59,130,246,0.10))" 
              }} 
            />
          </div>
        </div>
      </Container>
    </section>
  );
}