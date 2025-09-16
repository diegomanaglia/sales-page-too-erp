import React from 'react';
import Container from '../ui/Container';

export default function Benefits() {
  const items = [
    { 
      title: "Treinamento em minutos", 
      text: "Equipe pronta no mesmo dia, sem curva de aprendizado." 
    },
    { 
      title: "Menos erro humano", 
      text: "Padronize ordens, preços e baixa de estoque." 
    },
    { 
      title: "Visão do negócio", 
      text: "Saiba quais serviços dão lucro e quais precisam de ajuste." 
    },
  ];

  return (
    <section className="py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((benefit) => (
            <div key={benefit.title} className="rounded-2xl p-6 border border-neutral-200 bg-white">
              <h4 className="text-lg font-semibold">{benefit.title}</h4>
              <p className="mt-2 text-sm text-brand-secondary">{benefit.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}