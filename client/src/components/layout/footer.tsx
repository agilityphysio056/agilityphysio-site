import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import logoImg from "@assets/Untitled-logo_1768001491806.jpg";
import hcpcLogo from "@assets/hcpc-registered_1770502955561.png";
import cspLogo from "@assets/csp_1770502966293.png";
import charteredCrestLogo from "@assets/chartered-physio-crest_1770502966292.png";

const services = [
  { label: "Clinic Physiotherapy", href: "/services/clinic-physiotherapy" },
  { label: "Home Visits", href: "/services/home-visit-physiotherapy" },
  { label: "Virtual Appointments", href: "/services/virtual-physiotherapy" },
];

const conditions = [
  { label: "Back Pain", href: "/conditions/back-pain" },
  { label: "Neck Pain", href: "/conditions/neck-pain" },
  { label: "Sciatica", href: "/conditions/sciatica" },
  { label: "Sports Injuries", href: "/conditions/sports-injuries" },
];

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Clinics", href: "/clinics" },
  { label: "Fees & Insurance", href: "/fees" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="mb-4 inline-block bg-white/90 rounded-md px-2 py-1">
              <img 
                src={logoImg} 
                alt="Agility Physio" 
                className="h-8 w-auto mix-blend-multiply"
              />
            </div>
            <p className="text-sm opacity-80 leading-relaxed mb-6 max-w-sm">
              Musculoskeletal physiotherapy and rehabilitation. HCPC registered practitioners providing evidence-based assessment, treatment, and rehabilitation plans.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 opacity-70" />
                <a href="tel:02030929976" className="text-sm hover:text-primary transition-colors">
                  0203 092 9976
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 opacity-70" />
                <a href="mailto:info@agilityphysio.net" className="text-sm hover:text-primary transition-colors">
                  info@agilityphysio.net
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm" data-testid="text-services-heading">Services</h3>
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
            <h3 className="font-semibold mb-4 text-sm" data-testid="text-conditions-heading">Conditions</h3>
            <ul className="space-y-2">
              {conditions.map((item) => (
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
            <h3 className="font-semibold mb-4 text-sm" data-testid="text-quicklinks-heading">Quick Links</h3>
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
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="mb-8">
            <h3 className="font-semibold mb-4 text-sm" data-testid="text-accreditation-heading">Professional Accreditation</h3>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <img
                src={hcpcLogo}
                alt="HCPC Registered"
                loading="lazy"
                className="h-8 sm:h-9 w-auto object-contain"
                data-testid="footer-logo-hcpc"
              />
              <img
                src={cspLogo}
                alt="Chartered Society of Physiotherapy"
                loading="lazy"
                className="h-8 sm:h-9 w-auto object-contain"
                data-testid="footer-logo-csp"
              />
              <img
                src={charteredCrestLogo}
                alt="Chartered Physiotherapist"
                loading="lazy"
                className="h-8 sm:h-9 w-auto object-contain"
                data-testid="footer-logo-chartered-crest"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 opacity-70" />
                <Link href="/clinics/stanmore">
                  <span className="text-sm opacity-80 hover:opacity-100 cursor-pointer">Stanmore</span>
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 opacity-70" />
                <Link href="/clinics/stockwell">
                  <span className="text-sm opacity-80 hover:opacity-100 cursor-pointer">Stockwell</span>
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 opacity-70" />
                <span className="text-sm opacity-80">Mon-Fri 8am-8pm, Sat 9am-2pm</span>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-6 md:justify-end">
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
          <p className="text-sm opacity-60 mt-6">
            &copy; {new Date().getFullYear()} Agility Physio Ltd. All rights reserved. HCPC Registered.
          </p>
        </div>
      </div>
    </footer>
  );
}
