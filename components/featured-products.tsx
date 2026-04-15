import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { products } from '@/lib/constants';
import { ProductCard } from './product-card';

export function FeaturedProducts() {
  const featured = products.filter(p => p.badge).slice(0, 4);

  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-sm text-primary font-semibold tracking-wider uppercase mb-2">Featured Products</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Popular Products
            </h2>
            <p className="text-foreground/60 mt-2 max-w-lg">
              Handpicked top-selling products trusted by hundreds of our customers
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-primary font-semibold group hover:gap-3 transition-all"
          >
            View All Products
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product, idx) => (
            <div key={product.id} className={`animate-fade-in-up delay-${(idx + 1) * 100}`}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
