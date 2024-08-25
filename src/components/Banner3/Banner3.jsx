import React from 'react'
import './Banner3.css'
import about3 from '../../assets/team2.jpg'
const Banner3= () => {

    const team = [
        {
          title: "Diversified Set of Services",
          subtitle: "Why choose us for fire protection services?",
          description1: "In the event of a fire, the Fire Protection system ensures the safety of all personnel and the property by detecting, containing and extinguishing fires. We aim to provide an efficient and faultless Fire Protection system that will protect the lives of occupants and minimize damages to the property.",
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
        <p>Detection- Containing- Extinguish</p>
        <h2>Fire Protection Services</h2>

      </div> 
      <div className="banner3-container">
      {team.map((service, index) => (
        <div className={`banner3 ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
          <div className="banner3-left">
            <img src={service.image} alt={service.subtitle} className="servimg" />
          </div>
          <div className="banner3-right">
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

export default Banner3