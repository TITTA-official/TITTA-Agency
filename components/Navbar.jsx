import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar({ color = "#000" }) {
  return (
    <>
      <div className="header-d-logo">
        <Link href="/" passHref>
          <a>
            <Image
              width={145}
              height={68}
              className="w-full"
              src="/titawhite.png"
              alt="logo"
              priority
            />
          </a>
        </Link>
      </div>
      <div
        className={`hidden sm:flex items-center gap-x-8 px-2 text-[${color}] mt-8`}
      >
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#services">Services</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
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
