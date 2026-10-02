export type PrototypeRoute = 'hub' | 'salon' | 'restaurant' | 'clinic';

export type DeviceMode = 'fullscreen' | 'desktop' | 'tablet' | 'mobile';

export interface PrototypeSpec {
  id: PrototypeRoute;
  name: string;
  tagline: string;
  category: 'Salon & Barber' | 'Restaurant & Fast Casual' | 'Healthcare & Clinic';
  livePath: string;
  colorScheme: {
    primary: string;
    accent: string;
    bg: string;
    badge: string;
  };
  keyFeatures: string[];
  designHighlights: string[];
  techStack: string[];
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  options?: string;
}

export interface SalonBooking {
  service: string;
  barber: string;
  date: string;
  time: string;
  clientName: string;
  phone: string;
}

export interface ClinicAppointment {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  doctor: string;
  preferredDate: string;
  timeSlot: string;
  notes?: string;
}
