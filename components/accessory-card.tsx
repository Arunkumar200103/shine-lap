import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Package } from 'lucide-react';
import type { ApiAccessory } from '@/lib/types';
import { getImageUrl, formatPrice } from '@/lib/api';

interface AccessoryCardProps {
  accessory: ApiAccessory;
}

export function AccessoryCard({ accessory }: AccessoryCardProps) {
  const imageUrl = getImageUrl(accessory.image || '');
  const formattedPrice = formatPrice(accessory.price);

  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-400 overflow-hidden card-hover border border-transparent hover:border-primary/10">
      {/* Image */}
      <div className="relative h-48 bg-muted/30 overflow-hidden">
        {accessory.image ? (
          <Image
            src={imageUrl}
            alt={accessory.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-muted/50 text-muted-foreground">
            <Package size={48} className="opacity-20" />
          </div>
        )}
        {/* Stock Badge */}
        {accessory.inStock ? (
          <div className="absolute top-3 left-3 px-3 py-1 bg-emerald-500 text-white rounded-full text-xs font-bold shadow-md flex items-center gap-1">
            <Package size={12} />
            In Stock ({accessory.quantity})
          </div>
        ) : (
          <div className="absolute top-3 left-3 px-3 py-1 bg-red-500 text-white rounded-full text-xs font-bold shadow-md">
            Out of Stock
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1.5">
          {accessory.category}
        </p>
        <h3 className="font-bold text-foreground text-lg mb-1 group-hover:text-primary transition-colors">
          {accessory.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2 min-h-[40px]">{accessory.description}</p>
        
        <div className="flex items-center justify-between pt-3 border-t border-muted/50">
          <span className="text-xl font-bold text-primary">{formattedPrice}</span>
          <Link
            href="/contact"
            className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
            title="Enquire Now"
          >
            <ShoppingCart size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
