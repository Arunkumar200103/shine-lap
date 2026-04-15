'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

const galleryImages = [
  { id: 1, title: 'Computer Showroom', src: '/gallery-1.jpg', category: 'showroom' },
  { id: 2, title: 'Printer Installation', src: '/gallery-2.jpg', category: 'printer' },
  { id: 3, title: 'CCTV Setup', src: '/gallery-3.jpg', category: 'cctv' },
  { id: 4, title: 'IT Support Team', src: '/gallery-4.jpg', category: 'support' },
  { id: 5, title: 'Network Setup', src: '/gallery-5.jpg', category: 'network' },
  { id: 6, title: 'Customer Service', src: '/gallery-6.jpg', category: 'service' },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'showroom', 'printer', 'cctv', 'support', 'network', 'service'];
  
  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Work</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            See our professional installations and satisfied customers
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all capitalize ${
                filter === cat
                  ? 'bg-primary text-white'
                  : 'bg-white text-foreground border border-muted hover:border-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer bg-muted"
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-white font-bold text-lg">{image.title}</h3>
                  <p className="text-white/80 text-sm capitalize">{image.category}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedImage(image)}
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-foreground font-bold text-xl">
                  +
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:bg-white/20 p-2 rounded-full transition-colors"
          >
            <X size={28} />
          </button>
          <div className="relative max-w-4xl w-full aspect-video" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage.src}
              alt={selectedImage.title}
              fill
              className="object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white rounded-b-lg">
              <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
              <p className="text-white/80 capitalize">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
