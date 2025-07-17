"use client";

import Image from "next/image";
export default function ChatIcon() {
  return (
    <div>
      <Image
        src="/chat.png"
        width={60}
        height={60}
        alt="CHAT"
        className="transition-all duration-500 ease-in-out rounded-sm shadow-gray-700 hover:scale-110"
      />
    </div>
  );
}
