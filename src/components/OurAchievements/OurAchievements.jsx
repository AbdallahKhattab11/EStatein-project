import Titles from "../Titles/Titles";

const OurAchievements = () => {
  const h = "Our Achievements";
  const p =
    "Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.";

  return (
    <div className="bg-gray8 py-10 md:py-15">
      <div className="container px-4 flex flex-col gap-10">
        <div className="top">
          <Titles h={h} p={p} />
        </div>
        <div className="bottom grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <div className="box p-2 bg-gray10 rounded-xl">
            <div className="bg-gray8 border-1 border-gray15 rounded-xl p-5 md:p-7.5 h-full w-full">
              <h2 className="text-white text-[clamp(20px,2vw,30px)] font-semibold mb-[14px] md:mb-[20px] lg:mb-[24px]">
                3+ Years of Excellence
              </h2>
              <p className="text-gray60 text-[clamp(14px,2vw,18px)] font-medium leading-5">
                With over 3 years in the industry, we've amassed a wealth of
                knowledge and experience.
              </p>
            </div>
          </div>
          <div className="box p-2 bg-gray10 rounded-xl">
            <div className="bg-gray8 border-1 border-gray15 rounded-xl p-5 md:p-7.5 h-full w-full">
              <h2 className="text-white text-[clamp(20px,2vw,30px)] font-semibold mb-[14px] md:mb-[20px] lg:mb-[24px]">
              Happy Clients
              </h2>
              <p className="text-gray60 text-[clamp(14px,2vw,18px)] font-medium leading-5">
              Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.
              </p>
            </div>
          </div>
          <div className="box p-2 bg-gray10 rounded-xl md:col-span-2 lg:col-span-1">
            <div className="bg-gray8 border-1 border-gray15 rounded-xl p-5 md:p-7.5 h-full w-full">
              <h2 className="text-white text-[clamp(20px,2vw,30px)] font-semibold mb-[14px] md:mb-[20px] lg:mb-[24px]">
              Industry Recognition
              </h2>
              <p className="text-gray60 text-[clamp(14px,2vw,18px)] font-medium leading-5">
              We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurAchievements;
