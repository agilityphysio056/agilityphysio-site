# Agility Physio Website Design Guidelines

## Design Approach
**Healthcare Design System Approach** - Drawing from clinical/medical interface principles with influences from modern healthcare websites (Pure Physiotherapy, Cleveland Clinic digital properties). Focus on trust, clarity, and professional authority while maintaining approachability.

## Core Design Principles
1. **Clinical Professionalism** - Clean, uncluttered layouts that communicate medical expertise
2. **Patient-Centric Hierarchy** - Information architecture focused on pain points → solutions → action
3. **Restrained Visual Language** - Minimal decoration; let content and credibility speak
4. **Accessibility-First** - High contrast ratios, clear typography, intuitive navigation

## Color System
- **Primary Background**: White (#FFFFFF)
- **Secondary Background**: Light grey (#F8F9FA, #F5F5F5)
- **Accent (from logo yellow)**: Use ONLY for primary CTAs, active states, and key highlights
- **Secondary Accent**: Soft blue/teal (#4A90A4 or similar) for section backgrounds, icons, secondary buttons
- **Text**: Charcoal grey (#2C2C2C) for body, pure black (#000000) for headings
- **Borders/Dividers**: Light grey (#E5E5E5)

## Typography
**Primary Font**: Inter or similar modern sans-serif via Google Fonts
- **H1 (Hero)**: 48-56px, font-weight 700, tight line-height (1.1)
- **H2 (Section)**: 36-42px, font-weight 600
- **H3 (Subsection)**: 24-28px, font-weight 600
- **Body**: 16-18px, font-weight 400, line-height 1.6
- **Small/Caption**: 14px, font-weight 400

## Layout System
**Spacing Units**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 (e.g., p-4, py-12, gap-8)
- **Container**: max-w-7xl with consistent px-6 lg:px-8
- **Section Padding**: py-16 lg:py-24
- **Component Spacing**: mb-6 to mb-12 between elements

## Navigation Structure
**Sticky header** with white background, subtle shadow on scroll
- Logo (left) - maintain existing Agility Physio branding
- Primary nav (center/right): Services | Conditions | About | Contact | Book Appointment
- CTA button (right): "Book Appointment" - yellow accent background
- Mobile: Hamburger menu with full-screen overlay

## Homepage Structure

### Hero Section (80vh)
- **Large background image**: Clinical treatment room or professional physiotherapist with patient (mid-treatment, focused on technique not faces)
- **Overlay**: Semi-transparent dark gradient (top to bottom, 60% opacity)
- **Content** (max-w-2xl, left-aligned):
  - H1: "Expert Physiotherapy for Lasting Pain Relief"
  - Subheading (18px): "Specializing in musculoskeletal conditions, sports injuries, and rehabilitation"
  - Two CTAs: Primary yellow "Book Assessment" + Secondary outlined "View Services"
- Buttons have backdrop-blur-md bg-white/10 treatment

### Trust Bar (py-8, light grey background)
Single row with 3-4 statistics/credentials:
- "15+ Years Experience" | "HCPC Registered" | "1000+ Patients Treated" | "Extended Hours Available"

### Services Section (py-20, white background)
- H2: "Our Physiotherapy Services"
- 3-column grid (2-col tablet, 1-col mobile) of service cards
- Each card: Icon (blue/teal), title, 2-3 line description, "Learn More" link
- Services: Sports Injuries | Back & Neck Pain | Post-Surgery Rehab | Biomechanical Assessment | Chronic Pain | Workplace Injuries

### Conditions Treated (py-20, light grey background)
- H2: "Common Conditions We Treat"
- 2-column layout: Left (image of clinical assessment), Right (bullet list with icons)
- List includes: Lower back pain, Shoulder injuries, Knee problems, Neck pain, Sciatica, Tendinitis, etc.

### Treatment Approach (py-20, white background)
- H2: "Evidence-Based Treatment Approach"
- 3-step process cards (horizontal on desktop, stacked mobile):
  1. Assessment & Diagnosis
  2. Personalized Treatment Plan
  3. Rehabilitation & Prevention
- Each with icon, title, 3-line description

### Testimonials (py-16, soft blue/teal background at 10% opacity)
- H2: "Patient Success Stories"
- 2-column grid of testimonial cards
- White cards with quote, patient name (initials only), condition treated
- Minimal styling, focus on authenticity

### About/Credentials Section (py-20, white background)
- 2-column: Left (professional headshot of physiotherapist in clinical setting), Right (credentials, qualifications, philosophy)
- H2: "Meet Your Physiotherapist"
- Bullet points of qualifications, memberships (HCPC, CSP, etc.)

### CTA Section (py-16, yellow accent background)
- Centered content, max-w-3xl
- H2: "Ready to Start Your Recovery?"
- Subtext about easy booking/first appointment
- Primary CTA: "Book Your Assessment" (white button with dark text)
- Secondary info: Phone number, clinic hours

### Footer (py-12, charcoal grey background, white text)
- 4-column grid: Services, Quick Links, Contact Info, Hours
- Bottom bar: Copyright, Privacy Policy, Social icons (minimal)

## Images Strategy
- **Hero**: Large professional clinical image (treatment in progress, equipment visible)
- **Conditions section**: Clean assessment/diagnosis scene
- **About section**: Professional headshot in clinical environment
- **NO**: Gym equipment, athletic poses, generic stock "wellness" imagery
- **YES**: Treatment tables, clinical environments, professional interaction, medical equipment

## Component Library
- **Buttons**: Rounded-lg, px-6 py-3, medium font-weight, yellow primary/blue secondary
- **Cards**: White background, subtle shadow, rounded-lg, p-6
- **Icons**: Heroicons or similar (outline style), blue/teal color
- **Forms**: Clean inputs, label-above, focus:ring-yellow
- **Section dividers**: Minimal or none, rely on background color changes

## Key Differentiators from Generic Physio Sites
- Heavy emphasis on MSK specialization language
- Clinical imagery over lifestyle
- Credibility markers prominently displayed
- Direct pain-point addressing in headlines
- No "wellness journey" language - focus on diagnosis, treatment, results