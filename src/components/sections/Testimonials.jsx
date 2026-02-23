import React from 'react';
import Container from '../ui/Container';
import TestimonialCard from '../ui/TestimonialCard';

export default function Testimonials() {
    const testimonials = [
        {
            name: "Carlos S.",
            role: "Parceiro Beta · SP",
            quote: "Estamos testando a versão beta e já sinto que o sistema vai transformar nosso balcão."
        },
        {
            name: "Luana M.",
            role: "Parceira Beta · RJ",
            quote: "A equipe de desenvolvimento realmente escuta nossas sugestões. Recomendo entrar pro acesso antecipado."
        },
        {
            name: "João P.",
            role: "Parceiro Beta · MG",
            quote: "Design muito limpo e direto ao ponto. Exatamente o que faltava para troca de óleo."
        },
    ];

    return (
        <section className="py-20 border-t border-neutral-200">
            <Container>
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-2xl sm:text-4xl font-semibold">
                        Validado por oficinas parceiras
                    </h2>
                    <p className="mt-3 text-brand-secondary">
                        Veja o que os primeiros testadores estão achando da plataforma.
                    </p>
                </div>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial) => (
                        <TestimonialCard key={testimonial.name} {...testimonial} />
                    ))}
                </div>
            </Container>
        </section>
    );
}