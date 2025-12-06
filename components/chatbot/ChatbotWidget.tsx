"use client";

import { useState, useRef, useEffect } from "react";
import { useChatbotStore, Message } from "@/store/chatbot-store";

function TypingIndicator() {
  return (
    <div className="flex gap-3 mb-4">
      <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
        <svg
          className="w-4 h-4 text-white"
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
      <div className="bg-stone-100 border border-stone-200 rounded-2xl rounded-tl-sm px-4 py-3">
        <div className="flex gap-1">
          <span className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
          <span className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
          <span className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
        </div>
      </div>
    </div>
  );
}

function MessageBubble({ message }: { message: Message }) {
  const isUser = message.role === "user";

  return (
    <div className={`flex gap-3 mb-4 ${isUser ? "flex-row-reverse" : ""}`}>
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
          <svg
            className="w-4 h-4 text-white"
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
      )}
      <div
        className={`max-w-[80%] px-4 py-3 ${
          isUser
            ? "bg-[#0a1628] text-white rounded-2xl rounded-tr-sm"
            : "bg-stone-100 border border-stone-200 text-stone-800 rounded-2xl rounded-tl-sm"
        }`}
      >
        <p className="text-sm leading-relaxed">{message.content}</p>
      </div>
    </div>
  );
}

export default function ChatbotWidget() {
  const {
    isOpen,
    isPromptVisible,
    messages,
    isLoading,
    toggleOpen,
    dismissPrompt,
    addMessage,
    setLoading,
  } = useChatbotStore();

  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const sendMessage = async (content: string) => {
    if (!content.trim() || isLoading) return;

    // Add user message
    addMessage({ role: "user", content: content.trim() });
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            ...messages.map((m) => ({ role: m.role, content: m.content })),
            { role: "user", content: content.trim() },
          ],
        }),
      });

      if (!response.ok) throw new Error("Failed to send message");

      const data = await response.json();
      addMessage({ role: "assistant", content: data.message });
    } catch (error) {
      console.error("Chat error:", error);
      addMessage({
        role: "assistant",
        content: "I apologize, I'm having trouble connecting. Please try again or contact us directly at (416) 786-0431.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleQuickAction = (action: string) => {
    let message = "";
    switch (action) {
      case "contact":
        message = "I'd like to get in touch with the team.";
        break;
      case "dream-home":
        message = "I want to tell you about my dream home.";
        break;
      case "help":
        message = "How can you help me find a property?";
        break;
    }
    sendMessage(message);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chatbot Window */}
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-[#0a1628] text-white p-4 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
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
                <h3 className="font-semibold text-sm">Sri Collective Group</h3>
                <p className="text-xs text-white/70">We typically reply instantly</p>
              </div>
            </div>
            <button
              onClick={toggleOpen}
              className="text-white/70 hover:text-white transition-colors p-1"
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
          <div className="flex-1 p-4 overflow-y-auto bg-stone-50">
            {messages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))}
            {isLoading && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions - Show only when just welcome message */}
          {messages.length === 1 && !isLoading && (
            <div className="px-4 pb-2 bg-stone-50 flex flex-wrap gap-2">
              <button
                onClick={() => handleQuickAction("contact")}
                className="px-3 py-1.5 text-xs font-medium bg-white border border-stone-300 text-stone-700 rounded-full hover:bg-stone-100 hover:border-stone-400 transition-all"
              >
                Contact Us
              </button>
              <button
                onClick={() => handleQuickAction("dream-home")}
                className="px-3 py-1.5 text-xs font-medium bg-white border border-stone-300 text-stone-700 rounded-full hover:bg-stone-100 hover:border-stone-400 transition-all"
              >
                Tell us about your dream home
              </button>
              <button
                onClick={() => handleQuickAction("help")}
                className="px-3 py-1.5 text-xs font-medium bg-white border border-stone-300 text-stone-700 rounded-full hover:bg-stone-100 hover:border-stone-400 transition-all"
              >
                How can you help?
              </button>
            </div>
          )}

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="p-3 border-t border-stone-200 bg-white flex-shrink-0">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                disabled={isLoading}
                className="flex-1 px-4 py-2.5 bg-stone-100 border border-stone-200 text-stone-800 text-sm rounded-full focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 disabled:opacity-50 placeholder-stone-400"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-red-600 hover:bg-red-700 disabled:bg-stone-300 text-white p-2.5 rounded-full transition-all disabled:cursor-not-allowed"
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
          </form>
        </div>
      )}

      {/* Prompt Bubble - Shows above chat button when closed */}
      {!isOpen && isPromptVisible && (
        <div className="absolute bottom-16 right-0 mb-2 animate-in fade-in slide-in-from-bottom-2 duration-500">
          <div className="relative bg-white rounded-2xl shadow-lg border border-stone-200 px-4 py-3 min-w-[160px]">
            <button
              onClick={dismissPrompt}
              className="absolute -top-2 -right-2 w-5 h-5 bg-stone-200 hover:bg-stone-300 rounded-full flex items-center justify-center text-stone-500 transition-colors"
              aria-label="Dismiss"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <p className="text-sm text-stone-700 font-medium">
              How can we help?
            </p>
            {/* Pointer triangle */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-stone-200 transform rotate-45" />
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={toggleOpen}
        className="bg-red-600 hover:bg-red-700 text-white rounded-full w-14 h-14 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center group relative"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
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
