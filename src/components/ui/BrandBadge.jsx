import React from 'react';
import { LOGO_SRC, COMPANY_INFO } from '../../utils/constants';

export default function BrandBadge({ className = "" }) {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <img
                src={LOGO_SRC}
                alt="Logo"
                className="h-9 w-9 rounded-md object-contain"
            />
            <div className="text-sm sm:text-lg font-semibold tracking-tight leading-tight">
                Troca de Óleo<br className="block sm:hidden" /> Online ERP
            </div>
        </div>
    );
}