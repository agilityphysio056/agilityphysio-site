import { useEffect } from "react";
import { Link } from "wouter";
import { Header } from "./header";
import { Footer } from "./footer";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export function Layout({ children, title, description }: LayoutProps) {
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
      
      <a href="https://dc493564-c50f-4406-8aed-a89dc73b1df9-00-1mbvbxisvok70.kirk.replit.dev/book/0d9c1e55-283f-4917-8db5-233603050f7e" target="_blank" rel="noopener noreferrer">
        <div
          className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:block cursor-pointer"
          data-testid="sticky-book-online"
        >
          <div className="bg-primary text-primary-foreground px-3 py-4 rounded-l-md shadow-lg hover:bg-primary/90 transition-colors">
            <span className="text-sm font-semibold [writing-mode:vertical-rl] rotate-180">
              Book Online
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}
