import ImgSlides from "../../components/ImgSlides/ImgSlides";
import KeyFeaturesAndAmenities from "../../components/KeyFeaturesAndAmenities/KeyFeaturesAndAmenities";
import InquireAboutSeaside from "../../components/InquireAboutSeaside/InquireAboutSeaside";
import ComprehensivePricingDetails from "../../components/ComprehensivePricingDetails/ComprehensivePricingDetails";

const PropertyDetails = () => {
  return (
    <section className="bg-gray8 text-white h-screen">
      <ImgSlides />
      <KeyFeaturesAndAmenities />
      <InquireAboutSeaside />
      <ComprehensivePricingDetails />
    </section>
  )
}

export default PropertyDetails
