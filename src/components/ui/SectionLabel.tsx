import React from 'react';

interface SectionLabelProps {
  number: string;
  title: string;
}

export const SectionLabel = ({ number, title }: SectionLabelProps) => {
  return (
    <div className="flex items-center gap-4 mb-12">
      <span className="font-mono text-electric font-medium text-sm">{number}</span>
      <h2 className="font-mono text-ink/40 text-sm uppercase tracking-widest">{title}</h2>
      <div className="h-px bg-ink/10 flex-1 ml-4" />
    </div>
  );
};
