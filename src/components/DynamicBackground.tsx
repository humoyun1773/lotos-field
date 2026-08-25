import { useState, useEffect, type FC } from 'react';

const bgImages = [
  {
    id: 1,
    src: '/backgrounds/bg-swallow-1.png',
    title: 'Parvozdagi Qaldirg‘och'
  },
  {
    id: 2,
    src: '/backgrounds/bg-swallow-2.png',
    title: 'Inidagi Qaldirg‘ochlar'
  },
  {
    id: 3,
    src: '/backgrounds/bg-swallow-3.png',
    title: 'Qaldirg‘och Grafika 1'
  },
  {
    id: 4,
    src: '/backgrounds/bg-swallow-4.png',
    title: 'Qaldirg‘och Grafika 2'
  },
  {
    id: 5,
    src: '/backgrounds/bg-swallow-5.png',
    title: 'Moviy Osmonda Qaldirg‘och'
  }
];

export const DynamicBackground: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bgImages.length);
    }, 5000); // Har 5 soniyada silliq almashadi

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 select-none transform-gpu">
      {/* 5 Rotating Background Images with Smooth Cross-fade */}
      {bgImages.map((img, idx) => {
        const isActive = idx === currentIndex;
        return (
          <div
            key={img.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-25 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
            style={{
              backgroundImage: `url(${img.src})`,
              backgroundPosition: 'center',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              transform: 'translateZ(0)',
              willChange: 'opacity, transform',
              transitionProperty: 'opacity, transform',
              transitionDuration: '1000ms'
            }}
          />
        );
      })}

      {/* Soft Blue/White Gradient Overlay to ensure 100% text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#ebf4ff]/80 via-[#f5f9ff]/75 to-[#e4f0ff]/85 backdrop-blur-[2px]" />

      {/* Abstract Sky Wave Lines */}
      <svg
        className="absolute top-0 left-0 w-full h-[500px] opacity-20"
        viewBox="0 0 1440 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M-50,220 C400,80 950,280 1500,60"
          stroke="#3b82f6"
          strokeWidth="1.5"
          strokeDasharray="6 4"
        />
        <path
          d="M0,160 C500,240 1000,100 1440,180"
          stroke="#60a5fa"
          strokeWidth="1"
          opacity="0.4"
        />
      </svg>
    </div>
  );
};
