import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Stats from '../../components/Stats/Stats'
import Title from '../../components/Title/Title'
import Services from '../../components/Services/Services'
import Products from '../../components/Products/Products'
import Testamonials from '../../components/Testamonials/Testamonials'
import Footer from '../../components/Footer/Footer'
import Welcome from '../../components/Welcome/Welcome'
import Cards from '../../components/Cards/Cards'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <Welcome />
      <Title />
      <Services />
      {/* <Products /> */}
      <Cards />
      <Testamonials />
      <Footer /> 
    </div>
  )
}

export default Home