import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { BRAND } from '../../utils/constants';

export default function Hero() {
    return (
        <section className="relative overflow-hidden min-h-screen flex flex-col justify-center py-10">
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    background: "radial-gradient(1200px 600px at 50% -10%, rgba(255,205,0,0.18), transparent)",
                }}
            />
            <Container className="relative z-10">
                <div className="mx-auto max-w-3xl text-center">
                    {/* <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-brand-secondary">
                        <span
                            className="inline-flex h-2 w-2 rounded-full"
                            style={{ backgroundColor: BRAND.primary }}
                        />
                        Versão para oficinas de troca de óleo
                    </div> */}
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
                        Oficina organizada.<br />
                        <span style={{ color: BRAND.primary }}>Construída com você.</span>
                    </h1>
                    <p className="mt-5 text-base sm:text-lg text-brand-secondary">
                        O <strong>ERP de troca de óleo</strong> que centraliza ordens de serviço, estoque e finanças em uma única tela. Sendo feito sob medida para a sua rotina.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full px-4 sm:px-0">
                        <Button variant="primary" size="lg" as="a" href="#pricing" className="w-full sm:w-auto">
                            Garantir Acesso Antecipado
                            <ArrowRight className="h-5 w-5" />
                        </Button>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="mt-16 flex justify-center animate-bounce text-brand-secondary/60">
                        <ChevronDown className="h-8 w-8" />
                    </div>
                </div>
                {/* <div className="mt-12 grid place-items-center">
                    <div className="w-full max-w-5xl rounded-2xl border border-neutral-200 bg-white p-3">
                        <div className="rounded-xl border border-neutral-200 bg-white p-2">
                            <div
                                className="aspect-[16/9] w-full rounded-lg grid grid-cols-12 gap-3 p-4"
                                style={{ background: "linear-gradient(135deg, rgba(255,205,0,0.18), rgba(59,130,246,0.10))" }}
                            >
                                <div className="col-span-3 rounded-lg bg-neutral-50 border border-neutral-200" />
                                <div className="col-span-9 rounded-lg bg-neutral-50 border border-neutral-200" />
                                <div className="col-span-12 h-32 rounded-lg bg-neutral-50 border border-neutral-200" />
                            </div>
                        </div>
                    </div>
                </div> */}
            </Container>
        </section>
    );
}