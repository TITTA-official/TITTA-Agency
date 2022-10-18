import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// import styles from "../../styles/Home.module.css";
import { motion, useCycle } from "framer-motion";
import MenuToggler from "../../components/MenuToggler";
import Navigation from "../../components/Navigation";
// import { sanityClient, urlFor } from "../sanity";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

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

  const [isOpen, toggleOpen] = useCycle(false, true);
  // console.log({ isOpen });

  return (
    <>
      <Head>
        <title>Portfolio - TITTA</title>
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
        <header className="w-screen sticky top-0 z-[999] bg-white poppins shadow-xl">
          <div className="w-full bg-white md:mx-auto max-w-6xl px-4 py-2 relative z-50 top-0 left-0 right-0 flex items-center justify-between  sm:mx-auto ">
            <div className="header-d-logo w-[145px]">
              <img className="w-full" src="../tittablue.png" alt="" />
            </div>
            <div className="hidden   sm:flex items-center gap-x-8 text-[#000] mt-8">
            <li><Link href="/" >Home</Link></li>
        <li><Link href="/#about" >About</Link></li>
        <li><Link href="/#services">Services</Link></li>
        <li><Link href="/blogpage">Blog</Link></li>
        <li><Link href="/portfolio">Portfolio</Link></li>
        <li><Link href="/contact">Contact</Link></li>
            </div>
            <motion.nav
              animate={isOpen ? "open" : "closed"}
              initial={false}
              className="absolute top-0 right-0 bottom-0 w-[300px] sm:hidden"
            >
              <motion.div
                className="background bg-white absolute top-0 right-0 bottom-0 h-screen w-[300px]"
                variants={sidebarVariants}
              />
              <MenuToggler toggle={() => toggleOpen()} />
              <Navigation items={[{name:'Home', location:'/'}, {name:'About', location:'/#about'},{name:'Services', location:'/#services'},{name:'Blog', location:'/blogpage'}, {name:'Portfolio', location:'/portfolio'}, {name:'Contact', location:'/contact'}]}/>
            </motion.nav>
          </div>
        </header>

        <section className="heroblo z-10 text-white w-[100vw] h-[55vh]  relative">
          <img
            src="../Sprinkle.svg"
            alt=""
            className="w-full h-full object-cover object-top absolute top-0 do"
          />
          <div className="h-full w-full flex flex-col justify-center items-center contenthero absolute z-20 pt-20">
            <div className="text-5xl text-white poppins font-semibold text-center">
              Portfolio Details
            </div>
            <div className="text-white mt-6">
              <span>Home</span> {">"} <span>Portfolio</span>
            </div>
          </div>
        </section>

        <section className="py-32 px-4 max-w-6xl mx-auto md:mt-20">
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
              <div className="h-full w-full">
                <img
                  src={portfolioItem[0].image1}
                  className="w-full h-[40ch] md:h-full object-contain"
                />
              </div>
              <div className="h-full w-full">
                <img
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
            <div className=" mt-6 md:my-10 grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <div className="socialmedialinks mt-8 flex w-full items-center gap-x-6">
                  <Link href={portfolioItem[0].socialMediaFb}>
                    <div className="fb w-[32px]">
                      <img src="../facebook.png" className="w-full" alt="" />
                    </div>
                  </Link>
                  <Link href={portfolioItem[0].socialMediaTw}>
                    <div className="twitter w-[32px]">
                      <img src="../twitter.png" className="w-full" alt="" />
                    </div>
                  </Link>
                  <Link href={portfolioItem[0].socialMediaIg}>
                    <div className="instagram w-[32px]">
                      <img src="instagram.png" className="w-full" alt="" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer blog pt-32 md:pt-0 px-4 w-full">
          <div className=" grid grid-cols-1 sm:grid-cols-2 mx-auto lg:justify-items-between lg:items-start lg:grid-cols-4 lg:pt-28 gap-x-6 sm:max-w-6xl gap-y-14">
            <div className="flex flex-col gap-y-1 -mt-4">
              <div className="w-[50%]  mb-8">
                <img src="../titawhite.png" alt="" className="w-full"/>
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
      date: 'ohh',
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
      date: 'ohh',
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
      date: 'ohh',
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
      date: 'ohh',
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
      date: 'ohh',
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
      date: 'ohh',
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
      date: 'ohh',
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
      date: 'ohh',
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
      date: 'ohh',
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
      date: '12th November, 2022',
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
      date: '12th November, 2022',
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
      date: '12th November, 2022',
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
      date: '12th November, 2022',
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
      date: '12th November, 2022',
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
      date: '12th November, 2022',
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
      date: '12th November, 2022',
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
      date: '12th November, 2022',
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
      date: '12th November, 2022',
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
  }
}
    //after 3600 seconds 60mins/1hr, it'll update: 'ohh';
