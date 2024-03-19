"use client";

import { useState } from "react";
import { Button } from "../Elements";

const { default: Link } = require("next/link");

const Navbar = () => {
  const [isNavbarshowed, setIsNavbarshowed] = useState(false);

  const handleNavbar = () => {
    setIsNavbarshowed(!isNavbarshowed);
  };

  return (
    <nav className="w-full md:mt-4 lg:mt-10 lg:max-w-6xl mx-auto bg-black-secondary md:bg-transparent flex items-center justify-between pr-5 py-2">
      <div className="relative flex justify-between md:justify-start gap-x-10 px-5 w-screen h-12 items-center max-w-full">
        <h1 className="md:text-xl md:font-semibold">Anggarizki</h1>
        <div className="relative md:hidden">
          <div
            className="absolute -top-3 right-0 z-10 hover:cursor-pointer"
            onClick={handleNavbar}
          >
            <NavbarIcon isNavbarshowed={isNavbarshowed} />
          </div>
        </div>
        <ul
          className={`absolute ${
            isNavbarshowed ? "top-0" : "-top-[100vh]"
          } bottom-0 left-0 right-0 bg-black-secondary md:bg-transparent w-screen h-screen flex flex-col md:flex-row justify-center items-center gap-y-8 transition-all duration-75 ease-in-out md:relative md:w-fit md:h-fit md:top-0 gap-x-4`}
        >
          <NavbarItemList href="#">Home</NavbarItemList>
          <NavbarItemList href="#">Services</NavbarItemList>
          <NavbarItemList href="#">Projects</NavbarItemList>
          <NavbarItemList href="#">Contacts</NavbarItemList>
        </ul>
      </div>
      <div className="hidden md:flex w-full justify-end">
        <Button>
          <Link href="#">Get Started</Link>
        </Button>
      </div>
    </nav>
  );
};

const NavbarItemList = (props) => {
  const { children, href } = props;
  return (
    <li className="text-3xl md:text-base">
      <Link
        href={href}
        className="hover:font-medium hover:text-green hover:shadow-lg shadow-green transition-all duration-75 ease-in-out"
      >
        {children}
      </Link>
    </li>
  );
};

const NavbarIcon = (props) => {
  const { isNavbarshowed } = props;
  return (
    <div className="block transition-all duration-75 ease-in-out">
      {isNavbarshowed ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 6L6 18"
            stroke="#F0F2F5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6 6L18 18"
            stroke="#F0F2F5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 12H21"
            stroke="#F0F2F5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3 6H21"
            stroke="#F0F2F5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3 18H21"
            stroke="#F0F2F5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
    </div>
  );
};

export default Navbar;
