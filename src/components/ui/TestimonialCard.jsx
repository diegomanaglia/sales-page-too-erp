import React from 'react';
import { Star } from 'lucide-react';
import { BRAND } from '../../utils/constants';

export default function TestimonialCard({ name, role, quote }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6">
      <div className="flex items-center gap-2" style={{ color: BRAND.primary }}>
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className="mt-4 italic text-brand-text">"{quote}"</p>
      <div className="mt-4 text-sm text-brand-muted">{name} · {role}</div>
    </div>
  );
}