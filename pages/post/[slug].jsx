import { sanityClient, urlFor } from "../../sanity";
import {useState } from "react"
import PortableText from "react-portable-text";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion, useCycle } from "framer-motion";
import MenuToggler from "../../components/MenuToggler";
import Navigation from "../../components/Navigation";
import Link from "next/link"

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

function Post({ post }) {
//   console.log(post);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [data, setData] = useState("");
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (data) => {
      fetch('/api/createComment', {
        method: 'POST',
        body: JSON.stringify(data),
      }).then(() => {
          setData(data)
          setSubmitted(true)
          console.log(data)
      }).catch((err) => {
        console.log(err)
        setSubmitted(false)
      })
    }
    const [isOpen, setToggleOpen] = useState(false);

  return (
    <main>
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
                  className='absolute top-0 right-0 bottom-0 w-[300px] sm:hidden'>
                  <motion.div className="background bg-white absolute top-0 right-0 bottom-0 h-screen w-[300px]" variants={sidebarVariants}/>
                  <MenuToggler toggle={() => setToggleOpen(!isOpen)}/>
                  <Navigation items={[{name:'Home', location:'/'}, {name:'About', location:'/#about'},{name:'Services', location:'/#services'},{name:'Blog', location:'/blogpage'}, {name:'Portfolio', location:'/portfolio'}, {name:'Contact', location:'/contact'}]}/>
                </motion.nav>

            </div>
      </header>
      <img
        className="w-full h-40 object-cover"
        src={urlFor(post.mainImage).url()}
        alt=""
      />

      <article className="max-w-3xl mx-auto p-5">
        <h1 className="text-3xl mt-10 mb-3">{post.title}</h1>
        <h2 className="text-xl font-light text-[#696969] mb-2">
          {post.description}
        </h2>
        <div className="flex items-center space-x-2">
          <img
            className="w-10 h-10 rounded-full"
            src={urlFor(post.author.image).url()}
            alt=""
          />
          <p className="font-extralight text-sm">
            Blog post by{" "}
            <span className="text-[#696969]">{post.author.name}</span> -
            Published at {new Date(post._createdAt).toLocaleString()}
          </p>
        </div>

        <div className="mt-10">
          <PortableText
            className=""
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            content={post.body}
            serializers={{
              h1: (props) => (
                <h1 className="text-2xl font-bold my-5" {...props} />
              ),
              h2: (props) => (
                <h1 className="text-xl font-bold my-5" {...props} />
              ),
              li: ({ children }) => (
                <li className="ml-4 list-disc">{children}</li>
              ),
              link: ({ href, children }) => (
                <a href={href} className="text-blue-500 hover:underline">
                  {children}
                </a>
              ),
            }}
          />
        </div>
      </article>

      <hr className="max-w-lg my-5 border border-gray-500 mx-auto mt-32" />

    
      {
        submitted ? (
            <div className="flex flex-col p-10 my-10 bg-blue-700 text-white max-w-2xl mx-auto">
                <h3 className="text-3xl font-bold">Thank you for submitting your comment!</h3>
                <p>Once it has been approved, it will appear below!</p>
            </div>
        ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col p-5 max-w-2xl mx-auto mb-10" >
                <h3 className="text-sm text-[#696969]"> Enjoyed this article?</h3>
                <h4 className="text-3xl font-bold">Leave a comment below!</h4>
                <hr className="py-3 mt-2" />

                <input {...register("_id")} type="hidden" name="_id" value={post._id} />

                <label className="block mb-5">
                <span className="text-gray-700">Name</span>
                <input
                    {...register("name", { required: true })}
                    className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-blue-800 focus:ring outline-none"
                    type="text"
                    placeholder="George Blonde"
                />
                </label>
                <label className="block mb-5">
                <span className="text-gray-700">Email</span>
                <input
                    {...register("email", { required: true })}
                    className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-blue-800 focus:ring outline-none"
                    type="email"
                    placeholder="GeorgeBlonde@gmail.com"
                />
                </label>
                <label className="block mb-5">
                <span className="text-gray-700">Comment</span>
                <textarea
                    {...register("comment", { required: true })}
                    className="shadow border rounded py-2 px-3 form-textarea mt-1 block w-full ring-blue-800 focus:ring outline-none"
                    placeholder="Type your comments here"
                    rows={8}
                />
                </label>

                <div className="flex flex-col p-5">
                {errors.name && (
                    <span className="text-red-500">- The Name Field is required</span>
                )}
                {errors.comment && (
                    <span className="text-red-500">
                    - The Comment Field is required
                    </span>
                )}
                {errors.email && (
                    <span className="text-red-500">- The Email Field is required</span>
                )}
                </div>
                <input
                type="submit"
                className="shadow bg-[#ff583c]  hover:bg-[#ff583c] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
                />
            </form>
        )
      }

      <div className="flex flex-col mb-20 p-10 my-10 max-w-2xl mx-auto shadow-[#ff583c] shadow space-y-2">
        <h3 className="text-4xl">Comments</h3>
        <hr className="pb-2"/>

        {post.comments.map((comment) => (
            <div key={comment._id}>
                <p>
                    <span className="text-blue-700">{comment.name}: </span>
                    {comment.comment}
                </p>
            </div>
        ))}
      </div>
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
  );
}

export default Post;

export const getStaticPaths = async () => {
  const query = `*[_type == "post"]{
        _id,
        slug {
            current
        }
    }`;

  const posts = await sanityClient.fetch(query);

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  // *[_type == "post"] && slug.current == $slug][0]{
  //     _id,
  //     _createdAt,
  //     title,
  //     author-> {
  //         name,
  //         image
  //     },
  //     'comments': *[
  //         _type =="comment" &&
  //         post._ref == ^._id &&
  //         approved == true],
  //         description,
  //         mainImage,
  //         slug,
  //         body
  // }
  const query = `*[_type == "post" && slug.current == $slug][0]{
            _id,
            _createdAt,
            title,
            author-> {
                name,
                image
            },
            'comments': *[
                _type =="comment" &&
                post._ref == ^._id &&
                approved == true],
                description,
                mainImage,
                slug,
                body
        }`;

  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 3600, //after 3600 seconds 60mins/1hr, it'll update the old cached version
  };
};
