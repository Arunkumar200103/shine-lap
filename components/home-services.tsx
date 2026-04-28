import Link from 'next/link';
import { ArrowRight, Monitor, Printer, Camera, Headset, Settings, ShieldCheck, Wrench } from 'lucide-react';
import { getServices } from '@/lib/api';

const iconComponents: Record<string, React.ReactNode> = {
  Monitor: <Monitor size={28} />,
  Printer: <Printer size={28} />,
  Camera: <Camera size={28} />,
  Headset: <Headset size={28} />,
  Repair: <Wrench size={28} />,
  Maintenance: <Settings size={28} />,
  Security: <ShieldCheck size={28} />,
};

const iconColors: Record<string, string> = {
  Monitor: 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
  Printer: 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white',
  Camera: 'bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white',
  Headset: 'bg-violet-50 text-violet-600 group-hover:bg-violet-600 group-hover:text-white',
  Repair: 'bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white',
  Maintenance: 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white',
  Security: 'bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white',
};

export async function HomeServices() {
  const services = await getServices().catch(() => []);

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
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.id}`}
              className="group relative"
            >
              <div className="relative bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-400 h-full flex flex-col card-hover border border-transparent hover:border-primary/10">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${iconColors[service.category] || 'bg-primary/10 text-primary'}`}>
                  {iconComponents[service.category] || <Monitor size={28} />}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{service.name}</h3>
                <p className="text-foreground/60 flex-grow mb-5 text-sm leading-relaxed">{service.description}</p>

                {/* Service Details */}
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-foreground/40 uppercase tracking-wider font-bold">Estimated Time</span>
                    <span className="text-foreground/70 font-semibold">{service.estimatedTime}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-foreground/40 uppercase tracking-wider font-bold">Warranty</span>
                    <span className="text-foreground/70 font-semibold">{service.warranty}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-foreground/40 uppercase tracking-wider font-bold">Price From</span>
                    <span className="text-primary font-bold text-sm">₹{parseFloat(service.price).toLocaleString('en-IN')}</span>
                  </div>
                </div>

                {/* Link */}
                <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all mt-auto pt-4 border-t border-muted/50">
                  Book Service
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
