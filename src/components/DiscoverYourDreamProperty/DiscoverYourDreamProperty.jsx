import { Link } from "react-router-dom";
import img from '/src/assets/images/Discover-your-dream-img.png'
import homeIcon from '/src/assets/icons/home-icon.svg'
import buildingIcon from '/src/assets/icons/building-icon.svg'
import cameraIcon from '/src/assets/icons/camera-icon.svg'
import lightsIcon from '/src/assets/icons/lights-icon.svg'
import rightTopArrow from '/src/assets/icons/right-top-icon.svg'
import bgAbstractForImg from '/src/assets/svg/Abstract-Design-discover-your-dream.svg'

const DiscoverYourDreamProperty = () => {
  return (
    <div className="bg-gray8 pt-10 md:pt-0">
      <div className="con flex flex-col-reverse px-4 xs2:px-8 md:flex-row md:px-0">
        <div className="left md:p-5 md:flex md:flex-col md:justify-center md:gap-10">
          <div className="titles">
            <h1 className="text-[clamp(28px,2.5vw,46px)] font-semibold text-white mb-4">
              Discover Your Dream <br /> Property With Estatein
            </h1>
            <p className="text-[clamp(14px,2vw,16px)] font-medium text-gray60">
              Your journey to finding the perfect property begins here. Explore
              our listings to find the home that matches your dreams.
            </p>
          </div>
          <div className="buttons my-10 md:my-0 md:flex md:gap-4">
            <button type="button" className="text-white text-[14px] w-full mb-4 font-medium px-5 py-3.5 border-1 border-gray15 rounded-lg md:w-[150px] md:h-[50px]">
              <Link to="/about-us">Learn More</Link>
            </button>
            <button type="button" className="text-white text-[14px] w-full font-medium px-5 py-3.5 bg-purple60 rounded-lg md:w-[150px] md:h-[50px] md:px-0">
              <Link to="/properties">Browse Properties</Link>
            </button>
          </div>
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
        <div className="right border-1 border-gray15 rounded-lg mb-12 md:mb-0" style={{backgroundImage: `url(${bgAbstractForImg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <img src={img} className="w-full h-full object-cover" alt="Discover Your Dream Property img" />
        </div>
      </div>
      <div className="cards bg-gray15 p-1">
        <div className="bg-gray8 p-5 border-1 border-gray15 rounded-lg">
          <div className="con grid grid-cols-2 gap-2.5 text-center leading-5 md:grid-cols-4">
            <div className="card flex flex-col items-center gap-2 relative bg-gray19 border-1 border-gray15 rounded-lg p-5">
              <div className="icons ">
                <img src={homeIcon} alt="Home icon" className="size-[48px] md:size-[60px]" />
                <img src={rightTopArrow} alt="Right top icon" className="size-[26px] absolute top-4 right-5"/>
              </div>
              <div className="text">
                <h3 className="text-[clamp(14px,2vw,16px)] text-white font-medium">Find Your Dream Home</h3>
              </div>
            </div>
            <div className="card flex flex-col items-center gap-2 relative bg-gray19 border-1 border-gray15 rounded-lg p-5">
              <div className="icons ">
                <img src={cameraIcon} alt="camera icon" className="size-[48px] md:size-[60px]" />
                <img src={rightTopArrow} alt="Right top icon" className="size-[26px] absolute top-4 right-5"/>
              </div>
              <div className="text">
                <h3 className="text-[clamp(14px,2vw,16px)] text-white font-medium">Unlock Property Value</h3>
              </div>
            </div>
            <div className="card flex flex-col items-center gap-2 relative bg-gray19 border-1 border-gray15 rounded-lg p-5">
              <div className="icons ">
                <img src={buildingIcon} alt="building icon" className="size-[48px] md:size-[60px]" />
                <img src={rightTopArrow} alt="Right top icon" className="size-[26px] absolute top-4 right-5"/>
              </div>
              <div className="text">
                <h3 className="text-[clamp(14px,2vw,16px)] text-white font-medium">Effortless Property Management</h3>
              </div>
            </div>
            <div className="card flex flex-col items-center gap-2 relative bg-gray19 border-1 border-gray15 rounded-lg p-5">
              <div className="icons ">
                <img src={lightsIcon} alt="lights icon" className="size-[48px] md:size-[60px]" />
                <img src={rightTopArrow} alt="Right top icon" className="size-[26px] absolute top-4 right-5"/>
              </div>
              <div className="text">
                <h3 className="text-[clamp(14px,2vw,16px)] text-white font-medium">Smart investments. informed Decisions</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverYourDreamProperty;
