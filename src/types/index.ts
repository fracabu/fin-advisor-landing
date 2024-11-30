export interface Testimonial {
  id: number;
  name: string;
  text: string;
  image: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  features: string[];
  description: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}