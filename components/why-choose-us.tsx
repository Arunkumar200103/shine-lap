import { Award, Clock, Users, Zap, Lock, Lightbulb } from 'lucide-react';
import { whyChooseUs } from '@/lib/constants';

const iconMap = {
  'Expert Team': <Users size={28} />,
  'Quality Products': <Award size={28} />,
  'Fast Service': <Zap size={28} />,
  'Competitive Pricing': <Clock size={28} />,
  'Warranty Support': <Lock size={28} />,
  'Custom Solutions': <Lightbulb size={28} />,
};

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Why Choose Shine?</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            We stand out from the competition with our commitment to excellence and customer satisfaction
          </p>
        </div>

        {/* Why Choose Us Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((reason, idx) => (
            <div
              key={idx}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative bg-card p-8 rounded-2xl border border-muted group-hover:border-primary/30 transition-all duration-300">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-primary/20 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                  {iconMap[reason.title as keyof typeof iconMap]}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-2">{reason.title}</h3>
                <p className="text-foreground/70">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
