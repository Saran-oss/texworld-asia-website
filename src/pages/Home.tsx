import Hero from '../components/sections/Hero'
import Intro from '../components/sections/Intro'
import Products from '../components/sections/Products'
import Banner from '../components/sections/Banner'
import Brands from '../components/sections/Brands'
import Services from '../components/sections/Services'
import CeoMessage from '../components/sections/CeoMessage'
import FinalCta from '../components/sections/FinalCta'

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Products />
      <Banner />
      <Brands />
      <Services />
      <CeoMessage />
      <FinalCta />
    </>
  )
}
