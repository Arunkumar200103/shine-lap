import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Monitor, Printer, Camera, Headset, CheckCircle, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { PageHeader } from '@/components/page-header';
import { CTABanner } from '@/components/cta-banner';
import { services, businessInfo } from '@/lib/constants';

const iconComponents: Record<string, React.ReactNode> = {
  Monitor: <Monitor size={36} />,
  Printer: <Printer size={36} />,
  Camera: <Camera size={36} />,
  Headset: <Headset size={36} />,
};

const iconColors: Record<string, string> = {
  Monitor: 'bg-blue-100 text-blue-600',
  Printer: 'bg-emerald-100 text-emerald-600',
  Camera: 'bg-amber-100 text-amber-600',
  Headset: 'bg-violet-100 text-violet-600',
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);
  if (!service) return { title: 'Service Not Found' };
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);

  if (!service) {
    notFound();
  }

  const otherServices = services.filter(s => s.slug !== slug);

  return (
    <main>
      <PageHeader
        title={service.title}
        subtitle={service.shortDescription}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: service.title },
        ]}
      />

      {/* Service Detail */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <div className={`w-18 h-18 rounded-2xl flex items-center justify-center mb-6 ${iconColors[service.icon] || 'bg-primary/10 text-primary'}`} style={{ width: 72, height: 72 }}>
                  {iconComponents[service.icon] || <Monitor size={36} />}
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Overview</h2>
                <p className="text-foreground/70 leading-relaxed text-lg">{service.description}</p>
              </div>

              {/* What We Offer */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">What We Offer</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-muted/30 p-4 rounded-xl hover:bg-muted/50 transition-colors">
                      <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80 font-medium text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Our Process */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Our Process</h2>
                <div className="relative">
                  {/* Connecting Line */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-muted hidden sm:block" />
                  <div className="space-y-6">
                    {service.process.map((step, idx) => (
                      <div key={idx} className="relative flex gap-5 items-start">
                        <div className="relative z-10 w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 shadow-md shadow-primary/20">
                          <span className="text-white font-bold">{idx + 1}</span>
                        </div>
                        <div className="flex-1 bg-white p-5 rounded-xl shadow-sm border border-muted/50">
                          <h3 className="font-bold text-foreground mb-1">{step.step}</h3>
                          <p className="text-foreground/60 text-sm">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {service.faq.map((item, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-muted/50">
                      <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">Q</span>
                        {item.q}
                      </h3>
                      <p className="text-foreground/60 text-sm leading-relaxed pl-8">{item.a}</p>
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
                <p className="text-white/80 text-sm mb-6">Get a free consultation and quote for {service.title.toLowerCase()}.</p>
                <div className="space-y-3">
                  <Link
                    href="/contact"
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-white text-primary rounded-xl font-bold text-sm hover:bg-secondary transition-colors"
                  >
                    Get Free Quote
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
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors group"
                    >
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm ${iconColors[s.icon] || 'bg-primary/10 text-primary'}`}>
                        <span className="font-bold">{s.title.charAt(0)}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{s.title}</p>
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
        subtitle={`Let us help you with ${service.title.toLowerCase()}. Contact us today for a free consultation.`}
        variant="dark"
      />
    </main>
  );
}
