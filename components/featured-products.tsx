import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getProducts, getBrands } from '@/lib/api';
import { ProductCard } from './product-card';

export async function FeaturedProducts() {
  let products = [];
  let brands: { id: number; name: string }[] = [];

  try {
    [products, brands] = await Promise.all([getProducts(), getBrands()]);
  } catch (error) {
    console.error('Failed to fetch featured products:', error);
    return null; // Don't render section if API is down
  }

  if (products.length === 0) return null;

  // Show up to 4 products as featured
  const featured = products.slice(0, 4);

  // Build brand name lookup
  const brandMap = new Map(brands.map(b => [b.id, b.name]));

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
              <ProductCard
                product={product}
                brandName={brandMap.get(product.brand) || undefined}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
