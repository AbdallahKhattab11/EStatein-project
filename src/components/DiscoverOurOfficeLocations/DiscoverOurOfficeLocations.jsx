import { useState } from "react";

import Titles from "../Titles/Titles";

import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

import desks from "../../assets/images/offices-img.png";
import team1 from "../../assets/images/team-1.png";
import team2 from "../../assets/images/team-2.png";
import working from "../../assets/images/working-img.png";
import team3 from "../../assets/images/team-3.png";
import handCheck from "../../assets/images/hand-check.png";

const DiscoverOurOfficeLocations = () => {
  const [filter, setFilter] = useState("all");

  const h = "Discover Our Office Locations";
  const p =
    "Estatein is here to serve you across multiple locations. Whether you're looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs. Explore the categories below to find the Estatein office nearest to you";

  const offices = [
    {
      category: "Main Headquarters",
      location: "123 Estatein Plaza, City Center, Metropolis",
      desc: "Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.",
      contact: [
        {
          icon: <MdEmail />,
          text: "info@estatein.com",
        },
        {
          icon: <FaPhone />,
          text: "+1 (123) 456-7890",
        },
        {
          icon: <FaLocationDot />,
          text: "Metropolis",
        },
      ],
      filter: "international",
    },
    {
      category: "Regional Offices",
      location: "456 Urban Avenue, Downtown District, Metropolis",
      desc: "Estatein's presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets.",
      contact: [
        {
          icon: <MdEmail />,
          text: "info@estatein.com",
        },
        {
          icon: <FaPhone />,
          text: "+1 (123) 456-7890",
        },
        {
          icon: <FaLocationDot />,
          text: "Metropolis",
        },
      ],
      filter: "regional",
    },
  ];

  const filteredOffices =
    filter === "all"
      ? offices
      : offices.filter((office) => office.filter === filter);

  const h2 = "Explore Estatein's World";
  const p2 =
    "Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces.";

  return (
    <section className="DiscoverOurOfficeLocations py-10 md:py-15">
      <div className="container px-4">
        <div className="titles">
          <Titles h={h} p={p} />
        </div>
        <div className="offices mt-10">
          <div className="filter mb-10  p-2.5 bg-gray10 rounded-xl inline-flex items-center justify-center flex-wrap gap-2 md:gap-5">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`btn text-[14px] cursor-pointer font-medium w-[106px] h-[49px] rounded-lg border border-gray15 p-3.5 ${
                filter === "all" ? "bg-gray8" : ""
              }`}
            >
              All
            </button>
            <button
              type="button"
              onClick={() => setFilter("regional")}
              className={`btn text-[14px] cursor-pointer font-medium w-[106px] h-[49px] rounded-lg border border-gray15 p-3.5 ${
                filter === "regional" ? "bg-gray8" : ""
              }`}
            >
              Regional
            </button>
            <button
              type="button"
              onClick={() => setFilter("international")}
              className={`btn text-[14px] cursor-pointer font-medium w-[106px] h-[49px] rounded-lg border border-gray15 p-3.5 ${
                filter === "international" ? "bg-gray8" : ""
              }`}
            >
              International
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredOffices.map((office, i) => {
              return (
                <div
                  key={i}
                  className="office p-5 md:p-7 lg:p-10 border border-gray15 rounded-xl flex flex-col gap-5"
                >
                  <p className="text-[clamp(18px,1vw,24px)] font-medium">
                    {office.category}
                  </p>
                  <h3 className="text-[clamp(24px,2vw,28px)] font-semibold">
                    {office.location}
                  </h3>
                  <p className="text-[clamp(16px,1vw,22px)] text-gray60 font-medium leading-6 tracking-wide">
                    {office.desc}
                  </p>
                  <div className="contact flex flex-col gap-5">
                    {office.contact.map((item, i) => {
                      return (
                        <div
                          key={i}
                          className="flex items-center gap-4 bg-gray10 p-4 rounded-xl border border-gray15"
                        >
                          {item.icon}
                          <p className="text-[clamp(14px,1vw,18px)] text-gray60 font-medium leading-6 tracking-wide">
                            {item.text}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-15 grid grid-cols-4 gap-2 md:gap-5">
          <img src={desks} alt="offices" className="w-full rounded-[10px] col-span-2" />
          <img src={team1} alt="team" className="w-full rounded-[10px] col-span-2" />
          <img src={working} alt="working" className="w-full rounded-[10px] col-span-2" />
          <img src={team2} alt="team" className="w-full rounded-[10px] col-span-1" />
          <img src={team3} alt="team" className="w-full rounded-[10px] col-span-1" />
          <div className="titles self-center col-span-4 md:col-span-2 my-5 md:my-0">
            <Titles h={h2} p={p2} />
          </div>
          <img src={handCheck} alt="hand-check" className="w-full rounded-[10px] col-span-4 md:col-span-2" />
        </div>
      </div>
    </section>
  );
};

export default DiscoverOurOfficeLocations;
