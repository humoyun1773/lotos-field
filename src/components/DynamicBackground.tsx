import { useState, useEffect, type FC } from 'react';

const bgImages = [
  {
    id: 1,
    src: '/backgrounds/bg-swallow-1.png',
    title: 'Parvozdagi Moviy Qaldirg‘och'
  },
  {
    id: 2,
    src: '/backgrounds/bg-swallow-6.png',
    title: 'Qishloq ustida Qaldirg‘ochlar galasi'
  },
  {
    id: 3,
    src: '/backgrounds/bg-swallow-7.png',
    title: 'Qaldirg‘ochlar qaytishi va tabiat'
  },
  {
    id: 4,
    src: '/backgrounds/bg-swallow-8.png',
    title: 'Zamonaviy shahar va qaldirg‘ochlar'
  },
  {
    id: 5,
    src: '/backgrounds/bg-swallow-9.png',
    title: 'Daraxt shoxida Qaldirg‘och'
  },
  {
    id: 6,
    src: '/backgrounds/bg-swallow-2.png',
    title: 'Inidagi Qaldirg‘ochlar'
  },
  {
    id: 7,
    src: '/backgrounds/bg-swallow-3.png',
    title: 'Qaldirg‘och Grafika 1'
  },
  {
    id: 8,
    src: '/backgrounds/bg-swallow-4.png',
    title: 'Qaldirg‘och Grafika 2'
  },
  {
    id: 9,
    src: '/backgrounds/bg-swallow-5.png',
    title: 'Moviy Osmonda Qaldirg‘och'
  }
];

export const DynamicBackground: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bgImages.length);
    }, 4500); // Har 4.5 soniyada to'liq silliq almashadi

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 select-none transform-gpu">
      {/* 9 Rotating Full Background Images with Smooth Cross-fade */}
      {bgImages.map((img, idx) => {
        const isActive = idx === currentIndex;
        return (
          <div
            key={img.id}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-90 scale-100' : 'opacity-0 scale-105'
            }`}
            style={{
              backgroundImage: `url(${img.src})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              transform: 'translateZ(0)',
              willChange: 'opacity, transform',
              transitionProperty: 'opacity, transform',
              transitionDuration: '1000ms'
            }}
          />
        );
      })}

      {/* Light Sky Ambient Tint to blend images perfectly with the luxury blue UI */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-950/15 via-transparent to-blue-950/25" />
    </div>
  );
};
