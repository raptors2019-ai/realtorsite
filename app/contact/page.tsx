"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    propertyInterest: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      setFormData({ name: "", email: "", phone: "", message: "", propertyInterest: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-[#003087]">Get In Touch</span>
          </h1>
          <p className="text-xl text-gray-700">
            Ready to find your dream home? Let's start the conversation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-xl p-8 border-t-4 border-[#003087]">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>

            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800">Thank you! We'll get back to you soon.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003087] focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003087] focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003087] focus:border-transparent transition-all"
                  placeholder="+1 (416) 555-0123"
                />
              </div>

              <div>
                <label htmlFor="propertyInterest" className="block text-sm font-medium text-gray-700 mb-2">
                  I'm Interested In
                </label>
                <select
                  id="propertyInterest"
                  name="propertyInterest"
                  value={formData.propertyInterest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003087] focus:border-transparent transition-all"
                >
                  <option value="">Select an option</option>
                  <option value="buying">Buying a Home</option>
                  <option value="selling">Selling a Home</option>
                  <option value="investing">Investment Properties</option>
                  <option value="renting">Renting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003087] focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your dream home..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#003087] text-white px-6 py-3 rounded-full hover:bg-[#002060] transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Team Card 1 */}
            <div className="bg-white rounded-lg shadow-xl p-6 border-l-4 border-red-600">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Sri Kathiravelu</h3>
              <p className="text-sm text-gray-600 mb-4">Real Estate Agent</p>
              <div className="space-y-2 text-sm">
                <p className="text-gray-700">📧 Email coming soon</p>
                <p className="text-gray-700">📱 Phone coming soon</p>
                <p className="text-gray-700">📸 @remaxsri</p>
              </div>
            </div>

            {/* Team Card 2 */}
            <div className="bg-white rounded-lg shadow-xl p-6 border-l-4 border-[#003087]">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Niru Arulselvan</h3>
              <p className="text-sm text-gray-600 mb-4">Real Estate Agent</p>
              <div className="space-y-2 text-sm">
                <p className="text-gray-700">
                  📧 <a href="mailto:info@sricollectivegroup.com" className="text-[#003087] hover:underline">
                    info@sricollectivegroup.com
                  </a>
                </p>
                <p className="text-gray-700">
                  📱 <a href="tel:+14167860431" className="text-[#003087] hover:underline">
                    +1 (416) 786-0431
                  </a>
                </p>
                <p className="text-gray-700">📸 @thesneakerrealtor_</p>
              </div>
            </div>

            {/* Office Info */}
            <div className="bg-white rounded-lg shadow-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Office</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p>🏢 RE/MAX & Experts Brokerage</p>
                <p>📍 Ontario, Canada 🇨🇦</p>
                <p>🕒 Available 7 days a week</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
