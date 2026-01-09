import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";
import logoImg from "@assets/Untitled-logo_1768001491806.jpg";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Conditions", href: "/conditions" },
  { label: "Services", href: "/services" },
  { label: "Clinics", href: "/clinics" },
  { label: "Fees & Insurance", href: "/fees" },
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
          : "bg-background border-b border-border"
      }`}
      data-testid="header"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          <Link href="/" data-testid="link-home-logo">
            <img 
              src={logoImg} 
              alt="Agility Physio" 
              className="h-10 w-auto cursor-pointer"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-4" data-testid="nav-desktop">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span
                  className={`text-sm font-medium transition-colors cursor-pointer hover:text-secondary whitespace-nowrap ${
                    location === item.href ? "text-secondary" : "text-foreground"
                  }`}
                  data-testid={`link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <a
              href="tel:02012345678"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-phone"
            >
              <Phone className="w-4 h-4" />
              <span>020 1234 5678</span>
            </a>
            <Link href="/contact">
              <Button data-testid="button-book-now">
                Book Now
              </Button>
            </Link>
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
                  <img 
                    src={logoImg} 
                    alt="Agility Physio" 
                    className="h-10 w-auto"
                  />
                </div>

                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <Link key={item.href} href={item.href}>
                      <span
                        className={`block text-base font-medium py-2 cursor-pointer ${
                          location === item.href ? "text-secondary" : "text-foreground"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        data-testid={`mobile-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        {item.label}
                      </span>
                    </Link>
                  ))}
                </nav>

                <div className="mt-auto pt-8 space-y-4">
                  <a
                    href="tel:02012345678"
                    className="flex items-center gap-2 text-muted-foreground"
                    data-testid="mobile-link-phone"
                  >
                    <Phone className="w-5 h-5" />
                    <span>020 1234 5678</span>
                  </a>
                  <Link href="/contact">
                    <Button className="w-full" data-testid="mobile-button-book" onClick={() => setIsMobileMenuOpen(false)}>
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
