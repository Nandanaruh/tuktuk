"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/logo";
import Nav from "@/components/nav";
import Image from "next/image";
import LowSeason from "@/components/lowSeason";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scale = Math.min(1 + scrollY * 0.0005, 1.15);

  return (
    <main className="w-full overflow-x-hidden">
      <section className="w-full h-[60px] bg-amber-300 z-50 text-white">
        <LowSeason />
      </section>
      <section className="relative h-[2048px]">
        <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
          <Image
            src="/background.jpg"
            alt="Hero Background"
            fill
            className="w-full h-full object-cover transition-transform duration-300 ease-out"
            style={{
              // objectPosition: "top center", // or "bottom", "left top", etc.
              transform: `scale(${scale})`,
            }}
          />
          <div className="absolute top-28 mt-16 left-0 w-full z-20 text-center text-white">
            <p className="mt-2 text-lg font-amatic">
              TRAVEL LIKE A LOCAL, SUPPORT THE COMMUNITY
            </p>
            <h1 className="text-6xl font-bold">
              Rent a Tuktuk in Sri Lanka & Cambodia
            </h1>
          </div>
        </div>
        <div className="absolute bg-gradient-to-b from-gray-950 top-0 left-0 w-full z-10">
          <div className="flex flex-row gap-4 items-center justify-evenly mx-40 py-2">
            <Logo />
            <Nav className="flex" />
          </div>
        </div>
        <div
          className="w-full h-[80px] -mt-15 relative z-50 transform -scale-y-100"
          style={{
            backgroundImage: "url('/brush.svg')",
            backgroundRepeat: "repeat-x",
            backgroundPosition: "center",
            backgroundSize: "auto 100%",
          }}
        ></div>
      </section>
      <section className="min-h-screen bg-white text-black px-20 py-32">
        <h2 className="text-4xl font-bold mb-6">About Us</h2>
        <p className="text-lg max-w-3xl leading-relaxed">
          This is the next section of the page that loads after the full hero
          image is revealed. Add your content like services, description, or
          call to actions here.
        </p>
      </section>
    </main>
  );
}
