import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Phone } from "lucide-react";

const navItems = [
  { label: "Services", href: "/services" },
  { label: "Conditions", href: "/conditions" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-background"
      }`}
      data-testid="header"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-foreground leading-tight">Agility</span>
                <span className="text-sm text-muted-foreground leading-tight">Physio</span>
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8" data-testid="nav-desktop">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span
                  className={`text-sm font-medium transition-colors cursor-pointer hover:text-secondary ${
                    location === item.href ? "text-secondary" : "text-foreground"
                  }`}
                  data-testid={`link-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+447000000000"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-phone"
            >
              <Phone className="w-4 h-4" />
              <span>020 1234 5678</span>
            </a>
            <Button data-testid="button-book-appointment">
              Book Appointment
            </Button>
          </div>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-lg">A</span>
                    </div>
                    <span className="text-lg font-semibold">Agility Physio</span>
                  </div>
                </div>

                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <Link key={item.href} href={item.href}>
                      <span
                        className={`text-lg font-medium py-2 cursor-pointer ${
                          location === item.href ? "text-secondary" : "text-foreground"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        data-testid={`mobile-link-${item.label.toLowerCase()}`}
                      >
                        {item.label}
                      </span>
                    </Link>
                  ))}
                </nav>

                <div className="mt-auto pt-8 space-y-4">
                  <a
                    href="tel:+447000000000"
                    className="flex items-center gap-2 text-muted-foreground"
                    data-testid="mobile-link-phone"
                  >
                    <Phone className="w-5 h-5" />
                    <span>020 1234 5678</span>
                  </a>
                  <Button className="w-full" data-testid="mobile-button-book">
                    Book Appointment
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
