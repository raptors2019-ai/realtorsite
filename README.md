# Sri Collective Group - Real Estate Website

> Redefining real estate, one home at a time
> **Team:** Sri Kathiravelu (@remaxsri) & Niru Arulselvan (@thesneakerrealtor_)
> **Brokerage:** RE/MAX & Experts Brokerage | Ontario, Canada 🇨🇦
> **Tech Stack:** Next.js 16.0.7, React 19, TypeScript, Tailwind CSS v4

---

## 🎯 Project Overview

Building a standout realtor website for Sri Collective Group that differentiates from typical real estate sites through:
- **Interactive Chatbot** - Conversational dream home search experience
- **Beautiful Property Showcase** - Luxury light theme with RE/MAX branding
- **Builder Projects** - Pre-construction developments with VIP access
- **Smart Notifications** - Email alerts when dream homes match user preferences (Phase 2)

**Timeline:** 7 days (Dec 5-12, 2024)
**Demo Date:** Friday, December 12th

---

## ✅ Current Status (Dec 6, 2024)

### Completed Features

**Pages Built:**
- ✅ **Homepage** - Hero section, featured properties, builder projects, about section, contact CTA
- ✅ **Properties Page** - Filterable grid with search, price, bedrooms, location filters
- ✅ **Property Detail Page** - Full property info, image gallery, similar properties
- ✅ **Builder Projects Page** - Pre-construction listings with VIP access CTAs
- ✅ **Contact Page** - Form with team info, office details, VIP access CTA

**Components Built:**
- ✅ **Header** - Animated navigation with scroll shadow, underline effects, active states
- ✅ **Footer** - Navy theme with social links and team info
- ✅ **PropertyCard** - Luxury card design with hover effects
- ✅ **PropertyFilters** - Dropdowns for type, city, bedrooms, bathrooms, price range
- ✅ **PropertyGrid** - Responsive grid layout
- ✅ **ChatbotWidget** - AI-powered chatbot with OpenAI GPT-4o-mini, floating prompt bubble, quick actions

**Design System:**
- ✅ Luxury light theme implemented (white/cream backgrounds)
- ✅ RE/MAX red accent color (#dc2626)
- ✅ Navy for CTAs and footer (#0a1628)
- ✅ Smooth animations and hover effects throughout
- ✅ Mobile responsive design

---

## 🎨 Design System

### Color Palette

```css
/* Primary Colors */
--navy: #0a1628;          /* Headers, footer, CTAs */
--red: #dc2626;           /* Accents, prices, buttons */
--red-dark: #b91c1c;      /* Hover states */

/* Backgrounds */
--white: #ffffff;         /* Main background */
--cream: #faf9f7;         /* Section backgrounds */

/* Text */
--text-primary: #0a1628;  /* Headings */
--text-secondary: #57534e; /* Body text */
--text-muted: #a8a29e;    /* Labels, hints */

/* Borders */
--border-light: #e7e5e4;  /* Card borders */
```

### Typography
- **Headings:** Bold, navy (#0a1628)
- **Body:** Regular weight, warm gray (#57534e)
- **Accents:** Red (#dc2626) for prices and highlights

### Components
- **luxury-card:** White background, subtle border, hover shadow
- **btn-primary:** Red background, white text, lift on hover
- **btn-outline:** Navy border, navy text, fills on hover
- **accent-line:** Red 48px × 3px divider for section headers

---

## 📋 Implementation Timeline

### Day 1: Foundation (Dec 5-6) ✅ COMPLETE
- [x] Next.js 16.0.7 project setup with TypeScript and Tailwind CSS v4
- [x] Git repository initialized
- [x] GitHub repository connected
- [x] Vercel deployment ready
- [x] Basic homepage with realtor branding
- [x] Header/Footer/Layout components
- [x] Folder structure (components, lib, data, store)
- [x] TypeScript interfaces (`data/types.ts`)
- [x] 10 mock GTA property entries (`data/properties.json`)

### Day 2: Property System (Dec 6-7) ✅ COMPLETE
- [x] PropertyCard component with animations
- [x] PropertyGrid with responsive layout
- [x] Property detail page with routing
- [x] PropertyFilters component (type, city, bedrooms, bathrooms, price)
- [x] Data fetcher utilities (`lib/data-fetcher.ts`)
- [x] Image optimization with next/image
- [x] Similar properties section
- [x] Builder Projects page with pre-construction listings

### Day 3: Chatbot Foundation (Dec 7-8) ✅ COMPLETE
- [x] ChatbotWidget trigger button with floating prompt bubble
- [x] ChatbotWindow with light luxury theme
- [x] Message components (bot + user bubbles)
- [x] Typing indicator animation
- [x] Zustand store setup (`store/chatbot-store.ts`)
- [x] OpenAI GPT-4o-mini integration (`app/api/chat/route.ts`)
- [x] Quick action buttons (Contact Us, Dream Home, How can you help)

### Day 4: Chatbot Intelligence (Dec 8-9)
- [ ] Complete all conversation flows
- [ ] Budget range slider component
- [ ] Location multi-select
- [ ] Show matching property results
- [ ] Back/restart functionality
- [ ] Persist preferences to localStorage

### Day 5: Contact & Features (Dec 9-10)
- [x] Contact page with form validation ✅
- [ ] Email integration via Resend API
- [x] Property filters refinement ✅
- [x] Sort functionality (price, date) ✅
- [ ] Loading states and skeletons
- [ ] Performance optimization pass

### Day 6: Polish & Differentiation (Dec 10-11)
- [x] Scarcity messaging on property cards ✅
- [x] Micro-interactions and hover effects ✅
- [ ] Add 10 more properties (total 20)
- [x] Similar properties section ✅
- [ ] SEO metadata and Open Graph tags
- [x] Mobile responsive fixes ✅
- [ ] Cross-browser testing

### Day 7: Final Touches (Dec 12 Morning)
- [ ] Bug fixes from testing
- [ ] Content review
- [ ] Deploy to Vercel
- [ ] Create demo script
- [ ] Test on multiple devices

---

## 🚀 What's Next

### Priority 1: Chatbot Enhancement (Day 4)
The chatbot foundation is complete! Next steps:
1. ~~Build conversation flow engine~~ ✅
2. ~~Create message bubble components~~ ✅
3. ~~Implement typing indicators~~ ✅
4. Connect chatbot to property filtering (show matching results)
5. Add property preference collection (budget slider, location multi-select)

### Priority 2: Email Integration (Day 5)
- Set up Resend API for contact form
- Email notifications for new inquiries

### Priority 3: Polish & SEO (Day 6)
- Add more properties
- SEO metadata
- Performance optimization
- Cross-browser testing

### Priority 4: Final Testing (Day 7)
- Full user journey testing
- Mobile device testing
- Demo preparation

---

## 🏗️ Project Structure

```
/site
├── app/
│   ├── layout.tsx              # Root layout with Header/Footer
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles & design tokens
│   ├── builder-projects/
│   │   └── page.tsx            # Pre-construction listings
│   ├── properties/
│   │   ├── page.tsx            # Property grid with filters
│   │   └── [id]/
│   │       ├── page.tsx        # Property detail
│   │       └── not-found.tsx   # 404 for invalid properties
│   ├── contact/
│   │   └── page.tsx            # Contact form
│   └── api/
│       └── chat/
│           └── route.ts        # OpenAI chat API endpoint
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Animated navigation
│   │   └── Footer.tsx          # Navy footer
│   ├── properties/
│   │   ├── PropertyCard.tsx    # Luxury property card
│   │   ├── PropertyGrid.tsx    # Responsive grid
│   │   ├── PropertyFilters.tsx # Filter controls
│   │   └── PropertiesPageClient.tsx
│   └── chatbot/
│       └── ChatbotWidget.tsx   # AI chatbot with OpenAI integration
│
├── store/
│   └── chatbot-store.ts        # Zustand state management for chatbot
│
├── lib/
│   ├── data-fetcher.ts         # Property data utilities
│   ├── filters.ts              # Filter logic
│   └── utils.ts                # Helper functions (cn)
│
├── data/
│   ├── types.ts                # TypeScript interfaces
│   └── properties.json         # Mock property data
│
└── public/
    └── images/                 # Static assets
```

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

**Development:** http://localhost:3000

---

## 📱 Pages Overview

| Page | Route | Status |
|------|-------|--------|
| Homepage | `/` | ✅ Complete |
| Properties | `/properties` | ✅ Complete |
| Property Detail | `/properties/[id]` | ✅ Complete |
| Builder Projects | `/builder-projects` | ✅ Complete |
| Contact | `/contact` | ✅ Complete |

---

## 🔮 Phase 2 Features (Post-MVP)

- Email notification system (new listing alerts)
- User accounts and saved searches
- IDX/MLS integration (if available)
- Interactive map search
- Mortgage calculator
- Admin panel for property management
- AI-powered chatbot with GPT-4

---

## 📞 Contact

**Developer:** Josh
**Client:** Sri Collective Group
**Team:** Sri Kathiravelu & Niru Arulselvan
**Phone:** +1 (416) 786-0431
**Email:** info@sricollectivegroup.com

---

**Last Updated:** December 6, 2024
**Version:** 0.3.0 (AI Chatbot with OpenAI GPT-4o-mini integration)
**Repository:** https://github.com/raptors2019-ai/realtorsite
