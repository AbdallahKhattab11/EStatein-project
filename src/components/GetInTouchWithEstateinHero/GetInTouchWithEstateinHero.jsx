
import rightTopArrow from "/src/assets/icons/right-top-icon.svg";

import emailIcon from "/src/assets/icons/email-icon.svg";
import phoneIcon from "/src/assets/icons/phone-icon.svg";
import locationIcon from "/src/assets/icons/location-icon-2.svg";
import estateinIcon from "/src/assets/icons/estatein-icon.svg";

const GetInTouchWithEstateinHero = () => {
  return (
    <section className="GetInTouchWithEstateinHero pb-10 md:pb-15">
      <div className="bg-gray8 py-10 md:pb-15 md:pt-0 h-auto md:h-[300px] border-b-1 border-gray15 bg-[linear-gradient(120deg,_#26262691_5%,_#141414_30%)]">
        <div className="container px-4 h-full">
          <div className="h-full flex flex-col justify-center">
            <h1 className="text-[clamp(28px,2vw,48px)] text-white font-semibold mb-5">
              Get in Touch with Estatein
            </h1>
            <p className="text-gray60 text-[clamp(14px,1vw,18px)] font-medium leading-7 tracking-wide">
              Welcome to Estatein&apos;s Contact Us page. We&apos;re here to assist you
              with any inquiries, requests, or feedback you may have. Whether
              you&apos;re looking to buy or sell a property, explore investment
              opportunities, or simply want to connect, we&apos;re just a message
              away. Reach out to us, and let&apos;s start a conversation.
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
                  src={emailIcon}
                  alt="Email icon"
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
                info@estatein.com
                </h3>
              </div>
            </div>
            <div className="card flex flex-col items-center gap-2 relative bg-gray19 border-1 border-gray15 rounded-lg p-5">
              <div className="icons ">
                <img
                  src={phoneIcon}
                  alt="Phone icon"
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
                +1 (123) 456-7890
                </h3>
              </div>
            </div>
            <div className="card flex flex-col items-center gap-2 relative bg-gray19 border-1 border-gray15 rounded-lg p-5">
              <div className="icons ">
                <img
                  src={locationIcon}
                  alt="Location icon"
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
                Main Headquarters
                </h3>
              </div>
            </div>
            <div className="card flex flex-col items-center gap-2 relative bg-gray19 border-1 border-gray15 rounded-lg p-5">
              <div className="icons ">
                <img
                  src={estateinIcon}
                  alt="Estatein icon"
                  className="size-[48px] md:size-[60px]"
                />
                <img
                  src={rightTopArrow}
                  alt="Right top icon"
                  className="size-[26px] absolute top-4 right-5"
                />
              </div>
              <div className="text flex gap-2 md:gap-5 flex-wrap justify-center text-[clamp(14px,2vw,16px)] text-white font-medium">
                <a href="#">Instagram</a>
                <a href="#">LinkedIn</a>
                <a href="#">Facebook</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchWithEstateinHero;
