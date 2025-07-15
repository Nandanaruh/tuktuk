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
      className="flex flex-col w-full items-center justify-start bg-white px-4 sm:px-6 sm:text-xl md:px-8 lg:px-12 xl:px-16"
      style={{
        backgroundImage: "url('/coconut-tree.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top left",
        backgroundSize: "cover",
      }}
    >
      <DriveYourOwn />

      <section className="w-full flex justify-center">
        <div className="w-full max-w-screen-xl flex flex-col items-center justify-center gap-12 py-8 sm:py-10 md:py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
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
