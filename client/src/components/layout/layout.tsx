import { useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Header } from "./header";
import { Footer } from "./footer";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export function Layout({ children, title, description }: LayoutProps) {
  const [location] = useLocation();
  const isBookingsPage = location.startsWith("/bookings");

  useEffect(() => {
    if (title) {
      document.title = title;
    }
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", description);
      } else {
        const meta = document.createElement("meta");
        meta.name = "description";
        meta.content = description;
        document.head.appendChild(meta);
      }
    }
  }, [title, description]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />

      {!isBookingsPage && (
        <Link
          href="/bookings"
          className="fixed left-0 top-1/2 -translate-y-1/2 z-50 transition-all duration-300"
          data-testid="sticky-book-online"
        >
          <div className="bg-primary text-primary-foreground px-3 py-4 rounded-r-md shadow-lg hover:bg-primary/90 active:bg-primary/80 transition-colors cursor-pointer">
            <span className="text-sm font-semibold [writing-mode:vertical-lr]">
              Book Appointment
            </span>
          </div>
        </Link>
      )}
    </div>
  );
}
