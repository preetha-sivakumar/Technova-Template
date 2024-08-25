import React from 'react'
import './Fire.css'
import about3 from '../../assets/about3.png'
import FireItem from './FireItem';


import s1 from '../../assets/f1.jpg'
import s2 from '../../assets/f2.jpg'
import s3 from '../../assets/f3.jpg'
import s4 from '../../assets/f4.jpg'

import arrow from '../../assets/white-arrow1.png'
const Fire = () => {

   
  return (
    
   
    
    <div className="title-container">
        
   
   <div className="parallax-fire"></div>
   
   
   <div className="work">
    <h3>Our Works</h3>
   </div>
    <div className="cards-container">
            <div className="cards-wrapper">
                <ul className="cards-items">
                    <FireItem
                    src={s1}
                    text="Fire Hydrant"
                    label="Label Group1"
                    />
                    <FireItem 
                    src={s2}
                    text="Fire Extinguishers"
                    label="Label"
                    />
                   
                   
                </ul>
                <ul className="cards-items">
                    <FireItem
                    src={s3}
                    text="Dry Riser System"
                    label="Label"
                    />
                    <FireItem
                    src={s4}
                    text="Fire Hose Reel"
                    label="Label"
                    />
                     
                    
                   
                </ul>
               
                
            </div>

        </div>
      </div>
     


  )
}

export default Fire