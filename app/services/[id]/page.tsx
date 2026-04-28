import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Monitor, Printer, Camera, Headset, CheckCircle, ArrowRight, Phone, MessageCircle, Wrench, Settings, ShieldCheck } from 'lucide-react';
import { PageHeader } from '@/components/page-header';
import { CTABanner } from '@/components/cta-banner';
import { getServices, getImageUrl } from '@/lib/api';
import { businessInfo } from '@/lib/constants';

const iconComponents: Record<string, React.ReactNode> = {
  Monitor: <Monitor size={36} />,
  Printer: <Printer size={36} />,
  Camera: <Camera size={36} />,
  Headset: <Headset size={36} />,
  Repair: <Wrench size={36} />,
  Maintenance: <Settings size={36} />,
  Security: <ShieldCheck size={36} />,
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

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const services = await getServices().catch(() => []);
  const service = services.find(s => s.id === parseInt(id));
  if (!service) return { title: 'Service Not Found' };
  return {
    title: service.name,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const services = await getServices().catch(() => []);
  const service = services.find(s => s.id === parseInt(id));

  if (!service) {
    notFound();
  }

  const otherServices = services.filter(s => s.id !== service.id);

  return (
    <main>
      <PageHeader
        title={service.name}
        subtitle={service.category}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: service.name },
        ]}
      />

      {/* Service Detail */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-muted/50">
                <div className={`w-18 h-18 rounded-2xl flex items-center justify-center mb-6 ${iconColors[service.category] || 'bg-primary/10 text-primary'}`} style={{ width: 72, height: 72 }}>
                  {iconComponents[service.category] || <Monitor size={36} />}
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Service Overview</h2>
                <p className="text-foreground/70 leading-relaxed text-lg mb-8">{service.description}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-muted/50">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                      <Settings size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Estimated Time</p>
                      <p className="font-bold text-foreground">{service.estimatedTime}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Warranty</p>
                      <p className="font-bold text-foreground">{service.warranty}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Features (If we had them in API, but for now showing static or placeholder) */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Why Choose Our {service.name}?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Highly skilled & certified technicians',
                    'Genuine spare parts with warranty',
                    'Transparent pricing, no hidden costs',
                    'Quick turnaround time',
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-muted/30 p-4 rounded-xl hover:bg-muted/50 transition-colors">
                      <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80 font-medium text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-primary to-accent p-6 rounded-2xl text-white sticky top-24">
                <h3 className="font-bold text-xl mb-3">Need This Service?</h3>
                <p className="text-white/80 text-sm mb-6">Get a free consultation and quote for {service.name.toLowerCase()}.</p>
                <div className="space-y-3">
                  <div className="bg-white/10 p-4 rounded-xl mb-6">
                    <p className="text-xs text-white/60 uppercase font-bold mb-1">Price Starting From</p>
                    <p className="text-2xl font-bold">₹{parseFloat(service.price).toLocaleString('en-IN')}</p>
                  </div>
                  <Link
                    href="/contact"
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-white text-primary rounded-xl font-bold text-sm hover:bg-secondary transition-colors shadow-lg shadow-black/5"
                  >
                    Book Appointment
                    <ArrowRight size={16} />
                  </Link>
                  <a
                    href={`tel:${businessInfo.phone}`}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-white/10 text-white border border-white/20 rounded-xl font-bold text-sm hover:bg-white/20 transition-colors"
                  >
                    <Phone size={16} />
                    Call Now
                  </a>
                  <a
                    href={`https://wa.me/${businessInfo.whatsapp.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-green-500 text-white rounded-xl font-bold text-sm hover:bg-green-600 transition-colors"
                  >
                    <MessageCircle size={16} />
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Other Services */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-muted/50">
                <h3 className="font-bold text-foreground mb-4">Other Services</h3>
                <div className="space-y-2">
                  {otherServices.map((s) => (
                    <Link
                      key={s.id}
                      href={`/services/${s.id}`}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors group"
                    >
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm ${iconColors[s.category] || 'bg-primary/10 text-primary'}`}>
                        <span className="font-bold">{s.name.charAt(0)}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{s.name}</p>
                      </div>
                      <ArrowRight size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Get Started?"
        subtitle={`Let us help you with ${service.name.toLowerCase()}. Contact us today for a free consultation.`}
        variant="dark"
      />
    </main>
  );
}
