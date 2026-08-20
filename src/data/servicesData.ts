import type { ServiceItem } from '../types';

export const companyInfo = {
  name: "ZALATIYE LASTOCHKA",
  entityType: "M C H J",
  tagline: "SIFAT • ISHONCH • NATIJA",
  secondaryTagline: "BIRGA YUKSALAMIZ!",
  phone: "+998 91 951 73 35",
  rawPhone: "+998919517335",
  telegram: "https://t.me/zalatiyelastochka",
  email: "info@zalatiyelastochka.uz",
  address: "O'zbekiston, Toshkent shahri / Surxondaryo viloyati",
  workingHours: "24/7 Xizmat ko'rsatish"
};

export const services: ServiceItem[] = [
  {
    id: 'travel',
    number: '01',
    title: 'LOTOS FIELD TRAVEL',
    description: 'Sayohatlar uchun yangi imkoniyatlar',
    category: 'Turizm & Sayohat',
    bannerStyle: 'brush',
    link: '#travel'
  },
  {
    id: 'education',
    number: '02',
    title: 'AL-HAKIM AT-TERMEZIY',
    subtitleTag: "O'QUV MARKAZI",
    description: 'Ilm bilan rivojlanish, kelajak sari qadam',
    category: 'Ta’lim & Rivojlanish',
    bannerStyle: 'pill',
    link: '#education'
  },
  {
    id: 'taxi',
    number: '03',
    title: "ES O'RGIMCHAK TAXI",
    subtitleTag: "TAXI",
    description: 'Tez, xavfsiz va ishonchli taxi xizmati',
    category: 'Yo‘lovchi & Yuk tashish',
    bannerStyle: 'taxi',
    link: '#taxi'
  },
  {
    id: 'architecture',
    number: '04',
    title: 'ARXETEKTURA',
    subtitleTag: '3D LOYIHALASH',
    description: "G'oyadan - loyihagacha, kelajakni shakllantiramiz",
    category: 'Loyiha & Arxitektura',
    bannerStyle: 'architect',
    link: '#architecture'
  },
  {
    id: 'it',
    number: '05',
    title: 'IT XIZMATLARI',
    subtitleTag: 'DASTURLAR, WEBSITELAR',
    description: 'Zamonaviy dasturiy yechimlar biznesingiz uchun',
    category: 'Axborot Texnologiyalari',
    bannerStyle: 'it',
    link: '#it'
  }
];

