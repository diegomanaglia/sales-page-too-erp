import React from 'react';
import Container from '../ui/Container';
import TestimonialCard from '../ui/TestimonialCard';

export default function Testimonials() {
  const testimonials = [
    { 
      name: "Carlos S.", 
      role: "Dono de oficina · SP", 
      quote: "Reduzi o tempo de atendimento e eliminei as planilhas." 
    },
    { 
      name: "Luana M.", 
      role: "Gestora · RJ", 
      quote: "Agora tenho visão clara do lucro por serviço e por cliente." 
    },
    { 
      name: "João P.", 
      role: "Chefe de oficina · MG", 
      quote: "Equipe aprendeu em uma tarde. Muito prático." 
    },
  ];

  return (
    <section className="py-20 border-t border-neutral-200">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl sm:text-4xl font-semibold">
            Oficinas mais ágeis e lucrativas
          </h2>
          <p className="mt-3 text-brand-secondary">
            Veja o que quem já usa está dizendo.
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