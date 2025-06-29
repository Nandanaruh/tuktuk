import Image from "next/image";

export default function Freedom() {
  return (
    <div className="w-full flex flex-col items-center justify-start">
      <div className="relative w-[350px] h-[245px] group overflow-hidden gap-6">
        <Image
          src="/freedom.jpg"
          alt="Hero Background"
          fill
          className="object-cover mask-svg transition-transform duration-300 ease-in-out group-hover:scale-90"
        />
      </div>

      <p className="mt-6 text-lg font-amatic text-center px-4">
        Your tuktuk adventure allows you to <br />
        get off the beaten tourist trails and <br />
        explore the hidden beauty of Sri Lanka. <br />
        Be your own guide and enjoy the freedom to explore.
      </p>
    </div>
  );
}
