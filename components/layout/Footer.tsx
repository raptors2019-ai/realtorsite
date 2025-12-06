import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              <span className="text-white">SRI</span>
              <span className="text-red-500"> COLLECTIVE GROUP</span>
            </h3>
            <p className="text-sm text-gray-400 mb-3">
              Redefining real estate, one home at a time
            </p>
            <p className="text-xs text-gray-500">
              RE/MAX & Experts Brokerage<br />
              Ontario, Canada 🇨🇦
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/properties" className="hover:text-blue-400 transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/properties?type=buy" className="hover:text-blue-400 transition-colors">
                  Buy a Home
                </Link>
              </li>
              <li>
                <Link href="/properties?type=sell" className="hover:text-blue-400 transition-colors">
                  Sell Your Home
                </Link>
              </li>
              <li>
                <Link href="/properties?type=rent" className="hover:text-blue-400 transition-colors">
                  Rent a Property
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Meet Our Team</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <p className="font-medium text-white">Sri Kathiravelu</p>
                <p className="text-xs text-gray-400">@remaxsri</p>
              </li>
              <li>
                <p className="font-medium text-white">Niru Arulselvan</p>
                <p className="text-xs text-gray-400">@thesneakerrealtor_</p>
                <a href="tel:+14167860431" className="text-xs hover:text-red-400 transition-colors block">
                  +1 (416) 786-0431
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center text-gray-400">
          <p>&copy; {currentYear} Sri Collective Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
