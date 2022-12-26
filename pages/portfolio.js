import { motion, useCycle } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Footer from "../components/Footer";
import MenuToggler from "../components/MenuToggler";
import Navbar from "../components/Navbar";
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

function Portfolio() {
  const [isOpen, setToggleOpen] = useState(false);
  // console.log({ isOpen });

  const portfolios = [
    {
      id: 0,
      image: "/TITTA PROTAROOM 2.jpg",
      title: "Protaroom Interior Designs",
      category: "Website",
      link: "protaroom-project",
    },
    {
      id: 1,
      image: "/TITTA GLOBAL LOAN 2.jpg",
      title: "Global Loan",
      category: "Website",
      link: "global-loan-project",
    },
    {
      id: 2,
      image: "/TITTA SURVEY 2.jpg",
      title: "Dynamic Survey Web App",
      category: "Website",
      link: "survey-project",
    },
    {
      id: 3,
      image: "/TITTA PGA 2.jpg",
      title: "PGA Travels and Tour",
      category: "Website",
      link: "pga-travels-project",
    },
    {
      id: 4,
      image: "/TITTA GOSPEL WORLD 2.jpg",
      title: "Gospel World Music App",
      category: "Website",
      link: "gospel-world-project",
    },
    {
      id: 5,
      image: "/TITTA TINGLE 2.jpg",
      title: "Tingle Search Engine",
      category: "Website",
      link: "tingle-project",
    },
    {
      id: 6,
      image: "/TITTA BRANDO 2.jpg",
      title: "Brando Graphics Portfolio",
      category: "Website",
      link: "brando-project",
    },
    {
      id: 7,
      image: "/TITTA LAWTOP 2.jpg",
      title: "Law Firm Agency",
      category: "Website",
      link: "brando-project",
    },
    {
      id: 8,
      image: "/TITTA LODGE EASY 2.jpg",
      title: "Lodge Easy",
      category: "Website",
      link: "lodge-easy-project",
    },
  ];
  return (
    <>
      <main className="relative">
        <header className="w-screen bg-white sticky top-0 z-[999] shadow-xl poppins">
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
                  { name: "About", location: "#about" },
                  { name: "Services", location: "#services" },
                  { name: "Blog", location: "/blogpage" },
                  { name: "Portfolio", location: "/portfolio" },
                  { name: "Contact", location: "/contact" },
                ]}
              />
            </motion.nav>
          </div>
        </header>

        <section className="text-white w-[100vw] h-[40vh] md:h-[55vh]  relative">
          <div className="relative w-full h-full">
            <Image src="/Sprinkle.svg" alt="sprinkle" layout="fill" />
          </div>
          <div className="absolute z-20 flex flex-col items-center justify-center w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 contenthero">
            <div className="text-5xl font-semibold text-white poppins">
              Our Portfolio
            </div>
            <div className="mt-6 text-white">
              <span>Home</span> {">"} <span>Portfolio</span>
            </div>
          </div>
        </section>

        <section className="grid w-full grid-cols-1 gap-10 px-4 pt-24 pb-32 mx-auto place-content-center portfolio-cards place-items-start sm:max-w-6xl sm:grid-cols-3">
          {portfolios.map((portfolio) => (
            <Link key={portfolio.id} href={`#`} passHref>
              <a className="block w-full">
                <div className="w-full mx-auto animationPortfolio">
                  <div className="relative w-full overflow-hidden rounded h-52 img">
                    <Image
                      src={portfolio.image}
                      className="w-full pointer-events-none"
                      alt="Porfolio-img"
                      layout="fill"
                      objectFit="contain"
                      objectPosition="center"
                    />
                  </div>
                  <div className=" poppins text-[#000] text-lg font-semibold mt-6 ">
                    {portfolio.title}
                  </div>
                  <div className="anim-sub text-[#000] text-base font-semibold mt-2 ">
                    <div className="category fadeOut">{portfolio.category}</div>
                    <div className="opacity-0 category fadeIn">
                      Show Project -----
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </section>
        <Footer />
      </main>
    </>
  );
}

export default Portfolio;
