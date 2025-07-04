// "use client";

// import * as React from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from "@/components/ui/carousel";
// import Image from "next/image";
// import vehiclesData from "@/components/vehicles-data"; // <-- Import your data

// export function CarouselSize() {
//   const [current, setCurrent] = React.useState(0);
//   const visibleItems = 2;
//   const itemCount = vehiclesData.length;
//   const maxIndex = itemCount - visibleItems;

//   React.useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
//     }, 4000); // every 3 seconds
//     return () => clearInterval(interval);
//   }, [maxIndex]);

//   return (
//     <div className="overflow-hidden mx-auto w-full max-w-5xl">
//       <Carousel className="w-full">
//         <CarouselContent
//           style={{
//             transform: `translateX(-${(100 / visibleItems) * current}%)`,
//             transition: "transform 0.6s ease-in",
//             display: "flex",
//           }}
//         >
//           {vehiclesData.map((vehicle, index) => (
//             <CarouselItem key={index} className="basis-1/2 px-2">
//               <div className="relative w-full h-64 z-50">
//                 <Image
//                   src={vehicle.image}
//                   alt={vehicle.title}
//                   fill
//                   className="object-cover rounded-t-xl"
//                 />
//               </div>
//               <Card className="-mt-44 relative h-[400px] z-10 w-full bg-sky-700 shadow-xl rounded-t-none rounded-b-xl">
//                 <CardContent className="mt-20 pt-24 px-4 text-left">
//                   <h3 className="text-2xl text-white font-bold uppercase">
//                     {vehicle.title}
//                   </h3>
//                   <p className="text-xl font-semibold text-amber-300">
//                     {vehicle.price}
//                   </p>
//                   <p className="text-md text-white font-semibold text-justify">
//                     {vehicle.description}
//                   </p>
//                 </CardContent>
//               </Card>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//       </Carousel>
//     </div>
//   );
// }
"use client";

import * as React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import vehiclesData from "@/components/vehicles-data";

export function CarouselSize() {
  const [current, setCurrent] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const visibleItems = 2;
  const itemCount = vehiclesData.length;

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => (prev + 1) % itemCount);
  };

  const goToPrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => (prev - 1 + itemCount) % itemCount);
  };

  const goTo = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setCurrent((prev) => (prev + 1) % itemCount);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [itemCount, isTransitioning]);

  const getVisibleItems = () => {
    const indices = [];
    for (let i = 0; i < visibleItems; i++) {
      indices.push((current + i) % itemCount);
    }
    return indices.map((i) => vehiclesData[i]);
  };

  const visibleCards = getVisibleItems();

  // Handle transition end
  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  return (
    <div className="overflow-hidden mx-auto w-full max-w-5xl">
      {/* Carousel Container */}
      <div className="relative flex flex-row-reverse">
        <div
          className="flex w-full transition-transform duration-500 ease-in-out"
          onTransitionEnd={handleTransitionEnd}
        >
          {visibleCards.map((vehicle, index) => (
            <div
              key={`${vehicle.title}-${index}`}
              className="basis-1/2 px-2 flex-shrink-0 transition-all duration-500 ease-in-out"
            >
              {/* Image Section */}
              <div className="relative w-full h-64 z-50">
                <Image
                  src={vehicle.image}
                  alt={vehicle.title}
                  fill
                  className="object-cover rounded-t-xl transition-opacity duration-300"
                />
              </div>

              {/* Card Section */}
              <Card className="-mt-44 relative h-[400px] z-10 w-[400px] bg-sky-700 shadow-xl rounded-t-none rounded-b-xl transition-all duration-300">
                <CardContent className="mt-20 pt-24 px-4 text-left">
                  <h3 className="text-2xl text-white font-bold uppercase transition-colors duration-300">
                    {vehicle.title}
                  </h3>
                  <p className="text-xl font-semibold text-amber-300 transition-colors duration-300">
                    {vehicle.price}
                  </p>
                  <p className="text-md text-white font-semibold text-justify transition-colors duration-300">
                    {vehicle.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 shadow-md z-50 hover:bg-amber-300 transition-colors duration-300"
          disabled={isTransitioning}
        >
          <ArrowLeft />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 shadow-md z-50 hover:bg-amber-300 transition-colors duration-300"
          disabled={isTransitioning}
        >
          <ArrowRight />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-4 space-x-2">
        {vehiclesData.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`w-4 h-1 transition-all duration-300 ${
              current === index ? "bg-black w-6" : "bg-gray-300"
            }`}
            disabled={isTransitioning}
          />
        ))}
      </div>
    </div>
  );
}
