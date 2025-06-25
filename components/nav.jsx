"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import navLinks from "./navLinks";

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="flex gap-2">
      {navLinks.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`capitalize font-bold text-xl transition-normal
              ${link.path === pathname ? "text-white" : "hover:text-amber-400"}
            `}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
