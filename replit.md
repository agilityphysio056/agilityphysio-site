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

### Booking System
- **CMS Widget**: Booking is handled by an external CMS (separate Replit project) via an embeddable widget script loaded in `client/index.html`
- **Widget URL**: `https://dc493564-c50f-4406-8aed-a89dc73b1df9-00-1mbvbxisvok70.kirk.replit.dev/booking-widget.js`
- **Direct Booking Page**: `https://dc493564-c50f-4406-8aed-a89dc73b1df9-00-1mbvbxisvok70.kirk.replit.dev/book/0d9c1e55-283f-4917-8db5-233603050f7e`
- All "Book" buttons across the site link to the CMS booking page (opened in new tab)
- The widget script renders a floating "Book Appointment" button on all pages

### Development Tools
- **Replit Plugins**: Runtime error overlay, cartographer, dev banner for Replit environment
- **TypeScript**: Strict mode with path aliases configured