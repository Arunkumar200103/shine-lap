import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Layers, Tag, Box, Keyboard } from 'lucide-react';
import { PageHeader } from '@/components/page-header';
import { ProductCard } from '@/components/product-card';
import { AccessoryCard } from '@/components/accessory-card';
import { CTABanner } from '@/components/cta-banner';
import { getCategories, getProducts, getBrands, getAccessories, getImageUrl } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Browse our wide range of IT products — laptops, desktops, printers, CCTV systems, networking equipment, and accessories.',
};

export default async function ProductsPage() {
  let categories = [];
  let products = [];
  let brands: { id: number; name: string; category: number }[] = [];
  let accessories = [];

  try {
    [categories, products, brands, accessories] = await Promise.all([
      getCategories(),
      getProducts(),
      getBrands(),
      getAccessories(),
    ]);
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }

  // Brand lookup
  const brandMap = new Map(brands.map(b => [b.id, b]));

  // Category icons
  const categoryIcons = [Layers, Tag, Box];

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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((cat, idx) => {
              const IconComponent = categoryIcons[idx % categoryIcons.length];
              return (
                <Link
                  key={cat.id}
                  href={`/products/${cat.id}`}
                  className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center card-hover border border-transparent hover:border-primary/10 overflow-hidden"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                    <Image src={getImageUrl(cat.image)} alt="" fill className="object-cover" />
                  </div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110 overflow-hidden">
                      {cat.image ? (
                        <Image
                          src={getImageUrl(cat.image)}
                          alt={cat.name}
                          width={40}
                          height={40}
                          className="object-contain rounded-lg"
                        />
                      ) : (
                        <IconComponent size={28} />
                      )}
                    </div>
                    <h3 className="font-bold text-foreground text-base group-hover:text-primary transition-colors">{cat.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{cat.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Accessories Section */}
      {accessories.length > 0 && (
        <section className="py-16 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-sm text-primary font-semibold tracking-wider uppercase mb-2">Peripherals</p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Accessories</h2>
              </div>
              <div className="bg-primary/10 p-3 rounded-2xl text-primary hidden sm:block">
                <Keyboard size={32} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {accessories.map((accessory) => (
                <AccessoryCard key={accessory.id} accessory={accessory} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm text-primary font-semibold tracking-wider uppercase mb-2">Our Collection</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">All Products</h2>
            <p className="text-foreground/60 mt-2">Showing {products.length} products</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => {
              const brand = brandMap.get(product.brand);
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  brandName={brand?.name}
                  categorySlug={brand ? String(brand.category) : undefined}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Products by Category */}
      {categories.map((category) => {
        // Find brands in this category, then products for those brands
        const categoryBrandIds = brands.filter(b => b.category === category.id).map(b => b.id);
        const categoryProducts = products.filter(p => categoryBrandIds.includes(p.brand));

        if (categoryProducts.length === 0) return null;

        return (
          <section key={category.id} className="py-16 even:bg-muted/20" id={`category-${category.id}`}>
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
                {categoryProducts.map((product) => {
                  const brand = brandMap.get(product.brand);
                  return (
                    <ProductCard
                      key={product.id}
                      product={product}
                      brandName={brand?.name}
                      categorySlug={String(category.id)}
                    />
                  );
                })}
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
