import React from "react";
import Image from "next/image";
import choiceYourExtras from "./choice-your-extras";

export default function Extras() {
  return (
    <section>
      <div className="flex flex-col h-auto w-[580px]">
        <div>
          <p
            className="text-lg font-amatic text-sky-600 px-4"
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
            Select your very own tuktuk and unleash your unique style with our
            diverse range of options, including the RegularTuk, CabrioTuk, and
            the ElectricTuk.{" "}
          </p>
        </div>
        <div>
          <h2 className="mt-2 text-lg font-amatic uppercase font-bold leading-1 text-sky-400 px-4">
            Choose your extras
          </h2>
        </div>
      </div>
      <div className="grid w-[580px] h-auto mt-10 gap-4">
        {choiceYourExtras.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-2 border rounded-lg shadow"
          >
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <Image
                src={item.icon}
                width={30}
                height={30}
                alt={item.title}
                className="invert-[60%] sepia-[100%] saturate-[750%] hue-rotate-[180deg] drop-shadow"
                style={{
                  filter:
                    "invert(60%) sepia(100%) saturate(750%) hue-rotate(180deg)",
                }}
              />
            </div>
            <div>
              <h3 className="text-md font-semibold ">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
// import React from "react";
// import Image from "next/image";
// import choiceYourExtras from "./choice-your-extras";

// export default function Extras() {
//   return (
//     <section className="w-full flex flex-col items-center px-4 sm:px-6 md:px-8 py-8">
//       {/* Heading section */}
//       <div className="w-full max-w-screen-md flex flex-col">
//         <p
//           className="text-sky-600 font-amatic"
//           style={{
//             fontFamily: "'Amatic SC', cursive",
//             fontSize: "30px",
//             fontWeight: "700",
//           }}
//         >
//           TRAVEL LIKE A LOCAL
//         </p>

//         <h2 className="mt-2 text-3xl sm:text-4xl font-amatic font-bold text-gray-800">
//           Our vehicles
//         </h2>

//         <p className="text-base sm:text-lg py-2 text-gray-800">
//           Select your very own tuktuk and unleash your unique style with our
//           diverse range of options, including the RegularTuk, CabrioTuk, and
//           the ElectricTuk.
//         </p>

//         <h3 className="mt-4 text-base sm:text-lg font-amatic uppercase font-bold text-sky-400">
//           Choose your extras
//         </h3>
//       </div>

//       {/* Extras list */}
//       <div className="w-full max-w-screen-md grid gap-4 mt-6">
//         {choiceYourExtras.map((item, index) => (
//           <div
//             key={index}
//             className="flex items-start gap-4 p-3 border rounded-lg shadow bg-white"
//           >
//             <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
//               <Image
//                 src={item.icon}
//                 width={30}
//                 height={30}
//                 alt={item.title}
//                 className="invert-[60%] sepia-[100%] saturate-[750%] hue-rotate-[180deg] drop-shadow"
//                 style={{
//                   filter:
//                     "invert(60%) sepia(100%) saturate(750%) hue-rotate(180deg)",
//                 }}
//               />
//             </div>
//             <div className="flex-1">
//               <h3 className="text-md font-semibold">{item.title}</h3>
//               <p className="text-gray-600">{item.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
