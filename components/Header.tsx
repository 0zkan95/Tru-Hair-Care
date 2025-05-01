"use client";
import React, { useState } from "react";
import { FaXmark, FaBars } from "react-icons/fa6";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      closeMenu(); // Close mobile menu after clicking
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="flex justify-between items-center gap-4 bg-black lg:px-10 px-4 py-3 sticky top-0 z-50 border-[8px] border-[#a69f7d] mb-4 rounded-b-[50px]">
      <div id="logo">
        <h1 className="text-white font-bold text-5xl">Tru Hair Care</h1>
      </div>
      <ul
        className={`hidden lg:flex gap-4 items-center ${
          isOpen ? "flex" : "hidden"
        } lg:flex`}
      >
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            onClick={(e) => scrollToSection(e, item.href)}
            className="text-white font-semibold cursor-pointer p-4 rounded-lg hover:bg-[#a69f7d] hover:text-black"
          >
            {item.name}
          </a>
        ))}
      </ul>

      {/*** Mobile menu starts here */}
      <div
        className="flex justify-center items-center lg:hidden"
        onClick={toggleMenu}
      >
        <div className="transition-all duration-300 ease-in-out">
          {isOpen ? (
            <FaXmark className="text-white text-3xl cursor-pointer transform rotate-90 transition-transform duration-300" />
          ) : (
            <FaBars className="text-white text-3xl cursor-pointer transform transition-transform duration-300 hover:scale-110" />
          )}
        </div>
      </div>

      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } w-full h-fit bg-slate-800 p-4 absolute top-[80%] left-0`}
      >
        <ul className="flex flex-col gap-2 items-center justify-center w-full">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="text-white text-center font-semibold cursor-pointer p-4 rounded-lg hover:bg-[#a69f7d] hover:text-black"
            >
              <a
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
