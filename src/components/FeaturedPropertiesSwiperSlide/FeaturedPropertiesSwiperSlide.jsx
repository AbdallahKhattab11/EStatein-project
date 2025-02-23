/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const FeaturedPropertiesSwiperSlide = ({img,title, desc, properties ,propertiesIcons}) => {
  return (
    <div className="con w-full p-5 border-1 border-gray15 rounded-xl flex flex-col gap-5">
      <div className="img">
        <img
          src={img}
          className="w-full h-full"
          alt="Seaside Serenity image"
        />
      </div>
      <div className="content flex flex-col gap-5">
        <h3 className="text-white text-[clamp(16px,2vw,20px)] font-semibold ">
          {title}
        </h3>
        <p className="text-gray60 text-[16px] font-medium leading-5.5 ">
          {desc}
          <span className="text-white underline cursor-pointer">
            Read More
          </span>
        </p>
        <div className="feat grid grid-cols-1  items-center gap-2.5 ">
          <div className="bedroom text-white text-[16px] bg-gray10 font-medium flex items-center  gap-2 border-2 border-gray15 rounded-2xl py-1 px-4">
            <img src={propertiesIcons[0]} className="size-5" alt="Bedroom icon" />
            <p>{properties[0]}</p>
          </div>
          <div className="bathroom text-white text-[16px] bg-gray10 font-medium flex items-center  gap-2 border-2 border-gray15 rounded-2xl py-1 px-4">
            <img src={propertiesIcons[1]} alt="bathroom icon" />
            <p>{properties[1]}</p>
          </div>
          <div className="villa text-white text-[16px] bg-gray10 font-medium flex items-center  gap-2 border-2 border-gray15 rounded-2xl py-1 px-4">
            <img src={propertiesIcons[2]} alt="villa icon" />
            <p>{properties[2]}</p>
          </div>
        </div>
        <div className="actions flex items-center justify-between gap-5 ">
          <div className="price">
            <p className="text-gray60 text-[14px] font-medium mb-1">Price</p>
            <h3 className="text-white text-[18px] md:text-[20px] font-semibold">
              $550,000
            </h3>
          </div>
          <div className="viewPropertyDetailsBtn">
            <button
              type="button"
              className="flex items-center justify-center text-white text-[12px] text-nowrap font-medium px-2 py-2 bg-purple60 rounded-md md:px-3 md:py-3 md:text-[14px]"
            >
              <Link to="/properties">View Property Details</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPropertiesSwiperSlide;
