import Image from "next/image";
import React from "react";

function Footer() {
  const [submitting, setSubmitting] = useState(false);
  let emailRef = useRef(null);
  const handleSubmit = (e) => {
    setSubmitting(true);
    e.preventDefault();
    let data = {
      email: emailRef.current.value,
    };
    console.log(data);
    fetch("/api/subscribe", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(() => {
        setSubmitting(true);
      })
      .catch((err) => {
        console.error(err);
        setSubmitting(true);
      });
  };
  return (
    <footer className="w-full px-4 pt-20 footer blog md:pt-0">
      <div className="grid grid-cols-1 mx-auto sm:grid-cols-2 lg:justify-items-between lg:items-start lg:grid-cols-4 lg:pt-28 gap-x-6 sm:max-w-6xl gap-y-14">
        <div className="flex flex-col gap-y-1">
          <div className="relative w-32 h-16 mb-8">
            <Image
              layout="fill"
              src="/titawhite.png"
              alt="logo"
              className="w-full"
            />
          </div>
          {/* <div className="max-w-xs leading-relaxed">
            Lorem ipsum dolor sit amet.
          </div> */}
          <div className="flex items-center w-full socialmedialinks gap-x-6">
            <div className="fb relative w-8 h-8">
              <Image layout="fill" src="/facebook.png" alt="icon" />
            </div>
            <div className="twitter relative w-8 h-8">
              <Image layout="fill" src="/twitter.png" alt="icon" />
            </div>
            <div className="instagram relative w-8 h-8">
              <Image layout="fill" src="/instagram.png" alt="icon" />
            </div>
          </div>
        </div>
        <div className="flex flex-col stuffz gap-y-1 ">
          <div className="font-semibold text-[17px] poppins mb-4">
            Quick Links
          </div>
          <div className="">Pricing</div>
          <div className="">Tracking</div>
          <div className="">Terms of Services</div>
          <div className="">Customization</div>
          <div className="">Contact Us</div>
        </div>
        <div className="flex flex-col gap-y-1 ">
          <div className="font-semibold text-[17px] poppins mb-4">
            Contact Us
          </div>
          <div className="max-w-[18rem]">
            121 King St, Melbourne VIC 3000, Australia
          </div>
          <div className="">Info@example.com</div>
          <div className="">+234 816 385 7315</div>
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
            className="flex w-full h-full mt-2 overflow-hidden rounded subemail"
          >
            <input
              type="text"
              className="px-7 py-4 w-[82%]"
              placeholder="Email Address"
            />
            <button
              disabled={submitting}
              style={{ opacity: submitting ? ".5" : "1" }}
              type="submit"
              className="relative h-full bttn border-0 object-contain w-[18%]"
            >
              <Image layout="fill" src="/sub-button.png" alt="sub" />
            </button>
          </form>
        </div>
      </div>
      <section className="sm:max-w-6xl mx-auto cprght border-t-[#515dbb] border-t mt-24 py-6 text-center  text-[#a7b4df] text-sm">
        2022 TITTA. All Rights Reserved.
      </section>
    </footer>
  );
}

export default Footer;
