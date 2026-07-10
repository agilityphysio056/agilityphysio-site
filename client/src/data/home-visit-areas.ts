import stanmoreHeroImg from "@/assets/images/stanmore-hero.png";

export interface HomeVisitPricingItem {
  duration: string;
  price: string;
}

export interface HomeVisitTestimonial {
  text: string;
  author: string;
  rating: number;
}

export interface HomeVisitAreaConfig {
  area: string;
  slug: string;
  nearbyAreas: string[];
  postcodes: string[];
  phone: string;
  responseTime: string;
  pricing: {
    initial: HomeVisitPricingItem;
    followUp45: HomeVisitPricingItem;
    followUp30: HomeVisitPricingItem;
  };
  testimonials: HomeVisitTestimonial[];
  googleReviewCount: number;
  googleRating: number;
  heroImage?: string;
}

export const stanmoreHomeVisit: HomeVisitAreaConfig = {
  area: "Stanmore",
  slug: "stanmore",
  nearbyAreas: ["Edgware", "Harrow", "Kenton", "Pinner", "Wealdstone"],
  postcodes: ["HA7", "HA5", "HA3", "HA1", "HA2"],
  phone: "0203 092 9976",
  responseTime: "within 24–48 hours",
  pricing: {
    initial: { duration: "60 mins", price: "£120" },
    followUp45: { duration: "45 mins", price: "£95" },
    followUp30: { duration: "30 mins", price: "£75" },
  },
  testimonials: [
    {
      text: "I couldn't travel after my knee surgery, so having a physiotherapist come to my home in Stanmore was a lifesaver. The treatment was just as professional as a clinic visit — I'm back on my feet much faster than expected.",
      author: "Patient in Stanmore",
      rating: 5,
    },
    {
      text: "My elderly mother couldn't get to a clinic, so we booked a home visit for her. The therapist was punctual, kind, and incredibly thorough. We've now booked a full course of sessions. Highly recommend to anyone in Harrow or Edgware.",
      author: "Patient in Harrow",
      rating: 5,
    },
    {
      text: "I had a home visit for my back pain and was amazed at how much equipment the physio brought along. Everything was done properly — assessment, treatment, exercise advice — all in my living room in Kenton.",
      author: "Patient in Kenton",
      rating: 5,
    },
  ],
  googleReviewCount: 250,
  googleRating: 5,
  heroImage: stanmoreHeroImg,
};

export const stockwellHomeVisit: HomeVisitAreaConfig = {
  area: "Stockwell",
  slug: "stockwell",
  nearbyAreas: ["Brixton", "Clapham", "Vauxhall"],
  postcodes: ["SW9", "SW4", "SW8"],
  phone: "0203 092 9976",
  responseTime: "within 24–48 hours",
  pricing: {
    initial: { duration: "60 mins", price: "£70" },
    followUp45: { duration: "45 mins", price: "£65" },
    followUp30: { duration: "30 mins", price: "£65" },
  },
  testimonials: [
    {
      text: "I was recovering from hip surgery and couldn't travel to a clinic. Having a physiotherapist come to my flat in Stockwell made all the difference — professional, thorough, and really supportive throughout my recovery.",
      author: "Patient in Stockwell",
      rating: 5,
    },
    {
      text: "Brilliant service. My back was so bad I couldn't sit in a car, let alone get to an appointment. The home visit was arranged quickly and the treatment was exactly what I needed. Would recommend to anyone in Brixton or Clapham.",
      author: "Patient in Brixton",
      rating: 5,
    },
    {
      text: "I booked a home visit for my knee and was really impressed. The physiotherapist arrived on time in Vauxhall, spent a full hour with me, and gave me a clear rehab plan. Five stars without hesitation.",
      author: "Patient in Vauxhall",
      rating: 5,
    },
  ],
  googleReviewCount: 32,
  googleRating: 5.0,
};

export const homeVisitAreas: HomeVisitAreaConfig[] = [stanmoreHomeVisit, stockwellHomeVisit];
