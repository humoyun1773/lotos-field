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
    link: 'https://travel.lotosfield.uz/',
    features: ['Umra & Haj ziyoratlari', 'Dunyo bo‘ylab sayohatlar', 'Aviabiletlar & Vizalar', 'Premium mehmonxonalar'],
    details: {
      tagline: 'Orzuingizdagi sayohatni biz bilan rejalashtiring!',
      summary: 'Lotos Field Travel — butun dunyo bo‘ylab unutilmas sayohatlar, Umra va Haj ziyoratlari, qulay viza xizmatlari va eng arzon narxlardagi aviabiletlarni taqdim etadi.',
      highlights: [
        'To‘g‘ridan-to‘g‘ri reyslar va ishonchli transferlar',
        'Malakali yo‘lboshchilar (Gidlar)',
        'Har bir mijoz uchun individual yondashuv',
        '24/7 qo‘llab-quvvatlash xizmati'
      ],
      advantages: [
        'Viza hujjatlarini rasmiylashtirishda 99% ijobiy natija',
        'Top darajadagi 4★ va 5★ mehmonxonalar',
        'Qulay to‘lov usullari va chegirmalar'
      ],
      contactActionText: 'Sayohat buyurtma qilish'
    }
  },
  {
    id: 'education',
    number: '02',
    title: 'AL-HAKIM AT-TERMEZIY',
    subtitleTag: "O'QUV MARKAZI",
    description: 'Ilm bilan rivojlanish, kelajak sari qadam',
    category: 'Ta’lim & Rivojlanish',
    bannerStyle: 'pill',
    link: 'https://edu.lotosfield.uz/',
    features: ['Arab tili & Tajvid', 'Ingliz va Rus tillari', 'Prezident maktabiga tayyorlov', 'Mental arifmetika'],
    details: {
      tagline: 'Kelajagingiz uchun poydevor qo‘ying!',
      summary: 'Al-Hakim At-Termeziy nomidagi o‘quv markazi yoshlar va kattalar uchun zamonaviy fanlar, xorijiy tillar va islomiy-ma’rifiy ilmlarni o‘rgatuvchi yetakchi ta’lim maskanidir.',
      highlights: [
        'Tajribali va xalqaro sertifikatli ustozlar',
        'Qulay va zamonaviy jihozlangan dars xonalari',
        'Har oylik monitoring va ota-onalarga hisobotlar',
        'Dars yakunida rasmiy sertifikat taqdim etilishi'
      ],
      advantages: [
        'Kichik guruhlar (individual e’tibor)',
        'Interaktiv o‘qitish metodikasi',
        'Bepul sinov darslari'
      ],
      contactActionText: 'Kursga yozilish'
    }
  },
  {
    id: 'taxi',
    number: '03',
    title: "ES O'RGIMCHAK TAXI",
    subtitleTag: "TAXI",
    description: 'Tez, xavfsiz va ishonchli taxi xizmati',
    category: 'Yo‘lovchi & Yuk tashish',
    bannerStyle: 'taxi',
    link: 'https://taxi-landing-page-five.vercel.app/',
    features: ['Tezkor yetib kelish (3-5 daqiqa)', 'Shahar ichi va viloyatlararo', 'Toza va qulay avtomobillar', 'Xushmuomala haydovchilar'],
    details: {
      tagline: 'Manzilingizga omon va qulay yetib oling!',
      summary: "ES O'rgimchak Taxi — har daqiqa xizmatingizda bo‘lgan zamonaviy dispetcherlik va tezkor taksi xizmati. Biz bilan har bir safar xavfsiz va maroqli.",
      highlights: [
        'GPS orqali real vaqt rejimida marshrutni kuzatish',
        'Doimiy toza va texnik soz holatdagi avtomobillar',
        'Hamyonbop va shaffof tariflar',
        '24 soat uzluksiz qo‘ng‘iroqlar qabuli'
      ],
      advantages: [
        'Keshbek va bonuslar tizimi',
        'Konditsionerli va keng salonga ega mashinalar',
        'Tezkor buyurtma berish imkoniyati'
      ],
      contactActionText: 'Taksi chaqirish'
    }
  },
  {
    id: 'architecture',
    number: '04',
    title: 'ARXETEKTURA',
    subtitleTag: '3D LOYIHALASH',
    description: "G'oyadan - loyihagacha, kelajakni shakllantiramiz",
    category: 'Loyiha & Arxitektura',
    bannerStyle: 'architect',
    link: 'https://architectury.lotosfield.uz/',
    features: ['3D Vizualizatsiya & Render', 'Interyer va Eksteryer dizayn', 'Konstruktiv chizmalar', 'Mualliflik nazorati'],
    details: {
      tagline: 'Orzuingizdagi binoni 3D hajmda yarating!',
      summary: 'Arxitektura va 3D loyihalash yo‘nalishimiz orqali uylar, kottejlar, tijoriy binolar va jamoat maskanlarining eng zamonaviy va xavfsiz loyihalarini yaratamiz.',
      highlights: [
        'Eng so‘nggi arxitektura tendensiyalari asosida loyihalash',
        'Fotorealistik 3D renderlar va virtual tur',
        'Barcha qurilish me’yorlariga (ShNQ) to‘liq moslik',
        'Qurilish jarayonida to‘liq mualliflik nazorati'
      ],
      advantages: [
        'Hisob-kitoblar va smeta xarajatlarini tejash',
        'Ergonomik va innovatsion rejalashtirish',
        'Tajribali litsenziyalangan arxitektorlar jamoasi'
      ],
      contactActionText: 'Loyiha buyurtma qilish'
    }
  },
  {
    id: 'it',
    number: '05',
    title: 'IT XIZMATLARI',
    subtitleTag: 'DASTURLAR, WEBSITELAR',
    description: 'Zamonaviy dasturiy yechimlar biznesingiz uchun',
    category: 'Axborot Texnologiyalari',
    bannerStyle: 'it',
    link: 'https://it-services.lotosfield.uz/',
    features: ['Veb-saytlar va Landing pagelar', 'Telegram botlar va mini-applar', 'CRM va Avtomatlashtirish', 'Mobil ilovalar (iOS / Android)'],
    details: {
      tagline: 'Biznesingizni raqamli dunyoda yangi bosqichga olib chiqing!',
      summary: 'IT xizmatlari jamoamiz zamonaviy veb-saytlar, kuchli dasturiy ta’minotlar, CRM tizimlari va avtomatlashtirilgan Telegram botlarni noldan tayyorlab beradi.',
      highlights: [
        'Yuqori tezlik va zamonaviy UI/UX dizayn',
        'SEO optimizatsiya va qidiruv tizimlarida yuqori o‘rinlar',
        'Kiberxavfsizlik va ma’lumotlar ishonchli himoyasi',
        'Kafolatlangan texnik ko‘mak va yangilanishlar'
      ],
      advantages: [
        'Savdo va mijozlar oqimini oshiruvchi yechimlar',
        'Toza va kengaytiriluvchi kod bazasi',
        'Qulay boshqaruv paneli (Admin panel)'
      ],
      contactActionText: 'IT loyihani muhokama qilish'
    }
  }
];
