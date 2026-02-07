import { useState, useEffect, useRef } from "react";
import { Layout } from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import heroContactImage from "../assets/images/hero-contact.jpg";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const LOCATIONS = [
  {
    name: "Stanmore Clinic",
    lat: 51.6154,
    lng: -0.3120,
    address: "Stanmore, Greater London",
  },
  {
    name: "Stockwell Clinic",
    lat: 51.4720,
    lng: -0.1228,
    address: "Stockwell, South London",
  },
];

function LondonMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const map = L.map(mapRef.current, {
      center: [51.52, -0.18],
      zoom: 11,
      scrollWheelZoom: false,
      zoomControl: true,
    });

    mapInstanceRef.current = map;

    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
      maxZoom: 19,
    }).addTo(map);

    const dotIcon = L.divIcon({
      html: `<div style="width:20px;height:20px;background:#F2B705;border:3px solid #1F2A44;border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,0.3);"></div>`,
      iconSize: [20, 20],
      iconAnchor: [10, 10],
      popupAnchor: [0, -14],
      className: "",
    });

    LOCATIONS.forEach((loc) => {
      L.marker([loc.lat, loc.lng], { icon: dotIcon })
        .addTo(map)
        .bindPopup(
          `<div style="text-align:center;font-family:Inter,sans-serif;"><strong style="font-size:14px;color:#1F2A44;">${loc.name}</strong><br/><span style="font-size:12px;color:#666;">${loc.address}</span></div>`
        );
    });

    const bounds = L.latLngBounds(LOCATIONS.map((loc) => [loc.lat, loc.lng] as [number, number]));
    map.fitBounds(bounds, { padding: [60, 60] });

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  return (
    <div
      ref={mapRef}
      className="h-[450px] w-full"
      data-testid="map-london"
    />
  );
}

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await apiRequest("POST", "/api/contact", formData);
      
      toast({
        title: "Message Sent",
        description: "Thank you for your enquiry. We'll be in touch shortly.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="relative min-h-[60vh] flex items-center overflow-hidden" data-testid="section-contact-hero">
        <img
          src={heroContactImage}
          alt="Healthcare professional consulting with patient"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <h1
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
              data-testid="text-contact-page-title"
            >
              Contact Us
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Have a question or ready to book an appointment? Get in touch and
              our team will respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <Card className="p-6 lg:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        data-testid="input-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                        data-testid="input-email"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Your phone number"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        data-testid="input-phone"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Select
                        value={formData.subject}
                        onValueChange={(value) =>
                          setFormData({ ...formData, subject: value })
                        }
                      >
                        <SelectTrigger id="subject" data-testid="select-subject">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="booking">
                            Book an Appointment
                          </SelectItem>
                          <SelectItem value="enquiry">
                            General Enquiry
                          </SelectItem>
                          <SelectItem value="insurance">
                            Insurance Query
                          </SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Please describe your enquiry or condition..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      data-testid="textarea-message"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto"
                    data-testid="button-submit"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="p-6" data-testid="card-contact-info">
                <h3 className="font-semibold text-foreground mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-secondary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <a
                        href="tel:02030929976"
                        className="text-sm text-muted-foreground hover:text-secondary"
                      >
                        0203 092 9976
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-secondary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a
                        href="mailto:info@agilityphysio.net"
                        className="text-sm text-muted-foreground hover:text-secondary"
                      >
                        info@agilityphysio.net
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-secondary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-sm text-muted-foreground">
                        Stanmore, Greater London
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6" data-testid="card-hours">
                <h3 className="font-semibold text-foreground mb-4">
                  Opening Hours
                </h3>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-secondary mt-0.5" />
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between gap-4">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="text-foreground">8:00am - 8:00pm</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="text-foreground">9:00am - 2:00pm</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="text-foreground">Closed</span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-secondary/10" data-testid="card-emergency">
                <h3 className="font-semibold text-foreground mb-2">
                  Same-Day Appointments
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  In pain and need to see someone quickly? We offer same-day
                  appointments when available.
                </p>
                <Button size="sm" data-testid="button-call-now">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted" data-testid="section-map">
        <LondonMap />
      </section>
    </Layout>
  );
}
