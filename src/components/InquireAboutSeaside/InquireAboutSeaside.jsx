import Titles from "../Titles/Titles";

const InquireAboutSeaside = () => {
  const h = "Inquire About Seaside Serenity Villa";
  const p =
    "Interested in this property? Fill out the form below, and our real estate experts will get back to you with more details, including scheduling a viewing and answering any questions you may have.";
  const inputsData = [
    {
      id: "input-1",
      type: "text",
      placeholder: "Enter First Name",
      name: "firstName",
      label: "First Name",
    },
    {
      id: "input-2",
      type: "text",
      placeholder: "Enter Last Name",
      name: "lastName",
      label: "Last Name",
    },
    {
      id: "input-3",
      type: "email",
      placeholder: "Enter Email",
      name: "email",
      label: "Email",
    },
    {
      id: "input-4",
      type: "tel",
      placeholder: "Enter Phone Number",
      name: "phone",
      label: "Phone",
    },
  ];

  return (
    <section className="bg-gray8 py-10 md:py-15">
      <div className="container px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="titles">
          <Titles h={h} p={p} />
        </div>
        <div className="form p-5 border border-gray15 rounded-xl">
          <form action="">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {inputsData.map((input) => {
                return (
                  <div className="input" key={input.id}>
                    <label
                      htmlFor={input.name}
                      className="text-white block text-[clamp(16px,2.5vw,20px)] font-medium mb-2.5"
                    >
                      {input.label}
                    </label>
                    <input
                      type={input.type}
                      placeholder={input.placeholder}
                      name={input.name}
                      id={input.name}
                      className="bg-gray10 border-1 border-gray15 rounded-md p-3 w-full text-gray60 text-[clamp(16px,2.5vw,20px)] font-medium outline-none tracking-wide"
                    />
                  </div>
                );
              })}
            </div>
            <div className="select my-5">
              <label
                htmlFor="select"
                className="text-white block text-[clamp(16px,2.5vw,20px)] font-medium mb-2.5"
              >
                {" "}
                Select Property
              </label>
              <select
                name="select"
                id="select"
                className="bg-gray10 border-1 border-gray15 rounded-md p-3 w-full text-white text-[clamp(14px,2.5vw,18px)] font-medium outline-none tracking-wide"
              >
                <option selected value="">
                  Seaside Serenity Villa, Malibu, California
                </option>
                <option value="">
                  Seaside Serenity Villa, Malibu, California
                </option>
                <option value="">
                  Seaside Serenity Villa, Malibu, California
                </option>
              </select>
            </div>
            <div className="Message my-5">
              <label
                htmlFor="message"
                className="text-white block text-[clamp(16px,2vw,20px)] font-medium mb-2.5"
              >
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                placeholder="Enter Your Message Here"
                id="message"
                className="bg-gray10 border-1 border-gray15 rounded-md p-3 w-full text-white text-[clamp(14px,2.5vw,18px)] font-medium outline-none tracking-wide"
              ></textarea>
            </div>
            <div className="checkbox my-5 flex items-center gap-2 lg:col-span-3">
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
            <button type="submit" onClick={(e) => {e.preventDefault()}} className="bg-purple60 cursor-pointer text-white text-[clamp(16px,2vw,20px)] font-medium rounded-md p-3 w-full">Send Your Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default InquireAboutSeaside;
