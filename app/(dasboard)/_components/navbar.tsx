"use client";

import { UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  return (
    <nav className="flex items-center gap-x-4 p-5 bg-green-400">
      <div className="hidden lg:flex lg:flex-1 bg-yellow-500">Search</div>
      {/* <div className="block lg:hidden"></div> */}
      <UserButton />
    </nav>
  );
};

export default Navbar;
