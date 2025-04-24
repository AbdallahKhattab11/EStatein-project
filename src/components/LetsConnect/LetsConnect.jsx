import Titles from "../Titles/Titles";

const LetsConnect = () => {
  const h = "Let's Connect";
  const p =
    "We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need.";

  const inputs = [
    {
      id: "in-1",
      label: "First Name",
      name: "firstName",
      type: "text",
      placeholder: "Enter your first name",
    },
    {
      id: "in-2",
      label: "Last Name",
      name: "lastName",
      type: "text",
      placeholder: "Enter your last name",
    },
    {
      id: "in-3",
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Enter your email",
    },
    {
      id: "in-4",
      label: "Phone",
      name: "phone",
      type: "tel",
      placeholder: "Enter phone number",
    },
  ];

  return (
    <section className="LetsConnect">
      <div className="container px-4">
        <div className="titles">
          <Titles h={h} p={p} />
        </div>
        <div className="form mt-15 p-5 md:p-10 lg:p-20 border border-gray15 rounded-xl">
          <form
            action=""
            onSubmit={(e) => e.preventDefault()}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7.5"
          >
            {inputs.map((input) => {
              return (
                <div key={input.id} className="">
                  <label
                    htmlFor={input.name}
                    className="text-white block text-[clamp(16px,2vw,18px)] font-medium mb-2.5 tracking-wide"
                  >
                    {input.label}
                  </label>
                  <input
                    type={input.type}
                    name={input.name}
                    id={input.name}
                    placeholder={input.placeholder}
                    className="w-full border border-gray15 rounded-md p-3 text-[clamp(16px,2vw,18px)] font-medium bg-gray10 outline-none"
                  />
                </div>
              );
            })}
            <div className="select">
              <label
                htmlFor="select-1"
                className="text-white block text-[clamp(16px,2vw,18px)] font-medium mb-2.5 tracking-wide"
              >
                Inquiry Type
              </label>
              <select
                name="select-1"
                id="select-1"
                className="w-full border border-gray15 rounded-md p-3 text-[clamp(16px,2vw,18px)] font-medium bg-gray10 outline-none"
              >
                <option value="">Select inquiry type</option>
                <option value="">Buy</option>
                <option value="">Sell</option>
                <option value="">Rent</option>
                <option value="">Other</option>
              </select>
            </div>
            <div className="select">
              <label
                htmlFor="select-2"
                className="text-white block text-[clamp(16px,2vw,18px)] font-medium mb-2.5 tracking-wide"
              >
                How Did You Hear About Us
              </label>
              <select
                name="select-2"
                id="select-2"
                className="w-full border border-gray15 rounded-md p-3 text-[clamp(16px,2vw,18px)] font-medium bg-gray10 outline-none"
              >
                <option value="">Select</option>
                <option value="">Facebook</option>
                <option value="">Instagram</option>
                <option value="">LinkedIn</option>
                <option value="">X</option>
                <option value="">Other</option>
              </select>
            </div>
            <div className="message col-span-1 md:col-span-2 lg:col-span-3">
              <label
                htmlFor="message"
                className="text-white block text-[clamp(16px,2vw,18px)] font-medium mb-2.5 tracking-wide"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={6}
                placeholder="Enter your message"
                className="w-full  border border-gray15 rounded-md p-3 text-[clamp(16px,2vw,18px)] font-medium bg-gray10 outline-none"
              ></textarea>
            </div>
            <div className="checkbox-submit col-span-1 md:col-span-2 lg:col-span-3 flex flex-col md:flex-row md:items-center md:justify-between  gap-5">
              <div className=" flex items-center gap-2.5">
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
              <div className="submit md:w-[200px]">
                <button
                  type="submit"
                  className="bg-purple60 text-[clamp(16px,2vw,18px)]  font-medium text-white py-3 rounded-md w-full"
                >
                  Send Your Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LetsConnect;
