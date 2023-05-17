import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-[#10182F]">
      <div className="flex flex-col items-center justify-center p-4 gap-4">
        <Image src="/logo_white1.png" width={100} height={100} />
        <div className="flex flex-row items-center justify-between">
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm hover:text-cyan-600 text-white">
                Home
              </li>
            </Link>
            <Link href="/about">
              <li className="ml-10 text-sm hover:text-cyan-600 text-white">
                About Us
              </li>
            </Link>
            <Link href="/conference_track">
              <li className="ml-10 text-sm hover:text-cyan-600 text-white">
                Conference Track
              </li>
            </Link>
            <Link href="/important_dates">
              <li className="ml-10 text-sm hover:text-cyan-600 text-white">
                Important Dates
              </li>
            </Link>
            <Link href="/submission">
              <li className="ml-10 text-sm hover:text-cyan-600 text-white">
                Submission
              </li>
            </Link>
            <Link href="/registration">
              <li className="ml-10 text-sm hover:text-cyan-600 text-white">
                Registration
              </li>
            </Link>
            <Link href="/previous_year">
              <li className="ml-10 text-sm hover:text-cyan-600 text-white">
                Previous Year Conferences
              </li>
            </Link>
          </ul>
        </div>

        <div className="flex flex-row items-center justify-center gap-8">
          <div className="flex flex-row gap-2 items-center text-sm text-white">
            <BiPhoneCall />
            <p>+91 9910891864 (Dr. Poonam Tanwar)</p>
          </div>
          <div className="flex flex-row gap-2 items-center text-sm text-white">
            <AiOutlineMail />
            <p>aiccit2023@gmail.com</p>
          </div>
        </div>

        <div className="flex items-center justify-center text-sm text-white">
          Copyright &#169; ICAICCIT - 2023. All Rights Resevered
        </div>
      </div>
    </div>
  );
};

export default Footer;
