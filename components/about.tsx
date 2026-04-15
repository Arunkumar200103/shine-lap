import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative h-96 lg:h-full min-h-96">
            <Image
              src="/about.jpg"
              alt="Our Team"
              fill
              className="object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-transparent" />
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">About Shine</h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                With over a decade of experience in the IT industry, Shine has established itself as a trusted provider of comprehensive technology solutions. Our dedicated team of experts is committed to delivering excellence in every project.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-4">
              {[
                'Professional team with certified technicians',
                'Quality products from trusted brands',
                'Fast and reliable service',
                'Customized solutions for your needs',
              ].map((point, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <CheckCircle size={24} className="text-primary flex-shrink-0 mt-1" />
                  <span className="text-foreground">{point}</span>
                </div>
              ))}
            </div>

            {/* Mission Statement */}
            <div className="bg-muted/50 p-6 rounded-xl border border-muted">
              <h3 className="font-bold text-foreground mb-2">Our Mission</h3>
              <p className="text-foreground/70">
                To empower businesses with reliable IT solutions that drive growth, efficiency, and success in the digital age.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
