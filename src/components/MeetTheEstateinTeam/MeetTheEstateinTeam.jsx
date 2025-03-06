import { FaTwitter } from "react-icons/fa";

import Titles from "../Titles/Titles";

import maxImg from "/src/assets/images/max-img.png";
import sarahImg from "/src/assets/images/sarah-img.png";
import davidImg from "/src/assets/images/david-img.png";
import michaelImg from "/src/assets/images/michael-img.png";
import sendIcon from "/src/assets/icons/send-icon.svg"

const MeetTheEstateinTeam = () => {
  const h = "Meet the Estatein Team";
  const p =
    "At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality.";
  const team = [
    {
      id: "team1",
      img: maxImg,
      name: "Max Mitchell",
      title: "Founder",
    },
    {
      id: "team2",
      img: sarahImg,
      name: "Sarah Johnson",
      title: "Chief Real Estate Officer",
    },
    {
      id: "team3",
      img: davidImg,
      name: "David Brown",
      title: "Head of Property Management",
    },
    {
      id: "team4",
      img: michaelImg,
      name: "Michael Turner",
      title: "Legal Counsel",
    },
  ];

  return (
    <div className="bg-gray8 py-10 md:py-15">
      <div className="container px-4 flex flex-col gap-15">
        <div className="top">
          <Titles h={h} p={p} />
        </div>
        <div className="bottom grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {team.map((obj)=> {
            return <div key={obj.id} className=" p-5 border-1 border-gray15 rounded-2xl  flex flex-col gap-10 md:gap-[50px]">
              <div className="img rounded-[10px] xl:rounded-xl relative">
                <img src={obj.img} alt={obj.name} className="w-full h-full object-cover" />
                <div className="twitterIcon text-white absolute -bottom-[20px] md:-bottom-[25px] left-1/2 -translate-x-1/2 w-[60px] h-[40px] rounded-4xl bg-purple60 flex justify-center items-center md:w-[76px] md:h-[52px] cursor-pointer">
                  <FaTwitter className=" text-xl lg:text-2xl"/>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="name text-center">
                  <h2 className="text-white text-[clamp(18px,1.5vw,24px)] font-semibold mb-2">{obj.name}</h2>
                  <p className="text-gray60 text-[clamp(14px,1vw,18px)] font-medium">{obj.title}</p>
                </div>
                <div className="sayHello w-full h-[60px] xl:h-[72px] border-1 border-gray15 rounded-4xl bg-gray10">
                  <div className="h-full flex items-center justify-between px-4">
                    <p className="text-white text-[clamp(14px,1vw,18px)] font-medium">Say Hello 👋</p>
                    <div className="icon size-[44px] rounded-full bg-purple60 flex items-center justify-center hover:scale-105 cursor-pointer transition-all duration-200">
                      <img src={sendIcon} alt="Send Icon" className="size-[20px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default MeetTheEstateinTeam;
