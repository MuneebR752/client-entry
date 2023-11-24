"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { User } from "app/context/UserContext";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const [user] = React.useContext(User);
  const pathname = usePathname();
  return (
    <header className="z-50 flex flex-wrap w-full py-4 bg-gray-800">
      <nav className="container w-[85%] px-4 mx-auto" aria-label="Global">
        <div className="flex items-center justify-between">
          <a className="flex-none text-2xl font-semibold text-white" href="#">
            <Image
              className="rounded-full"
              src={"/logo.png"}
              width={70}
              height={70}
              alt={"logo"}
            />
          </a>
          <Link
            className={`${
              user.isAdmin
                ? "px-5 text-gray-100 py-2 rounded-md bg-blue-600"
                : "hidden"
            }`}
            href={"/admin"}
          >
            Admin
          </Link>
        </div>
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
            Information Form
          </Link>
          <Link
            className={
              pathname === "/instructions"
                ? "font-medium text-blue-500 hover:text-blue-600"
                : "font-medium text-gray-400 hover:text-gray-500"
            }
            href={"/instructions"}
          >
            Instructions/Guidlines
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
