import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { PageHeader } from '@/components/page-header';
import { ProductCard } from '@/components/product-card';
import { CTABanner } from '@/components/cta-banner';
import { products, productCategories } from '@/lib/constants';

export async function generateStaticParams() {
  return productCategories.map((cat) => ({
    category: cat.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const cat = productCategories.find(c => c.id === category);
  if (!cat) return { title: 'Category Not Found' };
  return {
    title: cat.name,
    description: cat.description,
  };
}

export default async function ProductCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const cat = productCategories.find(c => c.id === category);

  if (!cat) {
    notFound();
  }

  const categoryProducts = products.filter(p => p.category === category);
  const otherCategories = productCategories.filter(c => c.id !== category);

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

          {/* Product Count */}
          <div className="mb-8">
            <p className="text-foreground/60">
              Showing <span className="font-bold text-foreground">{categoryProducts.length}</span> products in{' '}
              <span className="font-bold text-primary">{cat.name}</span>
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Other Categories */}
          <div className="border-t border-muted pt-12">
            <h3 className="text-2xl font-bold text-foreground mb-6">Browse Other Categories</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {otherCategories.map((c) => (
                <Link
                  key={c.id}
                  href={`/products/${c.id}`}
                  className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all text-center group border border-transparent hover:border-primary/10"
                >
                  <h4 className="font-bold text-foreground text-sm group-hover:text-primary transition-colors">{c.name}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{c.description.split(' ').slice(0, 3).join(' ')}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title={`Looking for Special ${cat.name}?`}
        subtitle="Can't find what you need? Contact us for custom requirements and bulk orders."
      />
    </main>
  );
}
