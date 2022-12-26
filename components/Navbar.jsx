import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <>
      <div className="header-d-logo w-[145px]">
        <Image
          width={145}
          height={68}
          className="w-full"
          src="/tittablue.png"
          alt="logo"
        />
      </div>
      <div className="hidden sm:flex items-center gap-x-8 text-[#000] mt-8">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#services">Services</Link>
        </li>
        <li>
          <Link href="/blogpage">Blog</Link>
        </li>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </div>
    </>
  );
}

export default Navbar;
