"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Add scroll listener for header shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/builder-projects", label: "Builder Projects" },
    { href: "/properties", label: "Properties" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`bg-white/98 backdrop-blur-xl border-b sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-[#c9a962]/20 shadow-lg shadow-black/5"
          : "border-black/5"
      }`}
    >
      {/* Premium gold accent line at top */}
      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c9a962] to-transparent transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`} />

      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl font-semibold tracking-tight transition-all duration-300 group-hover:scale-[1.02]">
              <span className="text-[#0a1628] transition-colors duration-300">
                Sri
              </span>
              <span className="text-gradient-gold transition-colors duration-300">
                {" "}
                Collective
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium group"
              >
                <span
                  className={`relative z-10 transition-colors duration-300 ${
                    isActive(link.href)
                      ? "text-[#c9a962]"
                      : "text-[#57534e] group-hover:text-[#0a1628]"
                  }`}
                >
                  {link.label}
                </span>
                {/* Underline animation - gold */}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-[#c9a962] to-[#d4b978] transition-all duration-300 ease-out ${
                    isActive(link.href)
                      ? "w-6"
                      : "w-0 group-hover:w-6"
                  }`}
                />
                {/* Background hover effect */}
                <span className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#faf9f7] to-[#f5f3f0] scale-0 group-hover:scale-100 transition-transform duration-300 ease-out -z-10" />
              </Link>
            ))}
            <Link
              href="/contact"
              className="relative ml-4 px-6 py-2.5 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-[#0a1628] to-[#1a2d4d] overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-navy/25 hover:-translate-y-0.5"
            >
              <span className="relative z-10">Get Started</span>
              {/* Gold shimmer on hover */}
              <span className="absolute inset-0 bg-gradient-to-r from-[#1a2d4d] via-[#c9a962]/20 to-[#0a1628] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[#faf9f7] transition-colors duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-[#0a1628] rounded-full transition-all duration-300 origin-center ${
                  mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-[#0a1628] rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0 scale-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-[#0a1628] rounded-full transition-all duration-300 origin-center ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-4 pb-2 border-t border-[#c9a962]/20 mt-4">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive(link.href)
                      ? "text-[#c9a962] bg-[#c9a962]/5"
                      : "text-[#57534e] hover:text-[#0a1628] hover:bg-[#faf9f7]"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    transitionDelay: mobileMenuOpen ? `${index * 50}ms` : "0ms",
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mx-4 mt-2 px-5 py-3 rounded-lg text-sm font-medium text-center text-white bg-gradient-to-r from-[#0a1628] to-[#1a2d4d] hover:shadow-lg transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  transitionDelay: mobileMenuOpen
                    ? `${navLinks.length * 50}ms`
                    : "0ms",
                }}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
