'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ZoomIn } from 'lucide-react';
import { PageHeader } from '@/components/page-header';
import { CTABanner } from '@/components/cta-banner';
import { galleryImages } from '@/lib/constants';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'showroom', 'printer', 'cctv', 'support', 'network', 'service'];

  const filteredImages = filter === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === filter);

  return (
    <main>
      <PageHeader
        title="Our Gallery"
        subtitle="See our professional installations, showroom, and satisfied customers."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Gallery' },
        ]}
      />

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-xl font-semibold transition-all capitalize text-sm ${
                  filter === cat
                    ? 'bg-primary text-white shadow-md shadow-primary/20'
                    : 'bg-white text-foreground border border-muted hover:border-primary/30 hover:text-primary'
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
                onClick={() => setSelectedImage(image)}
                className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer bg-muted shadow-md hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-lg">{image.title}</h3>
                    <p className="text-white/70 text-sm capitalize">{image.category}</p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                      <ZoomIn size={22} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              <p className="text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:bg-white/10 p-3 rounded-full transition-colors z-10"
          >
            <X size={24} />
          </button>
          <div className="relative max-w-5xl w-full aspect-video" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage.src}
              alt={selectedImage.title}
              fill
              className="object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 text-white rounded-b-lg">
              <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
              <p className="text-white/70 capitalize">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}

      <CTABanner
        title="Like What You See?"
        subtitle="Contact us to discuss how we can set up the same professional solutions for your business."
      />
    </main>
  );
}
