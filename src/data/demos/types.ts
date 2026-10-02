export interface DemoReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  tag?: string;
  avatar?: string;
}

export interface DemoOpeningHours {
  days: string;
  hours: string;
  isClosed?: boolean;
}

export interface DemoContactInfo {
  phone: string;
  displayPhone: string;
  whatsappNumber: string;
  email: string;
  address: string;
  city: string;
  area: string;
  landmark?: string;
  mapEmbedUrl?: string;
}

// Salon Types
export interface Stylist {
  id: string;
  name: string;
  title: string;
  experience: string;
  specialty: string;
  avatar?: string;
  photoUrl?: string;
  bio: string;
}

export interface SalonService {
  id: string;
  category: string;
  name: string;
  description: string;
  durationMinutes: number;
  price: number;
  popular?: boolean;
  tag?: string;
  image?: string;
}

export interface SalonDemoData {
  businessName: string;
  tagline: string;
  shortDescription: string;
  rating: number;
  reviewCount: number;
  heroImage?: string;
  contact: DemoContactInfo;
  openingHours: DemoOpeningHours[];
  services: SalonService[];
  stylists: Stylist[];
  reviews: DemoReview[];
  timeSlots: {
    morning: string[];
    afternoon: string[];
    evening: string[];
  };
}

// Restaurant Types
export interface RestaurantMenuItem {
  id: string;
  category: string;
  name: string;
  description: string;
  price: number;
  isVeg: boolean;
  isChefSpecial?: boolean;
  isPopular?: boolean;
  spiciness?: 'mild' | 'medium' | 'spicy';
  prepTime?: string;
  image?: string;
}

export interface RestaurantCategory {
  id: string;
  name: string;
  description: string;
}

export interface RestaurantDemoData {
  businessName: string;
  tagline: string;
  shortDescription: string;
  rating: number;
  reviewCount: number;
  heroImage?: string;
  contact: DemoContactInfo;
  openingHours: DemoOpeningHours[];
  categories: RestaurantCategory[];
  menuItems: RestaurantMenuItem[];
  reviews: DemoReview[];
  deliveryNotice: string;
  averageMealForTwo: number;
}

// Clinic Types
export interface DoctorProfile {
  id: string;
  name: string;
  degree: string;
  specialty: string;
  experienceYears: number;
  regNumber: string;
  photoUrl: string;
  bio: string;
  consultationFee: number;
  languages: string[];
  education: string[];
}

export interface ClinicTreatment {
  id: string;
  name: string;
  category: string;
  description: string;
  durationMinutes: number;
  startingFee: number;
  commonConcerns: string[];
  image?: string;
}

export interface ClinicDemoData {
  businessName: string;
  tagline: string;
  shortDescription: string;
  rating: number;
  reviewCount: number;
  heroImage?: string;
  doctor: DoctorProfile;
  treatments: ClinicTreatment[];
  contact: DemoContactInfo;
  openingHours: DemoOpeningHours[];
  reviews: DemoReview[];
  timeSlots: {
    morning: string[];
    evening: string[];
  };
  disclaimer: string;
}
