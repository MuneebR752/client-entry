import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <header class="flex flex-wrap z-50 w-full py-4 bg-gray-800">
      <nav class="max-w-[85rem] w-full mx-auto px-4" aria-label="Global">
        <a class="flex-none text-2xl font-semibold dark:text-white" href="#">
          Swift Services
        </a>
        <div class="flex flex-row justify-center items-center gap-5 mt-5 text-lg">
          <Link
            class="font-medium text-blue-500"
            href={"/"}
            aria-current="page"
          >
            Add New Client
          </Link>
          <Link
            class="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
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
