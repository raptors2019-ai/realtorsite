import Link from "next/link";

export default function PropertyNotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mx-auto w-32 h-32 mb-6 rounded-full bg-gray-100 flex items-center justify-center">
          <svg
            className="w-16 h-16 text-gray-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Property Not Found</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, we couldn't find the property you're looking for. It may have been sold or removed from our listings.
        </p>
        <Link
          href="/properties"
          className="inline-block bg-[#003087] text-white px-8 py-3 rounded-lg hover:bg-[#002060] transition-colors font-semibold"
        >
          Browse All Properties
        </Link>
      </div>
    </div>
  );
}
