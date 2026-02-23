import React from 'react';
import { BRAND } from '../../utils/constants';

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  as = 'button',
  ...props 
}) {
  const baseClasses = 'rounded-xl font-medium inline-flex items-center justify-center gap-2 transition-colors';
  
  const variants = {
    primary: `text-black hover:opacity-90`,
    secondary: 'border border-neutral-300 hover:bg-neutral-50',
    outline: 'border border-neutral-300 hover:bg-neutral-50'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-5 py-3 text-base'
  };

  const variantStyles = variant === 'primary' 
    ? { backgroundColor: BRAND.primary, color: '#1f1f20' }
    : {};

  const Component = as;

  return (
    <Component
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      style={variantStyles}
      {...props}
    >
      {children}
    </Component>
  );
}