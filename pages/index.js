import { motion, useCycle } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import MenuToggler from "../components/MenuToggler";
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
// poppins - 500, 600, 700 - heading-font
//nunito - 400, 600, 700 -body-font

const Home = () => {
  // const [isOpen, toggleOpen] = useCycle(false, true);
  // console.log({ isOpen });
  return (
    <>
      <Head>
        <title>Home - TITTA</title>
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
        <header className="w-full px-4 py-2 flex justify-between items-center absolute z-50 top-0 bg-transparent">
          <div className="header--logo w-[145px]">
            <img className="w-full" src="../titawhite.png" alt="" />
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
        {/* <section className="hero -top-20 absolute w-screen h-screen md:h-screen overflow-visible ">
      <div className="banner w-full h-full"></div>
    </section> */}
        <section className="hero z-10 text-white w-[100vw] h-[110vh] relative  banner 2xl:h-[80vh]">
          <motion.div
            transition={{
              y: {
                duration: 2,
                yoyo: Infinity,
                ease: "easeOut",
              },
            }}
            animate={{ y: ["100%", "-100%"] }}
            className="particle1 w-[2px] md:w-[5px] absolute top-[18rem] -z-10 md:top-[22rem] left-[1rem] md:left-[5rem]"
          >
            <img src="../particle.png" alt="" />
          </motion.div>
          <motion.div
            transition={{
              y: {
                duration: 1.8,
                yoyo: Infinity,
                ease: "easeOut",
              },
            }}
            animate={{ y: ["100%", "-100%"] }}
            className="particle3 absolute top-[24rem] -z-10 w-[2px] md:w-[5px] md:top-[32rem] right-[4rem] md:right-[67rem]"
          >
            <img src="../particle.png" alt="" />
          </motion.div>
          <motion.div
            transition={{
              y: {
                duration: 1.8,
                yoyo: Infinity,
                ease: "easeOut",
              },
            }}
            animate={{ y: ["100%", "-100%"] }}
            className="particle4 absolute w-[2px] md:w-[5px] top-[6rem] md:top-[22rem] -z-10 right-[3rem] md:right-[19rem]"
          >
            <img src="../particle.png" alt="" />
          </motion.div>
          <div className="hero-content w-full flex flex-col items-center sm:flex-row sm:justify-between sm:items-center mx-auto md:max-w-6xl  gap-y-12 px-4 md:px-0">
            <div className="sm:pl-4 left-content h-full w-full mt-[6.2rem] sm:mt-[7.5rem] md:mt-[9rem] justify-center md:gap-y-5 flex flex-col items-center sm:items-start sm:text-left text-center gap-4 sm:mr-6">
              <div className="font-heading1 ">
                Technology & Software Development
              </div>
              <div className="font-heading2 sm:leading-relaxed xl:text-[3rem]">
                Building and Creating IT Solutions
              </div>
              <div className="font-body sm:text-left xl:text-base xl:leading-relaxed">
                We are committed to offering professional services with current
                technologies backed by years of experience.
              </div>
              <div className="btn-grp flex items-center gap-4">
                <a
                  href="https://wa.me/message/KOBQXC4TEH5DP1"
                  className="text-white text-base  bg-linear font-bold "
                >
                  Get Started
                </a>
                {/* <button className="bg-white text-base font-bold bg-outline">
                  How we work
                </button> */}
              </div>
            </div>
            <div className="banner-person-animation relative max-w-[22rem] sm:max-w-md sm:mr-6 md:max-w-lg  sm:self-center w-full md:-mt-[19rem] sm:-mt-40">
              <div className="w-full absolute top-0 z-20">
                <img
                  src="../banner-person1.png"
                  className="w-full"
                  alt="banner person"
                />
              </div>
              <motion.div
                initial={{ rotate: 0 }}
                animate={{
                  rotate: 360,
                }}
                transition={{ duration: 6, repeat: Infinity, repeatDelay: 0 }}
                className="bannerblob1 absolute top-0 z-10 w-full"
              >
                <img
                  className="w-full"
                  src="../banner-blob-orange.png"
                  alt=""
                />
              </motion.div>
              <motion.div
                initial={{ rotate: 0 }}
                animate={{
                  rotate: 360,
                }}
                transition={{ duration: 6, repeat: Infinity, repeatDelay: 0 }}
                className="bannerblob2 absolute top-0 z-0 w-full"
              >
                <img className="w-full" src="../banner-blob-blue.png" alt="" />
              </motion.div>
            </div>
          </div>
        </section>
        <section className="background-overlay-2 pt-28 pb-16 mx-auto w-full flex flex-col relative items-center gap-y-5 text-center px-4 ">
          <div className="background-overlay-22 h-[100vh] w-screen -z-10 -bottom-[10rem] absolute left-0"></div>
          <h3 className="font-heading1 text-[#104cba] poppins font-semibold">
            Featured Services
          </h3>
          <div className="poppins text-4xl md:text-4xl leading-relaxed font-semibold">
            Engaging Creative Minds Via Technology
          </div>
          <div className="cards  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 place-items-center mt-5 md:max-w-6xl">
            <div className="card px-4 max-w-md bg-white w-full pt-8 pb-12 rounded shadow-2xl">
              <div className="">
                <img src="../illustration1.jpg" alt="" />
              </div>
              <div className="font-semibold poppins md:text-xl   text-[#010101] text-lg mt-6 ">
                Creative Idea
              </div>
              <div className="mt-2 text-sm md:text-base text-[#696969] max-w-xs leading-relaxed">
                Whether for websites or applications, our designs will always
                show unique ingenuity.
              </div>
            </div>
            <div className="card px-4 max-w-md bg-white w-full pt-8 pb-12 rounded shadow-2xl">
              <div className="">
                <img src="../illustration2.jpg" alt="" />
              </div>
              <div className="font-semibold poppins md:text-xl  text-[#010101] text-lg mt-6 ">
                Successful Project
              </div>
              <div className="mt-2 text-sm md:text-base text-[#696969] max-w-xs leading-relaxed">
                We have several projects completed with satisfactory reviews
                from clients.
              </div>
            </div>
            <div className="card px-4 max-w-md bg-white w-full pt-8 pb-12 rounded shadow-2xl">
              <div className="">
                <img src="../illustration3.jpg" alt="" />
              </div>
              <div className="font-semibold poppins md:text-xl  text-[#010101] text-lg mt-6 ">
                Professionalism
              </div>
              <div className="mt-2 text-sm md:text-base text-[#696969] max-w-xs leading-relaxed">
                Working with us will leave your with nothing less than
                professional jobs done alongside our excellent work ethics.
              </div>
            </div>

            {/* #7A7A7A; */}
          </div>
        </section>
        <section className="pt-16 pb-28 md:pb-0 mx-auto w-full px-4 md:max-w-6xl md:px-0 md:grid md:grid-cols-2 md:place-items-between">
          <div className="left-content flex flex-col relative items-start gap-y-5 text-start md:max-w-lg">
            <div className="font-heading1 text-[#104cba] poppins font-semibold">
              Core Features
            </div>
            <div className="poppins text-3xl md:text-4xl md:leading-[1.4] leading-relaxed text-[#000] font-bold">
              We're A Software Company That Provides Solutions.
            </div>
            <div className="text-[#696969] mt-2">
              Passages of available, but the majority have suffered alteration
              in some form, by injected humour, or randomised words.
            </div>
            <div className="segments mt-3 w-full">
              <div className="segment flex justify-between items-start w-full">
                <div className="icon1 w-[20%] md:w-[15%]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 37 36"
                    width="37"
                    height="36"
                  >
                    <defs>
                      <linearGradient
                        id="grd1"
                        gradientUnits="userSpaceOnUse"
                        x1="0"
                        y1="32.981"
                        x2="37"
                        y2="3.019"
                      >
                        <stop offset="0" stopColor="#ff3834"></stop>
                        <stop offset="1" stopColor="#ff9732"></stop>
                      </linearGradient>
                    </defs>
                    <path
                      id="Shape 1"
                      className="shp0"
                      d="M0 14.69L0 36L7.69 36L7.69 14.69L0 14.69ZM6.21 34.54L1.48 34.54L1.48 16.15L6.21 16.15L6.21 34.54ZM9.77 22.2L9.77 36L17.46 36L17.46 22.2L9.77 22.2ZM15.98 34.54L11.25 34.54L11.25 23.66L15.98 23.66L15.98 34.54ZM19.54 9.25L19.54 36L27.23 36L27.23 9.25L19.54 9.25ZM25.75 34.54L21.02 34.54L21.02 10.71L25.75 10.71L25.75 34.54ZM29.31 0L29.31 36L37 36L37 0L29.31 0ZM35.52 34.54L30.79 34.54L30.79 1.46L35.52 1.46L35.52 34.54Z"
                    ></path>
                  </svg>
                </div>
                <div className="content w-[80%] md:w-[85%]">
                  <div className="topic text-[#010101] poppins font-semibold text-lg md:text-xl ">
                    Soft Engineering
                  </div>
                  <div className="body-segment text-[#696969] mt-3 md:mt-4">
                    Simply dummy text of the and typesetting has been the
                    industry's standard dummy text
                  </div>
                </div>
              </div>
              <div className="segment flex w-full justify-between items-start mt-9">
                <div className="icon2 w-[20%] md:w-[15%]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="98"
                    height="110"
                    viewBox="0 0 98 110"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M52.0906 1.80432V18.9453C52.0906 19.9418 51.2827 20.7497 50.2863 20.7497C49.2898 20.7497 48.4819 19.9418 48.4819 18.9453V1.80432C48.4819 0.80789 49.2898 0 50.2863 0C51.2827 0 52.0906 0.80789 52.0906 1.80432ZM65.6228 10.8258V18.9452C65.6228 19.9417 64.8149 20.7495 63.8185 20.7495C62.822 20.7495 62.0142 19.9417 62.0142 18.9452V10.8258C62.0142 9.82937 62.822 9.02148 63.8185 9.02148C64.8149 9.02148 65.6228 9.82937 65.6228 10.8258ZM38.5583 18.9452V10.8258C38.5583 9.82937 37.7505 9.02148 36.754 9.02148C35.7576 9.02148 34.9497 9.82937 34.9497 10.8258V18.9452C34.9497 19.9417 35.7576 20.7495 36.754 20.7495C37.7505 20.7495 38.5583 19.9417 38.5583 18.9452ZM50.2862 76.3473C35.8358 76.3473 24.1218 64.6333 24.1218 50.1829C24.1386 35.7396 35.8428 24.0344 50.2862 24.0186C64.7366 24.0186 76.4505 35.7325 76.4505 50.1829C76.4505 64.6333 64.7366 76.3473 50.2862 76.3473ZM72.8419 50.1829C72.8419 37.7254 62.7437 27.6272 50.2862 27.6272C37.8348 27.6413 27.7446 37.7315 27.7305 50.1829C27.7305 62.6405 37.8286 72.7386 50.2862 72.7386C62.7437 72.7386 72.8419 62.6405 72.8419 50.1829ZM85.3453 80.7953L71.2112 87.4734C69.2597 83.8436 65.5163 81.5336 61.3967 81.4173L48.3488 81.0588C46.2829 80.9997 44.2556 80.4764 42.4187 79.5276L41.091 78.8395C34.2931 75.296 26.1904 75.3049 19.3996 78.8624L19.4824 75.8546C19.5097 74.8582 18.7247 74.0283 17.7283 74.001L3.42062 73.6071C2.42419 73.5798 1.59516 74.3648 1.56785 75.3612L0.703572 106.759C0.676261 107.755 1.46124 108.585 2.45767 108.612L16.7653 109.006H16.8147C17.7926 109.006 18.5926 108.228 18.619 107.251L18.6604 105.749L22.3774 103.759C23.8364 102.974 25.542 102.787 27.1358 103.238L49.332 109.468C49.3708 109.479 49.4096 109.488 49.4492 109.497C51.0535 109.833 52.6887 110.001 54.3274 110C57.7986 110.002 61.2293 109.254 64.3842 107.805C64.4617 107.77 64.5366 107.729 64.6079 107.682L96.7905 86.8655C97.5922 86.3466 97.8513 85.2938 97.3817 84.4621C94.9924 80.2227 89.6931 78.6078 85.3453 80.7953ZM4.36066 105.055L5.12538 77.2642L15.8253 77.5585L15.0606 105.35L4.36066 105.055ZM62.7587 104.583C58.8391 106.352 54.4613 106.84 50.2483 105.979L28.1119 99.7653C25.6204 99.0614 22.9536 99.353 20.6744 100.579L18.7749 101.596L19.2833 83.1186C25.3024 79.1152 33.0218 78.7038 39.4321 82.0437L40.7598 82.7318C43.0804 83.93 45.6397 84.5907 48.2502 84.6665L61.2989 85.0251C64.9639 85.1308 68.0765 87.7404 68.8201 91.3314L49.384 90.7948C48.3876 90.7675 47.5586 91.5534 47.5304 92.549C47.5031 93.5454 48.2889 94.3753 49.2845 94.4026L70.7336 94.9929H70.7839C71.7609 94.992 72.56 94.2141 72.5864 93.2379C72.6084 92.4538 72.5503 91.6688 72.412 90.897L86.9091 84.0472C86.9232 84.041 86.9373 84.0339 86.9514 84.0269C89.0076 82.9864 91.4939 83.3344 93.1854 84.9L62.7587 104.583ZM49.8176 60.012C50.0238 59.9812 50.2326 59.9891 50.4361 60.0332C52.6668 59.9521 54.4218 58.0985 54.3804 55.8669C54.3399 53.6352 52.5188 51.8477 50.2864 51.8477C46.4266 51.8485 43.1625 48.9932 42.6497 45.1678C42.137 41.3424 44.5333 37.7276 48.2565 36.711V34.9586C48.2565 33.9622 49.0644 33.1543 50.0608 33.1543C51.0572 33.1543 51.8651 33.9622 51.8651 34.9586V36.6008C55.4324 37.3532 57.9864 40.4976 57.9917 44.1432C57.9917 45.1396 57.1838 45.9475 56.1874 45.9475C55.191 45.9475 54.3831 45.1396 54.3831 44.1432C54.3831 41.8807 52.5488 40.0465 50.2864 40.0465C48.0239 40.0465 46.1896 41.8807 46.1896 44.1432C46.1896 46.4056 48.0239 48.2399 50.2864 48.2399C54.2342 48.2408 57.5424 51.2248 57.9494 55.1515C58.3556 59.0782 55.7293 62.6771 51.8651 63.4859V65.1809C51.8651 66.1774 51.0572 66.9853 50.0608 66.9853C49.0644 66.9853 48.2565 66.1774 48.2565 65.1809V63.3766C44.9086 62.4577 42.5863 59.4165 42.581 55.9444C42.581 54.948 43.3889 54.1401 44.3853 54.1401C45.3817 54.1401 46.1896 54.948 46.1896 55.9444C46.1932 58.0236 47.7517 59.7715 49.8176 60.012Z"
                      fill="url(#paint0_linear)"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="36.754"
                        y1="9.02148"
                        x2="36.754"
                        y2="106.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.0377767" stopColor="#52B9FB"></stop>
                        <stop offset="0.775712" stopColor="#2472E1"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="content w-[80%] md:w-[85%]">
                  <div className="topic text-[#010101] poppins font-semibold text-lg md:text-xl ">
                    Affordable Prices
                  </div>
                  <div className="body-segment text-[#696969] mt-3 md:mt-4">
                    Simply dummy text of the and typesetting has been the
                    industry's standard dummy text
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="btn text-white text-lg mt-6 bg-linear font-bold">
              Discover More
            </div> */}
          </div>
          <div className="right-content mt-1 md:mt-0">
            <img src="../features.png" alt="" />
          </div>
        </section>
        {/*Promo Section*/}
        <section className="promo w-full md:max-w-6xl mx-auto md:rounded md:relative md:-bottom-[5.5rem] shadow-xl">
          <div className="cont px-4 py-14 md:flex md:items-center">
            <div className="left-content text-center md:text-left md:w-[75%] md:ml-12">
              <div className="poppins font-semibold text-4xl leading-relaxed ">
                Let's Start A Cool Project With TITTA!
              </div>
              <div className="mt-2">
                We Provide Best Solution For Your Business
              </div>
            </div>
            <div className="right-content mt-3 md:mt-0 text-center w-full md:w-[25%]">
              <a
                href="https://wa.me/message/KOBQXC4TEH5DP1"
                className="btn text-white text-lg mt-6 block bg-linear font-bold w-[180px] mx-auto"
              >
                Start a Project
              </a>
            </div>
          </div>
        </section>

        <section className="bg-another pt-32 md:pt-64 pb-24 text-white md:flex md:justify-center md:gap-x-6 w-full">
          <div className="stuff w-full px-4 md:max-w-6xl md:px-0 md:grid md:grid-cols-2  md:place-items-center">
            <div className="left-content text-center flex flex-col  sm:flex-row  px-4 sm:gap-x-5 gap-y-7">
              <div className="cards1 flex flex-col gap-7 sm:mt-4">
                <div className="card py-6 flex flex-col items-center gap-y-3 bg-another-cards rounded">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="#ffffff"
                        d="M16.006 16h-3.506c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h3.506c1.651 0 2.994-1.343 2.994-2.994s-1.343-2.994-2.994-2.994c-0.352 0-0.696 0.060-1.023 0.179-0.218 0.079-0.462-0.002-0.589-0.196s-0.104-0.45 0.056-0.618c0.355-0.373 0.55-0.862 0.55-1.377 0-1.103-0.897-2-2-2-0.642 0-1.229 0.297-1.61 0.814-0.229 0.31-0.362 0.677-0.386 1.061-0.013 0.212-0.159 0.393-0.364 0.451s-0.423-0.021-0.545-0.195l-0.005-0.007c-0.107-0.152-0.226-0.302-0.351-0.442-0.949-1.068-2.312-1.681-3.74-1.681-2.757 0-5 2.243-5 5s2.243 5 5 5h2.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-2.5c-3.308 0-6-2.692-6-6s2.692-6 6-6c1.603 0 3.137 0.643 4.261 1.775 0.087-0.195 0.196-0.381 0.324-0.555 0.564-0.764 1.467-1.22 2.415-1.22 1.654 0 3 1.346 3 3 0 0.351-0.061 0.694-0.176 1.017 0.061-0.003 0.122-0.004 0.183-0.004 2.202 0 3.994 1.792 3.994 3.994s-1.792 3.994-3.994 3.994z"
                      ></path>
                      <path
                        fill="#ffffff"
                        d="M12.854 12.146l-2-2c-0.195-0.195-0.512-0.195-0.707 0l-2 2c-0.195 0.195-0.195 0.512 0 0.707s0.512 0.195 0.707 0l1.146-1.146v3.793c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-3.793l1.146 1.146c0.098 0.098 0.226 0.146 0.354 0.146s0.256-0.049 0.354-0.146c0.195-0.195 0.195-0.512 0-0.707z"
                      ></path>
                    </svg>
                  </div>
                  <div className="poppins text-lg mt-2">Innovative Ideas</div>
                  <div className="text-[#a1a1a1]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Laudantium?
                  </div>
                </div>
                <div className="card py-6 flex flex-col items-center gap-y-3 bg-another-cards">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill=""
                        d="M17.5 20h-16c-0.827 0-1.5-0.673-1.5-1.5v-16c0-0.827 0.673-1.5 1.5-1.5h16c0.827 0 1.5 0.673 1.5 1.5v16c0 0.827-0.673 1.5-1.5 1.5zM1.5 2c-0.276 0-0.5 0.224-0.5 0.5v16c0 0.276 0.224 0.5 0.5 0.5h16c0.276 0 0.5-0.224 0.5-0.5v-16c0-0.276-0.224-0.5-0.5-0.5h-16z"
                      ></path>
                      <path
                        fill=""
                        d="M6.5 17h-2c-0.276 0-0.5-0.224-0.5-0.5v-9c0-0.276 0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5v9c0 0.276-0.224 0.5-0.5 0.5zM5 16h1v-8h-1v8z"
                      ></path>
                      <path
                        fill=""
                        d="M10.5 17h-2c-0.276 0-0.5-0.224-0.5-0.5v-12c0-0.276 0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5v12c0 0.276-0.224 0.5-0.5 0.5zM9 16h1v-11h-1v11z"
                      ></path>
                      <path
                        fill=""
                        d="M14.5 17h-2c-0.276 0-0.5-0.224-0.5-0.5v-5c0-0.276 0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5v5c0 0.276-0.224 0.5-0.5 0.5zM13 16h1v-4h-1v4z"
                      ></path>
                    </svg>
                  </div>
                  <div className="poppins text-lg mt-2">UI Experience</div>
                  <div className="text-[#a1a1a1]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Laudantium?
                  </div>
                </div>
              </div>
              <div className="cards2 flex flex-col gap-7 sm:mt-8">
                <div className="card py-6 flex flex-col items-center gap-y-3 bg-another-cards">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="#ffffff"
                        d="M7.631 19.702c-0.041 0-0.083-0.005-0.125-0.016-0.898-0.231-1.761-0.587-2.564-1.059-0.233-0.137-0.315-0.434-0.186-0.671 0.159-0.292 0.243-0.622 0.243-0.957 0-1.103-0.897-2-2-2-0.334 0-0.665 0.084-0.957 0.243-0.237 0.129-0.534 0.047-0.671-0.186-0.472-0.804-0.828-1.666-1.059-2.564-0.065-0.254 0.077-0.515 0.325-0.598 0.814-0.274 1.362-1.036 1.362-1.895s-0.547-1.621-1.362-1.895c-0.248-0.084-0.39-0.344-0.325-0.598 0.231-0.898 0.587-1.761 1.059-2.564 0.137-0.233 0.434-0.315 0.671-0.186 0.291 0.159 0.622 0.243 0.957 0.243 1.103 0 2-0.897 2-2 0-0.334-0.084-0.665-0.243-0.957-0.129-0.237-0.047-0.534 0.186-0.671 0.804-0.472 1.666-0.828 2.564-1.059 0.254-0.065 0.515 0.077 0.598 0.325 0.274 0.814 1.036 1.362 1.895 1.362s1.621-0.547 1.895-1.362c0.084-0.248 0.345-0.39 0.598-0.325 0.898 0.231 1.761 0.587 2.564 1.059 0.233 0.137 0.315 0.434 0.186 0.671-0.159 0.292-0.243 0.622-0.243 0.957 0 1.103 0.897 2 2 2 0.334 0 0.665-0.084 0.957-0.243 0.237-0.129 0.534-0.047 0.671 0.186 0.472 0.804 0.828 1.666 1.059 2.564 0.065 0.254-0.077 0.515-0.325 0.598-0.814 0.274-1.362 1.036-1.362 1.895s0.547 1.621 1.362 1.895c0.248 0.084 0.39 0.344 0.325 0.598-0.231 0.898-0.587 1.761-1.059 2.564-0.137 0.233-0.434 0.315-0.671 0.186-0.292-0.159-0.622-0.243-0.957-0.243-1.103 0-2 0.897-2 2 0 0.334 0.084 0.665 0.243 0.957 0.129 0.237 0.047 0.534-0.186 0.671-0.804 0.472-1.666 0.828-2.564 1.059-0.254 0.065-0.515-0.077-0.598-0.325-0.274-0.814-1.036-1.362-1.895-1.362s-1.621 0.547-1.895 1.362c-0.070 0.207-0.264 0.341-0.474 0.341zM10 17c1.127 0 2.142 0.628 2.655 1.602 0.52-0.161 1.026-0.369 1.51-0.622-0.108-0.314-0.164-0.646-0.164-0.98 0-1.654 1.346-3 3-3 0.334 0 0.666 0.056 0.98 0.164 0.253-0.484 0.462-0.989 0.622-1.51-0.974-0.512-1.602-1.527-1.602-2.655s0.628-2.142 1.602-2.655c-0.161-0.52-0.369-1.026-0.622-1.51-0.314 0.108-0.646 0.164-0.98 0.164-1.654 0-3-1.346-3-3 0-0.334 0.056-0.666 0.164-0.98-0.484-0.253-0.989-0.462-1.51-0.622-0.512 0.974-1.527 1.602-2.655 1.602s-2.142-0.628-2.655-1.602c-0.52 0.16-1.026 0.369-1.51 0.622 0.108 0.314 0.164 0.646 0.164 0.98 0 1.654-1.346 3-3 3-0.334 0-0.666-0.056-0.98-0.164-0.253 0.484-0.462 0.989-0.622 1.51 0.974 0.512 1.602 1.527 1.602 2.655s-0.628 2.142-1.602 2.655c0.16 0.52 0.369 1.026 0.622 1.51 0.314-0.108 0.646-0.164 0.98-0.164 1.654 0 3 1.346 3 3 0 0.334-0.056 0.666-0.164 0.98 0.484 0.253 0.989 0.462 1.51 0.622 0.512-0.974 1.527-1.602 2.655-1.602z"
                      ></path>
                      <path
                        fill="#ffffff"
                        d="M10 13c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zM10 8c-1.103 0-2 0.897-2 2s0.897 2 2 2c1.103 0 2-0.897 2-2s-0.897-2-2-2z"
                      ></path>
                    </svg>
                  </div>
                  <div className="poppins text-lg mt-2">
                    Highly Customizable
                  </div>
                  <div className="text-[#a1a1a1]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Laudantium?
                  </div>
                </div>
                <div className="card py-6 flex flex-col items-center gap-y-3 bg-another-cards">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="#ffffff"
                        d="M17.854 5.646l-4.5-4.5c-0.094-0.094-0.221-0.146-0.354-0.146h-9.5c-0.827 0-1.5 0.673-1.5 1.5v16c0 0.827 0.673 1.5 1.5 1.5h13c0.827 0 1.5-0.673 1.5-1.5v-12.5c0-0.133-0.053-0.26-0.146-0.354zM16.793 6h-3.293c-0.276 0-0.5-0.224-0.5-0.5v-3.293l3.793 3.793zM16.5 19h-13c-0.276 0-0.5-0.224-0.5-0.5v-16c0-0.276 0.224-0.5 0.5-0.5h8.5v3.5c0 0.827 0.673 1.5 1.5 1.5h3.5v11.5c0 0.276-0.224 0.5-0.5 0.5z"
                      ></path>
                      <path
                        fill="#ffffff"
                        d="M11.5 13h-2.5v-2.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v2.5h-2.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h2.5v2.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-2.5h2.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5z"
                      ></path>
                    </svg>
                  </div>
                  <div className="poppins text-lg mt-2">Time Management</div>
                  <div className="text-[#a1a1a1]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Laudantium?
                  </div>
                </div>
              </div>
            </div>
            <div className="right-content mt-14 md:mt-14 text-white flex flex-col gap-y-5 px-4 sm:max-w-lg">
              <div className="font-heading1 text-[#104cba] poppins font-semibold">
                Featured Services
              </div>
              <div className="poppins text-4xl md:text-4xl md:leading-[1.4] leading-relaxed font-semibold">
                We Are Creative In Design & Development
              </div>
              <div className="grp flex flex-col gap-y-10">
                <div className="single1 md:flex md:w-full">
                  <div className="checkmark md:w-[12%] md:mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="56"
                      height="41"
                      viewBox="0 0 56 41"
                      fill="none"
                    >
                      <path
                        d="M3 19L20.5 36L52.5 3"
                        stroke="url(#paint3_linear)"
                        strokeWidth="7"
                      ></path>
                      <defs>
                        <linearGradient
                          id="paint3_linear"
                          x1="7"
                          y1="41"
                          x2="59"
                          y2="3"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FF3834"></stop>
                          <stop offset="0.905999" stopColor="#FF7133"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="right-content mt-2 md:mt-0 ml-auto">
                    <div className="title font-semibold poppins">
                      Set Everything Up In Minutes
                    </div>
                    <div className="title text-[#a1a1a1] mt-4">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Ex nesciunt ipsam placeat voluptatibus distinctio illum.
                    </div>
                  </div>
                </div>
                <div className="single2 md:flex md:w-full">
                  <div className="checkmark md:w-[12%] md:mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="56"
                      height="41"
                      viewBox="0 0 56 41"
                      fill="none"
                    >
                      <path
                        d="M3 19L20.5 36L52.5 3"
                        stroke="url(#paint3_linear)"
                        strokeWidth="7"
                      ></path>
                      <defs>
                        <linearGradient
                          id="paint3_linear"
                          x1="7"
                          y1="41"
                          x2="59"
                          y2="3"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FF3834"></stop>
                          <stop offset="0.905999" stopColor="#FF7133"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="right-content mt-2 md:mt-0">
                    <div className="title poppins font-semibold">
                      A Seamless UI Experience
                    </div>
                    <div className="title text-[#a1a1a1] mt-4">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Ex nesciunt ipsam placeat voluptatibus distinctio illum.
                    </div>
                  </div>
                </div>
                {/* <div className="btn text-white text-lg bg-linear font-bold w-[180px]">
                  Discover More
                </div> */}
              </div>
            </div>
          </div>
        </section>

        {/* Technology Solutions Section */}
        {/* <div className="elementor-widget-container"> */}
        {/* <img width="211" height="113" src="https://softek.radiantthemes.com/wp-content/uploads/2021/07/16-7.png" className="attachment-full size-full" alt="cloud1" loading="lazy" data-no-retina=""> </div> */}
        {/* cloud2
     <div className="elementor-widget-container">
<img width="201" height="129" src="https://softek.radiantthemes.com/wp-content/uploads/2021/07/15-7.png" className="attachment-full size-full" alt="" loading="lazy" data-no-retina=""> </div>        */}

        <section className="tech-sol-section pt-32 pb-20 md:pb-24 w-full relative">
          <div className="bg-overlay w-full h-full"></div>
          <div className="content w-full mx-auto text-center px-4 flex flex-col items-center">
            <div className="font-heading1 text-[#104cba] poppins font-semibold">
              Technology Solutions
            </div>
            <div className="poppins text-4xl md:text-4xl leading-relaxed font-semibold my-4 md:my-6">
              We Provide Software & IT Solutions
            </div>
            <div className="text-[#696969] mb-24 md:max-w-3xl leading-relaxed mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              quasi nam ipsum placeat at incidunt, adipisci laborum sapiente
              vero corrupti repellendus deleniti veniam.
            </div>
            <div className="illustration relative ">
              <div className="">
                <div className="cloud1 absolute -top-24 md:-top-38 left-0 md:-left-48 z-0">
                  <img src="../cloud1.png" alt="" />
                </div>
                <div className="dot-red absolute top-2 md:top-[24rem] md:z-0 left-0 md:left-[-9.5rem] -z-10">
                  <img src="../dot-red.png" alt="" />
                </div>
                <div className="dot-black absolute top-24 md:top-[23.5rem] right-2 md:right-[-13.5rem] z-0">
                  <img src="../dot-black.png" alt="" />
                </div>
                <div className="cloud2 absolute -top-8 md:top-[-3.1rem] right-2 md:right-[-13.5rem] md:z-0 -z-10">
                  <img src="../cloud2.png" alt="" />
                </div>
              </div>
              <div className="illus-img relative">
                <img
                  src="../illustationNew.png"
                  alt="illustration"
                  width="732"
                  height="500"
                />
              </div>
            </div>

            <div className="cards relative mt-28 grid grid-cols-1 sm:grid-cols-2 place-items-center gap-8 md:max-w-6xl">
              <div className="card transition duration-300 px-4 bg-white w-full py-9 flex flex-col justify-center items-center gap-y-2 rounded shadow-2xl text-center ">
                <div className="bag-icon -mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xlink="http://www.w3.org/1999/xlink"
                    id="Layer_1"
                    height="100"
                    width="100"
                    x="0px"
                    y="0px"
                    viewBox="0 0 492.313 492.313"
                    style={{ enableBackground: "new 0 0 492.313 492.313" }}
                    space="preserve"
                  >
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path
                          d="M352.005,107.714V78.56c0-21.721-17.663-39.385-39.385-39.385H179.692c-21.716,0-39.385,17.663-39.385,39.385v29.154H0    v345.423h492.313V107.714H352.005z M160,78.56c0-10.856,8.832-19.692,19.692-19.692H312.62c10.856,0,19.692,8.837,19.692,19.692    v29.154H160V78.56z M472.62,433.445H19.692V207.368l63.721,83.413c7.413,9.692,19.111,15.471,31.298,15.471h100.755v5.827    c0,16.923,13.764,30.683,30.688,30.683c16.918,0,30.688-13.76,30.688-30.683v-5.827h100.76c12.192,0,23.885-5.789,31.298-15.471    l63.721-83.413V433.445z M235.159,312.079v-34.462h21.99v34.462c0,6.058-4.933,10.99-10.995,10.99    S235.159,318.137,235.159,312.079z M472.62,174.915L393.245,278.82c-3.702,4.846-9.548,7.74-15.644,7.74h-100.76v-28.635h-61.375    v28.635H114.712c-6.096,0-11.947-2.894-15.649-7.74l-79.37-103.899v-47.514h120.615h211.697H472.62V174.915z"
                          fill="#6329af"
                        ></path>{" "}
                      </g>
                    </g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                  </svg>
                </div>
                <div className="font-semibold poppins md:text-xl thc text-lg mt-6">
                  Business Collaboration
                </div>
                <div className=" text-base loremt md:text-base text-[#696969] px-5 text-center leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  obcaecati quasi beatae repudiandae.
                </div>
              </div>
              <div className="card transition duration-300 px-4 bg-white w-full py-9 flex flex-col justify-center items-center gap-y-2 rounded shadow-2xl text-center">
                <div className="bag-icon  -mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xlink="http://www.w3.org/1999/xlink"
                    id="Layer_1"
                    height="100"
                    width="100"
                    x="0px"
                    y="0px"
                    viewBox="0 0 492.308 492.308"
                    style={{ enableBackground: "new 0 0 492.308 492.308" }}
                    space="preserve"
                  >
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path
                          d="M492.308,283v-73.692l-53.462-9.115c-4.846-20.413-12.885-39.798-23.971-57.769l31.385-44.279l-52.106-52.106    l-44.279,31.394c-17.99-11.096-37.365-19.144-57.769-23.981L282.99,0h-73.683l-9.115,53.452    c-20.413,4.846-39.798,12.885-57.769,23.971L98.144,46.038L46.038,98.144l31.394,44.279    c-11.096,17.99-19.144,37.365-23.981,57.769L0,209.308V283l53.452,9.106c4.837,20.404,12.885,39.779,23.981,57.769l-31.394,44.279    l52.106,52.106l44.279-31.385c17.971,11.086,37.346,19.125,57.769,23.981l9.115,53.452h73.683l9.115-53.452    c20.423-4.856,39.798-12.894,57.769-23.981l44.279,31.385l52.106-52.106l-31.385-44.279    c11.086-17.962,19.125-37.346,23.971-57.769L492.308,283z M421,281.567c-4.539,22.577-13.356,43.817-26.202,63.135l-3.74,5.635    l29.529,41.644l-28.606,28.606l-41.644-29.529l-5.635,3.74c-19.327,12.846-40.567,21.663-63.135,26.212l-6.625,1.337    l-8.567,50.269h-40.452l-8.567-50.269l-6.625-1.337c-22.567-4.548-43.808-13.365-63.135-26.212l-5.635-3.74l-41.644,29.529    l-28.606-28.606l29.529-41.644l-3.74-5.625c-12.856-19.356-21.663-40.596-26.202-63.144l-1.337-6.625l-50.269-8.558v-40.462    l50.269-8.567l1.337-6.625c4.538-22.548,13.346-43.788,26.202-63.144l3.74-5.625l-29.529-41.644l28.606-28.606l41.644,29.529    l5.635-3.74c19.327-12.846,40.567-21.663,63.135-26.202l6.625-1.337l8.567-50.269h40.452l8.567,50.269l6.625,1.337    c22.548,4.538,43.789,13.346,63.144,26.202l5.625,3.74l41.644-29.529l28.606,28.606l-29.529,41.644l3.74,5.635    c12.846,19.327,21.663,40.567,26.202,63.135l1.336,6.625l50.279,8.567v40.462l-50.279,8.558L421,281.567z"
                          fill="#ff5f34"
                        ></path>{" "}
                      </g>
                    </g>
                    <g>
                      {" "}
                      <g>
                        {" "}
                        <path
                          d="M246.154,139.51c-58.808,0-106.644,47.837-106.644,106.644c0,58.798,47.837,106.635,106.644,106.635    c58.798,0,106.635-47.837,106.635-106.635C352.788,187.346,304.952,139.51,246.154,139.51z M246.154,333.096    c-47.942,0-86.952-39-86.952-86.942s39.01-86.952,86.952-86.952s86.942,39.01,86.942,86.952S294.096,333.096,246.154,333.096z"
                          fill="#ff5f34"
                        ></path>{" "}
                      </g>
                    </g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                  </svg>
                </div>
                <div className="font-semibold poppins md:text-xl  thc text-lg mt-6">
                  Engineering & Services
                </div>
                <div className=" text-base loremt md:text-base text-[#696969] px-5 text-center leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  obcaecati quasi beatae repudiandae.
                </div>
              </div>
              <div className="card transition duration-300 px-4 bg-white w-full py-9 flex flex-col justify-center items-center gap-y-2 rounded shadow-2xl text-center">
                <div className="bag-icon  -mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    height="100"
                    viewBox="0 0 512 512"
                    width="100"
                    data-name="Layer 1"
                  >
                    <path
                      d="m105.916 320.276c5.948 63.877.044 168.331-.016 169.379a6 6 0 0 0 5.99 6.345h153.27a6 6 0 0 0 6-6v-54.62c0-9.695 7.582-17.928 16.929-18.419l51.173.268a44.175 44.175 0 0 0 45.4-44.159v-50.38h49.91a10 10 0 0 0 9.346-13.57l-29.481-77.22a76.058 76.058 0 0 1 -5.017-26.886c-.074-13.273-.142-19.569-.229-21.021a177.738 177.738 0 0 0 -179.483-167.983c-1.534.011-3.067.052-4.6.1-56.08 2.019-106.521 32.39-134.933 81.245a165.4 165.4 0 0 0 -3.9 160.287c1.482 3.7 18.025 45.266 19.641 62.634zm-5.368-216.888a153.244 153.244 0 0 1 51-52.875 147.931 147.931 0 0 1 73.976-22.407c1.416-.047 2.843-.086 4.294-.1q.941-.006 1.882-.006a165.736 165.736 0 0 1 165.51 156.676c.07 1.191.141 8.057.209 20.4a88.025 88.025 0 0 0 5.805 31.106l28.445 74.51h-53.009a6 6 0 0 0 -6 6v56.38a32.174 32.174 0 0 1 -33.1 32.163h-.155l-49.563-.26a5.919 5.919 0 0 0 -.669-.04h-.227a60.65 60.65 0 0 1 -60.186-55.385 6 6 0 1 0 -11.96.98 72.4 72.4 0 0 0 51.118 63.28 30.666 30.666 0 0 0 -8.758 21.57v48.62h-140.949c1.18-23.816 4.829-109.256-.347-164.834-1.84-19.831-19.808-64.4-20.572-66.287q-.11-.27-.244-.527a153.458 153.458 0 0 1 3.5-148.964z"
                      fill="#00ac7d"
                    ></path>
                    <path
                      d="m106.412 129.6a5.994 5.994 0 0 0 7.948-2.972c1.757-3.857 3.749-7.708 5.916-11.44a126.054 126.054 0 0 1 41.9-43.479 120.312 120.312 0 0 1 33.653-14.47 6 6 0 0 0 -3-11.618 132.282 132.282 0 0 0 -37.007 15.91 138.088 138.088 0 0 0 -45.922 47.627c-2.367 4.077-4.541 8.28-6.461 12.494a6 6 0 0 0 2.973 7.948z"
                      fill="#00ac7d"
                    ></path>
                    <path
                      d="m214.783 53.891c.186 0 .374-.009.563-.027 2.459-.229 4.976-.393 7.482-.489a6 6 0 1 0 -.456-11.991c-2.724.1-5.462.283-8.138.532a6 6 0 0 0 .549 11.975z"
                      fill="#00ac7d"
                    ></path>
                    <path
                      d="m214.113 81.043-2.778 16.483a91.665 91.665 0 0 0 -22.311 9.174l-13.772-9.687a6 6 0 0 0 -7.7.664l-19.61 19.61a6 6 0 0 0 -.665 7.695l9.666 13.741a90.175 90.175 0 0 0 -9.154 22.342l-16.481 2.778a6 6 0 0 0 -5 5.917v27.56a6 6 0 0 0 5 5.916l16.486 2.787a91.81 91.81 0 0 0 9.176 22.31l-9.689 13.775a6 6 0 0 0 .664 7.695l19.61 19.61a6 6 0 0 0 7.7.665l13.741-9.666a90.167 90.167 0 0 0 22.343 9.154l2.777 16.472a6 6 0 0 0 5.917 5h27.567a6 6 0 0 0 5.917-5l2.777-16.475a91.806 91.806 0 0 0 22.31-9.175l13.774 9.69a6 6 0 0 0 7.695-.665l19.61-19.61a6 6 0 0 0 .655-7.708l-9.909-14.007a90.007 90.007 0 0 0 9.136-22.325l16.739-2.784a6 6 0 0 0 5.016-5.919v-27.56a6 6 0 0 0 -5-5.916l-16.486-2.784a91.816 91.816 0 0 0 -9.176-22.3l9.689-13.775a6 6 0 0 0 -.663-7.694l-19.61-19.62a6 6 0 0 0 -7.748-.629l-13.726 9.872a89.937 89.937 0 0 0 -22.306-9.13l-2.777-16.481a6 6 0 0 0 -5.917-5h-27.57a6 6 0 0 0 -5.917 5zm8.393 22.4 2.6-15.407h17.424l2.6 15.407a6 6 0 0 0 4.68 4.875 77.387 77.387 0 0 1 25.81 10.568 6 6 0 0 0 6.76-.169l12.818-9.221 12.438 12.444-9.036 12.838a6 6 0 0 0 -.181 6.632 79.912 79.912 0 0 1 10.617 25.876 6 6 0 0 0 4.871 4.68l15.41 2.6v17.405l-15.664 2.606a6 6 0 0 0 -4.887 4.683 77.447 77.447 0 0 1 -10.56 25.811 6 6 0 0 0 .143 6.719l9.268 13.1-12.465 12.464-12.833-9.026a6 6 0 0 0 -6.632-.181 79.943 79.943 0 0 1 -25.887 10.622 6 6 0 0 0 -4.68 4.874l-2.6 15.4h-17.42l-2.6-15.4a6 6 0 0 0 -4.68-4.874 77.607 77.607 0 0 1 -25.809-10.569 6 6 0 0 0 -6.7.136l-12.833 9.026-12.478-12.477 9.027-12.833a6 6 0 0 0 .181-6.632 79.909 79.909 0 0 1 -10.616-25.886 6 6 0 0 0 -4.872-4.68l-15.41-2.605v-17.416l15.407-2.6a6 6 0 0 0 4.875-4.68 77.582 77.582 0 0 1 10.571-25.814 6 6 0 0 0 -.135-6.7l-9.028-12.834 12.475-12.475 12.833 9.028a6 6 0 0 0 6.636.178 79.682 79.682 0 0 1 25.882-10.614 6 6 0 0 0 4.68-4.875z"
                      fill="#00ac7d"
                    ></path>
                    <path
                      d="m198.6 141.788a6 6 0 0 0 8.331 1.612 48.039 48.039 0 1 1 -15.4 16.963 6 6 0 0 0 -10.545-5.728 60.091 60.091 0 1 0 19.229-21.177 6 6 0 0 0 -1.615 8.33z"
                      fill="#00ac7d"
                    ></path>
                    <path
                      d="m263.75 183.28a29.935 29.935 0 1 0 -29.94 29.93 29.974 29.974 0 0 0 29.94-29.93zm-47.87 0a17.935 17.935 0 1 1 17.93 17.93 17.955 17.955 0 0 1 -17.93-17.93z"
                      fill="#00ac7d"
                    ></path>
                  </svg>
                </div>
                <div className="font-semibold poppins md:text-xl  thc text-lg mt-6">
                  Creative Minds
                </div>
                <div className=" text-base loremt md:text-base text-[#696969] px-5 text-center leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  obcaecati quasi beatae repudiandae.
                </div>
              </div>
              <div className="card transition duration-300 px-4 bg-white w-full py-9 flex flex-col justify-center items-center gap-y-2 rounded shadow-2xl text-center">
                <div className="bag-icon  -mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xlink="http://www.w3.org/1999/xlink"
                    id="Capa_1"
                    height="100"
                    width="100"
                    x="0px"
                    y="0px"
                    viewBox="0 0 60 60"
                    style={{ enableBackground: "new 0 0 60 60" }}
                    space="preserve"
                  >
                    {" "}
                    <g>
                      {" "}
                      <path
                        d="M59,55.5v-39H47v39h-3v-31H32v31h-3v-23H17v23h-3v-14H2v14H1c-0.552,0-1,0.447-1,1s0.448,1,1,1h1h12h3h12h3h12h3h12   c0.552,0,1-0.447,1-1S59.552,55.5,59,55.5z M4,55.5v-12h8v12H4z M19,55.5v-21h8v21H19z M34,55.5v-29h8v29H34z M49,55.5v-37h8v37H49   z"
                        fill="#ff1249"
                      ></path>{" "}
                      <path
                        d="M8.03,27.83c0.169,0,0.342-0.043,0.499-0.134l36.269-20.94l-2.27,4.99c-0.229,0.503-0.007,1.096,0.496,1.324   c0.134,0.062,0.275,0.09,0.414,0.09c0.38,0,0.743-0.218,0.911-0.586l3.562-7.83c0.011-0.025,0.009-0.052,0.018-0.078   c0.019-0.053,0.034-0.104,0.044-0.16c0.005-0.028,0.021-0.051,0.023-0.08c0.001-0.012-0.004-0.022-0.003-0.034   c0.002-0.038-0.002-0.073-0.004-0.111c-0.003-0.055-0.012-0.107-0.024-0.162c-0.008-0.038-0.01-0.077-0.023-0.114   c-0.012-0.036-0.033-0.066-0.049-0.101C47.88,3.881,47.88,3.854,47.866,3.83c-0.014-0.024-0.038-0.038-0.054-0.061   c-0.021-0.031-0.037-0.064-0.062-0.092c-0.026-0.03-0.059-0.051-0.089-0.078c-0.041-0.037-0.082-0.071-0.128-0.101   c-0.031-0.02-0.059-0.042-0.093-0.059c-0.011-0.005-0.017-0.015-0.028-0.02c-0.025-0.011-0.052-0.009-0.077-0.018   c-0.055-0.02-0.109-0.034-0.166-0.044c-0.026-0.005-0.047-0.02-0.074-0.022l-8.562-0.83c-0.555-0.056-1.039,0.35-1.092,0.898   c-0.054,0.55,0.349,1.039,0.898,1.092l5.456,0.529L7.529,25.964C7.05,26.24,6.887,26.852,7.163,27.33   C7.348,27.651,7.684,27.83,8.03,27.83z"
                        fill="#ff1249"
                      ></path>{" "}
                    </g>{" "}
                  </svg>
                </div>
                <div className="font-semibold poppins md:text-xl  thc text-lg mt-6">
                  Revenue Generation
                </div>
                <div className=" text-base loremt md:text-base text-[#696969] px-5 text-center leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  obcaecati quasi beatae repudiandae.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-4 w-full mx-auto md:max-w-6xl pb-10 md:flex md:items-center md:justify-center md:gap-x-6">
          <div className="left-content">
            <div className="">
              <img src="../idea.png" alt="" />
            </div>
          </div>
          <div className="right-content mt-4">
            <div className="font-heading1 text-[#104cba] poppins font-semibold ">
              Corporate Ideas
            </div>
            <div className="poppins text-[#000000] text-4xl md:text-4xl leading-relaxed font-semibold my-6">
              Perfect Technology Solution For All Medium Business
            </div>
            <div className="text-[#696969]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              magni quae qui voluptate sit aspernatur et.
            </div>
            <div className="progresses mt-6 flex gap-y-6 flex-col">
              <div className="progress w-full ">
                <div className="flex justify-between">
                  <div className="text-[#696969] font-semibold mb-1">
                    Business Goal
                  </div>
                  <div className="text-[#696969] mb-1">65%</div>
                </div>
                <div className="progressbar h-[0.65rem] bg-white rounded shadow-2xl w-full">
                  <div className="bar w-[65%] h-full bg-black rounded"></div>
                </div>
              </div>
              <div className="progress w-full">
                <div className="flex justify-between">
                  <div className="text-[#696969] font-semibold mb-1">
                    Traffic Growth
                  </div>
                  <div className="text-[#696969] mb-1">90%</div>
                </div>
                <div className="progressbar h-[0.65rem] bg-white rounded shadow-2xl w-full">
                  <div className="bar w-[90%] h-full bg-black rounded"></div>
                </div>
              </div>
              <div className="progress w-full">
                <div className="flex justify-between">
                  <div className="text-[#696969] font-semibold mb-1">
                    Competitor Research
                  </div>
                  <div className="text-[#696969] mb-1">75%</div>
                </div>
                <div className="progressbar h-[0.65rem] bg-white rounded shadow-2xl w-full">
                  <div className="bar w-[75%] h-full bg-black rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="consultancy w-full  text-center px-4">
          <div className="md:max-w-6xl relative  mx-auto w-full">
            <div className="absolute z-10 top-28 right-6 md:top-[-1.1rem] md:right-[14rem]">
              <img src="../upsidedowntriangle.svg" alt="" />
            </div>
            <div className="absolute z-10 top-5 left-[23.95rem]">
              <img src="../particle2.png" alt="" />
            </div>
            <div className="absolute z-10 bottom-6 right-32">
              <img src="../particleyellow.png" alt="" />
            </div>
            <div className="absolute z-10 -bottom-12 left-[25.5rem]">
              <img src="../triangle.png" alt="" />
            </div>
            <div className="absolute hidden md:block z-10 top-8 left-28">
              <img src="../person1.png" alt="" />
            </div>
            <div className="absolute hidden md:block z-10 top-2 right-24">
              <img src="../person2.png" alt="" />
            </div>
            <div className="absolute hidden md:block z-10 top-40 left-0">
              <img src="../person3.png" alt="" />
            </div>
            <div className="absolute hidden md:block z-10 -bottom-20 left-52">
              <img src="../person4.png" alt="" />
            </div>
            <div className="absolute hidden md:block z-10 -bottom-20 right-44">
              <img src="../person5.png" alt="" />
            </div>
            <div className="absolute hidden md:block z-10 top-40 right-10">
              <img src="../person6.png" alt="" />
            </div>
            <div className="font-heading1 text-[#104cba] poppins font-semibold ">
              Connect With Us
            </div>
            <div className="poppins text-[#000000] text-4xl md:text-4xl leading-relaxed font-semibold mt-6 mb-2 px-4 sm:max-w-screen-md mx-auto">
              Get A Free Consultancy Right Now!
              <span className="text-[#fd4219] text-4xl md:text-4xl leading-relaxed font-semibold poppins sm:block sm:mt-4">
                Start Working With Us
              </span>
            </div>
            <a
              href="https://wa.me/message/KOBQXC4TEH5DP1"
              className="btn text-white text-lg block mt-6 bg-linear font-bold w-[11rem] mx-auto"
            >
              Start a Project
            </a>
          </div>
        </section>
        <footer className="footer pt-32 px-4 w-full">
          <div className=" grid grid-cols-1 sm:grid-cols-2 mx-auto sm:place-items-center gap-x-6 sm:max-w-6xl gap-y-14">
            {/* <div className="stuffz  flex flex-col gap-y-1 ">
              <div className="font-semibold text-[17px] poppins  mb-8">
                Quick Links
              </div>
              <div className="">Pricing</div>
              <div className="">Tracking</div>
              <div className="">Terms of Services</div>
              <div className="">Customization</div>
              <div className="">Contact Us</div>
            </div> */}
            {/* <div className="flex flex-col gap-y-1 ">
              <div className="font-semibold text-[17px] poppins  mb-8">
                Company
              </div>
              <div className="">Home</div>
              <div className="">About Us</div>
              <div className="">Services</div>
              <div className="">Contact Us</div>
            </div> */}
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
              {/* <div className="font-semibold text-[17px] poppins  mb-8">
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
              </div> */}
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
};

export default Home;
