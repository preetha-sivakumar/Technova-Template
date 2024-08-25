import React from 'react'
import './Plumbing.css'
import about3 from '../../assets/about3.png'
import PlumbingItem from './PlumbingItem';

import prod1 from '../../assets/prod1.jpg'
import prod2 from '../../assets/prod2.jpg'
import prod3 from '../../assets/prod3.jpg'
import prod4 from '../../assets/prod4.jpg'
import prod5 from '../../assets/prod5.jpg'
import prod6 from '../../assets/prod6.jpg'
import prod7 from '../../assets/prod7.jpg'
import prod8 from '../../assets/prod8.jpg'

import s1 from '../../assets/s1.jpg'
import s2 from '../../assets/s2.jpg'
import s3 from '../../assets/s3.jpg'
import s4 from '../../assets/s4.jpg'
import s5 from '../../assets/s5.png'
import s6 from '../../assets/s6.jpg'
import s7 from '../../assets/s7.jpg'
import s8 from '../../assets/s8.jpg'
import s9 from '../../assets/s9.jpg'
import s10 from '../../assets/s10.jpg'
import s11 from '../../assets/s11.jpg'
import s12 from '../../assets/s12.jpg'
import arrow from '../../assets/white-arrow1.png'
const Plumbing = () => {

    const team = [
        {
          title: "Diversified Set of Services",
          subtitle: "Why choose us for plumbing?",
          description1: "At M-Stars Engineering & Construction Pte Ltd, we supply, install and test pipes for plumbing, sanitary and gas services. With our highly-trained and certified team, quality work is always guaranteed.",
          description2: "It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          
          image: about3,
          
        },
        
        // Add more services as needed
      ];
  return (
    <>
   
    
    <div className="title-container">
        
   
   <div className="parallax"></div>
   <div className="par-text">
    <h3>Plumbing Services</h3>
    <br />
    <p>Our plumbing services include Design, Supply, Installation and Testing of Complete Plumbing System as per Regulations.</p>

   </div>
   
   <div className="parallax1"></div>
   <div className="par-text">
    <h3>Sanitary Services</h3>
    <br />
    <p>We provide Design, Supply, Installation and Testing of Complete Plumbing System as per Regulations.</p>

   </div>
   <div className="parallax2"></div>
   <div className="par-text">
    <h3>Gas Services</h3>
    <br />
    <p>Our gas services include Design, Supply, Installation and Testing of Complete Gas Piping System as per Regulations</p>

   </div>
   <div className="work">
    <h3>Our Works</h3>
   </div>
    <div className="cards-container">
            <div className="cards-wrapper">
                <ul className="cards-items">
                    <PlumbingItem
                    src={s1}
                    text="Booster Pump"
                    label="Label Group1"
                    />
                    <PlumbingItem 
                    src={s2}
                    text="Domestic Water Tank"
                    label="Label"
                    />
                   
                   
                </ul>
                <ul className="cards-items">
                    <PlumbingItem
                    src={s3}
                    text="Detention Sump Pump"
                    label="Label"
                    />
                    <PlumbingItem
                    src={s4}
                    text="Emergency Shower"
                    label="Label"
                    />
                     <PlumbingItem
                    src={s5}
                    text="Lab Area"
                    label="Label"
                    />
                    
                   
                </ul>
                <ul className="cards-items">
                    <PlumbingItem
                    src={s10}
                    text="Urnials"
                    label="Label"
                    />
                    <PlumbingItem
                    src={s11}
                    text="Pipe Jacking"
                    label="Label"
                    />
                     <PlumbingItem
                    src={s12}
                    text="Meter Chamber"
                    label="Label"
                    />
                    
                   
                </ul>
                <ul className="cards-items">
                    <PlumbingItem 
                    src={s6}
                    text="Valve Chamber "
                    label="Label"
                    />
                    <PlumbingItem 
                    src={s7}
                    text="Water Meter"
                    label="Label"
                    />
                    <PlumbingItem 
                    src={s8}
                    text="Water Heater"
                    label="Label"
                    />
                   
                </ul>
            </div>

        </div>
      </div>
     
</>

  )
}

export default Plumbing