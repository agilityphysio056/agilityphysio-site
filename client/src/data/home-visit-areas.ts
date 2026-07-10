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
};

export const homeVisitAreas: HomeVisitAreaConfig[] = [stanmoreHomeVisit];
