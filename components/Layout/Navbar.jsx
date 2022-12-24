import React, { useCallback, useState } from "react";

const Navbar = () => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsActiveMenu((prev) => !prev);
  }, [setIsActiveMenu]);

  return (
    <header className="w-full bg-blue-300">
      <nav className="flex flex-row w-full h-full  justify-between items-center md:pr-6 md:pl-6">
        <div className="pl-2 md:pl-0">❤</div>
        <div
          className={`flex flex-col md:flex-row md:w-auto  md:relative md:z-0  ${
            isActiveMenu && "absolute top-0 z-50 pt-2 w-full"
          }  bg-red-300`}
        >
          <div className="md:hidden pr-4 flex justify-end">
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
          <div className={`text-center md:block ${!isActiveMenu && "hidden"}`}>
            <ul className="flex flex-col md:flex-row md:justify-between gap-3 md:gap-6 ">
              <li>item-1</li>
              <li>item-2</li>
              <li>item-3</li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
