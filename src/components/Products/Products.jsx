import React from 'react'
import './Products.css'

import prod1 from '../../assets/prod1.jpg'
import prod2 from '../../assets/prod2.jpg'
import prod3 from '../../assets/prod3.jpg'
import prod4 from '../../assets/prod4.jpg'
import prod5 from '../../assets/prod5.jpg'
import prod6 from '../../assets/prod6.jpg'
import prod7 from '../../assets/prod7.jpg'
import prod8 from '../../assets/prod8.jpg'


import arrow from '../../assets/dark-arrow.png'
const Products = () => {
  return (
    <div className="prodbg">
    <div className="company-container">
    <div class="company" >
        <p>Our Products</p>
         <h2>What we Sell</h2> 
         
         <div className="products">
            <div className="product">
                <img src={prod1} alt="" />
                <div className="caption">
                    <a href=""> VR/AR Devices</a>
                </div>
            </div>
            <div className="product">
                <img src={prod2} alt="" />
                <div className="caption">
                    <a href=""> Wearable Devices</a>
                </div>
            </div>
            <div className="product">
                <img src={prod3} alt="" />
                <div className="caption">
                    <a href=""> Educational Courses</a>
                </div>
            </div>
         </div>
         </div>
         <button class="btnprod">Explore More <img src={arrow} alt="" /></button>
         </div>
         </div>
  )
}

export default Products