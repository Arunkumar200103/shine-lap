import type { ApiCategory, ApiBrand, ApiProduct, ApiAccessory, ApiService } from './types';

// ============================================
// API Configuration
// ============================================

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'https://71c7-2401-4900-632f-8057-a92b-9e0b-a574-dd9.ngrok-free.app';

/**
 * Convert a relative media path from the API to a full URL.
 * e.g. "/media/products/OIP_3.jpg" → "https://...ngrok.app/media/products/OIP_3.jpg"
 */
export function getImageUrl(path: string): string {
  if (!path) return '/product-laptop.png'; // fallback
  if (path.startsWith('http')) return path; // already absolute
  return `${API_BASE}${path}`;
}

// ============================================
// Fetch helpers with ngrok bypass header
// ============================================

async function apiFetch<T>(endpoint: string): Promise<T> {
  const url = `${API_BASE}${endpoint}`;
  const res = await fetch(url, {
    headers: {
      'ngrok-skip-browser-warning': 'true',  // bypass ngrok interstitial
    },
    next: { revalidate: 60 }, // ISR: revalidate every 60 seconds
  });

  if (!res.ok) {
    throw new Error(`API Error: ${res.status} ${res.statusText} — ${url}`);
  }

  return res.json();
}

// ============================================
// GET Endpoints
// ============================================

/** Fetch all categories */
export async function getCategories(): Promise<ApiCategory[]> {
  return apiFetch<ApiCategory[]>('/laptops/categories/');
}

/** Fetch all brands */
export async function getBrands(): Promise<ApiBrand[]> {
  return apiFetch<ApiBrand[]>('/laptops/brands/');
}

/** Fetch all products */
export async function getProducts(): Promise<ApiProduct[]> {
  return apiFetch<ApiProduct[]>('/laptops/products/');
}

/** Fetch all accessories */
export async function getAccessories(): Promise<ApiAccessory[]> {
  return apiFetch<ApiAccessory[]>('/laptops/accessories/');
}

/** Fetch all services */
export async function getServices(): Promise<ApiService[]> {
  return apiFetch<ApiService[]>('/laptops/services/');
}

// ============================================
// POST Endpoints
// ============================================

/** Create a new category */
export async function createCategory(formData: FormData): Promise<ApiCategory> {
  const url = `${API_BASE}/laptops/categories/`;
  const res = await fetch(url, {
    method: 'POST',
    body: formData,
    headers: {
      'ngrok-skip-browser-warning': 'true',
    },
  });
  if (!res.ok) throw new Error(`Failed to create category: ${res.statusText}`);
  return res.json();
}

/** Create a new brand */
export async function createBrand(formData: FormData): Promise<ApiBrand> {
  const url = `${API_BASE}/laptops/brands/`;
  const res = await fetch(url, {
    method: 'POST',
    body: formData,
    headers: {
      'ngrok-skip-browser-warning': 'true',
    },
  });
  if (!res.ok) throw new Error(`Failed to create brand: ${res.statusText}`);
  return res.json();
}

/** Create a new product */
export async function createProduct(formData: FormData): Promise<ApiProduct> {
  const url = `${API_BASE}/laptops/products/`;
  const res = await fetch(url, {
    method: 'POST',
    body: formData,
    headers: {
      'ngrok-skip-browser-warning': 'true',
    },
  });
  if (!res.ok) throw new Error(`Failed to create product: ${res.statusText}`);
  return res.json();
}

/** Create a new accessory */
export async function createAccessory(formData: FormData): Promise<ApiAccessory> {
  const url = `${API_BASE}/laptops/accessories/`;
  const res = await fetch(url, {
    method: 'POST',
    body: formData,
    headers: {
      'ngrok-skip-browser-warning': 'true',
    },
  });
  if (!res.ok) throw new Error(`Failed to create accessory: ${res.statusText}`);
  return res.json();
}

/** Create a new service */
export async function createService(formData: FormData): Promise<ApiService> {
  const url = `${API_BASE}/laptops/services/`;
  const res = await fetch(url, {
    method: 'POST',
    body: formData,
    headers: {
      'ngrok-skip-browser-warning': 'true',
    },
  });
  if (!res.ok) throw new Error(`Failed to create service: ${res.statusText}`);
  return res.json();
}

// ============================================
// Derived helpers
// ============================================

/** Get a single category by ID */
export async function getCategoryById(id: number): Promise<ApiCategory | undefined> {
  const categories = await getCategories();
  return categories.find(c => c.id === id);
}

/** Get a single brand by ID */
export async function getBrandById(id: number): Promise<ApiBrand | undefined> {
  const brands = await getBrands();
  return brands.find(b => b.id === id);
}

/** Get products filtered by brand ID */
export async function getProductsByBrand(brandId: number): Promise<ApiProduct[]> {
  const products = await getProducts();
  return products.filter(p => p.brand === brandId);
}

/** Get a single accessory by ID */
export async function getAccessoryById(id: number): Promise<ApiAccessory | undefined> {
  const accessories = await getAccessories();
  return accessories.find(a => a.id === id);
}

/** Get a single service by ID */
export async function getServiceById(id: number): Promise<ApiService | undefined> {
  const services = await getServices();
  return services.find(s => s.id === id);
}

/** Get products belonging to a specific category (via brand → category) */
export async function getProductsByCategory(categoryId: number): Promise<ApiProduct[]> {
  const [brands, products] = await Promise.all([getBrands(), getProducts()]);
  const brandIdsInCategory = brands.filter(b => b.category === categoryId).map(b => b.id);
  return products.filter(p => brandIdsInCategory.includes(p.brand));
}

/** Get brands belonging to a specific category */
export async function getBrandsByCategory(categoryId: number): Promise<ApiBrand[]> {
  const brands = await getBrands();
  return brands.filter(b => b.category === categoryId);
}

/**
 * Parse specs JSON string from API.
 * Input:  'ram":"16GB","ssd":"512GB"' (sometimes malformed)
 * Output: { ram: "16GB", ssd: "512GB" } or fallback string
 */
export function parseSpecs(specs: string): Record<string, string> | null {
  if (!specs) return null;
  try {
    // Try parsing as-is first
    const parsed = JSON.parse(specs);
    if (typeof parsed === 'object') return parsed;
  } catch {
    // Try wrapping in braces if it looks like partial JSON
    try {
      const wrapped = `{${specs.replace(/^[{"]+|[}"]+$/g, '')}}`;
      const parsed = JSON.parse(wrapped);
      if (typeof parsed === 'object') return parsed;
    } catch {
      // Return null if we can't parse it
    }
  }
  return null;
}

/**
 * Format specs as a readable string.
 * e.g. { ram: "16GB", ssd: "512GB" } → "RAM: 16GB, SSD: 512GB"
 */
export function formatSpecs(specs: string): string {
  const parsed = parseSpecs(specs);
  if (!parsed) return specs; // return raw string as fallback
  return Object.entries(parsed)
    .map(([key, value]) => `${key.toUpperCase()}: ${value}`)
    .join(', ');
}

/**
 * Format price with Indian Rupee symbol.
 * e.g. "85000.00" → "₹85,000"
 */
export function formatPrice(price: string): string {
  const num = parseFloat(price);
  if (isNaN(num)) return `₹${price}`;
  return `₹${num.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;
}
