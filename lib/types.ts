// ============================================
// API Response Types — matches Django backend
// ============================================

/** Category from GET /laptops/categories/ */
export interface ApiCategory {
  id: number;
  name: string;
  image: string;       // e.g. "/media/categories/Electronics.jpg"
  description: string;
}

/** Brand from GET /laptops/brands/ */
export interface ApiBrand {
  id: number;
  name: string;
  icon: string;        // e.g. "/media/brands/OIP_2.jpg"
  series: string;      // comma-separated, e.g. "Inspiron,XPS"
  category: number;    // FK to Category.id
}

/** Product from GET /laptops/products/ */
export interface ApiProduct {
  id: number;
  name: string;
  image: string;       // e.g. "/media/products/OIP_3.jpg"
  stock: number;
  price: string;       // e.g. "85000.00"
  description: string;
  specs: string;       // JSON string, e.g. '{"ram":"16GB","ssd":"512GB"}'
  brand: number;       // FK to Brand.id
}

/** Accessory from GET /laptops/accessories/ */
export interface ApiAccessory {
  id: number;
  name: string;
  description: string;
  price: string;       // e.g. "500.00"
  category: string;    // e.g. "Accessories"
  inStock: boolean;
  quantity: number;
  image: string | null;
}

/** Service from GET /laptops/services/ */
export interface ApiService {
  id: number;
  name: string;
  description: string;
  price: string;       // e.g. "1500.00"
  category: string;    // e.g. "Repair"
  estimatedTime: string; // e.g. "2 days"
  warranty: string;    // e.g. "30 days"
  image: string | null;
}
