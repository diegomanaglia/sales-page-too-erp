import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

export default function Pricing() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('/api/submit-lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                const resData = await response.json();
                setError(resData.error || 'Ocorreu um erro ao enviar. Tente novamente.');
            }
        } catch (err) {
            setError('Falha de conexão. Verifique sua rede e tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="pricing" className="py-20 bg-neutral-50 border-t border-neutral-200">
            <Container>
                <div className="mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* Esquerda: Informações e Vantagens */}
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs text-amber-800 font-medium mb-6">
                                🚀 Vagas Limitadas
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                                Garanta seu Acesso Antecipado
                            </h2>
                            <p className="mt-4 text-lg text-brand-secondary">
                                Estamos selecionando as primeiras oficinas para testar o nosso <strong>sistema para troca de óleo</strong>. Cadastre-se agora e garanta vantagens exclusivas para pioneiros.
                            </p>

                            <ul className="mt-8 space-y-4">
                                {[
                                    "Acesso prioritário antes do lançamento oficial",
                                    "Desconto especial vitalício na assinatura",
                                    "Migração gratuita dos seus dados",
                                    "Suporte dedicado via WhatsApp direto com a equipe"
                                ].map((perk, i) => (
                                    <li key={i} className="flex items-start gap-3 text-brand-secondary">
                                        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                                        <span>{perk}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Direita: Formulário */}
                        <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm">
                            {submitted ? (
                                <div className="text-center py-10">
                                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
                                        <CheckCircle2 className="h-8 w-8 text-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-semibold">Inscrição Confirmada!</h3>
                                    <p className="mt-2 text-brand-secondary">
                                        Recebemos seus dados. Em breve nossa equipe entrará em contato com você pelo WhatsApp.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <h3 className="text-xl font-semibold mb-6">Preencha seus dados</h3>

                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 mb-1">Nome</label>
                                        <input
                                            required
                                            name="nome"
                                            type="text"
                                            className="w-full rounded-lg border border-neutral-300 px-4 py-2 text-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                                            placeholder="Seu Nome"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 mb-1">WhatsApp</label>
                                        <input
                                            required
                                            name="whatsapp"
                                            type="tel"
                                            className="w-full rounded-lg border border-neutral-300 px-4 py-2 text-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                                            placeholder="(00) 00000-0000"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 mb-1">E-mail</label>
                                        <input
                                            required
                                            name="email"
                                            type="email"
                                            className="w-full rounded-lg border border-neutral-300 px-4 py-2 text-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                                            placeholder="email@exemplo.com"
                                        />
                                    </div>

                                    {error && (
                                        <div className="p-3 text-sm rounded border border-red-200 bg-red-50 text-red-600">
                                            {error}
                                        </div>
                                    )}

                                    <Button disabled={loading} type="submit" variant="primary" className="w-full text-base py-3 mt-6">
                                        {loading ? "Enviando..." : "Garantir Meu Acesso Antecipado"}
                                        {!loading && <ArrowRight className="h-5 w-5" />}
                                    </Button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}