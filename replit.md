# Agility Physio Website

## Overview

A professional physiotherapy clinic website for "Agility Physio" built with React and Express. The site serves as a patient-facing platform to showcase services, explain treatable conditions, provide clinic information, and enable contact form submissions. The design follows healthcare industry standards with a clean, clinical aesthetic focused on building trust and guiding patients toward booking appointments.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build Tool**: Vite for development and production builds

The frontend follows a page-based architecture with shared layout components (Header, Footer). Pages include Home, Services, Conditions, About, and Contact. The UI component library uses Radix UI primitives wrapped with Tailwind styling for consistent, accessible components.

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ESM modules)
- **API Pattern**: RESTful endpoints under `/api` prefix
- **Current Storage**: In-memory storage (MemStorage class)
- **Database Ready**: Drizzle ORM configured for PostgreSQL

The server handles contact form submissions and serves the static frontend in production. Development uses Vite's dev server with HMR proxied through Express.

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect configured
- **Schema**: Defined in `shared/schema.ts` using Zod for validation
- **Current State**: Schema exists for contact messages; storage is in-memory but database-ready

### Build System
- **Client**: Vite builds to `dist/public`
- **Server**: esbuild bundles server code to `dist/index.cjs`
- **Shared Code**: TypeScript path aliases (`@/` for client, `@shared/` for shared)

### Design System
The project includes detailed design guidelines in `design_guidelines.md` specifying:
- Healthcare-focused color palette (white backgrounds, yellow accent from logo, teal secondary)
- Typography using Inter font family
- Tailwind spacing conventions
- Component styling patterns for clinical professionalism

## External Dependencies

### UI Components (Radix UI)
Full shadcn/ui component library installed including Dialog, Select, Accordion, Tabs, Toast, and form controls.

### Database
- **Drizzle ORM**: PostgreSQL adapter configured
- **connect-pg-simple**: Session storage ready for PostgreSQL
- **Environment**: Requires `DATABASE_URL` environment variable when database is provisioned

### Validation
- **Zod**: Schema validation for API requests
- **zod-validation-error**: Human-readable validation error messages
- **@hookform/resolvers**: Form validation integration

### Booking System (LIVE — native flow)
The site has a fully native multi-step booking flow at `/bookings` (and confirmation at `/bookings/confirmation`) wired to the live CMS at `cms.agilityphysio.net`. The third-party Rushcliff link and the floating widget script have been removed.

- **Pages**: `client/src/pages/bookings.tsx` (5-step flow: Clinic → Service → Clinician → Date & Time → Your details) and `client/src/pages/bookings/confirmation.tsx` (success card with booking reference, Add-to-calendar `.ics`, GTM dataLayer push).
- **`openBookingWidget()`** in `client/src/lib/booking.ts` does SPA navigation to `/bookings` (history.pushState + popstate) — keeps all existing call sites in `home.tsx`, `services.tsx`, `service-detail.tsx`, `home-physio-west-midlands.tsx`, `condition-detail.tsx`, `stanmore.tsx`, `header.tsx` working without edits.
- **Sticky "Book Appointment" rail** on the right (in `layout.tsx`) is a Wouter `<Link>` to `/bookings` and is hidden when already on `/bookings*`.
- **CMS proxy in Express** (`server/routes.ts`): the CMS only allows CORS from `agilityphysio.net` / `www.agilityphysio.net`, so the browser can't call it directly. Express proxies through 5 endpoints, caches per-clinic API keys server-side (5-min TTL), and strips the `apiKey` field from the clinic listing returned to the client.
  - `GET  /api/cms/clinics`
  - `GET  /api/cms/services?clinicId=…`
  - `GET  /api/cms/clinicians?clinicId=…`
  - `GET  /api/cms/availability?clinicId=…&clinicianId=…&serviceId=…&fromDate=YYYY-MM-DD`
  - `POST /api/cms/bookings` (forwards upstream status + body verbatim)
- **sessionStorage key**: `agility:booking` (handed from `bookings.tsx` to the confirmation page).
- **Analytics**: confirmation page pushes a `booking_confirmed` event onto `window.dataLayer` (clinic, service, value GBP, bookingReference). The Google Ads conversion `gtag("event", "conversion", …)` block is intentionally commented out — fill in the `CONVERSION_LABEL` portion of `AW-17780015342/CONVERSION_LABEL` in the confirmation page when Google Ads provides it.
- **Service display**: prefixes "Pay as you go - " and "Private – " are stripped at render time. Order is Initial Assessment → Treatment → Home Visit.

### Development Tools
- **Replit Plugins**: Runtime error overlay, cartographer, dev banner for Replit environment
- **TypeScript**: Strict mode with path aliases configured