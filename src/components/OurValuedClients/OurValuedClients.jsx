import Titles from "../Titles/Titles";

import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import domainIcon from "/src/assets/icons/domain-icon.svg";
import categoryIcon from "/src/assets/icons/category-icon.svg";

const OurValuedClients = () => {
  const h = "Our Valued Clients";
  const p =
    "At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving";
  const data = [
    {
      id: "valuedClients1",
      since: "Since 2019",
      name: "ABC Corporation",
      domain: "Commercial Real Estate",
      category: "Luxury Home Developement",
      desc: "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. ",
    },
    {
      id: "valuedClients2",
      since: "Since 2018",
      name: "GreenTech Enterprises",
      domain: "Commercial Real Estate",
      category: "Retail Space",
      desc: "Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.",
    },
    {
      id: "valuedClients3",
      since: "Since 2019",
      name: "ABC Corporation",
      domain: "Commercial Real Estate",
      category: "Luxury Home Developement",
      desc: "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. ",
    },
    {
      id: "valuedClients4",
      since: "Since 2018",
      name: "GreenTech Enterprises",
      domain: "Commercial Real Estate",
      category: "Retail Space",
      desc: "Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.",
    },
  ];
  return (
    <div className="bg-gray8 py-10 md:py-15">
      <div className="container px-4 flex flex-col gap-15">
        <div className="top">
          <Titles h={h} p={p} />
        </div>
        <div className="bottom ">
          <div className="pb-8 border-b-1 border-gray15">
            <Swiper
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
              }}
              spaceBetween={30}
              navigation={{ nextEl: ".custom-next4", prevEl: ".custom-prev4" }}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
            >
              {data.map((obj) => {
                return (
                  <SwiperSlide key={obj.id}>
                    <div className="con p-2 bg-gray10 rounded-xl">
                      <div className="bg-gray8 border-1 border-gray15 rounded-xl p-7.5 flex flex-col gap-10">
                        <div className="flex flex-col gap-5 md:flex-row md:justify-between md:items-center">
                          <div className="">
                            <p className="text-gray60 text-[clamp(14px,1vw,18px)] font-medium leading-5 mb-2">
                              {obj.since}
                            </p>
                            <h2 className="text-white text-[clamp(20px,1vw,30px)] font-semibold">
                              {obj.name}
                            </h2>
                          </div>
                          <button
                            className="bg-gray10 text-white text-[clamp(14px,1vw,18px)] cursor-pointer font-medium h-[49px] md:h-[60px] w-full md:w-[148px] border-1 border-gray15 rounded-lg"
                            type="button"
                          >
                            Visit Website
                          </button>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="domain py-4">
                            <div className="flex gap-1 mb-4">
                              <img
                                src={domainIcon}
                                alt="Domain icon"
                                className="size-[18px]"
                              />
                              <p className="text-gray60 text-[clamp(12px,1vw,16px)] font-medium">
                                Domain
                              </p>
                            </div>
                            <h2 className="text-white text-[clamp(14px,1vw,18px)] font-medium">
                              {obj.domain}
                            </h2>
                          </div>
                          <div className="category pl-5 py-4 border-l-1 border-gray15">
                            <div className="flex gap-1 mb-4">
                              <img
                                src={categoryIcon}
                                alt="Category icon"
                                className="size-[18px]"
                              />
                              <p className="text-gray60 text-[clamp(12px,1vw,16px)] font-medium">
                                Category
                              </p>
                            </div>
                            <h2 className="text-white text-[clamp(14px,1vw,18px)] font-medium">
                              {obj.category}
                            </h2>
                          </div>
                        </div>
                        <div className="w-full border-1 border-gray15 p-4 md:p-6 rounded-xl">
                          <p className="text-gray60 text-[clamp(14px,1vw,18px)] font-medium mb-4">
                            What They Said 🤗
                          </p>
                          <p className="text-white text-[clamp(16px,1vw,18px)] font-medium leading-6">
                            {obj.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="flex justify-end gap-2.5 text-white text-2xl pt-5">
            <div className="custom-prev4 size-[44px] border-1 border-gray15 rounded-full flex justify-center items-center bg-gray10 cursor-pointer">
              <FaArrowLeft />
            </div>
            <div className="custom-next4 size-[44px] border-1 border-gray15 rounded-full flex justify-center items-center bg-gray10 cursor-pointer">
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValuedClients;
