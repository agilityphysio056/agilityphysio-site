import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, Phone, ChevronDown, MapPin } from "lucide-react";
import logoImg from "@assets/Untitled-logo_1768001491806.jpg";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Fees & Insurance", href: "/fees" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const conditionPages = [
  { name: "Back Pain", href: "/conditions/back-pain" },
  { name: "Neck Pain", href: "/conditions/neck-pain" },
  { name: "Shoulder Pain", href: "/conditions/shoulder-pain" },
  { name: "Knee Pain", href: "/conditions/knee-pain" },
  { name: "Hip Pain", href: "/conditions/hip-pain" },
  { name: "Sciatica", href: "/conditions/sciatica" },
  { name: "Sports Injuries", href: "/conditions/sports-injuries" },
  { name: "Post-Op Rehab", href: "/conditions/post-op-rehab" },
];

const servicePages = [
  { name: "Clinic Physiotherapy", href: "/services/clinic-physiotherapy" },
  { name: "Home Visit Physiotherapy", href: "/services/home-visit-physiotherapy" },
  { name: "Virtual Physiotherapy", href: "/services/virtual-physiotherapy" },
  { name: "North-West London Home Visit", href: "/services/home-physio-west-midlands" },
];

const clinicLocations = [
  { name: "Stanmore", href: "/clinics/stanmore", area: "North London" },
  { name: "Stockwell", href: "/clinics/stockwell", area: "South London" },
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
              className="h-10 w-auto cursor-pointer mix-blend-multiply"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-4" data-testid="nav-desktop">
            <Link href="/">
              <span
                className={`text-sm font-medium transition-colors cursor-pointer hover:text-secondary whitespace-nowrap ${
                  location === "/" ? "text-secondary" : "text-foreground"
                }`}
                data-testid="link-home"
              >
                Home
              </span>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`text-sm font-medium transition-colors cursor-pointer hover:text-secondary whitespace-nowrap flex items-center gap-1 ${
                    location.startsWith("/conditions") ? "text-secondary" : "text-foreground"
                  }`}
                  data-testid="link-conditions-dropdown"
                >
                  Conditions
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-52">
                <Link href="/conditions">
                  <DropdownMenuItem className="cursor-pointer font-medium" data-testid="link-conditions-all">
                    All Conditions
                  </DropdownMenuItem>
                </Link>
                {conditionPages.map((condition) => (
                  <Link key={condition.href} href={condition.href}>
                    <DropdownMenuItem className="cursor-pointer" data-testid={`link-condition-${condition.name.toLowerCase().replace(/\s+/g, "-")}`}>
                      {condition.name}
                    </DropdownMenuItem>
                  </Link>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`text-sm font-medium transition-colors cursor-pointer hover:text-secondary whitespace-nowrap flex items-center gap-1 ${
                    location.startsWith("/services") ? "text-secondary" : "text-foreground"
                  }`}
                  data-testid="link-services-dropdown"
                >
                  Services
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-56">
                {servicePages.map((service) => (
                  <Link key={service.href} href={service.href}>
                    <DropdownMenuItem className="cursor-pointer" data-testid={`link-service-${service.name.toLowerCase().replace(/\s+/g, "-")}`}>
                      {service.name}
                    </DropdownMenuItem>
                  </Link>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`text-sm font-medium transition-colors cursor-pointer hover:text-secondary whitespace-nowrap flex items-center gap-1 ${
                    location.startsWith("/clinics") ? "text-secondary" : "text-foreground"
                  }`}
                  data-testid="link-clinics-dropdown"
                >
                  Clinics
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-56">
                {clinicLocations.map((clinic) => (
                  <Link key={clinic.href} href={clinic.href}>
                    <DropdownMenuItem className="cursor-pointer" data-testid={`link-clinic-${clinic.name.toLowerCase()}`}>
                      <MapPin className="w-4 h-4 mr-2 text-secondary" />
                      <div>
                        <div className="font-medium">{clinic.name}</div>
                        <div className="text-xs text-muted-foreground">{clinic.area}</div>
                      </div>
                    </DropdownMenuItem>
                  </Link>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            {navItems.slice(2).map((item) => (
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
              href="tel:02030929976"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-phone"
            >
              <Phone className="w-4 h-4" />
              <span>0203 092 9976</span>
            </a>
            <a href="https://new-ob.rushcliff.com/holding-page/445519" target="_blank" rel="noopener noreferrer">
              <Button data-testid="button-book-now">
                Book Now
              </Button>
            </a>
          </div>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80">
              <div className="flex flex-col h-full overflow-hidden">
                <div className="flex items-center justify-between mb-4 shrink-0">
                  <img 
                    src={logoImg} 
                    alt="Agility Physio" 
                    className="h-10 w-auto mix-blend-multiply"
                  />
                </div>

                <nav className="flex flex-col gap-2 overflow-y-auto flex-1 pr-1">
                  <Link href="/">
                    <span
                      className={`block text-base font-medium py-2 cursor-pointer ${
                        location === "/" ? "text-secondary" : "text-foreground"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      data-testid="mobile-link-home"
                    >
                      Home
                    </span>
                  </Link>

                  <div className="py-2">
                    <Link href="/conditions">
                      <span
                        className={`block text-base font-medium mb-2 cursor-pointer ${
                          location === "/conditions" ? "text-secondary" : "text-foreground"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        data-testid="mobile-link-conditions"
                      >
                        Conditions
                      </span>
                    </Link>
                    <div className="pl-4 space-y-1">
                      {conditionPages.map((condition) => (
                        <Link key={condition.href} href={condition.href}>
                          <span
                            className={`block text-sm py-1.5 cursor-pointer ${
                              location === condition.href ? "text-secondary" : "text-muted-foreground"
                            }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                            data-testid={`mobile-link-condition-${condition.name.toLowerCase().replace(/\s+/g, "-")}`}
                          >
                            {condition.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="py-2">
                    <span className="block text-base font-medium text-foreground mb-2">Services</span>
                    <div className="pl-4 space-y-1">
                      {servicePages.map((service) => (
                        <Link key={service.href} href={service.href}>
                          <span
                            className={`block text-sm py-1.5 cursor-pointer ${
                              location === service.href ? "text-secondary" : "text-muted-foreground"
                            }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                            data-testid={`mobile-link-service-${service.name.toLowerCase().replace(/\s+/g, "-")}`}
                          >
                            {service.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  <div className="py-2">
                    <span className="block text-base font-medium text-foreground mb-2">Clinics</span>
                    <div className="pl-4 space-y-1">
                      {clinicLocations.map((clinic) => (
                        <Link key={clinic.href} href={clinic.href}>
                          <span
                            className={`flex items-center gap-2 text-sm py-1.5 cursor-pointer ${
                              location === clinic.href ? "text-secondary" : "text-muted-foreground"
                            }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                            data-testid={`mobile-link-clinic-${clinic.name.toLowerCase()}`}
                          >
                            <MapPin className="w-4 h-4" />
                            {clinic.name}
                            <span className="text-xs">({clinic.area})</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  {navItems.slice(2).map((item) => (
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

                <div className="pt-4 pb-2 space-y-4 shrink-0 border-t border-border mt-2">
                  <a
                    href="tel:02030929976"
                    className="flex items-center gap-2 text-muted-foreground"
                    data-testid="mobile-link-phone"
                  >
                    <Phone className="w-5 h-5" />
                    <span>0203 092 9976</span>
                  </a>
                  <a href="https://new-ob.rushcliff.com/holding-page/445519" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full" data-testid="mobile-button-book" onClick={() => setIsMobileMenuOpen(false)}>
                      Book Now
                    </Button>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
