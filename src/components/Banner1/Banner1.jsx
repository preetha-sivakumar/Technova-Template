import React from 'react'
import './Banner.css'
import about3 from '../../assets/team2.jpg'
const Banner1= () => {

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
    <div class="about containernav">
    <div class="prod-text">
        <h1>Our Services</h1>
        </div>
    </div>
    <div className="title-container">
        <div class="title" id="titlelink">
        <p>Supply- Installation- Testing</p>
        <h2>Plumbing, Sanitary & Gas Service</h2>

      </div> 
      <div className="banner1-container">
      {team.map((service, index) => (
        <div className={`banner1 ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
          <div className="banner1-left">
            <img src={service.image} alt={service.subtitle} className="servimg" />
          </div>
          <div className="banner1-right">
            <h3>{service.title}</h3>
            <h2>{service.subtitle}</h2>
            <p>{service.description1}</p>
            <p>{service.description2}</p>
          </div>
        </div>
      ))}
    </div>
      </div>
</>

  )
}

export default Banner1