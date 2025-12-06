import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a1628]">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold tracking-wider text-white">
                Sri <span className="text-[#dc2626]">Collective</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm mb-6 leading-relaxed">
              Redefining real estate, one home at a time. Your trusted partners
              for pre-construction and luxury properties in Ontario.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/remaxsri/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-[#dc2626] hover:border-[#dc2626] transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/thesneakerrealtor_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-[#dc2626] hover:border-[#dc2626] transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-sm mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-white/60 hover:text-[#dc2626] transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/builder-projects"
                  className="text-white/60 hover:text-[#dc2626] transition-colors text-sm"
                >
                  Builder Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/properties"
                  className="text-white/60 hover:text-[#dc2626] transition-colors text-sm"
                >
                  Properties
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/60 hover:text-[#dc2626] transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-sm mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/builder-projects"
                  className="text-white/60 hover:text-[#dc2626] transition-colors text-sm"
                >
                  Pre-Construction
                </Link>
              </li>
              <li>
                <Link
                  href="/properties"
                  className="text-white/60 hover:text-[#dc2626] transition-colors text-sm"
                >
                  Buy a Home
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/60 hover:text-[#dc2626] transition-colors text-sm"
                >
                  Sell Your Property
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/60 hover:text-[#dc2626] transition-colors text-sm"
                >
                  Investment Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-sm mb-6">
              Our Team
            </h4>
            <div className="space-y-4">
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="font-medium text-white text-sm">
                  Sri Kathiravelu
                </p>
                <a
                  href="https://www.instagram.com/remaxsri/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-white/60 hover:text-[#dc2626] transition-colors"
                >
                  @remaxsri
                </a>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="font-medium text-white text-sm">Niru Arulselvan</p>
                <a
                  href="https://www.instagram.com/thesneakerrealtor_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-white/60 hover:text-[#dc2626] transition-colors block"
                >
                  @thesneakerrealtor_
                </a>
                <a
                  href="tel:+14167860431"
                  className="text-xs text-white/60 hover:text-[#dc2626] transition-colors block mt-1"
                >
                  +1 (416) 786-0431
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="section-divider-light mt-12 mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            &copy; {currentYear} Sri Collective Group. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            RE/MAX & Experts Brokerage &bull; Ontario, Canada
          </p>
        </div>
      </div>
    </footer>
  );
}
