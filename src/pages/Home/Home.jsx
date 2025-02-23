import DiscoverYourDreamProperty from "../../components/DiscoverYourDreamProperty/DiscoverYourDreamProperty"
import FeaturedProperties from "../../components/FeaturedProperties/FeaturedProperties"
import WhatOurClientsSay from "../../components/WhatOurClientsSay/WhatOurClientsSay"

const Home = () => {
  return (
    <section className="Home">
      <DiscoverYourDreamProperty />
      <FeaturedProperties />
      <WhatOurClientsSay />
    </section>
  )
}

export default Home