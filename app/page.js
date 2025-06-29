"use client";

import Logo from "@/components/logo";
import Nav from "@/components/nav";
import LowSeason from "@/components/lowSeason";
import Background from "@/components/background";
import BackgroundSvg from "@/components/backgroundSvg";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <section className="w-full h-[60px] bg-amber-300 z-50 text-white">
        <LowSeason />
      </section>
      <section className="relative h-[2048px]">
        <Background />
        <div className="absolute bg-gradient-to-b from-gray-950 top-0 left-0 w-full z-10">
          <div className="flex flex-row gap-4 items-center justify-evenly mx-40 py-2">
            <Logo />
            <Nav className="flex" />
          </div>
        </div>
        <BackgroundSvg />
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
