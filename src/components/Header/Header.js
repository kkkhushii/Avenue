'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    console.log(`Selected option: ${option}`);
    setIsOpen(false); // Close the dropdown after selecting an option
  };


  return (


    <>

      <div className="flex flex-row justify-between pt-[27px] max-w-[1170px] mx-auto items-center">
        <div>
          <Link href="#">
            <Image
              src="Icons\logo.svg"
              width={140}
              height={33}
              alt="logo"
            ></Image>
          </Link>
        </div>
        <div className="font-normal text-lg leading-[22px] text-customcol">
          <ul className="flex flex-row gap-[50px] menu">
            <li>
              <Link href="#">Travelers</Link>
            </li>

            <div className="relative inline-block ">
              <button
                onClick={toggleDropdown}
                className="custom-button  rounded-lg  focus:outline-none "
              >
                Pages
                <svg
                  className={`custom-svg inline-block h-4 w-4 ml-2 transition-transform transform ${isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              {isOpen && (
                <div className="absolute z-10 mt-2 w-56 bg-white rounded-lg shadow-lg">
                  <Link href='#'
                    onClick={() => handleOptionClick('Packages')}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                  >
                    Packages
                  </Link>
                  <Link href='#'
                    onClick={() => handleOptionClick('Package Detail')}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                  >
                    Package Detail
                  </Link>
                </div>
              )}
            </div>

            <li>

              <Link href="#">Blog</Link>
            </li>
            <li>

              <Link href="#">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <button className="font-normal text-lg leading-[22px] text-white bg-customblue rounded-[8px] py-[13px] px-[24px] buttoncustomcolor
            hover:text-customblue hover:border-customblue hover:bg-white border border-transparent transition-colors duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
