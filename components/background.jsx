import { useEffect, useState } from "react";
import Image from "next/image";

export default function Background() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scale = Math.min(1 + scrollY * 0.0007, 1.15);
  return (
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
      <div className="absolute top-28 mt-20 left-0 w-full z-20 text-center text-white">
        <p
          className="mt-2 text-lg font-amatic"
          style={{ fontFamily: "'Amatic SC', cursive", fontSize: "30px" }}
        >
          TRAVEL LIKE A LOCAL, SUPPORT THE COMMUNITY
        </p>
        <h1 className="text-6xl font-bold">
          Rent a Tuktuk in Sri Lanka & Cambodia
        </h1>
      </div>
    </div>
  );
}
