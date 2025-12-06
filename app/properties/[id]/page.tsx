import { getAllProperties, getPropertyById, getSimilarProperties, formatPrice } from "@/lib/data-fetcher";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PropertyGrid from "@/components/properties/PropertyGrid";
import ChatbotWidget from "@/components/chatbot/ChatbotWidget";

interface PropertyDetailPageProps {
  params: Promise<{ id: string }>;
}

// Generate static params for all properties
export async function generateStaticParams() {
  const properties = getAllProperties();
  return properties.map((property) => ({
    id: property.id,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PropertyDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const property = getPropertyById(id);

  if (!property) {
    return {
      title: "Property Not Found",
    };
  }

  return {
    title: `${property.title} | Sri Collective Group`,
    description: property.description,
  };
}

export default async function PropertyDetailPage({ params }: PropertyDetailPageProps) {
  const { id } = await params;
  const property = getPropertyById(id);

  if (!property) {
    notFound();
  }

  const similarProperties = getSimilarProperties(property, 3);
  const primaryImage = property.images.find((img) => img.isPrimary) || property.images[0];

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="bg-[#faf9f7] border-b border-[#e7e5e4]">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 text-[#0a1628] hover:text-[#dc2626] transition-colors font-medium"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
            Back to Properties
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images and Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main Image */}
            <div className="relative h-96 md:h-[500px] rounded-xl overflow-hidden bg-[#faf9f7] shadow-lg">
              <Image
                src={primaryImage.url}
                alt={primaryImage.alt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 66vw"
              />
              {property.status === "for-sale" && (
                <div className="absolute top-4 left-4 bg-[#dc2626] text-white px-4 py-2 rounded-lg text-sm font-medium uppercase tracking-wider">
                  For Sale
                </div>
              )}
              {property.featured && (
                <div className="absolute top-4 right-4 bg-[#0a1628] text-white px-4 py-2 rounded-lg text-sm font-medium uppercase tracking-wider">
                  Featured
                </div>
              )}
            </div>

            {/* Gallery Thumbnails */}
            {property.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {property.images.map((image, index) => (
                  <div
                    key={index}
                    className="relative h-24 rounded-lg overflow-hidden bg-[#faf9f7] cursor-pointer hover:opacity-80 transition-opacity shadow-md"
                  >
                    <Image
                      src={image.url}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 25vw, 15vw"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Description */}
            <div className="luxury-card rounded-xl p-8">
              <h2 className="text-2xl font-bold text-[#0a1628] mb-4">Description</h2>
              <p className="text-[#57534e] leading-relaxed">{property.description}</p>
            </div>

            {/* Features */}
            <div className="luxury-card rounded-xl p-8">
              <h2 className="text-2xl font-bold text-[#0a1628] mb-6">Features</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-[#57534e]">
                    <svg
                      className="w-5 h-5 text-[#dc2626] flex-shrink-0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Property Info */}
          <div className="space-y-6">
            {/* Price and Title */}
            <div className="luxury-card rounded-xl p-6">
              <div className="flex items-baseline justify-between mb-4">
                <h1 className="text-3xl font-bold text-[#dc2626]">
                  {formatPrice(property.price)}
                </h1>
                <span className="text-sm text-[#57534e] capitalize px-3 py-1.5 bg-[#faf9f7] rounded-lg font-medium">
                  {property.type}
                </span>
              </div>
              <h2 className="text-xl font-semibold text-[#0a1628] mb-3">{property.title}</h2>
              <p className="text-[#57534e] flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[#a8a29e]"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {property.location.address}, {property.location.city}, {property.location.province}
              </p>
            </div>

            {/* Property Details */}
            <div className="luxury-card rounded-xl p-6">
              <h3 className="text-lg font-semibold text-[#0a1628] mb-4">Property Details</h3>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between items-center py-3 border-b border-[#e7e5e4]">
                  <span className="text-[#57534e]">Bedrooms</span>
                  <span className="font-semibold text-[#0a1628]">{property.details.bedrooms}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-[#e7e5e4]">
                  <span className="text-[#57534e]">Bathrooms</span>
                  <span className="font-semibold text-[#0a1628]">{property.details.bathrooms}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-[#e7e5e4]">
                  <span className="text-[#57534e]">Square Feet</span>
                  <span className="font-semibold text-[#0a1628]">{property.details.sqft.toLocaleString()}</span>
                </div>
                {property.details.lotSize && (
                  <div className="flex justify-between items-center py-3 border-b border-[#e7e5e4]">
                    <span className="text-[#57534e]">Lot Size</span>
                    <span className="font-semibold text-[#0a1628]">{property.details.lotSize.toLocaleString()} sqft</span>
                  </div>
                )}
                <div className="flex justify-between items-center py-3 border-b border-[#e7e5e4]">
                  <span className="text-[#57534e]">Year Built</span>
                  <span className="font-semibold text-[#0a1628]">{property.details.yearBuilt}</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-[#57534e]">Parking Spaces</span>
                  <span className="font-semibold text-[#0a1628]">{property.details.parking}</span>
                </div>
              </div>
            </div>

            {/* Agent Info */}
            <div className="luxury-card rounded-xl p-6">
              <h3 className="text-lg font-semibold text-[#0a1628] mb-4">Contact Agent</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-[#57534e]">Listed by</p>
                  <p className="font-semibold text-[#0a1628]">Sri Collective Group</p>
                </div>
                <Link
                  href={`/contact?property=${property.id}`}
                  className="btn-primary block w-full text-center py-3 rounded-lg font-medium"
                >
                  Request Information
                </Link>
                <Link
                  href="/contact"
                  className="btn-outline block w-full text-center py-3 rounded-lg font-medium"
                >
                  Schedule Viewing
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Properties */}
        {similarProperties.length > 0 && (
          <div className="mt-20">
            <div className="text-center mb-12">
              <div className="accent-line mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-[#0a1628]">
                Similar <span className="text-[#dc2626]">Properties</span>
              </h2>
            </div>
            <PropertyGrid properties={similarProperties} />
          </div>
        )}
      </div>

      <ChatbotWidget />
    </div>
  );
}
