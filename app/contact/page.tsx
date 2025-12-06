"use client";

import { useState } from "react";
import ChatbotWidget from "@/components/chatbot/ChatbotWidget";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    propertyInterest: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call later)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        propertyInterest: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-[#faf9f7]">
        <div className="relative container mx-auto px-4 text-center">
          <div className="accent-line mx-auto mb-6" />
          <p className="text-[#dc2626] uppercase tracking-[0.2em] text-sm mb-4 font-medium">
            Let&apos;s Connect
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-4">
            Get In <span className="text-[#dc2626]">Touch</span>
          </h1>
          <p className="text-[#57534e] max-w-xl mx-auto">
            Ready to find your dream home? Let&apos;s start the conversation.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="luxury-card rounded-xl p-8">
            <h2 className="text-xl font-semibold text-[#0a1628] mb-6">
              Send Us a Message
            </h2>

            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-700 text-sm">
                  Thank you! We&apos;ll get back to you soon.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-[#57534e] mb-2 font-medium"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-[#e7e5e4] rounded-lg text-[#0a1628] focus:outline-none focus:border-[#dc2626]/50 focus:ring-1 focus:ring-[#dc2626]/20 transition-all placeholder-[#a8a29e]"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-[#57534e] mb-2 font-medium"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-[#e7e5e4] rounded-lg text-[#0a1628] focus:outline-none focus:border-[#dc2626]/50 focus:ring-1 focus:ring-[#dc2626]/20 transition-all placeholder-[#a8a29e]"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm text-[#57534e] mb-2 font-medium"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-[#e7e5e4] rounded-lg text-[#0a1628] focus:outline-none focus:border-[#dc2626]/50 focus:ring-1 focus:ring-[#dc2626]/20 transition-all placeholder-[#a8a29e]"
                  placeholder="+1 (416) 555-0123"
                />
              </div>

              <div>
                <label
                  htmlFor="propertyInterest"
                  className="block text-sm text-[#57534e] mb-2 font-medium"
                >
                  I&apos;m Interested In
                </label>
                <select
                  id="propertyInterest"
                  name="propertyInterest"
                  value={formData.propertyInterest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-[#e7e5e4] rounded-lg text-[#0a1628] focus:outline-none focus:border-[#dc2626]/50 focus:ring-1 focus:ring-[#dc2626]/20 transition-all"
                >
                  <option value="">Select an option</option>
                  <option value="preconstruction">Pre-Construction</option>
                  <option value="buying">Buying a Home</option>
                  <option value="selling">Selling a Home</option>
                  <option value="investing">Investment Properties</option>
                  <option value="renting">Renting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-[#57534e] mb-2 font-medium"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-[#e7e5e4] rounded-lg text-[#0a1628] focus:outline-none focus:border-[#dc2626]/50 focus:ring-1 focus:ring-[#dc2626]/20 transition-all resize-none placeholder-[#a8a29e]"
                  placeholder="Tell us about your dream home..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary px-6 py-3 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Team Card 1 */}
            <div className="luxury-card rounded-xl p-6 border-l-4 border-[#dc2626]">
              <h3 className="text-lg font-semibold text-[#0a1628] mb-1">
                Sri Kathiravelu
              </h3>
              <p className="text-sm text-[#dc2626] mb-4 font-medium">Real Estate Agent</p>
              <div className="space-y-2 text-sm">
                <p className="text-[#57534e]">
                  <a
                    href="https://www.instagram.com/remaxsri/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#dc2626] transition-colors"
                  >
                    @remaxsri
                  </a>
                </p>
              </div>
            </div>

            {/* Team Card 2 */}
            <div className="luxury-card rounded-xl p-6 border-l-4 border-[#dc2626]">
              <h3 className="text-lg font-semibold text-[#0a1628] mb-1">
                Niru Arulselvan
              </h3>
              <p className="text-sm text-[#dc2626] mb-4 font-medium">Real Estate Agent</p>
              <div className="space-y-2 text-sm">
                <p className="text-[#57534e]">
                  <a
                    href="mailto:info@sricollectivegroup.com"
                    className="hover:text-[#dc2626] transition-colors"
                  >
                    info@sricollectivegroup.com
                  </a>
                </p>
                <p className="text-[#57534e]">
                  <a
                    href="tel:+14167860431"
                    className="hover:text-[#dc2626] transition-colors"
                  >
                    +1 (416) 786-0431
                  </a>
                </p>
                <p className="text-[#57534e]">
                  <a
                    href="https://www.instagram.com/thesneakerrealtor_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#dc2626] transition-colors"
                  >
                    @thesneakerrealtor_
                  </a>
                </p>
              </div>
            </div>

            {/* Office Info */}
            <div className="luxury-card rounded-xl p-6">
              <h3 className="text-lg font-semibold text-[#0a1628] mb-4">
                Our Office
              </h3>
              <div className="space-y-3 text-sm text-[#57534e]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#faf9f7] border border-[#e7e5e4] flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-[#dc2626]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                      />
                    </svg>
                  </div>
                  <span>RE/MAX & Experts Brokerage</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#faf9f7] border border-[#e7e5e4] flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-[#dc2626]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                  </div>
                  <span>Ontario, Canada</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#faf9f7] border border-[#e7e5e4] flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-[#dc2626]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </div>
                  <span>Available 7 days a week</span>
                </div>
              </div>
            </div>

            {/* VIP Access CTA */}
            <div className="bg-[#0a1628] rounded-xl p-6 text-center">
              <div className="section-divider-light w-16 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">
                Want VIP Access?
              </h3>
              <p className="text-sm text-white/70 mb-4">
                Get early access to pre-construction projects and exclusive
                listings.
              </p>
              <a
                href="/builder-projects"
                className="btn-primary px-6 py-2.5 rounded-lg text-sm font-medium inline-block"
              >
                View Builder Projects
              </a>
            </div>
          </div>
        </div>
      </div>

      <ChatbotWidget />
    </div>
  );
}
