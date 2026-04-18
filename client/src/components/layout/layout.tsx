import { useEffect, useState } from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { openBookingWidget } from "@/lib/booking";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export function Layout({ children, title, description }: LayoutProps) {
  const [showSticky, setShowSticky] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />

      <button
        onClick={openBookingWidget}
        className={`fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:block transition-all duration-300 ${
          showSticky ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        }`}
        data-testid="sticky-book-online"
      >
        <div className="bg-primary text-primary-foreground px-3 py-4 rounded-l-md shadow-lg hover:bg-primary/90 transition-colors cursor-pointer">
          <span className="text-sm font-semibold [writing-mode:vertical-rl] rotate-180">
            Book Appointment
          </span>
        </div>
      </button>
    </div>
  );
}
