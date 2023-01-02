import React from "react";

function Footer() {
  return (
    <footer className="w-full px-4 pt-32 footer blog md:pt-0">
      <div className="grid grid-cols-1 mx-auto sm:grid-cols-2 lg:justify-items-between lg:items-start lg:grid-cols-4 lg:pt-28 gap-x-6 sm:max-w-6xl gap-y-14">
        <div className="flex flex-col -mt-4 gap-y-1">
          <div className="w-[50%]  mb-8">
            <img src="../titawhite.png" alt="" className="w-full" />
          </div>
          <div className="max-w-xs leading-relaxed">
            Lorem ipsum dolor sit amet.
          </div>
          <div className="flex items-center w-full mt-8 socialmedialinks gap-x-6">
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
        <div className="flex flex-col stuffz gap-y-1 ">
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
            24th Street, off Ugbowo Road, Benin City Nigeria
          </div>
          <div className="">tittaorg20@gmail.com</div>
          <div className="">+234 915 967 8772</div>
        </div>

        <div className="flex flex-col gap-y-1 ">
          <div className="font-semibold text-[17px] poppins  mb-8">
            Subscribe Newsletter
          </div>
          <div className="max-w-[18rem]">
            Follow our newsletter to stay updated about us
          </div>
          <div className="flex w-full h-full mt-2 overflow-hidden rounded subemail">
            <input
              type="text"
              className="px-7 py-4 w-[82%]"
              placeholder="Email Address"
            />
            <div className="bttn border-0 object-contain w-[18%]">
              <img src="../sub-button.png" alt="" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
      <section className="sm:max-w-6xl mx-auto cprght border-t-[#515dbb] border-t mt-24 py-6 text-center  text-[#a7b4df] text-sm">
        2022 TITTA. All Rights Reserved.
      </section>
    </footer>
  );
}

export default Footer;
