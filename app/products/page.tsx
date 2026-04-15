import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Laptop, Monitor, Printer, Camera, Wifi, Keyboard, ArrowRight } from 'lucide-react';
import { PageHeader } from '@/components/page-header';
import { ProductCard } from '@/components/product-card';
import { CTABanner } from '@/components/cta-banner';
import { products, productCategories } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Browse our wide range of IT products — laptops, desktops, printers, CCTV systems, networking equipment, and accessories.',
};

const iconComponents: Record<string, React.ReactNode> = {
  Laptop: <Laptop size={24} />,
  Monitor: <Monitor size={24} />,
  Printer: <Printer size={24} />,
  Camera: <Camera size={24} />,
  Wifi: <Wifi size={24} />,
  Keyboard: <Keyboard size={24} />,
};

export default function ProductsPage() {
  const featuredProducts = products.filter(p => p.badge).slice(0, 8);

  return (
    <main>
      <PageHeader
        title="Our Products"
        subtitle="Explore our wide range of IT products from trusted brands. Quality guaranteed."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Products' },
        ]}
      />

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm text-primary font-semibold tracking-wider uppercase mb-2">Browse by Category</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Product Categories</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {productCategories.map((cat) => (
              <Link
                key={cat.id}
                href={`/products/${cat.id}`}
                className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center card-hover border border-transparent hover:border-primary/10 overflow-hidden"
              >
                {/* Background Image */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                  <Image src={cat.image} alt="" fill className="object-cover" />
                </div>

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110">
                    {iconComponents[cat.icon] || <Monitor size={24} />}
                  </div>
                  <h3 className="font-bold text-foreground text-sm group-hover:text-primary transition-colors">{cat.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1 hidden md:block">{cat.description.split(' ').slice(0, 4).join(' ')}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm text-primary font-semibold tracking-wider uppercase mb-2">Handpicked for You</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Products</h2>
            <p className="text-foreground/60 mt-2">Our most popular and best-selling products</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* All Products by Category */}
      {productCategories.map((category) => {
        const categoryProducts = products.filter(p => p.category === category.id);
        return (
          <section key={category.id} className="py-16 even:bg-muted/20" id={category.id}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-end justify-between mb-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">{category.name}</h2>
                  <p className="text-foreground/60 text-sm mt-1">{category.description}</p>
                </div>
                <Link
                  href={`/products/${category.id}`}
                  className="hidden md:inline-flex items-center gap-2 text-primary font-semibold text-sm group"
                >
                  View All
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {categoryProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              <div className="mt-6 text-center md:hidden">
                <Link
                  href={`/products/${category.id}`}
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm"
                >
                  View All {category.name}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </section>
        );
      })}

      <CTABanner
        title="Can't Find What You Need?"
        subtitle="We carry many more products. Contact us with your requirements and we'll find the best option for you."
      />
    </main>
  );
}
