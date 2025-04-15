"use client";

import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaInstagram, FaFacebookF, FaYoutube, FaVk } from "react-icons/fa";
import { FiMenu, FiSearch } from "react-icons/fi";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "BERANDA", href: "/" },
  { name: "SUBDIT I", href: "/subdit-1" },
  { name: "SUBDIT II", href: "/subdit-2" },
  { name: "SUBDIT III", href: "/subdit-3" },
  { name: "SUBDIT IV", href: "/subdit-4" },
  { name: "SUBDIT V", href: "/subdit-5" },
  { name: "RESKRIMSUS POLDA", href: "/reskrimsus" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="border-b">
      {/* Top Row */}
      <div className="relative flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8 py-4 lg:py-8 gap-4 lg:gap-0">
        {/* Top - Mobile Only: Burger + Search */}
        <div className="flex justify-between w-full lg:hidden">
          <FiMenu className="text-xl cursor-pointer" />
          <FiSearch className="text-xl cursor-pointer" />
        </div>

        {/* Center - Logo (absolute untuk tetap di tengah) */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Image src="/assets/images/logo.png" alt="Logo" width={1920} height={1080} className="w-[120px] h-[30px] lg:w-[150px] lg:h-[35px] object-contain" />
        </div>

        {/* Right - Sosmed Icons (visible only on desktop) */}
        <div className="hidden lg:flex items-center space-x-4  text-sm ml-auto ">
          <FaTwitter className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
          <FaFacebookF className="cursor-pointer" />
          <FaYoutube className="cursor-pointer" />
          <FaVk className="cursor-pointer" />
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="flex items-center justify-between px-4 py-4 border-t border-black">
        {/* Left - Hamburger */}
        <div className="hidden lg:flex items-center">
          <FiMenu className="text-xl cursor-pointer" />
        </div>

        {/* Menu Items */}
        <div className="flex items-center justify-center gap-5 overflow-x-auto text-[8px] lg:text-sm font-bold">
          {navItems.map((item, idx) => {
            const isActive = pathname === item.href;
            return (
              <Link key={idx} href={item.href}>
                <span className={`inline-block py-1 border-b-2 ${isActive ? "border-black text-black" : "border-transparent hover:text-red-600"}`}>{item.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Search Icon */}
        <div className="hidden lg:flex text-lg">
          <FiSearch className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
