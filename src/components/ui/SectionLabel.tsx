import React from 'react';

interface SectionLabelProps {
  number: string;
  title: string;
}

export const SectionLabel = ({ number, title }: SectionLabelProps) => {
  return (
    <div className="flex items-center gap-4 mb-12">
      <span className="font-mono-label bg-ink text-white px-2 py-1 rounded-[5px]">{number}</span>
      <h2 className="font-mono-label text-ink">{title}</h2>
      <div className="h-px bg-ink/20 flex-1 ml-4" />
    </div>
  );
};
