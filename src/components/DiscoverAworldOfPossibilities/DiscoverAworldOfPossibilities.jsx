import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

import stars from "/src/assets/svg/Featured-Properties-stars.svg";
import SeasideImg from "/src/assets/images/seaside-serenity.png";
import metropolitanImg from "/src/assets/images/Metropolitan-haven.png";
import rusticRetreatImg from "/src/assets/images/rustic-retreat.png";

import bedroomIcon from "/src/assets/icons/bed-icon.svg";
import bathroomIcon from "/src/assets/icons/bathroom-icon.svg";
import villaIcon from "/src/assets/icons/villa-icon.svg";

import FeaturedPropertiesSwiperSlide from "../FeaturedPropertiesSwiperSlide/FeaturedPropertiesSwiperSlide";

const DiscoverAworldOfPossibilities = () => {
  const data = [
    {
      img: SeasideImg,
      title: "Seaside Serenity Villa",
      desc: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...",
      properties: ["4-Bedroom", "3-Bathroom", "Villa"],
      propertiesIcons: [bedroomIcon, bathroomIcon, villaIcon],
    },
    {
      img: metropolitanImg,
      title: "Metropolitan Haven",
      desc: "A chic and fully-furnished 2-bedroom apartment with panoramic city views and ...",
      properties: ["2-Bedroom", "2-Bathroom", "Villa"],
      propertiesIcons: [bedroomIcon, bathroomIcon, villaIcon],
    },
    {
      img: rusticRetreatImg,
      title: "Rustic Retreat Cottage",
      desc: "An elegant 3-bedroom, 3-bathroom townhouse in a gated community thats awesome...",
      properties: ["3-Bedroom", "3-Bathroom", "Villa"],
      propertiesIcons: [bedroomIcon, bathroomIcon, villaIcon],
    },
    {
      img: SeasideImg,
      title: "Seaside Serenity Villa",
      desc: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...",
      properties: ["4-Bedroom", "3-Bathroom", "Villa"],
      propertiesIcons: [bedroomIcon, bathroomIcon, villaIcon],
    },
    {
      img: metropolitanImg,
      title: "Metropolitan Haven",
      desc: "A chic and fully-furnished 2-bedroom apartment with panoramic city views and ...",
      properties: ["2-Bedroom", "2-Bathroom", "Villa"],
      propertiesIcons: [bedroomIcon, bathroomIcon, villaIcon],
    },
    {
      img: rusticRetreatImg,
      title: "Rustic Retreat Cottage",
      desc: "An elegant 3-bedroom, 3-bathroom townhouse in a gated community thats awesome... Read More",
      properties: ["3-Bedroom", "3-Bathroom", "Villa"],
      propertiesIcons: [bedroomIcon, bathroomIcon, villaIcon],
    },
  ];
  return (
    <section className="FeaturedProperties bg-gray8 pt-20">
      <div className="container flex flex-col p-5 ">
        <div className="titles mb-[50px]">
          <img
            src={stars}
            className="mb-2 md:mb-2.5"
            alt="Featured Properties stars"
          />
          <h2 className="text-white text-[clamp(28px,2vw,48px)] font-semibold mb-2 md:mb-2.5">
            Discover A World Of Possibilities
          </h2>
          <div className="grid grid-cols-3">
            <p className="col-span-3 md:col-span-2 leading-5 text-gray60 text-[clamp(14px,2vw,16px)] font-medium">{`Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home`}</p>
            
          </div>
        </div>
        <div className="pb-[30px] border-b-1 border-gray15">
          <Swiper
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            spaceBetween={15}
            navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
            {data.map(
              ({ img, title, desc, properties, propertiesIcons }, index) => {
                return (
                  <SwiperSlide key={index} className=" ">
                    <FeaturedPropertiesSwiperSlide
                      img={img}
                      title={title}
                      desc={desc}
                      properties={properties}
                      propertiesIcons={propertiesIcons}
                    />
                  </SwiperSlide>
                );
              }
            )}
          </Swiper>
        </div>
        <div className="mt-5 flex items-center justify-end">
          <div className="flex gap-2.5 text-white text-2xl">
            <div className="custom-prev size-[44px] border-1 border-gray15 rounded-full flex justify-center items-center bg-gray10 cursor-pointer">
              <FaArrowLeft />
            </div>
            <div className="custom-next size-[44px] border-1 border-gray15 rounded-full flex justify-center items-center bg-gray10 cursor-pointer">
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverAworldOfPossibilities;
