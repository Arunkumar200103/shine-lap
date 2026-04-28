import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { PageHeader } from '@/components/page-header';
import { ProductCard } from '@/components/product-card';
import { CTABanner } from '@/components/cta-banner';
import {
  getCategories,
  getProducts,
  getBrands,
  getImageUrl,
} from '@/lib/api';

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const categoryId = parseInt(category, 10);
  
  try {
    const categories = await getCategories();
    const cat = categories.find(c => c.id === categoryId);
    if (!cat) return { title: 'Category Not Found' };
    return {
      title: cat.name,
      description: cat.description,
    };
  } catch {
    return { title: 'Products' };
  }
}

export default async function ProductCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const categoryId = parseInt(category, 10);

  let categories = [];
  let products = [];
  let brands: { id: number; name: string; category: number }[] = [];

  try {
    [categories, products, brands] = await Promise.all([
      getCategories(),
      getProducts(),
      getBrands(),
    ]);
  } catch (error) {
    console.error('Failed to fetch data:', error);
    notFound();
  }

  const cat = categories.find(c => c.id === categoryId);
  if (!cat) {
    notFound();
  }

  // Find brands in this category, then products for those brands
  const categoryBrandIds = brands.filter(b => b.category === categoryId).map(b => b.id);
  const categoryProducts = products.filter(p => categoryBrandIds.includes(p.brand));
  const otherCategories = categories.filter(c => c.id !== categoryId);

  // Brand lookup
  const brandMap = new Map(brands.map(b => [b.id, b.name]));

  // Brands in this category for display
  const categoryBrands = brands.filter(b => b.category === categoryId);

  return (
    <main>
      <PageHeader
        title={cat.name}
        subtitle={cat.description}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Products', href: '/products' },
          { label: cat.name },
        ]}
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm mb-8 hover:gap-3 transition-all group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to All Products
          </Link>

          {/* Category Brands */}
          {categoryBrands.length > 0 && (
            <div className="mb-10">
              <h3 className="text-lg font-semibold text-foreground mb-4">Brands in {cat.name}</h3>
              <div className="flex flex-wrap gap-4">
                {categoryBrands.map((brand) => (
                  <div
                    key={brand.id}
                    className="flex items-center gap-3 bg-white rounded-xl px-5 py-3 shadow-sm border border-muted/50 hover:border-primary/20 hover:shadow-md transition-all"
                  >
                    <Image
                      src={getImageUrl(brand.icon)}
                      alt={brand.name}
                      width={32}
                      height={32}
                      className="object-contain rounded"
                    />
                    <div>
                      <p className="font-bold text-sm text-foreground">{brand.name}</p>
                      <p className="text-xs text-muted-foreground">{brand.series}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Product Count */}
          <div className="mb-8">
            <p className="text-foreground/60">
              Showing <span className="font-bold text-foreground">{categoryProducts.length}</span> products in{' '}
              <span className="font-bold text-primary">{cat.name}</span>
            </p>
          </div>

          {/* Products Grid */}
          {categoryProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {categoryProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  brandName={brandMap.get(product.brand) || undefined}
                  categorySlug={String(categoryId)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 mb-16">
              <div className="w-20 h-20 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📦</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">No products yet</h3>
              <p className="text-muted-foreground">
                Products in this category will be added soon. Contact us for availability.
              </p>
            </div>
          )}

          {/* Other Categories */}
          {otherCategories.length > 0 && (
            <div className="border-t border-muted pt-12">
              <h3 className="text-2xl font-bold text-foreground mb-6">Browse Other Categories</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {otherCategories.map((c) => (
                  <Link
                    key={c.id}
                    href={`/products/${c.id}`}
                    className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all text-center group border border-transparent hover:border-primary/10"
                  >
                    <div className="w-12 h-12 rounded-lg overflow-hidden mx-auto mb-3 bg-muted/30">
                      <Image
                        src={getImageUrl(c.image)}
                        alt={c.name}
                        width={48}
                        height={48}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h4 className="font-bold text-foreground text-sm group-hover:text-primary transition-colors">{c.name}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{c.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CTABanner
        title={`Looking for Special ${cat.name}?`}
        subtitle="Can't find what you need? Contact us for custom requirements and bulk orders."
      />
    </main>
  );
}
