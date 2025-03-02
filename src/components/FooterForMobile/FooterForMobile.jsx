import MobileLogo from "/src/assets/svg/Logo-Mobile.svg";
import LaptopLogo from "/src/assets/svg/Logo-Laptop.svg";
import DesktopLogo from "/src/assets/svg/Logo-Desktop.svg";

import sendIcon from "/src/assets/icons/send-icon.svg";
import gmailIcon from "/src/assets/icons/gmail-icon.svg";
import { useState } from "react";

const FooterForMobile = () => {
  const [email, setEmail] = useState("");
  const homeDetails = [
    "Hero Section",
    "Features",
    "Properties",
    "Testimoniaals",
    "FAQ's",
  ];
  const aboutUsDetails = [
    "Our Story",
    "Our Works",
    "How It Works",
    "Our Team",
    "Our Clients",
  ];
  const propertiesDetails = ["Portfolio", "Categories"];
  const servicesDetails = [
    "Valuation Mastery",
    "Strategic Marketing",
    "Negotiation Wizardry",
    "Closing Success",
    "Property Management",
  ];
  const contactUsDetails = ["Contact Form", "Our Offices"];

  return (
    <div>
      <div className="con1 mb-12.5 md:mb-0">
        <div className="logo mb-5 md:mb-6">
          <img
            src={MobileLogo}
            alt="Logo"
            className="md:hidden w-[93px] h-[28px]"
          />
          <img
            src={LaptopLogo}
            alt="Logo"
            className="hidden md:block lg:hidden w-[113px] h-[48px]"
          />
          <img
            src={DesktopLogo}
            alt="Logo"
            className="hidden lg:block w-[160px] h-[34px]"
          />
        </div>
        <div className="h-[52px] relative">
          <input
            type="email"
            name="email"
            id="email"
            className="text-white text-[16px] font-medium pl-3 w-full h-full border-2 border-gray15 rounded-xl outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" 🖂 Enter Your Email"
          />
          <img
            src={sendIcon}
            alt="Send Icon"
            className="absolute top-1/2 right-5  -translate-y-1/2 cursor-pointer hover:scale-115 transition-all duration-200"
          />
        </div>
      </div>
      <div className="">
        <div className="top flex mb-4">
          <div className="con2 flex flex-col gap-4 md:gap-6 mb-6 w-[50%] pl-4 border-r-1 border-gray15 relative">
            <h4 className="text-[16px] md:text-[18px] font-medium text-gray60">
              Home
            </h4>
            <ul className="text-[14px] md:text-[16px] text-white font-medium flex flex-col gap-4 md:gap-5">
              {homeDetails.map((e, i) => {
                return <li key={i}>{e}</li>;
              })}
            </ul>
            <div className="before:absolute before:buttom-0 before:left-1/2 before:w-[80%] before:-translate-x-1/2 before:h-[1px] before:bg-gray15"></div>
          </div>
          <div className="con3 flex flex-col gap-4 md:gap-6 mb-6 w-[50%] pl-4 relative">
            <h4 className="text-[16px] md:text-[18px] font-medium text-gray60">
              About Us
            </h4>
            <ul className="text-[14px] md:text-[16px] text-white font-medium flex flex-col gap-4 md:gap-5 ">
              {aboutUsDetails.map((e, i) => {
                return <li key={i}>{e}</li>;
              })}
            </ul>
            <div className="before:absolute before:buttom-0 before:left-1/2 before:w-[80%] before:-translate-x-1/2 before:h-[1px] before:bg-gray15"></div>
          </div>
        </div>
        <div className="buttom flex">
          <div className="left w-[50%] ">
            <div className="con4 flex flex-col gap-4 md:gap-6 mb-6 pl-4 relative">
              <h4 className="text-[16px] md:text-[18px] font-medium text-gray60">
                Properties
              </h4>
              <ul className="text-[14px] md:text-[16px] text-white font-medium flex flex-col gap-4 md:gap-5">
                {propertiesDetails.map((e, i) => {
                  return <li key={i}>{e}</li>;
                })}
              </ul>
              <div className="before:absolute before:buttom-0 before:left-1/2 before:w-[80%] before:-translate-x-1/2 before:h-[1px] before:bg-gray15"></div>
            </div>
            <div className="con6 flex flex-col gap-4 md:gap-6 pl-4 relative">
              <h4 className="text-[16px] md:text-[18px] font-medium text-gray60">
                Contact Us
              </h4>
              <ul className="text-[14px] md:text-[16px] text-white font-medium flex flex-col gap-4 md:gap-5">
                {contactUsDetails.map((e, i) => {
                  return <li key={i}>{e}</li>;
                })}
              </ul>
              <div className="before:absolute before:buttom-0 before:left-1/2 before:w-[80%] before:-translate-x-1/2 before:h-[1px] before:bg-gray15"></div>
            </div>
          </div>
          <div className="right w-[50%] border-l-1 border-gray15">
            <div className="con5 flex flex-col gap-4 md:gap-6 pl-4 relative">
              <h4 className="text-[16px] md:text-[18px] font-medium text-gray60">
                Services
              </h4>
              <ul className="text-[14px] md:text-[16px] text-white font-medium flex flex-col gap-4 md:gap-5">
                {servicesDetails.map((e, i) => {
                  return <li key={i}>{e}</li>;
                })}
              </ul>
              <div className="before:absolute before:buttom-0 before:left-1/2 before:w-[80%] before:-translate-x-1/2 before:h-[1px] before:bg-gray15"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterForMobile;
