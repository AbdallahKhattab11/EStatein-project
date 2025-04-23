import Titles from "../Titles/Titles";
import AbstractDesignDiscoverYourDream from "/src/assets/svg/Abstract-Design-discover-your-dream.svg";

import marketInsight from "/src/assets/icons/valuation-mastery.svg";
import roiAssessment from "/src/assets/icons/roi-assessment.svg";
import customizedStrategies from "/src/assets/icons/customized-strategies.svg";
import diversificationMastery from "../../assets/icons/legal-guardian.svg";

const SmartInvestmentsInformedDecisions = () => {
  const h = "Smart Investments, Informed Decisions";
  const p =
    "Building a real estate portfolio requires a strategic approach. Estatein's Investment Advisory Service empowers you to make smart investments and informed decisions.";

  const data = [
    {
      id: "card-1",
      icon: marketInsight,
      title: "Market Insight",
      description:
        "Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions",
    },
    {
      id: "card-2",
      icon: roiAssessment,
      title: "ROI Assessment",
      description:
        "Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments",
    },
    {
      id: "card-3",
      icon: customizedStrategies,
      title: "Customized Strategies",
      description:
        "Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs.",
    },
    {
      id: "card-4",
      icon: diversificationMastery,
      title: "Diversification Mastery",
      description:
        "Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations",
    },
  ];
  return (
    <section className="bg-gray8 text-white py-10 md:py-15">
      <div className="container px-4 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-5">
        <div className="left ">
          <div className="titles">
            <Titles h={h} p={p} />
          </div>
          <div className="custom-card mt-10 bg-gray10 rounded-xl p-10 col-span-1 md:col-span-2 flex flex-col items-center justify-center gap-5 relative z-0">
            <div className="svg w-full h-full absolute top-0 left-0 z-[-1] ">
              <img
                className="w-full h-full object-cover object-left"
                src={AbstractDesignDiscoverYourDream}
                alt="Unlock Your Investment Potential"
              />
            </div>
            <div className="titles-button w-full flex flex-col gap-5">
              <h3 className="text-[clamp(20px,1.5vw,28px)] font-semibold leading-7 text-center">
                Unlock Your Investment Potential
              </h3>
              <p className="text-white/80 text-[clamp(14px,1vw,18px)] font-medium leading-7 tracking-wide">
                Explore our Property Management Service categories and let us
                handle the complexities while you enjoy the benefits of property
                ownership.
              </p>
              <button
                type="button"
                className="bg-gray8 text-[14px] cursor-pointer tracking-wide border border-gray15 rounded-lg p-4 w-full md:w-auto"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="right bg-gray10 p-5 grid grid-cols-1 md:grid-cols-2 gap-5 rounded-xl lg:col-span-2 ">
          {data.map((item) => (
            <div key={item.id} className="card bg-gray8 p-10 border border-gray15 rounded-xl flex flex-col gap-5">
              <div className="icon-title flex items-center gap-5">
                <img src={item.icon} alt={item.title} className="size-[40px] lg:size-[60px]" />
                <h3 className="text-[clamp(18px,1.5vw,24px)] font-semibold">{item.title}</h3>
              </div>
              <p className="text-gray60 text-[clamp(14px,1vw,18px)] font-medium leading-6">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmartInvestmentsInformedDecisions;
