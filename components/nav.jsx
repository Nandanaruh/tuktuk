// "use client";

// import { HiChevronDown } from "react-icons/hi";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import navLinks from "./navLinks";

// export default function Nav() {
//   const pathname = usePathname();

//   return (
//     <nav className="flex gap-4 my-8">
//       {navLinks.map((link, index) => (
//         <div key={index} className="relative group">
//           <Link
//             href={link.path}
//             className={`capitalize font-bold text-[16px] flex items-center gap-1 transition-normal
//               ${
//                 link.path === pathname
//                   ? "text-yellow-300"
//                   : "text-white hover:text-yellow-300"
//               }
//             `}
//           >
//             {link.name}
//             {link.children && (
//               <HiChevronDown className="text-medium text-white group-hover:text-yellow-300 transition-colors" />
//             )}
//           </Link>

//           {link.children && (
//             <div className="absolute left-0 mt-1 hidden group-hover:block shadow-lg rounded z-50 bg-gray-600 w-max min-w-full whitespace-nowrap">
//               {link.children.map((child, i) => (
//                 <Link
//                   key={i}
//                   href={child.path}
//                   className="block px-4 py-2 text-medium font-semibold border-b border-gray-400 hover:bg-gray-500 text-white hover:text-yellow-300"
//                 >
//                   {child.name}
//                 </Link>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </nav>
//   );
// }
"use client";

import { useState } from "react";
import { HiChevronDown, HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import navLinks from "./navLinks";

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="relative">
      {/* Mobile Menu Toggle */}
      <div className="lg:hidden flex justify-end mb-4">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white text-3xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Nav Links */}
      <div
        className={`flex flex-col lg:flex-row gap-4 ${
          mobileOpen ? "block" : "hidden"
        } lg:flex`}
      >
        {navLinks.map((link, index) => (
          <div key={index} className="relative group">
            <Link
              href={link.path}
              className={`capitalize font-bold text-[16px] flex items-center gap-1 transition-colors
                ${
                  link.path === pathname
                    ? "text-yellow-300"
                    : "text-white hover:text-yellow-300"
                }
              `}
            >
              {link.name}
              {link.children && (
                <HiChevronDown className="text-white group-hover:text-yellow-300 transition-colors" />
              )}
            </Link>

            {/* Dropdown - Shown on hover (lg) or always expanded in mobile */}
            {link.children && (
              <div
                className={`lg:absolute left-0 mt-1 rounded shadow-lg bg-gray-600 z-50 w-max min-w-full whitespace-nowrap
                  ${
                    mobileOpen ? "block" : "hidden"
                  } group-hover:block lg:group-hover:block
                `}
              >
                {link.children.map((child, i) => (
                  <Link
                    key={i}
                    href={child.path}
                    className="block px-4 py-2 text-medium font-semibold border-b border-gray-400 hover:bg-gray-500 text-white hover:text-yellow-300"
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
