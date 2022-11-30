import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { motion, useCycle } from "framer-motion";
import MenuToggler from "../components/MenuToggler";
import Navigation from "../components/Navigation";
import { sanityClient, urlFor } from "../sanity";

const sidebarVariants = {
  // open: {opacity: 1, x:0, display:'block'},
  // closed: {opacity:0, x:"100%", transitionEnd: {display: "none"}},
  open: {
    clipPath: `circle(1000px at 261px 40px)`,
    // clipPath: `circle(119.3% at 96% 6%)`,
    transition: {
      duration: 0.4,
    },
  },
  closed: {
    clipPath: `circle(24px at 261px 40px)`,
    // clipPath: `circle(10.0% at 77.5% 46%)`,
    transition: {
      duration: 0.4,
      delay: 0.4,
    },
  },
};

export default function Blogpage({ posts }) {
  console.log(posts);
  const [isOpen, setToggleOpen] = useState(false);
  // console.log({ isOpen });
  return (
    <>
      <Head>
        <title>Blog - TITTA</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&family=Poppins:wght@500;600;700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        ></link>
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <main className="relative">
        <header className="w-screen sticky top-0 z-[999] bg-white shadow-xl poppins">
          <div className="w-full bg-white md:mx-auto max-w-6xl px-4 py-2 relative z-50 top-0 left-0 right-0 flex items-center justify-between  sm:mx-auto ">
            <div className="header-d-logo w-[145px]">
              <img className="w-full" src="../tittablue.png" alt="" />
            </div>
            <div className="hidden   sm:flex items-center gap-x-8 text-[#000] mt-8">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/#about">About</Link>
              </li>
              <li>
                <Link href="/#services">Services</Link>
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
            <motion.nav
              animate={isOpen ? "open" : "closed"}
              initial={false}
              className={`absolute top-0 right-0 bottom-0 sm:hidden ${isOpen ? 'w-[300px]': 'w-[0px]'}`}
            >
              <motion.div
                className="background bg-white absolute top-0 right-0 bottom-0 h-screen w-[300px]"
                variants={sidebarVariants}
              />
              <MenuToggler toggle={() => setToggleOpen(!isOpen)} />
              <Navigation
                items={[
                  { name: "Home", location: "/" },
                  { name: "About", location: "/#about" },
                  { name: "Services", location: "/#services" },
                  { name: "Blog", location: "/blogpage" },
                  { name: "Portfolio", location: "/portfolio" },
                  { name: "Contact", location: "/contact" },
                ]}
              />
            </motion.nav>
          </div>
        </header>

        <section className="heroblo z-10 text-white w-[100vw] h-[40vh] md:h-[55vh]  relative">
          <img
            src="../Sprinkle.svg"
            alt=""
            className="w-full h-full object-cover object-top absolute top-0 do"
          />
          <div className="h-full w-full flex flex-col justify-center items-center contenthero absolute z-20 pt-20">
            <div className="text-5xl text-white poppins font-semibold">
              Contact Us
            </div>
            <div className="text-white mt-6">
              <span>Home</span> {">"} <span>Contact</span>
            </div>
          </div>
        </section>

        <section className="py-32 px-4">
          <div className="w-full ">
            <img src="../contact.png" className="w-full" alt="" />
          </div>
          <div className="content mt-6">
            <div className="font-heading1 text-[#104cba] poppins font-semibold mb-3">
              Get In Touch
            </div>
            <div className="poppins text-4xl leading-normal md:text-4xl font-semibold mb-7">
              We Provide The Best Services. Need Help?
            </div>
            <div className="form-contact w-full relative">
              <input
                className="w-full form-input shadow rounded block hover:ring ring-[#104cba] focus:ring outline-none py-3 px-4 border text-[#3A3A3A] text-base"
                type="text"
                placeholder="Your Name*"
              />
              <input
                className="w-full form-input shadow rounded block hover:ring ring-[#104cba] focus:ring outline-none py-3 px-4 border text-[#3A3A3A] text-base mt-4"
                type="email"
                placeholder="Your Email*"
              />
              <textarea
                rows={5}
                className="w-full form-textarea shadow rounded  block hover:ring ring-[#104cba] focus:ring outline-none py-3 px-4 border text-[#3A3A3A] text-base mt-4"
                placeholder="Message*"
              />
              <div className="right-conten mt-4 text-left w-full">
              <a
                href="#"
                className="btn text-white text-lg mt-6 block bg-linear font-bold w-[180px] text-center"
              >
                Send Message
              </a>
            </div>
            <div className="absolute bottom-7 right-20">
                <img src="../contacttriangle.png" alt="" />
            </div>
            </div>
          </div>
        </section>



        <footer className="footer blog pt-32 md:pt-0 px-4 w-full">
          <div className=" grid grid-cols-1 sm:grid-cols-2 mx-auto lg:justify-items-between lg:items-start lg:grid-cols-4 lg:pt-28 gap-x-6 sm:max-w-6xl gap-y-14">
            <div className="flex flex-col gap-y-1 -mt-4">
              <div className="w-[50%]  mb-8">
                <img src="../titawhite.png" alt="" className="w-full" />
              </div>
              <div className="leading-relaxed max-w-xs">
                Lorem ipsum dolor sit amet.
              </div>
              <div className="socialmedialinks mt-8 flex w-full items-center gap-x-6">
                <div className="fb w-[32px]">
                  <img src="../facebook.png" className="w-full" alt="" />
                </div>
                <div className="twitter w-[32px]">
                  <img src="../twitter.png" className="w-full" alt="" />
                </div>
                <div className="instagram w-[32px]">
                  <img src="instagram.png" className="w-full" alt="" />
                </div>
              </div>
            </div>
            <div className="stuffz  flex flex-col gap-y-1 ">
              <div className="font-semibold text-[17px] poppins  mb-8">
                Quick Links
              </div>
              <div className="">Pricing</div>
              <div className="">Tracking</div>
              <div className="">Terms of Services</div>
              <div className="">Customization</div>
              <div className="">Contact Us</div>
            </div>
            <div className="flex flex-col gap-y-1 ">
              <div className="font-semibold text-[17px] poppins  mb-8">
                Contact Us
              </div>
              <div className="max-w-[18rem]">
                121 King St, Melbourne VIC 3000, Australia
              </div>
              <div className="">Info@example.com</div>
              <div className="">+234 816 385 7315</div>
            </div>

            <div className="flex flex-col gap-y-1 ">
              <div className="font-semibold text-[17px] poppins  mb-8">
                Subscribe Newsletter
              </div>
              <div className="max-w-[18rem]">
                Follow our newsletter to stay updated about us
              </div>
              <div className="flex subemail mt-2 w-full h-full rounded overflow-hidden">
                <input
                  type="text"
                  className="px-7 py-4 w-[82%]"
                  placeholder="Email Address"
                />
                <div className="bttn border-0 object-contain w-[18%]">
                  <img
                    src="../sub-button.png"
                    alt=""
                    className="h-full w-full"
                  />
                </div>
              </div>
            </div>
          </div>
          <section className="sm:max-w-6xl mx-auto cprght border-t-[#515dbb] border-t mt-24 py-6 text-center  text-[#a7b4df] text-sm">
            2022 TITTA. All Rights Reserved.
          </section>
        </footer>
      </main>
    </>
  );
}