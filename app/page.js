"use client";

import Logo from "@/components/logo";
import Nav from "@/components/nav";
import LowSeason from "@/components/lowSeason";
import Background from "@/components/background";
import BackgroundSvg from "@/components/backgroundSvg";
import Unforgettable from "@/components/unforgettable";
import Extras from "@/components/extras";
import { CarouselSize } from "@/components/vehicles";
import Review from "@/components/review";
import FreeTripPlan from "@/components/free-trip-plan";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <section
        id="low-season"
        className="w-full h-[60px] bg-amber-300 z-50 text-white"
      >
        <LowSeason />
      </section>
      <section className="relative h-full">
        <Background />
        <div className="absolute bg-gradient-to-b from-gray-950 top-0 left-0 w-full z-10">
          <div className="flex flex-row gap-4 items-center justify-evenly mx-40 py-2">
            <Logo />
            <Nav className="flex" />
          </div>
        </div>
        <BackgroundSvg />
      </section>
      <Unforgettable />
      <section>
        <div
          className="w-full mt-20 h-[80px] relative z-20 transform -scale-y-100"
          style={{
            backgroundImage: "url('/brush-gray.svg')",
            backgroundRepeat: "repeat-x",
            backgroundPosition: "center",
            backgroundSize: "auto 100%",
          }}
        />
      </section>
      {/* <section className="hero pb-10 z-20">
        <div className="hero-overlay"></div>
        <div className="flex flex-row">
          <div className="hero-content">
            <Extras />
          </div>
          <div className="hero-content mt-20">
            <CarouselSize />
          </div>
        </div>
        <div className="brush-strip"></div>
      </section> */}
      <section className="hero pb-10 z-20">
        <div className="hero-overlay"></div>

        {/* Responsive flex layout */}
        <div className="flex flex-col lg:flex-row">
          {/* Extras first on all screens */}
          <div className="hero-content order-1">
            <Extras />
          </div>

          {/* Vehicles carousel: order 2 on small screens, order 1 on large */}
          <div className="hero-content mt-10 order-2 lg:order-1">
            <CarouselSize />
          </div>
        </div>

        <div className="brush-strip"></div>
      </section>
      <section>
        <div
          className="w-full -mt-10 h-[80px] relative z-30 transform -scale-y-100"
          style={{
            backgroundImage: "url('/brush-yellow.svg')",
            backgroundRepeat: "repeat",
            backgroundSize: "auto 100%",
          }}
        />
        <div style={{ backgroundColor: "#f8e42f" }}>
          <Review />
        </div>
        <div
          className="w-full h-[80px] relative z-30 py-5"
          style={{
            backgroundImage: "url('/brush-yellow.svg')",
            backgroundRepeat: "repeat",
            backgroundSize: "auto 100%",
          }}
        />
      </section>
      <section className="relative h-[500px] w-full">
        <div>
          <FreeTripPlan />
        </div>
      </section>
    </main>
  );
}
