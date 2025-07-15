// export default function DriveYourOwn() {
//   return (
//     <section className="flex flex-col text-center justify-center ">
//       <p
//         className="text-lg font-amatic text-sky-700"
//         style={{
//           fontFamily: "'Amatic SC', cursive",
//           fontSize: "35px",
//           fontWeight: "700",
//         }}
//       >
//         Embark on an Unforgettable Adventure
//       </p>
//       <h2 className="text-5xl font-bold text-black my-2">
//         Drive Your Own Tuktuk
//       </h2>
//       <p className="text-lg text-center my-2">
//         Wait, you’re going to let me drive a three wheeler in Sri Lanka? Yes we
//         are and you’re going to LOVE IT!
//       </p>
//       <p className="text-lg my-2 mx-50">
//         We rent tuktuks to travellers who want the freedom to explore Sri Lanka
//         by driving an authentic and reliable rickshaw! <br />
//         Moreover get off the beaten track and find the amazing places other
//         tourists miss.
//       </p>
//     </section>
//   );
// }
export default function DriveYourOwn() {
  return (
    <section className="flex flex-col text-center justify-center w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 max-w-screen-xl mx-auto py-8">
      <p
        className="font-amatic text-sky-700 font-bold"
        style={{
          fontFamily: "'Amatic SC', cursive",
          fontSize: "clamp(28px, 5vw, 40px)", // responsive font size
        }}
      >
        Embark on an Unforgettable Adventure
      </p>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black my-2">
        Drive Your Own Tuktuk
      </h2>

      <p className="text-base sm:text-xl my-2 w-full mx-auto">
        Wait, you’re going to let me drive a three wheeler in Sri Lanka? Yes we
        are and you’re going to LOVE IT!
      </p>

      <p className="text-base sm:text-xl my-2 w-full mx-auto">
        We rent tuktuks to travellers who want the freedom to explore Sri Lanka
        by driving an authentic and reliable rickshaw!{" "}
        <br className="hidden sm:block" />
        Moreover, get off the beaten track and find the amazing places other
        tourists miss.
      </p>
    </section>
  );
}
