import React from 'react';
import { ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

export default function CTA() {
  return (
    <section className="py-16">
      <Container>
        <div 
          className="rounded-2xl border border-neutral-200 bg-white p-8 text-center" 
          style={{ backgroundImage: "linear-gradient(135deg, #fff7cc 0%, #ffffff 70%)" }}
        >
          <h3 className="text-2xl font-semibold">
            Pronto para organizar sua oficina?
          </h3>
          <p className="mt-2 text-brand-secondary">
            Comece agora e veja o impacto já na primeira semana.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Button variant="primary" size="lg">
              Teste grátis <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg">
              Falar com vendas
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}