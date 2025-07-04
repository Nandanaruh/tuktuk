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
            // <CarouselItem key={index} className="basis-1/2 px-2">
            //   <div className="relative w-full h-48 mb-4">
            //     <Image
            //       src={vehicle.image}
            //       alt={vehicle.title}
            //       fill
            //       className="object-contain rounded"
            //     />
            //   </div>
            //   <Card className="p-4 w-full h-[500px] mt-20 bg-sky-500">
            //     <CardContent className="space-y-1 text-center">
            //       <h3 className="text-xl font-bold uppercase">
            //         {vehicle.title}
            //       </h3>
            //       <p className="text-lg font-semibold text-amber-300 ">
            //         {vehicle.price}
            //       </p>
            //       <p className="text-sm">{vehicle.description}</p>
            //     </CardContent>
            //   </Card>
            // </CarouselItem>
            <CarouselItem key={index} className="basis-1/2 px-2">
              {/* Image Container */}
              <div className="relative w-full h-64 z-50">
                <Image
                  src={vehicle.image}
                  alt={vehicle.title}
                  fill
                  className="object-cover rounded-t-xl"
                />
              </div>

              {/* Card Content below image */}
              <Card className="-mt-20 relative z-10 w-full bg-sky-500 shadow-xl rounded-t-none rounded-b-xl">
                <CardContent className="pt-24 px-4 text-center">
                  <h3 className="text-xl font-bold uppercase">
                    {vehicle.title}
                  </h3>
                  <p className="text-lg font-semibold text-amber-300">
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
