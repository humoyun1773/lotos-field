export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitleTag?: string;
  description: string;
  category: string;
  features: string[];
  bannerStyle: 'brush' | 'pill' | 'taxi' | 'architect' | 'it';
  phone?: string;
  details: {
    tagline: string;
    summary: string;
    highlights: string[];
    advantages: string[];
    contactActionText: string;
  };
}

export type ActiveModal = 'service' | 'contact' | 'location' | null;
