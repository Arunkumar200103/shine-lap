import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone, MessageCircle, Monitor, Printer, Camera, Headset } from 'lucide-react';
import { businessInfo } from '@/lib/constants';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="text-primary text-sm font-semibold">Trusted by 500+ Businesses</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
              Premium{' '}
              <span className="gradient-text">IT Solutions</span>{' '}
              for Your Business
            </h1>

            <p className="text-lg lg:text-xl text-foreground/60 leading-relaxed max-w-lg">
              Comprehensive computer sales, printer services, CCTV installation, and 24/7 IT support. Your success is our priority.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all hover:shadow-xl hover:shadow-primary/20 font-bold group"
              >
                Get Free Quote
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-foreground border-2 border-muted rounded-xl hover:border-primary/30 hover:bg-primary/5 transition-all font-bold"
              >
                Explore Services
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-muted to-secondary/30 border-2 border-white flex items-center justify-center">
                    <span className="text-xs font-bold text-foreground/50">{'⭐'}</span>
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-secondary">
                  {'★★★★★'.split('').map((s, i) => <span key={i} className="text-sm">{s}</span>)}
                </div>
                <p className="text-xs text-foreground/50 font-medium">500+ Happy Customers</p>
              </div>
            </div>
          </div>

          {/* Right Image + Floating Cards */}
          <div className="relative animate-fade-in-right">
            <div className="relative h-[400px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/hero.png"
                alt="Professional IT Setup"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
            </div>

            {/* Floating Service Cards */}
            <div className="absolute -left-4 lg:-left-8 top-1/4 bg-white p-4 rounded-xl shadow-xl animate-float hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <Monitor size={20} className="text-blue-600" />
              </div>
              <div>
                <p className="font-bold text-sm text-foreground">Computer Sales</p>
                <p className="text-xs text-muted-foreground">Top Brands</p>
              </div>
            </div>

            <div className="absolute -right-2 lg:-right-6 bottom-1/4 bg-white p-4 rounded-xl shadow-xl animate-float hidden sm:flex items-center gap-3" style={{ animationDelay: '1s' }}>
              <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                <Camera size={20} className="text-amber-600" />
              </div>
              <div>
                <p className="font-bold text-sm text-foreground">CCTV Setup</p>
                <p className="text-xs text-muted-foreground">HD Security</p>
              </div>
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 bg-white p-4 rounded-xl shadow-xl animate-float hidden sm:flex items-center gap-3" style={{ animationDelay: '2s' }}>
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                <Headset size={20} className="text-green-600" />
              </div>
              <div>
                <p className="font-bold text-sm text-foreground">24/7 Support</p>
                <p className="text-xs text-muted-foreground">Always Here</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-12 border-t border-muted/50">
          {[
            { number: '500+', label: 'Happy Clients', icon: '👥' },
            { number: '10+', label: 'Years Experience', icon: '🏆' },
            { number: '24/7', label: 'IT Support', icon: '🛡️' },
            { number: '100%', label: 'Satisfaction', icon: '⭐' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center group">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <div className="text-sm text-foreground/50 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
