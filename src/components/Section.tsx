import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export const Section = ({
  id,
  title,
  children,
  className = '',
}: SectionProps) => {
  return (
    <section
      id={id}
      className={`min-h-screen w-full px-6 py-24 border border-gray-100 last:border-0 ${className}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-sm font-bold uppercase tracking-widest sticky top-32 hidden">
            {title}
          </h2>
        </div>
        <div className="md:col-span-9">{children}</div>
      </div>
    </section>
  );
};
