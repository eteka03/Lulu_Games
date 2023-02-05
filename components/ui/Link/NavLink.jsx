import Link from "next/link";
import React from "react";

const NavLink = ({ children, href }) => {
  return (
    <Link
      className=" md:border-none md:rounded-full md:inline-block md:min-w-full"
      href={href ?? "/"}
    >
      {children}
    </Link>
  );
};

export default NavLink;
