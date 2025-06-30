"use client";

import Logo from "@/components/logo";
import Nav from "@/components/nav";
import LowSeason from "@/components/lowSeason";
import Background from "@/components/background";
import BackgroundSvg from "@/components/backgroundSvg";
import Unforgettable from "@/components/unforgettable";
import Freedom from "@/components/freedom-card";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <section className="w-full h-[60px] bg-amber-300 z-50 text-white">
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

      <section className="hero mb-20 z-20">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="flex flex-col h-auto w-[580px]">
            <div>
              <p
                className="text-lg font-amatic text-sky-700 px-4"
                style={{
                  fontFamily: "'Amatic SC', cursive",
                  fontSize: "30px",
                  fontWeight: "700",
                }}
              >
                TRAVEL LIKE A LOCAL
              </p>
            </div>
            <div>
              <h2 className="mt-2 text-5xl font-amatic font-bold text-gray-800 px-4">
                Our vehicles
              </h2>
            </div>
            <div>
              <p className="text-lg py-2 px-4">
                Select your very own tuktuk and unleash your unique style with
                our diverse range of options, including the RegularTuk,
                CabrioTuk, and the ElectricTuk.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="brush-strip"></div>
      </section>
      {/* <div>
        <section>
          <div
            className="w-full h-[80px] relative z-0 transform -scale-y-100"
            style={{
              backgroundImage: "url('/brush-yellow.svg')",
              backgroundRepeat: "repeat-x",
              backgroundPosition: "center",
              backgroundSize: "auto 100%",
            }}
          />
        </section>
        <section>
          <div
            className="w-full h-[80px] relative z-0 transform scale-y-100"
            style={{
              backgroundImage: "url('/brush-yellow.svg')",
              backgroundRepeat: "repeat-x",
              backgroundPosition: "center",
              backgroundSize: "auto 100%",
            }}
          />
        </section>
      </div> */}
    </main>
  );
}
