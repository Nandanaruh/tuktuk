"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import vehiclesData from "@/components/vehicles-data";

export function CarouselSize() {
  const visibleItems = 2;
  const itemCount = vehiclesData.length;

  const clonedStart = vehiclesData.slice(-visibleItems);
  const clonedEnd = vehiclesData.slice(0, visibleItems);
  const extendedItems = [...clonedStart, ...vehiclesData, ...clonedEnd];

  const [current, setCurrent] = useState(visibleItems);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const trackRef = useRef(null);

  const totalItems = extendedItems.length;

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => prev + 1);
  };

  const goToPrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => prev - 1);
  };

  const goTo = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
  };

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Handle jump after reaching cloned slides
  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (!trackRef.current) return;

    if (current === 0) {
      setCurrent(itemCount);
      trackRef.current.style.transition = "none";
      trackRef.current.style.transform = `translateX(-${
        (100 / totalItems) * itemCount
      }%)`;

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (trackRef.current)
            trackRef.current.style.transition = "transform 0.5s ease-in-out";
        });
      });
    } else if (current === itemCount + visibleItems) {
      setCurrent(visibleItems);
      trackRef.current.style.transition = "none";
      trackRef.current.style.transform = `translateX(-${
        (100 / totalItems) * visibleItems
      }%)`;

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (trackRef.current)
            trackRef.current.style.transition = "transform 0.5s ease-in-out";
        });
      });
    }
  };

  const translateX = `-${(100 / totalItems) * current}%`;

  return (
    <div className="relative mx-auto w-full max-w-[840px] overflow-hidden">
      {/* Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-0 top-1/2 z-50 transform -translate-y-1/2 bg-white text-black p-2 shadow-md hover:bg-amber-300 transition-colors duration-300"
        disabled={isTransitioning}
      >
        <ArrowLeft />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 z-50 transform -translate-y-1/2 bg-white text-black p-2 shadow-md hover:bg-amber-300 transition-colors duration-300"
        disabled={isTransitioning}
      >
        <ArrowRight />
      </button>

      {/* Carousel track */}
      <div className="overflow-hidden relative">
        <div
          ref={trackRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            width: `${(100 * totalItems) / visibleItems}%`,
            transform: `translateX(${translateX})`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedItems.map((vehicle, index) => (
            <div
              key={`${vehicle.title}-${index}`}
              style={{ width: `${100 / totalItems}%` }}
              className="px-2 flex-shrink-0"
            >
              <div className="relative w-full h-64 z-50">
                <Image
                  src={vehicle.image}
                  alt={vehicle.title}
                  fill
                  className="object-cover rounded-t-xl"
                />
              </div>

              <Card className="-mt-44 relative h-[400px] z-10 bg-sky-700 shadow-xl rounded-t-none rounded-b-xl">
                <CardContent className="mt-20 pt-24 px-4 text-left">
                  <h3 className="text-2xl text-white font-bold uppercase">
                    {vehicle.title}
                  </h3>
                  <p className="text-xl font-semibold text-amber-400">
                    {vehicle.price}
                  </p>
                  <p className="text-md text-white font-semibold text-justify">
                    {vehicle.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {vehiclesData.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index + visibleItems)}
            className={`w-4 h-1 transition-all duration-300 ${
              current === index + visibleItems ? "bg-black w-6" : "bg-gray-300"
            }`}
            disabled={isTransitioning}
          />
        ))}
      </div>
    </div>
  );
}
