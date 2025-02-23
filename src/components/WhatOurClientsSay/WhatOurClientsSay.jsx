import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Client from "../Client/Client";

import stars from "/src/assets/svg/Featured-Properties-stars.svg";
import wadeWarrenImg from "/src/assets/images/WadeWarren-img.png";
import emelieThomsonImg from "/src/assets/images/EmelieThomson-img.png";
import jhonMansImg from "/src/assets/images/JohnMans.png";

const WhatOurClientsSay = () => {


  const data = [
    {
      title: "Exceptional Service!",
      desc: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
      stars: <FaStar className="size-[20px] text-yellowStars"/>,
      img: wadeWarrenImg,
      name: "Wade Warren",
      address: "USA, California",
    },
    {
      title: "Efficient and Reliable",
      desc: "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
      stars: <FaStar className="size-[20px] text-yellowStars"/>,
      img: emelieThomsonImg,
      name: "Emelie Thomson",
      address: "USA, Florida",
    },
    {
      title: "Trusted Advisors",
      desc: "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
      stars: <FaStar className="size-[20px] text-yellowStars"/>,
      img: jhonMansImg,
      name: "John Mans",
      address: "USA, Nevada",
    },
    {
      title: "Exceptional Service!",
      desc: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
      stars: <FaStar className="size-[20px] text-yellowStars"/>,
      img: wadeWarrenImg,
      name: "Wade Warren",
      address: "USA, California",
    },
    {
      title: "Efficient and Reliable",
      desc: "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
      stars: <FaStar className="size-[20px] text-yellowStars"/>,
      img: emelieThomsonImg,
      name: "Emelie Thomson",
      address: "USA, Florida",
    },
    {
      title: "Trusted Advisors",
      desc: "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
      stars: <FaStar className="size-[20px] text-yellowStars"/>,
      img: jhonMansImg,
      name: "John Mans",
      address: "USA, Nevada",
    },
  ];


  return (
    <section className="WhatOurClientsSay bg-gray8 pt-20">
      <div className="container p-5">
        <div className="titles mb-[50px]">
          <img
            src={stars}
            className="mb-2 md:mb-2.5"
            alt="Featured Properties stars"
          />
          <h2 className="text-white text-[clamp(28px,2vw,48px)] font-semibold mb-2 md:mb-2.5">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-3">
            <p className="col-span-3 md:col-span-2 leading-5 text-gray60 text-[clamp(14px,2vw,16px)] font-medium">{`Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.`}</p>
            <button
              type="button"
              className="hidden md:flex md:items-end md:justify-center justify-self-end self-center text-white text-[14px] text-nowrap cursor-pointer font-medium px-5 py-3.5 bg-gray10 border-1 border-gray15 rounded-lg w-[155px] h-[50px] "
            >
              <Link to="/about-us">View All Testimonials</Link>
            </button>
          </div>
        </div>
        <div className="pb-[30px]  border-b-1 border-gray15">
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
            navigation={{ nextEl: ".custom-next2", prevEl: ".custom-prev2" }}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
            {data.map(({ img, title, desc, stars, name, address }, index) => {
              return (
                <SwiperSlide key={index}>
                  <Client
                    img={img}
                    title={title}
                    desc={desc}
                    stars={stars}
                    name={name}
                    address={address}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="mt-5 flex items-center justify-between md:justify-end">
          <button
            type="button"
            className=" md:hidden flex items-end justify-center text-white text-[14px] text-nowrap cursor-pointer font-medium px-5 py-3.5 bg-gray10 border-1 border-gray15 rounded-lg w-[155px] h-[50px] "
          >
            <Link to="/about-us">View All Testimonials</Link>
          </button>
          <div className="flex gap-2.5 text-white text-2xl">
            <div className="custom-prev2 size-[44px] border-1 border-gray15 rounded-full flex justify-center items-center bg-gray10 cursor-pointer">
              <FaArrowLeft />
            </div>
            <div className="custom-next2 size-[44px] border-1 border-gray15 rounded-full flex justify-center items-center bg-gray10 cursor-pointer">
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatOurClientsSay;
