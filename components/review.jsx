import Image from "next/image";

export default function Review() {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-center h-auto lg:h-[400px] px-4 py-8 gap-6">
      {/* Left Side - Reviews */}
      <div className="flex flex-col items-center lg:items-end w-full lg:w-1/2">
        <div className="flex flex-wrap justify-center lg:justify-end gap-4 mb-4">
          <Image
            src="/facebook-review.png"
            height={100}
            width={250}
            alt="Facebook Review"
            className="transition duration-200 ease-in-out rounded-3xl border border-black hover:scale-90 hover:shadow-xl"
          />
          <Image
            src="/google-review.png"
            height={100}
            width={250}
            alt="Google Review"
            className="transition duration-200 ease-in-out rounded-3xl border border-black hover:scale-90 hover:shadow-xl"
          />
        </div>
        <div className="flex items-center justify-center gap-2">
          <Image
            src="/person-1.png"
            height={60}
            width={60}
            alt="Person-1"
            className="rounded-full"
          />
          <Image
            src="/advisor-review.png"
            height={100}
            width={250}
            alt="Advisor Review"
            className="transition duration-200 ease-in-out rounded-2xl border border-black hover:scale-90 hover:shadow-xl"
          />
          <Image
            src="/person-2.png"
            height={120}
            width={120}
            alt="Person-2"
            className="rounded-full"
          />
        </div>
      </div>

      {/* Right Side - Text */}
      <div className="flex flex-col items-start justify-center w-full lg:w-1/2 text-center lg:text-left">
        <p
          className="uppercase text-sky-700 font-extrabold"
          style={{
            fontFamily: "'Amatic SC', cursive",
            fontSize: "30px",
            fontWeight: "700",
          }}
        >
          Trusted by travellers
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-black my-4">
          Our Customers Love Us
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-800 max-w-xl">
          Read our recent reviews to discover why our customers adore us. We
          provide unparalleled travel experiences by crafting personalized
          itineraries, tips on how to travel like a local, and 24/7 support.
        </p>
      </div>
    </div>
  );
}
