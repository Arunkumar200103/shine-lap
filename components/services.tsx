import { Laptop, Printer, Camera, Headphones } from 'lucide-react';
import { services } from '@/lib/constants';

const iconMap = {
  Laptop: <Laptop size={32} />,
  Printer: <Printer size={32} />,
  Camera: <Camera size={32} />,
  Headphones: <Headphones size={32} />,
};

export function Services() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to meet your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
              
              <div className="relative bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary to-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  {iconMap[service.icon as keyof typeof iconMap]}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-foreground/70 flex-grow mb-4">{service.description}</p>

                {/* Footer */}
                <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                  Learn More
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Need Our Services?</h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and let us help you find the perfect solution for your needs.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-white text-primary rounded-lg hover:bg-secondary transition-colors font-semibold"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
