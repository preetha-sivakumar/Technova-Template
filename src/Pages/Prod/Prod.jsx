import React  from 'react'
import './Prod.css'

import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Banner2 from '../../components/Banner2/Banner2'
import ItemDisplay from '../../components/ItemDisplay/ItemDisplay'
import Footer from '../../components/Footer/Footer'


const Prod = (props) => {
  return (
    <div>
        <Navbar />
        <Banner2 />
        <ItemDisplay /> 
        <Footer />
    </div>
  )
}

export default Prod