import OurAchievements from "../../components/OurAchievements/OurAchievements"
import OurJourney from "../../components/OurJourney/OurJourney"
import OurValues from "../../components/OurValues/OurValues"


const AboutUs = () => {
  return (
    <section className="About-us">
      <OurJourney />
      <OurValues />
      <OurAchievements />
    </section>
  )
}

export default AboutUs