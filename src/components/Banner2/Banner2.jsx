import React from 'react'
import './Banner2.css'
import about3 from '../../assets/prod2.jpg'
const Banner2 = () => {

    const team = [
        {
          title: "Diversified Set of Products",
          subtitle: "Aeration Systems",
          description1: "We offer high quality Aerators and a variety of other water products that decorate or manage your water source. All our products are sourced from Kasco Marine, a trusted and affordable brand for Aerators.",
          description2: "It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          image: about3,
          
        },
        
        // Add more services as needed
      ];
  return (
    <>
    <div class="about containernav">
    <div class="prod-text">
        <h1>Our Products</h1>
        </div>
    </div>
    <div className="title-container">
        <div class="title" id="titlelink">
            {/* <p>Our Ideas</p> */}
              <h2>Products & Accessories </h2> 

      </div> 
      <div className="banner2-container">
      {team.map((service, index) => (
        <div className={`banner2 ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
          <div className="banner2-left">
            <img src={service.image} alt={service.subtitle} className="servimg" />
          </div>
          <div className="banner2-right">
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

export default Banner2