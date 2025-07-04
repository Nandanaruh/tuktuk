"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import vehiclesData from "@/components/vehicles-data"; // <-- Import your data

export function CarouselSize() {
  const [current, setCurrent] = React.useState(0);
  const visibleItems = 2;
  const itemCount = vehiclesData.length;
  const maxIndex = itemCount - visibleItems;

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000); // every 3 seconds
    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <div className="overflow-hidden w-full max-w-5xl mx-auto">
      <Carousel className="w-full">
        <CarouselContent
          style={{
            transform: `translateX(-${(100 / visibleItems) * current}%)`,
            transition: "transform 0.6s ease-in",
            display: "flex",
          }}
        >
          {vehiclesData.map((vehicle, index) => (
            <CarouselItem key={index} className="basis-1/2 px-2">
              <div className="relative w-full h-64 z-50">
                <Image
                  src={vehicle.image}
                  alt={vehicle.title}
                  fill
                  className="object-cover rounded-t-xl"
                />
              </div>
              <Card className="-mt-44 relative h-[400px] z-10 w-full bg-sky-700 shadow-xl rounded-t-none rounded-b-xl">
                <CardContent className="mt-20 pt-24 px-4 text-left">
                  <h3 className="text-2xl text-white font-bold uppercase">
                    {vehicle.title}
                  </h3>
                  <p className="text-xl font-semibold text-amber-300">
                    {vehicle.price}
                  </p>
                  <p className="text-md text-white font-semibold text-justify">
                    {vehicle.description}
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
