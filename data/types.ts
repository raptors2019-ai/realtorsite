// Property Types
export type PropertyType = 'house' | 'condo' | 'townhouse' | 'commercial';
export type PropertyStatus = 'for-sale' | 'sold' | 'pending';

export interface PropertyLocation {
  address: string;
  city: string;
  province: string;
  postalCode: string;
  coordinates: { lat: number; lng: number };
}

export interface PropertyDetails {
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  lotSize?: number;
  yearBuilt: number;
  parking: number;
}

export interface PropertyImage {
  url: string;
  alt: string;
  isPrimary: boolean;
}

export interface PropertyAgent {
  name: string;
  phone: string;
  email: string;
  instagram?: string;
}

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  type: PropertyType;
  status: PropertyStatus;
  location: PropertyLocation;
  details: PropertyDetails;
  features: string[];
  images: PropertyImage[];
  agent: PropertyAgent;
  createdAt: string;
  updatedAt: string;
  featured?: boolean;
  remainingUnits?: number; // For scarcity messaging
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

export type ConversationStepType = 'message' | 'options' | 'input' | 'range';

export interface ConversationOption {
  label: string;
  value: string;
  next: string;
  icon?: string;
}

export interface ConversationStep {
  id: string;
  type: ConversationStepType;
  content: string | string[];
  options?: ConversationOption[];
  next?: string;
  validation?: {
    min?: number;
    max?: number;
    required?: boolean;
  };
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
  phone: string;
  message: string;
  propertyId?: string;
  preferredContact?: 'email' | 'phone' | 'sms';
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Sort Options
export type SortOption = 'latest' | 'price-asc' | 'price-desc' | 'featured';
