export interface ServiceItem {
  id: string;
  category: 'residential' | 'commercial';
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  features: string[];
  startingPrice: string;
  duration: string;
  tag: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  serviceType: string;
  rating: number;
  avatar: string;
  location: string;
}

export interface TrustItem {
  icon: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  details: string;
}

export interface WhyChooseItem {
  icon: string;
  title: string;
  description: string;
}
