"use client";

import { Property } from "@/data/types";
import { formatPrice } from "@/lib/data-fetcher";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface PropertyCardProps {
  property: Property;
  className?: string;
}

export default function PropertyCard({ property, className }: PropertyCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const primaryImage =
    property.images.find((img) => img.isPrimary) || property.images[0];

  return (
    <Link
      href={`/properties/${property.id}`}
      className={cn(
        "group block luxury-card rounded-xl overflow-hidden transition-all duration-300",
        className
      )}
    >
      {/* Image */}
      <div className="relative h-56 bg-[#faf9f7] overflow-hidden">
        {primaryImage && (
          <Image
            src={primaryImage.url}
            alt={primaryImage.alt}
            fill
            className={cn(
              "object-cover transition-all duration-500",
              "group-hover:scale-105",
              imageLoaded ? "opacity-100" : "opacity-0"
            )}
            onLoad={() => setImageLoaded(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Status Badge */}
        {property.status === "for-sale" && (
          <div className="absolute top-3 left-3 bg-[#dc2626] text-white px-3 py-1 rounded text-xs font-medium uppercase tracking-wider">
            For Sale
          </div>
        )}

        {/* Featured Badge */}
        {property.featured && (
          <div className="absolute top-3 right-3 bg-[#0a1628] text-white px-3 py-1 rounded text-xs font-medium uppercase tracking-wider">
            Featured
          </div>
        )}

        {/* Scarcity Message */}
        {property.remainingUnits && property.remainingUnits <= 5 && (
          <div className="absolute bottom-3 left-3 bg-[#dc2626] text-white px-3 py-1 rounded text-xs font-medium">
            Only {property.remainingUnits} remaining!
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Price */}
        <div className="flex items-baseline justify-between mb-2">
          <h3 className="text-xl font-bold text-[#dc2626]">
            {formatPrice(property.price)}
          </h3>
          <span className="text-xs text-[#a8a29e] capitalize uppercase tracking-wider">
            {property.type}
          </span>
        </div>

        {/* Title */}
        <h4 className="text-base font-semibold text-[#0a1628] mb-2 line-clamp-2 group-hover:text-[#dc2626] transition-colors">
          {property.title}
        </h4>

        {/* Location */}
        <p className="text-[#57534e] text-sm mb-4 flex items-center gap-1.5">
          <svg
            className="w-4 h-4 flex-shrink-0 text-[#a8a29e]"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="line-clamp-1">
            {property.location.address}, {property.location.city}
          </span>
        </p>

        {/* Property Details */}
        <div className="flex items-center gap-4 text-sm text-[#57534e] border-t border-[#e7e5e4] pt-4">
          {/* Bedrooms */}
          <div className="flex items-center gap-1.5">
            <svg
              className="w-4 h-4 text-[#a8a29e]"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>{property.details.bedrooms} bed</span>
          </div>

          {/* Bathrooms */}
          <div className="flex items-center gap-1.5">
            <svg
              className="w-4 h-4 text-[#a8a29e]"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span>{property.details.bathrooms} bath</span>
          </div>

          {/* Square Feet */}
          <div className="flex items-center gap-1.5">
            <svg
              className="w-4 h-4 text-[#a8a29e]"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            <span>{property.details.sqft.toLocaleString()} sqft</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
