import PropertiesPageClient from "@/components/properties/PropertiesPageClient";
import { getAllProperties } from "@/lib/data-fetcher";
import { Metadata } from "next";
import ChatbotWidget from "@/components/chatbot/ChatbotWidget";

export const metadata: Metadata = {
  title: "Properties | Sri Collective Group",
  description:
    "Browse our exclusive selection of properties across the Greater Toronto Area (GTA).",
};

export default function PropertiesPage() {
  const properties = getAllProperties();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-[#faf9f7]">
        <div className="relative container mx-auto px-4 text-center">
          <div className="accent-line mx-auto mb-6" />
          <p className="text-[#dc2626] uppercase tracking-[0.2em] text-sm mb-4 font-medium">
            Exclusive Listings
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-4">
            Our <span className="text-[#dc2626]">Properties</span>
          </h1>
          <p className="text-[#57534e] max-w-xl mx-auto">
            Discover your dream home from our curated collection of luxury
            properties across the Greater Toronto Area
          </p>
        </div>
      </section>

      {/* Properties Content */}
      <div className="w-full px-4 md:px-6 lg:px-8 py-12 max-w-[1600px] mx-auto">
        <PropertiesPageClient initialProperties={properties} />
      </div>

      <ChatbotWidget />
    </div>
  );
}
