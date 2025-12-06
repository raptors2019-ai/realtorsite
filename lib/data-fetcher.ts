import { Property, PropertyFilters, SortOption } from '@/data/types';
import propertiesData from '@/data/properties.json';

/**
 * Get all properties from the data source
 */
export function getAllProperties(): Property[] {
  return propertiesData as Property[];
}

/**
 * Get a single property by ID
 */
export function getPropertyById(id: string): Property | undefined {
  const properties = getAllProperties();
  return properties.find((property) => property.id === id);
}

/**
 * Get featured properties
 */
export function getFeaturedProperties(limit?: number): Property[] {
  const properties = getAllProperties();
  const featured = properties.filter((property) => property.featured);

  if (limit) {
    return featured.slice(0, limit);
  }

  return featured;
}

/**
 * Filter properties based on criteria
 */
export function filterProperties(
  properties: Property[],
  filters: PropertyFilters
): Property[] {
  let filtered = [...properties];

  // Filter by property type
  if (filters.type && filters.type.length > 0) {
    filtered = filtered.filter((property) =>
      filters.type?.includes(property.type)
    );
  }

  // Filter by price range
  if (filters.priceRange) {
    const { min, max } = filters.priceRange;
    filtered = filtered.filter((property) => {
      const price = property.price;
      return price >= min && price <= max;
    });
  }

  // Filter by bedrooms (minimum)
  if (filters.bedrooms !== undefined) {
    filtered = filtered.filter(
      (property) => property.details.bedrooms >= filters.bedrooms!
    );
  }

  // Filter by bathrooms (minimum)
  if (filters.bathrooms !== undefined) {
    filtered = filtered.filter(
      (property) => property.details.bathrooms >= filters.bathrooms!
    );
  }

  // Filter by location/city
  if (filters.location) {
    filtered = filtered.filter((property) =>
      property.location.city.toLowerCase().includes(filters.location!.toLowerCase())
    );
  }

  return filtered;
}

/**
 * Sort properties
 */
export function sortProperties(
  properties: Property[],
  sortBy: SortOption
): Property[] {
  const sorted = [...properties];

  switch (sortBy) {
    case 'latest':
      return sorted.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );

    case 'price-asc':
      return sorted.sort((a, b) => a.price - b.price);

    case 'price-desc':
      return sorted.sort((a, b) => b.price - a.price);

    case 'featured':
      return sorted.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return 0;
      });

    default:
      return sorted;
  }
}

/**
 * Get properties with filtering and sorting
 */
export function getProperties(
  filters?: PropertyFilters,
  sortBy: SortOption = 'latest'
): Property[] {
  let properties = getAllProperties();

  // Apply filters if provided
  if (filters) {
    properties = filterProperties(properties, filters);
  }

  // Apply sorting
  properties = sortProperties(properties, sortBy);

  return properties;
}

/**
 * Get similar properties (same type, similar price range, different property)
 */
export function getSimilarProperties(
  property: Property,
  limit: number = 3
): Property[] {
  const allProperties = getAllProperties();
  const priceRange = property.price * 0.2; // 20% price variance

  const similar = allProperties
    .filter((p) => {
      // Exclude the current property
      if (p.id === property.id) return false;

      // Same type
      if (p.type !== property.type) return false;

      // Similar price range (within 20%)
      const priceDiff = Math.abs(p.price - property.price);
      if (priceDiff > priceRange) return false;

      return true;
    })
    .slice(0, limit);

  return similar;
}

/**
 * Format price for display
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

/**
 * Get unique cities from all properties
 */
export function getUniqueCities(): string[] {
  const properties = getAllProperties();
  const cities = properties.map((p) => p.location.city);
  return Array.from(new Set(cities)).sort();
}

/**
 * Get property count by type
 */
export function getPropertyCountByType(): Record<string, number> {
  const properties = getAllProperties();
  const counts: Record<string, number> = {};

  properties.forEach((property) => {
    counts[property.type] = (counts[property.type] || 0) + 1;
  });

  return counts;
}
