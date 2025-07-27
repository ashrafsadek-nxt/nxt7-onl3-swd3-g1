"use client";
import React, { useState } from "react";
import Image from "next/image";
const links = [
  {
    text: "الرئيسية",
    url: "http://",
  },
  {
    text: "من نحن",
    url: "http://",
  },
  {
    text: "الخدمات",
    url: "http://",
  },
  {
    text: "المناهج العلمية",
    url: "http://",
  },
  {
    text: "الصفحات",
    url: "http://",
  },
  {
    text: "اتصبا بنا",
    url: "http://",
  },
];
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-lemon  z-10 sticky top-0">
      <div className=" mx-auto px-4 sm:px-6 lg:px-10">
        <div className=" flex justify-between items-center py-4 ">
          <div className="logo flex  items-center">
            <Image src="/logo 11.png" alt="Logo" width={64} height={64} />
            <div className="flex flex-col pr-3  text-title">
              <span className="text-xl sm:text-2xl font-bold">
                تــــــوبـــــة
              </span>
              <span className="text-sm sm:text-base">سر الحيــاة الكامــل</span>
            </div>
          </div>
          <div className="hidden md:block nav-links">
            <ul className="flex items-center gap-3 lg:gap-5">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className={
                      "text-title font-medium text-base lg:text-lg hover:text-lemon  transition"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center  bg-deep-steel p-2 rounded-lg">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden ${
              isMenuOpen ? "absolute" : "hidden"
            } bg-lemon  pb-4 h-screen z-20 top-0 right-0 w-2xs shadow`}
          >
            <ul className="flex flex-col  space-y-3">
              <li>
                <a
                  href="#"
                  className="block text-title font-medium text-lg py-2 hover:bg-gray-100 px-4 rounded transition"
                >
                  الرئيسية
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-title font-medium text-lg py-2 hover:bg-gray-100 px-4 rounded transition"
                >
                  من نحن
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-title font-medium text-lg py-2 hover:bg-gray-100 px-4 rounded transition"
                >
                  الخدمات
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-title font-medium text-lg py-2 hover:bg-gray-100 px-4 rounded transition"
                >
                  المناهج العلمية
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-title font-medium text-lg py-2 hover:bg-gray-100 px-4 rounded transition"
                >
                  الصفحات
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block text-title font-medium text-lg py-2 hover:bg-gray-100 px-4 rounded transition"
                >
                  اتصب بنا
                </a>
              </li>
            </ul>
          </div>
          <div
            className="absolute after: bg-white h-full w-[50%] left-0 -z-10"
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 100px) 0%, 100% 100%, 0% 100%)",
            }}
          ></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
