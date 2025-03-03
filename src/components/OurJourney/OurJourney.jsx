import Titles from "../Titles/Titles";

import OurJourneyImg from "/src/assets/images/our-journey.png"
import bgAbstractForImg from '/src/assets/svg/Abstract-Design-discover-your-dream.svg'

const OurJourney = () => {
  const h = "Our Journey";
  const p =
    "Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients.";

  return (
    <div className="bg-gray8 py-10 md:py-15">
      <div className="container px-4 flex flex-col-reverse gap-8 md:gap-10 md:flex-row">
        <div className="left md:w-1/2 flex flex-col gap-10">
          <Titles h={h} p={p}/>
          <div className="boxes grid grid-cols-2 gap-3 text-center mb-10 md:mb-0 md:grid-cols-3">
            <div className="box bg-gray19 border-1 border-gray15 rounded-lg px-5 py-3.5 ">
              <h2 className="text-[clamp(24px,2vw,30px)] font-bold text-white mb-1">200+</h2>
              <p className="text-[clamp(14px,2vw,16px)] text-gray60">Happy Customers</p>
            </div>
            <div className="box bg-gray19 border-1 border-gray15 rounded-lg px-5 py-3.5">
              <h2 className="text-[clamp(24px,2vw,30px)] font-bold text-white mb-1">10k+</h2>
              <p className="text-[clamp(14px,2vw,16px)] text-gray60">Properties For Clients</p>
            </div>
            <div className="box bg-gray19 border-1 border-gray15 rounded-lg px-5 py-3.5 col-span-2 md:col-span-1">
              <h2 className="text-[clamp(24px,2vw,30px)] font-bold text-white mb-1">16+</h2>
              <p className="text-[clamp(14px,2vw,16px)] text-gray60">Years of Experience</p>
            </div>
          </div>
        </div>
        <div className="right md:w-1/2 border-1 border-gray15 rounded-xl" style={{backgroundImage: `url(${bgAbstractForImg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <img src={OurJourneyImg} alt="Our Journey" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default OurJourney;
