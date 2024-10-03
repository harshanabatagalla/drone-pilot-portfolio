'use client';
import React, { useEffect, useRef, useState } from 'react';
import { eqipments } from '../data/data';

interface CarouselItem {
  id: string;
  src: string;
  alt: string;
}

const EquipmentsCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const autoPlayInterval = useRef<NodeJS.Timeout | null>(null);
  const items = eqipments;

  const scrollToItem = (index: number) => {
    const element = document.getElementById(items[index].id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
    setActiveIndex(index);
  };

  const nextItem = () => {
    const nextIndex = (activeIndex + 1) % items.length;
    scrollToItem(nextIndex);
  };

  const prevItem = () => {
    const prevIndex = (activeIndex - 1 + items.length) % items.length;
    scrollToItem(prevIndex);
  };

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      nextItem();
      setIsPaused(true);
    } else if (e.key === 'ArrowLeft') {
      prevItem();
      setIsPaused(true);
    }
  };

  const handleDotClick = (index: number) => {
    scrollToItem(index);
    setIsPaused(true);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [activeIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsPaused(false);
        } else {
          setIsPaused(true);
        }
      },
      { threshold: 0.5 }
    );
    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isPaused) {
      if (autoPlayInterval.current) {
        clearInterval(autoPlayInterval.current);
      }

      autoPlayInterval.current = setInterval(() => {
        nextItem();
      }, 5000);
    }

    return () => {
      if (autoPlayInterval.current) {
        clearInterval(autoPlayInterval.current);
      }
    };
  }, [isPaused, activeIndex]);

  return (
    <div ref={carouselRef}>
      <div className="carousel carousel-center space-x-4 p-4 snap-x snap-mandatory overflow-x-auto scroll-smooth">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="carousel-item w-full sm:w-11/12 snap-center bg-neutral-900 rounded-box"
            id={item.id}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="grid sm:grid-cols-2 gap-2 p-4 w-full grid-cols-1 ">
              <div className='flex flex-col sm:border-r-2 border-gray-400 border-opacity-10 border-0'>
                <h3 className="text-lg sm:text-xl font-bold">{item.name}</h3>
                <div className="flex items-center justify-center w-full h-full">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="drop-shadow-2xl w-4/5 max-w-xs h-auto"
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-3">
                {item.features.map((feature, index) => (
                  <div key={index} className="flex flex-col gap-4 p-4 items-center ">
                    <img
                      src={feature.icon}
                      alt={feature.name}
                      className="w-8 h-8 sm:w-10 sm:h-10 opacity-75"
                    />
                    <p className="text-[9px] md:text-sm text-center">{feature.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        {items.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === activeIndex ? 'bg-primary' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default EquipmentsCarousel;
