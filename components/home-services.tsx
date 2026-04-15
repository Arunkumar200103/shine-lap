import Link from 'next/link';
import { ArrowRight, Monitor, Printer, Camera, Headset } from 'lucide-react';
import { services } from '@/lib/constants';

const iconComponents: Record<string, React.ReactNode> = {
  Monitor: <Monitor size={28} />,
  Printer: <Printer size={28} />,
  Camera: <Camera size={28} />,
  Headset: <Headset size={28} />,
};

const iconColors: Record<string, string> = {
  Monitor: 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
  Printer: 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white',
  Camera: 'bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white',
  Headset: 'bg-violet-50 text-violet-600 group-hover:bg-violet-600 group-hover:text-white',
};

export function HomeServices() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-primary font-semibold tracking-wider uppercase mb-2">What We Offer</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to meet your business and personal needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="group relative"
            >
              <div className="relative bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-400 h-full flex flex-col card-hover border border-transparent hover:border-primary/10">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${iconColors[service.icon] || 'bg-primary/10 text-primary'}`}>
                  {iconComponents[service.icon] || <Monitor size={28} />}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-foreground/60 flex-grow mb-5 text-sm leading-relaxed">{service.shortDescription}</p>

                {/* Features Preview */}
                <ul className="space-y-1.5 mb-5">
                  {service.features.slice(0, 3).map((f, i) => (
                    <li key={i} className="text-xs text-foreground/50 flex items-center gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all mt-auto">
                  Learn More
                  <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all font-bold shadow-lg shadow-primary/20 group"
          >
            View All Services
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
