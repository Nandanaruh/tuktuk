// // import Logo from "@/components/logo";
// // import Nav from "@/components/nav";

// // export default function Home() {
// //   return (
// //     <div className="bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat h-screen w-full">
// //       <div className="flex flex-row gap-4 items-center justify-evenly mx-40 py-2">
// //         <Logo />
// //         <Nav className="flex items-baseline" />
// //       </div>
// //     </div>
// //   );
// // }
// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";
// import Logo from "@/components/logo";
// import Nav from "@/components/nav";

// export default function Home() {
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scale = 1 + scrollY * 0.0008; // zoom factor on scroll

//   return (
//     <div className="relative h-screen w-full overflow-hidden">
//       {/* Zooming background image */}
//       <div
//         className="absolute inset-0 bg-center bg-cover bg-no-repeat transition-transform duration-75 will-change-transform"
//         style={{
//           backgroundImage: "url('/background.jpg')",
//           transform: `scale(${scale})`,
//         }}
//       />

//       {/* Main content above the background */}
//       <div className="relative z-10">
//         <div className="flex flex-row gap-4 items-center justify-evenly mx-40 py-6">
//           <Logo />
//           <Nav />
//         </div>
//       </div>

//       {/* Scratch effect image at the bottom */}
//       <div className="absolute bottom-0 left-0 w-full z-20">
//         <img
//           src="https://cdn.example.com/assets/scratch-effect.svg"
//           alt="Scratch"
//           className="w-full h-auto pointer-events-none"
//         />
//       </div>
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/logo";
import Nav from "@/components/nav";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scale = Math.min(1 + scrollY * 0.0005, 1.15); // limit max zoom

  return (
    <main className="w-full overflow-x-hidden">
      {/* Hero Section with Scroll Zoom Effect */}
      <section className="relative h-[200vh]">
        {/* Sticky image container */}
        <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
          <img
            src="/background.jpg" // Replace with your actual image path
            alt="Hero Background"
            className="w-full h-full transition-transform duration-100"
            style={{ transform: `scale(${scale})` }}
          />
        </div>

        {/* Logo + Nav over the image */}
        <div className="absolute top-0 left-0 w-full z-10">
          <div className="flex flex-row gap-4 items-center justify-evenly mx-40 py-2">
            <Logo />
            <Nav className="flex" />
          </div>
        </div>

        {/* Scratch transition image at the bottom */}
        <div className="absolute bottom-0 left-0 w-full z-20">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Pencil-drawing.svg" // Replace with your own scratch effect if needed
            alt="Scratch"
            className="w-full h-auto pointer-events-none"
          />
        </div>
      </section>

      {/* Next Section - Content Below Hero */}
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
