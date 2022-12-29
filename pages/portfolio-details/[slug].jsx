import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
// import styles from "../../styles/Home.module.css";
import { motion, useCycle } from "framer-motion";
import MenuToggler from "../../components/MenuToggler";
import Navigation from "../../components/Navigation";
// import { sanityClient, urlFor } from "../sanity";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

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

function PortfolioItem({ portfolioItem }) {
  console.log(portfolioItem);

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
          <div className="absolute z-20 flex flex-col items-center justify-center w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <div className="text-5xl font-semibold text-center text-white poppins">
              Portfolio Details
            </div>
            <div className="mt-6 text-white">
              <span>Home</span> {">"} <span>Portfolio</span>
            </div>
          </div>
        </section>

        <section className="max-w-6xl px-4 py-32 mx-auto md:mt-20">
          <div className="w-full">
            <Carousel
              className="p-0 m-0 -mt-[13rem]"
              showThumbs={false}
              showStatus={false}
              showArrows={false}
              autoPlay={true}
              showIndicators={false}
              infiniteLoop
            >
              <div className="w-full h-full">
                <Image
                  layout="fill"
                  alt="image"
                  src={portfolioItem[0].image1}
                  className="w-full h-[40ch] md:h-full object-contain"
                />
              </div>
              <div className="w-full h-full">
                <Image
                  layout="fill"
                  alt="image"
                  src={portfolioItem[0].image2}
                  className="w-full h-[40ch] md:h-full object-contain"
                />
              </div>
            </Carousel>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="">
              <div className="text-[#000] text-3xl poppins font-semibold my-10">
                {portfolioItem[0].title}
              </div>
              <div className="text-[#696969] text-base md:max-w-md">
                {portfolioItem[0].about}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-6 md:my-10 md:grid-cols-2">
              <div className="">
                <div className="text-lg text-[#101010] poppins font-semibold">
                  Client:
                </div>
                <div className="text-[#696969] text-base">
                  {portfolioItem[0].title}
                </div>
              </div>
              <div className="">
                <div className="text-lg text-[#101010] poppins font-semibold">
                  Date:
                </div>
                <div className="text-[#696969] text-base">
                  {portfolioItem[0].date}
                </div>
              </div>
              <div className="">
                <div className="text-lg text-[#101010] poppins font-semibold">
                  Category:
                </div>
                <div className="text-[#696969] text-base">
                  {portfolioItem[0].category}
                </div>
              </div>
              <div className="">
                <div className="text-lg text-[#101010] poppins font-semibold">
                  Share:
                </div>
                <div className="flex items-center w-full mt-8 socialmedialinks gap-x-6">
                  <Link href={portfolioItem[0].socialMediaFb} passHref>
                    <a>
                      <div className="relative w-8 h-8 fb">
                        <Image
                          layout="fill"
                          src="../facebook.png"
                          className="w-full"
                          alt=""
                        />
                      </div>
                    </a>
                  </Link>
                  <Link href={portfolioItem[0].socialMediaTw} passHref>
                    <a>
                      <div className="relative w-8 h-8 twitter">
                        <Image
                          layout="fill"
                          src="../twitter.png"
                          className="w-full"
                          alt=""
                        />
                      </div>
                    </a>
                  </Link>
                  <Link href={portfolioItem[0].socialMediaIg} passHref>
                    <a>
                      <div className="relative w-8 h-8 instagram">
                        <Image
                          layout="fill"
                          src="instagram.png"
                          className="w-full"
                          alt=""
                        />
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

export default PortfolioItem;

export const getStaticPaths = () => {
  const portfolios = [
    {
      id: 0,
      image1: "/TITTA PROTAROOM 2.jpg",
      image2: "/TITTA PROTAROOM 2.jpg",
      image3: "/TITTA PROTAROOM 2.jpg",
      title: "Protaroom Interior Designs",
      category: "Website",
      link: "protaroom-project",
      date: "ohh",
      socialMediaFb: "www.facebook.com",
      socialMediaIg: "www.facebook.com",
      socialMediaLi: "www.facebook.com",
      socialMediaTw: "www.facebook.com",
    },
    {
      id: 1,
      image1: "/TITTA GLOBAL LOAN 2.jpg",
      image2: "/TITTA GLOBAL LOAN 2.jpg",
      image3: "/TITTA GLOBAL LOAN 2.jpg",
      title: "Global Loan",
      category: "Website",
      link: "global-loan-project",
      date: "ohh",
      socialMediaFb: "www.facebook.com",
      socialMediaIg: "www.facebook.com",
      socialMediaLi: "www.facebook.com",
      socialMediaTw: "www.facebook.com",
    },
    {
      id: 2,
      image1: "/TITTA SURVEY 2.jpg",
      image2: "/TITTA SURVEY 2.jpg",
      image3: "/TITTA SURVEY 2.jpg",
      title: "Dynamic Survey Web App",
      category: "Website",
      link: "survey-project",
      date: "ohh",
      socialMediaFb: "www.facebook.com",
      socialMediaIg: "www.facebook.com",
      socialMediaLi: "www.facebook.com",
      socialMediaTw: "www.facebook.com",
    },
    {
      id: 3,
      image1: "/TITTA PGA 2.jpg",
      image2: "/TITTA PGA 2.jpg",
      image3: "/TITTA PGA 2.jpg",
      title: "PGA Travels and Tour",
      category: "Website",
      link: "pga-travels-project",
      date: "ohh",
      socialMediaFb: "www.facebook.com",
      socialMediaIg: "www.facebook.com",
      socialMediaLi: "www.facebook.com",
      socialMediaTw: "www.facebook.com",
    },
    {
      id: 4,
      image1: "/TITTA GOSPEL WORLD 2.jpg",
      image2: "/TITTA GOSPEL WORLD 2.jpg",
      image3: "/TITTA GOSPEL WORLD 2.jpg",
      title: "Gospel World Music App",
      category: "Website",
      link: "gospel-world-project",
      date: "ohh",
      socialMediaFb: "www.facebook.com",
      socialMediaIg: "www.facebook.com",
      socialMediaLi: "www.facebook.com",
      socialMediaTw: "www.facebook.com",
    },
    {
      id: 5,
      image1: "/TITTA TINGLE 2.jpg",
      image2: "/TITTA TINGLE 2.jpg",
      image3: "/TITTA TINGLE 2.jpg",
      title: "Tingle Search Engine",
      category: "Website",
      link: "tingle-project",
      date: "ohh",
      socialMediaFb: "www.facebook.com",
      socialMediaIg: "www.facebook.com",
      socialMediaLi: "www.facebook.com",
      socialMediaTw: "www.facebook.com",
    },
    {
      id: 6,
      image1: "/TITTA BRANDO 2.jpg",
      image2: "/TITTA BRANDO 2.jpg",
      image3: "/TITTA BRANDO 2.jpg",
      title: "Brando Graphics Portfolio",
      category: "Website",
      link: "brando-project",
      date: "ohh",
      socialMediaFb: "www.facebook.com",
      socialMediaIg: "www.facebook.com",
      socialMediaLi: "www.facebook.com",
      socialMediaTw: "www.facebook.com",
    },
    {
      id: 7,
      image1: "/TITTA LAWTOP 2.jpg",
      image2: "/TITTA LAWTOP 2.jpg",
      image3: "/TITTA LAWTOP 2.jpg",
      title: "Law Firm Agency",
      category: "Website",
      link: "brando-project",
      date: "ohh",
      socialMediaFb: "www.facebook.com",
      socialMediaIg: "www.facebook.com",
      socialMediaLi: "www.facebook.com",
      socialMediaTw: "www.facebook.com",
    },
    {
      id: 8,
      image1: "/TITTA LODGE EASY 2.jpg",
      image2: "/TITTA LODGE EASY 2.jpg",
      image3: "/TITTA LODGE EASY 2.jpg",
      title: "Lodge Easy",
      category: "Website",
      link: "lodge-easy-project",
      date: "ohh",
      socialMediaFb: "www.facebook.com",
      socialMediaIg: "www.facebook.com",
      socialMediaLi: "www.facebook.com",
      socialMediaTw: "www.facebook.com",
    },
  ];

  const paths = portfolios.map((portfolio) => ({
    params: {
      slug: portfolio.link,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = ({ params }) => {
  const portfolios = [
    {
      id: 0,
      image1: "/TITTA PROTAROOM 2.jpg",
      image2: "/TITTA PROTAROOM 2.jpg",
      image3: "/TITTA PROTAROOM 2.jpg",
      title: "Protaroom Interior Designs",
      about: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
      natus eum perferendis dicta, neque ipsam quaerat, consequuntur nam
      quam cum explicabo minus eaque consectetur iure quibusdam quisquam.
      Suscipit, repudiandae ab.`,
      category: "Website",
      link: "protaroom-project",
      date: "12th November, 2022",
      socialMediaFb: "www.facebook.com",
      socialMediaIg: "www.facebook.com",
      socialMediaLi: "www.facebook.com",
      socialMediaTw: "www.facebook.com",
    },
    {
      id: 1,
      image1: "/TITTA GLOBAL LOAN 2.jpg",
      image2: "/TITTA GLOBAL LOAN 2.jpg",
      image3: "/TITTA GLOBAL LOAN 2.jpg",
      title: "Global Loan",
      about: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
      natus eum perferendis dicta, neque ipsam quaerat, consequuntur nam
      quam cum explicabo minus eaque consectetur iure quibusdam quisquam.
      Suscipit, repudiandae ab.`,
      category: "Website",
      link: "global-loan-project",
      date: "12th November, 2022",
      socialMediaFb: "www.facebook.com",
      socialMediaIg: "www.facebook.com",
      socialMediaLi: "www.facebook.com",
      socialMediaTw: "www.facebook.com",
    },
    {
      id: 2,
      image1: "/TITTA SURVEY 2.jpg",
      image2: "/TITTA SURVEY 2.jpg",
      image3: "/TITTA SURVEY 2.jpg",
      title: "Dynamic Survey Web App",
      about: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
      natus eum perferendis dicta, neque ipsam quaerat, consequuntur nam
      quam cum explicabo minus eaque consectetur iure quibusdam quisquam.
      Suscipit, repudiandae ab.`,
      category: "Website",
      link: "survey-project",
      date: "12th November, 2022",
      socialMediaFb: "www.facebook.com",
      socialMediaIg: "www.facebook.com",
      socialMediaLi: "www.facebook.com",
      socialMediaTw: "www.facebook.com",
    },
    {
      id: 3,
      image1: "/TITTA PGA 2.jpg",
      image2: "/TITTA PGA 2.jpg",
      image3: "/TITTA PGA 2.jpg",
      title: "PGA Travels and Tour",
      about: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
      natus eum perferendis dicta, neque ipsam quaerat, consequuntur nam
      quam cum explicabo minus eaque consectetur iure quibusdam quisquam.
      Suscipit, repudiandae ab.`,
      category: "Website",
      link: "pga-travels-project",
      date: "12th November, 2022",
      socialMediaFb: "www.facebook.com",
      socialMediaIg: "www.facebook.com",
      socialMediaLi: "www.facebook.com",
      socialMediaTw: "www.facebook.com",
    },
    {
      id: 4,
      image1: "/TITTA GOSPEL WORLD 2.jpg",
      image2: "/TITTA GOSPEL WORLD 2.jpg",
      image3: "/TITTA GOSPEL WORLD 2.jpg",
      title: "Gospel World Music App",
      about: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
      natus eum perferendis dicta, neque ipsam quaerat, consequuntur nam
      quam cum explicabo minus eaque consectetur iure quibusdam quisquam.
      Suscipit, repudiandae ab.`,
      category: "Website",
      link: "gospel-world-project",
      date: "12th November, 2022",
      socialMediaFb: "www.facebook.com",
      socialMediaIg: "www.facebook.com",
      socialMediaLi: "www.facebook.com",
      socialMediaTw: "www.facebook.com",
    },
    {
      id: 5,
      image1: "/TITTA TINGLE 2.jpg",
      image2: "/TITTA TINGLE 2.jpg",
      image3: "/TITTA TINGLE 2.jpg",
      title: "Tingle Search Engine",
      about: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
      natus eum perferendis dicta, neque ipsam quaerat, consequuntur nam
      quam cum explicabo minus eaque consectetur iure quibusdam quisquam.
      Suscipit, repudiandae ab.`,
      category: "Website",
      link: "tingle-project",
      date: "12th November, 2022",
      socialMediaFb: "www.facebook.com",
      socialMediaIg: "www.facebook.com",
      socialMediaLi: "www.facebook.com",
      socialMediaTw: "www.facebook.com",
    },
    {
      id: 6,
      image1: "/TITTA BRANDO 2.jpg",
      image2: "/TITTA BRANDO 2.jpg",
      image3: "/TITTA BRANDO 2.jpg",
      title: "Brando Graphics Portfolio",
      about: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
      natus eum perferendis dicta, neque ipsam quaerat, consequuntur nam
      quam cum explicabo minus eaque consectetur iure quibusdam quisquam.
      Suscipit, repudiandae ab.`,
      category: "Website",
      link: "brando-project",
      date: "12th November, 2022",
      socialMediaFb: "www.facebook.com",
      socialMediaIg: "www.facebook.com",
      socialMediaLi: "www.facebook.com",
      socialMediaTw: "www.facebook.com",
    },
    {
      id: 7,
      image1: "/TITTA LAWTOP 2.jpg",
      image2: "/TITTA LAWTOP 2.jpg",
      image3: "/TITTA LAWTOP 2.jpg",
      title: "Law Firm Agency",
      about: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
      natus eum perferendis dicta, neque ipsam quaerat, consequuntur nam
      quam cum explicabo minus eaque consectetur iure quibusdam quisquam.
      Suscipit, repudiandae ab.`,
      category: "Website",
      link: "brando-project",
      date: "12th November, 2022",
      socialMediaFb: "www.facebook.com",
      socialMediaIg: "www.facebook.com",
      socialMediaLi: "www.facebook.com",
      socialMediaTw: "www.facebook.com",
    },
    {
      id: 8,
      image1: "/TITTA LODGE EASY 2.jpg",
      image2: "/TITTA LODGE EASY 2.jpg",
      image3: "/TITTA LODGE EASY 2.jpg",
      title: "Lodge Easy",
      about: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
      natus eum perferendis dicta, neque ipsam quaerat, consequuntur nam
      quam cum explicabo minus eaque consectetur iure quibusdam quisquam.
      Suscipit, repudiandae ab.`,
      category: "Website",
      link: "lodge-easy-project",
      date: "12th November, 2022",
      socialMediaFb: "www.facebook.com",
      socialMediaIg: "www.facebook.com",
      socialMediaLi: "www.facebook.com",
      socialMediaTw: "www.facebook.com",
    },
  ];

  const portfolioItem = portfolios.filter(
    (portfolio) => portfolio.link === params.slug
  );
  if (!portfolioItem) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      portfolioItem,
    },
  };
};
//after 3600 seconds 60mins/1hr, it'll update: 'ohh';
