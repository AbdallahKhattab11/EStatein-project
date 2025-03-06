import MeetTheEstateinTeam from "../../components/MeetTheEstateinTeam/MeetTheEstateinTeam"
import NavigatingTheEstateinExperience from "../../components/NavigatingTheEstateinExperience/NavigatingTheEstateinExperience"
import OurAchievements from "../../components/OurAchievements/OurAchievements"
import OurJourney from "../../components/OurJourney/OurJourney"
import OurValuedClients from "../../components/OurValuedClients/OurValuedClients"
import OurValues from "../../components/OurValues/OurValues"
import FinnalFooter from "../../components/FinnalFooter/FinnalFooter"
const AboutUs = () => {
  return (
    <section className="About-us">
      <OurJourney />
      <OurValues />
      <OurAchievements />
      <NavigatingTheEstateinExperience />
      <MeetTheEstateinTeam />
      <OurValuedClients />
      <FinnalFooter />
    </section>
  )
}

export default AboutUs