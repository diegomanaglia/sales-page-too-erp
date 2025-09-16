import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import Button from './Button';
import { BRAND } from '../../utils/constants';

export default function Plan({ name, price, periodicity, features = [], highlight = false }) {
  return (
    <div className={`rounded-2xl border ${highlight ? "border-yellow-400" : "border-neutral-200"} bg-white p-6 flex flex-col shadow-[0_0_0_1px_rgba(0,0,0,0.02)]`}>
      {highlight && (
        <div 
          className="mb-3 inline-flex self-start rounded-full px-3 py-1 text-xs" 
          style={{ 
            backgroundColor: "#fff7cc", 
            color: BRAND.primary, 
            border: "1px solid #ffe27a" 
          }}
        >
          Mais popular
        </div>
      )}
      <h3 className="text-xl font-semibold">{name}</h3>
      <div className="mt-3 flex items-baseline gap-1">
        <div className="text-4xl font-bold">{price}</div>
        <div className="text-sm text-brand-muted">/{periodicity}</div>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-brand-secondary">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <Check className="mt-0.5 h-4 w-4" style={{ color: BRAND.primary }} /> 
            {feature}
          </li>
        ))}
      </ul>
      <Button
        variant={highlight ? "primary" : "outline"}
        className="mt-6"
      >
        Começar agora <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  );
}