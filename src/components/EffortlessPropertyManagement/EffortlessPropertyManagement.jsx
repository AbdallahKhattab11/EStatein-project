import Titles from "../Titles/Titles";
import WrapperLayout from "../WrapperLayout/WrapperLayout";

import tenantHarmony from "../../assets/icons/tenant-harmony.svg";
import maintenanceEase from "../../assets/icons/maintenance-ease.svg";
import financialPeaceOfMind from "../../assets/icons/financial-peace-of-mind.svg";
import legalGuardian from "../../assets/icons/legal-guardian.svg";
import AbstractDesignDiscoverYourDream from "/src/assets/svg/Abstract-Design-discover-your-dream.svg";

const EffortlessPropertyManagement = () => {
  const h = "Effortless Property Management";
  const p =
    "Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership.";

  const wrapperData = [
    {
      id: "card-1",
      icon: tenantHarmony,
      title: "Tenant Harmony",
      description:
        "Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies.",
    },
    {
      id: "card-2",
      icon: maintenanceEase,
      title: "Maintenance Ease",
      description:
        "Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.",
    },
    {
      id: "card-3",
      icon: financialPeaceOfMind,
      title: "Financial Peace of Mind",
      description:
        "Managing property finances can be complex. Our financial experts take care of rent collection",
    },
    {
      id: "card-4",
      icon: legalGuardian,
      title: "Legal Guardian",
      description:
        "Stay compliant with property laws and regulations effortlessly.",
    },
  ];
  const customCard = {
    svg: AbstractDesignDiscoverYourDream,
    title: "Experience Effortless Property Management",
    description:
      "Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.",
  };

  return (
    <section className="bg-gray8 text-white py-10 md:py-15">
      <div className="container px-4">
        <div className="titles">
          <Titles h={h} p={p} />
        </div>
        <div className="wrapper mt-10">
          <WrapperLayout wrapperData={wrapperData} customCard={customCard} />
        </div>
      </div>
    </section>
  );
};

export default EffortlessPropertyManagement;
