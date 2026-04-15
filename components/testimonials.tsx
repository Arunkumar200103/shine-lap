'use client';

import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { testimonials } from '@/lib/constants';

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const activeTestimonial = testimonials[activeIndex];
  const nextTestimonial = testimonials[(activeIndex + 1) % testimonials.length];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 items-center">
          
          {/* Left Side - Typography & Dots */}
          <div className="lg:w-5/12 space-y-6 lg:pr-10">
            <h3 className="text-secondary font-bold tracking-widest uppercase text-sm font-sans mb-2">
              Testimonials
            </h3>
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-[#14183E] leading-[1.2] tracking-tight">
              What people say about Us.
            </h2>
            
            {/* Pagination Dots */}
            <div className="flex gap-4 pt-10">
              {testimonials.slice(0, 3).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === activeIndex % 3 ? 'bg-[#39425D]' : 'bg-[#E5E5EA] hover:bg-[#39425D]/50'
                  }`}
                  aria-label={`Go to testimonial slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Stacked Cards */}
          <div className="lg:w-7/12 relative min-h-[420px] w-full mt-10 lg:mt-0 flex items-center justify-center lg:justify-start pl-4 sm:pl-8 pb-12">
            
            {/* Controls (Up / Down) aligned to the right */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex-col gap-6 hidden lg:flex z-30 transform translate-x-4 xl:translate-x-12">
              <button onClick={handlePrev} className="text-[#39425D]/30 hover:text-[#39425D] hover:-translate-y-1 transition-all">
                <ChevronUp size={24} />
              </button>
              <button onClick={handleNext} className="text-[#39425D]/30 hover:text-[#39425D] hover:translate-y-1 transition-all">
                <ChevronDown size={24} />
              </button>
            </div>

            <div className="relative w-full max-w-lg z-20">
              {/* Back Card */}
              <div className="absolute top-0 right-0 w-full bg-white rounded-[2rem] p-8 border-2 border-[#F1F1F1] shadow-sm transform translate-y-16 translate-x-6 sm:translate-x-12 scale-[0.96] z-0 opacity-80 transition-all duration-500 ease-in-out">
                <p className="text-[#5E6282] leading-[1.8] text-base font-medium pb-6 line-clamp-3">
                  “{nextTestimonial.quote}”
                </p>
                <div className="pt-2">
                  <h4 className="font-bold text-[#5E6282] text-lg">{nextTestimonial.name}</h4>
                  <p className="text-sm text-[#5E6282]/70">{nextTestimonial.company}</p>
                </div>
              </div>

              {/* Front Main Card */}
              <div className="relative bg-white rounded-[2rem] p-8 sm:p-10 shadow-[0_30px_60px_rgba(0,0,0,0.08)] z-10 transition-all duration-500 ease-in-out border border-[#F1F1F1]/50">
                {/* Floating Avatar */}
                <div className="absolute -top-8 -left-8 w-[68px] h-[68px] rounded-full overflow-hidden shadow-lg shadow-black/5 border-4 border-white bg-white z-20">
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{activeTestimonial.name.charAt(0)}</span>
                  </div>
                </div>

                <p className="text-[#5E6282] leading-[1.8] text-base font-medium relative z-10">
                  “{activeTestimonial.quote}”
                </p>
                
                <div className="pt-8 relative z-10">
                  <h4 className="font-bold text-[#5E6282] text-lg">{activeTestimonial.name}</h4>
                  <p className="text-sm text-[#5E6282]/80 mt-1">{activeTestimonial.company}</p>
                </div>
              </div>
            </div>

            {/* Mobile Controls */}
            <div className="absolute bottom-0 right-4 flex gap-3 lg:hidden z-30">
              <button onClick={handlePrev} className="w-10 h-10 rounded-full bg-white shadow-md border border-[#F1F1F1] flex items-center justify-center text-[#39425D] hover:bg-gray-50 transition-all">
                <ChevronUp size={20} />
              </button>
              <button onClick={handleNext} className="w-10 h-10 rounded-full bg-white shadow-md border border-[#F1F1F1] flex items-center justify-center text-[#39425D] hover:bg-gray-50 transition-all">
                <ChevronDown size={20} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
