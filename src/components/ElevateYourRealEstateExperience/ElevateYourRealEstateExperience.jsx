
import homeIcon from '/src/assets/icons/home-icon.svg'
import buildingIcon from '/src/assets/icons/building-icon.svg'
import cameraIcon from '/src/assets/icons/camera-icon.svg'
import lightsIcon from '/src/assets/icons/lights-icon.svg'
import rightTopArrow from '/src/assets/icons/right-top-icon.svg'


const ElevateYourRealEstateExperience = () => {
  return (
    <section className="ElevateYourRealEstateExperience bg-gray8 text-white">
      <div className="bg-gray8 py-10 md:pb-15 md:pt-0 h-auto md:h-[300px] border-b-1 border-gray15 bg-[linear-gradient(120deg,_#26262691_5%,_#141414_30%)]">
        <div className="container px-4 h-full">
          <div className="h-full flex flex-col justify-center">
            <h1 className="text-[clamp(28px,2vw,48px)] text-white font-semibold mb-5">
              Elevate Your Real Estate Experience
            </h1>
            <p className="text-gray60 text-[clamp(14px,1vw,18px)] font-medium leading-6">
              Welcome to Estatein, where your real estate aspirations meet
              expert guidance. Explore our comprehensive range of services, each
              designed to cater to your unique needs and dreams.
            </p>
          </div>
        </div>
      </div>
      <div className="cards bg-gray15 p-1">
        <div className="bg-gray8 p-5 border-1 border-gray15 rounded-lg">
          <div className="con grid grid-cols-2 gap-2.5 text-center leading-5 md:grid-cols-4">
            <div className="card flex flex-col items-center gap-2 relative bg-gray19 border-1 border-gray15 rounded-lg p-5">
              <div className="icons ">
                <img
                  src={homeIcon}
                  alt="Home icon"
                  className="size-[48px] md:size-[60px]"
                />
                <img
                  src={rightTopArrow}
                  alt="Right top icon"
                  className="size-[26px] absolute top-4 right-5"
                />
              </div>
              <div className="text">
                <h3 className="text-[clamp(14px,2vw,16px)] text-white font-medium">
                  Find Your Dream Home
                </h3>
              </div>
            </div>
            <div className="card flex flex-col items-center gap-2 relative bg-gray19 border-1 border-gray15 rounded-lg p-5">
              <div className="icons ">
                <img
                  src={cameraIcon}
                  alt="camera icon"
                  className="size-[48px] md:size-[60px]"
                />
                <img
                  src={rightTopArrow}
                  alt="Right top icon"
                  className="size-[26px] absolute top-4 right-5"
                />
              </div>
              <div className="text">
                <h3 className="text-[clamp(14px,2vw,16px)] text-white font-medium">
                  Unlock Property Value
                </h3>
              </div>
            </div>
            <div className="card flex flex-col items-center gap-2 relative bg-gray19 border-1 border-gray15 rounded-lg p-5">
              <div className="icons ">
                <img
                  src={buildingIcon}
                  alt="building icon"
                  className="size-[48px] md:size-[60px]"
                />
                <img
                  src={rightTopArrow}
                  alt="Right top icon"
                  className="size-[26px] absolute top-4 right-5"
                />
              </div>
              <div className="text">
                <h3 className="text-[clamp(14px,2vw,16px)] text-white font-medium">
                  Effortless Property Management
                </h3>
              </div>
            </div>
            <div className="card flex flex-col items-center gap-2 relative bg-gray19 border-1 border-gray15 rounded-lg p-5">
              <div className="icons ">
                <img
                  src={lightsIcon}
                  alt="lights icon"
                  className="size-[48px] md:size-[60px]"
                />
                <img
                  src={rightTopArrow}
                  alt="Right top icon"
                  className="size-[26px] absolute top-4 right-5"
                />
              </div>
              <div className="text">
                <h3 className="text-[clamp(14px,2vw,16px)] text-white font-medium">
                  Smart investments. informed Decisions
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElevateYourRealEstateExperience;
