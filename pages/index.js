"use client";
import { motion, useCycle, useScroll } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import MenuToggler from "../components/MenuToggler";
import Navbar from "../components/Navbar";
import Navigation from "../components/Navigation";
import styles from "../styles/Home.module.css";
import { GrFormClose } from "react-icons/gr";
import { IconContext } from "react-icons";
import { event } from "nextjs-google-analytics";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "./firebase";
import { TfiEmail } from "react-icons/tfi";

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
  const [isOpen, setToggleOpen] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleChangeNav);
  });
  // console.log({ isOpen });
  const portfolio = [
    {
      id: 0,
      image: "/TITTA PROTAROOM 2.jpg",
      title: "Protaroom Interior Designs",
    },
    {
      id: 1,
      image: "/TITTA GLOBAL LOAN 2.jpg",
      title: "Global Loan",
    },
    {
      id: 2,
      image: "/TITTA SURVEY 2.jpg",
      title: "Dynamic Survey Web App",
    },
    {
      id: 3,
      image: "/TITTA PGA 2.jpg",
      title: "PGA Travels and Tour",
    },
    {
      id: 4,
      image: "/TITTA GOSPEL WORLD 2.jpg",
      title: "Gospel World Music App",
    },
    {
      id: 5,
      image: "/TITTA TINGLE 2.jpg",
      title: "Tingle Search Engine",
    },
    {
      id: 6,
      image: "/TITTA BRANDO 2.jpg",
      title: "Brando Graphics Portfolio",
    },
    {
      id: 7,
      image: "/TITTA LAWTOP 2.jpg",
      title: "Law Firm Agency",
    },
    {
      id: 8,
      image: "/TITTA LODGE EASY 2.jpg",
      title: "Lodge Easy",
    },
  ];

  const [changeNav, setChangeNav] = useState(false);

  const handleChangeNav = (e) => {
    if (window.scrollY >= 80) {
      setChangeNav(true);
    } else {
      setChangeNav(false);
    }
  };

  const [popup, setPopup] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setPopup(true);
    }, 10001);
  }, []);

  const [email, setEmail] = useState();
  const [whatsapp, setWhatsapp] = useState();

  return (
    <>
      <main className="relative w-full ">
        <div
          className={`fixed transition-all duration-500 z-20 top-0 ${
            popup ? "left-0" : "left-[-100%]"
          } w-full h-full bg-black opacity-40`}
        ></div>
        <div
          className={`fixed transition-all duration-500 z-30 ${
            popup ? "left-0 md:left-[15vw]" : "left-[-100%]"
          } md:top-[15vh] top-[25vh] w-[100vw] md:w-[70vw] h-[50vh] md:h-[70vh] rounded-[20px] bg-white popup flex flex-col md:flex-row items-center justify-center`}
        >
          <IconContext.Provider value={{ color: "#0a2761", size: "30px" }}>
            <div className="absolute top-[20px] right-[20px] md:top-[-11px] md:right-[-11px] bg-white rounded-full shadow-sm shadow-black">
              <GrFormClose onClick={() => setPopup(false)} />
            </div>
          </IconContext.Provider>

          <IconContext.Provider value={{ color: "white", size: "50px" }}>
            <div className="bg-gradient-to-r from-[#ff3834] to-[#ff7133] static md:absolute rounded-full p-[20px] shadow-sm shadow-black mt-[-45px] md:left-[-45px] md:top-[50px]">
              <TfiEmail />
            </div>
          </IconContext.Provider>

          <div className="px-[40px] w-[50%] h-full bg-gradient-to-b from-[#3e1786] to-[#0a51c7] hidden lg:flex flex-col text-white items-center justify-center">
            <div className="text-[28px] font-semibold">SUBSCRIBE TO OUR</div>
            <div className="text-[56px] font-bold leading-[60px]">
              Newsletter
            </div>
            <div className="text-[18px] italic text-center mt-[30px]">
              {`"...for exclusive content, early access to updates, special offers,
              personalized recommendations, and a chance to join a like-minded
              community. Don't miss out, join us today!"`}
            </div>
          </div>
          <div className="lg:px-[40px] lg:pt-[100px] lg:w-[50%] w-full h-full">
            <div className="lg:p-[40px] p-[20px] flex flex-col lg:items-end items-center justify-center">
              <div className="text-[16px] font-semibold static lg:hidden">SUBSCRIBE TO OUR</div>
              <div className="text-[32px] font-bold leading-[30px] static lg:hidden">
                Newsletter
              </div>
              <input
                className="md:w-full mt-[30px] w-[250px] h-[40px] bg-[#e9e9e9] p-[10px] mb-[20px]"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                className="md:w-full w-[250px] bg-[#e9e9e9] p-[10px] mb-[30px]"
                placeholder="Whatsapp (optional)"
                value={whatsapp}
                onChange={(e) => {
                  setWhatsapp(e.target.value);
                }}
              />
              <button
                className="bg-gradient-to-r from-[#ff3834] to-[#ff7133] py-[10px] px-[20px] text-white font-bold"
                onClick={() => {
                  updateDoc(doc(db, "User", "Contact"), {
                    contacts: arrayUnion({ email: email, whatsapp: whatsapp }),
                  });
                  setPopup(false);
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <header
          className={`navbar transition-all duration-500 ${
            changeNav ? "bg-white text-black" : "text-white bg-transparent"
          } poppins w-full sticky px-4 py-2 lg:px-[4rem] z-10 top-0 left-0 right-0 flex items-center justify-between  sm:mx-auto`}
        >
          <Navbar color="#fff" />
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
                { name: "About", location: "/#about" },
                { name: "Services", location: "/#services" },
                { name: "Blog", location: "/blog" },
                { name: "Portfolio", location: "/portfolio" },
                { name: "Contact", location: "/contact" },
              ]}
            />
            {/* Solution , array of objects */}
          </motion.nav>
        </header>
        {/* <section className="absolute w-screen h-screen overflow-visible hero -top-20 md:h-screen ">
      <div className="w-full h-full banner"></div>
    </section> */}
        <section className="hero top-[-93px] z-10 text-white w-[100vw] h-[110vh] relative  banner 2xl:h-[80vh]">
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
            <Image src="/particle.png" alt="hero" layout="fill" priority />
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
            <Image src="/particle.png" alt="particle" layout="fill" />
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
            <Image layout="fill" src="/particle.png" alt="particle" />
          </motion.div>
          <div className="flex flex-col items-center w-full px-4 mx-auto hero-content sm:flex-row sm:justify-between sm:items-center md:max-w-6xl space-y-12 sm:space-x-6 sm:space-y-0 md:px-0">
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
              <div className="flex items-center gap-4 btn-grp">
                <a
                  href="https://wa.me/message/KOBQXC4TEH5DP1"
                  className="text-base font-bold text-white bg-linear "
                >
                  Get Started
                </a>
                {/* <button className="text-base font-bold bg-white bg-outline">
                  How we work
                </button> */}
              </div>
            </div>
            <div className="banner-person-animation relative max-w-[22rem] sm:max-w-md sm:mr-6 md:max-w-lg  sm:self-center w-full md:-mt-[19rem] sm:-mt-40">
              <div className="absolute top-0 z-20">
                <Image
                  src="/banner-person1.png"
                  className="w-full"
                  alt="banner person"
                  height={650}
                  width={650}
                />
              </div>
              <motion.div
                initial={{ rotate: 0 }}
                animate={{
                  rotate: 360,
                }}
                transition={{ duration: 6, repeat: Infinity, repeatDelay: 0 }}
                className="absolute top-0 z-10 w-full bannerblob1"
              >
                <Image
                  height={500}
                  width={500}
                  className="w-full"
                  src="/banner-blob-orange.png"
                  alt="orange"
                />
              </motion.div>
              <motion.div
                initial={{ rotate: 0 }}
                animate={{
                  rotate: 360,
                }}
                transition={{ duration: 6, repeat: Infinity, repeatDelay: 0 }}
                className="absolute top-0 z-0 w-full bannerblob2"
              >
                <Image
                  height={500}
                  width={500}
                  className="w-full"
                  src="/banner-blob-blue.png"
                  alt="blue"
                />
              </motion.div>
            </div>
          </div>
        </section>
        <section
          id="service"
          className="relative flex flex-col items-center w-full px-4 pb-16 mx-auto text-center background-overlay-2 pt-28 gap-y-5 "
        >
          <div className="background-overlay-22 h-[100vh] w-screen -z-10 -bottom-[10rem] absolute left-0"></div>
          <h3 className="font-heading1 text-[#104cba] poppins font-semibold">
            Featured Services
          </h3>
          <div className="text-4xl font-semibold leading-relaxed poppins md:text-4xl">
            Fusing Creativity With Technology
          </div>
          <div className="grid grid-cols-1 gap-12 mt-5 cards sm:grid-cols-2 md:grid-cols-3 place-items-center md:max-w-6xl">
            <div className="w-full max-w-md px-4 pt-8 pb-12 bg-white rounded shadow-2xl card">
              <div className="relative w-full h-40">
                <Image
                  layout="fill"
                  src="/illustration1.jpg"
                  alt="illustration"
                />
              </div>
              <div className="font-semibold poppins md:text-xl   text-[#010101] text-lg mt-6 ">
                Creativity
              </div>
              <div className="mt-2 text-sm md:text-base text-[#696969] max-w-xs leading-relaxed">
                Whether for websites or applications, our designs will always
                show unique ingenuity.
              </div>
            </div>
            <div className="w-full max-w-md px-4 pt-8 pb-12 bg-white rounded shadow-2xl card">
              <div className="relative w-full h-40">
                <Image
                  layout="fill"
                  src="/illustration2.jpg"
                  alt="illustration"
                />
              </div>
              <div className="font-semibold poppins md:text-xl  text-[#010101] text-lg mt-6 ">
                Successful Projects
              </div>
              <div className="mt-2 text-sm md:text-base text-[#696969] max-w-xs leading-relaxed">
                We have several projects completed with satisfactory reviews
                from clients.
              </div>
            </div>
            <div className="w-full max-w-md px-4 pt-8 pb-12 bg-white rounded shadow-2xl card">
              <div className="relative w-full h-40">
                <Image
                  layout="fill"
                  src="/illustration3.jpg"
                  alt="illustration"
                />
              </div>
              <div className="font-semibold poppins md:text-xl  text-[#010101] text-lg mt-6 ">
                Professionalism
              </div>
              <div className="mt-2 text-sm md:text-base text-[#696969] max-w-xs leading-relaxed">
                Working with us will leave you with nothing less than
                professional jobs done alongside our excellent work ethics.
              </div>
            </div>

            {/* #7A7A7A; */}
          </div>
        </section>
        <section
          id="about"
          className="w-full px-4 pt-16 mx-auto pb-28 md:pb-0 md:max-w-6xl md:px-0 md:grid md:grid-cols-2 md:place-items-between"
        >
          <div className="relative flex flex-col items-start left-content gap-y-5 text-start md:max-w-lg">
            <div className="font-heading1 text-[#104cba] poppins font-semibold">
              Core Features
            </div>
            <div className="poppins text-3xl md:text-4xl md:leading-[1.4] leading-relaxed text-[#000] font-bold">
              We&apos;re A Software Company That Provides Solutions.
            </div>
            <div className="text-[#696969] mt-2">
              Making awesome websites for your business, we are known to Provide
              the best UI experience turning your potential clients into
              customers.
            </div>
            <div className="w-full mt-3 segments">
              <div className="flex items-start justify-between w-full segment">
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
                    Our engineers are trained to be detailed and produce
                    excellent results being punctual with your delivery.
                  </div>
                </div>
              </div>
              <div className="flex items-start justify-between w-full segment mt-9">
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
                    At an affordable price, we provide software Services to
                    bring your ideas to reality
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="mt-6 text-lg font-bold text-white btn bg-linear">
              Discover More
            </div> */}
          </div>
          <div className="relative w-full mt-1 h-[350px] md:h-[550px] right-content md:mt-0">
            <Image layout="fill" src="/features.png" alt="features" />
          </div>
        </section>

        <section className="py-[1px] mt-16 mb-32 md:mb-0 bg-[#2b37fe]">
          <div className="flex py-4 flex-col items-center justify-center bg-white rounded-tl-[50px] rounded-br-[50px]">
            <div className="text-[#010101] poppins mt-4 font-semibold text-lg md:text-xl ">
              Our <span className="text-[#ff4235] font-bold">Clients</span>
            </div>
            <div className="clientDiv grid grid-flow-col grid-rows-2 items-center justify-between mt-3 md:mt-4 overflow-scroll w-[90vw] max-w-[800px]">
              <div className="logo1 relative overflow-hidden w-32 h-8 m-4 mr-6">
                <Image src={"/logo1.png"} alt="logo1" layout="fill" />
                <Image src={"/logo1.png"} alt="logo1" layout="fill" />
              </div>
              <div className="relative overflow-hidden w-32 h-16 m-4">
                <Image src={"/logo2.png"} alt="logo2" layout="fill" />
                <Image src={"/logo2.png"} alt="logo2" layout="fill" />
              </div>
              <div className="relative rounded-full overflow-hidden w-24 h-8 m-4 mr-9">
                <Image src={"/logo3.png"} alt="logo3" layout="fill" />
              </div>
              <div className="logodiv relative rounded-full overflow-hidden w-24 h-24 m-4">
                <Image src={"/logo4.png"} alt="logo4" layout="fill" />
              </div>
              <div className="logodiv relative rounded-full overflow-hidden w-24 h-24 bg-black m-4 mr-9">
                <Image src={"/logo5.png"} alt="logo5" layout="fill" />
              </div>
              <div className="darkbg relative rounded-full overflow-hidden w-24 h-24 m-4">
                <Image src={"/logo6.png"} alt="logo6" layout="fill" />
              </div>
              <div className="logodiv relative rounded-full overflow-hidden w-24 h-24 m-4 mr-9">
                <Image src={"/logo7.png"} alt="logo7" layout="fill" />
              </div>
              <div className="darkbg relative rounded-full overflow-hidden w-24 h-24 m-4">
                <Image src={"/logo8.png"} alt="logo8" layout="fill" />
              </div>
              <div className="darkbg relative rounded-full overflow-hidden w-24 h-24 m-4">
                <Image src={"/logo9.png"} alt="logo9" layout="fill" />
              </div>
            </div>
          </div>
        </section>

        {/*Promo Section*/}
        <section className="promo w-full md:max-w-6xl mx-auto md:rounded md:relative md:-bottom-[5.5rem] shadow-xl">
          <div className="px-4 cont py-14 md:flex md:items-center">
            <div className="left-content text-center md:text-left md:w-[75%] md:ml-12">
              <div className="text-4xl font-semibold leading-relaxed poppins ">
                Execute your creative projects With TITTA
                {/* Let&apos;s Start A Cool Project With TITTA! */}
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

        <section
          className="w-full pt-32 pb-24 text-white bg-another md:pt-64 md:flex md:justify-center md:gap-x-6"
          id="services"
        >
          <div className="w-full px-4 stuff md:max-w-6xl md:px-0 md:grid md:grid-cols-2 md:place-items-center">
            <div className="flex flex-col px-4 text-center left-content sm:flex-row sm:gap-x-5 gap-y-7">
              <div className="flex flex-col cards1 gap-7 sm:mt-4">
                <div className="flex flex-col items-center py-6 rounded card gap-y-3 bg-another-cards">
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
                  <div className="mt-2 text-lg poppins">Web Development</div>
                  <div className="text-[#a1a1a1]">
                    Expert and creative designs for website that provide
                    seamless navigation and functionality.
                  </div>
                </div>
                <div className="flex flex-col items-center py-6 card gap-y-3 bg-another-cards">
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
                  <div className="mt-2 text-lg poppins"> UI/UX Design</div>
                  <div className="text-[#a1a1a1]">
                    Well-executed user interface that improve customer
                    satisfaction and meet user expectations and ease of use.
                  </div>
                </div>
                <div className="flex flex-col items-center py-6 card gap-y-3 bg-another-cards">
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

                  <div className="mt-2 text-lg poppins">Graphics Design</div>
                  <div className="text-[#a1a1a1]">
                    Topnotch visual creations to improve your online presence.
                  </div>
                </div>
              </div>
              <div className="flex flex-col cards2 gap-7 sm:mt-8">
                <div className="flex flex-col items-center py-6 card gap-y-3 bg-another-cards">
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
                  <div className="mt-2 text-lg poppins">
                    {" "}
                    Mobile Application Development
                  </div>
                  <div className="text-[#a1a1a1]">
                    Turning your problem solving ideas to an operational app.{" "}
                  </div>
                </div>
                <div className="flex flex-col items-center py-6 card gap-y-3 bg-another-cards">
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
                  <div className="mt-2 text-lg poppins"> Digital Marketing</div>
                  <div className="text-[#a1a1a1]">
                    Result driven marketing strategies, content creation and SEO
                    writing.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col px-4 text-white right-content mt-14 md:mt-14 gap-y-5 sm:max-w-lg">
              <div className="font-heading1 text-[#104cba] poppins font-semibold">
                Featured Services
              </div>
              <div className="poppins text-4xl md:text-4xl md:leading-[1.4] leading-relaxed font-semibold">
                We Are Creative In Design & Development
              </div>
              <div className="flex flex-col grp gap-y-10">
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
                  <div className="mt-2 ml-auto right-content md:mt-0">
                    <div className="font-semibold title poppins">
                      Set Everything Up with ease
                    </div>
                    <div className="title text-[#a1a1a1] mt-4">
                      With a great project managment system, be rest assured
                      your projects are treated as priority and urgent.
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
                  <div className="mt-2 right-content md:mt-0">
                    <div className="font-semibold title poppins">
                      A Seamless UI Experience
                    </div>
                    <div className="title text-[#a1a1a1] mt-4">
                      Giving you a nice feel as you navigate through your apps,
                      We are very detailed on our UI/UX systems.
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

        <section className="w-full px-4 pb-10 mx-auto md:max-w-6xl md:flex md:items-center md:justify-center md:gap-x-6">
          <div className="left-content">
            <div className="relative w-96 h-96 px-2">
              <Image layout="fill" src="/idea.png" alt="idea" />
            </div>
          </div>
          <div className="mt-4 right-content">
            <div className="font-heading1 text-[#104cba] poppins font-semibold ">
              Corporate Ideas
            </div>
            <div className="poppins text-[#000000] text-4xl md:text-4xl leading-relaxed font-semibold my-6">
              Perfect Technology Solution For All Medium Business
            </div>
            <div className="text-[#696969]">
              We pay kin attention to your ideas for your project and give you
              suggestions and solutions from our experience and expertise.
            </div>
            <div className="flex flex-col mt-6 progresses gap-y-6">
              <div className="w-full progress ">
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
              <div className="w-full progress">
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
              <div className="w-full progress">
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
        <section className="w-full px-4 text-center consultancy">
          <div className="relative w-full mx-auto md:max-w-6xl">
            <div className="absolute z-10 top-28 right-6 w-8 h-8 md:top-[-1.1rem] md:right-[14rem]">
              <Image
                layout="fill"
                src="/upsidedowntriangle.svg"
                alt="triangle"
              />
            </div>
            <div className="absolute z-10 top-5 left-[23.95rem] w-4 h-4">
              <Image layout="fill" src="/particle2.png" alt="particle" />
            </div>
            {/* <div className="absolute z-10 w-4 h-4 bottom-6 right-32">
              <Image layout="fill" src="/partice3yellow.png" alt="yellow" />
            </div> */}
            <div className="absolute z-10 -bottom-12 left-[25.5rem] w-4 h-4">
              <Image layout="fill" src="/triangle.png" alt="triangle" />
            </div>
            <div className="absolute z-10 hidden w-16 h-16 md:block top-8 left-28">
              <Image layout="fill" src="/person1.png" alt="person" />
            </div>
            <div className="absolute z-10 hidden w-16 h-16 md:block top-2 right-24">
              <Image layout="fill" src="/person2.png" alt="person" />
            </div>
            <div className="absolute left-0 z-10 hidden w-16 h-16 md:block top-40">
              <Image layout="fill" src="/person3.png" alt="person" />
            </div>
            <div className="absolute z-10 hidden w-16 h-16 md:block -bottom-20 left-52">
              <Image layout="fill" src="/person4.png" alt="person" />
            </div>
            <div className="absolute z-10 hidden w-16 h-16 md:block -bottom-20 right-44">
              <Image layout="fill" src="/person5.png" alt="person" />
            </div>
            <div className="absolute z-10 hidden w-16 h-16 md:block top-40 right-10">
              <Image layout="fill" src="/person6.png" alt="person" />
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
        <Footer />
      </main>
    </>
  );
};

export default Home;
