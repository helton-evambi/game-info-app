import Hero from './Hero'
import Navbar from '../../layouts/Navbar'
import Footer from '../../layouts/Footer'
import SearchSection from './SearchSection'
import Sections from './Sections'

const Home = () => {
  return (
    <>
      <Navbar />
      <SearchSection />
      <Hero />
      <Sections />
      <Footer />
    </>
  )
}
export default Home
