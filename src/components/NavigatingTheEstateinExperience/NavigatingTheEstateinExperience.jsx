import Titles from "../Titles/Titles";

const NavigatingTheEstateinExperience = () => {
  const h = "Navigating the Estatein Experience";
  const p =
    "At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works.";

  const experiences = [
    {
      id: "ex1",
      step: "Step 01",
      title: "Discover a World of Possibilities",
      desc: "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location,",
    },
    {
      id: "ex2",
      step: "Step 02",
      title: "Narrowing Down Your Choices",
      desc: "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
    },
    {
      id: "ex3",
      step: "Step 03",
      title: "Personalized Guidance",
      desc: "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.",
    },
    {
      id: "ex4",
      step: "Step 04",
      title: "See It for Yourself",
      desc: "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.",
    },
    {
      id: "ex5",
      step: "Step 05",
      title: "Making Informed Decisions",
      desc: "Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed.",
    },
    {
      id: "ex6",
      step: "Step 06",
      title: "Getting the Best Deal",
      desc: "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.",
    },
  ];

  return (
    <div className="bg-gray8 py-10 md:py-15">
      <div className="container px-4 flex flex-col gap-15">
        <div className="top">
          <Titles h={h} p={p} />
        </div>
        <div className="bottom grid grid-cols-1 gap-8 md:gap-x-5 lg:gap-8 md:grid-cols-2 xl:grid-cols-3 ">
          {experiences.map((obj) => {
            return (
              <div
                key={obj.id}
                className="card h-[237px] lg:h-[274px] xl:h-[329px] flex flex-col"
              >
                <div className="step h-[52px] 2xl:h-[62px flex items-center pl-5 border-l-1 border-purple60">
                  <h3 className="text-white text-[clamp(16px,2vw,20px)] font-medium">
                    {obj.step}
                  </h3>
                </div>
                <div className="overflow-hidden p-[1px] h-full rounded-e-xl rounded-bl-xl bg-[linear-gradient(150deg,_#703BF7_3%,_#262626_20%)]">
                  <div className="content rounded-e-xl rounded-bl-xl h-full flex flex-col gap-3.5 justify-center px-7 bg-gray8 bg-[linear-gradient(130deg,_#703bf745_0%,_#141414_10%)]">
                    <h2 className="text-white text-[clamp(18px,2vw,26px)] font-semibold">
                      {obj.title}
                    </h2>
                    <p className="text-gray60 text-[clamp(14px,1.5vw,17px)] font-medium leading-6">
                      {obj.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavigatingTheEstateinExperience;
