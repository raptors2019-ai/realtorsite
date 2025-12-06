import OpenAI from "openai";
import { NextRequest, NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `You are a helpful real estate assistant for Sri Collective Group, a premium real estate team in Ontario, Canada. The team consists of Sri Kathiravelu and Niru Arulselvan, working with RE/MAX & Experts Brokerage.

Your role is to:
1. Help users find their dream home by understanding their preferences (budget, location, bedrooms, property type)
2. Answer questions about the team and their services
3. Help schedule viewings or consultations
4. Provide information about the GTA (Greater Toronto Area) real estate market

Key information:
- Team: Sri Kathiravelu (@remaxsri) & Niru Arulselvan (@thesneakerrealtor_)
- Phone: +1 (416) 786-0431
- Email: info@sricollectivegroup.com
- Areas served: Greater Toronto Area including Toronto, Mississauga, Brampton, Vaughan, Markham, Richmond Hill, Milton, Oakville, Burlington, Hamilton, and Caledon

Be friendly, professional, and helpful. Keep responses concise (2-3 sentences max unless more detail is needed). When users describe their dream home, ask clarifying questions about budget, preferred locations, number of bedrooms/bathrooms, and property type (detached, semi-detached, townhouse, condo).

If users want to schedule a viewing or consultation, encourage them to call or email directly, or use the contact form on the website.`;

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Messages array is required" },
        { status: 400 }
      );
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages.map((msg: { role: string; content: string }) => ({
          role: msg.role as "user" | "assistant",
          content: msg.content,
        })),
      ],
      max_tokens: 300,
      temperature: 0.7,
    });

    const reply = completion.choices[0]?.message?.content || "I apologize, I couldn't process that. Could you try again?";

    return NextResponse.json({ message: reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Failed to process message" },
      { status: 500 }
    );
  }
}
