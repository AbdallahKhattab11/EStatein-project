import DiscoverYourDreamProperty from "../../components/DiscoverYourDreamProperty/DiscoverYourDreamProperty"
import FeaturedProperties from "../../components/FeaturedProperties/FeaturedProperties"
import WhatOurClientsSay from "../../components/WhatOurClientsSay/WhatOurClientsSay"
import FrequentlyAskedQuestions from "../../components/FrequentlyAskedQuestions/FrequentlyAskedQuestions"
import StartYourRealEstateJourney from "../../components/StartYourRealEstateJourney/StartYourRealEstateJourney"

const Home = () => {
  return (
    <section className="Home">
      <DiscoverYourDreamProperty />
      <FeaturedProperties />
      <WhatOurClientsSay />
      <FrequentlyAskedQuestions />
      <StartYourRealEstateJourney />
    </section>
  )
}

export default Home