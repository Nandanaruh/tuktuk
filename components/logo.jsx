import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/tuktukrental_logo.png"
        priority
        quality={100}
        alt=""
        width="100"
        height="100"
        className="w-full h-full"
      />
    </Link>
  );
}
