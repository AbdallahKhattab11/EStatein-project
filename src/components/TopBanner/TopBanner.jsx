import { IoClose } from "react-icons/io5";
import bgImg from "../../assets/svg/Abstract-Design-1.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
const TopBanner = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div
      className={`h-[50px] w-full text-white bg-cover bg-center bg-no-repeat bg-gray19 overflow-hidden ${isOpen ? "block" : "hidden"}`}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="container h-full text-[clamp(12px,2vw,1rem)] font-medium flex items-center xs:justify-center px-4 relative">
        <div className="flex items-center  gap-[5px]">
          <p className="md:hidden">Discover Your Property with Estatein</p>
          <p className="hidden md:block">
            Discover Your Dream Property with Estatein
          </p>
          <Link to="/properties" className="underline cursor-pointer">
            Learn More
          </Link>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          type="button"
          className="absolute right-4 top-1/2 -translate-y-1/2 size-[25px] md:size-[30px] rounded-full flex items-center justify-center cursor-pointer bg-white/30"
        >
          <IoClose className="text-white text-[clamp(19px,2vw,22px)]" />
        </button>
      </div>
    </div>
  );
};

export default TopBanner;
