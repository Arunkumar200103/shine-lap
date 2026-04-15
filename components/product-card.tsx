import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Eye } from 'lucide-react';

interface ProductCardProps {
  product: {
    id: number;
    category: string;
    name: string;
    price: string;
    specs: string;
    image: string;
    badge?: string;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-400 overflow-hidden card-hover border border-transparent hover:border-primary/10">
      {/* Image */}
      <div className="relative h-52 bg-muted/30 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {product.badge && (
          <div className="absolute top-3 left-3 px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-bold shadow-md">
            {product.badge}
          </div>
        )}
        {/* Quick Actions Overlay */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
          <Link
            href={`/contact`}
            className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300"
            title="Enquire Now"
          >
            <ShoppingCart size={18} />
          </Link>
          <Link
            href={`/products/${product.category}`}
            className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75"
            title="View Category"
          >
            <Eye size={18} />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1.5">
          {product.category}
        </p>
        <h3 className="font-bold text-foreground text-lg mb-1 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-3">{product.specs}</p>
        <div className="flex items-center justify-between pt-3 border-t border-muted/50">
          <span className="text-xl font-bold text-primary">{product.price}</span>
          <Link
            href="/contact"
            className="text-xs font-semibold text-primary hover:text-white bg-primary/10 hover:bg-primary px-4 py-2 rounded-lg transition-all duration-300"
          >
            Enquire
          </Link>
        </div>
      </div>
    </div>
  );
}
