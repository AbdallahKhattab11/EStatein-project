import Titles from "../Titles/Titles";
import valuationMastery from "/src/assets/icons/valuation-mastery.svg";
import strategicMarketing from "/src/assets/icons/strategic-marketing.svg";
import negotiationWizardry from "/src/assets/icons/negotiation-wizardry.svg";
import closingSuccess from "/src/assets/icons/closing-success.svg";
import AbstractDesignDiscoverYourDream from "/src/assets/svg/Abstract-Design-discover-your-dream.svg";

import WrapperLayout from "../WrapperLayout/WrapperLayout";

const UnlockPropertyValue = () => {
  const h = "Unlock Property Value";
  const p =
    "Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey";

  const wrapperData = [
    {
      id: "card-1",
      icon: valuationMastery,
      title: "Valuation Mastery",
      description:
        "Discover the true worth of your property with our expert valuation services.",
    },
    {
      id: "card-2",
      icon: strategicMarketing,
      title: "Strategic Marketing",
      description:
        "Selling a property requires more than just a listing; it demands a strategic marketing approach.",
    },
    {
      id: "card-3",
      icon: negotiationWizardry,
      title: "Negotiation Wizardry",
      description:
        "Negotiating the best deal is an art, and our negotiation experts are masters of it.",
    },
    {
      id: "card-4",
      icon: closingSuccess,
      title: "Closing Success",
      description:
        "A successful sale is not complete until the closing. We guide you through the intricate closing process.",
    },
  ];
  const customCard = {
    svg: AbstractDesignDiscoverYourDream,
    title: "Unlock the Value of Your Property Today",
    description:
      "Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset.",
  };

  return (
    <section className="UnlockPropertyValue py-10 md:py-15">
      <div className="container px-4">
        <div className="titles">
          <Titles h={h} p={p} />
        </div>
        <div className="wrapper mt-10">
          <WrapperLayout
            wrapperData={wrapperData}
            customCard={customCard}
          />
        </div>
      </div>
    </section>
  );
};

export default UnlockPropertyValue;
