"use client";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
import Dropdown from "./Dropdown.jsx";
import Image from "next/image.js";
import Button from "@/app/Component/Button/Button.jsx";
import { usePathname } from "next/navigation.js";

const Navbar = (value) => {
  const currentPath = usePathname();
  const logo = value.value;
  const [navbar, setNavbar] = useState(false);

  const handleItemClick = () => {
    // Close the navigation menu when an item is clicked
    setNavbar(false);
  };

  const menu = [
    { name: "Home", url: "/" },
    {
      name: "Download",
      url: "/Download",
    },
    {
      name: "Learn",
      url: "/Learn/MutualFund",
    },
    { name: "About", url: "/AboutUs" },
    // { name: "Blog", url: "/Blog" },
    { name: "Blog", url: "#" },
    { name: "Contact", url: "/ContactUs" },
  ];

  return (
    <nav className="w-full  fixed bg-white shadow-lg nav_container">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/" className="nav__link">
              <div className="logo_container">
                <div className="rounded">
                  {/* {logo ? (
                    <Image
                      src={logo}
                      alt="CNVMONEY logo"
                      width={250}
                      height={200}
                    />
                  ) : (
                    <Image
                      src="/Logo.png"
                      alt="CNVMONEY logo"
                      width={250}
                      height={200}
                    />
                  )} */}
                  <Image
                    className="cnvLogo"
                    priority={true}
                    src="/Logo.png"
                    alt="CNVMONEY logo"
                    width={200}
                    height={150}
                  />
                </div>
              </div>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-white-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <RxCross1 className="text-gray-700" size={30} />
                ) : (
                  <AiOutlineMenu className="text-gray-700" size={30} />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {menu.map(({ name, url, dropdown }, index) => (
                <li
                  key={index}
                  className={`${
                    currentPath === url
                      ? "active nav_active_link"
                      : "text-gray-700"
                  }`}
                >
                  {dropdown ? (
                    <Dropdown name={name} dropdownItems={dropdown} />
                  ) : (
                    <Link href={url} onClick={handleItemClick}>
                      <p>{name}</p>
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <Button
                  handelClick={value.handelOpenModel}
                  setNavbar={setNavbar}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
