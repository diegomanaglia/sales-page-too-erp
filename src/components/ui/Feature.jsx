import React from 'react';
import { BRAND } from '../../utils/constants';

export default function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 hover:shadow-sm transition">
      <div 
        className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl" 
        style={{ backgroundColor: "#fff7cc", color: BRAND.primary }}
      >
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-brand-secondary">{desc}</p>
    </div>
  );
}