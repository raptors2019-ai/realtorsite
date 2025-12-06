import Link from "next/link";
import ChatbotWidget from "@/components/chatbot/ChatbotWidget";

const builderProjects = [
  {
    id: "pickering-station",
    name: "The Pickering Station Collection",
    tagline: "Where Modern Living Meets Transit Convenience",
    status: "Pre-Construction",
    projectType: "Townhomes & Detached",
    location: "Pickering, Ontario",
    startingPrice: 999000,
    closingDate: "Q4 2026",
    description:
      "A stunning collection of luxury townhomes and detached homes situated just steps from the Pickering GO Station. Designed for the modern professional, these homes feature open-concept layouts, premium finishes, and smart home technology throughout.",
    features: [
      "3-4 Bedroom Layouts",
      "2,000 - 3,500 sq ft",
      "Private Rooftop Terraces",
      "2-Car Garage",
      "Smart Home Technology",
      "Premium Kitchen Appliances",
      "Hardwood Flooring",
      "Energy Efficient Design",
    ],
    highlights: [
      { label: "Walk to GO Station", value: "5 min" },
      { label: "Drive to Toronto", value: "35 min" },
      { label: "Total Units", value: "150" },
      { label: "Deposit", value: "15%" },
    ],
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    ],
  },
  {
    id: "oakville-waterfront",
    name: "Oakville Waterfront Residences",
    tagline: "Luxury Living on Lake Ontario",
    status: "Coming Soon",
    projectType: "Condominium",
    location: "South Oakville, Ontario",
    startingPrice: 1200000,
    closingDate: "Q2 2027",
    description:
      "An exclusive collection of lakefront condominiums offering breathtaking views of Lake Ontario. These residences feature floor-to-ceiling windows, private balconies, and world-class amenities including a private beach club, infinity pool, and concierge services.",
    features: [
      "1-3 Bedroom Suites",
      "800 - 2,500 sq ft",
      "Lake & City Views",
      "Private Balconies",
      "24/7 Concierge",
      "Infinity Pool",
      "Private Beach Access",
      "Underground Parking",
    ],
    highlights: [
      { label: "Walk to Beach", value: "2 min" },
      { label: "Drive to Toronto", value: "30 min" },
      { label: "Total Suites", value: "200" },
      { label: "Deposit", value: "20%" },
    ],
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
    ],
  },
];

export default function BuilderProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-[#faf9f7]">
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="accent-line mx-auto mb-6" />
            <p className="text-[#dc2626] uppercase tracking-[0.2em] text-sm mb-4 font-medium">
              Exclusive Access
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-6">
              Builder <span className="text-[#dc2626]">Projects</span>
            </h1>
            <p className="text-[#57534e] text-lg max-w-xl mx-auto">
              Get exclusive first access to Ontario&apos;s most anticipated
              pre-construction developments. Direct builder relationships mean
              priority allocation and preferred pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-24 max-w-6xl mx-auto">
            {builderProjects.map((project, index) => (
              <div
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Side */}
                <div
                  className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url('${project.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-4 py-2 rounded text-xs uppercase tracking-wider font-medium ${
                          project.status === "Pre-Construction"
                            ? "bg-[#dc2626] text-white"
                            : "bg-[#0a1628] text-white"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/95 backdrop-blur p-4 rounded-lg shadow-lg">
                        <div className="grid grid-cols-4 gap-4">
                          {project.highlights.map((highlight) => (
                            <div key={highlight.label} className="text-center">
                              <p className="text-[#dc2626] font-semibold text-lg">
                                {highlight.value}
                              </p>
                              <p className="text-[#57534e] text-xs">
                                {highlight.label}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Gallery Thumbnails */}
                  <div className="grid grid-cols-3 gap-3 mt-3">
                    {project.gallery.map((img, i) => (
                      <div
                        key={i}
                        className="aspect-video rounded-lg overflow-hidden shadow-md"
                      >
                        <div
                          className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-300"
                          style={{ backgroundImage: `url('${img}')` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content Side */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <p className="text-[#dc2626] uppercase tracking-widest text-sm mb-2 font-medium">
                    {project.projectType} &bull; {project.location}
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-2">
                    {project.name}
                  </h2>
                  <p className="text-[#57534e] italic mb-6">{project.tagline}</p>
                  <p className="text-[#57534e] mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Price & Closing */}
                  <div className="flex gap-8 mb-8">
                    <div>
                      <p className="text-[#a8a29e] text-sm">Starting From</p>
                      <p className="text-2xl font-bold text-[#dc2626]">
                        ${project.startingPrice.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-[#a8a29e] text-sm">Estimated Closing</p>
                      <p className="text-2xl font-semibold text-[#0a1628]">
                        {project.closingDate}
                      </p>
                    </div>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-[#dc2626]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-[#57534e] text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-4">
                    <Link
                      href="/contact"
                      className="btn-primary px-8 py-3 rounded-lg text-sm font-medium"
                    >
                      Request Info
                    </Link>
                    <Link
                      href="/contact"
                      className="btn-outline px-8 py-3 rounded-lg text-sm font-medium"
                    >
                      Book VIP Access
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Pre-Construction Section */}
      <section className="py-24 bg-[#faf9f7]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="accent-line mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1628] mb-4">
              Why <span className="text-[#dc2626]">Pre-Construction?</span>
            </h2>
            <p className="text-[#57534e] max-w-2xl mx-auto">
              Pre-construction offers unique advantages for investors and
              homebuyers alike. Here&apos;s why savvy buyers choose to buy
              early.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                  />
                ),
                title: "Lower Entry Price",
                description:
                  "Lock in today's price and watch your investment appreciate as the project develops.",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                  />
                ),
                title: "Customization",
                description:
                  "Select your preferred finishes, upgrades, and layouts to create your perfect home.",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                  />
                ),
                title: "Priority Selection",
                description:
                  "Choose your preferred unit, floor, and exposure before the general public.",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                  />
                ),
                title: "Equity Building",
                description:
                  "Build equity as the project progresses without living in it during construction.",
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="luxury-card rounded-xl p-8 text-center"
              >
                <div className="feature-icon mx-auto mb-6">
                  <svg
                    className="w-7 h-7 text-[#dc2626]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    {benefit.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#0a1628] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[#57534e] text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Navy */}
      <section className="py-24 bg-[#0a1628]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="section-divider-light w-24 mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Get <span className="text-[#dc2626]">VIP Access</span> to
              Upcoming Projects
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Join our exclusive list to receive early access to new
              developments, preferred pricing, and priority unit selection
              before public release.
            </p>
            <Link
              href="/contact"
              className="btn-primary px-10 py-4 rounded-lg text-sm font-medium inline-block"
            >
              Register for VIP Access
            </Link>
          </div>
        </div>
      </section>

      {/* Chatbot Widget */}
      <ChatbotWidget />
    </div>
  );
}
