import React from 'react';
import Container from '../ui/Container';
import Plan from '../ui/Plan';

export default function Pricing() {
  const plans = [
    { 
      name: "Essencial", 
      price: "R$ 79", 
      periodicity: "mês", 
      features: ["1 usuário", "OS ilimitadas", "Relatórios básicos", "Suporte por e-mail"], 
      highlight: false 
    },
    { 
      name: "Profissional", 
      price: "R$ 149", 
      periodicity: "mês", 
      features: ["Até 5 usuários", "Controle de estoque", "Lucro por serviço", "Suporte prioritário"], 
      highlight: true 
    },
    { 
      name: "Enterprise", 
      price: "Sob consulta", 
      periodicity: "mês", 
      features: ["Usuários ilimitados", "APIs e integrações", "Treinamento dedicado", "SLA empresarial"], 
      highlight: false 
    },
  ];

  return (
    <section id="pricing" className="py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl sm:text-4xl font-semibold">
            Planos simples e transparentes
          </h2>
          <p className="mt-3 text-brand-secondary">
            Escolha o plano ideal para a sua operação.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <Plan key={plan.name} {...plan} />
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-brand-muted">
          Teste grátis por 7 dias. Sem cartão de crédito.
        </p>
      </Container>
    </section>
  );
}