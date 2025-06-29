import Freedom from "./freedom";

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
        <Freedom />
        <Freedom />
        <Freedom />
      </section>
    </section>
  );
}
