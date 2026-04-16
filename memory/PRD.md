# DKFS Website - Product Requirements Document

## Original Problem Statement
Build a simple one-page professional website for Dhruv Kothari Financial Services (DKFS). Keep it clean, trustworthy, and not too long. Include sections for Hero, About, Services, SIP Calculator, Contact, and Footer. Highlight mutual funds, SIPs, and insurance solutions. Use the tagline "Wealth Creation Simplified" and the email dkfs.invest@gmail.com. Add a small SIP calculator with monthly investment, return rate, and tenure inputs. The design should be minimal, elegant, mobile-friendly, and suitable for a financial services business.

## User Choices
- **Color Scheme:** Navy & Teal (professional, corporate)
- **Contact Form:** Functional with email integration to dkfs.invest@gmail.com
- **SIP Calculator:** Frontend-only calculations (no backend storage)
- **Images:** Abstract shapes/illustrations only
- **Additional Info:** Include certifications/registrations

## Architecture
- **Frontend:** React with Shadcn UI components
- **Backend:** FastAPI (to be implemented for contact form)
- **Database:** MongoDB (for contact submissions)
- **Styling:** Tailwind CSS with custom Navy & Teal theme

## What's Been Implemented (Dec 2025)

### ✅ Phase 1: Frontend with Mock Data (COMPLETED)
**Date:** December 2025

**Components Created:**
1. `Header.jsx` - Sticky navigation with smooth scroll, mobile menu
2. `HeroSection.jsx` - Hero with tagline, stats, CTAs, abstract shapes
3. `AboutSection.jsx` - Company info, certifications, stats cards
4. `ServicesSection.jsx` - Three service cards (Mutual Funds, SIPs, Insurance)
5. `SIPCalculator.jsx` - Interactive calculator with sliders and real-time results
6. `ContactSection.jsx` - Contact form with mock submission (MOCKED)
7. `Footer.jsx` - Company info, links, social media, disclaimer

**Mock Data:**
- `mock.js` contains all company info, services, certifications
- `mockContactSubmit()` simulates form submission (frontend only)

**Features:**
- Fully responsive design
- Smooth scrolling between sections
- Interactive SIP calculator with compound interest formula
- Toast notifications for form submission
- Abstract CSS shapes for decoration
- Glass-morphism effects
- Hover animations and micro-interactions

## Prioritized Backlog

### P0 Features (Required for Launch)
- [ ] **Backend Contact Form Integration**
  - Create `/api/contact` endpoint in FastAPI
  - Integrate email service (SendGrid, AWS SES, or SMTP)
  - Store contact submissions in MongoDB
  - Remove mock.js contact function and connect to real API
  - Add proper error handling and validation

### P1 Features (Nice to Have)
- [ ] Add testimonials section with client reviews
- [ ] Implement blog section for financial tips
- [ ] Add FAQ section for common questions
- [ ] Google Analytics integration
- [ ] SEO optimization (meta tags, structured data)

### P2 Features (Future Enhancements)
- [ ] Client portal for investment tracking
- [ ] Online KYC and onboarding
- [ ] Portfolio performance dashboard
- [ ] Document upload for applications
- [ ] WhatsApp integration for queries

## API Contracts (To Be Implemented)

### Contact Form Submission
**Endpoint:** `POST /api/contact`

**Request Body:**
```json
{
  "name": "string (required)",
  "email": "string (required, valid email)",
  "phone": "string (optional)",
  "message": "string (required)"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for reaching out! We'll contact you within 24 hours.",
  "id": "contact_submission_id"
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "Error message",
  "details": {}
}
```

## Integration Notes

### Email Service Integration Required
- Provider: TBD (SendGrid, AWS SES, or Gmail SMTP)
- Template: Professional email template with company branding
- Recipients: dkfs.invest@gmail.com
- Auto-reply: Optional confirmation email to user

### Frontend-Backend Integration Steps
1. Create contact submission endpoint in backend
2. Set up email service credentials in backend `.env`
3. Update `ContactSection.jsx` to call real API instead of mock
4. Remove `mockContactSubmit` from `mock.js`
5. Test email delivery
6. Add rate limiting to prevent spam

## Next Tasks
1. ✅ Frontend with mock data - COMPLETED
2. Get email service credentials (SendGrid API key or SMTP details)
3. Implement backend contact form endpoint
4. Integrate email sending service
5. Connect frontend to backend API
6. Test end-to-end contact form flow
7. Deploy to production

## Notes
- SIP Calculator is frontend-only (no backend needed)
- All certifications and company info are in mock.js
- Contact form currently uses mock data - needs backend integration
- Design follows Navy & Teal color scheme throughout
- Mobile-responsive with hamburger menu
