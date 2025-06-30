import FreedomCard from "@/components/freedom-card";

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
      className="flex flex-col h-screen w-full items-center justify-start bg-white my-2"
      style={{
        backgroundImage: "url('/coconut-tree.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top left",
        backgroundSize: "cover",
      }}
    >
      <p
        className="text-lg font-amatic text-sky-700"
        style={{
          fontFamily: "'Amatic SC', cursive",
          fontSize: "35px",
          fontWeight: "700",
        }}
      >
        Embark on an Unforgettable Adventure
      </p>
      <h2 className="text-5xl font-bold text-black my-4">
        Drive Your Own Tuktuk
      </h2>
      <p className="text-lg text-center">
        Wait, you’re going to let me drive a three wheeler in Sri Lanka? Yes we
        are and you’re going to LOVE IT!
      </p>
      <p className="flex text-center justify-center text-lg my-4 mx-50">
        We rent tuktuks to travellers who want the freedom to explore Sri Lanka
        by driving an authentic and reliable rickshaw! <br />
        Moreover get off the beaten track and find the amazing places other
        tourists miss.
      </p>
      <section className="flex flex-row items-center justify-center mx-40">
        <div className="w-full flex flex-col items-center justify-center gap-12 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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
