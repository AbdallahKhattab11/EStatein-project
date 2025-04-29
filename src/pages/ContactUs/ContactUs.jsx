import DiscoverOurOfficeLocations from "../../components/DiscoverOurOfficeLocations/DiscoverOurOfficeLocations"
import GetInTouchWithEstateinHero from "../../components/GetInTouchWithEstateinHero/GetInTouchWithEstateinHero"
import LetsConnect from "../../components/LetsConnect/LetsConnect"

const ContactUs = () => {
  return (
    <div className="ContactUs bg-gray8 text-white ">
      <GetInTouchWithEstateinHero />
      <LetsConnect />
      <DiscoverOurOfficeLocations />
    </div>
  )
}

export default ContactUs