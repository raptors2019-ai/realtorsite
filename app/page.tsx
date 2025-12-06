export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">
            <span className="text-[#003087]">SRI</span>
            <span className="text-red-600"> COLLECTIVE GROUP</span>
          </h1>
          <p className="text-2xl text-gray-700 mb-3">
            Redefining real estate, one home at a time
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Ontario, Canada 🇨🇦
          </p>

          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8 mt-12 border-t-4 border-[#003087]">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Your Trusted Real Estate Partners
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Meet our expert team: Sri Kathiravelu and Niru Arulselvan, dedicated to helping you find your dream home.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="p-6 bg-[#003087]/5 rounded-lg border border-[#003087]/20 hover:border-[#003087] transition-all">
                <h3 className="text-xl font-semibold text-[#003087] mb-2">Buy</h3>
                <p className="text-gray-600">Find your perfect property from our extensive listings across the GTA</p>
              </div>
              <div className="p-6 bg-red-50 rounded-lg border border-red-200 hover:border-red-600 transition-all">
                <h3 className="text-xl font-semibold text-red-600 mb-2">Sell</h3>
                <p className="text-gray-600">Get the best value for your property with our expert guidance</p>
              </div>
              <div className="p-6 bg-[#003087]/5 rounded-lg border border-[#003087]/20 hover:border-[#003087] transition-all">
                <h3 className="text-xl font-semibold text-[#003087] mb-2">Invest</h3>
                <p className="text-gray-600">Discover investment opportunities that build your future</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
