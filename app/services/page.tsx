import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Monitor, Printer, Camera, Headset, CheckCircle, Wrench, Settings, ShieldCheck } from 'lucide-react';
import { PageHeader } from '@/components/page-header';
import { CTABanner } from '@/components/cta-banner';
import { getServices } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Comprehensive IT services including computer sales, printer services, CCTV installation, and 24/7 IT support.',
};

const iconComponents: Record<string, React.ReactNode> = {
  Monitor: <Monitor size={32} />,
  Printer: <Printer size={32} />,
  Camera: <Camera size={32} />,
  Headset: <Headset size={32} />,
  Repair: <Wrench size={32} />,
  Maintenance: <Settings size={32} />,
  Security: <ShieldCheck size={32} />,
};

const iconColors: Record<string, string> = {
  Monitor: 'bg-blue-100 text-blue-600',
  Printer: 'bg-emerald-100 text-emerald-600',
  Camera: 'bg-amber-100 text-amber-600',
  Headset: 'bg-violet-100 text-violet-600',
  Repair: 'bg-red-100 text-red-600',
  Maintenance: 'bg-indigo-100 text-indigo-600',
  Security: 'bg-orange-100 text-orange-600',
};

export default async function ServicesPage() {
  const services = await getServices().catch(() => []);

  return (
    <main>
      <PageHeader
        title="Our Services"
        subtitle="Professional IT solutions for every need — from computer sales to round-the-clock technical support."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services' },
        ]}
      />

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, idx) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  idx % 2 !== 0 ? 'lg:direction-rtl' : ''
                }`}
              >
                {/* Content Side */}
                <div className={idx % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${iconColors[service.category] || 'bg-primary/10 text-primary'}`}>
                    {iconComponents[service.category] || <Monitor size={32} />}
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-3">{service.name}</h2>
                  <p className="text-foreground/60 leading-relaxed mb-6">{service.description}</p>

                  {/* Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    <div className="flex items-center gap-2">
                      <Settings size={18} className="text-primary" />
                      <span className="text-sm font-semibold">{service.estimatedTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck size={18} className="text-primary" />
                      <span className="text-sm font-semibold">{service.warranty}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Tag size={18} className="text-primary" />
                      <span className="text-sm font-bold text-primary">From ₹{parseFloat(service.price).toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                  <Link
                    href={`/services/${service.id}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all font-semibold text-sm group shadow-md shadow-primary/20"
                  >
                    View Details
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Visual Side */}
                <div className={`${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div className="relative bg-gradient-to-br from-muted/50 to-muted/30 rounded-3xl p-8 lg:p-12 overflow-hidden min-h-[300px] flex items-center justify-center">
                    <div className="absolute inset-0 opacity-10 flex items-center justify-center">
                       {iconComponents[service.category] || <Monitor size={200} />}
                    </div>
                    <div className="relative z-10 text-center">
                      <p className="text-2xl font-bold text-foreground/20 uppercase tracking-widest">{service.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Need a Custom Solution?"
        subtitle="Every business is unique. Tell us your requirements and we'll design the perfect IT solution for you."
      />
    </main>
  );
}
