import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <header className="z-50 flex flex-wrap w-full py-4 bg-gray-800">
      <nav className="max-w-[85rem] w-full mx-auto px-4" aria-label="Global">
        <a className="flex-none text-2xl font-semibold text-white" href="#">
          Swift Services
        </a>
        <div className="flex flex-row items-center justify-center gap-5 mt-5 text-lg">
          <Link
            className="font-medium text-blue-500"
            href={"/"}
            aria-current="page"
          >
            Add New Client
          </Link>
          <Link
            className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
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
