import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-4">
              Niruban<span className="text-blue-500">.</span>
            </h3>
            <p className="text-sm text-gray-400">
              Your trusted partner in finding the perfect home in the Greater Toronto Area.
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
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+1234567890" className="hover:text-blue-400 transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li>
                <a href="mailto:info@niruban.com" className="hover:text-blue-400 transition-colors">
                  info@niruban.com
                </a>
              </li>
              <li className="text-gray-400">
                Greater Toronto Area, ON
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center text-gray-400">
          <p>&copy; {currentYear} Niruban Realtor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
