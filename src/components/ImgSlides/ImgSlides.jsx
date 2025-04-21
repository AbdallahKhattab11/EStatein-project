/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

import { FaLocationDot } from "react-icons/fa6";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import img1 from "../../assets/images/propertyDetails-1.svg";
import img2 from "../../assets/images/propertyDetails-2.svg";
import img3 from "../../assets/images/propertyDetails-3.svg";
import img4 from "../../assets/images/propertyDetails-4.svg";
import img5 from "../../assets/images/propertyDetails-5.svg";
import img6 from "../../assets/images/propertyDetails-6.svg";
import img7 from "../../assets/images/propertyDetails-7.svg";
import img8 from "../../assets/images/propertyDetails-8.svg";
import img9 from "../../assets/images/propertyDetails-9.svg";

const ImgSlides = () => {
  // const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const [thumbsSwiperXS, setThumbsSwiperXS] = useState(null);
  const [thumbsSwiperMD, setThumbsSwiperMD] = useState(null);
  const [activeThumbsSwiper, setActiveThumbsSwiper] = useState(null);

  const [mainSwiper, setMainSwiper] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleResize = () => {
      setActiveThumbsSwiper(
        mediaQuery.matches ? thumbsSwiperMD : thumbsSwiperXS
      );
    };
    handleResize();
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, [thumbsSwiperXS, thumbsSwiperMD]);

  useEffect(() => {
    if (mainSwiper && activeThumbsSwiper) {
      mainSwiper.thumbs.swiper = activeThumbsSwiper;
      mainSwiper.thumbs.init();
      mainSwiper.thumbs.update(true);
  
      mainSwiper.slideToLoop(currentIndex);
    }
  }, [activeThumbsSwiper]);

  const data = [
    { id: "img1", img: img1 },
    { id: "img2", img: img2 },
    { id: "img3", img: img3 },
    { id: "img4", img: img4 },
    { id: "img5", img: img5 },
    { id: "img6", img: img6 },
    { id: "img7", img: img7 },
    { id: "img8", img: img8 },
    { id: "img9", img: img9 },
  ];
  return (
    <section className="bg-gray8 pt-15 pb-5">
      <div className="container px-4 flex flex-col gap-7.5 md:gap-10">
        <div className="titles md:flex md:items-center md:justify-between">
          <div className="flex flex-col  md:flex-row md:items-center gap-2.5 md:gap-5">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
              Seaside Serenity Villa
            </h2>
            <div className="flex items-center gap-2 justify-between">
              <p className="p-2 border border-gray15 text-white inline-flex items-center gap-2 rounded-lg text-base md:text-[18px] font-medium ">
                <FaLocationDot /> <span>Malibu, California</span>
              </p>
              <p className="text-gray60 text-base font-medium md:hidden">
                Price <span className="text-white">$1,250,000</span>
              </p>
            </div>
          </div>
          <p className="text-gray60 text-base  font-medium hidden md:block">
            Price{" "}
            <span className="text-white text-xl md:text-2xl font-semibold">
              $1,250,000
            </span>
          </p>
        </div>
        <div className="swiper-container p-5 bg-gray10 rounded-lg">
          {/* Thumbs Slider md */}
          <div className="swiper-thumbnails hidden md:block h-[70px] xs:h-[85px] sm:h-[95px] md:h-[105px] bg-gray8 p-2.5 rounded-lg mb-5 border border-gray15">
            <Swiper
              className="myThumbsSwiper w-full h-full"
              modules={[Navigation, Thumbs, FreeMode]}
              onSwiper={setThumbsSwiperMD}
              navigation={{ nextEl: ".custom-next4", prevEl: ".custom-prev4" }}
              freeMode={true}
              watchSlidesProgress={true}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              breakpoints={{
                200: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                400: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 6,
                  spaceBetween: 10,
                },
              }}
            >
              {data.map((obj) => {
                return (
                  <SwiperSlide key={obj.id} className="w-full ">
                    <div className="w-full h-full rounded-lg ">
                      <img
                        src={obj.img}
                        alt="img"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          {/* Main Swiper */}
          <div className="p-1">
            <Swiper
              className=""
              modules={[Navigation, Pagination, Thumbs, FreeMode]}
              onSwiper={setMainSwiper}
              onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
              thumbs={{ swiper: activeThumbsSwiper }}
              navigation={{ nextEl: ".custom-next4", prevEl: ".custom-prev4" }}
              pagination={{
                dynamicBullets: false,
                // swiper-pagination-bullets-dynamic swiper-pagination-bullets swiper-pagination-horizontal
                dynamicMainBullets: 2,
                el: ".custom-pagination",
              }}
              freeMode={true}
              watchSlidesProgress={true}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              breakpoints={{
                300: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
              }}
            >
              {data.map((obj) => {
                return (
                  <SwiperSlide key={obj.id} className="w-full ">
                    <div className="w-full aspect-square rounded-lg ">
                      <img
                        src={obj.img}
                        alt="img"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          {/* Thumbs Slider xs */}
          <div className="swiper-thumbnails block md:hidden h-[70px] xs:h-[85px] sm:h-[95px] md:h-[105px] bg-gray8 p-2.5 rounded-lg mt-5 border border-gray15">
            <Swiper
              className="myThumbsSwiper w-full h-full"
              modules={[Navigation, Thumbs, FreeMode]}
              onSwiper={setThumbsSwiperXS}
              navigation={{ nextEl: ".custom-next4", prevEl: ".custom-prev4" }}
              freeMode={true}
              watchSlidesProgress={true}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              breakpoints={{
                200: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                400: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 6,
                  spaceBetween: 10,
                },
              }}
            >
              {data.map((obj) => {
                return (
                  <SwiperSlide key={obj.id} className="w-full ">
                    <div className="w-full h-full rounded-lg ">
                      <img
                        src={obj.img}
                        alt="img"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="pagination w-full h-[60px] mt-5 bg-gray8 p-2.5 rounded-3xl flex items-center justify-between">
            <button
              type="button"
              className="custom-prev4  cursor-pointer bg-gray10 border border-gray15 rounded-full w-[40px] h-[40px] flex items-center justify-center"
            >
              <FaArrowLeft className="text-white text-[20px]" />
            </button>
            <div className="custom-pagination !w-auto h-full flex items-center justify-center"></div>
            <button
              type="button"
              className="custom-next4 cursor-pointer bg-gray10 border border-gray15 rounded-full w-[40px] h-[40px] flex items-center justify-center"
            >
              <FaArrowRight className="text-white text-[20px]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImgSlides;
