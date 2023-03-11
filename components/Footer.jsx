import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import Notification from "./Notification";

function Footer() {
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  let emailRef = useRef(null);
  const handleSubmit = (e) => {
    setSubmitting(true);
    e.preventDefault();
    let data = {
      email: emailRef.current.value,
    };
    fetch("/api/subscribe", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(() => {
        setSubmitting(false);
        setMessage("Successfully subscribed");
        setTimeout(() => {
          setMessage("");
        }, 1000);
      })
      .catch((err) => {
        setSubmitting(false);
      });
  };
  return (
    <>
      {message && <Notification message={{ message, type: "success" }} />}
      <footer className="w-full px-4 pt-20 footer blog md:pt-0">
        <div className="grid grid-cols-1 mx-auto sm:grid-cols-2 lg:justify-items-between lg:items-start lg:grid-cols-4 lg:pt-28 gap-x-6 sm:max-w-6xl gap-y-14">
          <div className="flex flex-col gap-y-1">
            <div className="relative w-32 h-16 mb-5">
              <Image
                layout="fill"
                src="/titawhite.png"
                alt="logo"
                className="w-full"
              />
            </div>
            
            <div className="flex items-center w-full socialmedialinks gap-x-6">
              <a href="https://www.facebook.com/profile.php?id=100090747078779&mibextid=ZbWKwL" 
                target="_blank 
                rel="noreferrer"">
                <div className="fb relative w-8 h-8">
                  <Image layout="fill" src="/facebook.png" alt="icon" />
                </div>
              </a>
              <a
                href="https://twitter.com/Titta_Agency"
                rel="noreferrer"
                target="_blank"
              >
                <div className="twitter relative w-8 h-8">
                  <Image layout="fill" src="/twitter.png" alt="icon" />
                </div>
              </a>
              <a
                href="https://Instagram.com/tittaagency"
                target="_blank"
                rel="noreferrer"
              >
                <div className="instagram relative w-8 h-8">
                  <Image layout="fill" src="/instagram.png" alt="icon" />
                </div>
              </a>
            </div>
          </div>
          <div className="flex flex-col stuffz gap-y-1 ">
            <div className="font-semibold text-[17px] poppins mb-4">
              Quick Links
            </div>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
            <Link href="/portfolio">
              <a>Portfolio</a>
            </Link>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </div>
          <div className="flex flex-col gap-y-1 ">
            <div className="font-semibold text-[17px] poppins mb-4">
              Contact Us
            </div>
            <div className="max-w-[18rem]">
              24th Street, off Ugbowo Road, Benin City Nigeria
            </div>
            <div className="">tittaagency@gmail.com</div>
            <div className="">+234 811 04 74183</div>
          </div>

          <div className="flex flex-col gap-y-1 ">
            <div className="font-semibold text-[17px] poppins mb-4">
              Subscribe Newsletter
            </div>
            <div className="max-w-[18rem]">
              Follow our newsletter to stay updated about us
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex mt-2 rounded subemail"
            >
              <input
                type="email"
                className="px-7 py-4 w-56 outline-none"
                placeholder="Email Address"
                ref={emailRef}
              />
              <button
                disabled={submitting}
                style={{ opacity: submitting ? ".5" : "1" }}
                type="submit"
                className="relative h-14 object-contain w-fit md:w-28 bg-[#FF4134] px-2 text-sm text-white font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <section className="sm:max-w-6xl mx-auto cprght border-t-[#515dbb] border-t mt-24 py-6 text-center  text-[#a7b4df] text-sm">
          2023 TITTA. All Rights Reserved.
        </section>
      </footer>
    </>
  );
}

export default Footer;
