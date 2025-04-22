import Titles from "../Titles/Titles";

const ComprehensivePricingDetails = () => {
  const h = "Comprehensive Pricing Details";
  const p =
    "At Estatein, transparency is key. We want you to have a clear understanding of all costs associated with your property investment. Below, we break down the pricing for Seaside Serenity Villa to help you make an informed decision";
  return (
    <section className="bg-gray8 py-10 ">
      <div className="container px-4">
        <div className="titles mb-10">
          <Titles h={h} p={p} />
        </div>
        <div className="">
          <div className="note bg-gray10 p-5 border border-gray15 rounded-xl md:flex md:items-center md:gap-5">
            <h3 className="text-white text-[clamp(18px,2vw,24px)] font-semibold mb-5 md:mb-0 pb-5 border-b md:border-b-0  md:pb-0 border-gray15">
              Note
            </h3>
            <p className="text-gray60 text-[clamp(14px,2vw,16px)] font-medium leading-7 md:pl-5 md:border-l border-gray15">
              The figures provided above are estimates and may vary depending on
              the property, location, and individual circumstances.
            </p>
          </div>
          <div className="pricing mt-10 flex flex-col gap-5 lg:flex-row lg:gap-10">
            <div className="listing-pricing">
              <p className="text-gray60 text-[clamp(16px,2vw,20px)] font-medium mb-2.5 text-nowrap">
                Listing Price
              </p>
              <h3 className="text-white text-[clamp(20px,2vw,30px)] font-semibold">
                $1,250,000
              </h3>
            </div>
            <div className="pricing-details  flex flex-col gap-10">
              <div className="box p-5 border border-gray15 rounded-xl">
                <div className="heading flex items-center justify-between border-b border-gray15 pb-5">
                  <h4 className="text-white text-[clamp(18px,2vw,24px)] font-semibold">
                    Additional Fees
                  </h4>
                  <button
                    type="button"
                    className="text-white p-3.5 bg-gray10 text-[clamp(14px,2vw,16px)] font-medium border border-gray15 rounded-lg cursor-pointer"
                  >
                    Learn More
                  </button>
                </div>
                <div className="con grid grid-cols-1 lg:grid-cols-2">
                  <div className="property-transfer-tax border-b border-gray15 py-5 md:px-5">
                    <p className="text-gray60 text-[clamp(14px,2vw,16px)] font-medium mb-2.5">
                      Property Transfer Tax
                    </p>
                    <div className="flex items-center gap-2.5">
                      <h4 className="text-white text-[clamp(18px,2vw,24px)] font-semibold">
                        $25,000
                      </h4>
                      <p className="text-gray60 bg-gray10 p-2 text-[clamp(14px,2vw,16px)] font-medium leading-6 rounded-lg">
                        Based on the sale price and local regulations
                      </p>
                    </div>
                  </div>
                  <div className="legal-fees border-b border-gray15 py-5 md:px-5">
                    <div className="lg:border-l lg:border-gray15 lg:pl-5">
                      <p className="text-gray60 text-[clamp(14px,2vw,16px)] font-medium mb-2.5">
                        Legal Fees
                      </p>
                      <div className="flex items-center gap-2.5">
                        <h4 className="text-white text-[clamp(18px,2vw,24px)] font-semibold">
                          $3,000
                        </h4>
                        <p className="text-gray60 bg-gray10 p-2 text-[clamp(14px,2vw,16px)] font-medium leading-6 rounded-lg">
                          Approximate cost for legal services, including title
                          transfer
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="home-inspection border-b border-gray15 py-5 md:px-5">
                    <p className="text-gray60 text-[clamp(14px,2vw,16px)] font-medium mb-2.5">
                      Home Inspection
                    </p>
                    <div className="flex items-center gap-2.5">
                      <h4 className="text-white text-[clamp(18px,2vw,24px)] font-semibold">
                        $500
                      </h4>
                      <p className="text-gray60 bg-gray10 p-2 text-[clamp(14px,2vw,16px)] font-medium leading-6 rounded-lg">
                        Recommended for due diligence
                      </p>
                    </div>
                  </div>
                  <div className="property-insurance border-b border-gray15 py-5 md:px-5">
                    <div className="lg:border-l lg:border-gray15 lg:pl-5">
                      <p className="text-gray60 text-[clamp(14px,2vw,16px)] font-medium mb-2.5">
                        Property Insurance
                      </p>
                      <div className="flex items-center gap-2.5">
                        <h4 className="text-white text-[clamp(18px,2vw,24px)] font-semibold">
                          $1,200
                        </h4>
                        <p className="text-gray60 bg-gray10 p-2 text-[clamp(14px,2vw,16px)] font-medium leading-6 rounded-lg">
                          Annual cost for comprehensive property insurance
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mortgage-fees py-5 md:px-5 lg:col-span-2">
                    <p className="text-gray60 text-[clamp(14px,2vw,16px)] font-medium mb-2.5">
                      Mortgage Fees
                    </p>
                    <div className="flex items-center gap-2.5">
                      <h4 className="text-white text-[clamp(18px,2vw,24px)] font-semibold">
                        Varies
                      </h4>
                      <p className="text-gray60 bg-gray10 p-2 text-[clamp(14px,2vw,16px)] font-medium leading-6 rounded-lg">
                        If applicable, consult with your lender for specific
                        details
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box p-5 border border-gray15 rounded-xl">
                <div className="heading flex items-center justify-between border-b border-gray15 pb-5">
                  <h4 className="text-white text-[clamp(18px,2vw,24px)] font-semibold">
                    Monthly Costs
                  </h4>
                  <button
                    type="button"
                    className="text-white p-3.5 bg-gray10 text-[clamp(14px,2vw,16px)] font-medium border border-gray15 rounded-lg cursor-pointer"
                  >
                    Learn More
                  </button>
                </div>
                <div className="con grid grid-cols-1 ">
                  <div className="property-tax border-b border-gray15 py-5 md:px-5">
                    <p className="text-gray60 text-[clamp(14px,2vw,16px)] font-medium mb-2.5">
                      Property Tax
                    </p>
                    <div className="flex items-center gap-2.5">
                      <h4 className="text-white text-[clamp(18px,2vw,24px)] font-semibold">
                        $1,250
                      </h4>
                      <p className="text-gray60 bg-gray10 p-2 text-[clamp(14px,2vw,16px)] font-medium leading-6 rounded-lg">
                        Approximate monthly property tax based on the sale price
                        and local rates
                      </p>
                    </div>
                  </div>
                  <div className="homeowners-association py-5 md:px-5">
                    <div className="">
                      <p className="text-gray60 text-[clamp(14px,2vw,16px)] font-medium mb-2.5">
                        Homeowners&apos; Association Fees
                      </p>
                      <div className="flex items-center gap-2.5">
                        <h4 className="text-white text-[clamp(18px,2vw,24px)] font-semibold">
                          $300
                        </h4>
                        <p className="text-gray60 bg-gray10 p-2 text-[clamp(14px,2vw,16px)] font-medium leading-6 rounded-lg">
                          Monthly fee for common area maintenance and security
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box p-5 border border-gray15 rounded-xl">
                <div className="heading flex items-center justify-between border-b border-gray15 pb-5">
                  <h4 className="text-white text-[clamp(18px,2vw,24px)] font-semibold">
                    Total Initial Costs
                  </h4>
                  <button
                    type="button"
                    className="text-white p-3.5 bg-gray10 text-[clamp(14px,2vw,16px)] font-medium border border-gray15 rounded-lg cursor-pointer"
                  >
                    Learn More
                  </button>
                </div>
                <div className="con grid grid-cols-1 lg:grid-cols-2">
                  <div className="listing-price border-b border-gray15 py-5 md:px-5">
                    <p className="text-gray60 text-[clamp(14px,2vw,16px)] font-medium mb-2.5">
                      Listing Price
                    </p>
                    <div className="flex items-center gap-2.5">
                      <h4 className="text-white text-[clamp(18px,2vw,24px)] font-semibold">
                        $1,250,000
                      </h4>
                    </div>
                  </div>
                  <div className="additional-fees border-b border-gray15 py-5 md:px-5">
                    <div className="lg:border-l lg:border-gray15 lg:pl-5">
                      <p className="text-gray60 text-[clamp(14px,2vw,16px)] font-medium mb-2.5">
                        Additional Fees
                      </p>
                      <div className="flex items-center gap-2.5">
                        <h4 className="text-white text-[clamp(18px,2vw,24px)] font-semibold">
                          $29,700
                        </h4>
                        <p className="text-gray60 bg-gray10 p-2 text-[clamp(14px,2vw,16px)] font-medium leading-6 rounded-lg">
                          Property transfer tax, legal fees, inspection, insurance
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="down-payment border-b lg:border-b-0 border-gray15 py-5 md:px-5">
                    <div className="">
                      <p className="text-gray60 text-[clamp(14px,2vw,16px)] font-medium mb-2.5">
                        Down Payment
                      </p>
                      <div className="flex items-center gap-2.5">
                        <h4 className="text-white text-[clamp(18px,2vw,24px)] font-semibold">
                          $250,000
                        </h4>
                        <p className="text-gray60 bg-gray10 p-2 text-[clamp(14px,2vw,16px)] font-medium leading-6 rounded-lg">
                          20%
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mortgage-amount py-5 md:px-5">
                    <div className="lg:border-l lg:border-gray15 lg:pl-5">
                      <p className="text-gray60 text-[clamp(14px,2vw,16px)] font-medium mb-2.5">
                        Mortgage Amount
                      </p>
                      <div className="flex items-center gap-2.5">
                        <h4 className="text-white text-[clamp(18px,2vw,24px)] font-semibold">
                          $1,000,000
                        </h4>
                        <p className="text-gray60 bg-gray10 p-2 text-[clamp(14px,2vw,16px)] font-medium leading-6 rounded-lg">
                          If applicable
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box p-5 border border-gray15 rounded-xl">
                <div className="heading flex items-center justify-between border-b border-gray15 pb-5">
                  <h4 className="text-white text-[clamp(18px,2vw,24px)] font-semibold">
                    Monthly Expenses
                  </h4>
                  <button
                    type="button"
                    className="text-white p-3.5 bg-gray10 text-[clamp(14px,2vw,16px)] font-medium border border-gray15 rounded-lg cursor-pointer"
                  >
                    Learn More
                  </button>
                </div>
                <div className="con grid grid-cols-1 lg:grid-cols-2">
                  <div className="property-taxes border-b border-gray15 py-5 md:px-5">
                    <p className="text-gray60 text-[clamp(14px,2vw,16px)] font-medium mb-2.5">
                      Property Taxes
                    </p>
                    <div className="flex items-center gap-2.5">
                      <h4 className="text-white text-[clamp(18px,2vw,24px)] font-semibold">
                        $1,250
                      </h4>
                    </div>
                  </div>
                  <div className="home-owners-association border-b border-gray15 py-5 md:px-5">
                    <div className="lg:border-l lg:border-gray15 lg:pl-5">
                      <p className="text-gray60 text-[clamp(14px,2vw,16px)] font-medium mb-2.5">
                        Homeowners Association Fees
                      </p>
                      <div className="flex items-center gap-2.5">
                        <h4 className="text-white text-[clamp(18px,2vw,24px)] font-semibold">
                          $300
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="mortgage-payment border-b lg:border-b-0 border-gray15 py-5 md:px-5">
                    <div className="">
                      <p className="text-gray60 text-[clamp(14px,2vw,16px)] font-medium mb-2.5">
                        Mortgage Payment
                      </p>
                      <div className="flex items-center gap-2.5">
                        <h4 className="text-white text-[clamp(18px,1.5vw,20px)] font-medium leading-6">
                          Varies based on terms and interest rate
                        </h4>
                        <p className="text-gray60 text-nowrap bg-gray10 p-2 text-[clamp(14px,2vw,16px)] font-medium leading-6 rounded-lg">
                          if applicable
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="property-insurance py-5 md:px-5">
                    <div className="lg:border-l lg:border-gray15 lg:pl-5">
                      <p className="text-gray60 text-[clamp(14px,2vw,16px)] font-medium mb-2.5">
                        Property Insurance
                      </p>
                      <div className="flex items-center gap-2.5">
                        <h4 className="text-white text-[clamp(18px,2vw,24px)] font-semibold">
                          $100
                        </h4>
                        <p className="text-gray60 bg-gray10 p-2 text-[clamp(14px,2vw,16px)] font-medium leading-6 rounded-lg">
                          Approximate monthly cost
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComprehensivePricingDetails;
