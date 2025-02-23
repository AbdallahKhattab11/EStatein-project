import { Link } from "react-router-dom"

import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import stars from "/src/assets/svg/Featured-Properties-stars.svg";
import Question from "../Question/Question";

const FrequentlyAskedQuestions = () => {
  const data = [
    {
      title: "How do I search for properties on Estatein?",
      desc: "Learn how to use our user-friendly search tools to find properties that match your criteria.",
    },
    {
      title: "What documents do I need to sell my property through Estatein?",
      desc: "Find out about the necessary documentation for listing your property with us.",
    },
    {
      title: "How can I contact an Estatein agent?",
      desc: "Discover the different ways you can get in touch with our experienced agents.",
    },
    {
      title: "How do I search for properties on Estatein?",
      desc: "Learn how to use our user-friendly search tools to find properties that match your criteria.",
    },
    {
      title: "What documents do I need to sell my property through Estatein?",
      desc: "Find out about the necessary documentation for listing your property with us.",
    },
    {
      title: "How can I contact an Estatein agent?",
      desc: "Discover the different ways you can get in touch with our experienced agents.",
    },
  ]
  return (
    <section className="FrequentlyAskedQuestions bg-gray8 pt-20">
      <div className="container p-5">
      <div className="titles mb-[50px]">
          <img
            src={stars}
            className="mb-2 md:mb-2.5"
            alt="Featured Properties stars"
          />
          <h2 className="text-white text-[clamp(28px,2vw,48px)] font-semibold mb-2 md:mb-2.5">
          Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-3">
            <p className="col-span-3 md:col-span-2 leading-5 text-gray60 text-[clamp(14px,2vw,16px)] font-medium">{`Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.`}</p>
            <button
              type="button"
              className="hidden md:flex md:items-end md:justify-center justify-self-end self-center text-white text-[14px] text-nowrap cursor-pointer font-medium px-5 py-3.5 bg-gray10 border-1 border-gray15 rounded-lg w-[155px] h-[50px] "
            >
              <Link to="/about-us">View All FAQ&apos;s</Link>
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
            navigation={{ nextEl: ".custom-next3", prevEl: ".custom-prev3" }}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
            {data.map(({ title, desc, }, index) => {
              return (
                <SwiperSlide key={index}>
                  <Question
                    title={title}
                    desc={desc}
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
            <Link to="/about-us">View All FAQ&apos;s</Link>
          </button>
          <div className="flex gap-2.5 text-white text-2xl">
            <div className="custom-prev3 size-[44px] border-1 border-gray15 rounded-full flex justify-center items-center bg-gray10 cursor-pointer">
              <FaArrowLeft />
            </div>
            <div className="custom-next3 size-[44px] border-1 border-gray15 rounded-full flex justify-center items-center bg-gray10 cursor-pointer">
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FrequentlyAskedQuestions