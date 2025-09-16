import React from 'react';
import { ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import BrandBadge from '../ui/BrandBadge';
import Button from '../ui/Button';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-neutral-200">
      <Container className="py-4 flex items-center justify-between">
        <BrandBadge />
        <nav className="hidden md:flex items-center gap-8 text-sm text-brand-secondary">
          <a className="hover:opacity-80" href="#features">Recursos</a>
          <a className="hover:opacity-80" href="#pricing">Planos</a>
          <a className="hover:opacity-80" href="#faq">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="hidden sm:inline-flex">
            Entrar
          </Button>
          <Button variant="primary">
            Começar agora <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </header>
  );
}