import Link from "next/link";
import { Button } from "./ui/button";

export default function LowSeason() {
  return (
    <div className="flex flex-row top-0 left-0 w-full h-[80px] items-center justify-center mx-auto pb-3 bg-amber-300">
      <div>
        <p className="text-xl font-bold text-black">
          🚨 Low Season = Lower Prices! Score exclusive tuktuk deals now –
          limited time only! 🛺
        </p>
      </div>

      {/* WhatsApp Button */}
      <div>
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
