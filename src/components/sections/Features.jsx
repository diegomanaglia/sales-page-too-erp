import React from 'react';
import {
    Car, MessageSquare, Receipt, PieChart, AlertTriangle, Smartphone,
    Package, LineChart, TrendingUp, Users, Database, Droplets
} from 'lucide-react';
import Container from '../ui/Container';
import Feature from '../ui/Feature';

export default function Features() {
    const items = [
        {
            icon: Car,
            title: "Consulta Inteligente de Placa",
            desc: "Seleção rápida de dados completos do veículo baseados apenas na placa."
        },
        {
            icon: MessageSquare,
            title: "Aprovação via WhatsApp",
            desc: "Disparo de orçamentos pelo WhatsApp para que seu cliente aprove em 1 clique."
        },
        {
            icon: Package,
            title: "Controle de Estoque Completo",
            desc: "Baixa automática de peças e envio de alertas para você nunca ficar sem os filtros de maior saída."
        },
        {
            icon: LineChart,
            title: "Relatórios de Gestão",
            desc: "Dashboards claros para acompanhar vendas diárias, fluxo de produtos e o ticket médio da sua loja."
        },
        {
            icon: TrendingUp,
            title: "Aumento de até 30% no Lucro",
            desc: "Ao combater desperdícios e profissionalizar os orçamentos, visamos ampliar sua margem financeira."
        },
        {
            icon: Users,
            title: "Gerenciamento de Usuários",
            desc: "Acessos separados. Libere pro seu estoquista ou mecânico ver apenas o que você permitir."
        },
        {
            icon: Receipt,
            title: "Emissão de NF-e e NFS-e",
            desc: "Feche a ordem de serviço no sistema e a documentação fiscal já se resolve na hora."
        },
        {
            icon: Database,
            title: "Catálogo de Peças Integrado",
            desc: "Um banco de dados vivo para encontrar a peça certa. Nosso objetivo é acelerar suas buscas e orçamentos."
        },
        {
            icon: Droplets,
            title: "Tabela de Aplicação de Lubrificantes",
            desc: "Referência exata de qual óleo vai em cada motor diretamente no seu sistema, diminuindo erros."
        },
        {
            icon: PieChart,
            title: "Lucro Claro por Serviço",
            desc: "Relatórios transparentes sobre qual carro ou serviço coloca dinheiro no seu bolso."
        },
        {
            icon: AlertTriangle,
            title: "Alerta Automático de Estoque",
            desc: "Seja avisado imediatamente quando os filtros e óleos de maior giro começarem a faltar."
        },
        {
            icon: Smartphone,
            title: "Portal do Cliente Final",
            desc: "Painel web exclusivo para seu cliente consultar todo o histórico feito na sua mecânica."
        },
    ];

    return (
        <section id="features" className="py-20">
            <Container>
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight">
                        O <strong>sistema para oficinas</strong> que estamos construindo com você
                    </h2>
                    <p className="mt-3 text-brand-secondary">
                        Recursos validados pelo mercado desenvolvidos especificamente para a rotina de um <strong>sistema para troca de óleo</strong>.
                    </p>
                </div>
                <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
                    {items.map((feature) => (
                        <Feature key={feature.title} {...feature} />
                    ))}
                </div>
            </Container>
        </section>
    );
}