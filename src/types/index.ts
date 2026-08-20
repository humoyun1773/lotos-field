export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitleTag?: string;
  description: string;
  category: string;
  features?: string[];
  bannerStyle: 'brush' | 'pill' | 'taxi' | 'architect' | 'it';
  phone?: string;
  link?: string;
}

