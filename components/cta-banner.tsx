import Link from 'next/link';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { businessInfo } from '@/lib/constants';

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  variant?: 'primary' | 'gradient' | 'dark';
}

export function CTABanner({
  title = "Ready to Get Started?",
  subtitle = "Contact us today for a free consultation and let us help you find the perfect IT solution for your needs.",
  variant = 'gradient',
}: CTABannerProps) {
  const bgClass = {
    primary: 'bg-primary',
    gradient: 'bg-gradient-to-r from-primary via-primary/95 to-accent',
    dark: 'bg-gradient-to-br from-foreground to-foreground/90',
  }[variant];

  return (
    <section className={`${bgClass} relative overflow-hidden`}>
      {/* Decorative */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-white/80 mb-10 leading-relaxed">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-xl hover:bg-secondary transition-all font-bold text-sm shadow-lg group"
            >
              Get Free Quote
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={`tel:${businessInfo.phone}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white border-2 border-white/20 rounded-xl hover:bg-white/20 transition-all font-bold text-sm"
            >
              <Phone size={18} />
              {businessInfo.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
