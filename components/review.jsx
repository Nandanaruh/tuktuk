import Image from "next/image";

export default function Review() {
  return (
    <div className="w-full flex flex-row items-center justify-center h-[500px] mx-auto z-30">
      <div className="flex flex-row mx-2">
        <div className="mx-4">
          <Image
            src="/facebook-review.png"
            height={80}
            width={200}
            alt="Facebook Review"
            className="rounded-full"
          />
        </div>
        <div className="mx-2">
          <Image
            src="/google-review.png"
            height={80}
            width={200}
            alt="Facebook Review"
            className="rounded-full"
          />
        </div>
      </div>
      <div>2</div>
    </div>
  );
}
