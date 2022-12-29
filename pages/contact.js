import { motion, useCycle } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Footer from "../components/Footer";
import MenuToggler from "../components/MenuToggler";
import Navbar from "../components/Navbar";
import Navigation from "../components/Navigation";
import { sanityClient, urlFor } from "../sanity";
import styles from "../styles/Home.module.css";

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

export default function Contact() {
  const [isOpen, setToggleOpen] = useState(false);
  // console.log({ isOpen });
  return (
    <>
      <main className="relative">
        <header className="w-screen sticky top-0 z-[999] bg-white shadow-xl poppins">
          <div className="relative top-0 left-0 right-0 z-50 flex items-center justify-between w-full max-w-6xl px-4 py-2 bg-white md:mx-auto sm:mx-auto ">
            <Navbar />
            <motion.nav
              animate={isOpen ? "open" : "closed"}
              initial={false}
              className={`absolute top-0 right-0 bottom-0 sm:hidden ${
                isOpen ? "w-[300px]" : "w-[0px]"
              }`}
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
                  { name: "Blog", location: "/blog" },
                  { name: "Portfolio", location: "/portfolio" },
                  { name: "Contact", location: "/contact" },
                ]}
              />
            </motion.nav>
          </div>
        </header>

        <section className="heroblo z-10 text-white w-[100vw] h-[40vh] md:h-[55vh]  relative">
          <div className="relative w-full h-full">
            <Image src="/Sprinkle.svg" alt="sprinkle" layout="fill" priority />
          </div>
          <div className="absolute z-20 flex flex-col items-center justify-center w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 contenthero">
            <div className="text-5xl text-white poppins font-semibold">
              Contact Us
            </div>
            <div className="text-white mt-6">
              <span>Home</span> {">"} <span>Contact</span>
            </div>
          </div>
        </section>

        <section className="py-32 px-4">
          <div className="w-full relative h-96">
            <Image
              layout="fill"
              src="/contact.png"
              className="w-full"
              alt="contact"
              objectFit="cover"
              objectPosition="center"
            />
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
              <div className="absolute bottom-7 right-20 w-6 h-6">
                <Image
                  layout="fill"
                  src="/contacttriangle.png"
                  alt="triangle"
                />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
