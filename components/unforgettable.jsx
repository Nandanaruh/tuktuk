// import FreedomCard from "@/components/freedom-card";
// import DriveYourOwn from "./driveYourOwn";

// const cardData = [
//   {
//     image: "/freedom.jpg",
//     title: "Freedom To Explore",
//     content: `Your tuktuk adventure allows you to get off the beaten tourist trails and explore the hidden beauty of Sri Lanka. Be your own guide and enjoy the freedom to explore.`,
//   },
//   {
//     image: "/hassle.jpg",
//     title: "Hassle Free",
//     content: `Whether you’re travelling into the serene mountains or the sun-setting beach roads, our tuktuks provide a seamless journey. Say goodbye to transportation worries and enjoy a seamless ride.`,
//   },
//   {
//     image: "/social.jpg",
//     title: "Social Impact",
//     content: `tuktukrental.com empowers the local community by providing access to income from the thriving tourism industry.`,
//   },
// ];

// export default function Unforgettable() {
//   return (
//     <section
//       className="flex flex-col h-screen w-full items-center justify-start bg-white my-2"
//       style={{
//         backgroundImage: "url('/coconut-tree.jpg')",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "top left",
//         backgroundSize: "cover",
//       }}
//     >
//       <DriveYourOwn />
//       <section className="flex flex-row items-center justify-center mx-40">
//         <div className="w-full flex flex-col items-center justify-center gap-12 py-12">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//             {cardData.map((card, index) => (
//               <FreedomCard
//                 key={index}
//                 image={card.image}
//                 title={card.title}
//                 content={card.content}
//               />
//             ))}
//           </div>
//         </div>
//       </section>
//     </section>
//   );
// }
import FreedomCard from "@/components/freedom-card";
import DriveYourOwn from "./driveYourOwn";

const cardData = [
  {
    image: "/freedom.jpg",
    title: "Freedom To Explore",
    content: `Your tuktuk adventure allows you to get off the beaten tourist trails and explore the hidden beauty of Sri Lanka. Be your own guide and enjoy the freedom to explore.`,
  },
  {
    image: "/hassle.jpg",
    title: "Hassle Free",
    content: `Whether you’re travelling into the serene mountains or the sun-setting beach roads, our tuktuks provide a seamless journey. Say goodbye to transportation worries and enjoy a seamless ride.`,
  },
  {
    image: "/social.jpg",
    title: "Social Impact",
    content: `tuktukrental.com empowers the local community by providing access to income from the thriving tourism industry.`,
  },
];

export default function Unforgettable() {
  return (
    <section
      className="flex flex-col w-full items-center justify-start bg-white py-8 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32"
      style={{
        backgroundImage: "url('/coconut-tree.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top left",
        backgroundSize: "cover",
      }}
    >
      <DriveYourOwn />

      {/* Wrapper Section */}
      <section className="w-full flex flex-col items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center gap-12 py-8">
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 w-full">
            {cardData.map((card, index) => (
              <FreedomCard
                key={index}
                image={card.image}
                title={card.title}
                content={card.content}
              />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
