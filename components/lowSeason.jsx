import Link from "next/link";
import { Button } from "./ui/button";

export default function LowSeason() {
  return (
    <div className="flex flex-col  mx-auto top-0 left-0 sm:flex-row mb-4">
      <div>
        <p className="text-xl mt-2 font-bold text-black">
          🚨 Low Season = Lower Prices! Score exclusive tuktuk deals now –
          limited time only! 🛺
        </p>
      </div>
      <div className="flex items-center justify-center mt-2">
        <Link
          href="https://wa.me/94711276934"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="w-[160px] gap-2 rounded-full hover:bg-sky-800 mx-2">
            CHAT WITH US!
          </Button>
        </Link>
      </div>
    </div>
  );
}
