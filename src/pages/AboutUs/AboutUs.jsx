import MeetTheEstateinTeam from "../../components/MeetTheEstateinTeam/MeetTheEstateinTeam"
import NavigatingTheEstateinExperience from "../../components/NavigatingTheEstateinExperience/NavigatingTheEstateinExperience"
import OurAchievements from "../../components/OurAchievements/OurAchievements"
import OurJourney from "../../components/OurJourney/OurJourney"
import OurValuedClients from "../../components/OurValuedClients/OurValuedClients"
import OurValues from "../../components/OurValues/OurValues"


const AboutUs = () => {
  return (
    <section className="About-us">
      <OurJourney />
      <OurValues />
      <OurAchievements />
      <NavigatingTheEstateinExperience />
      <MeetTheEstateinTeam />
      <OurValuedClients />
    </section>
  )
}

export default AboutUs