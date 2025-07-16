import React from "react";

export default function FreeTripPlan() {
  return (
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
  );
}
