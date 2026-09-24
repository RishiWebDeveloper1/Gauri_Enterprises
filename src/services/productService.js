import { products } from "@/data/products";
import { categories } from "@/data/categories";

/**
 * Scalable Data Access Layer for Gauri Enterprises Furniture Catalog.
 * 
 * DESIGNED FOR FUTURE API INTEGRATION:
 * When your backend API or CMS (e.g. Supabase, Strapi, Node/Express, PostgreSQL)
 * is ready, simply update the fetch calls inside these functions without changing
 * any page components.
 */

// Simulated API base URL for future use:
// const API_BASE = process.env.NEXT_PUBLIC_API_URL || "https://api.gaurienterprises.com";

/**
 * Fetch all products with optional filters
 * @param {Object} options - { category, search, sort, featured }
 */
export async function getAllProducts(options = {}) {
  const { category, search, sort, featured } = options;

  // Simulate async API call behavior
  let result = [...products];

  if (featured) {
    result = result.filter((p) => p.isFeatured);
  }

  if (category && category !== "all") {
    result = result.filter((p) => p.category === category);
  }

  if (search && search.trim()) {
    const q = search.toLowerCase();
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.tag && p.tag.toLowerCase().includes(q))
    );
  }

  if (sort === "price-low") {
    result.sort((a, b) => a.price - b.price);
  } else if (sort === "price-high") {
    result.sort((a, b) => b.price - a.price);
  } else if (sort === "rating") {
    result.sort((a, b) => b.rating - a.rating);
  }

  return result;
}

/**
 * Fetch a single product by its unique ID / slug
 * @param {string} id - Product ID (e.g. "sofa-royal-chesterfield")
 */
export async function getProductById(id) {
  if (!id) return null;
  const product = products.find((p) => p.id === id);
  return product || null;
}

/**
 * Fetch related products from the same category
 * @param {string} category - Category ID
 * @param {string} currentProductId - ID to exclude
 * @param {number} limit - Maximum items to return
 */
export async function getRelatedProducts(category, currentProductId, limit = 4) {
  return products
    .filter((p) => p.category === category && p.id !== currentProductId)
    .slice(0, limit);
}

/**
 * Fetch all categories
 */
export async function getAllCategories() {
  return categories;
}
