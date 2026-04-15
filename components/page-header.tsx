import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs: { label: string; href?: string }[];
}

export function PageHeader({ title, subtitle, breadcrumbs }: PageHeaderProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/95 to-accent overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-1.5 text-sm mb-6 animate-fade-in-down" aria-label="Breadcrumb">
          {breadcrumbs.map((crumb, idx) => (
            <span key={idx} className="flex items-center gap-1.5">
              {idx > 0 && <ChevronRight size={14} className="text-white/40" />}
              {crumb.href ? (
                <Link href={crumb.href} className="text-white/70 hover:text-white transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-secondary font-medium">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in-left">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-white/80 max-w-2xl animate-fade-in-left delay-100">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
