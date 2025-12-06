"use client";

import { useState, useRef, useEffect } from "react";
import { useChatbotStore, Message } from "@/store/chatbot-store";

// Survey state type
interface SurveyState {
  step: "idle" | "property-type" | "budget" | "bedrooms" | "location" | "complete";
  propertyType?: string;
  budget?: string;
  bedrooms?: string;
  locations?: string[];
}

function TypingIndicator() {
  return (
    <div className="flex gap-3 mb-4">
      <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center shrink-0">
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
        <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center shrink-0">
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

// Survey step components
function SurveyPropertyType({ onSelect }: { onSelect: (type: string) => void }) {
  const types = [
    { id: "detached", label: "Detached", icon: "🏠" },
    { id: "semi-detached", label: "Semi-Detached", icon: "🏘️" },
    { id: "townhouse", label: "Townhouse", icon: "🏡" },
    { id: "condo", label: "Condo", icon: "🏢" },
  ];

  return (
    <div className="space-y-3">
      <p className="text-sm text-stone-600 mb-3">What type of property are you looking for?</p>
      <div className="grid grid-cols-2 gap-2">
        {types.map((type) => (
          <button
            key={type.id}
            onClick={() => onSelect(type.id)}
            className="flex flex-col items-center gap-1 p-3 bg-white border border-stone-200 rounded-xl hover:border-red-500 hover:bg-red-50 transition-all"
          >
            <span className="text-2xl">{type.icon}</span>
            <span className="text-xs font-medium text-stone-700">{type.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function SurveyBudget({ onSelect }: { onSelect: (budget: string) => void }) {
  const budgets = [
    { id: "under-500k", label: "Under $500K" },
    { id: "500k-750k", label: "$500K - $750K" },
    { id: "750k-1m", label: "$750K - $1M" },
    { id: "1m-1.5m", label: "$1M - $1.5M" },
    { id: "1.5m-2m", label: "$1.5M - $2M" },
    { id: "over-2m", label: "$2M+" },
  ];

  return (
    <div className="space-y-3">
      <p className="text-sm text-stone-600 mb-3">What&apos;s your budget range?</p>
      <div className="grid grid-cols-2 gap-2">
        {budgets.map((budget) => (
          <button
            key={budget.id}
            onClick={() => onSelect(budget.id)}
            className="p-3 bg-white border border-stone-200 rounded-xl hover:border-red-500 hover:bg-red-50 transition-all text-sm font-medium text-stone-700"
          >
            {budget.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function SurveyBedrooms({ onSelect }: { onSelect: (bedrooms: string) => void }) {
  const options = [
    { id: "1", label: "1" },
    { id: "2", label: "2" },
    { id: "3", label: "3" },
    { id: "4", label: "4" },
    { id: "5+", label: "5+" },
  ];

  return (
    <div className="space-y-3">
      <p className="text-sm text-stone-600 mb-3">How many bedrooms do you need?</p>
      <div className="flex gap-2 justify-center">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => onSelect(option.id)}
            className="w-12 h-12 bg-white border border-stone-200 rounded-xl hover:border-red-500 hover:bg-red-50 transition-all text-sm font-medium text-stone-700"
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function SurveyLocation({ onSelect }: { onSelect: (locations: string[]) => void }) {
  const [selected, setSelected] = useState<string[]>([]);

  const locations = [
    "Toronto", "Mississauga", "Brampton", "Vaughan",
    "Markham", "Richmond Hill", "Milton", "Oakville",
    "Burlington", "Hamilton", "Caledon"
  ];

  const toggleLocation = (loc: string) => {
    setSelected(prev =>
      prev.includes(loc) ? prev.filter(l => l !== loc) : [...prev, loc]
    );
  };

  return (
    <div className="space-y-3">
      <p className="text-sm text-stone-600 mb-2">Which areas are you interested in?</p>
      <p className="text-xs text-stone-400 mb-3">Select all that apply</p>
      <div className="flex flex-wrap gap-2 max-h-[140px] overflow-y-auto">
        {locations.map((loc) => (
          <button
            key={loc}
            onClick={() => toggleLocation(loc)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              selected.includes(loc)
                ? "bg-red-600 text-white"
                : "bg-white border border-stone-200 text-stone-700 hover:border-red-500"
            }`}
          >
            {loc}
          </button>
        ))}
      </div>
      {selected.length > 0 && (
        <button
          onClick={() => onSelect(selected)}
          className="w-full mt-3 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-all"
        >
          Continue ({selected.length} selected)
        </button>
      )}
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
  const [survey, setSurvey] = useState<SurveyState>({ step: "idle" });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading, survey.step]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const sendMessage = async (content: string) => {
    if (!content.trim() || isLoading) return;

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

  const startDreamHomeSurvey = () => {
    addMessage({ role: "user", content: "I want to tell you about my dream home." });
    addMessage({ role: "assistant", content: "Let's find your perfect home! I'll ask you a few quick questions." });
    setSurvey({ step: "property-type" });
  };

  const handleSurveyPropertyType = (type: string) => {
    const labels: Record<string, string> = {
      "detached": "Detached House",
      "semi-detached": "Semi-Detached House",
      "townhouse": "Townhouse",
      "condo": "Condo"
    };
    addMessage({ role: "user", content: labels[type] });
    setSurvey(prev => ({ ...prev, propertyType: type, step: "budget" }));
  };

  const handleSurveyBudget = (budget: string) => {
    const labels: Record<string, string> = {
      "under-500k": "Under $500K",
      "500k-750k": "$500K - $750K",
      "750k-1m": "$750K - $1M",
      "1m-1.5m": "$1M - $1.5M",
      "1.5m-2m": "$1.5M - $2M",
      "over-2m": "$2M+"
    };
    addMessage({ role: "user", content: labels[budget] });
    setSurvey(prev => ({ ...prev, budget, step: "bedrooms" }));
  };

  const handleSurveyBedrooms = (bedrooms: string) => {
    addMessage({ role: "user", content: `${bedrooms} bedroom${bedrooms === "1" ? "" : "s"}` });
    setSurvey(prev => ({ ...prev, bedrooms, step: "location" }));
  };

  const handleSurveyLocation = async (locations: string[]) => {
    addMessage({ role: "user", content: locations.join(", ") });
    setSurvey(prev => ({ ...prev, locations, step: "complete" }));

    // Send summary to AI
    setLoading(true);
    const summary = `I'm looking for a ${survey.propertyType?.replace("-", " ")} with ${survey.bedrooms} bedroom(s), budget ${survey.budget?.replace("-", " to ").replace("k", "K")}, in ${locations.join(" or ")}.`;

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            ...messages.map((m) => ({ role: m.role, content: m.content })),
            { role: "user", content: summary },
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
        content: "Thanks for sharing your preferences! Our team will reach out with matching properties. You can also browse our listings or contact us at (416) 786-0431.",
      });
    } finally {
      setLoading(false);
      setSurvey({ step: "idle" });
    }
  };

  const handleContactUs = () => {
    sendMessage("I'd like to get in touch with the team.");
  };

  // Check if we should show quick actions (only at start, no survey active)
  const showQuickActions = messages.length === 1 && !isLoading && survey.step === "idle";

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chatbot Window */}
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-[#0a1628] text-white p-4 flex items-center justify-between shrink-0">
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

            {/* Survey Steps */}
            {survey.step === "property-type" && (
              <div className="mb-4 p-3 bg-white rounded-xl border border-stone-200">
                <SurveyPropertyType onSelect={handleSurveyPropertyType} />
              </div>
            )}
            {survey.step === "budget" && (
              <div className="mb-4 p-3 bg-white rounded-xl border border-stone-200">
                <SurveyBudget onSelect={handleSurveyBudget} />
              </div>
            )}
            {survey.step === "bedrooms" && (
              <div className="mb-4 p-3 bg-white rounded-xl border border-stone-200">
                <SurveyBedrooms onSelect={handleSurveyBedrooms} />
              </div>
            )}
            {survey.step === "location" && (
              <div className="mb-4 p-3 bg-white rounded-xl border border-stone-200">
                <SurveyLocation onSelect={handleSurveyLocation} />
              </div>
            )}

            {isLoading && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions - Show only at start */}
          {showQuickActions && (
            <div className="px-4 pb-2 bg-stone-50 flex flex-wrap gap-2">
              <button
                onClick={handleContactUs}
                className="px-3 py-1.5 text-xs font-medium bg-white border border-stone-300 text-stone-700 rounded-full hover:bg-stone-100 hover:border-stone-400 transition-all"
              >
                Contact Us
              </button>
              <button
                onClick={startDreamHomeSurvey}
                className="px-3 py-1.5 text-xs font-medium bg-white border border-stone-300 text-stone-700 rounded-full hover:bg-stone-100 hover:border-stone-400 transition-all"
              >
                Tell us about your dream home
              </button>
            </div>
          )}

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="p-3 border-t border-stone-200 bg-white shrink-0">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                disabled={isLoading || survey.step !== "idle"}
                className="flex-1 px-4 py-2.5 bg-stone-100 border border-stone-200 text-stone-800 text-sm rounded-full focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 disabled:opacity-50 placeholder-stone-400"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim() || survey.step !== "idle"}
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
