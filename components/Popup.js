import { GrFormClose } from "react-icons/gr";
import { IconContext } from "react-icons";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { TfiEmail } from "react-icons/tfi";
import { db } from "./firebase";
import { useState, useEffect } from "react";

export default function Popup() {
  const [popup, setPopup] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setPopup(true);
    }, 10000);
  }, []);

  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [bus, setBus] = useState();
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");

  return (
    <div>
      <div
        className={`fixed transition-all duration-500 z-20 top-0 ${
          popup ? "left-0" : "left-[-100%]"
        } w-full h-full bg-black opacity-40`}
      ></div>
      <div
        className={`fixed transition-all duration-500 z-30 ${
          popup ? "left-0 md:left-[15vw]" : "left-[-110%]"
        } top-[15vh] w-[100vw] md:w-[70vw] h-[70vh] rounded-[20px] bg-white popup flex flex-col md:flex-row items-center justify-center`}
      >
        <IconContext.Provider value={{ color: "#0a2761", size: "30px" }}>
          <div className="absolute top-[5px] right-[5px] md:top-[-11px] md:right-[-11px] bg-white rounded-full shadow-sm shadow-black">
            <GrFormClose onClick={() => setPopup(false)} />
          </div>
        </IconContext.Provider>

        <IconContext.Provider value={{ color: "white", size: "50px" }}>
          <div className="bg-gradient-to-r from-[#ff3834] to-[#ff7133] static md:absolute rounded-full p-[20px] shadow-sm shadow-black -mt-[45px] md:left-[-45px] md:top-[50px]">
            <TfiEmail />
          </div>
        </IconContext.Provider>

        <div className="px-[40px] w-[50%] h-full bg-gradient-to-b from-[#3e1786] to-[#0a51c7] hidden lg:flex flex-col text-white items-center justify-center">
          <div className="text-[28px] font-semibold text-center">{`Unlock Your Business Power of Content Marketing!`}</div>
          <div className="text-[18px] italic text-center mt-[30px]">
            {`Get Free Content Ideas Tailored to Boost Your Business`}
          </div>
        </div>
        <div className="lg:px-[40px] lg:w-[50%] w-full h-full">
          <div className="lg:p-[40px] px-[30px] py-[10px] flex flex-col lg:items-end items-center justify-center">
            <div className="text-[16px] font-semibold static lg:hidden text-center">
              {`Unlock Your Business Power of Content Marketing!`}
            </div>
            <div className="w-full text-left text-[14px] md:text-[16px]">Name</div>
            <input
              className="w-full text-[14px] md:text-[16px] h-[30px] bg-[#e9e9e9] p-[10px] mb-[10px] md:mb-[16px]"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <div className="w-full text-left text-[14px] md:text-[16px]">Email Address</div>
            <input
              className="w-full h-[30px] text-[14px] md:text-[16px] bg-[#e9e9e9] p-[10px] mb-[10px] md:mb-[16px] "
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <div className="w-full text-left text-[14px] md:text-[16px]">Type of Business</div>
            <input
              className="w-full h-[30px] text-[14px] md:text-[16px] bg-[#e9e9e9] p-[10px] mb-[10px] md:mb-[16px]"
              placeholder="E.g. Restaurant, Real Estate"
              value={bus}
              onChange={(e) => {
                setBus(e.target.value);
              }}
            />
            <div className="w-full text-left text-[14px] md:text-[16px]">{`Phone Number (optional)`}</div>
            <input
              className="w-full h-[30px] text-[14px] md:text-[16px] bg-[#e9e9e9] p-[10px] mb-[10px] md:mb-[16px]"
              placeholder="E.g. Restaurant, Real Estate"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <div className="w-full text-left text-[14px] md:text-[16px]">{`Company Name (optional)`}</div>
            <input
              className="w-full h-[30px] text-[14px] md:text-[16px] bg-[#e9e9e9] p-[10px] mb-[20px]"
              placeholder="E.g. Restaurant, Real Estate"
              value={company}
              onChange={(e) => {
                setCompany(e.target.value);
              }}
            />
            <button
              className="bg-gradient-to-r from-[#ff3834] to-[#ff7133] py-[10px] px-[20px] text-white font-bold"
              onClick={() => {
                updateDoc(doc(db, "User", "Contact"), {
                  contacts: arrayUnion({ name: name, email: email, typeOfBusiness: bus, phoneNumber: phone, companyName: company }),
                });
                setPopup(false);
              }}
            >
              Get Your Free Content Ideas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
