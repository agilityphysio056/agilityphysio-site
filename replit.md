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
- **Current**: All "Book" buttons link to Rushcliff: `https://new-ob.rushcliff.com/holding-page/445519` (opened in new tab)
- **CMS Widget (pending)**: A CMS booking widget from a separate Replit project is ready to integrate once that project is deployed. The widget script tag is commented out in `client/index.html`. When the CMS is deployed, replace all Rushcliff URLs with the CMS booking URL and uncomment the widget script.
- **CMS Widget URL** (for when deployed): `https://<deployed-domain>/booking-widget.js`
- **CMS Booking page** (for when deployed): `https://<deployed-domain>/book/0d9c1e55-283f-4917-8db5-233603050f7e`

### Development Tools
- **Replit Plugins**: Runtime error overlay, cartographer, dev banner for Replit environment
- **TypeScript**: Strict mode with path aliases configured