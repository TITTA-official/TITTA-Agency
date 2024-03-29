import { motion, useCycle } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import PortableText from "react-portable-text";
import Footer from "../../components/Footer";
import MenuToggler from "../../components/MenuToggler";
import Navbar from "../../components/Navbar";
import Navigation from "../../components/Navigation";
import { sanityClient, urlFor } from "../../sanity";
import moment from "moment/moment";

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
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    fetch("/api/createComment", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(() => {
        setData(data);
        setSubmitted(true);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
        setSubmitted(false);
      });
  };
  const [isOpen, setToggleOpen] = useState(false);

  return (
    <main>
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
      <div className="relative w-full h-40 ">
        <Image
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          src={urlFor(post.mainImage).url()}
          alt=""
        />
      </div>

      <article className="max-w-3xl p-5 mx-auto">
        <h1 className="mt-10 mb-3 text-3xl">{post.title}</h1>
        <h2 className="text-xl font-light text-[#696969] mb-2">
          {post.description}
        </h2>
        <div className="flex items-center space-x-2">
          <span className="relative block w-10 h-10 rounded-full">
            <Image
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              src={urlFor(post.author.image).url()}
              alt=""
            />
          </span>
          <p className="text-sm font-extralight">
            Blog post by{" "}
            <span className="text-[#696969]">{post.author.name}</span> -
            Published at {moment(post._createdAt).format("LLL")}
          </p>
        </div>

        <div className="mt-10">
          <PortableText
            className=""
            dataset={process.env.NEXT_SANITY_DATASET || "production"}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "hfj3n0kh"}
            content={post.body}
            serializers={{
              h1: (props) => (
                <h1 className="my-5 text-2xl font-bold" {...props} />
              ),
              h2: (props) => (
                <h1 className="my-5 text-xl font-bold" {...props} />
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

      <hr className="max-w-lg mx-auto my-5 mt-32 border border-gray-500" />

      {submitted ? (
        <div className="flex flex-col p-10 my-10 bg-[#104cba] text-white max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold">
            Thank you for submitting your comment!
          </h3>
          <p>Once it has been approved, it will appear below!</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col max-w-2xl p-5 mx-auto mb-10"
        >
          <h3 className="text-sm text-[#696969]"> Enjoyed this article?</h3>
          <h4 className="text-3xl font-bold">Leave a comment below!</h4>
          <hr className="py-3 mt-2" />

          <input
            {...register("_id")}
            type="hidden"
            name="_id"
            value={post._id}
          />

          <label className="block mb-5">
            <span className="text-gray-700">Name</span>
            <input
              {...register("name", { required: true })}
              className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-[#104cba] focus:ring outline-none"
              type="text"
              placeholder="George Blonde"
            />
          </label>
          <label className="block mb-5">
            <span className="text-gray-700">Email</span>
            <input
              {...register("email", { required: true })}
              className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-[#104cba] focus:ring outline-none"
              type="email"
              placeholder="GeorgeBlonde@gmail.com"
            />
          </label>
          <label className="block mb-5">
            <span className="text-gray-700">Comment</span>
            <textarea
              {...register("comment", { required: true })}
              className="shadow border rounded py-2 px-3 form-textarea mt-1 block w-full ring-[#104cba] focus:ring outline-none"
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
              <span className="text-red-500">
                - The Email Field is required
              </span>
            )}
          </div>
          <input
            type="submit"
            className="shadow bg-[#104cba]  hover:bg-[#104cba] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
          />
        </form>
      )}

      <div className="flex flex-col mb-20 p-10 my-10 max-w-2xl mx-auto shadow-[#104cba] shadow space-y-2">
        <h3 className="text-4xl">Comments</h3>
        <hr className="pb-2" />

        {post.comments.map((comment) => (
          <div key={comment._id}>
            <p>
              <span className="text-[#104cba]">{comment.name}: </span>
              {comment.comment}
            </p>
          </div>
        ))}
      </div>
      <Footer />
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
