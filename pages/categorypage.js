import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import MenuToggler from "../components/MenuToggler";
import Navigation from "../components/Navigation";

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

function categorypage() {
  // const [isOpen, toggleOpen] = useCycle(false, true);
  // console.log({ isOpen });
  return (
    <>
      <Head>
        <title>Archives - TITTA</title>
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
        <header className="w-full px-4 py-2 flex justify-between items-center fixed z-50 top-0 bg-white shadow">
          <div className="header--logo w-[145px]">
            <img className="w-full" src="../tittablue.png" alt="" />
          </div>
          {}
          {/* <motion.nav
            animate={isOpen ? "open" : "closed"}
            initial={false}
            className="absolute top-0 right-0 bottom-0 w-[300px]"
          >
            <motion.div
              className="background bg-white absolute top-0 right-0 bottom-0 h-screen w-[300px]"
              variants={sidebarVariants}
            />
            <MenuToggler toggle={() => toggleOpen()} />
            <Navigation
              items={[
                "Home",
                "About",
                "Services",
                "Blog",
                "Portfolio",
                "Contact",
              ]}
            />
          </motion.nav> */}
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
            <div className="thumbnail w-full">
              <img src="why.png" className="w-full" alt="" />
            </div>
          </div>
          <div className="post flex flex-col gap-y-4">
            <div className="poppins text-[#000] opacity-60">WEB DESIGN</div>
            <div className="text-[#363636] font-bold text-2xl">
              Why you need a &quot;Why&quot; in design
            </div>
            <div className="thumbnail w-full">
              <img src="why.png" className="w-full" alt="" />
            </div>
          </div>
          <div className="post flex flex-col gap-y-4">
            <div className="poppins text-[#000] opacity-60">WEB DESIGN</div>
            <div className="text-[#363636] font-bold text-2xl">
              Why you need a &quot;Why&quot; in design
            </div>
            <div className="thumbnail w-full">
              <img src="why.png" className="w-full" alt="" />
            </div>
          </div>
        </section>
        <footer className="footer pt-32 px-4 w-full">
          <div className=" grid grid-cols-1 sm:grid-cols-2 mx-auto lg:justify-items-between lg:items-start lg:grid-cols-4 lg:pt-28 gap-x-6 sm:max-w-6xl gap-y-14">
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
                Company
              </div>
              <div className="">Home</div>
              <div className="">About Us</div>
              <div className="">Services</div>
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
          </div>
          <section className="sm:max-w-6xl mx-auto cprght border-t-[#515dbb] border-t mt-24 py-6 text-center  text-[#a7b4df] text-sm">
            2022 TITTA. All Rights Reserved.
          </section>
        </footer>
      </main>
    </>
  );
}

export default categorypage;
