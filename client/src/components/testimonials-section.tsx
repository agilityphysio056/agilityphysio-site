import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Pause, Play, Star } from "lucide-react";

export const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

export const googleReviews = [
  {
    quote: "Uzma is very knowledgeable and explains the treatment clearly. After 8 sessions, the difference is brilliant. She has worked miracles in the weeks she has been treating me.",
    location: "Stanmore",
  },
  {
    quote: "Great and kind people. Amazing service 100% recommending. Professional yet friendly approach. The exercises they provided really helped with my recovery.",
    location: "Harrow",
  },
  {
    quote: "I was treated after a car accident with severe neck and shoulder pain. Within weeks I was 80%+ better with the massage and TENS machine treatments. First class service.",
    location: "Edgware",
  },
  {
    quote: "Excellent experience with the physiotherapists here. They took time to explain my condition and created a personalised rehabilitation plan that actually worked.",
    location: "Wembley",
  },
  {
    quote: "Helped me recover from a pulled calf muscle with their equipment-assisted treatment. The team is helpful with exercises beyond just the primary complaint. Highly recommended.",
    location: "Pinner",
  },
];

export function TestimonialsSection() {
  const [isPlaying, setIsPlaying] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (!isPlaying || !scrollRef.current) return;

    const container = scrollRef.current;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    const maxScroll = scrollWidth - clientWidth;

    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        const newPos = prev + 1;
        if (newPos >= maxScroll) {
          return 0;
        }
        return newPos;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollPosition;
    }
  }, [scrollPosition]);

  const duplicatedReviews = [...googleReviews, ...googleReviews];

  return (
    <section
      className="py-16 lg:py-20 bg-slate-900"
      data-testid="section-testimonials"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-sm uppercase tracking-widest text-primary mb-3 font-medium">
              Testimonials
            </p>
            <h2
              className="text-2xl lg:text-3xl font-bold text-white"
              data-testid="text-testimonials-title"
            >
              Patient Success Stories
            </h2>
          </div>
          <Button
            size="icon"
            variant="outline"
            onClick={() => setIsPlaying(!isPlaying)}
            className="bg-white/10 border-white/30 text-white hover:bg-white/20"
            data-testid="button-testimonial-toggle"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </Button>
        </div>
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
          style={{ touchAction: 'pan-y' }}
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
          onTouchStart={() => setIsPlaying(false)}
          onTouchEnd={() => setIsPlaying(true)}
        >
          {duplicatedReviews.map((review, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 bg-white p-6 rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none border-2 border-primary/20"
              data-testid={`card-review-${index}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                  ))}
                </div>
                <GoogleLogo />
              </div>
              <blockquote className="text-sm text-slate-700 mb-6 leading-relaxed min-h-[120px]">
                {review.quote}
              </blockquote>
              <div className="flex items-center gap-2">
                <div className="w-8 h-px bg-slate-900" />
                <p className="text-sm font-semibold text-slate-900">
                  Patient in {review.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
