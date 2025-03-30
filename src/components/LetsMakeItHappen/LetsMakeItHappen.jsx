import Titles from "../Titles/Titles";
import { FaAngleDown } from "react-icons/fa6";

const LetsMakeItHappen = () => {
  const h = "Let's Make It Happen";
  const p =
    "Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together.";
  const inputsData = [
    {
      id: "firstName",
      label: "First Name",
      placeholder: "Enter First Name",
    },
    {
      id: "lastName",
      label: "Last Name",
      placeholder: "Enter Last Name",
    },
    {
      id: "email",
      label: "Email",
      placeholder: "Enter Email",
    },
    {
      id: "phone",
      label: "Phone",
      placeholder: "Enter Phone",
    },
  ];
  const selectData = [
    {
      id: "preferredLocation",
      label: "Preferred Location",
      options: ["Apartment", "House", "Commercial"],
      icon: <FaAngleDown />,
    },
    {
      id: "propertyType",
      label: "Property Type",
      options: ["Apartment", "House", "Commercial"],
      icon: <FaAngleDown />,
    },
    {
      id: "no.ofbathrooms",
      label: "No.of Bathrooms",
      options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      icon: <FaAngleDown />,
    },
    {
      id: "no.ofbedrooms",
      label: "No.of Bedrooms",
      options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      icon: <FaAngleDown />,
    },
    {
      id: "budget",
      label: "Budget",
      options: [
        "100,000 $",
        "200,000 $",
        "300,000 $",
        "400,000 $",
        "500,000 $",
        "600,000 $",
        "700,000 $",
        "800,000 $",
        "900,000 $",
        "1,000,000 $",
      ],
      icon: <FaAngleDown />,
    },
  ];
  return (
    <section className="bg-gray8 py-10">
      <div className="container px-4 flex flex-col gap-10">
        <div className="top">
          <Titles h={h} p={p} />
        </div>
        <div className="bottom">
          <form
            action=""
            className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 border-1 border-gray15 rounded-xl p-5"
          >
            {inputsData.map((input) => (
              <div key={input.id} className="input ">
                <label
                  className="text-white text-[16px] font-medium mb-2.5"
                  htmlFor={input.id}
                >
                  {input.label}
                </label>
                <input
                  type="text"
                  id={input.id}
                  placeholder={input.placeholder}
                  className="bg-gray10 border-1 border-gray15 rounded-md p-3 w-full text-gray60 text-[16px] font-medium outline-none"
                />
              </div>
            ))}
            {selectData.map((select) => (
              <div key={select.id} className={`${select.id === "budget" ? "lg:col-span-2" : ""}`}>
                <label
                  className="text-white text-[16px] font-medium mb-2.5"
                  htmlFor={select.id}
                >
                  {select.label}
                </label>

                <select
                  name={select.id}
                  id={select.id}
                  className="bg-gray10 border-1 border-gray15 rounded-md p-3 w-full text-gray60 text-[16px] font-medium outline-none"
                >
                  {select.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            ))}
            <div className="preferredContact lg:col-span-2 lg:grid lg:grid-cols-2 lg:gap-5 items-end">

              <div className="mb-2.5 lg:mb-0 ">
              <label
                className="text-white text-[16px] font-medium mb-2.5"
                htmlFor="preferredContact"
              >
                Preferred Contact
              </label>
                <input
                  type="text"
                  placeholder="Enter Your Number"
                  className="bg-gray10 border-1 border-gray15 rounded-md p-3 w-full text-gray60 text-[16px] font-medium outline-none"
                />
              </div>
              <div className="lg:items-self-end">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="bg-gray10 border-1 border-gray15 rounded-md p-3 w-full text-gray60 text-[16px] font-medium outline-none"
                />
              </div>
            </div>
            <div className="message lg:col-span-4 ">
              <label
                className="text-white text-[16px] font-medium mb-2.5"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                rows={5}
                name="message"
                id="message"
                placeholder="Enter Your Message"
                className="bg-gray10 border-1 border-gray15 rounded-md p-3 w-full text-gray60 text-[16px] font-medium outline-none"
              ></textarea>
            </div>
            <div className="checkbox flex items-center gap-2 lg:col-span-3">
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                className="w-5 h-5 appearance-none bg-gray10 border-1 border-gray15 rounded-sm checked:bg-blue-500 relative checked:before:content-['✔'] checked:before:absolute checked:before:text-white checked:before:text-[14px] checked:before:left-1/2 checked:before:top-1/2 checked:before:-translate-x-1/2 checked:before:-translate-y-1/2"
              />

              <label
                className="text-white text-[14px] font-medium"
                htmlFor="checkbox"
              >
                I agree with Terms of Use and Privacy Policy
              </label>
            </div>
            <button
              type="submit"
              className="bg-purple60 cursor-pointer text-white text-[16px] font-medium rounded-md p-3 w-full"
            >
              Send Your Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LetsMakeItHappen;
