import React from 'react';
import Container from '../ui/Container';

export default function FAQ() {
  const faqs = [
    { 
      q: "Preciso instalar algo?", 
      a: "Não. Você acessa pelo navegador, em qualquer dispositivo." 
    },
    { 
      q: "Funciona no celular?", 
      a: "Sim, a interface é responsiva e otimizada para telas menores." 
    },
    { 
      q: "Posso importar meus dados?", 
      a: "Temos importadores CSV para clientes e produtos." 
    },
    { 
      q: "Como é o suporte?", 
      a: "Atendimento por e-mail e chat. Planos avançados têm suporte prioritário." 
    },
  ];

  return (
    <section id="faq" className="py-20 border-t border-neutral-200">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl sm:text-4xl font-semibold">
            Perguntas frequentes
          </h2>
          <p className="mt-3 text-brand-secondary">
            Tudo o que você precisa saber antes de começar.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-2xl border border-neutral-200 bg-white p-6">
              <h4 className="text-lg font-semibold">{faq.q}</h4>
              <p className="mt-2 text-sm text-brand-secondary">{faq.a}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}