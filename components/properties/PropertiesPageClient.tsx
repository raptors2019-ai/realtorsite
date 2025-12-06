"use client";

import {
  Property,
  PropertyFilters as PropertyFiltersType,
  SortOption,
} from "@/data/types";
import { filterProperties, sortProperties } from "@/lib/data-fetcher";
import { useState } from "react";
import PropertyFiltersComponent from "./PropertyFilters";
import PropertyGrid from "./PropertyGrid";

interface PropertiesPageClientProps {
  initialProperties: Property[];
}

export default function PropertiesPageClient({
  initialProperties,
}: PropertiesPageClientProps) {
  const [filters, setFilters] = useState<PropertyFiltersType>({});
  const [sortBy, setSortBy] = useState<SortOption>("latest");

  // Apply filters and sorting
  let displayedProperties = filterProperties(initialProperties, filters);
  displayedProperties = sortProperties(displayedProperties, sortBy);

  return (
    <div className="space-y-6">
      {/* Horizontal Filters */}
      <PropertyFiltersComponent
        onFilterChange={setFilters}
        onSortChange={setSortBy}
        initialFilters={filters}
        initialSort={sortBy}
      />

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-gray-400 text-sm">
          Showing{" "}
          <span className="font-semibold text-white">
            {displayedProperties.length}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-white">
            {initialProperties.length}
          </span>{" "}
          properties
        </p>
      </div>

      {/* Properties Grid */}
      <PropertyGrid properties={displayedProperties} />
    </div>
  );
}
