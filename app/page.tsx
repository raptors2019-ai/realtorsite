import ChatbotWidget from "@/components/chatbot/ChatbotWidget";
import PropertyCard from "@/components/properties/PropertyCard";
import { getFeaturedProperties } from "@/lib/data-fetcher";
import Link from "next/link";

export default function Home() {
  const featuredProperties = getFeaturedProperties(3);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[700px] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop')",
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 hero-gradient" />

        {/* Hero Content */}
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <div className="accent-line mb-6" />
            <p className="text-white/70 uppercase tracking-[0.2em] text-sm mb-4 font-medium">
              New Builder Projects
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              The Pickering
              <br />
              <span className="font-light italic">Station</span>
              <br />
              Collection
            </h1>
            <p className="text-white/70 text-lg mb-8 max-w-md">
              Exclusive pre-construction townhomes and detached homes in prime
              Pickering location. Starting from $999,000.
            </p>
            <div className="flex gap-4">
              <Link
                href="/builder-projects"
                className="btn-primary px-8 py-3 rounded-lg text-sm font-medium"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="btn-outline-light px-8 py-3 rounded-lg text-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Featured Property Info Card */}
          <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 info-card p-6 rounded-xl max-w-xs">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[#57534e] text-sm">Status:</span>
                <span className="text-[#0a1628] font-medium">Pre-Construction</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#57534e] text-sm">Project Type:</span>
                <span className="text-[#0a1628] font-medium">
                  Townhomes & Detached
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#57534e] text-sm">Starting Price:</span>
                <span className="text-[#dc2626] font-semibold">$999,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#57534e] text-sm">Closing:</span>
                <span className="text-[#0a1628] font-medium">Q4 2026</span>
              </div>
            </div>
            <Link
              href="/builder-projects"
              className="mt-5 block text-center btn-outline px-4 py-2.5 rounded-lg text-sm"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* The Sri Collective Advantage Section */}
      <section className="py-24 bg-[#faf9f7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="accent-line mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
              The Sri Collective <span className="text-[#dc2626]">Advantage</span>
            </h2>
            <p className="text-[#57534e] max-w-2xl mx-auto">
              We bring expertise, exclusive access, and a client-first approach
              to every transaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Feature 1 */}
            <div className="luxury-card rounded-xl p-8 text-center group">
              <div className="feature-icon mx-auto mb-6">
                <svg
                  className="w-7 h-7 text-[#dc2626]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#0a1628] mb-3">
                Exclusive Builder Access
              </h3>
              <p className="text-[#57534e] text-sm leading-relaxed">
                Get first access to pre-construction developments before they
                hit the public market. Direct builder relationships mean better
                pricing and selection.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="luxury-card rounded-xl p-8 text-center group">
              <div className="feature-icon mx-auto mb-6">
                <svg
                  className="w-7 h-7 text-[#dc2626]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#0a1628] mb-3">
                Pre-Construction Expertise
              </h3>
              <p className="text-[#57534e] text-sm leading-relaxed">
                Navigate the pre-construction market with confidence. Our
                expertise ensures you make informed decisions with optimal
                investment potential.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="luxury-card rounded-xl p-8 text-center group">
              <div className="feature-icon mx-auto mb-6">
                <svg
                  className="w-7 h-7 text-[#dc2626]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#0a1628] mb-3">
                Digital-First Experience
              </h3>
              <p className="text-[#57534e] text-sm leading-relaxed">
                Experience seamless property discovery through our digital
                platform. Virtual tours, instant updates, and 24/7 support at
                your fingertips.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#dc2626] uppercase tracking-[0.2em] text-sm mb-3 font-medium">
              Featured
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628]">
              Builder Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Project Card 1 */}
            <Link
              href="/builder-projects"
              className="luxury-card rounded-xl overflow-hidden group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-[#dc2626] text-white text-xs px-3 py-1.5 rounded font-medium">
                    Pre-Construction
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#0a1628] mb-2 group-hover:text-[#dc2626] transition-colors">
                  The Pickering Station Collection
                </h3>
                <p className="text-[#57534e] text-sm mb-4">
                  Luxury townhomes and detached homes in Pickering
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#dc2626] font-semibold">
                    From $999,000
                  </span>
                  <span className="text-[#a8a29e] text-sm">Q4 2026</span>
                </div>
              </div>
            </Link>

            {/* Project Card 2 */}
            <Link
              href="/builder-projects"
              className="luxury-card rounded-xl overflow-hidden group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-[#0a1628] text-white text-xs px-3 py-1.5 rounded font-medium">
                    Coming Soon
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#0a1628] mb-2 group-hover:text-[#dc2626] transition-colors">
                  Oakville Waterfront Residences
                </h3>
                <p className="text-[#57534e] text-sm mb-4">
                  Premium lakefront condominiums in South Oakville
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-[#dc2626] font-semibold">
                    From $1,200,000
                  </span>
                  <span className="text-[#a8a29e] text-sm">Q2 2027</span>
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/builder-projects"
              className="btn-outline px-8 py-3 rounded-lg text-sm inline-block"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-24 bg-[#faf9f7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#dc2626] uppercase tracking-[0.2em] text-sm mb-3 font-medium">
              Explore
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628]">
              Featured Properties
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/properties"
              className="btn-outline px-8 py-3 rounded-lg text-sm inline-block"
            >
              View All Properties
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="accent-line mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
                About Sri Collective Group
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-[#57534e] leading-relaxed">
                  Sri Collective Group brings together the expertise of Sri Kathiravelu
                  and Niru Arulselvan, two of Ontario&apos;s most trusted real estate professionals.
                  With deep connections to builders and developers across the Greater Toronto Area,
                  we provide our clients with exclusive access to pre-construction opportunities
                  and luxury properties.
                </p>
                <p className="text-[#57534e] leading-relaxed">
                  Our digital-first approach combines cutting-edge technology with personalized
                  service, ensuring you have the tools and support needed to make confident
                  real estate decisions. Whether you&apos;re a first-time buyer or seasoned investor,
                  we&apos;re committed to helping you find your perfect property.
                </p>
                <div className="flex gap-4 pt-4">
                  <Link
                    href="/contact"
                    className="btn-primary px-6 py-3 rounded-lg text-sm font-medium"
                  >
                    Get in Touch
                  </Link>
                  <Link
                    href="/properties"
                    className="btn-outline px-6 py-3 rounded-lg text-sm"
                  >
                    View Listings
                  </Link>
                </div>
              </div>

              <div className="luxury-card rounded-xl p-8">
                <h3 className="text-xl font-semibold text-[#0a1628] mb-6">Why Choose Us</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#dc2626] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="text-[#0a1628] font-medium mb-1">Direct Builder Access</h4>
                      <p className="text-[#57534e] text-sm">Exclusive pre-construction deals before public release</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#dc2626] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="text-[#0a1628] font-medium mb-1">Market Expertise</h4>
                      <p className="text-[#57534e] text-sm">Deep knowledge of GTA markets and investment opportunities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#dc2626] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="text-[#0a1628] font-medium mb-1">White-Glove Service</h4>
                      <p className="text-[#57534e] text-sm">Personalized support from search to closing and beyond</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#dc2626] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="text-[#0a1628] font-medium mb-1">Digital Innovation</h4>
                      <p className="text-[#57534e] text-sm">Modern tools and 24/7 online access to your search</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Navy */}
      <section className="py-24 bg-[#0a1628]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="section-divider-light w-24 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Let&apos;s Work <span className="text-[#dc2626]">Together</span>
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Whether you&apos;re looking for pre-construction opportunities or resale properties,
                we&apos;re here to guide you every step of the way.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Contact Card 1 */}
              <div className="luxury-card-dark rounded-xl p-6 text-center">
                <div className="feature-icon-dark mx-auto mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </div>
                <h3 className="text-white font-medium mb-2">Phone</h3>
                <a href="tel:+14167860431" className="text-white/70 hover:text-white transition-colors">
                  +1 (416) 786-0431
                </a>
              </div>

              {/* Contact Card 2 */}
              <div className="luxury-card-dark rounded-xl p-6 text-center">
                <div className="feature-icon-dark mx-auto mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <h3 className="text-white font-medium mb-2">Email</h3>
                <a href="mailto:info@sricollectivegroup.com" className="text-white/70 hover:text-white transition-colors break-all text-sm">
                  info@sricollectivegroup.com
                </a>
              </div>

              {/* Contact Card 3 */}
              <div className="luxury-card-dark rounded-xl p-6 text-center">
                <div className="feature-icon-dark mx-auto mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                  </svg>
                </div>
                <h3 className="text-white font-medium mb-2">Schedule</h3>
                <Link href="/contact" className="text-white/70 hover:text-white transition-colors">
                  Book Consultation
                </Link>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/contact"
                className="btn-primary px-8 py-3 rounded-lg text-sm font-medium inline-block"
              >
                Contact Us Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Chatbot Widget */}
      <ChatbotWidget />
    </div>
  );
}
