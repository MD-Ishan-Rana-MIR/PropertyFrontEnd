"use client";

import React, { useState } from "react";
import MaxWidth from "../max-width/MaxWidth";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
  ];

  return (
    <div className="py-2 shadow bg-white fixed w-full z-50">
      <MaxWidth>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <Link href={"/"}>
              <Image
                src={"/images/logo/logo.svg"}
                width={135}
                height={40}
                alt="Logo"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex">
            <ul className="flex flex-row items-center gap-x-6">
              {navItems.map((item) => (
                <li key={item.path} className="group relative">
                  <Link
                    href={item.path}
                    className={`relative pb-1 text-lg transition-colors duration-300 ${
                      pathname === item.path
                        ? "text-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {item.name}
                    {/* Animated underline */}
                    <span
                      className={`absolute left-0 -bottom-0.5 h-[2px] bg-blue-600 transition-all duration-300 ${
                        pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2  ">
              {isOpen ? <X size={28}  className=" cursor-pointer " /> : <Menu size={28} className=" cursor-pointer " />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden mt-2">
            <ul className="flex flex-col gap-4 bg-white p-4 rounded-lg shadow-lg">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`block text-lg transition-colors duration-300 ${
                      pathname === item.path
                        ? "textColor"
                        : " textColor hover:text-btnText"
                    }`}
                    onClick={() => setIsOpen(false)} // Close menu on click
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </MaxWidth>
    </div>
  );
};

export default Navbar;
