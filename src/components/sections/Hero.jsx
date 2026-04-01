import { ArrowRight, ChevronDown } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { BRAND } from '@/utils/constants';

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col justify-center py-10">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(1200px 600px at 50% -10%, rgba(255,205,0,0.18), transparent)",
        }}
      />
      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
            Oficina organizada.<br />
            <span style={{ color: BRAND.primary }}>Construída com você.</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-brand-secondary">
            O <strong>ERP de troca de óleo</strong> que centraliza ordens de serviço, estoque e finanças em uma única tela. Sendo feito sob medida para a sua rotina.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full px-4 sm:px-0">
            <Button variant="primary" size="lg" as="a" href="#pricing" className="w-full sm:w-auto">
              Garantir Acesso Antecipado
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="mt-16 flex justify-center animate-bounce text-brand-secondary/60">
            <ChevronDown className="h-8 w-8" />
          </div>
        </div>
      </Container>
    </section>
  );
}
