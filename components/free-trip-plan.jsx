import React from "react";
import Image from "next/image";
import freeTripPlanDetails from "./free-trip-plan-details";

export default function FreeTripPlan() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mx-auto my-10">
        <p
          className="uppercase text-sky-700 font-bold"
          style={{
            fontFamily: "'Amatic SC', cursive",
            fontSize: "30px",
            fontWeight: "700",
          }}
        >
          FREE TRIP PLANNING{" "}
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-black">
          Want Free Itinerary Advice?
        </h1>
        <p className="text-lg text-center sm:text-lg lg:text-lg text-black mt-4 mx-52">
          Our tuktuk rental team is OBSESSED with Sri Lanka & Cambodia and how
          best to experience it. Whether you’re renting a tuktuk or not, you can
          book a free travel advice meeting with our fun and experienced team.
        </p>
      </div>
      <div className="flex flex-row items-center justify-center w-full sm:w-[450px] lg:w-full h-auto mt-10 gap-4">
        {freeTripPlanDetails.map((item, index) => (
          <div key={index} className="bg-white  gap-4 p-2">
            <div className="flex items-center justify-center">
              <Image
                src={item.image}
                width={200}
                height={200}
                alt={item.name}
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col text-center text-lg">
              <p className="text-2xl font-bold my-4">{item.name}</p>
              <p className="text-gray-600 text-center">{item.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
