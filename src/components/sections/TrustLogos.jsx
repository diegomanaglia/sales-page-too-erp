import React from 'react';
import Container from '../ui/Container';

export default function TrustLogos() {
  return (
    <section className="py-10 border-t border-neutral-200">
      <Container>
        <p className="text-center text-sm mb-6 text-brand-muted">
          Confiado por oficinas que querem padronização e rapidez
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 opacity-80">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-10 rounded-md bg-neutral-50 border border-neutral-200" />
          ))}
        </div>
      </Container>
    </section>
  );
}