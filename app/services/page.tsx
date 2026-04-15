import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Monitor, Printer, Camera, Headset, CheckCircle } from 'lucide-react';
import { PageHeader } from '@/components/page-header';
import { CTABanner } from '@/components/cta-banner';
import { services } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Comprehensive IT services including computer sales, printer services, CCTV installation, and 24/7 IT support.',
};

const iconComponents: Record<string, React.ReactNode> = {
  Monitor: <Monitor size={32} />,
  Printer: <Printer size={32} />,
  Camera: <Camera size={32} />,
  Headset: <Headset size={32} />,
};

const iconColors: Record<string, string> = {
  Monitor: 'bg-blue-100 text-blue-600',
  Printer: 'bg-emerald-100 text-emerald-600',
  Camera: 'bg-amber-100 text-amber-600',
  Headset: 'bg-violet-100 text-violet-600',
};

export default function ServicesPage() {
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
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${iconColors[service.icon] || 'bg-primary/10 text-primary'}`}>
                    {iconComponents[service.icon] || <Monitor size={32} />}
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-3">{service.title}</h2>
                  <p className="text-foreground/60 leading-relaxed mb-6">{service.description}</p>

                  {/* Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle size={18} className="text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/70">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all font-semibold text-sm group shadow-md shadow-primary/20"
                  >
                    View Details
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Visual Side */}
                <div className={`${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div className="relative bg-gradient-to-br from-muted/50 to-muted/30 rounded-3xl p-8 lg:p-12">
                    {/* Process Steps */}
                    <div className="space-y-4">
                      {service.process.map((step, i) => (
                        <div key={i} className="flex gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-sm font-bold text-primary">{i + 1}</span>
                          </div>
                          <div>
                            <p className="font-bold text-foreground text-sm">{step.step}</p>
                            <p className="text-foreground/50 text-xs">{step.desc}</p>
                          </div>
                        </div>
                      ))}
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
