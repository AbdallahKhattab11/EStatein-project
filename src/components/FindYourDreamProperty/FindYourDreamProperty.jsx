import { IoIosSearch } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";

import locationIcon from "/src/assets/icons/location-icon.svg";
import propertyTypeIcon from "/src/assets/icons/property-type-icon.svg";
import pricingRangeIcon from "/src/assets/icons/pricing-range-con.svg";
import propertysizeIcon from "/src/assets/icons/property-size-icon.svg";
import buildYearIcon from "/src/assets/icons/build-year-icon.svg";

const FindYourDreamProperty = () => {
  const properties = [
    {
      id:"property-1",
      title: "Location",
      icon: locationIcon,
    },
    {
      id:"property-2",
      title:"Property Type",
      icon: propertyTypeIcon,
    },
    {
      id:"property-3",
      title:"Pricing Rang",
      icon: pricingRangeIcon,
    },
    {
      id:"property-4",
      title:"Property Size",
      icon: propertysizeIcon,
    },
    {
      id:"property-5",
      title:"Build Year",
      icon: buildYearIcon,
    },
  ];
  return (
    <div className="bg-gray8">
      <div className="bg-gray8 py-10 md:pb-15 md:pt-0 h-auto md:h-[300px] border-b-1 border-gray15 bg-[linear-gradient(120deg,_#26262691_5%,_#141414_30%)]">
        <div className="container px-4 h-full">
          <div className="h-full flex flex-col justify-center">
            <h1 className="text-[clamp(28px,2vw,48px)] text-white font-semibold mb-5">
              Find Your Dream Property
            </h1>
            <p className="text-gray60 text-[clamp(14px,1vw,18px)] font-medium leading-6">
              Welcome to Estatein, where your dream property awaits in every
              corner of our beautiful world. Explore our curated selection of
              properties, each offering a unique story and a chance to redefine
              your life. With categories to suit every dreamer, your journey{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray8 ">
        <div className="container px-4">
          <div className="searchForAProperty flex flex-col gap-5 lg:gap-0">
            <div className="search">
              <div className="bg-gray10 py-1 px-2 rounded-xl h-[70px] md:h-[88px] relative w-full lg:w-[90%] mx-auto ">
                <input
                  className="text-gray60 outline-none bg-gray8  h-full w-full rounded-xl border-1 border-gray15 text-[clamp(16px,1vw,20px)] font-medium px-2 md:px-4"
                  type="text"
                  name="search"
                  placeholder="Search For A Property"
                />
                <button className="bg-purple60 rounded-lg w-[60px] px-3 md:w-auto h-[45px] flex items-center justify-center cursor-pointer absolute right-5 top-1/2 -translate-y-1/2" type="button"><IoIosSearch className="text-white text-[20px] md:mr-1.5"/><span className="hidden md:inline text-[16px] text-white font-medium tracking-wide">Find Property</span></button>
              </div>
            </div>
            <div className="properties bg-gray10 p-5 rounded-md flex flex-col gap-5 lg:flex-row lg:justify-center">
              {properties.map((obj)=> {
                return <div key={obj.id} className="bg-gray8 border-1 border-gray15 rounded-xl py-3 px-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src={obj.icon} alt={obj.title} />
                    <h3 className=" border-l-2 border-gray15 pl-2 text-gray60 text-[16px] font-medium">{obj.title}</h3>
                  </div>
                  <div className="selectBtn">
                    <button className="bg-gray10 p-2 text-gray60 rounded-full text-[20px] font-medium cursor-pointer"><FaAngleDown /></button>
                  </div>
                </div>
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindYourDreamProperty;
