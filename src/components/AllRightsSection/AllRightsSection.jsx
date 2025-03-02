import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const AllRightsSection = () => {
  return (
    <section className="bg-gray19 h-auto md:h-[68px] py-8 md:py-0">
      <div className="container h-full px-4 flex flex-col items-center text-center gap-y-5 md:flex-row md:gap-y-0 md:justify-between">
        <div className="content text-[14px] font-medium text-white flex flex-col gap-5 md:flex-row">
          <h3 className="">@2025 Estatein. All Rights Reserved.</h3>
          <p className="">Terms & Conditions</p>
        </div>
        <div className="icons flex gap-3 md:gap-4">
          <div className="facebooke size-[60px]  rounded-full flex items-center justify-center bg-gray8 text-white text-xl">
            <FaFacebookF />
          </div>
          <div className="facebooke size-[60px]  rounded-full flex items-center justify-center bg-gray8 text-white text-xl">
            <FaLinkedin />
          </div>
          <div className="facebooke size-[60px]  rounded-full flex items-center justify-center bg-gray8 text-white text-xl">
            <FaTwitter />
          </div>
          <div className="facebooke size-[60px]  rounded-full flex items-center justify-center bg-gray8 text-white text-xl">
            <FaYoutube />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllRightsSection;
