import React from 'react';
import { Settings, BarChart3, Clock, Users, Shield, Smartphone } from 'lucide-react';
import Container from '../ui/Container';
import Feature from '../ui/Feature';

export default function Features() {
  const items = [
    { 
      icon: Settings, 
      title: "OS em segundos", 
      desc: "Abra, edite e finalize ordens de serviço sem burocracia e com histórico completo." 
    },
    { 
      icon: BarChart3, 
      title: "Lucro por serviço", 
      desc: "Relatórios claros de custos, margem e ticket médio por veículo e por cliente." 
    },
    { 
      icon: Clock, 
      title: "Agilidade no balcão", 
      desc: "Orçamentos rápidos, impressão em 1 clique e atalhos para o dia a dia." 
    },
    { 
      icon: Users, 
      title: "Clientes e veículos", 
      desc: "Histórico de serviços, placas, quilometragem e recomendações futuras." 
    },
    { 
      icon: Shield, 
      title: "Controle de estoque", 
      desc: "Baixa automática por OS, alertas de mínimo e reposição inteligente." 
    },
    { 
      icon: Smartphone, 
      title: "Funciona em qualquer dispositivo", 
      desc: "Interface responsiva pronta para celular, tablet e desktop." 
    },
  ];

  return (
    <section id="features" className="py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight">
            Tudo o que sua oficina precisa
          </h2>
          <p className="mt-3 text-brand-secondary">
            Recursos pensados especificamente para a rotina de troca de óleo.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((feature) => (
            <Feature key={feature.title} {...feature} />
          ))}
        </div>
      </Container>
    </section>
  );
}