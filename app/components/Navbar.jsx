"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className="z-50 flex flex-wrap w-full py-4 bg-gray-800">
      <nav className="max-w-[85rem] w-full mx-auto px-4" aria-label="Global">
        <a className="flex-none text-2xl font-semibold text-white" href="#">
          Swift Services
        </a>
        <div className="flex flex-row items-center justify-center gap-5 mt-5 text-lg">
          <Link
            className={
              pathname === "/"
                ? "font-medium text-blue-500 hover:text-blue-600"
                : "font-medium text-gray-400 hover:text-gray-500"
            }
            href={"/"}
            aria-current="page"
          >
            Add New Client
          </Link>
          <Link
            className={
              pathname === "/clients"
                ? "font-medium text-blue-500 hover:text-blue-600"
                : "font-medium text-gray-400 hover:text-gray-500"
            }
            href={"/clients"}
          >
            View Clients
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
