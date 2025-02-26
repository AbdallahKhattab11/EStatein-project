import { useNavigate } from "react-router-dom";
import leftImg from "/src/assets/svg/Abstract-Design-2-gray19-left.svg";
import rightImg from "/src/assets/svg/Abstract-Design-2-gray19-right.svg";

const StartYourRealEstateJourney = () => {
  const navigate = useNavigate();

  return (
    <div className="StartYourRealEstateJourney relative bg-gray8 z-[0] border-y-1 border-gray15">
      <div className="container py-15 p-5 grid grid-cols-1 md:grid-cols-3 items-center gap-5 md:gap-0">
        <div
          className="absolute left-0 top-0 h-full md:w-1/2 w-full bg-cover bg-no-repeat bg-left text-gray19 z-[-1]"
          style={{ backgroundImage: `url(${leftImg})` }}
        ></div>

        <div
          className="hidden md:block absolute right-0 top-0 h-full md:w-1/2 bg-cover bg-no-repeat bg-right z-[-1]"
          style={{ backgroundImage: `url(${rightImg})` }}
        ></div>

        <div className="titles  md:col-span-2">
          <h2 className="text-white text-[clamp(28px,2vw,40px)] font-semibold mb-2 md:mb-2.5 leading-9">
            Start Your Real Estate Journey Today
          </h2>
          <p className="col-span-3 md:col-span-2 leading-6 text-gray60 text-[clamp(14px,2vw,16px)] font-medium">{`Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.`}</p>
        </div>
        <button
          onClick={() => navigate("/properties")}
          type="button"
          className=" md:justify-self-end flex items-end justify-center text-white text-[14px] text-nowrap cursor-pointer font-medium px-5 py-3.5 bg-purple60 border-1 border-gray15 rounded-lg w-full md:w-[155px] h-[50px] "
        >
          Explore Properties
        </button>
        
      </div>
    </div>
    
  );
};

export default StartYourRealEstateJourney;
