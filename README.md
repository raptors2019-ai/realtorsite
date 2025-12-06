# Niruban Realtor Website - MVP

> Modern, eye-catching realtor website with interactive chatbot and property showcase
> **Launch Date:** December 12, 2024
> **Tech Stack:** Next.js 16.0.7, React 19, TypeScript, Tailwind CSS v4

---

## 🎯 Project Overview

Building a standout realtor website for Niruban that differentiates from typical real estate sites through:
- **Interactive Chatbot** - Conversational dream home search experience
- **Beautiful Property Showcase** - Dark luxury aesthetic with smooth animations
- **Live Data Integration** - Realtor.ca listings and HouseSigma sold data
- **Smart Notifications** - Email alerts when dream homes match user preferences

**Timeline:** 7 days (Dec 5-12, 2024)
**Demo Date:** Friday, December 12th

---

## ✨ Core Features

### MVP Features (Dec 12th Demo)

#### 1. Interactive Chatbot (PRIMARY Differentiator)
- **Conversational flow** instead of traditional forms
- Guided experience: "Tell us about your dream house"
- Collects preferences: budget, location, property type, bedrooms
- Shows matching properties in real-time
- Floating trigger button with animations
- Mobile-optimized fullscreen view

#### 2. Property Listings
- Beautiful grid layout with filters
- Filter by: Type, Price Range, Location, Bedrooms
- Sort by: Latest, Price (high/low), Featured
- High-quality imagery with lazy loading
- Property detail pages with image galleries
- "Only X remaining" scarcity messaging

#### 3. Contact System
- Multi-channel contact form (email + SMS)
- Direct phone/text links
- Integration with chatbot collected data
- Success confirmations and error handling

#### 4. Realtor.ca Integration
- Live listings from realtor.ca
- Location-based search (GTA/Mississauga focus)
- Property type and price filtering
- Fallback to curated mock data

#### 5. HouseSigma Data (Nice-to-have)
- Recent sold properties for market insights
- Comparative market analysis
- Price trends and statistics

### Phase 2 Features (Post-MVP)

#### Email Notification System
- **Database storage** for user preferences from chatbot
- **Background jobs** to check new listings daily
- **Email alerts** when dream house matches criteria
- **Price alerts** when properties drop to target price

#### User Settings Page
- Save search preferences
- Manage notification settings
- Set price targets for specific locations
- Email frequency preferences

#### Advanced Integrations
- Full realtor.ca data scraping/API
- HouseSigma sold data integration
- Interactive map-based search (Mapbox)
- Neighborhood insights (schools, transit, amenities)
- Mortgage calculator
- Virtual tours / 3D walkthroughs

---

## 🏗️ Technical Architecture

### Tech Stack

**Core Framework**
- **Next.js 16.0.7** - App Router, Server Components, Streaming
- **React 19.2.0** - Latest with concurrent features
- **TypeScript 5** - Type safety throughout

**Styling & UI**
- **Tailwind CSS v4** - Utility-first styling
- **Framer Motion 11** - Smooth animations
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **Embla Carousel** - Lightweight image galleries

**Forms & Validation**
- **React Hook Form 7** - Performant form handling
- **Zod 3** - TypeScript-first schema validation

**State Management**
- **Zustand 4** - Lightweight state (chatbot, filters)
- **SWR 2** - Data fetching/caching (future API)

**Communication**
- **Resend** - Email API (free tier: 100/day)
- **Twilio** - SMS capability (optional)

**Phase 2 Backend**
- **Supabase** - PostgreSQL database + real-time features
- **Prisma** - Type-safe ORM
- **Puppeteer/Playwright** - Web scraping for realtor.ca/HouseSigma

### Project Structure

```
/site
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
├── .env.local
├── .gitignore
│
├── app/
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                   # Homepage
│   ├── globals.css                # Global styles
│   ├── properties/
│   │   ├── page.tsx              # Property grid
│   │   └── [id]/
│   │       └── page.tsx          # Property detail
│   ├── contact/
│   │   └── page.tsx              # Contact form
│   └── api/
│       ├── contact/route.ts      # Email endpoint
│       └── properties/route.ts   # Property API
│
├── components/                    # (To be created)
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MobileNav.tsx
│   │
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── FeaturedProperties.tsx
│   │   └── CTASection.tsx
│   │
│   ├── properties/
│   │   ├── PropertyGrid.tsx
│   │   ├── PropertyCard.tsx
│   │   ├── PropertyFilters.tsx
│   │   └── PropertyDetail/
│   │       ├── ImageGallery.tsx
│   │       ├── PropertyInfo.tsx
│   │       └── LocationMap.tsx
│   │
│   ├── chatbot/
│   │   ├── ChatbotWidget.tsx     # Floating trigger
│   │   ├── ChatbotWindow.tsx     # Main interface
│   │   ├── ChatbotMessage.tsx    # Message bubbles
│   │   ├── ChatbotOptions.tsx    # Quick replies
│   │   ├── ChatbotInput.tsx      # User input
│   │   └── ChatbotResults.tsx    # Show matches
│   │
│   ├── contact/
│   │   ├── ContactForm.tsx
│   │   └── ContactInfo.tsx
│   │
│   └── ui/
│       ├── Button.tsx
│       ├── Input.tsx
│       ├── Select.tsx
│       ├── Card.tsx
│       ├── Badge.tsx
│       └── Slider.tsx
│
├── lib/                           # (To be created)
│   ├── data-fetcher.ts           # Abstract data layer
│   ├── utils.ts                  # Helper functions
│   ├── filters.ts                # Search/filter logic
│   └── api/
│       ├── properties.ts         # Property operations
│       ├── contact.ts            # Contact handlers
│       └── realtor-ca.ts         # Realtor.ca integration
│
├── store/                         # (To be created)
│   └── chatbot-store.ts          # Zustand chatbot state
│
├── data/                          # (To be created)
│   ├── types.ts                  # TypeScript interfaces
│   ├── properties.json           # Mock property data
│   ├── locations.json            # GTA neighborhoods
│   └── chatbot-flows.ts          # Conversation flows
│
└── public/
    ├── images/
    │   ├── properties/           # Property photos
    │   ├── hero/                 # Hero images
    │   └── logo.svg              # Niruban's logo
    └── fonts/                    # Custom fonts (if any)
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Git

### Installation

```bash
# Navigate to project
cd realtor/site

# Install dependencies (already done)
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your API keys

# Run development server
npm run dev

# Open browser
# Navigate to http://localhost:3000
```

### Environment Variables

Create a `.env.local` file:

```env
# Email (Resend)
RESEND_API_KEY=your_api_key_here

# Optional: SMS
TWILIO_ACCOUNT_SID=your_sid
TWILIO_AUTH_TOKEN=your_token
TWILIO_PHONE_NUMBER=+1234567890

# Optional: Maps (if using Mapbox)
NEXT_PUBLIC_MAPBOX_TOKEN=your_token

# Feature Flags
NEXT_PUBLIC_USE_REALTOR_CA=false
NEXT_PUBLIC_ENABLE_SMS=false
```

### Development Commands

```bash
# Development server with hot reload
npm run dev

# Linting
npm run lint

# Build for production
npm run build

# Start production server
npm start

# Deploy to Vercel (or connect GitHub repo to Vercel dashboard)
vercel
```

---

## 📋 Implementation Timeline

### Day 1: Foundation (Dec 5-6) ✅
- [x] Next.js 16.0.7 project setup with TypeScript and Tailwind CSS v4
- [x] Git repository initialized
- [x] GitHub repository connected (https://github.com/raptors2019-ai/realtorsite)
- [x] Vercel deployment ready
- [x] Basic homepage with realtor branding
- [ ] Setup folder structure (components, lib, data, store)
- [ ] Create TypeScript interfaces (`data/types.ts`)
- [ ] Build Header/Footer/Layout components
- [ ] Setup dark luxury theme in `globals.css`
- [ ] Create 10 mock property entries (`data/properties.json`)

### Day 2: Property System (Dec 7)
- [ ] PropertyCard component with animations
- [ ] PropertyGrid with responsive layout
- [ ] Property detail page with routing
- [ ] Basic filtering UI (PropertyFilters component)
- [ ] Data fetcher utilities (`lib/data-fetcher.ts`)
- [ ] Image optimization with next/image

### Day 3: Chatbot Foundation (Dec 8)
- [ ] ChatbotWidget trigger button
- [ ] ChatbotWindow with Framer Motion animations
- [ ] Message components (bot + user bubbles)
- [ ] Typing indicator animation
- [ ] Zustand store setup (`store/chatbot-store.ts`)
- [ ] First conversation flow (welcome + property type)

### Day 4: Chatbot Intelligence (Dec 9)
- [ ] Complete all conversation flows
- [ ] Budget range slider component
- [ ] Location multi-select
- [ ] Show matching property results
- [ ] Back/restart functionality
- [ ] Persist preferences to localStorage

### Day 5: Contact & Features (Dec 10)
- [ ] Contact page with form validation
- [ ] Email integration via Resend API
- [ ] Property filters refinement
- [ ] Sort functionality (price, date)
- [ ] Loading states and skeletons
- [ ] Performance optimization pass

### Day 6: Polish & Differentiation (Dec 11)
- [ ] Scarcity messaging on property cards
- [ ] Micro-interactions and hover effects
- [ ] Add 10 more properties (total 20)
- [ ] Similar properties section
- [ ] SEO metadata and Open Graph tags
- [ ] Mobile responsive fixes
- [ ] Cross-browser testing (Chrome, Safari, Firefox)

### Day 7: Final Touches (Dec 12 Morning)
- [ ] Bug fixes from testing
- [ ] Content review (spelling, grammar, accuracy)
- [ ] Deploy to Vercel
- [ ] Create demo script for presentation
- [ ] Take screenshots/screen recordings
- [ ] Test on multiple devices (phone, tablet, desktop)

---

## 🎨 Design System

### Color Palette (Dark Luxury)

```css
/* Dark Backgrounds */
--bg-primary: #0a0a0a;
--bg-secondary: #171717;
--bg-tertiary: #262626;

/* Gold Accents */
--accent-gold: #d4af37;
--accent-gold-light: #f4d47e;
--accent-gold-dark: #b8941f;

/* Neutrals */
--text-primary: #fafafa;
--text-secondary: #a3a3a3;
--text-muted: #525252;

/* States */
--success: #10b981;
--error: #ef4444;
--warning: #f59e0b;
```

### Typography

- **Headings:** System font stack (San Francisco, Segoe UI, etc.)
- **Body:** Default sans-serif with 1.6 line height
- **Scale:** 3.75rem → 3rem → 2.25rem → 1.5rem → 1rem → 0.875rem

### Spacing

Using Tailwind's 4px base scale:
- xs: 8px | sm: 12px | md: 16px | lg: 24px | xl: 32px | 2xl: 48px

---

## 🤖 Chatbot Architecture

### Conversation Flow Design

```typescript
// Example flow structure
type ConversationStep = {
  id: string;
  type: 'message' | 'options' | 'input' | 'range';
  content: string | string[];
  options?: { label: string; value: string; next: string }[];
  next?: string;
};

const dreamHouseFlow = {
  welcome: {
    id: 'welcome',
    type: 'message',
    content: ["Hi! I'm here to help you find your dream home! 🏡"],
    next: 'propertyType'
  },
  propertyType: {
    id: 'propertyType',
    type: 'options',
    content: "What type of property are you looking for?",
    options: [
      { label: '🏠 House', value: 'house', next: 'budget' },
      { label: '🏢 Condo', value: 'condo', next: 'budget' },
      // ... more options
    ]
  },
  // ... more steps
};
```

### State Management (Zustand)

```typescript
interface ChatbotStore {
  isOpen: boolean;
  messages: ChatMessage[];
  currentStep: string;
  userPreferences: {
    propertyType?: string;
    budget?: { min: number; max: number };
    location?: string;
    bedrooms?: number;
  };
  toggleChat: () => void;
  addMessage: (message: ChatMessage) => void;
  updatePreferences: (prefs: Partial<UserPreferences>) => void;
}
```

### UX Features

- **Typing Indicators:** 800ms delay before bot responses
- **Message Staggering:** 500ms between sequential messages
- **Progress Indicator:** "Step 2 of 5"
- **Quick Reply Buttons:** Large, tappable with hover effects
- **Back Button:** Navigate to previous questions
- **Confetti Animation:** On perfect match found
- **Persistence:** Save state to localStorage

---

## 📊 Data Management

### Property Schema

```typescript
interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  type: 'house' | 'condo' | 'townhouse' | 'commercial';
  status: 'for-sale' | 'sold' | 'pending';
  location: {
    address: string;
    city: string;
    province: string;
    postalCode: string;
    coordinates: { lat: number; lng: number };
  };
  details: {
    bedrooms: number;
    bathrooms: number;
    sqft: number;
    lotSize?: number;
    yearBuilt: number;
    parking: number;
  };
  features: string[];
  images: {
    url: string;
    alt: string;
    isPrimary: boolean;
  }[];
  agent: {
    name: string;
    phone: string;
    email: string;
  };
  createdAt: string;
  updatedAt: string;
}
```

### Data Sources (MVP)

**Current:** Mock JSON data (20-30 realistic properties)
**Future:**
- Realtor.ca live listings (scraping or API)
- HouseSigma sold data
- Database with Supabase

---

## 🎯 Questions for Niruban (Dec 12th Meeting)

### Critical Decisions

1. **Content Management**
   - How do you want to add/manage builder projects?
   - Admin dashboard or CMS preference?

2. **Notification System Priority**
   - Required for MVP or Phase 2 feature?
   - Email service preference?
   - How often to check for matches (daily/hourly)?

3. **Data Sources**
   - Realtor.ca: Scraping acceptable or need official API?
   - HouseSigma: Public sold data OK?
   - Budget for third-party APIs?

4. **Target Audience**
   - First-time buyers, luxury market, investors, families?

5. **Unique Selling Point**
   - What makes your service different from other realtors?

6. **Builder Projects Focus**
   - Pre-construction/new developments only?
   - Or include resale listings too?

### Nice to Know

- Brand colors/logo preferences?
- Domain name ready?
- Social media accounts to link?
- Preferred contact hours for chat?

---

## 📱 MVP Success Criteria

### What Will Impress

1. **Visual Wow Factor**
   - Smooth luxury aesthetic matching/exceeding reference sites
   - Beautiful animations with no jank
   - Professional property presentation
   - Works perfectly on mobile

2. **Chatbot Uniqueness**
   - Conversational, not form-like
   - Actually helpful for property search
   - Fun and engaging to use
   - Shows matching properties in real-time

3. **Completeness**
   - Full user journey works end-to-end
   - Professional content and imagery
   - Working contact integration
   - Feels like a real, polished product

4. **Performance**
   - Loads instantly (<2 seconds)
   - Smooth scrolling and interactions
   - Images load with blur placeholders
   - Mobile-optimized

---

## 🔮 Post-MVP Roadmap

### Phase 2: Backend & Notifications (Week 2-3)

**Database Setup**
- Supabase (PostgreSQL + real-time)
- User authentication (magic links)
- Settings page for preferences

**Email Notification System**
- Store chatbot preferences in DB
- Background cron job (daily) checks new listings
- Match against user criteria
- Send email alerts via Resend
- Price drop notifications

**User Settings**
- Save search preferences
- Manage notification frequency
- Set price targets by location
- Email preferences

### Phase 3: Data Integration (Week 3-4)

**Realtor.ca Integration**
- Web scraping (Puppeteer) or third-party API
- Cache listings in database
- Real-time updates

**HouseSigma Sold Data**
- Scrape recent sold properties
- Market trends and insights
- Comparative market analysis
- Investment analysis tools

**Admin Panel**
- Niruban can manage listings
- Upload new builder projects
- Featured property management

### Phase 4: Advanced Features (Week 5-6)

- Interactive map-based search (Mapbox)
- Property clusters by location
- Saved searches/favorites
- Mortgage calculator
- Neighborhood insights (schools, transit, amenities)
- Virtual tours / 3D walkthroughs
- "Recently viewed" tracking

### Phase 5: AI & Personalization (Week 7+)

- GPT-4 powered chatbot (natural conversation)
- Personalized recommendations based on browsing
- Automated email drip campaigns
- Market trend predictions
- Investment analysis
- Auto-generated property descriptions

---

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

**Advantages:**
- Optimized for Next.js
- Automatic HTTPS
- Edge functions
- Built-in analytics
- Free tier generous

### Custom Domain Setup

1. Add domain in Vercel dashboard
2. Update DNS records (provided by Vercel)
3. Wait for SSL certificate (automatic)
4. Done!

---

## 📖 Reference Sites Analyzed

### Luxshan.ca (Pickering Estate Homes)
**What We Liked:**
- Dark luxury aesthetic
- 22+ image carousel
- Downloadable documents (floorplans, pricing)
- Chat widget integration
- Scarcity messaging ("only 10 homes remain")
- Google Maps integration
- Professional photography

**What We're Building Better:**
- Interactive chatbot vs static chat widget
- Conversational search vs traditional filters
- Personalized recommendations
- Email notification system
- Modern animations and micro-interactions

---

## 🛠️ Development Guidelines

### Code Standards

- **TypeScript:** Strict mode, no `any` types
- **Components:** Small, focused, reusable
- **Naming:** Descriptive, consistent (PascalCase for components)
- **Comments:** Document complex logic only
- **Git Commits:** Clear, descriptive messages

### Performance Checklist

- [ ] Image optimization with next/image
- [ ] WebP format with blur placeholders
- [ ] Lazy loading with intersection observer
- [ ] Code splitting by route
- [ ] Debounced search inputs
- [ ] Virtualized lists (if >50 items)
- [ ] Bundle analysis before deployment

### Testing Strategy

**Manual Testing (Day 7)**
- Chatbot: All flows work, animations smooth
- Properties: Grid responsive, filters accurate
- Contact: Form validates, email sends
- Mobile: Fullscreen chatbot, touch-friendly
- Browsers: Chrome, Safari, Firefox
- Performance: Lighthouse score >90

---

## 📞 Contact & Support

**Developer:** Josh
**Project Start:** December 5, 2024
**Launch:** December 12, 2024
**Client:** Niruban (Realtor)

---

## 📄 License

Private project - All rights reserved

---

**Last Updated:** December 5, 2024
**Version:** 0.1.0 (MVP in progress)
**Repository:** https://github.com/raptors2019-ai/realtorsite
