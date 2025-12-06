"use client";

import { useState } from "react";

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chatbot Window */}
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 h-[450px] bg-[#111111] rounded-xl shadow-2xl border border-white/10 overflow-hidden">
          {/* Header */}
          <div className="bg-[#151515] border-b border-white/5 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#c9a962] to-[#a68b4b] flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-sm">Sri Bot</h3>
                <p className="text-xs text-gray-400">How can I help you?</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 h-[calc(100%-130px)] bg-[#0a0a0a] overflow-y-auto">
            {/* Bot Message */}
            <div className="flex gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#c9a962] to-[#a68b4b] flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-4 h-4 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <div className="luxury-card rounded-lg rounded-tl-none p-3 max-w-[80%]">
                <p className="text-sm text-gray-300">
                  Hi, I&apos;m Sri Bot. How can I help you today?
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-2 mt-4">
              <button className="btn-gold-outline px-3 py-1.5 rounded text-xs">
                Contact Us
              </button>
              <button className="btn-gold-outline px-3 py-1.5 rounded text-xs">
                Tell us about your dream house
              </button>
              <button className="btn-gold-outline px-3 py-1.5 rounded text-xs">
                Explore places in X
              </button>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-3 border-t border-white/5 bg-[#111111]">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                disabled
                className="flex-1 px-4 py-2.5 bg-[#0a0a0a] border border-white/10 text-white text-sm rounded-lg focus:outline-none focus:border-[#c9a962]/50 disabled:opacity-50 disabled:cursor-not-allowed placeholder-gray-500"
              />
              <button
                disabled
                className="bg-gradient-to-br from-[#c9a962] to-[#a68b4b] text-black p-2.5 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-br from-[#c9a962] to-[#a68b4b] text-black rounded-full w-14 h-14 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center group relative"
        aria-label="Open chat"
      >
        {/* Icon */}
        {isOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6 group-hover:scale-110 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
