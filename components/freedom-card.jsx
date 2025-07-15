import Image from "next/image";

export default function FreedomCard({ image, title, content }) {
  return (
    <div className="w-full flex flex-col items-center justify-start">
      <div className="relative w-[350px] h-[245px] group overflow-hidden">
        <Image
          src={image}
          alt="Freedom Image"
          fill
          className="object-cover mask-svg transition-transform duration-300 ease-in-out group-hover:scale-90"
        />
      </div>
      <h2 className="mt-6 text-3xl font-amatic font-bold text-center text-gray-800 px-4">
        {title}
      </h2>
      <p className="mt-6 text-lg text-center sm:text-xl px-4">{content}</p>
    </div>
  );
}
