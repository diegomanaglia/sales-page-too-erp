import React from 'react';
import Container from '../ui/Container';
import BrandBadge from '../ui/BrandBadge';
import { COMPANY_INFO } from '../../utils/constants';

export default function Footer() {
    return (
        <footer className="border-t border-neutral-200 bg-white">
            <Container className="py-14 flex flex-col items-center justify-center text-center">
                <BrandBadge />
                <p className="mt-4 max-w-sm text-sm text-brand-secondary">
                    {COMPANY_INFO.description}
                </p>
            </Container>
            <div className="py-6 border-t border-neutral-200 text-center text-xs text-brand-muted">
                © {COMPANY_INFO.year} {COMPANY_INFO.name}. Todos os direitos reservados.
            </div>
        </footer>
    );
}