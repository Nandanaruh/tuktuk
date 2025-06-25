"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import navLinks from "./navLinks";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-4 my-8">
      {navLinks.map((link, index) => (
        <div key={index} className="relative group">
          <Link
            href={link.path}
            className={`capitalize font-bold text-[16px] transition-normal
              ${
                link.path === pathname
                  ? "text-yellow-300"
                  : "text-white hover:text-yellow-300"
              }
            `}
          >
            {link.name}
          </Link>

          {link.children && (
            <div className="absolute left-0 mt-2 hidden group-hover:block shadow-lg rounded z-50 bg-gray-700 w-max min-w-full whitespace-nowrap">
              {link.children.map((child, i) => (
                <Link
                  key={i}
                  href={child.path}
                  className="block px-4 py-2 text-medium font-semibold border-b border-gray-500 hover:bg-gray-600 text-white hover:text-yellow-400"
                >
                  {child.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
