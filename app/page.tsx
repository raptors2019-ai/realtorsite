export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">
            Realtor Site
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Your trusted partner in finding the perfect home
          </p>

          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8 mt-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Welcome to Our Real Estate Platform
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              We help you find your dream home with personalized service and expert guidance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Buy</h3>
                <p className="text-gray-600">Find your perfect property from our extensive listings</p>
              </div>
              <div className="p-6 bg-indigo-50 rounded-lg">
                <h3 className="text-xl font-semibold text-indigo-900 mb-2">Sell</h3>
                <p className="text-gray-600">Get the best value for your property with our expertise</p>
              </div>
              <div className="p-6 bg-purple-50 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-900 mb-2">Rent</h3>
                <p className="text-gray-600">Discover rental properties that fit your lifestyle</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
