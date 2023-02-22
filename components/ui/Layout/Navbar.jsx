import React, { useCallback, useState } from "react";
import Link from "next/link";
import NavLink from "../Link/NavLink";
import Image from "next/image";
import logo from "../../../public/logo-transparent.png";

const Navbar = () => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const links = ["Acceuil", "Qui suis-je ?"];

  const toggleMenu = useCallback(() => {
    setIsActiveMenu((prev) => !prev);
  }, [setIsActiveMenu]);

  return (
    <header className="w-full md:bg-transparent bg-[var(--bg-purple)]">
      <nav className="relative flex flex-row w-full h-full  justify-between items-center md:pr-6 md:pl-6">
        <div
          className={`md:block pl-2 md:pl-0 ${isActiveMenu ? "hidden" : ""}`}
        >
          <Link href="/">
            <Image
              src={logo}
              alt="transparent logo"
              className="h-full w-32 m-h-[40px] m-w-[40px]"
            />
          </Link>
        </div>
        <div
          className={`flex flex-col w-full md:flex-row md:w-auto  relative md:z-0 `}
        >
          <div className="md:hidden pr-4 flex flex-wrap justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="menu-button"
              className="h-6 w-6 cursor-pointer md:hidden block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={toggleMenu}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <div
            className={`text-center md:block md:relative md:w-auto md:top-0 ${
              !isActiveMenu
                ? "hidden"
                : "absolute w-full z-50 h-auto top-6 bg-[var(--bg-purple)]"
            }`}
          >
            <ul className="flex flex-col md:flex-row md:justify-between gap-3 md:gap-6 ">
              {links.map((link, idx) => (
                <li className="min-w-[7vw] inline-block" key={idx}>
                  <NavLink>{link}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
