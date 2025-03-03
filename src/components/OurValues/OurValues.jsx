import Titles from "../Titles/Titles";
import star from "/src/assets/icons/star-con.svg";
import exellence from "/src/assets/icons/excellence-icon.svg";
import client from "/src/assets/icons/client-icon.svg";

const OurValues = () => {
  const h = "Our Values";
  const p =
    "Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.";

  return (
    <div className="bg-gray8 py-10 md:py-15">
      <div className="container px-4 flex flex-col gap-10 md:flex-row md:gap-5 md:items-center">
        <div className="left md:w-[37%]">
          <Titles h={h} p={p} />
        </div>
        <div className="right md:w-[63%]">
          <div className="p-2 bg-gray10 rounded-xl">
            <div className="bg-gray8 border-1 border-gray15 rounded-xl md:grid md:grid-cols-2">
              <div className="trust flex flex-col gap-3.5 p-4 lg:p-6 border-b-1 border-gray15 md:border-r-1">
                <div className="flex items-center gap-2 md:gap-2.5 lg:gap-3.5">
                  <div className="icon size-[52px] md:size-[60px] rounded-full border-1 border-purple60 flex items-center justify-center">
                    <img
                      src={star}
                      alt="Star icon"
                      className="size-[24px] md:size-[28px]"
                    />
                  </div>
                  <h2 className="text-white font-semibold text-[clamp(18px,2vw,24px)]">Trust</h2>
                </div>
                <p className="text-gray60 text-[clamp(14px,2vw,18px)] font-medium leading-5">Trust is the cornerstone of every successful real estate transaction.</p>
              </div>
              <div className="excellence flex flex-col gap-3.5 p-4 lg:p-6 border-b-1 border-gray15 ">
                <div className="flex items-center gap-2 md:gap-2.5 lg:gap-3.5">
                  <div className="icon size-[52px] md:size-[60px] rounded-full border-1 border-purple60 flex items-center justify-center">
                    <img
                      src={exellence}
                      alt="Star icon"
                      className="size-[24px] md:size-[28px]"
                    />
                  </div>
                  <h2 className="text-white font-semibold text-[clamp(18px,2vw,24px)]">Excellence</h2>
                </div>
                <p className="text-gray60 text-[clamp(14px,2vw,18px)] font-medium leading-5">We set the bar high for ourselves. From the properties we list to the services we provide.</p>
              </div>
              <div className="Client-Centric flex flex-col gap-3.5 p-4 lg:p-6 border-b-1 md:border-b-0 border-gray15 md:border-r-1">
                <div className="flex items-center gap-2 md:gap-2.5 lg:gap-3.5">
                  <div className="icon size-[52px] md:size-[60px] rounded-full border-1 border-purple60 flex items-center justify-center">
                    <img
                      src={client}
                      alt="Star icon"
                      className="size-[24px] md:size-[28px]"
                    />
                  </div>
                  <h2 className="text-white font-semibold text-[clamp(18px,2vw,24px)]">Client-Centric</h2>
                </div>
                <p className="text-gray60 text-[clamp(14px,2vw,18px)] font-medium leading-5">WYour dreams and needs are at the center of our universe. We listen, understand.</p>
              </div>
              <div className="Our-Commitment flex flex-col gap-3.5 py-4 pl-4 lg:p-6  ">
                <div className="flex items-center gap-2 md:gap-2.5 lg:gap-3.5">
                  <div className="icon size-[52px] md:size-[60px] rounded-full border-1 border-purple60 flex items-center justify-center">
                    <img
                      src={star}
                      alt="Star icon"
                      className="size-[24px] md:size-[28px]"
                    />
                  </div>
                  <h2 className="text-white font-semibold text-[clamp(18px,2vw,24px)]">Our Commitment</h2>
                </div>
                <p className="text-gray60 text-[clamp(14px,2vw,18px)] font-medium leading-5">We are dedicated to providing you with the highest level of service, professionalism</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
