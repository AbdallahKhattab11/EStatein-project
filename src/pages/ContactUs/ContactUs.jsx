import DiscoverOurOfficeLocations from "../../components/DiscoverOurOfficeLocations/DiscoverOurOfficeLocations"
import GetInTouchWithEstateinHero from "../../components/GetInTouchWithEstateinHero/GetInTouchWithEstateinHero"
import LetsConnect from "../../components/LetsConnect/LetsConnect"
import FinnalFooter from "../../components/FinnalFooter/FinnalFooter"
const ContactUs = () => {
  return (
    <div className="ContactUs bg-gray8 text-white ">
      <GetInTouchWithEstateinHero />
      <LetsConnect />
      <DiscoverOurOfficeLocations />
      <FinnalFooter />
    </div>
  )
}

export default ContactUs