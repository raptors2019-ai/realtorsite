// Property Types
export type PropertyType = 'house' | 'condo' | 'townhouse' | 'commercial';
export type PropertyStatus = 'for-sale' | 'sold' | 'pending';

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  type: PropertyType;
  status: PropertyStatus;
  location: {
    address: string;
    city: string;
    province: string;
    postalCode: string;
    coordinates: { lat: number; lng: number };
  };
  details: {
    bedrooms: number;
    bathrooms: number;
    sqft: number;
    lotSize?: number;
    yearBuilt: number;
    parking: number;
  };
  features: string[];
  images: {
    url: string;
    alt: string;
    isPrimary: boolean;
  }[];
  agent: {
    name: string;
    phone: string;
    email: string;
  };
  createdAt: string;
  updatedAt: string;
}

// Chatbot Types
export interface ChatMessage {
  id: string;
  type: 'bot' | 'user';
  content: string;
  timestamp: Date;
}

export interface UserPreferences {
  propertyType?: PropertyType;
  budget?: { min: number; max: number };
  location?: string;
  bedrooms?: number;
  bathrooms?: number;
}

export interface ConversationStep {
  id: string;
  type: 'message' | 'options' | 'input' | 'range';
  content: string | string[];
  options?: { label: string; value: string; next: string }[];
  next?: string;
}

// Filter Types
export interface PropertyFilters {
  type?: PropertyType[];
  priceRange?: { min: number; max: number };
  bedrooms?: number;
  bathrooms?: number;
  location?: string;
  sortBy?: 'latest' | 'price-asc' | 'price-desc' | 'featured';
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  propertyId?: string;
}
