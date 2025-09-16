import React from 'react';
import { ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { BRAND } from '../../utils/constants';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div 
        className="pointer-events-none absolute inset-0" 
        style={{
          background: "radial-gradient(1200px 600px at 50% -10%, rgba(255,205,0,0.18), transparent)",
        }} 
      />
      <Container className="pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-brand-secondary">
            <span 
              className="inline-flex h-2 w-2 rounded-full" 
              style={{ backgroundColor: BRAND.primary }} 
            /> 
            Versão para oficinas de troca de óleo
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
            Organize sua <span style={{ color: BRAND.primary }}>oficina</span> e ganhe tempo em cada OS
          </h1>
          <p className="mt-5 text-base sm:text-lg text-brand-secondary">
            Centralize ordens de serviço, estoque, clientes e pagamentos em uma única tela. Simples, rápido e pronto para o dia a dia da troca de óleo.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Button variant="primary" size="lg">
              Teste grátis
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg">
              Ver planos
            </Button>
          </div>
          <p className="mt-4 text-xs text-brand-muted">
            Sem cartão de crédito. Cancele quando quiser.
          </p>
        </div>
        <div className="mt-12 grid place-items-center">
          <div className="w-full max-w-5xl rounded-2xl border border-neutral-200 bg-white p-3">
            <div className="rounded-xl border border-neutral-200 bg-white p-2">
              <div
                className="aspect-[16/9] w-full rounded-lg grid grid-cols-12 gap-3 p-4"
                style={{ background: "linear-gradient(135deg, rgba(255,205,0,0.18), rgba(59,130,246,0.10))" }}
              >
                <div className="col-span-3 rounded-lg bg-neutral-50 border border-neutral-200" />
                <div className="col-span-9 rounded-lg bg-neutral-50 border border-neutral-200" />
                <div className="col-span-12 h-32 rounded-lg bg-neutral-50 border border-neutral-200" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}