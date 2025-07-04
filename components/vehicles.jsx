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
    }, 5000); // every 3 seconds
    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <div className="overflow-hidden w-full max-w-5xl mx-auto">
      <Carousel className="w-full">
        <CarouselContent
          style={{
            transform: `translateX(-${(100 / visibleItems) * current}%)`,
            transition: "transform 0.6s ease-in-out",
            display: "flex",
          }}
        >
          {vehiclesData.map((vehicle, index) => (
            <CarouselItem key={index} className="basis-1/2 px-2">
              <Card className="p-4">
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.title}
                    fill
                    className="object-contain rounded"
                  />
                </div>
                <CardContent className="space-y-1 text-center">
                  <h3 className="text-lg font-semibold">{vehicle.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {vehicle.price}
                  </p>
                  <p className="text-sm">{vehicle.description}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
