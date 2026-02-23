import React from 'react';
import Container from '../ui/Container';

export default function Benefits() {
    const items = [
        {
            title: "Acesso exclusivo",
            text: "Seja um dos primeiros a testar e garanta vantagens vitalícias na assinatura."
        },
        {
            title: "Construído ao seu lado",
            text: "Seu feedback vira funcionalidade. Molde o sistema para a sua exata necessidade."
        },
        {
            title: "Gerador de lucro",
            text: "Focado 100% no modelo financeiro de troca de óleo, desde o dia zero."
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