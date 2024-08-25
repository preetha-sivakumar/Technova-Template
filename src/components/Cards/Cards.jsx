import React from 'react'
import './Cards.css'
import CardItem from './CardItem'


import prod1 from '../../assets/prod1.jpg'
import prod2 from '../../assets/prod2.jpg'
import prod3 from '../../assets/prod3.jpg'
import prod4 from '../../assets/prod4.jpg'
import prod5 from '../../assets/prod5.jpg'
import prod6 from '../../assets/prod6.jpg'
import prod7 from '../../assets/prod7.jpg'
import prod8 from '../../assets/prod8.jpg'

import arrow from '../../assets/white-arrow1.png'

const Cards = () => {
  return (
    <div className="cards">
        <div className="cards-title">

      
       
        <p>Our Products</p>
        <h2>What we Sell</h2> 
        </div>
        <div className="cards-container">
            <div className="cards-wrapper">
                <ul className="cards-items">
                    <CardItem 
                    src={prod1}
                    text="Aerating Foundation"
                    label="Label Group1"
                    />
                    <CardItem 
                    src={prod2}
                    text="Difused Aeration System"
                    label="Label"
                    />
                   
                   
                </ul>
                <ul className="cards-items">
                    <CardItem 
                    src={prod3}
                    text="Water Circulator"
                    label="Label"
                    />
                    <CardItem 
                    src={prod4}
                    text="Tech Air Compressors"
                    label="Label"
                    />
                     <CardItem 
                    src={prod5}
                    text="Water glow Lighting"
                    label="Label"
                    />
                    
                   
                </ul>
                <ul className="cards-items">
                    <CardItem 
                    src={prod6}
                    text="Accessories "
                    label="Label"
                    />
                    <CardItem 
                    src={prod7}
                    text="Pond Lake Aerators"
                    label="Label"
                    />
                    <CardItem 
                    src={prod8}
                    text="Solar Powered Aeration System"
                    label="Label"
                    />
                   
                </ul>
            </div>
            <button href="" class="btnserv">Explore More <img src={arrow} alt="" /></button>

        </div>
    </div>
  )
}

export default Cards