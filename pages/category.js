import { motion, useCycle } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import Footer from "../components/Footer";
import MenuToggler from "../components/MenuToggler";
import Navbar from "../components/Navbar";
import Navigation from "../components/Navigation";
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

function Category() {
  const [isOpen, setToggleOpen] = useCycle(false, true);

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

        <section className="pt-36 px-4">
          <div className="poppins text-5xl text-[#363636]  relative z-10 leading-tight opacity-75">
            Categories Archives: <span className="rgba">Web Design</span>
          </div>
        </section>
        <section className="pt-12 flex flex-col gap-y-12 px-4 pb-32">
          <div className="post flex flex-col gap-y-4">
            <div className="poppins text-[#000] opacity-60">WEB DESIGN</div>
            <div className="text-[#363636] font-bold text-2xl">
              Why you need a &quot;Why&quot; in design
            </div>
            <div className="thumbnail w-full relative h-[500px]">
              <Image
                layout="fill"
                src="/why.png"
                className="w-full"
                alt="why"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </div>
          <div className="post flex flex-col gap-y-4">
            <div className="poppins text-[#000] opacity-60">WEB DESIGN</div>
            <div className="text-[#363636] font-bold text-2xl">
              Why you need a &quot;Why&quot; in design
            </div>
            <div className="thumbnail w-full relative h-[500px]">
              <Image
                layout="fill"
                src="/why.png"
                className="w-full"
                alt="why"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </div>
          <div className="post flex flex-col gap-y-4">
            <div className="poppins text-[#000] opacity-60">WEB DESIGN</div>
            <div className="text-[#363636] font-bold text-2xl">
              Why you need a &quot;Why&quot; in design
            </div>
            <div className="thumbnail w-full relative h-[500px]">
              <Image
                layout="fill"
                src="/why.png"
                className="w-full"
                alt="why"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default Category;
