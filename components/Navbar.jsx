import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiFillCaretDown,
  AiFillCaretUp,
} from "react-icons/ai";
import { Menu } from "@headlessui/react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const list = [
    {
      name: "International and National advisory Committee",
      link: "/international",
    },
    {
      name: "Local advisory Committee",
      link: "/local_advisory_committee",
    },
    {
      name: "Organizing Committee",
      link: "/organizing_committee",
    },
    {
      name: "Resource Person Committee",
      link: "/resource_person",
    },
  ];

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100] bg-white">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image src="/logo.png" width={150} height={100} />
        </Link>
        <div>
          <ul className="hidden md:flex ">
            <Link href="/">
              <li className="ml-10 text-sm hover:text-cyan-600 text-black">
                Home
              </li>
            </Link>
            <Link href="/about">
              <li className="ml-10 text-sm hover:text-cyan-600 text-black">
                About Us
              </li>
            </Link>
            <li
              onClick={() => setIsOpen((prev) => !prev)}
              className="ml-10 text-sm hover:text-cyan-600 text-black flex items-center gap-2"
            >
              Conference Committee{" "}
              {!isOpen ? <AiFillCaretDown /> : <AiFillCaretUp />}
            </li>
            {isOpen && (
              <div className="bg-white absolute top-20 flex flex-col items-center rounded-lg p-2 ">
                {list.map((item, i) => (
                  <div onClick={() => setIsOpen(false)}>
                    <Link
                      href={item.link}
                      className="flex w-full cursor-pointer rounded-lg p-2"
                      key={i}
                    >
                      <h3>{item.name}</h3>
                    </Link>
                  </div>
                ))}
              </div>
            )}
            <Link href="/conference_track">
              <li className="ml-10 text-sm hover:text-cyan-600 text-black">
                Conference Track
              </li>
            </Link>
            <Link href="/important_dates">
              <li className="ml-10 text-sm hover:text-cyan-600 text-black">
                Important Dates
              </li>
            </Link>
            <Link href="/submission">
              <li className="ml-10 text-sm hover:text-cyan-600 text-black">
                Submission
              </li>
            </Link>
            <Link href="/registration">
              <li className="ml-10 text-sm hover:text-cyan-600 text-black">
                Registration
              </li>
            </Link>
            <Link href="/previous_year">
              <li className="ml-10 text-sm hover:text-cyan-600 text-black">
                Previous Year Conferences
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden text-black">
            <AiOutlineMenu size={25} />
          </div>
        </div>
        <div>
          <a href="https://manavrachna.edu.in/" target="_blank">
            <Image src="/mrlogo.png" width={150} height={100} />
          </a>
        </div>
      </div>

      <div
        className={nav ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ""}
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[70%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0  p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between ">
              <Link href="/">
                <Image src="/logo.png" width={100} height={35} />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer text-black"
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>

          <div className="py-4 flex flex-col">
            <ul className="uppercase mt-14 ">
              <Link href="/">
                <li className="py-4 text-sm text-black">Home</li>
              </Link>
              <Link href="/about">
                <li className="py-4 text-sm text-black">About Us</li>
              </Link>
              <li
                onClick={() => setIsOpen((prev) => !prev)}
                className="ml-10 text-sm hover:text-cyan-600 text-black flex items-center gap-2"
              >
                Conference Committee{" "}
                {!isOpen ? <AiFillCaretDown /> : <AiFillCaretUp />}
              </li>
              {isOpen && (
                <div className="bg-white absolute top-20 flex flex-col items-center rounded-lg p-2 ">
                  {list.map((item, i) => (
                    <div onClick={() => setIsOpen(false)}>
                      <Link
                        href={item.link}
                        className="flex w-full cursor-pointer rounded-lg p-2"
                        key={i}
                      >
                        <h3>{item.name}</h3>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
              <Link href="/conference_track">
                <li className="py-4 text-sm text-black">Conference Track</li>
              </Link>
              <Link href="/important_dates">
                <li className="py-4 text-sm text-black">Important Dates</li>
              </Link>
              <Link href="/submission">
                <li className="py-4 text-sm text-black">Submission</li>
              </Link>
              <Link href="/registration">
                <li className="py-4 text-sm text-black">Registration</li>
              </Link>
              <Link href="/previous_year">
                <li className="py-4 text-sm text-black">
                  Previous Year Conferences
                </li>
              </Link>
            </ul>
            <div className="py-10">
              <a href="https://manavrachna.edu.in/" target="_blank">
                <Image src="/mrlogo.png" width={200} height={150} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
