import bedRoomIcon from "../../assets/icons/bed-room-gray.svg";
import bathRoomIcon from "../../assets/icons/bath-room-gray.svg";
import areaIcon from "../../assets/icons/area-gray.svg";
import keyFeaturesAndAmenitiesIcon from "../../assets/icons/key-features-and-amenities.svg";

const KeyFeaturesAndAmenities = () => {
  const content = [
    "Expansive oceanfront terrace for outdoor entertaining",
    "Gourmet kitchen with top-of-the-line appliances",
    "Private beach access for morning strolls and sunset views",
    "Master suite with a spa-inspired bathroom and ocean-facing balcony",
    "Private garage and ample storage space"
  ];
  return (
    <section className="bg-gray8 pb-5">
      <div className="container px-4 grid grid-cols-1 md:grid-cols-2 gap-5 md:items-start ">
        <div className="p-5 border border-gray15 rounded-xl">
          <div className="description mb-5 ">
            <h3 className="text-white text-[clamp(18px,1.5vw,24px)] font-semibold mb-1.5">
              Description
            </h3>
            <p className="text-gray60 text-[clamp(14px,1.5vw,18px)] font-medium leading-6 md:leading-7">
              Discover your own piece of paradise with the Seaside Serenity
              Villa. T With an open floor plan, breathtaking ocean views from
              every room, and direct access to a pristine sandy beach, this
              property is the epitome of coastal living.
            </p>
          </div>
          <div className="key-features pt-5 border-t border-gray15 grid grid-cols-2 md:grid-cols-3">
            <div className="bed-room p-5">
              <div className="bed-room-icon mb-2 flex items-center gap-1.5 text-gray60 text-[14px] md:text-[16px]">
                <img src={bedRoomIcon} alt="bed-room-icon" />
                Bedrooms
              </div>
              <p className="text-white text-[18px] md:text-[20px]">04</p>
            </div>
            <div className="bath-room p-5 border-l border-gray15">
              <div className="bath-room-icon mb-2 flex items-center gap-1.5 text-gray60 text-[14px] md:text-[16px]">
                <img src={bathRoomIcon} alt="bath-room-icon" className="" />
                Bathrooms
              </div>
              <p className="text-white text-[18px] md:text-[20px]">03</p>
            </div>
            <div className="area p-5 col-span-2 mt-5 border-t border-gray15 md:mt-0 md:border-t-0 md:border-l md:col-span-1">
              <div className="area-icon mb-2 flex items-center gap-1.5 text-gray60 text-[14px] md:text-[16px]">
                <img src={areaIcon} alt="area-icon" />
                Area
              </div>
              <p className="text-white text-[18px] md:text-[20px]">2,500 Square Feet</p>
            </div>
          </div>
        </div>
        <div className="key-features-and-amenities border border-gray15 rounded-xl p-5">
          <h3 className="text-white text-[clamp(18px,1.5vw,24px)] font-semibold mb-5">
            Key Features and Amenities
          </h3>
          {content.map((item, index) => (
            <div key={index} className="p-5 flex items-center gap-2.5 my-5 text-gray60 bg-gradient-to-r from-white/4 to-transparent beforeElement">
              <img src={keyFeaturesAndAmenitiesIcon} alt="key-features-and-amenities-icon" className="size-5" />
              <p className="text-[clamp(14px,1.5vw,18px)] font-medium leading-5">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesAndAmenities;
