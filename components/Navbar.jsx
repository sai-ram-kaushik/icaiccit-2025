import React from "react";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src="/logo.png" width={150} height={100} />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm hover:border-b">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm hover:border-b">About Us</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm hover:border-b">
                Conference Committee
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm hover:border-b">Conference Track</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm hover:border-b">Important Dates</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm hover:border-b">Submission</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm hover:border-b">Registration</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm hover:border-b">
                Previous Year Conferences
              </li>
            </Link>
          </ul>
        </div>
        <div>
            <Image src="/mrlogo.jpg" width={150} height={100}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
