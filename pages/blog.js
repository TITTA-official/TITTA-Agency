import { motion, useCycle } from "framer-motion";
import moment from "moment";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Footer from "../components/Footer";
import MenuToggler from "../components/MenuToggler";
import Navbar from "../components/Navbar";
import Navigation from "../components/Navigation";
import { sanityClient, urlFor } from "../sanity";
import Popup from "../components/Popup";

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

export default function Blog({ posts }) {
  const [isOpen, setToggleOpen] = useState(false);
  // console.log({ isOpen });
  return (
    <>
      <main className="relative">
      <Popup/>
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

        <section className="z-10 text-white w-[100vw] h-[40vh] md:h-[55vh] relative">
          <div className="relative w-full h-full">
            <Image src="/Sprinkle.svg" alt="sprinkle" layout="fill" priority />
          </div>
          <div className="absolute z-20 flex flex-col items-center justify-center w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 contenthero">
            <div className="text-5xl font-semibold text-white poppins">
              Our Blog
            </div>
            <div className="mt-6 text-white">
              <span>Home</span> {">"} <span>Blog</span>
            </div>
          </div>
        </section>

        <section className="py-32 mx-auto px-4 md:flex md:gap-x-[3%] md:max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-8 place-items-start">
            {
              // Posts
              posts.map((post) => (
                <article key={post._id} className="blogs  md:w-[100%]">
                  <Link
                    key={post._id}
                    href={`/post/${post.slug.current}`}
                    passHref
                  >
                    <a>
                      <div className="blog-post w-full h-[40%] rounded-xl bg-white shadow-2xl pb-6 cursor-pointer">
                        <div className="relative w-full img">
                          <div className="h-[22ch] relative">
                            <Image
                              layout="fill"
                              src={urlFor(post.mainImage).url()}
                              className="object-fill w-full h-full rounded-t-xl"
                              alt="post image"
                            />
                          </div>
                          <div className="absolute left-4 flex gap-2 text-sm pills -bottom-5">
                            <div className="pill py-2 px-4 text-white bg-[#1367fe] rounded">
                              Latest Posts
                            </div>
                            <div className="pill py-2 px-4 text-white bg-[#1367fe] rounded">
                              Start Up
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col contz gap-y-1">
                          <div className="pt-10 px-4 font-semibold text-[#000] text-base md:text-lg poppins">
                            {post.title}
                          </div>
                          <div className="details flex w-full justify-between px-4 text-xs text-[#696969] mb-2">
                            <div className="flex items-center gap-4 author">
                              <div className="author w-[36px] h-[28px] relative">
                                <Image
                                  layout="fill"
                                  src={urlFor(post.author.image).url()}
                                  alt="thumbnail"
                                />
                              </div>
                              <div className="">{post.author.name}</div>
                            </div>
                            <div className="flex gap-2 date">
                              <span className="cal-icon relative w-4 h-4">
                                <Image
                                  layout="fill"
                                  src="/calendar.png"
                                  alt="calendar"
                                />
                              </span>
                              {moment(post._createdAt).format("LLL")}
                            </div>
                            <div className="flex gap-2 comments">
                              <span className="comment-icon relative w-4 h-4">
                                <Image
                                  layout="fill"
                                  src="/comment.png"
                                  alt="comment"
                                />
                              </span>
                              <span>0</span> Comments
                            </div>
                          </div>
                          <div className="text-[#696969] px-4 text-xs md:text-sm">
                            {post.description} by {post.author.name}
                          </div>
                          <div className="text-white text-sm bg-linear font-bold w-[140px] text-center mt-5 mx-4">
                            Read More
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                </article>
              ))
            }
          </div>
          {/* <aside className="pt-24 md:pt-0 md:w-[37%]">
            <div className="flex flex-col items-center justify-center w-full px-4 bg-white shadow-2xl author-card rounded-xl py-9 gap-y-5">
              <div className="relative border-2 border-red-600 rounded-full w-[140px] h-[140px] p-[10px]">
                <Image
                  layout="fill"
                  src="/author.png"
                  className="w-full h-full overflow-hidden rounded-full"
                  alt="author"
                />
              </div>
              <div className="font-semibold text-lg text-[#000] poppins">
                Ifeoma Okpara
              </div>
              <div className="text-[#696969] text-base">
                Daily someday is not a day of the week.
              </div>
              <div className="flex items-center justify-center w-full socialmedialinks gap-x-6">
                <div className="relative fb w-8 h-8">
                  <Image
                    layout="fill"
                    src="/facebook.png"
                    className="w-full"
                    alt="facebook"
                  />
                </div>
                <div className="relative twitter w-8 h-8">
                  <Image
                    layout="fill"
                    src="/twitter.png"
                    className="w-full"
                    alt="twitter"
                  />
                </div>
                <div className="relative instagram w-8 h-8">
                  <Image
                    layout="fill"
                    src="/instagram.png"
                    className="w-full"
                    alt="instagram"
                  />
                </div>
              </div>
            </div>
            <div className="pt-16 latest-blog">
              <div className="mb-5 text-xl font-semibold poppins">
                Latest Blogs
              </div>
              <div className="flex flex-col gap-y-8 latest-blogss">
                {Array(5)
                  .fill("")
                  .map((v, index) => (
                    <div key={index} className="flex gap-x-4">
                      <div className="relative w-[35%]">
                        <Image
                          layout="fill"
                          src="/post-img.jpg"
                          className="w-full rounded-md"
                          alt="post"
                          objectFit="cover"
                          objectPosition="center"
                        />
                      </div>
                      <div className="flex flex-col justify-center gap-y-1 ">
                        <div className="text-[#000] text-base font-semibold">
                          Be Yourself Everyone Else
                        </div>
                        <div className="text-sm text-[#515151]">
                          20 Nov, 2020
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="pt-16 categories">
              <div className="mb-5 text-xl font-semibold poppins">
                Categories
              </div>
              <div className=" flex flex-col gap-y-3 cats text-[#696969] text-base ">
                <div className="hover:underline hover:text-[#013ca3]">
                  Development (1)
                </div>
                <div className="hover:underline hover:text-[#013ca3]">
                  Guide (1)
                </div>
                <div className="hover:underline hover:text-[#013ca3]">
                  Inspiration (1)
                </div>
                <div className="hover:underline hover:text-[#013ca3]">
                  Latest News (1)
                </div>
                <div className="hover:underline hover:text-[#013ca3]">
                  Revenue (1)
                </div>
                <div className="hover:underline hover:text-[#013ca3]">
                  Start Up (1)
                </div>
                <div className="hover:underline hover:text-[#013ca3]">
                  Technology (1)
                </div>
              </div>
            </div>
          </aside> */}
        </section>
        <Footer />
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    _id,
    title,
    author -> {
      name,
      image
    },
    description,
    mainImage,
    slug
  }`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};
