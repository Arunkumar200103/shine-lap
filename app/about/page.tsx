import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle, Users, Award, Zap, IndianRupee, ShieldCheck, Settings, Target, Eye, Heart } from 'lucide-react';
import { PageHeader } from '@/components/page-header';
import { Brands } from '@/components/brands';
import { CTABanner } from '@/components/cta-banner';
import { whyChooseUs, stats } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Shine Computer Printer CCTV — over 10 years of excellence in IT solutions, trusted by 500+ clients.',
};

const iconComponentsMap: Record<string, React.ReactNode> = {
  Users: <Users size={24} />,
  Award: <Award size={24} />,
  Zap: <Zap size={24} />,
  IndianRupee: <IndianRupee size={24} />,
  ShieldCheck: <ShieldCheck size={24} />,
  Settings: <Settings size={24} />,
};

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        title="About Shine"
        subtitle="Your trusted partner in technology — delivering premium IT solutions for over a decade."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About Us' },
        ]}
      />

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/about.jpg"
                  alt="Shine Team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
              {/* Stats Overlay */}
              <div className="absolute -bottom-6 left-6 right-6 bg-white p-6 rounded-2xl shadow-xl grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-xs text-muted-foreground font-medium">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-xs text-muted-foreground font-medium">Happy Clients</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 lg:pl-4">
              <div>
                <p className="text-sm text-primary font-semibold tracking-wider uppercase mb-2">Who We Are</p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  A Decade of Excellence in IT Solutions
                </h2>
                <p className="text-foreground/60 leading-relaxed text-lg">
                  With over 10 years of experience in the IT industry, Shine has established itself as a trusted provider of comprehensive technology solutions. Our dedicated team of certified experts is committed to delivering excellence in every project.
                </p>
              </div>

              <p className="text-foreground/60 leading-relaxed">
                From humble beginnings as a small computer shop, we&apos;ve grown into a full-service IT solutions provider, serving businesses of all sizes. Our commitment to quality, customer satisfaction, and staying ahead of technology trends has earned us the trust of over 500 clients.
              </p>

              {/* Key Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'Certified IT professionals',
                  'Authorized brand dealers',
                  'Same-day service available',
                  'Transparent pricing',
                  'Post-sales support',
                  'Customized IT solutions',
                ].map((point, idx) => (
                  <div key={idx} className="flex gap-2.5 items-center">
                    <CheckCircle size={18} className="text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground/70 font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm text-primary font-semibold tracking-wider uppercase mb-2">What Drives Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Mission, Vision & Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target size={28} />,
                title: 'Our Mission',
                desc: 'To empower businesses and individuals with reliable, affordable, and cutting-edge IT solutions that drive growth, efficiency, and success in the digital age.',
                color: 'bg-blue-50 text-blue-600',
              },
              {
                icon: <Eye size={28} />,
                title: 'Our Vision',
                desc: 'To be the most trusted IT solutions provider in the region, recognized for our exceptional quality, innovation, and unwavering commitment to customer satisfaction.',
                color: 'bg-amber-50 text-amber-600',
              },
              {
                icon: <Heart size={28} />,
                title: 'Our Values',
                desc: 'Integrity, excellence, innovation, and customer-first approach. We believe in building lasting relationships through trust, transparency, and consistent quality.',
                color: 'bg-rose-50 text-rose-600',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 card-hover border border-transparent hover:border-primary/10">
                <div className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center mb-5`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-foreground/60 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm text-primary font-semibold tracking-wider uppercase mb-2">Our Advantages</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Why Choose Shine?</h2>
            <p className="text-foreground/60 mt-2 max-w-2xl mx-auto">
              We stand out from the competition with our commitment to excellence and customer satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((reason, idx) => (
              <div
                key={idx}
                className="group bg-white p-7 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 card-hover border border-transparent hover:border-primary/10"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {iconComponentsMap[reason.icon] || <Settings size={24} />}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{reason.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-sm text-white/70 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Brands />

      <CTABanner
        title="Let's Work Together"
        subtitle="Partner with Shine for all your IT needs. We're here to help your business grow with the right technology."
        variant="dark"
      />
    </main>
  );
}
