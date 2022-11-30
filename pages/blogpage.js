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

export default function Blogpage({posts}) {
  console.log(posts)
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
           <header className='w-screen sticky top-0 z-[999] bg-white shadow-xl poppins'>
            <div className="w-full bg-white md:mx-auto max-w-6xl px-4 py-2 relative z-50 top-0 left-0 right-0 flex items-center justify-between  sm:mx-auto ">
              <div className="header-d-logo w-[145px]"><img className='w-full' src="../tittablue.png" alt="" /></div>  
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
                  className={`absolute top-0 right-0 bottom-0 sm:hidden ${isOpen ? 'w-[300px]': 'w-[0px]'}`}>
                  <motion.div className="background bg-white absolute top-0 right-0 bottom-0 h-screen w-[300px]" variants={sidebarVariants}/>
                  <MenuToggler toggle={() => setToggleOpen(!isOpen)}/>
                  <Navigation items={[{name:'Home', location:'/'}, {name:'About', location:'/#about'},{name:'Services', location:'/#services'},{name:'Blog', location:'/blogpage'}, {name:'Portfolio', location:'/portfolio'}, {name:'Contact', location:'/contact'}]}/>
                </motion.nav>

            </div>
        </header>

      <section className="heroblo z-10 text-white w-[100vw] h-[40vh] md:h-[55vh]  relative">
        <img src="../Sprinkle.svg" alt="" className="w-full h-full object-cover object-top absolute top-0 do" />
        <div className="h-full w-full flex flex-col justify-center items-center contenthero absolute z-20 pt-20">
          <div className="text-5xl text-white poppins font-semibold">Our Blog</div>
          <div className="text-white mt-6"><span>Home</span> {'>'} <span>Blog</span></div>
        </div>
      </section>
      
        <section className="py-32 mx-auto px-4 md:flex md:gap-x-[3%] md:max-w-6xl">
            {
              // Posts
              posts.map(post => (
                <article key={post._id} className="blogs grid grid-cols-1 place-items-start gap-y-14 md:w-[72%]">
                  <Link key={post._id} href={`/post/${post.slug.current}`}>
                    <div className="blog-post w-full h-[40%] rounded-xl bg-white shadow-2xl pb-6 cursor-pointer">
                      <div className="img relative w-full">
                        <div className="h-[22ch]">
                          <img
                            src={
                              urlFor(post.mainImage).url()
                            } 
                            className="w-full h-full object-fill rounded-t-xl"
                            alt=""
                          />
                        </div>
                        <div className="pills absolute -bottom-5 flex gap-2 text-sm left-0">
                          <div className="pill py-2 px-4 text-white bg-[#1367fe] rounded">
                            Latest Posts
                          </div>
                          <div className="pill py-2 px-4 text-white bg-[#1367fe] rounded">
                            Start Up
                          </div>
                        </div>
                      </div>
                      <div className="contz flex flex-col gap-y-1">
                        <div className="pt-10 px-4 font-semibold text-[#000] text-2xl poppins">
                        {post.title}
                        </div>
                        <div className="details flex w-full justify-between px-4 text-sm text-[#696969] mb-2">
                        <div className="author flex gap-4 items-center">
                          <div className="author w-[32px] h-[32px]"><img className="w-full h-full" src={urlFor(post.author.image).url()} alt="" /></div>
                          <div className="">{post.author.name}</div>
                        </div>
                          <div className="date flex gap-2">
                            <span className="cal-icon">
                              <img src="../calendar.png" alt="" />
                            </span>
                            {new Date(post._createdAt).toLocaleString}
                          </div>
                          <div className="comments flex gap-2">
                            <span className="comment-icon">
                              <img src="../comment.png" alt="" />
                            </span>
                            <span>0</span> Comments
                          </div>
                        </div>
                        <div className="bodyd text-[#696969] px-4 text-base">
                        {post.description} by {post.author.name}
                        </div>
                        <div className="text-white text-base  bg-linear font-bold w-[140px] text-center mt-8 mx-4">
                          Read More
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))
            }
          <aside className="pt-24 md:pt-0 md:w-[37%]">
            <div className="author-card bg-white w-full rounded-xl shadow-2xl py-9 px-4 flex flex-col gap-y-5 justify-center items-center">
              <div className="border-2 border-red-600 rounded-full w-[140px] h-[140px] p-[10px]">
                <img src="../author.png" className="w-full h-full rounded-full overflow-hidden" alt="" />
              </div>
              <div className="font-semibold text-lg text-[#000] poppins">Ifeoma Okpara</div>
              <div className="text-[#696969] text-base">Daily someday is not a day of the week.</div>
              <div className="socialmedialinks flex w-full justify-center items-center gap-x-6">
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
            <div className="latest-blog pt-16">
              <div className="poppins font-semibold text-xl mb-5">Latest Blogs</div>
              <div className=" flex flex-col gap-y-8 latest-blogss">
                <div className="flex gap-x-4">
                  <div className="w-[35%]">
                    <img src="../post-img.jpg" className="w-full rounded-md" alt="" />
                  </div>
                  <div className="flex flex-col gap-y-1 justify-center ">
                    <div className="text-[#000] text-base font-semibold">Be Yourself Everyone Else</div>
                    <div className="text-sm text-[#515151]">20 Nov, 2020</div>
                  </div>
                </div>
                <div className="flex gap-x-4">
                  <div className="w-[35%]">
                    <img src="../post-img.jpg" className="w-full rounded-md" alt="" />
                  </div>
                  <div className="flex flex-col gap-y-1 justify-center ">
                    <div className="text-[#000] text-base font-semibold">Be Yourself Everyone Else</div>
                    <div className="text-sm text-[#515151]">20 Nov, 2020</div>
                  </div>
                </div>
                <div className="flex gap-x-4">
                  <div className="w-[35%]">
                    <img src="../post-img.jpg" className="w-full rounded-md" alt="" />
                  </div>
                  <div className="flex flex-col gap-y-1 justify-center ">
                    <div className="text-[#000] text-base font-semibold">Be Yourself Everyone Else</div>
                    <div className="text-sm text-[#515151]">20 Nov, 2020</div>
                  </div>
                </div>
                <div className="flex gap-x-4">
                  <div className="w-[35%]">
                    <img src="../post-img.jpg" className="w-full rounded-md" alt="" />
                  </div>
                  <div className="flex flex-col gap-y-1 justify-center ">
                    <div className="text-[#000] text-base font-semibold">Be Yourself Everyone Else</div>
                    <div className="text-sm text-[#515151]">20 Nov, 2020</div>
                  </div>
                </div>

              </div>
            </div>
            <div className="categories pt-16">
              <div className="poppins font-semibold text-xl mb-5">Categories</div>
              <div className=" flex flex-col gap-y-3 cats text-[#696969] text-base ">
                <div className="hover:underline hover:text-[#013ca3]">Development (1)</div>
                <div className="hover:underline hover:text-[#013ca3]">Guide (1)</div>
                <div className="hover:underline hover:text-[#013ca3]">Inspiration (1)</div>
                <div className="hover:underline hover:text-[#013ca3]">Latest News (1)</div>
                <div className="hover:underline hover:text-[#013ca3]">Revenue (1)</div>
                <div className="hover:underline hover:text-[#013ca3]">Start Up (1)</div>
                <div className="hover:underline hover:text-[#013ca3]">Technology (1)</div>
              </div>
            </div>
          </aside>
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
  }`

  const posts = await sanityClient.fetch(query)

  return {
    props: {
      posts,
    },
  }
}

