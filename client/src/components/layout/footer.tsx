import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const services = [
  { label: "Sports Injuries", href: "/services#sports" },
  { label: "Back & Neck Pain", href: "/services#back" },
  { label: "Post-Surgery Rehab", href: "/services#rehab" },
  { label: "Chronic Pain", href: "/services#chronic" },
  { label: "Workplace Injuries", href: "/services#workplace" },
];

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/about#team" },
  { label: "Conditions We Treat", href: "/conditions" },
  { label: "Book Online", href: "/booking" },
  { label: "FAQs", href: "/faqs" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold leading-tight">Agility</span>
                <span className="text-sm opacity-70 leading-tight">Physio</span>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Expert physiotherapy services specializing in musculoskeletal conditions, 
              sports injuries, and rehabilitation. HCPC registered practitioners.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4" data-testid="text-services-heading">Services</h3>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <span className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors cursor-pointer">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4" data-testid="text-quicklinks-heading">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <span className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors cursor-pointer">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4" data-testid="text-contact-heading">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 opacity-70" />
                <div>
                  <a href="tel:+442012345678" className="text-sm hover:text-primary transition-colors">
                    020 1234 5678
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 opacity-70" />
                <div>
                  <a href="mailto:info@agilityphysio.net" className="text-sm hover:text-primary transition-colors">
                    info@agilityphysio.net
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 opacity-70" />
                <div className="text-sm opacity-80">
                  Stanmore, Greater London
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 opacity-70" />
                <div className="text-sm opacity-80">
                  <div>Mon-Fri: 8am - 8pm</div>
                  <div>Sat: 9am - 2pm</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-70">
            &copy; {new Date().getFullYear()} Agility Physio Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy">
              <span className="text-sm opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                Privacy Policy
              </span>
            </Link>
            <Link href="/terms">
              <span className="text-sm opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                Terms of Service
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
