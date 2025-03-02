import DiscoverYourDreamProperty from "../../components/DiscoverYourDreamProperty/DiscoverYourDreamProperty"
import FeaturedProperties from "../../components/FeaturedProperties/FeaturedProperties"
import WhatOurClientsSay from "../../components/WhatOurClientsSay/WhatOurClientsSay"
import FrequentlyAskedQuestions from "../../components/FrequentlyAskedQuestions/FrequentlyAskedQuestions"
import StartYourRealEstateJourney from "../../components/StartYourRealEstateJourney/StartYourRealEstateJourney"
import Footer from "../../components/Footer/Footer"
import AllRightsSection from "../../components/AllRightsSection/AllRightsSection"

const Home = () => {
  return (
    <section className="Home">
      <DiscoverYourDreamProperty />
      <FeaturedProperties />
      <WhatOurClientsSay />
      <FrequentlyAskedQuestions />
      <StartYourRealEstateJourney />
      <Footer />
      <AllRightsSection />
    </section>
  )
}

export default Home