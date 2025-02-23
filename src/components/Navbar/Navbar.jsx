import MobileLogo from "/src/assets/svg/Logo-Mobile.svg";
import LaptopLogo from "/src/assets/svg/Logo-Laptop.svg";
import DesktopLogo from "/src/assets/svg/Logo-Desktop.svg";

import { HiBars3BottomRight } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pages = ["Home", "About Us", "Properties", "Services"];

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-gray19 h-[68px] md:h-[80px] relative">
      <div className="container grid grid-cols-2 md:grid-cols-4 items-center px-4 md:px-1 h-full ">
        <div className="logo justify-self-start">
          <img
            src={MobileLogo}
            alt="Logo"
            className="md:hidden w-[93px] h-[28px]"
          />
          <img
            src={LaptopLogo}
            alt="Logo"
            className="hidden md:block lg:hidden w-[113px] h-[48px]"
          />
          <img
            src={DesktopLogo}
            alt="Logo"
            className="hidden lg:block w-[160px] h-[34px]"
          />
        </div>
        <div
          className={`${
            isMenuOpen ? "h-[280px]" : "h-0"
          } overflow-hidden transition-all duration-300 text-[clamp(14px,2vw,18px)] font-medium pl-4 md:pl-0 absolute top-[68px] left-0 right-0 bg-gray19 flex flex-col justify-around  md:static md:h-full md:col-span-3 md:flex-row md:justify-around md:items-center  md:bg-transparent`}
        >
          <div className="pages pt-5 md:pt-0">
            <ul className="flex flex-col gap-7 md:flex-row md:gap-0 text-nowrap">
              {pages.map((page, index) => (
                <li key={index} className="inline-block">
                  <NavLink
                  onClick={handleMenuClick}
                    to={`/${page.toLowerCase().split(" ").join("-")}`}
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "bg-gray8 border-gray15 "
                          : "text-white border-gray19"
                      } text-white px-4.5 py-2.5 border-2 rounded-lg md:px-3 lg:px-4.5  `
                    }
                  >
                    {page}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="contact-us">
            <Link
              to="/contact-us"
              onClick={handleMenuClick}
              className="text-white text-nowrap bg-gray8 rounded-lg border-2 border-gray15 px-4 py-2.5"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="menu justify-self-end md:hidden">
          {isMenuOpen ? (
            <IoClose className="text-white text-3xl cursor-pointer" onClick={handleMenuClick}/>
          ) : (
            <HiBars3BottomRight
              className="text-white text-3xl cursor-pointer"
              onClick={handleMenuClick}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
