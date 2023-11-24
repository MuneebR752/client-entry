"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className="z-50 flex flex-wrap w-full py-4 bg-gray-800">
      <nav className="container w-[85%] px-4 mx-auto" aria-label="Global">
        <a className="flex-none text-2xl font-semibold text-white" href="#">
          <Image
            className="rounded-full"
            src={"/logo.png"}
            width={70}
            height={70}
            alt={"logo"}
          />
        </a>
        <div className="flex flex-row items-center justify-center gap-5 mt-5 text-lg">
          <Link
            className={
              pathname === "/admin"
                ? "font-medium text-blue-500 hover:text-blue-600"
                : "font-medium text-gray-400 hover:text-gray-500"
            }
            href={"/admin"}
            aria-current="page"
          >
            Clients
          </Link>
          <Link
            className={
              pathname === "/admin/users"
                ? "font-medium text-blue-500 hover:text-blue-600"
                : "font-medium text-gray-400 hover:text-gray-500"
            }
            href={"/admin/users"}
          >
            Users
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
