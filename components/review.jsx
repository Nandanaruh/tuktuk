import Image from "next/image";

export default function Review() {
  return (
    <div className="w-full flex flex-row items-center justify-center h-[400px] mx-auto z-30">
      <div className="flex items-end justify-center flex-col w-1/2">
        <div className="flex flex-row my-4">
          <div className="mx-2">
            <Image
              src="/facebook-review.png"
              height={100}
              width={250}
              alt="Facebook Review"
              className="transition duration-200 ease-in-out rounded-3xl border border-black hover:scale-90 hover:shadow-xl"
            />
          </div>
          <div className="mx-2">
            <Image
              src="/google-review.png"
              height={100}
              width={250}
              alt="Facebook Review"
              className="transition duration-200 ease-in-out rounded-3xl border border-black hover:scale-90 hover:shadow-xl"
            />
          </div>
        </div>
        <div className="flex flex-row">
          <div className="mx-0.5">
            <Image
              src="/person-1.png"
              height={60}
              width={60}
              alt="Person-1"
              className="rounded-full"
            />
          </div>
          <div className="mx-1">
            <Image
              src="/advisor-review.png"
              height={100}
              width={250}
              alt="Advisor Review"
              className="transition duration-200 ease-in-out rounded-2xl border border-black hover:scale-90 hover:shadow-xl"
            />
          </div>
          <div className="mx-0.5">
            <Image
              src="/person-2.png"
              height={120}
              width={120}
              alt="Person-2"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center ml-4 w-1/2">
        <div className="my-2">
          <p
            className="uppercase text-3xl text-sky-700 font-bold"
            style={{
              fontFamily: "'Amatic SC', cursive",
              fontSize: "30px",
              fontWeight: "700",
            }}
          >
            Trusted by travellers
          </p>
        </div>
        <div className="my-4">
          <p className="text-6xl text-black font-bold">
            Our Customers <br />
            Love Us
          </p>
        </div>
        <div className="flex items-start text-left my-2">
          <p className="text-xl">
            Read our recent reviews to discover why our customers adore
            <br /> us. We provide unparalleled travel experiences for our guests
            by
            <br /> crafting personalized itineraries, tips on how to travel like
            a <br />
            local, and offering round the clock planning and emergency support.
          </p>
        </div>
      </div>
    </div>
  );
}
